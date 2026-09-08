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

  it("counts tiles from the level, not from the rounded level scale", () => {
    // a reduced level whose height rounds down: scale * full height is 48.6, the level is 48
    const source = Object.create(GeoTIFFTileSource.prototype);
    source.levels = [
      { width: 100, height: 48, tileWidth: 48, tileHeight: 48 },
      { width: 1000, height: 486, tileWidth: 48, tileHeight: 48 },
    ];
    source.minLevel = 0;
    source.maxLevel = 1;
    source.dimensions = new OpenSeadragon.Point(1000, 486);

    // the inherited implementation returns 2 rows here, one more than the level holds
    expect(OpenSeadragon.TileSource.prototype.getNumTiles.call(source, 0).y).toBe(2);
    expect(source.getNumTiles(0)).toEqual(new OpenSeadragon.Point(3, 1));
    expect(source.getNumTiles(1)).toEqual(new OpenSeadragon.Point(21, 11));
  });

  it("uses the default tile size for strip-stored levels", () => {
    const stripped = mockPage(1000, 800);
    stripped.getTileWidth = () => 1000; // full width
    stripped.getTileHeight = () => 16; // RowsPerStrip

    const tiled = mockPage(500, 400);
    tiled.fileDirectory.TileWidth = 512;
    tiled.fileDirectory.TileLength = 512;
    tiled.getTileWidth = () => 512;
    tiled.getTileHeight = () => 512;

    const source = Object.create(GeoTIFFTileSource.prototype);
    source.GeoTIFFImages = [stripped, tiled];
    source.options = {};
    source._tileSize = 256;
    source.setupComplete = () => {};
    source.setupLevels();

    const byWidth = Object.fromEntries(source.levels.map((level) => [level.width, level]));
    expect(byWidth[1000].tileWidth).toBe(256);
    expect(byWidth[1000].tileHeight).toBe(256);
    expect(byWidth[500].tileWidth).toBe(512);
    expect(byWidth[500].tileHeight).toBe(512);
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
