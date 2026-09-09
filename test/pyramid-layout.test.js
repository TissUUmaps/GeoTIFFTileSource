import { describe, it, expect, beforeAll } from "vitest";
import OpenSeadragon from "openseadragon";
import { enableGeoTIFFTileSource } from "../src/main.js";

beforeAll(() => {
  enableGeoTIFFTileSource(OpenSeadragon);
});

/**
 * @returns {*} minimal GeoTIFFImage-like object with a geotiff.js 3 style file directory:
 * inline tags can be read synchronously, deferred ones only through loadValue()
 */
function mockPage(w, h, imageDescription, { inline = {}, deferred = {} } = {}) {
  const inlineTags = { PhotometricInterpretation: 1, ...inline };
  const deferredTags = { ImageDescription: imageDescription ?? "", ...deferred };
  return {
    getWidth: () => w,
    getHeight: () => h,
    getSamplesPerPixel: () => inlineTags.SamplesPerPixel ?? 1,
    getFileDirectory: () => ({
      hasTag: (name) => name in inlineTags || name in deferredTags,
      getValue(name) {
        if (name in deferredTags) throw new Error(`Field '${name}' is deferred`);
        return inlineTags[name];
      },
      loadValue: async (name) => inlineTags[name] ?? deferredTags[name],
      toObject: () => ({ ...inlineTags }),
    }),
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

  it("detects SubIFD pyramids without loading the deferred offsets", async () => {
    const plain = [mockPage(1000, 800, "")];
    expect((await GeoTIFFTileSource.resolveLayout({}, plain, {})).strategy).toBe("single");

    const withSubIFDs = [mockPage(1000, 800, "", { deferred: { SubIFDs: [4096, 8192] } })];
    // SubIFD pyramids cannot be read, so the layout falls back to the top-level IFDs
    expect((await GeoTIFFTileSource.resolveLayout({}, withSubIFDs, {})).strategy).toBe("ifd");
  });

  it("reads tile metadata through the geotiff.js 3 directory API", async () => {
    // BitsPerSample and SampleFormat are eager, ColorMap and Software are deferred
    const image = mockPage(512, 512, "", {
      inline: {
        SamplesPerPixel: 3,
        BitsPerSample: new Uint16Array([16, 16, 16]),
        SampleFormat: new Uint16Array([1, 1, 1]),
        TileWidth: 256,
        TileLength: 256,
      },
      deferred: { Software: "libtiff", ColorMap: new Uint16Array([0, 1, 2]) },
    });
    image.readRasters = async () => [1, 2, 3].map(() => new Uint16Array(4));

    expect(GeoTIFFTileSource.getGeoTiffFileKey(image)).toBe("512|512|256|256|1.000000");

    const source = Object.create(GeoTIFFTileSource.prototype);
    source.options = {};
    source._pool = null;
    source.channel = null;
    const level = { image, tileWidth: 2, tileHeight: 2, scaleFactor: 1 };
    const raster = await source.regionToTiffRaster(level, 0, 0);

    expect(raster.getType()).toBe("tiffRaster");
    expect(raster.samplesPerPixel).toBe(3);
    expect(raster.bitsPerSample).toEqual([16, 16, 16]);
    expect(raster.sampleFormat).toEqual([1, 1, 1]);
    expect(raster.photometricInterpretation).toBe(1);
    expect(raster.colorMap).toEqual(new Uint16Array([0, 1, 2]));
    expect(raster.fileDirectory.TileWidth).toBe(256);
  });

  it("isSvsStyleCompanionPage matches macro/label line (case-insensitive)", async () => {
    expect(
      await GeoTIFFTileSource.isSvsStyleCompanionPage(
        mockPage(10, 10, "x\nMACRO")
      )
    ).toBe(true);
    expect(
      await GeoTIFFTileSource.isSvsStyleCompanionPage(
        mockPage(10, 10, "x\nLabel")
      )
    ).toBe(true);
    expect(
      await GeoTIFFTileSource.isSvsStyleCompanionPage(
        mockPage(10, 10, "x\nbaseline")
      )
    ).toBe(false);
  });
});
