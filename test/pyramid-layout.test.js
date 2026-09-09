import { describe, it, expect, beforeAll } from "vitest";
import OpenSeadragon from "openseadragon";
import { enableGeoTIFFTileSource } from "../src/main.js";

beforeAll(() => {
  enableGeoTIFFTileSource(OpenSeadragon);
});

/** @returns {*} minimal GeoTIFFImage-like object */
function mockPage(w, h, imageDescription) {
  return {
    getWidth: () => w,
    getHeight: () => h,
    fileDirectory: {
      ImageDescription: imageDescription ?? "",
      PhotometricInterpretation: 1,
    },
  };
}

describe("GeoTIFFTileSource layout (pyramid + SVS companions)", () => {
  /** @type {typeof OpenSeadragon.GeoTIFFTileSource} */
  let GeoTIFFTileSource;

  beforeAll(() => {
    GeoTIFFTileSource = OpenSeadragon.GeoTIFFTileSource;
  });

  it("excludes Aperio macro/label from IFD pyramid detection", async () => {
    const mainPyramid = [
      mockPage(4000, 3000, "main\nbaseline"),
      mockPage(2000, 1500, "main\nlevel1"),
      mockPage(1000, 750, "main\nlevel2"),
    ];
    const macro = mockPage(1280, 960, "macro\nmacro");
    const mixed = [...mainPyramid, macro];

    const layout = await GeoTIFFTileSource.resolveLayout({}, mixed, {});
    expect(layout.strategy).toBe("ifd");
    expect(layout.ifdLevelsLargestToSmallest.length).toBe(3);

    const levels = await GeoTIFFTileSource.buildLevelImages({}, layout, "test");
    expect(levels.length).toBe(3);
    expect(levels.map((im) => im.getWidth())).toEqual([1000, 2000, 4000]);
  });

  it("uses full IFD list when all pages form a pyramid", async () => {
    const pages = [
      mockPage(800, 600, ""),
      mockPage(400, 300, ""),
      mockPage(200, 150, ""),
    ];
    const layout = await GeoTIFFTileSource.resolveLayout({}, pages, {});
    expect(layout.strategy).toBe("ifd");
    expect(layout.ifdLevelsLargestToSmallest.length).toBe(3);
  });

  it("accepts small-level rounding drift via common-scale check (e.g. 34000x24014 -> 66x46)", async () => {
    const pages = [
      mockPage(34000, 24014, "main\nL0"),
      mockPage(17000, 12007, "main\nL1"),
      mockPage(8500, 6003, "main\nL2"),
      mockPage(4250, 3001, "main\nL3"),
      mockPage(2125, 1500, "main\nL4"),
      mockPage(1062, 750, "main\nL5"),
      mockPage(531, 375, "main\nL6"),
      mockPage(265, 187, "main\nL7"),
      mockPage(132, 93, "main\nL8"),
      mockPage(66, 46, "main\nL9"),
    ];

    const layout = await GeoTIFFTileSource.resolveLayout({}, pages, {});
    expect(layout.strategy).toBe("ifd");

    const levels = await GeoTIFFTileSource.buildLevelImages({}, layout, "test");
    expect(levels.map((im) => im.getWidth())).toEqual([
      66, 132, 265, 531, 1062, 2125, 4250, 8500, 17000, 34000,
    ]);
  });

  it("rejects decreasing sizes that cannot share a common scale", async () => {
    const pages = [
      mockPage(4000, 3000, "main\nL0"),
      mockPage(2000, 1500, "main\nL1"),
      // width matches 4x downsample but height is far off any plausible rounding/crop at t=1
      mockPage(1000, 900, "main\nbad"),
    ];
    const layout = await GeoTIFFTileSource.resolveLayout({}, pages, {});
    expect(layout.strategy).toBe("single");
  });

  it("hints.layout.prefer stack forces single when multiple planes and IFD pyramid", async () => {
    const a = mockPage(1000, 1000, "p0\na");
    const b = mockPage(1000, 1000, "p1\nb");
    const small = mockPage(500, 500, "p2\nsm");
    const set = [a, b, small];

    const layoutPyramid = await GeoTIFFTileSource.resolveLayout({}, set, {});
    expect(layoutPyramid.strategy).toBe("ifd");

    const layoutStack = await GeoTIFFTileSource.resolveLayout({}, set, {
      layout: { prefer: "stack" },
    });
    expect(layoutStack.strategy).toBe("single");
    const levels = await GeoTIFFTileSource.buildLevelImages({}, layoutStack, "test");
    expect(levels.length).toBe(1);
  });

  it("copies a raster's bands when OpenSeadragon duplicates a tile", async () => {
    const { TiffRaster } = OpenSeadragon.RawTiffPlugin;
    const raster = new TiffRaster({
      width: 2, height: 1, bands: [new Uint8Array([1, 2])], samplesPerPixel: 1, bitsPerSample: [8],
    });

    const copy = await OpenSeadragon.converter.copy({}, raster, "tiffRaster");
    expect(copy).not.toBe(raster);
    expect(copy.bands[0]).not.toBe(raster.bands[0]);
    expect(copy.bands[0]).toEqual(raster.bands[0]);
    expect(copy.bitsPerSample).toEqual([8]);
  });

  it("hands out the raster itself when copies are opted out", () => {
    // a fresh namespace, so that the plugin installs again and its edges can be captured
    const learned = {};
    const osd = Object.create(OpenSeadragon);
    osd.RawTiffPlugin = undefined;
    osd.RawTiffPluginShared = undefined;
    osd.converter = { learn: (from, to, callback) => { learned[`${from}>${to}`] = callback; } };
    enableGeoTIFFTileSource(osd, { copyRasters: false });

    const raster = new osd.RawTiffPlugin.TiffRaster({
      width: 2, height: 1, bands: [new Uint8Array([1, 2])], samplesPerPixel: 1, bitsPerSample: [8],
    });
    expect(learned["tiffRaster>tiffRaster"]({}, raster)).toBe(raster);
  });

  it("isSvsStyleCompanionPage matches macro/label line (case-insensitive)", () => {
    expect(
      GeoTIFFTileSource.isSvsStyleCompanionPage(
        mockPage(10, 10, "x\nMACRO")
      )
    ).toBe(true);
    expect(
      GeoTIFFTileSource.isSvsStyleCompanionPage(
        mockPage(10, 10, "x\nLabel")
      )
    ).toBe(true);
    expect(
      GeoTIFFTileSource.isSvsStyleCompanionPage(
        mockPage(10, 10, "x\nbaseline")
      )
    ).toBe(false);
  });
});
