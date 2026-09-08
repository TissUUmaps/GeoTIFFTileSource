var Ut = Object.defineProperty;
var Lt = (i, e, t) => e in i ? Ut(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var Je = (i, e, t) => Lt(i, typeof e != "symbol" ? e + "" : e, t);
function z(i) {
  return (e, ...t) => Mt(i, e, t);
}
function be(i, e) {
  return z(
    It(
      i,
      e
    ).get
  );
}
const {
  apply: Mt,
  getOwnPropertyDescriptor: It,
  getPrototypeOf: Qe,
  ownKeys: Ot
} = Reflect, {
  iterator: Ge,
  toStringTag: Et
} = Symbol, jt = Object, {
  create: Ue,
  defineProperty: _t
} = jt, qt = Array, $t = qt.prototype, at = $t[Ge], ei = z(at), ht = ArrayBuffer, ti = ht.prototype;
be(ti, "byteLength");
const nt = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : null;
nt && be(nt.prototype, "byteLength");
const Ct = Qe(Uint8Array);
Ct.from;
const M = Ct.prototype;
M[Ge];
z(M.keys);
z(
  M.values
);
z(
  M.entries
);
z(M.set);
z(
  M.reverse
);
z(M.fill);
z(
  M.copyWithin
);
z(M.sort);
z(M.slice);
z(
  M.subarray
);
be(
  M,
  "buffer"
);
be(
  M,
  "byteOffset"
);
be(
  M,
  "length"
);
be(
  M,
  Et
);
const ii = Uint8Array, dt = Uint16Array, Le = Uint32Array, si = Float32Array, ye = Qe([][Ge]()), mt = z(ye.next), ni = z(function* () {
}().next), oi = Qe(ye), gi = DataView.prototype, ri = z(
  gi.getUint16
), Me = WeakMap, ut = Me.prototype, bt = z(ut.get), li = z(ut.set), At = new Me(), ci = Ue(null, {
  next: {
    value: function() {
      const e = bt(At, this);
      return mt(e);
    }
  },
  [Ge]: {
    value: function() {
      return this;
    }
  }
});
function Ii(i) {
  if (i[Ge] === at && ye.next === mt)
    return i;
  const e = Ue(ci);
  return li(At, e, ei(i)), e;
}
const ai = new Me(), hi = Ue(oi, {
  next: {
    value: function() {
      const e = bt(ai, this);
      return ni(e);
    },
    writable: !0,
    configurable: !0
  }
});
for (const i of Ot(ye))
  i !== "next" && _t(hi, i, It(ye, i));
const ft = new ht(4), Ci = new si(ft), di = new Le(ft), ee = new dt(512), te = new ii(512);
for (let i = 0; i < 256; ++i) {
  const e = i - 127;
  e < -24 ? (ee[i] = 0, ee[i | 256] = 32768, te[i] = 24, te[i | 256] = 24) : e < -14 ? (ee[i] = 1024 >> -e - 14, ee[i | 256] = 1024 >> -e - 14 | 32768, te[i] = -e - 1, te[i | 256] = -e - 1) : e <= 15 ? (ee[i] = e + 15 << 10, ee[i | 256] = e + 15 << 10 | 32768, te[i] = 13, te[i | 256] = 13) : e < 128 ? (ee[i] = 31744, ee[i | 256] = 64512, te[i] = 24, te[i | 256] = 24) : (ee[i] = 31744, ee[i | 256] = 64512, te[i] = 13, te[i | 256] = 13);
}
const Oe = new Le(2048);
for (let i = 1; i < 1024; ++i) {
  let e = i << 13, t = 0;
  for (; !(e & 8388608); )
    e <<= 1, t -= 8388608;
  e &= -8388609, t += 947912704, Oe[i] = e | t;
}
for (let i = 1024; i < 2048; ++i)
  Oe[i] = 939524096 + (i - 1024 << 13);
const Ae = new Le(64);
for (let i = 1; i < 31; ++i)
  Ae[i] = i << 23;
Ae[31] = 1199570944;
Ae[32] = 2147483648;
for (let i = 33; i < 63; ++i)
  Ae[i] = 2147483648 + (i - 32 << 23);
Ae[63] = 3347054592;
const yt = new dt(64);
for (let i = 1; i < 64; ++i)
  i !== 32 && (yt[i] = 1024);
function mi(i) {
  const e = i >> 10;
  return di[0] = Oe[yt[e] + (i & 1023)] + Ae[e], Ci[0];
}
function Gt(i, e, ...t) {
  return mi(
    ri(i, e, ...Ii(t))
  );
}
function Zt(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Ee = { exports: {} };
function Bt(i, e, t) {
  const s = t && t.debug || !1;
  s && console.log("[xml-utils] getting " + e + " in " + i);
  const n = typeof i == "object" ? i.outer : i, o = n.slice(0, n.indexOf(">") + 1), r = ['"', "'"];
  for (let g = 0; g < r.length; g++) {
    const c = r[g], I = e + "\\=" + c + "([^" + c + "]*)" + c;
    s && console.log("[xml-utils] pattern:", I);
    const C = new RegExp(I).exec(o);
    if (s && console.log("[xml-utils] match:", C), C) return C[1];
  }
}
Ee.exports = Bt;
Ee.exports.default = Bt;
var ui = Ee.exports;
const Ne = /* @__PURE__ */ Zt(ui);
var je = { exports: {} }, _e = { exports: {} }, qe = { exports: {} };
function pt(i, e, t) {
  const n = new RegExp(e).exec(i.slice(t));
  return n ? t + n.index : -1;
}
qe.exports = pt;
qe.exports.default = pt;
var bi = qe.exports, $e = { exports: {} };
function wt(i, e, t) {
  const n = new RegExp(e).exec(i.slice(t));
  return n ? t + n.index + n[0].length - 1 : -1;
}
$e.exports = wt;
$e.exports.default = wt;
var Ai = $e.exports, et = { exports: {} };
function Wt(i, e) {
  const t = new RegExp(e, "g"), s = i.match(t);
  return s ? s.length : 0;
}
et.exports = Wt;
et.exports.default = Wt;
var fi = et.exports;
const yi = bi, Ke = Ai, ot = fi;
function Yt(i, e, t) {
  const s = t && t.debug || !1, n = !(t && typeof t.nested === !1), o = t && t.startIndex || 0;
  s && console.log("[xml-utils] starting findTagByName with", e, " and ", t);
  const r = yi(i, `<${e}[ 
>/]`, o);
  if (s && console.log("[xml-utils] start:", r), r === -1) return;
  const g = i.slice(r + e.length);
  let c = Ke(g, "^[^<]*[ /]>", 0);
  const I = c !== -1 && g[c - 1] === "/";
  if (s && console.log("[xml-utils] selfClosing:", I), I === !1)
    if (n) {
      let a = 0, m = 1, u = 0;
      for (; (c = Ke(g, "[ /]" + e + ">", a)) !== -1; ) {
        const A = g.substring(a, c + 1);
        if (m += ot(A, "<" + e + `[ 
	>]`), u += ot(A, "</" + e + ">"), u >= m) break;
        a = c;
      }
    } else
      c = Ke(g, "[ /]" + e + ">", 0);
  const h = r + e.length + c + 1;
  if (s && console.log("[xml-utils] end:", h), h === -1) return;
  const C = i.slice(r, h);
  let l;
  return I ? l = null : l = C.slice(C.indexOf(">") + 1, C.lastIndexOf("<")), { inner: l, outer: C, start: r, end: h };
}
_e.exports = Yt;
_e.exports.default = Yt;
var Gi = _e.exports;
const Zi = Gi;
function Vt(i, e, t) {
  const s = [], n = t && t.debug || !1, o = t && typeof t.nested == "boolean" ? t.nested : !0;
  let r = t && t.startIndex || 0, g;
  for (; g = Zi(i, e, { debug: n, startIndex: r }); )
    o ? r = g.start + 1 + e.length : r = g.end, s.push(g);
  return n && console.log("findTagsByName found", s.length, "tags"), s;
}
je.exports = Vt;
je.exports.default = Vt;
var Bi = je.exports;
const pi = /* @__PURE__ */ Zt(Bi), ce = {
  // TIFF Baseline
  315: "Artist",
  258: "BitsPerSample",
  265: "CellLength",
  264: "CellWidth",
  320: "ColorMap",
  259: "Compression",
  33432: "Copyright",
  306: "DateTime",
  338: "ExtraSamples",
  266: "FillOrder",
  289: "FreeByteCounts",
  288: "FreeOffsets",
  291: "GrayResponseCurve",
  290: "GrayResponseUnit",
  316: "HostComputer",
  270: "ImageDescription",
  257: "ImageLength",
  256: "ImageWidth",
  271: "Make",
  281: "MaxSampleValue",
  280: "MinSampleValue",
  272: "Model",
  254: "NewSubfileType",
  274: "Orientation",
  262: "PhotometricInterpretation",
  284: "PlanarConfiguration",
  296: "ResolutionUnit",
  278: "RowsPerStrip",
  277: "SamplesPerPixel",
  305: "Software",
  279: "StripByteCounts",
  273: "StripOffsets",
  255: "SubfileType",
  263: "Threshholding",
  282: "XResolution",
  283: "YResolution",
  // TIFF Extended
  326: "BadFaxLines",
  327: "CleanFaxData",
  343: "ClipPath",
  328: "ConsecutiveBadFaxLines",
  433: "Decode",
  434: "DefaultImageColor",
  269: "DocumentName",
  336: "DotRange",
  321: "HalftoneHints",
  346: "Indexed",
  347: "JPEGTables",
  285: "PageName",
  297: "PageNumber",
  317: "Predictor",
  319: "PrimaryChromaticities",
  532: "ReferenceBlackWhite",
  339: "SampleFormat",
  340: "SMinSampleValue",
  341: "SMaxSampleValue",
  559: "StripRowCounts",
  330: "SubIFDs",
  292: "T4Options",
  293: "T6Options",
  325: "TileByteCounts",
  323: "TileLength",
  324: "TileOffsets",
  322: "TileWidth",
  301: "TransferFunction",
  318: "WhitePoint",
  344: "XClipPathUnits",
  286: "XPosition",
  529: "YCbCrCoefficients",
  531: "YCbCrPositioning",
  530: "YCbCrSubSampling",
  345: "YClipPathUnits",
  287: "YPosition",
  // EXIF
  37378: "ApertureValue",
  40961: "ColorSpace",
  36868: "DateTimeDigitized",
  36867: "DateTimeOriginal",
  34665: "Exif IFD",
  36864: "ExifVersion",
  33434: "ExposureTime",
  41728: "FileSource",
  37385: "Flash",
  40960: "FlashpixVersion",
  33437: "FNumber",
  42016: "ImageUniqueID",
  37384: "LightSource",
  37500: "MakerNote",
  37377: "ShutterSpeedValue",
  37510: "UserComment",
  // IPTC
  33723: "IPTC",
  // ICC
  34675: "ICC Profile",
  // XMP
  700: "XMP",
  // GDAL
  42112: "GDAL_METADATA",
  42113: "GDAL_NODATA",
  // Photoshop
  34377: "Photoshop",
  // GeoTiff
  33550: "ModelPixelScale",
  33922: "ModelTiepoint",
  34264: "ModelTransformation",
  34735: "GeoKeyDirectory",
  34736: "GeoDoubleParams",
  34737: "GeoAsciiParams",
  // LERC
  50674: "LercParameters"
}, _ = {};
for (const i in ce)
  ce.hasOwnProperty(i) && (_[ce[i]] = parseInt(i, 10));
const Ye = {
  256: "SHORT",
  257: "SHORT",
  258: "SHORT",
  259: "SHORT",
  262: "SHORT",
  273: "LONG",
  274: "SHORT",
  277: "SHORT",
  278: "LONG",
  279: "LONG",
  282: "RATIONAL",
  283: "RATIONAL",
  284: "SHORT",
  286: "SHORT",
  287: "RATIONAL",
  296: "SHORT",
  297: "SHORT",
  305: "ASCII",
  306: "ASCII",
  338: "SHORT",
  339: "SHORT",
  513: "LONG",
  514: "LONG",
  1024: "SHORT",
  1025: "SHORT",
  2048: "SHORT",
  2049: "ASCII",
  3072: "SHORT",
  3073: "ASCII",
  33550: "DOUBLE",
  33922: "DOUBLE",
  34264: "DOUBLE",
  34665: "LONG",
  34735: "SHORT",
  34736: "DOUBLE",
  34737: "ASCII",
  42113: "ASCII"
}, Rt = [
  _.BitsPerSample,
  _.ExtraSamples,
  _.SampleFormat,
  _.StripByteCounts,
  _.StripOffsets,
  _.StripRowCounts,
  _.TileByteCounts,
  _.TileOffsets,
  _.SubIFDs
], fe = {
  1: "BYTE",
  2: "ASCII",
  3: "SHORT",
  4: "LONG",
  5: "RATIONAL",
  6: "SBYTE",
  7: "UNDEFINED",
  8: "SSHORT",
  9: "SLONG",
  10: "SRATIONAL",
  11: "FLOAT",
  12: "DOUBLE",
  // IFD offset, suggested by https://owl.phy.queensu.ca/~phil/exiftool/standards.html
  13: "IFD",
  // introduced by BigTIFF
  16: "LONG8",
  17: "SLONG8",
  18: "IFD8"
}, X = {};
for (const i in fe)
  fe.hasOwnProperty(i) && (X[fe[i]] = parseInt(i, 10));
const Q = {
  WhiteIsZero: 0,
  BlackIsZero: 1,
  RGB: 2,
  Palette: 3,
  TransparencyMask: 4,
  CMYK: 5,
  YCbCr: 6,
  CIELab: 8,
  ICCLab: 9
}, Ft = {
  Unspecified: 0,
  Assocalpha: 1,
  Unassalpha: 2
}, wi = {
  Version: 0,
  AddCompression: 1
}, Wi = {
  None: 0,
  Deflate: 1,
  Zstandard: 2
}, Ce = {
  1024: "GTModelTypeGeoKey",
  1025: "GTRasterTypeGeoKey",
  1026: "GTCitationGeoKey",
  2048: "GeographicTypeGeoKey",
  2049: "GeogCitationGeoKey",
  2050: "GeogGeodeticDatumGeoKey",
  2051: "GeogPrimeMeridianGeoKey",
  2052: "GeogLinearUnitsGeoKey",
  2053: "GeogLinearUnitSizeGeoKey",
  2054: "GeogAngularUnitsGeoKey",
  2055: "GeogAngularUnitSizeGeoKey",
  2056: "GeogEllipsoidGeoKey",
  2057: "GeogSemiMajorAxisGeoKey",
  2058: "GeogSemiMinorAxisGeoKey",
  2059: "GeogInvFlatteningGeoKey",
  2060: "GeogAzimuthUnitsGeoKey",
  2061: "GeogPrimeMeridianLongGeoKey",
  2062: "GeogTOWGS84GeoKey",
  3072: "ProjectedCSTypeGeoKey",
  3073: "PCSCitationGeoKey",
  3074: "ProjectionGeoKey",
  3075: "ProjCoordTransGeoKey",
  3076: "ProjLinearUnitsGeoKey",
  3077: "ProjLinearUnitSizeGeoKey",
  3078: "ProjStdParallel1GeoKey",
  3079: "ProjStdParallel2GeoKey",
  3080: "ProjNatOriginLongGeoKey",
  3081: "ProjNatOriginLatGeoKey",
  3082: "ProjFalseEastingGeoKey",
  3083: "ProjFalseNorthingGeoKey",
  3084: "ProjFalseOriginLongGeoKey",
  3085: "ProjFalseOriginLatGeoKey",
  3086: "ProjFalseOriginEastingGeoKey",
  3087: "ProjFalseOriginNorthingGeoKey",
  3088: "ProjCenterLongGeoKey",
  3089: "ProjCenterLatGeoKey",
  3090: "ProjCenterEastingGeoKey",
  3091: "ProjCenterNorthingGeoKey",
  3092: "ProjScaleAtNatOriginGeoKey",
  3093: "ProjScaleAtCenterGeoKey",
  3094: "ProjAzimuthAngleGeoKey",
  3095: "ProjStraightVertPoleLongGeoKey",
  3096: "ProjRectifiedGridAngleGeoKey",
  4096: "VerticalCSTypeGeoKey",
  4097: "VerticalCitationGeoKey",
  4098: "VerticalDatumGeoKey",
  4099: "VerticalUnitsGeoKey"
}, Xt = {};
for (const i in Ce)
  Ce.hasOwnProperty(i) && (Xt[Ce[i]] = parseInt(i, 10));
const Yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ExtraSamplesValues: Ft,
  LercAddCompression: Wi,
  LercParameters: wi,
  arrayFields: Rt,
  fieldTagNames: ce,
  fieldTagTypes: Ye,
  fieldTags: _,
  fieldTypeNames: fe,
  fieldTypes: X,
  geoKeyNames: Ce,
  geoKeys: Xt,
  photometricInterpretations: Q
}, Symbol.toStringTag, { value: "Module" }));
function St(i, e) {
  const { width: t, height: s } = i, n = new Uint8Array(t * s * 3);
  let o;
  for (let r = 0, g = 0; r < i.length; ++r, g += 3)
    o = 256 - i[r] / e * 256, n[g] = o, n[g + 1] = o, n[g + 2] = o;
  return n;
}
function Ht(i, e) {
  const { width: t, height: s } = i, n = new Uint8Array(t * s * 3);
  let o;
  for (let r = 0, g = 0; r < i.length; ++r, g += 3)
    o = i[r] / e * 256, n[g] = o, n[g + 1] = o, n[g + 2] = o;
  return n;
}
function Jt(i, e) {
  const { width: t, height: s } = i, n = new Uint8Array(t * s * 3), o = e.length / 3, r = e.length / 3 * 2;
  for (let g = 0, c = 0; g < i.length; ++g, c += 3) {
    const I = i[g];
    n[c] = e[I] / 65536 * 256, n[c + 1] = e[I + o] / 65536 * 256, n[c + 2] = e[I + r] / 65536 * 256;
  }
  return n;
}
function Nt(i) {
  const { width: e, height: t } = i, s = new Uint8Array(e * t * 3);
  for (let n = 0, o = 0; n < i.length; n += 4, o += 3) {
    const r = i[n], g = i[n + 1], c = i[n + 2], I = i[n + 3];
    s[o] = 255 * ((255 - r) / 256) * ((255 - I) / 256), s[o + 1] = 255 * ((255 - g) / 256) * ((255 - I) / 256), s[o + 2] = 255 * ((255 - c) / 256) * ((255 - I) / 256);
  }
  return s;
}
function Kt(i) {
  const { width: e, height: t } = i, s = new Uint8ClampedArray(e * t * 3);
  for (let n = 0, o = 0; n < i.length; n += 3, o += 3) {
    const r = i[n], g = i[n + 1], c = i[n + 2];
    s[o] = r + 1.402 * (c - 128), s[o + 1] = r - 0.34414 * (g - 128) - 0.71414 * (c - 128), s[o + 2] = r + 1.772 * (g - 128);
  }
  return s;
}
const Vi = 0.95047, Ri = 1, Fi = 1.08883;
function xt(i) {
  const { width: e, height: t } = i, s = new Uint8Array(e * t * 3);
  for (let n = 0, o = 0; n < i.length; n += 3, o += 3) {
    const r = i[n + 0], g = i[n + 1] << 24 >> 24, c = i[n + 2] << 24 >> 24;
    let I = (r + 16) / 116, h = g / 500 + I, C = I - c / 200, l, a, m;
    h = Vi * (h * h * h > 8856e-6 ? h * h * h : (h - 16 / 116) / 7.787), I = Ri * (I * I * I > 8856e-6 ? I * I * I : (I - 16 / 116) / 7.787), C = Fi * (C * C * C > 8856e-6 ? C * C * C : (C - 16 / 116) / 7.787), l = h * 3.2406 + I * -1.5372 + C * -0.4986, a = h * -0.9689 + I * 1.8758 + C * 0.0415, m = h * 0.0557 + I * -0.204 + C * 1.057, l = l > 31308e-7 ? 1.055 * l ** (1 / 2.4) - 0.055 : 12.92 * l, a = a > 31308e-7 ? 1.055 * a ** (1 / 2.4) - 0.055 : 12.92 * a, m = m > 31308e-7 ? 1.055 * m ** (1 / 2.4) - 0.055 : 12.92 * m, s[o] = Math.max(0, Math.min(1, l)) * 255, s[o + 1] = Math.max(0, Math.min(1, a)) * 255, s[o + 2] = Math.max(0, Math.min(1, m)) * 255;
  }
  return s;
}
const Xi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fromBlackIsZero: Ht,
  fromCIELab: xt,
  fromCMYK: Nt,
  fromPalette: Jt,
  fromWhiteIsZero: St,
  fromYCbCr: Kt
}, Symbol.toStringTag, { value: "Module" })), vt = /* @__PURE__ */ new Map();
function ne(i, e) {
  Array.isArray(i) || (i = [i]), i.forEach((t) => vt.set(t, e));
}
async function tt(i) {
  const e = vt.get(i.Compression);
  if (!e)
    throw new Error(`Unknown compression method identifier: ${i.Compression}`);
  const t = await e();
  return new t(i);
}
ne([void 0, 1], () => import("./raw-DwOtIjix.js").then((i) => i.default));
ne(5, () => import("./lzw-Cxxa9BnZ.js").then((i) => i.default));
ne(6, () => {
  throw new Error("old style JPEG compression is not supported.");
});
ne(7, () => import("./jpeg-Br4ERbpn.js").then((i) => i.default));
ne([8, 32946], () => import("./deflate-D6Kg4OFa.js").then((i) => i.default));
ne(32773, () => import("./packbits-C2jsSYSs.js").then((i) => i.default));
ne(
  34887,
  () => import("./lerc-A-OwzvD1.js").then(async (i) => (await i.zstd.init(), i)).then((i) => i.default)
);
ne(50001, () => import("./webimage-BSMARFGR.js").then((i) => i.default));
function Re(i, e, t, s = 1) {
  return new (Object.getPrototypeOf(i)).constructor(e * t * s);
}
function Si(i, e, t, s, n) {
  const o = e / s, r = t / n;
  return i.map((g) => {
    const c = Re(g, s, n);
    for (let I = 0; I < n; ++I) {
      const h = Math.min(Math.round(r * I), t - 1);
      for (let C = 0; C < s; ++C) {
        const l = Math.min(Math.round(o * C), e - 1), a = g[h * e + l];
        c[I * s + C] = a;
      }
    }
    return c;
  });
}
function de(i, e, t) {
  return (1 - t) * i + t * e;
}
function Hi(i, e, t, s, n) {
  const o = e / s, r = t / n;
  return i.map((g) => {
    const c = Re(g, s, n);
    for (let I = 0; I < n; ++I) {
      const h = r * I, C = Math.floor(h), l = Math.min(Math.ceil(h), t - 1);
      for (let a = 0; a < s; ++a) {
        const m = o * a, u = m % 1, A = Math.floor(m), y = Math.min(Math.ceil(m), e - 1), f = g[C * e + A], B = g[C * e + y], p = g[l * e + A], d = g[l * e + y], b = de(
          de(f, B, u),
          de(p, d, u),
          h % 1
        );
        c[I * s + a] = b;
      }
    }
    return c;
  });
}
function Ji(i, e, t, s, n, o = "nearest") {
  switch (o.toLowerCase()) {
    case "nearest":
      return Si(i, e, t, s, n);
    case "bilinear":
    case "linear":
      return Hi(i, e, t, s, n);
    default:
      throw new Error(`Unsupported resampling method: '${o}'`);
  }
}
function Ni(i, e, t, s, n, o) {
  const r = e / s, g = t / n, c = Re(i, s, n, o);
  for (let I = 0; I < n; ++I) {
    const h = Math.min(Math.round(g * I), t - 1);
    for (let C = 0; C < s; ++C) {
      const l = Math.min(Math.round(r * C), e - 1);
      for (let a = 0; a < o; ++a) {
        const m = i[h * e * o + l * o + a];
        c[I * s * o + C * o + a] = m;
      }
    }
  }
  return c;
}
function Ki(i, e, t, s, n, o) {
  const r = e / s, g = t / n, c = Re(i, s, n, o);
  for (let I = 0; I < n; ++I) {
    const h = g * I, C = Math.floor(h), l = Math.min(Math.ceil(h), t - 1);
    for (let a = 0; a < s; ++a) {
      const m = r * a, u = m % 1, A = Math.floor(m), y = Math.min(Math.ceil(m), e - 1);
      for (let f = 0; f < o; ++f) {
        const B = i[C * e * o + A * o + f], p = i[C * e * o + y * o + f], d = i[l * e * o + A * o + f], b = i[l * e * o + y * o + f], Z = de(
          de(B, p, u),
          de(d, b, u),
          h % 1
        );
        c[I * s * o + a * o + f] = Z;
      }
    }
  }
  return c;
}
function xi(i, e, t, s, n, o, r = "nearest") {
  switch (r.toLowerCase()) {
    case "nearest":
      return Ni(
        i,
        e,
        t,
        s,
        n,
        o
      );
    case "bilinear":
    case "linear":
      return Ki(
        i,
        e,
        t,
        s,
        n,
        o
      );
    default:
      throw new Error(`Unsupported resampling method: '${r}'`);
  }
}
function vi(i, e, t) {
  let s = 0;
  for (let n = e; n < t; ++n)
    s += i[n];
  return s;
}
function ve(i, e, t) {
  switch (i) {
    case 1:
      if (e <= 8)
        return new Uint8Array(t);
      if (e <= 16)
        return new Uint16Array(t);
      if (e <= 32)
        return new Uint32Array(t);
      break;
    case 2:
      if (e === 8)
        return new Int8Array(t);
      if (e === 16)
        return new Int16Array(t);
      if (e === 32)
        return new Int32Array(t);
      break;
    case 3:
      switch (e) {
        case 16:
        case 32:
          return new Float32Array(t);
        case 64:
          return new Float64Array(t);
      }
      break;
  }
  throw Error("Unsupported data format/bitsPerSample");
}
function ki(i, e) {
  return (i === 1 || i === 2) && e <= 32 && e % 8 === 0 ? !1 : !(i === 3 && (e === 16 || e === 32 || e === 64));
}
function Di(i, e, t, s, n, o, r) {
  const g = new DataView(i), c = t === 2 ? r * o : r * o * s, I = t === 2 ? 1 : s, h = ve(e, n, c), C = parseInt("1".repeat(n), 2);
  if (e === 1) {
    let l;
    t === 1 ? l = s * n : l = n;
    let a = o * l;
    a & 7 && (a = a + 7 & -8);
    for (let m = 0; m < r; ++m) {
      const u = m * a;
      for (let A = 0; A < o; ++A) {
        const y = u + A * I * n;
        for (let f = 0; f < I; ++f) {
          const B = y + f * n, p = (m * o + A) * I + f, d = Math.floor(B / 8), b = B % 8;
          if (b + n <= 8)
            h[p] = g.getUint8(d) >> 8 - n - b & C;
          else if (b + n <= 16)
            h[p] = g.getUint16(d) >> 16 - n - b & C;
          else if (b + n <= 24) {
            const Z = g.getUint16(d) << 8 | g.getUint8(d + 2);
            h[p] = Z >> 24 - n - b & C;
          } else
            h[p] = g.getUint32(d) >> 32 - n - b & C;
        }
      }
    }
  }
  return h.buffer;
}
class it {
  /**
   * @constructor
   * @param {Object} fileDirectory The parsed file directory
   * @param {Object} geoKeys The parsed geo-keys
   * @param {DataView} dataView The DataView for the underlying file.
   * @param {Boolean} littleEndian Whether the file is encoded in little or big endian
   * @param {Boolean} cache Whether or not decoded tiles shall be cached
   * @param {import('./source/basesource').BaseSource} source The datasource to read from
   */
  constructor(e, t, s, n, o, r) {
    this.fileDirectory = e, this.geoKeys = t, this.dataView = s, this.littleEndian = n, this.tiles = o ? {} : null, this.isTiled = !e.StripOffsets;
    const g = e.PlanarConfiguration;
    if (this.planarConfiguration = typeof g > "u" ? 1 : g, this.planarConfiguration !== 1 && this.planarConfiguration !== 2)
      throw new Error("Invalid planar configuration.");
    this.source = r;
  }
  /**
   * Returns the associated parsed file directory.
   * @returns {Object} the parsed file directory
   */
  getFileDirectory() {
    return this.fileDirectory;
  }
  /**
   * Returns the associated parsed geo keys.
   * @returns {Object} the parsed geo keys
   */
  getGeoKeys() {
    return this.geoKeys;
  }
  /**
   * Returns the width of the image.
   * @returns {Number} the width of the image
   */
  getWidth() {
    return this.fileDirectory.ImageWidth;
  }
  /**
   * Returns the height of the image.
   * @returns {Number} the height of the image
   */
  getHeight() {
    return this.fileDirectory.ImageLength;
  }
  /**
   * Returns the number of samples per pixel.
   * @returns {Number} the number of samples per pixel
   */
  getSamplesPerPixel() {
    return typeof this.fileDirectory.SamplesPerPixel < "u" ? this.fileDirectory.SamplesPerPixel : 1;
  }
  /**
   * Returns the width of each tile.
   * @returns {Number} the width of each tile
   */
  getTileWidth() {
    return this.isTiled ? this.fileDirectory.TileWidth : this.getWidth();
  }
  /**
   * Returns the height of each tile.
   * @returns {Number} the height of each tile
   */
  getTileHeight() {
    return this.isTiled ? this.fileDirectory.TileLength : typeof this.fileDirectory.RowsPerStrip < "u" ? Math.min(this.fileDirectory.RowsPerStrip, this.getHeight()) : this.getHeight();
  }
  getBlockWidth() {
    return this.getTileWidth();
  }
  getBlockHeight(e) {
    return this.isTiled || (e + 1) * this.getTileHeight() <= this.getHeight() ? this.getTileHeight() : this.getHeight() - e * this.getTileHeight();
  }
  /**
   * Calculates the number of bytes for each pixel across all samples. Only full
   * bytes are supported, an exception is thrown when this is not the case.
   * @returns {Number} the bytes per pixel
   */
  getBytesPerPixel() {
    let e = 0;
    for (let t = 0; t < this.fileDirectory.BitsPerSample.length; ++t)
      e += this.getSampleByteSize(t);
    return e;
  }
  getSampleByteSize(e) {
    if (e >= this.fileDirectory.BitsPerSample.length)
      throw new RangeError(`Sample index ${e} is out of range.`);
    return Math.ceil(this.fileDirectory.BitsPerSample[e] / 8);
  }
  getReaderForSample(e) {
    const t = this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[e] : 1, s = this.fileDirectory.BitsPerSample[e];
    switch (t) {
      case 1:
        if (s <= 8)
          return DataView.prototype.getUint8;
        if (s <= 16)
          return DataView.prototype.getUint16;
        if (s <= 32)
          return DataView.prototype.getUint32;
        break;
      case 2:
        if (s <= 8)
          return DataView.prototype.getInt8;
        if (s <= 16)
          return DataView.prototype.getInt16;
        if (s <= 32)
          return DataView.prototype.getInt32;
        break;
      case 3:
        switch (s) {
          case 16:
            return function(n, o) {
              return Gt(this, n, o);
            };
          case 32:
            return DataView.prototype.getFloat32;
          case 64:
            return DataView.prototype.getFloat64;
        }
        break;
    }
    throw Error("Unsupported data format/bitsPerSample");
  }
  getSampleFormat(e = 0) {
    return this.fileDirectory.SampleFormat ? this.fileDirectory.SampleFormat[e] : 1;
  }
  getBitsPerSample(e = 0) {
    return this.fileDirectory.BitsPerSample[e];
  }
  getArrayForSample(e, t) {
    const s = this.getSampleFormat(e), n = this.getBitsPerSample(e);
    return ve(s, n, t);
  }
  /**
   * Returns the decoded strip or tile.
   * @param {Number} x the strip or tile x-offset
   * @param {Number} y the tile y-offset (0 for stripped images)
   * @param {Number} sample the sample to get for separated samples
   * @param {import("./geotiff").Pool|import("./geotiff").BaseDecoder} poolOrDecoder the decoder or decoder pool
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   * @returns {Promise.<ArrayBuffer>}
   */
  async getTileOrStrip(e, t, s, n, o) {
    const r = Math.ceil(this.getWidth() / this.getTileWidth()), g = Math.ceil(this.getHeight() / this.getTileHeight());
    let c;
    const { tiles: I } = this;
    this.planarConfiguration === 1 ? c = t * r + e : this.planarConfiguration === 2 && (c = s * r * g + t * r + e);
    let h, C;
    this.isTiled ? (h = this.fileDirectory.TileOffsets[c], C = this.fileDirectory.TileByteCounts[c]) : (h = this.fileDirectory.StripOffsets[c], C = this.fileDirectory.StripByteCounts[c]);
    const l = (await this.source.fetch([{ offset: h, length: C }], o))[0];
    let a;
    return I === null || !I[c] ? (a = (async () => {
      let m = await n.decode(this.fileDirectory, l);
      const u = this.getSampleFormat(), A = this.getBitsPerSample();
      return ki(u, A) && (m = Di(
        m,
        u,
        this.planarConfiguration,
        this.getSamplesPerPixel(),
        A,
        this.getTileWidth(),
        this.getBlockHeight(t)
      )), m;
    })(), I !== null && (I[c] = a)) : a = I[c], { x: e, y: t, sample: s, data: await a };
  }
  /**
   * Internal read function.
   * @private
   * @param {Array} imageWindow The image window in pixel coordinates
   * @param {Array} samples The selected samples (0-based indices)
   * @param {TypedArray|TypedArray[]} valueArrays The array(s) to write into
   * @param {Boolean} interleave Whether or not to write in an interleaved manner
   * @param {import("./geotiff").Pool|AbstractDecoder} poolOrDecoder the decoder or decoder pool
   * @param {number} width the width of window to be read into
   * @param {number} height the height of window to be read into
   * @param {number} resampleMethod the resampling method to be used when interpolating
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   * @returns {Promise<ReadRasterResult>}
   */
  async _readRaster(e, t, s, n, o, r, g, c, I) {
    const h = this.getTileWidth(), C = this.getTileHeight(), l = this.getWidth(), a = this.getHeight(), m = Math.max(Math.floor(e[0] / h), 0), u = Math.min(
      Math.ceil(e[2] / h),
      Math.ceil(l / h)
    ), A = Math.max(Math.floor(e[1] / C), 0), y = Math.min(
      Math.ceil(e[3] / C),
      Math.ceil(a / C)
    ), f = e[2] - e[0];
    let B = this.getBytesPerPixel();
    const p = [], d = [];
    for (let G = 0; G < t.length; ++G)
      this.planarConfiguration === 1 ? p.push(vi(this.fileDirectory.BitsPerSample, 0, t[G]) / 8) : p.push(0), d.push(this.getReaderForSample(t[G]));
    const b = [], { littleEndian: Z } = this;
    for (let G = A; G < y; ++G)
      for (let W = m; W < u; ++W) {
        let F;
        this.planarConfiguration === 1 && (F = this.getTileOrStrip(W, G, 0, o, I));
        for (let Y = 0; Y < t.length; ++Y) {
          const w = Y, H = t[Y];
          this.planarConfiguration === 2 && (B = this.getSampleByteSize(H), F = this.getTileOrStrip(W, G, H, o, I));
          const N = F.then((V) => {
            const v = V.data, k = new DataView(v), P = this.getBlockHeight(V.y), R = V.y * C, J = V.x * h, x = R + P, K = (V.x + 1) * h, E = d[w], S = Math.min(P, P - (x - e[3]), a - R), D = Math.min(h, h - (K - e[2]), l - J);
            for (let L = Math.max(0, e[1] - R); L < S; ++L)
              for (let j = Math.max(0, e[0] - J); j < D; ++j) {
                const T = (L * h + j) * B, oe = E.call(
                  k,
                  T + p[w],
                  Z
                );
                let ge;
                n ? (ge = (L + R - e[1]) * f * t.length + (j + J - e[0]) * t.length + w, s[ge] = oe) : (ge = (L + R - e[1]) * f + j + J - e[0], s[w][ge] = oe);
              }
          });
          b.push(N);
        }
      }
    if (await Promise.all(b), r && e[2] - e[0] !== r || g && e[3] - e[1] !== g) {
      let G;
      return n ? G = xi(
        s,
        e[2] - e[0],
        e[3] - e[1],
        r,
        g,
        t.length,
        c
      ) : G = Ji(
        s,
        e[2] - e[0],
        e[3] - e[1],
        r,
        g,
        c
      ), G.width = r, G.height = g, G;
    }
    return s.width = r || e[2] - e[0], s.height = g || e[3] - e[1], s;
  }
  /**
   * Reads raster data from the image. This function reads all selected samples
   * into separate arrays of the correct type for that sample or into a single
   * combined array when `interleave` is set. When provided, only a subset
   * of the raster is read for each sample.
   *
   * @param {ReadRasterOptions} [options={}] optional parameters
   * @returns {Promise<ReadRasterResult>} the decoded arrays as a promise
   */
  async readRasters({
    window: e,
    samples: t = [],
    interleave: s,
    pool: n = null,
    width: o,
    height: r,
    resampleMethod: g,
    fillValue: c,
    signal: I
  } = {}) {
    const h = e || [0, 0, this.getWidth(), this.getHeight()];
    if (h[0] > h[2] || h[1] > h[3])
      throw new Error("Invalid subsets");
    const C = h[2] - h[0], l = h[3] - h[1], a = C * l, m = this.getSamplesPerPixel();
    if (!t || !t.length)
      for (let f = 0; f < m; ++f)
        t.push(f);
    else
      for (let f = 0; f < t.length; ++f)
        if (t[f] >= m)
          return Promise.reject(new RangeError(`Invalid sample index '${t[f]}'.`));
    let u;
    if (s) {
      const f = this.fileDirectory.SampleFormat ? Math.max.apply(null, this.fileDirectory.SampleFormat) : 1, B = Math.max.apply(null, this.fileDirectory.BitsPerSample);
      u = ve(f, B, a * t.length), c && u.fill(c);
    } else {
      u = [];
      for (let f = 0; f < t.length; ++f) {
        const B = this.getArrayForSample(t[f], a);
        Array.isArray(c) && f < c.length ? B.fill(c[f]) : c && !Array.isArray(c) && B.fill(c), u.push(B);
      }
    }
    const A = n || await tt(this.fileDirectory);
    return await this._readRaster(
      h,
      t,
      u,
      s,
      A,
      o,
      r,
      g,
      I
    );
  }
  /**
   * Reads raster data from the image as RGB. The result is always an
   * interleaved typed array.
   * Colorspaces other than RGB will be transformed to RGB, color maps expanded.
   * When no other method is applicable, the first sample is used to produce a
   * grayscale image.
   * When provided, only a subset of the raster is read for each sample.
   *
   * @param {Object} [options] optional parameters
   * @param {Array<number>} [options.window] the subset to read data from in pixels.
   * @param {boolean} [options.interleave=true] whether the data shall be read
   *                                             in one single array or separate
   *                                             arrays.
   * @param {import("./geotiff").Pool} [options.pool=null] The optional decoder pool to use.
   * @param {number} [options.width] The desired width of the output. When the width is no the
   *                                 same as the images, resampling will be performed.
   * @param {number} [options.height] The desired height of the output. When the width is no the
   *                                  same as the images, resampling will be performed.
   * @param {string} [options.resampleMethod='nearest'] The desired resampling method.
   * @param {boolean} [options.enableAlpha=false] Enable reading alpha channel if present.
   * @param {AbortSignal} [options.signal] An AbortSignal that may be signalled if the request is
   *                                       to be aborted
   * @returns {Promise<ReadRasterResult>} the RGB array as a Promise
   */
  async readRGB({
    window: e,
    interleave: t = !0,
    pool: s = null,
    width: n,
    height: o,
    resampleMethod: r,
    enableAlpha: g = !1,
    signal: c
  } = {}) {
    const I = e || [0, 0, this.getWidth(), this.getHeight()];
    if (I[0] > I[2] || I[1] > I[3])
      throw new Error("Invalid subsets");
    const h = this.fileDirectory.PhotometricInterpretation;
    if (h === Q.RGB) {
      let y = [0, 1, 2];
      if (this.fileDirectory.ExtraSamples !== Ft.Unspecified && g) {
        y = [];
        for (let f = 0; f < this.fileDirectory.BitsPerSample.length; f += 1)
          y.push(f);
      }
      return this.readRasters({
        window: e,
        interleave: t,
        samples: y,
        pool: s,
        width: n,
        height: o,
        resampleMethod: r,
        signal: c
      });
    }
    let C;
    switch (h) {
      case Q.WhiteIsZero:
      case Q.BlackIsZero:
      case Q.Palette:
        C = [0];
        break;
      case Q.CMYK:
        C = [0, 1, 2, 3];
        break;
      case Q.YCbCr:
      case Q.CIELab:
        C = [0, 1, 2];
        break;
      default:
        throw new Error("Invalid or unsupported photometric interpretation.");
    }
    const l = {
      window: I,
      interleave: !0,
      samples: C,
      pool: s,
      width: n,
      height: o,
      resampleMethod: r,
      signal: c
    }, { fileDirectory: a } = this, m = await this.readRasters(l), u = 2 ** this.fileDirectory.BitsPerSample[0];
    let A;
    switch (h) {
      case Q.WhiteIsZero:
        A = St(m, u);
        break;
      case Q.BlackIsZero:
        A = Ht(m, u);
        break;
      case Q.Palette:
        A = Jt(m, a.ColorMap);
        break;
      case Q.CMYK:
        A = Nt(m);
        break;
      case Q.YCbCr:
        A = Kt(m);
        break;
      case Q.CIELab:
        A = xt(m);
        break;
      default:
        throw new Error("Unsupported photometric interpretation.");
    }
    if (!t) {
      const y = new Uint8Array(A.length / 3), f = new Uint8Array(A.length / 3), B = new Uint8Array(A.length / 3);
      for (let p = 0, d = 0; p < A.length; p += 3, ++d)
        y[d] = A[p], f[d] = A[p + 1], B[d] = A[p + 2];
      A = [y, f, B];
    }
    return A.width = m.width, A.height = m.height, A;
  }
  /**
   * Returns an array of tiepoints.
   * @returns {Object[]}
   */
  getTiePoints() {
    if (!this.fileDirectory.ModelTiepoint)
      return [];
    const e = [];
    for (let t = 0; t < this.fileDirectory.ModelTiepoint.length; t += 6)
      e.push({
        i: this.fileDirectory.ModelTiepoint[t],
        j: this.fileDirectory.ModelTiepoint[t + 1],
        k: this.fileDirectory.ModelTiepoint[t + 2],
        x: this.fileDirectory.ModelTiepoint[t + 3],
        y: this.fileDirectory.ModelTiepoint[t + 4],
        z: this.fileDirectory.ModelTiepoint[t + 5]
      });
    return e;
  }
  /**
   * Returns the parsed GDAL metadata items.
   *
   * If sample is passed to null, dataset-level metadata will be returned.
   * Otherwise only metadata specific to the provided sample will be returned.
   *
   * @param {number} [sample=null] The sample index.
   * @returns {Object}
   */
  getGDALMetadata(e = null) {
    const t = {};
    if (!this.fileDirectory.GDAL_METADATA)
      return null;
    const s = this.fileDirectory.GDAL_METADATA;
    let n = pi(s, "Item");
    e === null ? n = n.filter((o) => Ne(o, "sample") === void 0) : n = n.filter((o) => Number(Ne(o, "sample")) === e);
    for (let o = 0; o < n.length; ++o) {
      const r = n[o];
      t[Ne(r, "name")] = r.inner;
    }
    return t;
  }
  /**
   * Returns the GDAL nodata value
   * @returns {number|null}
   */
  getGDALNoData() {
    if (!this.fileDirectory.GDAL_NODATA)
      return null;
    const e = this.fileDirectory.GDAL_NODATA;
    return Number(e.substring(0, e.length - 1));
  }
  /**
   * Returns the image origin as a XYZ-vector. When the image has no affine
   * transformation, then an exception is thrown.
   * @returns {Array<number>} The origin as a vector
   */
  getOrigin() {
    const e = this.fileDirectory.ModelTiepoint, t = this.fileDirectory.ModelTransformation;
    if (e && e.length === 6)
      return [
        e[3],
        e[4],
        e[5]
      ];
    if (t)
      return [
        t[3],
        t[7],
        t[11]
      ];
    throw new Error("The image does not have an affine transformation.");
  }
  /**
   * Returns the image resolution as a XYZ-vector. When the image has no affine
   * transformation, then an exception is thrown.
   * @param {GeoTIFFImage} [referenceImage=null] A reference image to calculate the resolution from
   *                                             in cases when the current image does not have the
   *                                             required tags on its own.
   * @returns {Array<number>} The resolution as a vector
   */
  getResolution(e = null) {
    const t = this.fileDirectory.ModelPixelScale, s = this.fileDirectory.ModelTransformation;
    if (t)
      return [
        t[0],
        -t[1],
        t[2]
      ];
    if (s)
      return s[1] === 0 && s[4] === 0 ? [
        s[0],
        -s[5],
        s[10]
      ] : [
        Math.sqrt(s[0] * s[0] + s[4] * s[4]),
        -Math.sqrt(s[1] * s[1] + s[5] * s[5]),
        s[10]
      ];
    if (e) {
      const [n, o, r] = e.getResolution();
      return [
        n * e.getWidth() / this.getWidth(),
        o * e.getHeight() / this.getHeight(),
        r * e.getWidth() / this.getWidth()
      ];
    }
    throw new Error("The image does not have an affine transformation.");
  }
  /**
   * Returns whether or not the pixels of the image depict an area (or point).
   * @returns {Boolean} Whether the pixels are a point
   */
  pixelIsArea() {
    return this.geoKeys.GTRasterTypeGeoKey === 1;
  }
  /**
   * Returns the image bounding box as an array of 4 values: min-x, min-y,
   * max-x and max-y. When the image has no affine transformation, then an
   * exception is thrown.
   * @param {boolean} [tilegrid=false] If true return extent for a tilegrid
   *                                   without adjustment for ModelTransformation.
   * @returns {Array<number>} The bounding box
   */
  getBoundingBox(e = !1) {
    const t = this.getHeight(), s = this.getWidth();
    if (this.fileDirectory.ModelTransformation && !e) {
      const [n, o, r, g, c, I, h, C] = this.fileDirectory.ModelTransformation, a = [
        [0, 0],
        [0, t],
        [s, 0],
        [s, t]
      ].map(([A, y]) => [
        g + n * A + o * y,
        C + c * A + I * y
      ]), m = a.map((A) => A[0]), u = a.map((A) => A[1]);
      return [
        Math.min(...m),
        Math.min(...u),
        Math.max(...m),
        Math.max(...u)
      ];
    } else {
      const n = this.getOrigin(), o = this.getResolution(), r = n[0], g = n[1], c = r + o[0] * s, I = g + o[1] * t;
      return [
        Math.min(r, c),
        Math.min(g, I),
        Math.max(r, c),
        Math.max(g, I)
      ];
    }
  }
}
class Ti {
  constructor(e) {
    this._dataView = new DataView(e);
  }
  get buffer() {
    return this._dataView.buffer;
  }
  getUint64(e, t) {
    const s = this.getUint32(e, t), n = this.getUint32(e + 4, t);
    let o;
    if (t) {
      if (o = s + 2 ** 32 * n, !Number.isSafeInteger(o))
        throw new Error(
          `${o} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return o;
    }
    if (o = 2 ** 32 * s + n, !Number.isSafeInteger(o))
      throw new Error(
        `${o} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return o;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  getInt64(e, t) {
    let s = 0;
    const n = (this._dataView.getUint8(e + (t ? 7 : 0)) & 128) > 0;
    let o = !0;
    for (let r = 0; r < 8; r++) {
      let g = this._dataView.getUint8(e + (t ? r : 7 - r));
      n && (o ? g !== 0 && (g = ~(g - 1) & 255, o = !1) : g = ~g & 255), s += g * 256 ** r;
    }
    return n && (s = -s), s;
  }
  getUint8(e, t) {
    return this._dataView.getUint8(e, t);
  }
  getInt8(e, t) {
    return this._dataView.getInt8(e, t);
  }
  getUint16(e, t) {
    return this._dataView.getUint16(e, t);
  }
  getInt16(e, t) {
    return this._dataView.getInt16(e, t);
  }
  getUint32(e, t) {
    return this._dataView.getUint32(e, t);
  }
  getInt32(e, t) {
    return this._dataView.getInt32(e, t);
  }
  getFloat16(e, t) {
    return Gt(this._dataView, e, t);
  }
  getFloat32(e, t) {
    return this._dataView.getFloat32(e, t);
  }
  getFloat64(e, t) {
    return this._dataView.getFloat64(e, t);
  }
}
class zi {
  constructor(e, t, s, n) {
    this._dataView = new DataView(e), this._sliceOffset = t, this._littleEndian = s, this._bigTiff = n;
  }
  get sliceOffset() {
    return this._sliceOffset;
  }
  get sliceTop() {
    return this._sliceOffset + this.buffer.byteLength;
  }
  get littleEndian() {
    return this._littleEndian;
  }
  get bigTiff() {
    return this._bigTiff;
  }
  get buffer() {
    return this._dataView.buffer;
  }
  covers(e, t) {
    return this.sliceOffset <= e && this.sliceTop >= e + t;
  }
  readUint8(e) {
    return this._dataView.getUint8(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt8(e) {
    return this._dataView.getInt8(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint16(e) {
    return this._dataView.getUint16(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt16(e) {
    return this._dataView.getInt16(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint32(e) {
    return this._dataView.getUint32(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readInt32(e) {
    return this._dataView.getInt32(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readFloat32(e) {
    return this._dataView.getFloat32(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readFloat64(e) {
    return this._dataView.getFloat64(
      e - this._sliceOffset,
      this._littleEndian
    );
  }
  readUint64(e) {
    const t = this.readUint32(e), s = this.readUint32(e + 4);
    let n;
    if (this._littleEndian) {
      if (n = t + 2 ** 32 * s, !Number.isSafeInteger(n))
        throw new Error(
          `${n} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
        );
      return n;
    }
    if (n = 2 ** 32 * t + s, !Number.isSafeInteger(n))
      throw new Error(
        `${n} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`
      );
    return n;
  }
  // adapted from https://stackoverflow.com/a/55338384/8060591
  readInt64(e) {
    let t = 0;
    const s = (this._dataView.getUint8(e + (this._littleEndian ? 7 : 0)) & 128) > 0;
    let n = !0;
    for (let o = 0; o < 8; o++) {
      let r = this._dataView.getUint8(
        e + (this._littleEndian ? o : 7 - o)
      );
      s && (n ? r !== 0 && (r = ~(r - 1) & 255, n = !1) : r = ~r & 255), t += r * 256 ** o;
    }
    return s && (t = -t), t;
  }
  readOffset(e) {
    return this._bigTiff ? this.readUint64(e) : this.readUint32(e);
  }
}
const Pi = typeof navigator < "u" && navigator.hardwareConcurrency || 2;
class kt {
  /**
   * @constructor
   * @param {Number} [size] The size of the pool. Defaults to the number of CPUs
   *                      available. When this parameter is `null` or 0, then the
   *                      decoding will be done in the main thread.
   * @param {function(): Worker} [createWorker] A function that creates the decoder worker.
   * Defaults to a worker with all decoders that ship with geotiff.js. The `createWorker()`
   * function is expected to return a `Worker` compatible with Web Workers. For code that
   * runs in Node, [web-worker](https://www.npmjs.com/package/web-worker) is a good choice.
   *
   * A worker that uses a custom lzw decoder would look like this `my-custom-worker.js` file:
   * ```js
   * import { addDecoder, getDecoder } from 'geotiff';
   * addDecoder(5, () => import ('./my-custom-lzw').then((m) => m.default));
   * self.addEventListener('message', async (e) => {
   *   const { id, fileDirectory, buffer } = e.data;
   *   const decoder = await getDecoder(fileDirectory);
   *   const decoded = await decoder.decode(fileDirectory, buffer);
   *   self.postMessage({ decoded, id }, [decoded]);
   * });
   * ```
   * The way the above code is built into a worker by the `createWorker()` function
   * depends on the used bundler. For most bundlers, something like this will work:
   * ```js
   * function createWorker() {
   *   return new Worker(new URL('./my-custom-worker.js', import.meta.url));
   * }
   * ```
   */
  constructor(e = Pi, t) {
    this.workers = null, this._awaitingDecoder = null, this.size = e, this.messageId = 0, e && (this._awaitingDecoder = t ? Promise.resolve(t) : new Promise((s) => {
      import("./decoder-DJlmx386.js").then((n) => {
        s(n.create);
      });
    }), this._awaitingDecoder.then((s) => {
      this._awaitingDecoder = null, this.workers = [];
      for (let n = 0; n < e; n++)
        this.workers.push({ worker: s(), idle: !0 });
    }));
  }
  /**
   * Decode the given block of bytes with the set compression method.
   * @param {ArrayBuffer} buffer the array buffer of bytes to decode.
   * @returns {Promise<ArrayBuffer>} the decoded result as a `Promise`
   */
  async decode(e, t) {
    return this._awaitingDecoder && await this._awaitingDecoder, this.size === 0 ? tt(e).then((s) => s.decode(e, t)) : new Promise((s) => {
      const n = this.workers.find((g) => g.idle) || this.workers[Math.floor(Math.random() * this.size)];
      n.idle = !1;
      const o = this.messageId++, r = (g) => {
        g.data.id === o && (n.idle = !0, s(g.data.decoded), n.worker.removeEventListener("message", r));
      };
      n.worker.addEventListener("message", r), n.worker.postMessage({ fileDirectory: e, buffer: t, id: o }, [t]);
    });
  }
  destroy() {
    this.workers && (this.workers.forEach((e) => {
      e.worker.terminate();
    }), this.workers = null);
  }
}
const gt = `\r
\r
`;
function Dt(i) {
  if (typeof Object.fromEntries < "u")
    return Object.fromEntries(i);
  const e = {};
  for (const [t, s] of i)
    e[t.toLowerCase()] = s;
  return e;
}
function Qi(i) {
  const e = i.split(`\r
`).map((t) => {
    const s = t.split(":").map((n) => n.trim());
    return s[0] = s[0].toLowerCase(), s;
  });
  return Dt(e);
}
function Ui(i) {
  const [e, ...t] = i.split(";").map((n) => n.trim()), s = t.map((n) => n.split("="));
  return { type: e, params: Dt(s) };
}
function ke(i) {
  let e, t, s;
  return i && ([, e, t, s] = i.match(/bytes (\d+)-(\d+)\/(\d+)/), e = parseInt(e, 10), t = parseInt(t, 10), s = parseInt(s, 10)), { start: e, end: t, total: s };
}
function Li(i, e) {
  let t = null;
  const s = new TextDecoder("ascii"), n = [], o = `--${e}`, r = `${o}--`;
  for (let g = 0; g < 10; ++g)
    s.decode(
      new Uint8Array(i, g, o.length)
    ) === o && (t = g);
  if (t === null)
    throw new Error("Could not find initial boundary");
  for (; t < i.byteLength; ) {
    const g = s.decode(
      new Uint8Array(
        i,
        t,
        Math.min(o.length + 1024, i.byteLength - t)
      )
    );
    if (g.length === 0 || g.startsWith(r))
      break;
    if (!g.startsWith(o))
      throw new Error("Part does not start with boundary");
    const c = g.substr(o.length + 2);
    if (c.length === 0)
      break;
    const I = c.indexOf(gt), h = Qi(c.substr(0, I)), { start: C, end: l, total: a } = ke(h["content-range"]), m = t + o.length + I + gt.length, u = parseInt(l, 10) + 1 - parseInt(C, 10);
    n.push({
      headers: h,
      data: i.slice(m, m + u),
      offset: C,
      length: u,
      fileSize: a
    }), t = m + u + 4;
  }
  return n;
}
class Ze {
  /**
   *
   * @param {Slice[]} slices
   * @returns {ArrayBuffer[]}
   */
  async fetch(e, t = void 0) {
    return Promise.all(
      e.map((s) => this.fetchSlice(s, t))
    );
  }
  /**
   *
   * @param {Slice} slice
   * @returns {ArrayBuffer}
   */
  async fetchSlice(e) {
    throw new Error(`fetching of slice ${e} not possible, not implemented`);
  }
  /**
   * Returns the filesize if already determined and null otherwise
   */
  get fileSize() {
    return null;
  }
  async close() {
  }
}
class Mi extends Map {
  constructor(e = {}) {
    if (super(), !(e.maxSize && e.maxSize > 0))
      throw new TypeError("`maxSize` must be a number greater than 0");
    if (typeof e.maxAge == "number" && e.maxAge === 0)
      throw new TypeError("`maxAge` must be a number greater than 0");
    this.maxSize = e.maxSize, this.maxAge = e.maxAge || Number.POSITIVE_INFINITY, this.onEviction = e.onEviction, this.cache = /* @__PURE__ */ new Map(), this.oldCache = /* @__PURE__ */ new Map(), this._size = 0;
  }
  // TODO: Use private class methods when targeting Node.js 16.
  _emitEvictions(e) {
    if (typeof this.onEviction == "function")
      for (const [t, s] of e)
        this.onEviction(t, s.value);
  }
  _deleteIfExpired(e, t) {
    return typeof t.expiry == "number" && t.expiry <= Date.now() ? (typeof this.onEviction == "function" && this.onEviction(e, t.value), this.delete(e)) : !1;
  }
  _getOrDeleteIfExpired(e, t) {
    if (this._deleteIfExpired(e, t) === !1)
      return t.value;
  }
  _getItemValue(e, t) {
    return t.expiry ? this._getOrDeleteIfExpired(e, t) : t.value;
  }
  _peek(e, t) {
    const s = t.get(e);
    return this._getItemValue(e, s);
  }
  _set(e, t) {
    this.cache.set(e, t), this._size++, this._size >= this.maxSize && (this._size = 0, this._emitEvictions(this.oldCache), this.oldCache = this.cache, this.cache = /* @__PURE__ */ new Map());
  }
  _moveToRecent(e, t) {
    this.oldCache.delete(e), this._set(e, t);
  }
  *_entriesAscending() {
    for (const e of this.oldCache) {
      const [t, s] = e;
      this.cache.has(t) || this._deleteIfExpired(t, s) === !1 && (yield e);
    }
    for (const e of this.cache) {
      const [t, s] = e;
      this._deleteIfExpired(t, s) === !1 && (yield e);
    }
  }
  get(e) {
    if (this.cache.has(e)) {
      const t = this.cache.get(e);
      return this._getItemValue(e, t);
    }
    if (this.oldCache.has(e)) {
      const t = this.oldCache.get(e);
      if (this._deleteIfExpired(e, t) === !1)
        return this._moveToRecent(e, t), t.value;
    }
  }
  set(e, t, { maxAge: s = this.maxAge } = {}) {
    const n = typeof s == "number" && s !== Number.POSITIVE_INFINITY ? Date.now() + s : void 0;
    return this.cache.has(e) ? this.cache.set(e, {
      value: t,
      expiry: n
    }) : this._set(e, { value: t, expiry: n }), this;
  }
  has(e) {
    return this.cache.has(e) ? !this._deleteIfExpired(e, this.cache.get(e)) : this.oldCache.has(e) ? !this._deleteIfExpired(e, this.oldCache.get(e)) : !1;
  }
  peek(e) {
    if (this.cache.has(e))
      return this._peek(e, this.cache);
    if (this.oldCache.has(e))
      return this._peek(e, this.oldCache);
  }
  delete(e) {
    const t = this.cache.delete(e);
    return t && this._size--, this.oldCache.delete(e) || t;
  }
  clear() {
    this.cache.clear(), this.oldCache.clear(), this._size = 0;
  }
  resize(e) {
    if (!(e && e > 0))
      throw new TypeError("`maxSize` must be a number greater than 0");
    const t = [...this._entriesAscending()], s = t.length - e;
    s < 0 ? (this.cache = new Map(t), this.oldCache = /* @__PURE__ */ new Map(), this._size = t.length) : (s > 0 && this._emitEvictions(t.slice(0, s)), this.oldCache = new Map(t.slice(s)), this.cache = /* @__PURE__ */ new Map(), this._size = 0), this.maxSize = e;
  }
  *keys() {
    for (const [e] of this)
      yield e;
  }
  *values() {
    for (const [, e] of this)
      yield e;
  }
  *[Symbol.iterator]() {
    for (const e of this.cache) {
      const [t, s] = e;
      this._deleteIfExpired(t, s) === !1 && (yield [t, s.value]);
    }
    for (const e of this.oldCache) {
      const [t, s] = e;
      this.cache.has(t) || this._deleteIfExpired(t, s) === !1 && (yield [t, s.value]);
    }
  }
  *entriesDescending() {
    let e = [...this.cache];
    for (let t = e.length - 1; t >= 0; --t) {
      const s = e[t], [n, o] = s;
      this._deleteIfExpired(n, o) === !1 && (yield [n, o.value]);
    }
    e = [...this.oldCache];
    for (let t = e.length - 1; t >= 0; --t) {
      const s = e[t], [n, o] = s;
      this.cache.has(n) || this._deleteIfExpired(n, o) === !1 && (yield [n, o.value]);
    }
  }
  *entriesAscending() {
    for (const [e, t] of this._entriesAscending())
      yield [e, t.value];
  }
  get size() {
    if (!this._size)
      return this.oldCache.size;
    let e = 0;
    for (const t of this.oldCache.keys())
      this.cache.has(t) || e++;
    return Math.min(this._size + e, this.maxSize);
  }
  entries() {
    return this.entriesAscending();
  }
  forEach(e, t = this) {
    for (const [s, n] of this.entriesAscending())
      e.call(t, n, s, this);
  }
  get [Symbol.toStringTag]() {
    return JSON.stringify([...this.entriesAscending()]);
  }
}
function Tt(i, e) {
  for (const t in e)
    e.hasOwnProperty(t) && (i[t] = e[t]);
}
function zt(i, e) {
  return i.length < e.length ? !1 : i.substr(i.length - e.length) === e;
}
function Oi(i, e) {
  const { length: t } = i;
  for (let s = 0; s < t; s++)
    e(i[s], s);
}
function st(i) {
  const e = {};
  for (const t in i)
    if (i.hasOwnProperty(t)) {
      const s = i[t];
      e[s] = t;
    }
  return e;
}
function O(i, e) {
  const t = [];
  for (let s = 0; s < i; s++)
    t.push(e(s));
  return t;
}
async function Ei(i) {
  return new Promise((e) => setTimeout(e, i));
}
function ji(i, e) {
  const t = Array.isArray(i) ? i : Array.from(i), s = Array.isArray(e) ? e : Array.from(e);
  return t.map((n, o) => [n, s[o]]);
}
class Ie extends Error {
  constructor(e) {
    super(e), Error.captureStackTrace && Error.captureStackTrace(this, Ie), this.name = "AbortError";
  }
}
class _i extends Error {
  constructor(e, t) {
    super(t), this.errors = e, this.message = t, this.name = "AggregateError";
  }
}
const qi = _i;
class $i {
  /**
   *
   * @param {number} offset
   * @param {number} length
   * @param {ArrayBuffer} [data]
   */
  constructor(e, t, s = null) {
    this.offset = e, this.length = t, this.data = s;
  }
  /**
   * @returns {number} the top byte border
   */
  get top() {
    return this.offset + this.length;
  }
}
class rt {
  /**
   *
   * @param {number} offset
   * @param {number} length
   * @param {number[]} blockIds
   */
  constructor(e, t, s) {
    this.offset = e, this.length = t, this.blockIds = s;
  }
}
class es extends Ze {
  /**
   *
   * @param {BaseSource} source The underlying source that shall be blocked and cached
   * @param {object} options
   * @param {number} [options.blockSize]
   * @param {number} [options.cacheSize]
   */
  constructor(e, { blockSize: t = 65536, cacheSize: s = 100 } = {}) {
    super(), this.source = e, this.blockSize = t, this.blockCache = new Mi({
      maxSize: s,
      onEviction: (n, o) => {
        this.evictedBlocks.set(n, o);
      }
    }), this.evictedBlocks = /* @__PURE__ */ new Map(), this.blockRequests = /* @__PURE__ */ new Map(), this.blockIdsToFetch = /* @__PURE__ */ new Set(), this.abortedBlockIds = /* @__PURE__ */ new Set();
  }
  get fileSize() {
    return this.source.fileSize;
  }
  /**
   *
   * @param {import("./basesource").Slice[]} slices
   */
  async fetch(e, t) {
    const s = [], n = [], o = [];
    this.evictedBlocks.clear();
    for (const { offset: l, length: a } of e) {
      let m = l + a;
      const { fileSize: u } = this;
      u !== null && (m = Math.min(m, u));
      const A = Math.floor(l / this.blockSize) * this.blockSize;
      for (let y = A; y < m; y += this.blockSize) {
        const f = Math.floor(y / this.blockSize);
        !this.blockCache.has(f) && !this.blockRequests.has(f) && (this.blockIdsToFetch.add(f), n.push(f)), this.blockRequests.has(f) && s.push(this.blockRequests.get(f)), o.push(f);
      }
    }
    await Ei(), this.fetchBlocks(t);
    const r = [];
    for (const l of n)
      this.blockRequests.has(l) && r.push(this.blockRequests.get(l));
    await Promise.allSettled(s), await Promise.allSettled(r);
    const g = [], c = o.filter((l) => this.abortedBlockIds.has(l) || !this.blockCache.has(l));
    if (c.forEach((l) => this.blockIdsToFetch.add(l)), c.length > 0 && t && !t.aborted) {
      this.fetchBlocks(null);
      for (const l of c) {
        const a = this.blockRequests.get(l);
        if (!a)
          throw new Error(`Block ${l} is not in the block requests`);
        g.push(a);
      }
      await Promise.allSettled(g);
    }
    if (t && t.aborted)
      throw new Ie("Request was aborted");
    const I = o.map((l) => this.blockCache.get(l) || this.evictedBlocks.get(l)), h = I.filter((l) => !l);
    if (h.length)
      throw new qi(h, "Request failed");
    const C = new Map(ji(o, I));
    return this.readSliceData(e, C);
  }
  /**
   *
   * @param {AbortSignal} signal
   */
  fetchBlocks(e) {
    if (this.blockIdsToFetch.size > 0) {
      const t = this.groupBlocks(this.blockIdsToFetch), s = this.source.fetch(t, e);
      for (let n = 0; n < t.length; ++n) {
        const o = t[n];
        for (const r of o.blockIds)
          this.blockRequests.set(r, (async () => {
            try {
              const g = (await s)[n], c = r * this.blockSize, I = c - g.offset, h = Math.min(I + this.blockSize, g.data.byteLength), C = g.data.slice(I, h), l = new $i(
                c,
                C.byteLength,
                C,
                r
              );
              this.blockCache.set(r, l), this.abortedBlockIds.delete(r);
            } catch (g) {
              if (g.name === "AbortError")
                g.signal = e, this.blockCache.delete(r), this.abortedBlockIds.add(r);
              else
                throw g;
            } finally {
              this.blockRequests.delete(r);
            }
          })());
      }
      this.blockIdsToFetch.clear();
    }
  }
  /**
   *
   * @param {Set} blockIds
   * @returns {BlockGroup[]}
   */
  groupBlocks(e) {
    const t = Array.from(e).sort((r, g) => r - g);
    if (t.length === 0)
      return [];
    let s = [], n = null;
    const o = [];
    for (const r of t)
      n === null || n + 1 === r ? (s.push(r), n = r) : (o.push(new rt(
        s[0] * this.blockSize,
        s.length * this.blockSize,
        s
      )), s = [r], n = r);
    return o.push(new rt(
      s[0] * this.blockSize,
      s.length * this.blockSize,
      s
    )), o;
  }
  /**
   *
   * @param {import("./basesource").Slice[]} slices
   * @param {Map} blocks
   */
  readSliceData(e, t) {
    return e.map((s) => {
      let n = s.offset + s.length;
      this.fileSize !== null && (n = Math.min(this.fileSize, n));
      const o = Math.floor(s.offset / this.blockSize), r = Math.floor(n / this.blockSize), g = new ArrayBuffer(s.length), c = new Uint8Array(g);
      for (let I = o; I <= r; ++I) {
        const h = t.get(I), C = h.offset - s.offset, l = h.top - n;
        let a = 0, m = 0, u;
        C < 0 ? a = -C : C > 0 && (m = C), l < 0 ? u = h.length - a : u = n - h.offset - a;
        const A = new Uint8Array(h.data, a, u);
        c.set(A, m);
      }
      return g;
    });
  }
}
class Fe {
  /**
   * Returns whether the response has an ok'ish status code
   */
  get ok() {
    return this.status >= 200 && this.status <= 299;
  }
  /**
   * Returns the status code of the response
   */
  get status() {
    throw new Error("not implemented");
  }
  /**
   * Returns the value of the specified header
   * @param {string} headerName the header name
   * @returns {string} the header value
   */
  getHeader(e) {
    throw new Error("not implemented");
  }
  /**
   * @returns {ArrayBuffer} the response data of the request
   */
  async getData() {
    throw new Error("not implemented");
  }
}
class Xe {
  constructor(e) {
    this.url = e;
  }
  /**
   * Send a request with the options
   * @param {{headers: HeadersInit, signal: AbortSignal}} [options={}]
   * @returns {Promise<BaseResponse>}
   */
  async request({ headers: e, signal: t } = {}) {
    throw new Error("request is not implemented");
  }
}
class ts extends Fe {
  /**
   * BaseResponse facade for fetch API Response
   * @param {Response} response
   */
  constructor(e) {
    super(), this.response = e;
  }
  get status() {
    return this.response.status;
  }
  getHeader(e) {
    return this.response.headers.get(e);
  }
  async getData() {
    return this.response.arrayBuffer ? await this.response.arrayBuffer() : (await this.response.buffer()).buffer;
  }
}
class is extends Xe {
  constructor(e, t) {
    super(e), this.credentials = t;
  }
  /**
   * @param {{headers: HeadersInit, signal: AbortSignal}} [options={}]
   * @returns {Promise<FetchResponse>}
   */
  async request({ headers: e, signal: t } = {}) {
    const s = await fetch(this.url, {
      headers: e,
      credentials: this.credentials,
      signal: t
    });
    return new ts(s);
  }
}
class ss extends Fe {
  /**
   * BaseResponse facade for XMLHttpRequest
   * @param {XMLHttpRequest} xhr
   * @param {ArrayBuffer} data
   */
  constructor(e, t) {
    super(), this.xhr = e, this.data = t;
  }
  get status() {
    return this.xhr.status;
  }
  getHeader(e) {
    return this.xhr.getResponseHeader(e);
  }
  async getData() {
    return this.data;
  }
}
class ns extends Xe {
  constructRequest(e, t) {
    return new Promise((s, n) => {
      const o = new XMLHttpRequest();
      o.open("GET", this.url), o.responseType = "arraybuffer";
      for (const [r, g] of Object.entries(e))
        o.setRequestHeader(r, g);
      o.onload = () => {
        const r = o.response;
        s(new ss(o, r));
      }, o.onerror = n, o.onabort = () => n(new Ie("Request aborted")), o.send(), t && (t.aborted && o.abort(), t.addEventListener("abort", () => o.abort()));
    });
  }
  async request({ headers: e, signal: t } = {}) {
    return await this.constructRequest(e, t);
  }
}
const me = {};
class os extends Fe {
  /**
   * BaseResponse facade for node HTTP/HTTPS API Response
   * @param {http.ServerResponse} response
   */
  constructor(e, t) {
    super(), this.response = e, this.dataPromise = t;
  }
  get status() {
    return this.response.statusCode;
  }
  getHeader(e) {
    return this.response.headers[e];
  }
  async getData() {
    return await this.dataPromise;
  }
}
class gs extends Xe {
  constructor(e) {
    super(e), this.parsedUrl = me.parse(this.url), this.httpApi = (this.parsedUrl.protocol === "http:", me);
  }
  constructRequest(e, t) {
    return new Promise((s, n) => {
      const o = this.httpApi.get(
        {
          ...this.parsedUrl,
          headers: e
        },
        (r) => {
          const g = new Promise((c) => {
            const I = [];
            r.on("data", (h) => {
              I.push(h);
            }), r.on("end", () => {
              const h = Buffer.concat(I).buffer;
              c(h);
            }), r.on("error", n);
          });
          s(new os(r, g));
        }
      );
      o.on("error", n), t && (t.aborted && o.destroy(new Ie("Request aborted")), t.addEventListener("abort", () => o.destroy(new Ie("Request aborted"))));
    });
  }
  async request({ headers: e, signal: t } = {}) {
    return await this.constructRequest(e, t);
  }
}
class Se extends Ze {
  /**
   *
   * @param {BaseClient} client
   * @param {object} headers
   * @param {numbers} maxRanges
   * @param {boolean} allowFullFile
   */
  constructor(e, t, s, n) {
    super(), this.client = e, this.headers = t, this.maxRanges = s, this.allowFullFile = n, this._fileSize = null;
  }
  /**
   *
   * @param {Slice[]} slices
   */
  async fetch(e, t) {
    return this.maxRanges >= e.length ? this.fetchSlices(e, t) : (this.maxRanges > 0 && e.length > 1, Promise.all(
      e.map((s) => this.fetchSlice(s, t))
    ));
  }
  async fetchSlices(e, t) {
    const s = await this.client.request({
      headers: {
        ...this.headers,
        Range: `bytes=${e.map(({ offset: n, length: o }) => `${n}-${n + o}`).join(",")}`
      },
      signal: t
    });
    if (s.ok)
      if (s.status === 206) {
        const { type: n, params: o } = Ui(s.getHeader("content-type"));
        if (n === "multipart/byteranges") {
          const C = Li(await s.getData(), o.boundary);
          return this._fileSize = C[0].fileSize || null, C;
        }
        const r = await s.getData(), { start: g, end: c, total: I } = ke(s.getHeader("content-range"));
        this._fileSize = I || null;
        const h = [{
          data: r,
          offset: g,
          length: c - g
        }];
        if (e.length > 1) {
          const C = await Promise.all(e.slice(1).map((l) => this.fetchSlice(l, t)));
          return h.concat(C);
        }
        return h;
      } else {
        if (!this.allowFullFile)
          throw new Error("Server responded with full file");
        const n = await s.getData();
        return this._fileSize = n.byteLength, [{
          data: n,
          offset: 0,
          length: n.byteLength
        }];
      }
    else throw new Error("Error fetching data.");
  }
  async fetchSlice(e, t) {
    const { offset: s, length: n } = e, o = await this.client.request({
      headers: {
        ...this.headers,
        Range: `bytes=${s}-${s + n}`
      },
      signal: t
    });
    if (o.ok)
      if (o.status === 206) {
        const r = await o.getData(), { total: g } = ke(o.getHeader("content-range"));
        return this._fileSize = g || null, {
          data: r,
          offset: s,
          length: n
        };
      } else {
        if (!this.allowFullFile)
          throw new Error("Server responded with full file");
        const r = await o.getData();
        return this._fileSize = r.byteLength, {
          data: r,
          offset: 0,
          length: r.byteLength
        };
      }
    else throw new Error("Error fetching data.");
  }
  get fileSize() {
    return this._fileSize;
  }
}
function He(i, { blockSize: e, cacheSize: t }) {
  return e === null ? i : new es(i, { blockSize: e, cacheSize: t });
}
function rs(i, { headers: e = {}, credentials: t, maxRanges: s = 0, allowFullFile: n = !1, ...o } = {}) {
  const r = new is(i, t), g = new Se(r, e, s, n);
  return He(g, o);
}
function ls(i, { headers: e = {}, maxRanges: t = 0, allowFullFile: s = !1, ...n } = {}) {
  const o = new ns(i), r = new Se(o, e, t, s);
  return He(r, n);
}
function cs(i, { headers: e = {}, maxRanges: t = 0, allowFullFile: s = !1, ...n } = {}) {
  const o = new gs(i), r = new Se(o, e, t, s);
  return He(r, n);
}
function Is(i, { headers: e = {}, maxRanges: t = 0, allowFullFile: s = !1, ...n } = {}) {
  const o = new Se(i, e, t, s);
  return He(o, n);
}
function De(i, { forceXHR: e = !1, ...t } = {}) {
  return typeof fetch == "function" && !e ? rs(i, t) : typeof XMLHttpRequest < "u" ? ls(i, t) : cs(i, t);
}
class as extends Ze {
  constructor(e) {
    super(), this.arrayBuffer = e;
  }
  fetchSlice(e, t) {
    if (t && t.aborted)
      throw new Ie("Request aborted");
    return this.arrayBuffer.slice(e.offset, e.offset + e.length);
  }
}
function hs(i) {
  return new as(i);
}
class Cs extends Ze {
  constructor(e) {
    super(), this.file = e;
  }
  async fetchSlice(e, t) {
    return new Promise((s, n) => {
      const o = this.file.slice(e.offset, e.offset + e.length), r = new FileReader();
      r.onload = (g) => s(g.target.result), r.onerror = n, r.onabort = n, r.readAsArrayBuffer(o), t && t.addEventListener("abort", () => r.abort());
    });
  }
}
function ds(i) {
  return new Cs(i);
}
function ms(i) {
  return new Promise((e, t) => {
    me.close(i, (s) => {
      s ? t(s) : e();
    });
  });
}
function us(i, e, t = void 0) {
  return new Promise((s, n) => {
    me.open(i, e, t, (o, r) => {
      o ? n(o) : s(r);
    });
  });
}
function bs(...i) {
  return new Promise((e, t) => {
    me.read(...i, (s, n, o) => {
      s ? t(s) : e({ bytesRead: n, buffer: o });
    });
  });
}
class As extends Ze {
  constructor(e) {
    super(), this.path = e, this.openRequest = us(e, "r");
  }
  async fetchSlice(e) {
    const t = await this.openRequest, { buffer: s } = await bs(
      t,
      Buffer.alloc(e.length),
      0,
      e.length,
      e.offset
    );
    return s.buffer;
  }
  async close() {
    const e = await this.openRequest;
    await ms(e);
  }
}
function fs(i) {
  return new As(i);
}
const ys = st(ce), Gs = st(Ce), ie = {};
Tt(ie, ys);
Tt(ie, Gs);
const Zs = st(fe), we = 1e3, U = {
  nextZero: (i, e) => {
    let t = e;
    for (; i[t] !== 0; )
      t++;
    return t;
  },
  readUshort: (i, e) => i[e] << 8 | i[e + 1],
  readShort: (i, e) => {
    const t = U.ui8;
    return t[0] = i[e + 1], t[1] = i[e + 0], U.i16[0];
  },
  readInt: (i, e) => {
    const t = U.ui8;
    return t[0] = i[e + 3], t[1] = i[e + 2], t[2] = i[e + 1], t[3] = i[e + 0], U.i32[0];
  },
  readUint: (i, e) => {
    const t = U.ui8;
    return t[0] = i[e + 3], t[1] = i[e + 2], t[2] = i[e + 1], t[3] = i[e + 0], U.ui32[0];
  },
  readASCII: (i, e, t) => t.map((s) => String.fromCharCode(i[e + s])).join(""),
  readFloat: (i, e) => {
    const t = U.ui8;
    return O(4, (s) => {
      t[s] = i[e + 3 - s];
    }), U.fl32[0];
  },
  readDouble: (i, e) => {
    const t = U.ui8;
    return O(8, (s) => {
      t[s] = i[e + 7 - s];
    }), U.fl64[0];
  },
  writeUshort: (i, e, t) => {
    i[e] = t >> 8 & 255, i[e + 1] = t & 255;
  },
  writeUint: (i, e, t) => {
    i[e] = t >> 24 & 255, i[e + 1] = t >> 16 & 255, i[e + 2] = t >> 8 & 255, i[e + 3] = t >> 0 & 255;
  },
  writeASCII: (i, e, t) => {
    O(t.length, (s) => {
      i[e + s] = t.charCodeAt(s);
    });
  },
  ui8: new Uint8Array(8)
};
U.fl64 = new Float64Array(U.ui8.buffer);
U.writeDouble = (i, e, t) => {
  U.fl64[0] = t, O(8, (s) => {
    i[e + s] = U.ui8[7 - s];
  });
};
const Bs = (i, e, t, s) => {
  let n = t;
  const o = Object.keys(s).filter((g) => g != null && g !== "undefined");
  i.writeUshort(e, n, o.length), n += 2;
  let r = n + 12 * o.length + 4;
  for (const g of o) {
    let c = null;
    typeof g == "number" ? c = g : typeof g == "string" && (c = parseInt(g, 10));
    const I = Ye[c], h = Zs[I];
    if (I == null || I === void 0 || typeof I > "u")
      throw new Error(`unknown type of tag: ${c}`);
    let C = s[g];
    if (C === void 0)
      throw new Error(`failed to get value for key ${g}`);
    I === "ASCII" && typeof C == "string" && zt(C, "\0") === !1 && (C += "\0");
    const l = C.length;
    i.writeUshort(e, n, c), n += 2, i.writeUshort(e, n, h), n += 2, i.writeUint(e, n, l), n += 4;
    let a = [-1, 1, 1, 2, 4, 8, 0, 0, 0, 0, 0, 0, 8][h] * l, m = n;
    a > 4 && (i.writeUint(e, n, r), m = r), I === "ASCII" ? i.writeASCII(e, m, C) : I === "SHORT" ? O(l, (u) => {
      i.writeUshort(e, m + 2 * u, C[u]);
    }) : I === "LONG" ? O(l, (u) => {
      i.writeUint(e, m + 4 * u, C[u]);
    }) : I === "RATIONAL" ? O(l, (u) => {
      i.writeUint(e, m + 8 * u, Math.round(C[u] * 1e4)), i.writeUint(e, m + 8 * u + 4, 1e4);
    }) : I === "DOUBLE" && O(l, (u) => {
      i.writeDouble(e, m + 8 * u, C[u]);
    }), a > 4 && (a += a & 1, r += a), n += 4;
  }
  return [n, r];
}, ps = (i) => {
  const e = new Uint8Array(we);
  let t = 4;
  const s = U;
  e[0] = 77, e[1] = 77, e[3] = 42;
  let n = 8;
  if (s.writeUint(e, t, n), t += 4, i.forEach((r, g) => {
    const c = Bs(s, e, n, r);
    n = c[1], g < i.length - 1 && s.writeUint(e, c[0], n);
  }), e.slice)
    return e.slice(0, n).buffer;
  const o = new Uint8Array(n);
  for (let r = 0; r < n; r++)
    o[r] = e[r];
  return o.buffer;
}, ws = (i, e, t, s) => {
  if (t == null)
    throw new Error(`you passed into encodeImage a width of type ${t}`);
  if (e == null)
    throw new Error(`you passed into encodeImage a width of type ${e}`);
  const n = {
    256: [e],
    // ImageWidth
    257: [t],
    // ImageLength
    273: [we],
    // strips offset
    278: [t],
    // RowsPerStrip
    305: "geotiff.js"
    // no array for ASCII(Z)
  };
  if (s)
    for (const I in s)
      s.hasOwnProperty(I) && (n[I] = s[I]);
  const o = new Uint8Array(ps([n])), r = new Uint8Array(i), g = n[277], c = new Uint8Array(we + e * t * g);
  return O(o.length, (I) => {
    c[I] = o[I];
  }), Oi(r, (I, h) => {
    c[we + h] = I;
  }), c.buffer;
}, Ws = (i) => {
  const e = {};
  for (const t in i)
    t !== "StripOffsets" && (ie[t] || console.error(t, "not in name2code:", Object.keys(ie)), e[ie[t]] = i[t]);
  return e;
}, Ys = (i) => Array.isArray(i) ? i : [i], Vs = [
  ["Compression", 1],
  // no compression
  ["PlanarConfiguration", 1],
  ["ExtraSamples", 0]
];
function Rs(i, e) {
  const t = typeof i[0] == "number";
  let s, n, o, r;
  t ? (s = e.height || e.ImageLength, o = e.width || e.ImageWidth, n = i.length / (s * o), r = i) : (n = i.length, s = i[0].length, o = i[0][0].length, r = [], O(s, (h) => {
    O(o, (C) => {
      O(n, (l) => {
        r.push(i[l][h][C]);
      });
    });
  })), e.ImageLength = s, delete e.height, e.ImageWidth = o, delete e.width, e.BitsPerSample || (e.BitsPerSample = O(n, () => 8)), Vs.forEach((h) => {
    const C = h[0];
    if (!e[C]) {
      const l = h[1];
      e[C] = l;
    }
  }), e.PhotometricInterpretation || (e.PhotometricInterpretation = e.BitsPerSample.length === 3 ? 2 : 1), e.SamplesPerPixel || (e.SamplesPerPixel = [n]), e.StripByteCounts || (e.StripByteCounts = [n * s * o]), e.ModelPixelScale || (e.ModelPixelScale = [360 / o, 180 / s, 0]), e.SampleFormat || (e.SampleFormat = O(n, () => 1)), !e.hasOwnProperty("GeographicTypeGeoKey") && !e.hasOwnProperty("ProjectedCSTypeGeoKey") && (e.GeographicTypeGeoKey = 4326, e.ModelTiepoint = [0, 0, 0, -180, 90, 0], e.GeogCitationGeoKey = "WGS 84", e.GTModelTypeGeoKey = 2);
  const g = Object.keys(e).filter((h) => zt(h, "GeoKey")).sort((h, C) => ie[h] - ie[C]);
  if (!e.GeoAsciiParams) {
    let h = "";
    g.forEach((C) => {
      const l = Number(ie[C]);
      Ye[l] === "ASCII" && (h += `${e[C].toString()}\0`);
    }), h.length > 0 && (e.GeoAsciiParams = h);
  }
  if (!e.GeoKeyDirectory) {
    const C = [1, 1, 0, g.length];
    g.forEach((l) => {
      const a = Number(ie[l]);
      C.push(a);
      let m, u, A;
      Ye[a] === "SHORT" ? (m = 1, u = 0, A = e[l]) : l === "GeogCitationGeoKey" ? (m = e.GeoAsciiParams.length, u = Number(ie.GeoAsciiParams), A = 0) : console.log(`[geotiff.js] couldn't get TIFFTagLocation for ${l}`), C.push(u), C.push(m), C.push(A);
    }), e.GeoKeyDirectory = C;
  }
  for (const h of g)
    e.hasOwnProperty(h) && delete e[h];
  [
    "Compression",
    "ExtraSamples",
    "GeographicTypeGeoKey",
    "GTModelTypeGeoKey",
    "GTRasterTypeGeoKey",
    "ImageLength",
    // synonym of ImageHeight
    "ImageWidth",
    "Orientation",
    "PhotometricInterpretation",
    "ProjectedCSTypeGeoKey",
    "PlanarConfiguration",
    "ResolutionUnit",
    "SamplesPerPixel",
    "XPosition",
    "YPosition",
    "RowsPerStrip"
  ].forEach((h) => {
    e[h] && (e[h] = Ys(e[h]));
  });
  const c = Ws(e);
  return ws(r, o, s, c);
}
class Fs {
  log() {
  }
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
  time() {
  }
  timeEnd() {
  }
}
function Xs(i = new Fs()) {
}
function Ss(i, e) {
  let t = i.length - e, s = 0;
  do {
    for (let n = e; n > 0; n--)
      i[s + e] += i[s], s++;
    t -= e;
  } while (t > 0);
}
function Hs(i, e, t) {
  let s = 0, n = i.length;
  const o = n / t;
  for (; n > e; ) {
    for (let g = e; g > 0; --g)
      i[s + e] += i[s], ++s;
    n -= e;
  }
  const r = i.slice();
  for (let g = 0; g < o; ++g)
    for (let c = 0; c < t; ++c)
      i[t * g + c] = r[(t - c - 1) * o + g];
}
function Js(i, e, t, s, n, o) {
  if (e === 1)
    return i;
  for (let c = 0; c < n.length; ++c) {
    if (n[c] % 8 !== 0)
      throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");
    if (n[c] !== n[0])
      throw new Error("When decoding with predictor, all samples must have the same size.");
  }
  const r = n[0] / 8, g = o === 2 ? 1 : n.length;
  for (let c = 0; c < s && !(c * g * t * r >= i.byteLength); ++c) {
    let I;
    if (e === 2) {
      switch (n[0]) {
        case 8:
          I = new Uint8Array(
            i,
            c * g * t * r,
            g * t * r
          );
          break;
        case 16:
          I = new Uint16Array(
            i,
            c * g * t * r,
            g * t * r / 2
          );
          break;
        case 32:
          I = new Uint32Array(
            i,
            c * g * t * r,
            g * t * r / 4
          );
          break;
        default:
          throw new Error(`Predictor 2 not allowed with ${n[0]} bits per sample.`);
      }
      Ss(I, g);
    } else e === 3 && (I = new Uint8Array(
      i,
      c * g * t * r,
      g * t * r
    ), Hs(I, g, r));
  }
  return i;
}
class Ns {
  async decode(e, t) {
    const s = await this.decodeBlock(t), n = e.Predictor || 1;
    if (n !== 1) {
      const o = !e.StripOffsets, r = o ? e.TileWidth : e.ImageWidth, g = o ? e.TileLength : e.RowsPerStrip || e.ImageLength;
      return Js(
        s,
        n,
        r,
        g,
        e.BitsPerSample,
        e.PlanarConfiguration
      );
    }
    return s;
  }
}
function Te(i) {
  switch (i) {
    case X.BYTE:
    case X.ASCII:
    case X.SBYTE:
    case X.UNDEFINED:
      return 1;
    case X.SHORT:
    case X.SSHORT:
      return 2;
    case X.LONG:
    case X.SLONG:
    case X.FLOAT:
    case X.IFD:
      return 4;
    case X.RATIONAL:
    case X.SRATIONAL:
    case X.DOUBLE:
    case X.LONG8:
    case X.SLONG8:
    case X.IFD8:
      return 8;
    default:
      throw new RangeError(`Invalid field type: ${i}`);
  }
}
function Ks(i) {
  const e = i.GeoKeyDirectory;
  if (!e)
    return null;
  const t = {};
  for (let s = 4; s <= e[3] * 4; s += 4) {
    const n = Ce[e[s]], o = e[s + 1] ? ce[e[s + 1]] : null, r = e[s + 2], g = e[s + 3];
    let c = null;
    if (!o)
      c = g;
    else {
      if (c = i[o], typeof c > "u" || c === null)
        throw new Error(`Could not get value of geoKey '${n}'.`);
      typeof c == "string" ? c = c.substring(g, g + r - 1) : c.subarray && (c = c.subarray(g, g + r), r === 1 && (c = c[0]));
    }
    t[n] = c;
  }
  return t;
}
function ae(i, e, t, s) {
  let n = null, o = null;
  const r = Te(e);
  switch (e) {
    case X.BYTE:
    case X.ASCII:
    case X.UNDEFINED:
      n = new Uint8Array(t), o = i.readUint8;
      break;
    case X.SBYTE:
      n = new Int8Array(t), o = i.readInt8;
      break;
    case X.SHORT:
      n = new Uint16Array(t), o = i.readUint16;
      break;
    case X.SSHORT:
      n = new Int16Array(t), o = i.readInt16;
      break;
    case X.LONG:
    case X.IFD:
      n = new Uint32Array(t), o = i.readUint32;
      break;
    case X.SLONG:
      n = new Int32Array(t), o = i.readInt32;
      break;
    case X.LONG8:
    case X.IFD8:
      n = new Array(t), o = i.readUint64;
      break;
    case X.SLONG8:
      n = new Array(t), o = i.readInt64;
      break;
    case X.RATIONAL:
      n = new Uint32Array(t * 2), o = i.readUint32;
      break;
    case X.SRATIONAL:
      n = new Int32Array(t * 2), o = i.readInt32;
      break;
    case X.FLOAT:
      n = new Float32Array(t), o = i.readFloat32;
      break;
    case X.DOUBLE:
      n = new Float64Array(t), o = i.readFloat64;
      break;
    default:
      throw new RangeError(`Invalid field type: ${e}`);
  }
  if (e === X.RATIONAL || e === X.SRATIONAL)
    for (let g = 0; g < t; g += 2)
      n[g] = o.call(
        i,
        s + g * r
      ), n[g + 1] = o.call(
        i,
        s + (g * r + 4)
      );
  else
    for (let g = 0; g < t; ++g)
      n[g] = o.call(
        i,
        s + g * r
      );
  return e === X.ASCII ? new TextDecoder("utf-8").decode(n) : n;
}
class xs {
  constructor(e, t, s) {
    this.fileDirectory = e, this.geoKeyDirectory = t, this.nextIFDByteOffset = s;
  }
}
class Be extends Error {
  constructor(e) {
    super(`No image at index ${e}`), this.index = e;
  }
}
class Pt {
  /**
   * (experimental) Reads raster data from the best fitting image. This function uses
   * the image with the lowest resolution that is still a higher resolution than the
   * requested resolution.
   * When specified, the `bbox` option is translated to the `window` option and the
   * `resX` and `resY` to `width` and `height` respectively.
   * Then, the [readRasters]{@link GeoTIFFImage#readRasters} method of the selected
   * image is called and the result returned.
   * @see GeoTIFFImage.readRasters
   * @param {import('./geotiffimage').ReadRasterOptions} [options={}] optional parameters
   * @returns {Promise<ReadRasterResult>} the decoded array(s), with `height` and `width`, as a promise
   */
  async readRasters(e = {}) {
    const { window: t, width: s, height: n } = e;
    let { resX: o, resY: r, bbox: g } = e;
    const c = await this.getImage();
    let I = c;
    const h = await this.getImageCount(), C = c.getBoundingBox();
    if (t && g)
      throw new Error('Both "bbox" and "window" passed.');
    if (s || n) {
      if (t) {
        const [m, u] = c.getOrigin(), [A, y] = c.getResolution();
        g = [
          m + t[0] * A,
          u + t[1] * y,
          m + t[2] * A,
          u + t[3] * y
        ];
      }
      const a = g || C;
      if (s) {
        if (o)
          throw new Error("Both width and resX passed");
        o = (a[2] - a[0]) / s;
      }
      if (n) {
        if (r)
          throw new Error("Both width and resY passed");
        r = (a[3] - a[1]) / n;
      }
    }
    if (o || r) {
      const a = [];
      for (let m = 0; m < h; ++m) {
        const u = await this.getImage(m), { SubfileType: A, NewSubfileType: y } = u.fileDirectory;
        (m === 0 || A === 2 || y & 1) && a.push(u);
      }
      a.sort((m, u) => m.getWidth() - u.getWidth());
      for (let m = 0; m < a.length; ++m) {
        const u = a[m], A = (C[2] - C[0]) / u.getWidth(), y = (C[3] - C[1]) / u.getHeight();
        if (I = u, o && o > A || r && r > y)
          break;
      }
    }
    let l = t;
    if (g) {
      const [a, m] = c.getOrigin(), [u, A] = I.getResolution(c);
      l = [
        Math.round((g[0] - a) / u),
        Math.round((g[1] - m) / A),
        Math.round((g[2] - a) / u),
        Math.round((g[3] - m) / A)
      ], l = [
        Math.min(l[0], l[2]),
        Math.min(l[1], l[3]),
        Math.max(l[0], l[2]),
        Math.max(l[1], l[3])
      ];
    }
    return I.readRasters({ ...e, window: l });
  }
}
class q extends Pt {
  /**
   * @constructor
   * @param {*} source The datasource to read from.
   * @param {boolean} littleEndian Whether the image uses little endian.
   * @param {boolean} bigTiff Whether the image uses bigTIFF conventions.
   * @param {number} firstIFDOffset The numeric byte-offset from the start of the image
   *                                to the first IFD.
   * @param {GeoTIFFOptions} [options] further options.
   */
  constructor(e, t, s, n, o = {}) {
    super(), this.source = e, this.littleEndian = t, this.bigTiff = s, this.firstIFDOffset = n, this.cache = o.cache || !1, this.ifdRequests = [], this.ghostValues = null;
  }
  async getSlice(e, t) {
    const s = this.bigTiff ? 4048 : 1024;
    return new zi(
      (await this.source.fetch([{
        offset: e,
        length: typeof t < "u" ? t : s
      }]))[0],
      e,
      this.littleEndian,
      this.bigTiff
    );
  }
  /**
   * Instructs to parse an image file directory at the given file offset.
   * As there is no way to ensure that a location is indeed the start of an IFD,
   * this function must be called with caution (e.g only using the IFD offsets from
   * the headers or other IFDs).
   * @param {number} offset the offset to parse the IFD at
   * @returns {Promise<ImageFileDirectory>} the parsed IFD
   */
  async parseFileDirectoryAt(e) {
    const t = this.bigTiff ? 20 : 12, s = this.bigTiff ? 8 : 2;
    let n = await this.getSlice(e);
    const o = this.bigTiff ? n.readUint64(e) : n.readUint16(e), r = o * t + (this.bigTiff ? 16 : 6);
    n.covers(e, r) || (n = await this.getSlice(e, r));
    const g = {};
    let c = e + (this.bigTiff ? 8 : 2);
    for (let C = 0; C < o; c += t, ++C) {
      const l = n.readUint16(c), a = n.readUint16(c + 2), m = this.bigTiff ? n.readUint64(c + 4) : n.readUint32(c + 4);
      let u, A;
      const y = Te(a), f = c + (this.bigTiff ? 12 : 8);
      if (y * m <= (this.bigTiff ? 8 : 4))
        u = ae(n, a, m, f);
      else {
        const B = n.readOffset(f), p = Te(a) * m;
        if (n.covers(B, p))
          u = ae(n, a, m, B);
        else {
          const d = await this.getSlice(B, p);
          u = ae(d, a, m, B);
        }
      }
      m === 1 && Rt.indexOf(l) === -1 && !(a === X.RATIONAL || a === X.SRATIONAL) ? A = u[0] : A = u, g[ce[l]] = A;
    }
    const I = Ks(g), h = n.readOffset(
      e + s + t * o
    );
    return new xs(
      g,
      I,
      h
    );
  }
  async requestIFD(e) {
    if (this.ifdRequests[e])
      return this.ifdRequests[e];
    if (e === 0)
      return this.ifdRequests[e] = this.parseFileDirectoryAt(this.firstIFDOffset), this.ifdRequests[e];
    if (!this.ifdRequests[e - 1])
      try {
        this.ifdRequests[e - 1] = this.requestIFD(e - 1);
      } catch (t) {
        throw t instanceof Be ? new Be(e) : t;
      }
    return this.ifdRequests[e] = (async () => {
      const t = await this.ifdRequests[e - 1];
      if (t.nextIFDByteOffset === 0)
        throw new Be(e);
      return this.parseFileDirectoryAt(t.nextIFDByteOffset);
    })(), this.ifdRequests[e];
  }
  /**
   * Get the n-th internal subfile of an image. By default, the first is returned.
   *
   * @param {number} [index=0] the index of the image to return.
   * @returns {Promise<GeoTIFFImage>} the image at the given index
   */
  async getImage(e = 0) {
    const t = await this.requestIFD(e);
    return new it(
      t.fileDirectory,
      t.geoKeyDirectory,
      this.dataView,
      this.littleEndian,
      this.cache,
      this.source
    );
  }
  /**
   * Returns the count of the internal subfiles.
   *
   * @returns {Promise<number>} the number of internal subfile images
   */
  async getImageCount() {
    let e = 0, t = !0;
    for (; t; )
      try {
        await this.requestIFD(e), ++e;
      } catch (s) {
        if (s instanceof Be)
          t = !1;
        else
          throw s;
      }
    return e;
  }
  /**
   * Get the values of the COG ghost area as a parsed map.
   * See https://gdal.org/drivers/raster/cog.html#header-ghost-area for reference
   * @returns {Promise<Object>} the parsed ghost area or null, if no such area was found
   */
  async getGhostValues() {
    const e = this.bigTiff ? 16 : 8;
    if (this.ghostValues)
      return this.ghostValues;
    const t = "GDAL_STRUCTURAL_METADATA_SIZE=", s = t.length + 100;
    let n = await this.getSlice(e, s);
    if (t === ae(n, X.ASCII, t.length, e)) {
      const r = ae(n, X.ASCII, s, e).split(`
`)[0], g = Number(r.split("=")[1].split(" ")[0]) + r.length;
      g > s && (n = await this.getSlice(e, g));
      const c = ae(n, X.ASCII, g, e);
      this.ghostValues = {}, c.split(`
`).filter((I) => I.length > 0).map((I) => I.split("=")).forEach(([I, h]) => {
        this.ghostValues[I] = h;
      });
    }
    return this.ghostValues;
  }
  /**
   * Parse a (Geo)TIFF file from the given source.
   *
   * @param {*} source The source of data to parse from.
   * @param {GeoTIFFOptions} [options] Additional options.
   * @param {AbortSignal} [signal] An AbortSignal that may be signalled if the request is
   *                               to be aborted
   */
  static async fromSource(e, t, s) {
    const n = (await e.fetch([{ offset: 0, length: 1024 }], s))[0], o = new Ti(n), r = o.getUint16(0, 0);
    let g;
    if (r === 18761)
      g = !0;
    else if (r === 19789)
      g = !1;
    else
      throw new TypeError("Invalid byte order value.");
    const c = o.getUint16(2, g);
    let I;
    if (c === 42)
      I = !1;
    else if (c === 43) {
      if (I = !0, o.getUint16(4, g) !== 8)
        throw new Error("Unsupported offset byte-size.");
    } else
      throw new TypeError("Invalid magic number.");
    const h = I ? o.getUint64(8, g) : o.getUint32(4, g);
    return new q(e, g, I, h, t);
  }
  /**
   * Closes the underlying file buffer
   * N.B. After the GeoTIFF has been completely processed it needs
   * to be closed but only if it has been constructed from a file.
   */
  close() {
    return typeof this.source.close == "function" ? this.source.close() : !1;
  }
}
class Qt extends Pt {
  /**
   * Construct a new MultiGeoTIFF from a main and several overview files.
   * @param {GeoTIFF} mainFile The main GeoTIFF file.
   * @param {GeoTIFF[]} overviewFiles An array of overview files.
   */
  constructor(e, t) {
    super(), this.mainFile = e, this.overviewFiles = t, this.imageFiles = [e].concat(t), this.fileDirectoriesPerFile = null, this.fileDirectoriesPerFileParsing = null, this.imageCount = null;
  }
  async parseFileDirectoriesPerFile() {
    const e = [this.mainFile.parseFileDirectoryAt(this.mainFile.firstIFDOffset)].concat(this.overviewFiles.map((t) => t.parseFileDirectoryAt(t.firstIFDOffset)));
    return this.fileDirectoriesPerFile = await Promise.all(e), this.fileDirectoriesPerFile;
  }
  /**
   * Get the n-th internal subfile of an image. By default, the first is returned.
   *
   * @param {number} [index=0] the index of the image to return.
   * @returns {Promise<GeoTIFFImage>} the image at the given index
   */
  async getImage(e = 0) {
    await this.getImageCount(), await this.parseFileDirectoriesPerFile();
    let t = 0, s = 0;
    for (let n = 0; n < this.imageFiles.length; n++) {
      const o = this.imageFiles[n];
      for (let r = 0; r < this.imageCounts[n]; r++) {
        if (e === t) {
          const g = await o.requestIFD(s);
          return new it(
            g.fileDirectory,
            g.geoKeyDirectory,
            o.dataView,
            o.littleEndian,
            o.cache,
            o.source
          );
        }
        t++, s++;
      }
      s = 0;
    }
    throw new RangeError("Invalid image index");
  }
  /**
   * Returns the count of the internal subfiles.
   *
   * @returns {Promise<number>} the number of internal subfile images
   */
  async getImageCount() {
    if (this.imageCount !== null)
      return this.imageCount;
    const e = [this.mainFile.getImageCount()].concat(this.overviewFiles.map((t) => t.getImageCount()));
    return this.imageCounts = await Promise.all(e), this.imageCount = this.imageCounts.reduce((t, s) => t + s, 0), this.imageCount;
  }
}
async function We(i, e = {}, t) {
  return q.fromSource(De(i, e), t);
}
async function vs(i, e = {}, t) {
  return q.fromSource(Is(i, e), t);
}
async function ze(i, e) {
  return q.fromSource(hs(i), e);
}
async function ks(i, e) {
  return q.fromSource(fs(i), e);
}
async function ue(i, e) {
  return q.fromSource(ds(i), e);
}
async function Ds(i, e = [], t = {}, s) {
  const n = await q.fromSource(De(i, t), s), o = await Promise.all(
    e.map((r) => q.fromSource(De(r, t)))
  );
  return new Qt(n, o);
}
function Ts(i, e) {
  return Rs(i, e);
}
const zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseClient: Xe,
  BaseDecoder: Ns,
  BaseResponse: Fe,
  GeoTIFF: q,
  GeoTIFFImage: it,
  MultiGeoTIFF: Qt,
  Pool: kt,
  addDecoder: ne,
  default: q,
  fromArrayBuffer: ze,
  fromBlob: ue,
  fromCustomClient: vs,
  fromFile: ks,
  fromUrl: We,
  fromUrls: Ds,
  getDecoder: tt,
  globals: Yi,
  rgb: Xi,
  setLogger: Xs,
  writeArrayBuffer: Ts
}, Symbol.toStringTag, { value: "Module" }));
class xe {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.reject = t, this.resolve = e;
    });
  }
}
const lt = {};
function se(i, e, t = "warn") {
  lt[i] || (lt[i] = !0, console[t](e));
}
const Ps = (i) => {
  var t, s, n;
  const e = /* @__PURE__ */ new Map();
  for (const o of i) {
    const r = new DOMParser().parseFromString(
      (t = o.fileDirectory) == null ? void 0 : t.ImageDescription,
      "text/xml"
    ), g = (s = r == null ? void 0 : r.querySelector("Name")) == null ? void 0 : s.textContent, c = (n = r == null ? void 0 : r.querySelector("Color")) == null ? void 0 : n.textContent;
    if (!g)
      continue;
    const I = c ? c.split(",").map((h) => parseInt(h)) : [255, 255, 255];
    e.has(g) || e.set(g, {
      name: g,
      color: I,
      images: []
    }), e.get(g).images.push(o);
  }
  return e;
};
class re {
  static RGBAfromYCbCr(...e) {
    let t, s, n;
    if (e.length === 1) {
      const g = e[0], c = new Uint8ClampedArray(g.length * 4 / 3);
      for (let I = 0, h = 0; I < g.length; I += 3, h += 4)
        t = g[I], s = g[I + 1], n = g[I + 2], c[h] = t + 1.402 * (n - 128), c[h + 1] = t - 0.34414 * (s - 128) - 0.71414 * (n - 128), c[h + 2] = t + 1.772 * (s - 128), c[h + 3] = 255;
      return c;
    }
    [t, s, n] = e;
    const o = t.length, r = new Uint8ClampedArray(o * 4);
    for (let g = 0, c = 0; g < o; g++, c += 4) {
      const I = t[g], h = s[g], C = n[g];
      r[c] = I + 1.402 * (C - 128), r[c + 1] = I - 0.34414 * (h - 128) - 0.71414 * (C - 128), r[c + 2] = I + 1.772 * (h - 128), r[c + 3] = 255;
    }
    return r;
  }
  static RGBAfromRGB(...e) {
    if (e.length === 1) {
      const c = e[0], I = new Uint8ClampedArray(c.length * 4 / 3);
      for (let h = 0, C = 0; h < c.length; h += 3, C += 4)
        I[C] = c[h], I[C + 1] = c[h + 1], I[C + 2] = c[h + 2], I[C + 3] = 255;
      return I;
    }
    const t = e[0], s = e[1], n = e[2], o = e.length >= 4 ? e[3] : null, r = t.length, g = new Uint8ClampedArray(r * 4);
    for (let c = 0, I = 0; c < r; c++, I += 4)
      g[I] = t[c], g[I + 1] = s[c], g[I + 2] = n[c], g[I + 3] = o ? o[c] : 255;
    return g;
  }
  static RGBAfromWhiteIsZero(e, t) {
    const s = new Uint8ClampedArray(e.length * 4);
    let n;
    for (let o = 0, r = 0; o < e.length; ++o, r += 4)
      n = 256 - e[o] / t * 256, s[r] = n, s[r + 1] = n, s[r + 2] = n, s[r + 3] = 255;
    return s;
  }
  static RGBAfromBlackIsZero(e, t) {
    const s = new Uint8ClampedArray(e.length * 4);
    let n;
    for (let o = 0, r = 0; o < e.length; ++o, r += 4)
      n = e[o] / t * 256, s[r] = n, s[r + 1] = n, s[r + 2] = n, s[r + 3] = 255;
    return s;
  }
  static RGBAfromPalette(e, t) {
    const s = new Uint8ClampedArray(e.length * 4), n = t.length / 3, o = t.length / 3 * 2;
    for (let r = 0, g = 0; r < e.length; ++r, g += 4) {
      const c = e[r];
      s[g] = t[c] / 65536 * 256, s[g + 1] = t[c + n] / 65536 * 256, s[g + 2] = t[c + o] / 65536 * 256, s[g + 3] = 255;
    }
    return s;
  }
  static RGBAfromCMYK(...e) {
    if (e.length === 1) {
      const c = e[0], I = new Uint8ClampedArray(c.length);
      for (let h = 0, C = 0; h < c.length; h += 4, C += 4) {
        const l = c[h], a = c[h + 1], m = c[h + 2], u = c[h + 3];
        I[C] = 255 * ((255 - l) / 256) * ((255 - u) / 256), I[C + 1] = 255 * ((255 - a) / 256) * ((255 - u) / 256), I[C + 2] = 255 * ((255 - m) / 256) * ((255 - u) / 256), I[C + 3] = 255;
      }
      return I;
    }
    const t = e[0], s = e[1], n = e[2], o = e[3], r = t.length, g = new Uint8ClampedArray(r * 4);
    for (let c = 0, I = 0; c < r; c++, I += 4) {
      const h = t[c], C = s[c], l = n[c], a = o[c];
      g[I] = 255 * ((255 - h) / 256) * ((255 - a) / 256), g[I + 1] = 255 * ((255 - C) / 256) * ((255 - a) / 256), g[I + 2] = 255 * ((255 - l) / 256) * ((255 - a) / 256), g[I + 3] = 255;
    }
    return g;
  }
  static RGBAfromCIELab(...e) {
    const o = (C, l, a) => {
      const m = l << 24 >> 24, u = a << 24 >> 24;
      let A = (C + 16) / 116, y = m / 500 + A, f = A - u / 200;
      y = 0.95047 * (y * y * y > 8856e-6 ? y * y * y : (y - 0.13793103448275862) / 7.787), A = 1 * (A * A * A > 8856e-6 ? A * A * A : (A - 0.13793103448275862) / 7.787), f = 1.08883 * (f * f * f > 8856e-6 ? f * f * f : (f - 0.13793103448275862) / 7.787);
      let B = y * 3.2406 + A * -1.5372 + f * -0.4986, p = y * -0.9689 + A * 1.8758 + f * 0.0415, d = y * 0.0557 + A * -0.204 + f * 1.057;
      return B = B > 31308e-7 ? 1.055 * B ** 0.4166666666666667 - 0.055 : 12.92 * B, p = p > 31308e-7 ? 1.055 * p ** 0.4166666666666667 - 0.055 : 12.92 * p, d = d > 31308e-7 ? 1.055 * d ** 0.4166666666666667 - 0.055 : 12.92 * d, [
        Math.max(0, Math.min(1, B)) * 255,
        Math.max(0, Math.min(1, p)) * 255,
        Math.max(0, Math.min(1, d)) * 255
      ];
    };
    if (e.length === 1) {
      const C = e[0], l = new Uint8ClampedArray(C.length * 4 / 3);
      for (let a = 0, m = 0; a < C.length; a += 3, m += 4) {
        const [u, A, y] = o(C[a], C[a + 1], C[a + 2]);
        l[m] = u, l[m + 1] = A, l[m + 2] = y, l[m + 3] = 255;
      }
      return l;
    }
    const r = e[0], g = e[1], c = e[2], I = r.length, h = new Uint8ClampedArray(I * 4);
    for (let C = 0, l = 0; C < I; C++, l += 4) {
      const [a, m, u] = o(r[C], g[C], c[C]);
      h[l] = a, h[l + 1] = m, h[l + 2] = u, h[l + 3] = 255;
    }
    return h;
  }
}
const Qs = {
  interpretation: "auto",
  channels: null,
  gpu: {
    preferRGBA8: !0,
    forceRGBA16F: !1,
    packMode: "packsOf4"
  },
  image: {
    rgbaChannels: null
  },
  hints: {
    layout: {
      pyramid: "auto",
      planeIndex: 0,
      prefer: "pyramid"
    }
  }
};
function Us() {
  let i, e;
  return { promise: new Promise((s, n) => {
    i = s, e = n;
  }), resolve: i, reject: e };
}
function Ls(i) {
  try {
    return i ? typeof i == "string" ? i : i && typeof i.message == "string" ? i.message : JSON.stringify(i) : "Unknown error";
  } catch {
    return String(i);
  }
}
class Pe {
  constructor(e) {
    Object.assign(this, e);
  }
  getType() {
    return "gpuTextureSet";
  }
}
class Ms {
  /**
   * @param {Object} params
   * @param {number} params.size
   * @param {() => Worker} params.createWorker
   */
  constructor({ size: e, createWorker: t }) {
    this.size = Math.max(1, e | 0), this.createWorker = t, this.workers = [], this._nextId = 1;
    for (let s = 0; s < this.size; s++) {
      const n = this.createWorker(), o = { worker: n, pending: 0, callbacks: /* @__PURE__ */ new Map() };
      n.onmessage = (r) => {
        const g = r.data || {};
        if (g.kind === "warn") {
          se(
            g.code || "RawTiffWorker_warn",
            g.message || "[RawTiffWorker] warning",
            "warn"
          );
          return;
        }
        const c = g.id, I = o.callbacks.get(c);
        I && (o.callbacks.delete(c), o.pending = Math.max(0, o.pending - 1), g.ok ? I.resolve(g.result) : I.reject(new Error(Ls(g.error))));
      }, n.onerror = (r) => {
        for (const g of o.callbacks.values())
          g.reject(r instanceof Error ? r : new Error(String(r)));
        o.callbacks.clear(), o.pending = 0;
      }, this.workers.push(o);
    }
  }
  /**
   * @param {string} op
   * @param {any} payload
   * @param {Transferable[]} [transfer]
   * @returns {Promise<any>}
   */
  request(e, t, s) {
    const n = this._nextId++, o = Us();
    let r = this.workers[0];
    for (const g of this.workers)
      g.pending < r.pending && (r = g);
    r.pending++, r.callbacks.set(n, o);
    try {
      s && s.length ? r.worker.postMessage({ id: n, op: e, payload: t }, s) : r.worker.postMessage({ id: n, op: e, payload: t });
    } catch (g) {
      r.callbacks.delete(n), r.pending = Math.max(0, r.pending - 1), o.reject(g);
    }
    return o.promise;
  }
  terminate() {
    for (const e of this.workers) {
      try {
        e.worker.terminate();
      } catch {
      }
      e.callbacks.clear(), e.pending = 0;
    }
    this.workers.length = 0;
  }
}
function Os() {
  return new globalThis.Worker(new URL("data:text/javascript;base64,LyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovCi8qKgogKiBSYXdUSUZGIHdvcmtlciBmb3IgT3BlblNlYWRyYWdvbiBjb252ZXJ0ZXIgcGx1Z2luLgogKgogKiBSZXNwb25zaWJpbGl0aWVzOgogKiAgLSBkZWNvZGVSYXN0ZXI6IHJhdyBUSUZGIGJ5dGVzIC0+IG11bHRpLWJhbmQgcmFzdGVyIHBheWxvYWQgKHRyYW5zZmVyYWJsZSBiYW5kIGJ1ZmZlcnMpCiAqICAtIGRlY29kZUFuZFJlbmRlckltYWdlQml0bWFwOiByYXcgVElGRiBieXRlcyAtPiBJbWFnZUJpdG1hcCAocHJlZmVycmVkKSBvciBSR0JBOCBmYWxsYmFjawogKiAgLSBkZWNvZGVBbmRQYWNrR3B1VGV4dHVyZVNldDogcmF3IFRJRkYgYnl0ZXMgLT4gR1BVLXBhY2tlZCB0ZXh0dXJlIHNldCAoUkdCQTggb3IgUkdCQTE2RikKICogIC0gcmFzdGVyVG9HcHVUZXh0dXJlU2V0OiByYXN0ZXIgcGF5bG9hZCAtPiBHUFUtcGFja2VkIHRleHR1cmUgc2V0IChSR0JBOCBvciBSR0JBMTZGKQogKgogKiBUaGUgImZvcm1hdCIgb3ZlcnJpZGUgaXMgcHJvdmlkZWQgZXh0ZXJuYWxseSBhbmQgbXVzdCBhcnJpdmUgdmlhOgogKiAgIHBheWxvYWQuaGludHMuZm9ybWF0UmVzb2x2ZWQgKHByZWZlcnJlZCkgT1IgcGF5bG9hZC5oaW50cy5mb3JtYXQKICovCgppbXBvcnQgeyBmcm9tQXJyYXlCdWZmZXIgfSBmcm9tICJnZW90aWZmIjsKaW1wb3J0IHsgQ29udmVydGVycyB9IGZyb20gIi4uL3V0aWxzL0NvbnZlcnRlcnMuanMiOwoKLy8gVGVzdHMgaW4gbm9kZSBoYXZlIG5vIHNlbGYuCmNvbnN0IHdvcmtlclJlZiA9IHNlbGYgfHwgZ2xvYmFsVGhpczsKCmZ1bmN0aW9uIHdvcmtlcldhcm4oY29kZSwgbWVzc2FnZSkgewogIHdvcmtlclJlZi5wb3N0TWVzc2FnZSh7CiAgICBraW5kOiAid2FybiIsCiAgICBjb2RlLAogICAgbWVzc2FnZSwKICB9KTsKfQoKLy8gUGhvdG9tZXRyaWMgaW50ZXJwcmV0YXRpb24gY29uc3RhbnRzIChtYXRjaGluZyBUSUZGIHNwZWMgLyBnZW90aWZmLmpzKQpjb25zdCBQSSA9IHsKICBXaGl0ZUlzWmVybzogMCwKICBCbGFja0lzWmVybzogMSwKICBSR0I6IDIsCiAgUGFsZXR0ZTogMywKICBUcmFuc3BhcmVuY3lNYXNrOiA0LAogIENNWUs6IDUsCiAgWUNiQ3I6IDYsCiAgQ0lFTGFiOiA4LAp9OwoKZnVuY3Rpb24gZXJyb3JUb1BsYWluKGVycikgewogIHRyeSB7CiAgICBpZiAoIWVycikgcmV0dXJuICJVbmtub3duIGVycm9yIjsKICAgIGlmICh0eXBlb2YgZXJyID09PSAic3RyaW5nIikgcmV0dXJuIGVycjsKICAgIHJldHVybiBlcnIubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeShlcnIpOwogIH0gY2F0Y2ggewogICAgcmV0dXJuIFN0cmluZyhlcnIpOwogIH0KfQoKZnVuY3Rpb24gbm9ybWFsaXplUmFzdGVycyhyYXN0ZXJzKSB7CiAgaWYgKEFycmF5LmlzQXJyYXkocmFzdGVycykpIHJldHVybiByYXN0ZXJzOwogIHJldHVybiBbcmFzdGVyc107Cn0KCmZ1bmN0aW9uIGdldFBob3RvbWV0cmljKGZpbGVEaXJlY3RvcnkpIHsKICByZXR1cm4gZmlsZURpcmVjdG9yeSAmJiB0eXBlb2YgZmlsZURpcmVjdG9yeS5QaG90b21ldHJpY0ludGVycHJldGF0aW9uID09PSAibnVtYmVyIgogICAgPyBmaWxlRGlyZWN0b3J5LlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24KICAgIDogdW5kZWZpbmVkOwp9CgpmdW5jdGlvbiBnZXRDb2xvck1hcChmaWxlRGlyZWN0b3J5KSB7CiAgcmV0dXJuIGZpbGVEaXJlY3RvcnkgPyAoZmlsZURpcmVjdG9yeS5Db2xvck1hcCB8fCBudWxsKSA6IG51bGw7Cn0KCmZ1bmN0aW9uIGdldEJpdHNQZXJTYW1wbGUoaW1nKSB7CiAgdHJ5IHsKICAgIGlmICh0eXBlb2YgaW1nLmdldEJpdHNQZXJTYW1wbGUgPT09ICJmdW5jdGlvbiIpIHJldHVybiBpbWcuZ2V0Qml0c1BlclNhbXBsZSgpOwogIH0gY2F0Y2ggeyAvKiBub29wICovIH0KICByZXR1cm4gKGltZyAmJiBpbWcuZmlsZURpcmVjdG9yeSAmJiBpbWcuZmlsZURpcmVjdG9yeS5CaXRzUGVyU2FtcGxlKSB8fCBbOF07Cn0KCmZ1bmN0aW9uIGdldFNhbXBsZXNQZXJQaXhlbChpbWcpIHsKICB0cnkgewogICAgaWYgKHR5cGVvZiBpbWcuZ2V0U2FtcGxlc1BlclBpeGVsID09PSAiZnVuY3Rpb24iKSByZXR1cm4gaW1nLmdldFNhbXBsZXNQZXJQaXhlbCgpOwogIH0gY2F0Y2ggeyAvKiBub29wICovIH0KICByZXR1cm4gKGltZyAmJiBpbWcuZmlsZURpcmVjdG9yeSAmJiBpbWcuZmlsZURpcmVjdG9yeS5TYW1wbGVzUGVyUGl4ZWwpIHx8IDE7Cn0KCmZ1bmN0aW9uIGdldFNhbXBsZUZvcm1hdChpbWcpIHsKICBjb25zdCBmZCA9IGltZyAmJiBpbWcuZmlsZURpcmVjdG9yeTsKICByZXR1cm4gZmQgJiYgZmQuU2FtcGxlRm9ybWF0ID8gZmQuU2FtcGxlRm9ybWF0IDogbnVsbDsKfQoKZnVuY3Rpb24gcmV2aXZlQmFuZHMoZGVzY3MpIHsKICByZXR1cm4gZGVzY3MubWFwKChiKSA9PiB7CiAgICBjb25zdCBDdG9yID0gKHR5cGVvZiBiLmN0b3IgPT09ICJzdHJpbmciICYmIHdvcmtlclJlZltiLmN0b3JdKSA/IHdvcmtlclJlZltiLmN0b3JdIDogVWludDhBcnJheTsKICAgIHJldHVybiBuZXcgQ3RvcihiLmJ1ZmZlciwgYi5ieXRlT2Zmc2V0IHx8IDAsIGIubGVuZ3RoKTsKICB9KTsKfQoKZnVuY3Rpb24gaW5mZXJGcm9tVElGRlRhZ3MocmFzdGVyKSB7CiAgY29uc3Qgc3BwID0gcmFzdGVyLnNhbXBsZXNQZXJQaXhlbCB8fCAocmFzdGVyLmJhbmRzID8gcmFzdGVyLmJhbmRzLmxlbmd0aCA6IDEpOwogIGNvbnN0IHBpID0gcmFzdGVyLnBob3RvbWV0cmljSW50ZXJwcmV0YXRpb247CgogIC8vIElmIHBob3RvbWV0cmljIGNsZWFybHkgaW1wbGllcyBhbiBpbWFnZSwgdHJlYXQgYXMgaW1hZ2UuCiAgaWYgKAogICAgcGkgPT09IFBJLlJHQiB8fAogICAgcGkgPT09IFBJLllDYkNyIHx8CiAgICBwaSA9PT0gUEkuQ01ZSyB8fAogICAgcGkgPT09IFBJLkNJRUxhYiB8fAogICAgcGkgPT09IFBJLlBhbGV0dGUKICApIHsKICAgIHJldHVybiAiaW1hZ2UiOwogIH0KCiAgLy8gR3JheXNjYWxlICJpbWFnZSIgY2FzZQogIC8vIHRvZG86IGNvbnNpZGVyIHN0aWxsIG91dHB1dGluZyBhcyBkYXRhIHRvIHNhdmUgc3BhY2UgKHRoaXMgZm9yY2VzIFJHQkEgZXhwYW5zaW9uLCBhbHRob3VnaCBidXQgdGhlIGV4cGFuc2lvbgogIC8vICBoYXBwZW5zIHNvb25lciBvciBsYXRlciwgc3lzdGVtcyB0aGF0IGRpcmVjdGx5IHJlbmRlciB0aGUgZGF0YSBtaWdodCBlLmcuIGF2b2lkIHBhc3NpbmcgdGhlIGV4cGFuZGVkIGJhbmRzIHRvIGdwdSkKICBpZiAoKHBpID09PSBQSS5CbGFja0lzWmVybyB8fCBwaSA9PT0gUEkuV2hpdGVJc1plcm8pICYmIHNwcCA9PT0gMSkgewogICAgcmV0dXJuICJpbWFnZSI7CiAgfQoKICAvLyBEZWZhdWx0IHRvIGRhdGEgZm9yIHVua25vd24gUEkuCiAgcmV0dXJuICJkYXRhIjsKfQoKLyoqCiAqIEZsb2F0MzIgLT4gSUVFRS03NTQgaGFsZi1mbG9hdCBiaXRzIChVaW50MTYpLgogKiBQcm9kdWNlcyBjb3JyZWN0IEhBTEZfRkxPQVQgYml0IHBhdHRlcm5zIHN1aXRhYmxlIGZvciBXZWJHTCB1cGxvYWQuCiAqLwpmdW5jdGlvbiBmMzJUb0YxNkJpdHModmFsKSB7CiAgY29uc3QgZmxvYXRWaWV3ID0gbmV3IEZsb2F0MzJBcnJheSgxKTsKICBjb25zdCBpbnRWaWV3ID0gbmV3IFVpbnQzMkFycmF5KGZsb2F0Vmlldy5idWZmZXIpOwoKICBmbG9hdFZpZXdbMF0gPSB2YWw7CiAgY29uc3QgeCA9IGludFZpZXdbMF07CgogIGNvbnN0IHNpZ24gPSAoeCA+PiAzMSkgJiAweDE7CiAgbGV0IGV4cCA9ICh4ID4+IDIzKSAmIDB4RkY7CiAgbGV0IG1hbnQgPSB4ICYgMHg3RkZGRkY7CgogIC8vIE5hTi9JbmYKICBpZiAoZXhwID09PSAweEZGKSB7CiAgICBpZiAobWFudCAhPT0gMCkgcmV0dXJuIChzaWduIDw8IDE1KSB8IDB4N0UwMDsgLy8gcU5hTgogICAgcmV0dXJuIChzaWduIDw8IDE1KSB8IDB4N0MwMDsgLy8gSW5mCiAgfQoKICAvLyBEZW5vcm0vWmVybyBpbiBmMzIKICBpZiAoZXhwID09PSAwKSB7CiAgICByZXR1cm4gKHNpZ24gPDwgMTUpOyAvLyBmbHVzaCBzdWJub3JtYWxzIHRvIDAKICB9CgogIC8vIE5vcm1hbGl6ZSBleHBvbmVudCBmcm9tIGYzMiBiaWFzICgxMjcpIHRvIGYxNiBiaWFzICgxNSkKICBleHAgPSBleHAgLSAxMjcgKyAxNTsKCiAgLy8gT3ZlcmZsb3cgLT4gSW5mCiAgaWYgKGV4cCA+PSAweDFGKSByZXR1cm4gKHNpZ24gPDwgMTUpIHwgMHg3QzAwOwoKICAvLyBVbmRlcmZsb3cgLT4gMCAoZmx1c2gpCiAgaWYgKGV4cCA8PSAwKSByZXR1cm4gKHNpZ24gPDwgMTUpOwoKICAvLyBNYW50aXNzYTogZjMyIGhhcyAyMyBiaXRzLCBmMTYgaGFzIDEwIGJpdHMKICBtYW50ID0gbWFudCArIDB4MDAwMDEwMDA7IC8vIHJvdW5kaW5nCiAgaWYgKG1hbnQgJiAweDAwODAwMDAwKSB7CiAgICBtYW50ID0gMDsKICAgIGV4cCArPSAxOwogICAgaWYgKGV4cCA+PSAweDFGKSByZXR1cm4gKHNpZ24gPDwgMTUpIHwgMHg3QzAwOwogIH0KCiAgcmV0dXJuIChzaWduIDw8IDE1KSB8IChleHAgPDwgMTApIHwgKG1hbnQgPj4gMTMpOwp9CgpmdW5jdGlvbiByZXNvbHZlRm9ybWF0RnJvbUhpbnRzKGhpbnRzKSB7CiAgcmV0dXJuIChoaW50cyAmJiAoaGludHMuZm9ybWF0UmVzb2x2ZWQgfHwgaGludHMuZm9ybWF0KSkgfHwgbnVsbDsKfQoKLyoqCiAqIEltYWdlLW1vZGUgUkdCQTggcmVuZGVyZXIgdGhhdCByZXNwZWN0czoKICogIC0gcGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbgogKiAgLSBvcHRpb25hbCBmb3JtYXQuaW1hZ2UucmdiYUNoYW5uZWxzIG92ZXJyaWRlCiAqICAtIG9wdGlvbmFsIGhpbnRzLnJlbmRlckNoYW5uZWxzIG92ZXJyaWRlCiAqCiAqIE5PVEU6IFRoaXMgd29ya2VyIHZlcnNpb24gaXMgaW50ZW50aW9uYWxseSAiZGlzcGxheS1vcmllbnRlZCIgYW5kIGFzc3VtZXMgOC1iaXQtaXNoCiAqIGZvciBpbWFnZS1tb2RlLiBQcmVjaXNpb24tZm9jdXNlZCBwYWNraW5nIGhhcHBlbnMgYWZ0ZXIgdGhpcyBpZiBSR0JBMTZGIGlzIHJlcXVlc3RlZC4KICovCmZ1bmN0aW9uIHJhc3RlclRvUkdCQThfSW1hZ2VNb2RlKHJhc3RlciwgaGludHMsIGZvcm1hdCkgewogIGNvbnN0IHNwcCA9IHJhc3Rlci5zYW1wbGVzUGVyUGl4ZWwgfHwgKHJhc3Rlci5iYW5kcyA/IHJhc3Rlci5iYW5kcy5sZW5ndGggOiAxKTsKICBjb25zdCBwaG90b21ldHJpYyA9IHJhc3Rlci5waG90b21ldHJpY0ludGVycHJldGF0aW9uOwoKICAvLyBDaGFubmVsIG92ZXJyaWRlIHByZWNlZGVuY2U6CiAgLy8gZm9ybWF0LmltYWdlLnJnYmFDaGFubmVscyA+IGhpbnRzLnJlbmRlckNoYW5uZWxzID4gZGVmYXVsdCBiZWhhdmlvcgogIGxldCBjaGFubmVscyA9IG51bGw7CiAgaWYgKGZvcm1hdCAmJiBmb3JtYXQuaW1hZ2UgJiYgQXJyYXkuaXNBcnJheShmb3JtYXQuaW1hZ2UucmdiYUNoYW5uZWxzKSkgewogICAgY2hhbm5lbHMgPSBmb3JtYXQuaW1hZ2UucmdiYUNoYW5uZWxzLnNsaWNlKCk7CiAgfSBlbHNlIGlmIChoaW50cyAmJiBBcnJheS5pc0FycmF5KGhpbnRzLnJlbmRlckNoYW5uZWxzKSkgewogICAgY2hhbm5lbHMgPSBoaW50cy5yZW5kZXJDaGFubmVscy5zbGljZSgpOwogIH0KCiAgaWYgKGNoYW5uZWxzICYmIGNoYW5uZWxzLmxlbmd0aCA+IDQpIHsKICAgIHdvcmtlcldhcm4oCiAgICAgICJyZW5kZXJDaGFubmVscz40X3RvX1JHQkFfd29ya2VyIiwKICAgICAgYFt0aWZmLXdvcmtlcl0gUmVxdWVzdGVkICR7Y2hhbm5lbHMubGVuZ3RofSBjaGFubmVscyBmb3IgUkdCQSBvdXRwdXQ7IG9ubHkgNCBjYW4gYmUgcmVwcmVzZW50ZWQuIEV4dHJhIGNoYW5uZWxzIHdpbGwgYmUgZHJvcHBlZC5gCiAgICApOwogICAgY2hhbm5lbHMuc3BsaWNlKDQpOwogIH0KCiAgLy8gUGFsZXR0ZQogIGlmIChwaG90b21ldHJpYyA9PT0gUEkuUGFsZXR0ZSAmJiByYXN0ZXIuY29sb3JNYXApIHsKICAgIGNvbnN0IGluZGljZXMgPSByYXN0ZXIuYmFuZHNbMF07CiAgICByZXR1cm4gQ29udmVydGVycy5SR0JBZnJvbVBhbGV0dGUoaW5kaWNlcywgcmFzdGVyLmNvbG9yTWFwKTsKICB9CgogIC8vIFdoaXRlSXNaZXJvIC8gQmxhY2tJc1plcm8KICBpZiAoKHBob3RvbWV0cmljID09PSBQSS5XaGl0ZUlzWmVybyB8fCBwaG90b21ldHJpYyA9PT0gUEkuQmxhY2tJc1plcm8pICYmIHNwcCA+PSAxKSB7CiAgICBjb25zdCBiYW5kMCA9IHJhc3Rlci5iYW5kc1swXTsKICAgIGNvbnN0IGJpdHMgPSByYXN0ZXIuYml0c1BlclNhbXBsZSAmJiByYXN0ZXIuYml0c1BlclNhbXBsZVswXSAhPSBudWxsID8gcmFzdGVyLmJpdHNQZXJTYW1wbGVbMF0gOiA4OwogICAgY29uc3QgbWF4ID0gTWF0aC5wb3coMiwgYml0cykgLSAxOwogICAgaWYgKHBob3RvbWV0cmljID09PSBQSS5XaGl0ZUlzWmVybykgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21XaGl0ZUlzWmVybyhiYW5kMCwgbWF4KTsKICAgIHJldHVybiBDb252ZXJ0ZXJzLlJHQkFmcm9tQmxhY2tJc1plcm8oYmFuZDAsIG1heCk7CiAgfQoKICAvLyBJZiBleHBsaWNpdCBjaGFubmVsIG1hcHBpbmcgZXhpc3RzLCB1c2UgaXQgKHBsYW5hciAtPiBpbnRlcmxlYXZlZCAtPiBSR0JBKQogIGlmIChjaGFubmVscyAmJiBjaGFubmVscy5sZW5ndGggPj0gMSkgewogICAgY29uc3Qgd2lkdGggPSByYXN0ZXIud2lkdGg7CiAgICBjb25zdCBoZWlnaHQgPSByYXN0ZXIuaGVpZ2h0OwogICAgY29uc3QgcGl4ZWxDb3VudCA9IHdpZHRoICogaGVpZ2h0OwoKICAgIGlmIChjaGFubmVscy5sZW5ndGggPT09IDEpIHsKICAgICAgY29uc3QgYjAgPSByYXN0ZXIuYmFuZHNbY2hhbm5lbHNbMF1dOwogICAgICBjb25zdCBiaXRzID0gcmFzdGVyLmJpdHNQZXJTYW1wbGUgJiYgcmFzdGVyLmJpdHNQZXJTYW1wbGVbY2hhbm5lbHNbMF1dICE9IG51bGwgPyByYXN0ZXIuYml0c1BlclNhbXBsZVtjaGFubmVsc1swXV0gOiA4OwogICAgICBjb25zdCBtYXggPSBNYXRoLnBvdygyLCBiaXRzKSAtIDE7CiAgICAgIC8vIHRyZWF0IGFzIGJsYWNrLWlzLXplcm8gZm9yIHZpc3VhbGl6YXRpb24KICAgICAgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21CbGFja0lzWmVybyhiMCwgbWF4KTsKICAgIH0KCiAgICAvLyBidWlsZCBpbnRlcmxlYXZlZCB0bXAgYnl0ZXMgYnkgc2ltcGxlIGNsYW1waW5nIChiZXN0LWVmZm9ydCkKICAgIGNvbnN0IHRtcCA9IG5ldyBVaW50OENsYW1wZWRBcnJheShwaXhlbENvdW50ICogY2hhbm5lbHMubGVuZ3RoKTsKICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGl4ZWxDb3VudDsgaSsrKSB7CiAgICAgIGNvbnN0IGJhc2UgPSBpICogY2hhbm5lbHMubGVuZ3RoOwogICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNoYW5uZWxzLmxlbmd0aDsgYysrKSB7CiAgICAgICAgY29uc3QgYmkgPSBjaGFubmVsc1tjXTsKICAgICAgICBjb25zdCB2ID0gKGJpICE9IG51bGwgJiYgYmkgPj0gMCAmJiBiaSA8IHJhc3Rlci5iYW5kcy5sZW5ndGgpID8gcmFzdGVyLmJhbmRzW2JpXVtpXSA6IDA7CiAgICAgICAgdG1wW2Jhc2UgKyBjXSA9IHY7CiAgICAgIH0KICAgIH0KCiAgICAvLyBJZiB3ZSBhbHJlYWR5IGJ1aWx0IFJHQkEgKDRjaCkgYW5kIG5vIHNwZWNpYWwgcGhvdG9tZXRyaWMsIHJldHVybiBkaXJlY3RseS4KICAgIGlmIChjaGFubmVscy5sZW5ndGggPT09IDQgJiYgcGhvdG9tZXRyaWMgIT09IFBJLllDYkNyICYmIHBob3RvbWV0cmljICE9PSBQSS5DTVlLICYmIHBob3RvbWV0cmljICE9PSBQSS5DSUVMYWIpIHsKICAgICAgcmV0dXJuIHRtcDsKICAgIH0KICAgIGlmIChwaG90b21ldHJpYyA9PT0gUEkuWUNiQ3IgJiYgY2hhbm5lbHMubGVuZ3RoID49IDMpIHJldHVybiBDb252ZXJ0ZXJzLlJHQkFmcm9tWUNiQ3IodG1wKTsKICAgIGlmIChwaG90b21ldHJpYyA9PT0gUEkuQ01ZSyAmJiBjaGFubmVscy5sZW5ndGggPj0gNCkgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21DTVlLKHRtcCk7CiAgICBpZiAocGhvdG9tZXRyaWMgPT09IFBJLkNJRUxhYiAmJiBjaGFubmVscy5sZW5ndGggPj0gMykgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21DSUVMYWIodG1wKTsKICAgIGlmIChjaGFubmVscy5sZW5ndGggPT09IDMpIHJldHVybiBDb252ZXJ0ZXJzLlJHQkFmcm9tUkdCKHRtcCk7CgogICAgLy8gZmFsbGJhY2s6IGZvcmNlIGludG8gUkdCQQogICAgY29uc3Qgb3V0ID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHBpeGVsQ291bnQgKiA0KTsKICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IHBpeGVsQ291bnQ7IGkrKywgaiArPSA0KSB7CiAgICAgIGNvbnN0IGJhc2UgPSBpICogY2hhbm5lbHMubGVuZ3RoOwogICAgICBvdXRbal0gPSB0bXBbYmFzZV0gfHwgMDsKICAgICAgb3V0W2ogKyAxXSA9IHRtcFtiYXNlICsgMV0gfHwgMDsKICAgICAgb3V0W2ogKyAyXSA9IHRtcFtiYXNlICsgMl0gfHwgMDsKICAgICAgb3V0W2ogKyAzXSA9IChjaGFubmVscy5sZW5ndGggPj0gNCkgPyAodG1wW2Jhc2UgKyAzXSB8fCAyNTUpIDogMjU1OwogICAgfQogICAgcmV0dXJuIG91dDsKICB9CgogIC8vIFJHQiAvIFlDYkNyIC8gQ01ZSyAvIExhYiBkZWZhdWx0cwogIGlmIChwaG90b21ldHJpYyA9PT0gUEkuUkdCICYmIHNwcCA+PSAzKSB7CiAgICBjb25zdCByID0gcmFzdGVyLmJhbmRzWzBdOwogICAgY29uc3QgZyA9IHJhc3Rlci5iYW5kc1sxXTsKICAgIGNvbnN0IGIgPSByYXN0ZXIuYmFuZHNbMl07CiAgICBjb25zdCBhID0gc3BwID49IDQgPyByYXN0ZXIuYmFuZHNbM10gOiBudWxsOwogICAgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21SR0IociwgZywgYiwgYSk7CiAgfQoKICBpZiAocGhvdG9tZXRyaWMgPT09IFBJLllDYkNyICYmIHNwcCA+PSAzKSB7CiAgICBjb25zdCB5ID0gcmFzdGVyLmJhbmRzWzBdOwogICAgY29uc3QgY2IgPSByYXN0ZXIuYmFuZHNbMV07CiAgICBjb25zdCBjciA9IHJhc3Rlci5iYW5kc1syXTsKICAgIHJldHVybiBDb252ZXJ0ZXJzLlJHQkFmcm9tWUNiQ3IoeSwgY2IsIGNyKTsKICB9CgogIGlmIChwaG90b21ldHJpYyA9PT0gUEkuQ01ZSyAmJiBzcHAgPj0gNCkgewogICAgY29uc3QgYyA9IHJhc3Rlci5iYW5kc1swXTsKICAgIGNvbnN0IG0gPSByYXN0ZXIuYmFuZHNbMV07CiAgICBjb25zdCB5ID0gcmFzdGVyLmJhbmRzWzJdOwogICAgY29uc3QgayA9IHJhc3Rlci5iYW5kc1szXTsKICAgIHJldHVybiBDb252ZXJ0ZXJzLlJHQkFmcm9tQ01ZSyhjLCBtLCB5LCBrKTsKICB9CgogIGlmIChwaG90b21ldHJpYyA9PT0gUEkuQ0lFTGFiICYmIHNwcCA+PSAzKSB7CiAgICBjb25zdCBsID0gcmFzdGVyLmJhbmRzWzBdOwogICAgY29uc3QgYSA9IHJhc3Rlci5iYW5kc1sxXTsKICAgIGNvbnN0IGIgPSByYXN0ZXIuYmFuZHNbMl07CiAgICByZXR1cm4gQ29udmVydGVycy5SR0JBZnJvbUNJRUxhYihsLCBhLCBiKTsKICB9CgogIC8vIEZhbGxiYWNrIGdyYXlzY2FsZQogIGNvbnN0IGJhbmQwID0gcmFzdGVyLmJhbmRzWzBdOwogIGNvbnN0IGJpdHMgPSByYXN0ZXIuYml0c1BlclNhbXBsZSAmJiByYXN0ZXIuYml0c1BlclNhbXBsZVswXSAhPSBudWxsID8gcmFzdGVyLmJpdHNQZXJTYW1wbGVbMF0gOiA4OwogIGNvbnN0IG1heCA9IE1hdGgucG93KDIsIGJpdHMpIC0gMTsKICByZXR1cm4gQ29udmVydGVycy5SR0JBZnJvbUJsYWNrSXNaZXJvKGJhbmQwLCBtYXgpOwp9CgpmdW5jdGlvbiBwYWNrQ2Fub25pY2FsUkdCQShyZ2JhOCwgd2lkdGgsIGhlaWdodCwgZm9ybWF0KSB7CiAgY29uc3QgZ3B1ID0gKGZvcm1hdCAmJiBmb3JtYXQuZ3B1KSB8fCB7fTsKICBjb25zdCBwcmVmZXJSR0JBOCA9IGdwdS5wcmVmZXJSR0JBOCAhPT0gZmFsc2U7CiAgY29uc3QgZm9yY2VSR0JBMTZGID0gISFncHUuZm9yY2VSR0JBMTZGOwoKICAvLyBSR0JBOCBpcyB0aGUgZGVmYXVsdCBmb3IgaW1hZ2UtbW9kZSB1bmxlc3MgZm9yY2VkIHRvIDE2RgogIGlmIChwcmVmZXJSR0JBOCAmJiAhZm9yY2VSR0JBMTZGKSB7CiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkocmdiYTguYnVmZmVyLCByZ2JhOC5ieXRlT2Zmc2V0LCByZ2JhOC5ieXRlTGVuZ3RoKTsKICAgIHJldHVybiB7CiAgICAgIHdpZHRoLAogICAgICBoZWlnaHQsCiAgICAgIG1vZGU6ICJpbWFnZSIsCiAgICAgIGNoYW5uZWxDb3VudDogNCwKICAgICAgcGFja3M6IFt7CiAgICAgICAgZm9ybWF0OiAiUkdCQTgiLAogICAgICAgIGRhdGE6IHsKICAgICAgICAgIGN0b3I6ICJVaW50OEFycmF5IiwKICAgICAgICAgIGJ1ZmZlcjogZGF0YS5idWZmZXIsCiAgICAgICAgICBieXRlT2Zmc2V0OiBkYXRhLmJ5dGVPZmZzZXQsCiAgICAgICAgICBsZW5ndGg6IGRhdGEubGVuZ3RoLAogICAgICAgIH0sCiAgICAgICAgY2hhbm5lbHM6IFswLCAxLCAyLCAzXSwKICAgICAgICBub3JtYWxpemVkOiBmYWxzZSwKICAgICAgICBzY2FsZTogWzEsIDEsIDEsIDFdLAogICAgICAgIG9mZnNldDogWzAsIDAsIDAsIDBdLAogICAgICB9XSwKICAgIH07CiAgfQoKICAvLyBSR0JBMTZGIGltYWdlLW1vZGU6IGNvbnZlcnQgYnl0ZXMgLT4gZmxvYXQgLT4gaGFsZgogIGNvbnN0IHB4ID0gd2lkdGggKiBoZWlnaHQ7CiAgY29uc3Qgb3V0ID0gbmV3IFVpbnQxNkFycmF5KHB4ICogNCk7CiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXQubGVuZ3RoOyBpKyspIHsKICAgIC8vIHN0b3JlIDAuLjI1NSBhcyBmbG9hdCAwLi4yNTUgKGlkZW50aXR5KTsgc2hhZGVyIGNhbiB0cmVhdCBhcyBsaW5lYXIgZGlzcGxheQogICAgb3V0W2ldID0gZjMyVG9GMTZCaXRzKHJnYmE4W2ldKTsKICB9CgogIHJldHVybiB7CiAgICB3aWR0aCwKICAgIGhlaWdodCwKICAgIG1vZGU6ICJpbWFnZSIsCiAgICBjaGFubmVsQ291bnQ6IDQsCiAgICBwYWNrczogW3sKICAgICAgZm9ybWF0OiAiUkdCQTE2RiIsCiAgICAgIGRhdGE6IHsKICAgICAgICBjdG9yOiAiVWludDE2QXJyYXkiLAogICAgICAgIGJ1ZmZlcjogb3V0LmJ1ZmZlciwKICAgICAgICBieXRlT2Zmc2V0OiAwLAogICAgICAgIGxlbmd0aDogb3V0Lmxlbmd0aCwKICAgICAgfSwKICAgICAgY2hhbm5lbHM6IFswLCAxLCAyLCAzXSwKICAgICAgbm9ybWFsaXplZDogZmFsc2UsCiAgICAgIHNjYWxlOiBbMSwgMSwgMSwgMV0sCiAgICAgIG9mZnNldDogWzAsIDAsIDAsIDBdLAogICAgfV0sCiAgfTsKfQoKZnVuY3Rpb24gcGFja0JhbmRzQXNEYXRhKHJhc3RlciwgZm9ybWF0KSB7CiAgY29uc3QgZ3B1ID0gKGZvcm1hdCAmJiBmb3JtYXQuZ3B1KSB8fCB7fTsKICBjb25zdCBwcmVmZXJSR0JBOCA9IGdwdS5wcmVmZXJSR0JBOCAhPT0gZmFsc2U7CiAgY29uc3QgZm9yY2VSR0JBMTZGID0gISFncHUuZm9yY2VSR0JBMTZGOwoKICBjb25zdCB3aWR0aCA9IHJhc3Rlci53aWR0aDsKICBjb25zdCBoZWlnaHQgPSByYXN0ZXIuaGVpZ2h0OwogIGNvbnN0IHBpeGVsQ291bnQgPSB3aWR0aCAqIGhlaWdodDsKCiAgY29uc3QgYmFuZENvdW50ID0gcmFzdGVyLmJhbmRzID8gcmFzdGVyLmJhbmRzLmxlbmd0aCA6IDA7CiAgY29uc3QgY2hhbm5lbHMgPSAoZm9ybWF0ICYmIEFycmF5LmlzQXJyYXkoZm9ybWF0LmNoYW5uZWxzKSAmJiBmb3JtYXQuY2hhbm5lbHMubGVuZ3RoKQogICAgPyBmb3JtYXQuY2hhbm5lbHMuc2xpY2UoKQogICAgOiBbLi4uQXJyYXkoYmFuZENvdW50KS5rZXlzKCldOwogIGNvbnN0IGNoYW5uZWxDb3VudCA9IGNoYW5uZWxzLmZpbHRlcigoYykgPT4gYyAhPSBudWxsICYmIGMgPj0gMCkubGVuZ3RoOwoKICAvLyBEZWNpZGUgUkdCQTggdnMgUkdCQTE2RgogIGNvbnN0IGFsbFU4ID0gY2hhbm5lbHMuZXZlcnkoKGMpID0+IHsKICAgIGNvbnN0IGIgPSByYXN0ZXIuYmFuZHNbY107CiAgICByZXR1cm4gYiBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgfHwgYiBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5OwogIH0pOwogIGNvbnN0IHVzZVJHQkE4ID0gcHJlZmVyUkdCQTggJiYgIWZvcmNlUkdCQTE2RiAmJiBhbGxVODsKCiAgY29uc3QgcGFja3MgPSBbXTsKICBmb3IgKGxldCBwID0gMDsgcCA8IGNoYW5uZWxzLmxlbmd0aDsgcCArPSA0KSB7CiAgICBjb25zdCBwYWNrQ2ggPSBbCiAgICAgIGNoYW5uZWxzW3BdID8/IC0xLAogICAgICBjaGFubmVsc1twICsgMV0gPz8gLTEsCiAgICAgIGNoYW5uZWxzW3AgKyAyXSA/PyAtMSwKICAgICAgY2hhbm5lbHNbcCArIDNdID8/IC0xLAogICAgXTsKCiAgICBpZiAodXNlUkdCQTgpIHsKICAgICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KHBpeGVsQ291bnQgKiA0KTsKICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgcGl4ZWxDb3VudDsgaSsrLCBqICs9IDQpIHsKICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykgewogICAgICAgICAgY29uc3QgYmkgPSBwYWNrQ2hba107CiAgICAgICAgICBkYXRhW2ogKyBrXSA9IChiaSA+PSAwICYmIGJpIDwgcmFzdGVyLmJhbmRzLmxlbmd0aCkgPyByYXN0ZXIuYmFuZHNbYmldW2ldIDogMDsKICAgICAgICB9CiAgICAgIH0KICAgICAgcGFja3MucHVzaCh7CiAgICAgICAgZm9ybWF0OiAiUkdCQTgiLAogICAgICAgIGRhdGE6IHsgY3RvcjogIlVpbnQ4QXJyYXkiLCBidWZmZXI6IGRhdGEuYnVmZmVyLCBieXRlT2Zmc2V0OiAwLCBsZW5ndGg6IGRhdGEubGVuZ3RoIH0sCiAgICAgICAgY2hhbm5lbHM6IHBhY2tDaCwKICAgICAgICBub3JtYWxpemVkOiBmYWxzZSwKICAgICAgICBzY2FsZTogWzEsIDEsIDEsIDFdLAogICAgICAgIG9mZnNldDogWzAsIDAsIDAsIDBdLAogICAgICB9KTsKICAgICAgY29udGludWU7CiAgICB9CgogICAgLy8gUkdCQTE2RiBwYWNraW5nIHdpdGggImF1dG8gbm9ybWFsaXphdGlvbiBpZiBuZWVkZWQiCiAgICAvLyBJZiBpbnRlZ2VyIG1heCBleGNlZWRzIGhhbGYgZmxvYXQgcmFuZ2UgKDY1NTA0KSwgbm9ybWFsaXplIHRvIFswLi4xXSB1c2luZyBzY2FsZT1tYXguCiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQxNkFycmF5KHBpeGVsQ291bnQgKiA0KTsKICAgIGNvbnN0IHNjYWxlID0gWzEsIDEsIDEsIDFdOwogICAgY29uc3Qgb2Zmc2V0ID0gWzAsIDAsIDAsIDBdOwoKICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7CiAgICAgIGNvbnN0IGJpID0gcGFja0NoW2tdOwogICAgICBpZiAoYmkgPCAwIHx8IGJpID49IHJhc3Rlci5iYW5kcy5sZW5ndGgpIGNvbnRpbnVlOwoKICAgICAgY29uc3QgYml0cyA9IHJhc3Rlci5iaXRzUGVyU2FtcGxlICYmIHJhc3Rlci5iaXRzUGVyU2FtcGxlW2JpXSAhPSBudWxsID8gcmFzdGVyLmJpdHNQZXJTYW1wbGVbYmldIDogKHJhc3Rlci5iaXRzUGVyU2FtcGxlID8gcmFzdGVyLmJpdHNQZXJTYW1wbGVbMF0gOiA4KTsKICAgICAgY29uc3QgYmFuZCA9IHJhc3Rlci5iYW5kc1tiaV07CiAgICAgIGNvbnN0IGlzRmxvYXQgPSBiYW5kIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5IHx8IGJhbmQgaW5zdGFuY2VvZiBGbG9hdDY0QXJyYXk7CgogICAgICBpZiAoIWlzRmxvYXQpIHsKICAgICAgICBjb25zdCBtYXggPSBiaXRzID4gMCA/IChNYXRoLnBvdygyLCBiaXRzKSAtIDEpIDogNjU1MzU7CiAgICAgICAgaWYgKG1heCA+IDY1NTA0KSB7CiAgICAgICAgICAvLyBub3JtYWxpemUgdG8gMC4uMSBmb3Igc2FmZSBoYWxmIHJhbmdlOyBzaGFkZXIgcmVjb25zdHJ1Y3RzIHdpdGggdmFsdWUgPSBzYW1wbGUgKiBzY2FsZSArIG9mZnNldAogICAgICAgICAgc2NhbGVba10gPSBtYXg7CiAgICAgICAgICBvZmZzZXRba10gPSAwOwogICAgICAgIH0KICAgICAgfQogICAgfQoKICAgIGxldCBjbGFtcGVkID0gZmFsc2U7CiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBwaXhlbENvdW50OyBpKyssIGogKz0gNCkgewogICAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykgewogICAgICAgIGNvbnN0IGJpID0gcGFja0NoW2tdOwogICAgICAgIGxldCB2ID0gKGJpID49IDAgJiYgYmkgPCByYXN0ZXIuYmFuZHMubGVuZ3RoKSA/IE51bWJlcihyYXN0ZXIuYmFuZHNbYmldW2ldKSA6IDA7CgogICAgICAgIC8vIGFwcGx5IG5vcm1hbGl6YXRpb24gKHN0b3JlIHYvc2NhbGUpCiAgICAgICAgaWYgKHNjYWxlW2tdICE9PSAxKSB2ID0gdiAvIHNjYWxlW2tdOwoKICAgICAgICAvLyBjbGFtcCB0byBoYWxmLWZsb2F0IGZpbml0ZSByYW5nZSB3aGVuIHN0b3JpbmcgcmF3IGZsb2F0cwogICAgICAgIGlmICh2ID4gNjU1MDQpIHsgdiA9IDY1NTA0OyBjbGFtcGVkID0gdHJ1ZTsgfQogICAgICAgIGVsc2UgaWYgKHYgPCAtNjU1MDQpIHsgdiA9IC02NTUwNDsgY2xhbXBlZCA9IHRydWU7IH0KCiAgICAgICAgZGF0YVtqICsga10gPSBmMzJUb0YxNkJpdHModik7CiAgICAgIH0KICAgIH0KCiAgICBpZiAoY2xhbXBlZCkgewogICAgICB3b3JrZXJXYXJuKAogICAgICAgICJncHVQYWNrX2YxNl9jbGFtcF93b3JrZXIiLAogICAgICAgICJbdGlmZi13b3JrZXJdIFNvbWUgdmFsdWVzIGV4Y2VlZGVkIFJHQkExNkYgZmluaXRlIHJhbmdlIGFuZCB3ZXJlIGNsYW1wZWQuIENvbnNpZGVyIG5vcm1hbGl6YXRpb24gdmlhIGZvcm1hdC5ncHUuZm9yY2VSR0JBMTZGICsgcmVseWluZyBvbiBzY2FsZS9vZmZzZXQuIgogICAgICApOwogICAgfQoKICAgIHBhY2tzLnB1c2goewogICAgICBmb3JtYXQ6ICJSR0JBMTZGIiwKICAgICAgZGF0YTogeyBjdG9yOiAiVWludDE2QXJyYXkiLCBidWZmZXI6IGRhdGEuYnVmZmVyLCBieXRlT2Zmc2V0OiAwLCBsZW5ndGg6IGRhdGEubGVuZ3RoIH0sCiAgICAgIGNoYW5uZWxzOiBwYWNrQ2gsCiAgICAgIG5vcm1hbGl6ZWQ6IGZhbHNlLAogICAgICBzY2FsZSwKICAgICAgb2Zmc2V0LAogICAgfSk7CiAgfQoKICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0LCBtb2RlOiAiZGF0YSIsIGNoYW5uZWxDb3VudCwgcGFja3MgfTsKfQoKYXN5bmMgZnVuY3Rpb24gZGVjb2RlUmFzdGVyRnJvbUFycmF5QnVmZmVyKGFiLCBoaW50cykgewogIGNvbnN0IHRpZmYgPSBhd2FpdCBmcm9tQXJyYXlCdWZmZXIoYWIpOwogIGNvbnN0IGNvdW50ID0gYXdhaXQgdGlmZi5nZXRJbWFnZUNvdW50KCk7CiAgbGV0IGltYWdlSW5kZXggPSBoaW50cyAmJiB0eXBlb2YgaGludHMuaW1hZ2VJbmRleCA9PT0gIm51bWJlciIgPyBoaW50cy5pbWFnZUluZGV4IDogbnVsbDsKCiAgaWYgKGNvdW50ICE9PSAxKSB7CiAgICBpZiAoaW1hZ2VJbmRleCA9PSBudWxsKSB7CiAgICAgIHRocm93IG5ldyBFcnJvcihgW1Jhd1RpZmZQbHVnaW5dIFRJRkYgaGFzICR7Y291bnR9IGltYWdlczsgcHJvdmlkZSByYXdUaWZmLmhpbnRzLmltYWdlSW5kZXggdG8gZGVjb2RlLmApOwogICAgfQogICAgaWYgKGltYWdlSW5kZXggPCAwIHx8IGltYWdlSW5kZXggPj0gY291bnQpIHsKICAgICAgdGhyb3cgbmV3IEVycm9yKGBbUmF3VGlmZlBsdWdpbl0gaW1hZ2VJbmRleCAke2ltYWdlSW5kZXh9IG91dCBvZiByYW5nZSAoMC4uJHtjb3VudCAtIDF9KS5gKTsKICAgIH0KICB9IGVsc2UgewogICAgaW1hZ2VJbmRleCA9IDA7CiAgfQoKICBjb25zdCBpbWcgPSBhd2FpdCB0aWZmLmdldEltYWdlKGltYWdlSW5kZXgpOwogIGNvbnN0IHdpZHRoID0gaW1nLmdldFdpZHRoKCk7CiAgY29uc3QgaGVpZ2h0ID0gaW1nLmdldEhlaWdodCgpOwogIGNvbnN0IGZpbGVEaXJlY3RvcnkgPSBpbWcuZmlsZURpcmVjdG9yeSB8fCB7fTsKICBjb25zdCBzYW1wbGVzUGVyUGl4ZWwgPSBnZXRTYW1wbGVzUGVyUGl4ZWwoaW1nKTsKICBjb25zdCBiaXRzUGVyU2FtcGxlID0gZ2V0Qml0c1BlclNhbXBsZShpbWcpOwogIGNvbnN0IHNhbXBsZUZvcm1hdCA9IGdldFNhbXBsZUZvcm1hdChpbWcpOwogIGNvbnN0IHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24gPSBnZXRQaG90b21ldHJpYyhmaWxlRGlyZWN0b3J5KTsKICBjb25zdCBjb2xvck1hcCA9IGdldENvbG9yTWFwKGZpbGVEaXJlY3RvcnkpOwoKICBjb25zdCBkZWNvZGVPcHRzID0gT2JqZWN0LmFzc2lnbih7IGludGVybGVhdmU6IGZhbHNlIH0sIChoaW50cyAmJiBoaW50cy5kZWNvZGUpIHx8IHt9KTsKICBjb25zdCByYXN0ZXJzID0gbm9ybWFsaXplUmFzdGVycyhhd2FpdCBpbWcucmVhZFJhc3RlcnMoewogICAgLi4uZGVjb2RlT3B0cywKICAgIHBvb2w6IG51bGwsIC8vIGFscmVhZHkgaW4gd29ya2VyLCBkbyBub3QgbmVzdAogIH0pKTsKCiAgY29uc3QgYmFuZHMgPSByYXN0ZXJzLm1hcCgoYXJyKSA9PiAoewogICAgY3RvcjogYXJyLmNvbnN0cnVjdG9yICYmIGFyci5jb25zdHJ1Y3Rvci5uYW1lID8gYXJyLmNvbnN0cnVjdG9yLm5hbWUgOiAiVWludDhBcnJheSIsCiAgICBidWZmZXI6IGFyci5idWZmZXIsCiAgICBieXRlT2Zmc2V0OiBhcnIuYnl0ZU9mZnNldCwKICAgIGxlbmd0aDogYXJyLmxlbmd0aCwKICB9KSk7CgogIHJldHVybiB7CiAgICB3aWR0aCwKICAgIGhlaWdodCwKICAgIGJhbmRzLAogICAgc2FtcGxlc1BlclBpeGVsOiBNYXRoLm1heChzYW1wbGVzUGVyUGl4ZWwgfHwgMCwgYmFuZHMubGVuZ3RoKSwKICAgIGJpdHNQZXJTYW1wbGU6IEFycmF5LmlzQXJyYXkoYml0c1BlclNhbXBsZSkgPyBiaXRzUGVyU2FtcGxlIDogW2JpdHNQZXJTYW1wbGVdLAogICAgc2FtcGxlRm9ybWF0OiBzYW1wbGVGb3JtYXQgfHwgbnVsbCwKICAgIHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24sCiAgICBjb2xvck1hcCwKICAgIGZpbGVEaXJlY3RvcnksCiAgfTsKfQoKYXN5bmMgZnVuY3Rpb24gZGVjb2RlQW5kUmVuZGVySW1hZ2VCaXRtYXBGcm9tQXJyYXlCdWZmZXIoYWIsIGhpbnRzKSB7CiAgY29uc3QgcmFzdGVyUGF5bG9hZCA9IGF3YWl0IGRlY29kZVJhc3RlckZyb21BcnJheUJ1ZmZlcihhYiwgaGludHMpOwogIGNvbnN0IHJhc3RlciA9IE9iamVjdC5hc3NpZ24oe30sIHJhc3RlclBheWxvYWQsIHsgYmFuZHM6IHJldml2ZUJhbmRzKHJhc3RlclBheWxvYWQuYmFuZHMpIH0pOwogIGNvbnN0IGZvcm1hdCA9IHJlc29sdmVGb3JtYXRGcm9tSGludHMoaGludHMpOwoKICAvLyBpbWFnZS1tb2RlIHJlbmRlciBvbmx5IGZvciBJbWFnZUJpdG1hcCBwYXRoCiAgY29uc3QgcmdiYSA9IHJhc3RlclRvUkdCQThfSW1hZ2VNb2RlKHJhc3RlciwgaGludHMsIGZvcm1hdCk7CgogIC8vIFByZWZlciBPZmZzY3JlZW5DYW52YXMgLT4gSW1hZ2VCaXRtYXAgaWYgYXZhaWxhYmxlIGluIHRoaXMgd29ya2VyLgogIGlmICh0eXBlb2YgT2Zmc2NyZWVuQ2FudmFzID09PSAiZnVuY3Rpb24iKSB7CiAgICBjb25zdCBjYW52YXMgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHJhc3Rlci53aWR0aCwgcmFzdGVyLmhlaWdodCk7CiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgiMmQiLCB7IHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZSB9KTsKICAgIGNvbnN0IGltZ0RhdGEgPSBuZXcgSW1hZ2VEYXRhKHJnYmEsIHJhc3Rlci53aWR0aCwgcmFzdGVyLmhlaWdodCk7CiAgICBjdHgucHV0SW1hZ2VEYXRhKGltZ0RhdGEsIDAsIDApOwogICAgY29uc3QgYm1wID0gY2FudmFzLnRyYW5zZmVyVG9JbWFnZUJpdG1hcCgpOwogICAgcmV0dXJuIHsga2luZDogImltYWdlQml0bWFwIiwgaW1hZ2VCaXRtYXA6IGJtcCB9OwogIH0KCiAgLy8gRmFsbGJhY2s6IHJldHVybiBSR0JBIGJ5dGVzIGFuZCBsZXQgbWFpbiB0aHJlYWQgY3JlYXRlIGFuIEltYWdlQml0bWFwLgogIHJldHVybiB7CiAgICBraW5kOiAicmdiYTgiLAogICAgd2lkdGg6IHJhc3Rlci53aWR0aCwKICAgIGhlaWdodDogcmFzdGVyLmhlaWdodCwKICAgIHJnYmFCdWZmZXI6IHJnYmEuYnVmZmVyLAogICAgcmdiYUJ5dGVPZmZzZXQ6IHJnYmEuYnl0ZU9mZnNldCwKICAgIHJnYmFMZW5ndGg6IHJnYmEubGVuZ3RoLAogIH07Cn0KCmZ1bmN0aW9uIHJhc3RlclBheWxvYWRUb1RleHR1cmVTZXQocmFzdGVyUGF5bG9hZCwgaGludHMpIHsKICBjb25zdCByYXN0ZXIgPSBPYmplY3QuYXNzaWduKHt9LCByYXN0ZXJQYXlsb2FkLCB7IGJhbmRzOiByZXZpdmVCYW5kcyhyYXN0ZXJQYXlsb2FkLmJhbmRzKSB9KTsKICBjb25zdCBmb3JtYXQgPSByZXNvbHZlRm9ybWF0RnJvbUhpbnRzKGhpbnRzKSB8fCB7fTsKICBjb25zdCBpbnRlcnByZXRhdGlvbiA9IGZvcm1hdC5pbnRlcnByZXRhdGlvbiB8fCAiYXV0byI7CiAgY29uc3QgaW5mZXJyZWQgPSBpbmZlckZyb21USUZGVGFncyhyYXN0ZXIpOwogIGNvbnN0IG1vZGUgPSAoaW50ZXJwcmV0YXRpb24gPT09ICJhdXRvIikgPyBpbmZlcnJlZCA6IGludGVycHJldGF0aW9uOwoKICBpZiAobW9kZSA9PT0gImltYWdlIikgewogICAgY29uc3QgcmdiYSA9IHJhc3RlclRvUkdCQThfSW1hZ2VNb2RlKHJhc3RlciwgaGludHMsIGZvcm1hdCk7CiAgICByZXR1cm4gcGFja0Nhbm9uaWNhbFJHQkEocmdiYSwgcmFzdGVyLndpZHRoLCByYXN0ZXIuaGVpZ2h0LCBmb3JtYXQpOwogIH0KICByZXR1cm4gcGFja0JhbmRzQXNEYXRhKHJhc3RlciwgZm9ybWF0KTsKfQoKYXN5bmMgZnVuY3Rpb24gZGVjb2RlQW5kUGFja0dwdVRleHR1cmVTZXRGcm9tQXJyYXlCdWZmZXIoYWIsIGhpbnRzKSB7CiAgY29uc3QgcmFzdGVyUGF5bG9hZCA9IGF3YWl0IGRlY29kZVJhc3RlckZyb21BcnJheUJ1ZmZlcihhYiwgaGludHMpOwogIGNvbnN0IHRleFNldCA9IHJhc3RlclBheWxvYWRUb1RleHR1cmVTZXQocmFzdGVyUGF5bG9hZCwgaGludHMpOwogIHJldHVybiB7IHJhc3RlclBheWxvYWQsIHRleFNldCB9Owp9CgpmdW5jdGlvbiBjb2xsZWN0VHJhbnNmZXJzRm9yUmFzdGVyUGF5bG9hZChyYXN0ZXJQYXlsb2FkKSB7CiAgcmV0dXJuIHJhc3RlclBheWxvYWQuYmFuZHMubWFwKChiKSA9PiBiLmJ1ZmZlcik7Cn0KCmZ1bmN0aW9uIGNvbGxlY3RUcmFuc2ZlcnNGb3JUZXh0dXJlU2V0KHRleFNldCkgewogIGNvbnN0IHRyYW5zZmVycyA9IFtdOwogIGZvciAoY29uc3QgcCBvZiB0ZXhTZXQucGFja3MpIHsKICAgIHRyYW5zZmVycy5wdXNoKHAuZGF0YS5idWZmZXIpOwogIH0KICByZXR1cm4gdHJhbnNmZXJzOwp9Cgp3b3JrZXJSZWYub25tZXNzYWdlID0gYXN5bmMgKGV2KSA9PiB7CiAgY29uc3QgbXNnID0gZXYuZGF0YSB8fCB7fTsKICBjb25zdCBpZCA9IG1zZy5pZDsKICBjb25zdCBvcCA9IG1zZy5vcDsKICBjb25zdCBwYXlsb2FkID0gbXNnLnBheWxvYWQgfHwge307CiAgdHJ5IHsKICAgIGlmIChvcCA9PT0gImRlY29kZVJhc3RlciIpIHsKICAgICAgY29uc3QgYWIgPSBwYXlsb2FkLmJ1ZmZlcjsKICAgICAgY29uc3QgaGludHMgPSBwYXlsb2FkLmhpbnRzIHx8IHt9OwogICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZWNvZGVSYXN0ZXJGcm9tQXJyYXlCdWZmZXIoYWIsIGhpbnRzKTsKICAgICAgd29ya2VyUmVmLnBvc3RNZXNzYWdlKHsgaWQsIG9rOiB0cnVlLCByZXN1bHQgfSwgY29sbGVjdFRyYW5zZmVyc0ZvclJhc3RlclBheWxvYWQocmVzdWx0KSk7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICBpZiAob3AgPT09ICJkZWNvZGVBbmRSZW5kZXJJbWFnZUJpdG1hcCIpIHsKICAgICAgY29uc3QgYWIgPSBwYXlsb2FkLmJ1ZmZlcjsKICAgICAgY29uc3QgaGludHMgPSBwYXlsb2FkLmhpbnRzIHx8IHt9OwogICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZWNvZGVBbmRSZW5kZXJJbWFnZUJpdG1hcEZyb21BcnJheUJ1ZmZlcihhYiwgaGludHMpOwoKICAgICAgaWYgKHJlc3VsdC5raW5kID09PSAiaW1hZ2VCaXRtYXAiKSB7CiAgICAgICAgd29ya2VyUmVmLnBvc3RNZXNzYWdlKHsgaWQsIG9rOiB0cnVlLCByZXN1bHQgfSwgW3Jlc3VsdC5pbWFnZUJpdG1hcF0pOwogICAgICB9IGVsc2UgewogICAgICAgIHdvcmtlclJlZi5wb3N0TWVzc2FnZSh7IGlkLCBvazogdHJ1ZSwgcmVzdWx0IH0sIFtyZXN1bHQucmdiYUJ1ZmZlcl0pOwogICAgICB9CiAgICAgIHJldHVybjsKICAgIH0KCiAgICBpZiAob3AgPT09ICJkZWNvZGVBbmRQYWNrR3B1VGV4dHVyZVNldCIpIHsKICAgICAgY29uc3QgYWIgPSBwYXlsb2FkLmJ1ZmZlcjsKICAgICAgY29uc3QgaGludHMgPSBwYXlsb2FkLmhpbnRzIHx8IHt9OwogICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZWNvZGVBbmRQYWNrR3B1VGV4dHVyZVNldEZyb21BcnJheUJ1ZmZlcihhYiwgaGludHMpOwoKICAgICAgY29uc3QgdHJhbnNmZXJzID0gWwogICAgICAgIC4uLmNvbGxlY3RUcmFuc2ZlcnNGb3JSYXN0ZXJQYXlsb2FkKHJlc3VsdC5yYXN0ZXJQYXlsb2FkKSwKICAgICAgICAuLi5jb2xsZWN0VHJhbnNmZXJzRm9yVGV4dHVyZVNldChyZXN1bHQudGV4U2V0KSwKICAgICAgXTsKICAgICAgd29ya2VyUmVmLnBvc3RNZXNzYWdlKHsgaWQsIG9rOiB0cnVlLCByZXN1bHQgfSwgdHJhbnNmZXJzKTsKICAgICAgcmV0dXJuOwogICAgfQoKICAgIGlmIChvcCA9PT0gInJhc3RlclRvR3B1VGV4dHVyZVNldCIpIHsKICAgICAgY29uc3QgcmFzdGVyID0gcGF5bG9hZC5yYXN0ZXI7CiAgICAgIGNvbnN0IGhpbnRzID0gcGF5bG9hZC5oaW50cyB8fCB7fTsKICAgICAgY29uc3QgdGV4U2V0ID0gcmFzdGVyUGF5bG9hZFRvVGV4dHVyZVNldChyYXN0ZXIsIGhpbnRzKTsKICAgICAgd29ya2VyUmVmLnBvc3RNZXNzYWdlKHsgaWQsIG9rOiB0cnVlLCByZXN1bHQ6IHRleFNldCB9LCBjb2xsZWN0VHJhbnNmZXJzRm9yVGV4dHVyZVNldCh0ZXhTZXQpKTsKICAgICAgcmV0dXJuOwogICAgfQoKICAgIHRocm93IG5ldyBFcnJvcihgW1Jhd1RpZmZQbHVnaW5dIFVua25vd24gd29ya2VyIG9wOiAke29wfWApOwogIH0gY2F0Y2ggKGUpIHsKICAgIHdvcmtlclJlZi5wb3N0TWVzc2FnZSh7IGlkLCBvazogZmFsc2UsIGVycm9yOiBlcnJvclRvUGxhaW4oZSkgfSk7CiAgfQp9Ow==", import.meta.url), { type: "module" });
}
class le {
  /**
   * @param {ArrayBuffer|Uint8Array|Blob|{bytes?:any, blob?:Blob, arrayBuffer?:Function}} source
   * @param {Object} [opts]
   * @param {RawTiffHints} [opts.hints]
   * @param {*} [opts.meta]
   */
  constructor(e, t = {}) {
    this.source = e, this.hints = t.hints || {}, this.meta = t.meta;
  }
  getType() {
    return "rawTiff";
  }
}
class Ve {
  /**
   * @param {Object} params
   * @param {number} params.width
   * @param {number} params.height
   * @param {TypedArray[]} params.bands
   * @param {number} params.samplesPerPixel
   * @param {number[]} params.bitsPerSample
   * @param {number[]} [params.sampleFormat]
   * @param {number} [params.photometricInterpretation]
   * @param {any} [params.colorMap]
   * @param {any} [params.fileDirectory]
   * @param {RawTiffHints} [params.hints]
   */
  constructor(e) {
    Object.assign(this, e), this.hints = e.hints || {};
  }
  getType() {
    return "tiffRaster";
  }
}
function Es(i) {
  return new Ve({ ...i, bands: i.bands.map((e) => e.slice()) });
}
function he(i, e) {
  const t = Array.isArray(i) ? i.slice() : Object.assign({}, i || {});
  if (!e || typeof e != "object") return t;
  for (const s of Object.keys(e)) {
    const n = e[s];
    n && typeof n == "object" && !Array.isArray(n) && t[s] && typeof t[s] == "object" && !Array.isArray(t[s]) ? t[s] = he(t[s], n) : t[s] = n;
  }
  return t;
}
function pe(i, e) {
  const t = e && e.hints;
  if (t && t.formatResolved) return t.formatResolved;
  if (t && t.format) return t.format;
  if (e && e.meta && e.meta.format) return e.meta.format;
  if (i && i.format) return i.format;
  if (i && i.userData && i.userData.format) return i.userData.format;
  const s = i && (i.source || i.tileSource || i._tileSource);
  return s && s.format ? s.format : s && s.options && s.options.format ? s.options.format : null;
}
function js(i) {
  return Array.isArray(i) ? i.map((e) => {
    const t = typeof e.ctor == "string" && globalThis[e.ctor] ? globalThis[e.ctor] : Uint8Array;
    return new t(e.buffer, e.byteOffset || 0, e.length);
  }) : [];
}
function _s(i, e) {
  const t = js(i.bands);
  return new Ve({
    width: i.width,
    height: i.height,
    bands: t,
    samplesPerPixel: i.samplesPerPixel,
    bitsPerSample: i.bitsPerSample,
    sampleFormat: i.sampleFormat,
    photometricInterpretation: i.photometricInterpretation,
    colorMap: i.colorMap,
    fileDirectory: i.fileDirectory,
    hints: e || {}
  });
}
function ct(i) {
  const e = (i.packs || []).map((t) => {
    const s = t.data, n = typeof s.ctor == "string" && globalThis[s.ctor] ? globalThis[s.ctor] : Uint8Array, o = new n(s.buffer, s.byteOffset || 0, s.length);
    return Object.assign({}, t, { data: o });
  });
  return new Pe({
    width: i.width,
    height: i.height,
    mode: i.mode,
    channelCount: i.channelCount,
    packs: e
  });
}
function qs(i, e = {}) {
  const t = i;
  if (t.RawTiffPlugin && t.RawTiffPlugin.__installed) return t.RawTiffPlugin;
  const s = Object.assign({
    toneMap: null,
    format: he(Qs, e.defaults && e.defaults.format || null)
  }, e.defaults || {}), n = Object.assign({
    enabled: !0,
    size: typeof navigator < "u" && navigator.hardwareConcurrency ? Math.max(1, Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2))) : 2,
    createWorker: null,
    transferInput: !1,
    enableRawTiffToImageBitmap: !0
  }, e.workerPool || {}), o = t.RawTiffPluginShared = t.RawTiffPluginShared || {};
  function r() {
    var b, Z;
    if (!n.enabled || typeof Worker > "u") return null;
    if (o.__rawTiffWorkerPool) return o.__rawTiffWorkerPool;
    const d = n.createWorker || Os;
    try {
      return o.__rawTiffWorkerPool = new Ms({
        size: n.size,
        createWorker: d
      }), o.__rawTiffWorkerPool;
    } catch (G) {
      return (Z = (b = t.console) == null ? void 0 : b.warn) == null || Z.call(b, "[RawTiffPlugin] Failed to create worker pool; falling back to main thread.", G), o.__rawTiffWorkerPool = null, null;
    }
  }
  async function g(d) {
    if (d == null) throw new Error("[RawTiffPlugin] rawTiff is null/undefined.");
    if (d instanceof le) return g(d.source);
    if (typeof d == "object") {
      if (typeof d.arrayBuffer == "function") {
        const b = await d.arrayBuffer();
        if (b instanceof ArrayBuffer) return b;
      }
      if (d.bytes != null) return g(d.bytes);
      if (d.blob != null) return g(d.blob);
    }
    if (typeof Blob < "u" && d instanceof Blob) return await d.arrayBuffer();
    if (d instanceof ArrayBuffer) return d;
    if (ArrayBuffer.isView(d)) {
      const { buffer: b, byteOffset: Z, byteLength: G } = d;
      return b.slice(Z, Z + G);
    }
    throw new Error("[RawTiffPlugin] Unsupported rawTiff payload. Provide ArrayBuffer, TypedArray, Blob, or RawTiff wrapper.");
  }
  async function c(d) {
    return typeof d.getImageCount == "function" ? await d.getImageCount() : typeof d.getImages == "function" ? (await d.getImages()).length : 1;
  }
  async function I(d, b) {
    if (typeof d.getImage == "function") return await d.getImage(b);
    if (typeof d.getImages == "function") return (await d.getImages())[b];
    throw new Error("[RawTiffPlugin] geotiff instance does not expose getImage/getImages.");
  }
  async function h(d, b) {
    if (!t.supportsAsync) throw new Error("[RawTiffPlugin] Not supported in sync mode.");
    const Z = b && b.hints || (b instanceof le ? b.hints : null) || {}, G = await g(b);
    let W;
    if (typeof ze == "function")
      W = await ze(G);
    else if (typeof ue == "function")
      W = await ue(new Blob([G], { type: "image/tiff" }));
    else
      throw new Error("[RawTiffPlugin] geotiff module does not provide fromArrayBuffer/fromBlob.");
    const F = await c(W);
    let Y = Z.imageIndex;
    if (F > 1) {
      if (typeof Y != "number" || !Number.isFinite(Y))
        throw new Error(`[RawTiffPlugin] TIFF contains ${F} images. Provide rawTiff.hints.imageIndex.`);
      if (Y < 0 || Y >= F)
        throw new Error(`[RawTiffPlugin] imageIndex ${Y} out of range (0..${F - 1}).`);
    } else
      Y = 0;
    const w = await I(W, Y), H = typeof w.getWidth == "function" ? w.getWidth() : w.width, N = typeof w.getHeight == "function" ? w.getHeight() : w.height, V = typeof w.getSamplesPerPixel == "function" ? w.getSamplesPerPixel() : w.samplesPerPixel || 1, v = typeof w.getBitsPerSample == "function" ? w.getBitsPerSample() : w.bitsPerSample || [8], k = typeof w.getSampleFormat == "function" ? w.getSampleFormat() : w.sampleFormat || null, P = typeof w.getPhotometricInterpretation == "function" ? w.getPhotometricInterpretation() : w.fileDirectory ? w.fileDirectory.PhotometricInterpretation : void 0, R = w.fileDirectory || null, J = R && R.ColorMap ? R.ColorMap : null, x = Object.assign({ interleave: !1 }, Z.decode || {}), K = await w.readRasters(x), E = Array.isArray(K) ? K : [K], S = Math.max(V || 0, E.length);
    return new Ve({
      width: H,
      height: N,
      bands: E,
      samplesPerPixel: S,
      bitsPerSample: Array.isArray(v) ? v : [v],
      sampleFormat: Array.isArray(k) ? k : k ? [k] : null,
      photometricInterpretation: P,
      colorMap: J,
      fileDirectory: R,
      hints: Z
    });
  }
  async function C(d, b, Z) {
    const G = b && b.hints || (b instanceof le ? b.hints : null) || {}, W = await g(b), F = pe(d, b), Y = he(s.format, F || null), w = Object.assign({}, G, { formatResolved: Y }), H = n && n.transferInput ? [W] : [], N = await Z.request("decodeRaster", { buffer: W, hints: w }, H);
    return _s(N, w);
  }
  async function l(d, b) {
    if (!t.supportsAsync) throw new Error("[RawTiffPlugin] Not supported in sync mode.");
    const Z = r();
    return Z ? await C(d, b, Z) : await h(d, b);
  }
  async function a(d, b) {
    const Z = b && b.hints || (b instanceof le ? b.hints : null) || {}, G = r();
    if (G) {
      const F = await g(b), Y = pe(d, b), w = he(s.format, Y || null), H = Object.assign({}, Z, { formatResolved: w }), N = n && n.transferInput ? [F] : [], V = await G.request("decodeAndRenderImageBitmap", { buffer: F, hints: H }, N);
      if (V && V.kind === "imageBitmap") return V.imageBitmap;
      if (V && V.kind === "rgba8") {
        if (typeof createImageBitmap != "function")
          throw new Error("[RawTiffPlugin] createImageBitmap is not available to build ImageBitmap fallback.");
        const v = new Uint8ClampedArray(V.rgbaBuffer, V.rgbaByteOffset || 0, V.rgbaLength), k = new ImageData(v, V.width, V.height);
        return await createImageBitmap(k);
      }
      throw new Error("[RawTiffPlugin] Worker did not return a supported output.");
    }
    const W = await h(d, b);
    return await f(d, W);
  }
  async function m(d, b) {
    const Z = b && b.hints || (b instanceof le ? b.hints : null) || {}, G = r();
    if (!G) {
      const v = await h(d, b);
      return await u(d, v);
    }
    const W = await g(b), F = pe(d, b), Y = he(s.format, F || null), w = Object.assign({}, Z, { formatResolved: Y }), H = n && n.transferInput ? [W] : [], N = await G.request("decodeAndPackGpuTextureSet", { buffer: W, hints: w }, H), V = ct(N.texSet);
    return V.hints = w, V;
  }
  async function u(d, b) {
    const Z = r();
    if (!Z) {
      se("gpuTextureSet_no_worker", "[RawTiffPlugin] No worker pool available; gpuTextureSet packing will fall back to worker-less path (slower).", "warn");
      const k = b.width, P = b.height, R = k * P, J = new Uint8Array(R * 4);
      for (let x = 0, K = 0; x < R; x++, K += 4)
        J[K] = b.bands[0] ? b.bands[0][x] : 0, J[K + 1] = b.bands[1] ? b.bands[1][x] : 0, J[K + 2] = b.bands[2] ? b.bands[2][x] : 0, J[K + 3] = b.bands[3] ? b.bands[3][x] : 255;
      return new Pe({
        width: k,
        height: P,
        mode: "data",
        channelCount: b.bands ? b.bands.length : 0,
        packs: [{ format: "RGBA8", data: J, channels: [0, 1, 2, 3], normalized: !1, scale: [1, 1, 1, 1], offset: [0, 0, 0, 0] }]
      });
    }
    const G = b.hints || {}, W = pe(d, b), F = he(s.format, W || null), Y = Object.assign({}, G, { formatResolved: F }), w = b.bands.map((k) => {
      var P;
      return {
        ctor: ((P = k.constructor) == null ? void 0 : P.name) || "Uint8Array",
        buffer: k.buffer,
        byteOffset: k.byteOffset,
        length: k.length
      };
    }), H = {
      width: b.width,
      height: b.height,
      bands: w,
      samplesPerPixel: b.samplesPerPixel,
      bitsPerSample: b.bitsPerSample,
      sampleFormat: b.sampleFormat,
      photometricInterpretation: b.photometricInterpretation,
      colorMap: b.colorMap,
      fileDirectory: b.fileDirectory
    }, N = w.map((k) => k.buffer), V = await Z.request("rasterToGpuTextureSet", { raster: H, hints: Y }, N), v = ct(V);
    return v.hints = Y, v;
  }
  function A(d, b, Z) {
    if (d == null || Number.isNaN(d)) return 0;
    const G = Z.bands[b];
    if (G instanceof Float32Array || G instanceof Float64Array) {
      const w = Math.max(0, Math.min(1, d));
      return Math.round(w * 255);
    }
    const F = Z.bitsPerSample && Z.bitsPerSample[b] != null ? Z.bitsPerSample[b] : Z.bitsPerSample ? Z.bitsPerSample[0] : 8, Y = F <= 0 ? 255 : Math.pow(2, F) - 1;
    return Y <= 255 ? Math.max(0, Math.min(255, d)) : Math.round(Math.max(0, Math.min(1, d / Y)) * 255);
  }
  function y(d) {
    const b = s.toneMap || A, Z = Q || {}, G = d.width, W = d.height, F = G * W, Y = d.hints.renderChannels || d.renderChannels || null, w = d.samplesPerPixel || d.bands.length || 1, H = (R, J) => b(d.bands[R][J], R, d), N = d.photometricInterpretation;
    if (N === Z.Palette && d.colorMap) {
      const R = d.bands[0];
      return re.RGBAfromPalette(R, d.colorMap);
    }
    if ((N === Z.WhiteIsZero || N === Z.BlackIsZero) && w >= 1) {
      const R = d.bands[0], J = d.bitsPerSample && d.bitsPerSample[0] != null ? d.bitsPerSample[0] : 8, x = Math.pow(2, J) - 1;
      if (N === Z.WhiteIsZero) return re.RGBAfromWhiteIsZero(R, x);
      if (N === Z.BlackIsZero) return re.RGBAfromBlackIsZero(R, x);
      const K = new Uint8ClampedArray(F * 4);
      for (let E = 0, S = 0; E < F; E++, S += 4) {
        let D = b(R[E], 0, d);
        N === Z.WhiteIsZero && (D = 255 - D), K[S] = K[S + 1] = K[S + 2] = D, K[S + 3] = 255;
      }
      return K;
    }
    const V = Y || (N === Z.RGB || N === Z.YCbCr || N === Z.CIELab ? [0, 1, 2] : w >= 3 ? [0, 1, 2] : [0]);
    if (V.length > 4 && (se(
      "renderChannels>4_to_RGBA",
      `[tiff] Requested ${V.length} channels for RGBA output; only 4 can be represented. Extra channels will be dropped.`,
      "warn"
    ), V.splice(4)), V.length === 1) {
      const R = V[0], J = new Uint8ClampedArray(F * 4);
      for (let x = 0, K = 0; x < F; x++, K += 4) {
        const E = H(R, x);
        J[K] = J[K + 1] = J[K + 2] = E, J[K + 3] = 255;
      }
      return J;
    }
    const v = new Uint8ClampedArray(F * V.length);
    for (let R = 0; R < F; R++) {
      const J = R * V.length;
      for (let x = 0; x < V.length; x++) {
        const K = V[x];
        v[J + x] = K < d.bands.length ? H(K, R) : 0;
      }
    }
    if (N === Z.YCbCr && V.length >= 3) return re.RGBAfromYCbCr(v);
    if (N === Z.CMYK && V.length >= 4) return re.RGBAfromCMYK(v);
    if (N === Z.CIELab && V.length >= 3) return re.RGBAfromCIELab(v);
    if (V.length === 4) return v;
    if (V.length === 3) return re.RGBAfromRGB(v);
    const k = new Uint8ClampedArray(F * 4), P = V.length >= 4;
    for (let R = 0, J = 0; R < F; R++, J += 4) {
      const x = R * V.length;
      k[J] = v[x], k[J + 1] = v[x + 1] || 0, k[J + 2] = v[x + 2] || 0, k[J + 3] = P ? v[x + 3] : 255;
    }
    return k;
  }
  async function f(d, b) {
    if (typeof createImageBitmap != "function")
      throw new Error("[RawTiffPlugin] createImageBitmap is not available.");
    const Z = y(b), G = new ImageData(Z, b.width, b.height);
    return await createImageBitmap(G);
  }
  async function B(d, b) {
    const Z = await f(d, b), G = document.createElement("canvas");
    G.width = Z.width, G.height = Z.height;
    const W = G.getContext("2d", { willReadFrequently: !0 });
    return W.drawImage(Z, 0, 0), W;
  }
  t.converter ? (t.converter.learn("rawTiff", "tiffRaster", (d, b) => l(d, b), 2, 10), n.enableRawTiffToImageBitmap && t.converter.learn("rawTiff", "imageBitmap", (d, b) => a(d, b), 1, 5), t.converter.learn("tiffRaster", "tiffRaster", (d, b) => Es(b), 1, 1), t.converter.learn("tiffRaster", "context2d", (d, b) => B(d, b), 2, 10), t.converter.learn("tiffRaster", "imageBitmap", (d, b) => f(d, b), 1, 50), t.converter.learn("rawTiff", "gpuTextureSet", (d, b) => m(d, b), 1, 8), t.converter.learn("tiffRaster", "gpuTextureSet", (d, b) => u(d, b), 1, 12)) : t.console.warn("[RawTiffPlugin] OpenSeadragon.converter is missing. Load OSD v6+.");
  const p = {
    __installed: !0,
    RawTiff: le,
    TiffRaster: Ve,
    GpuTextureSet: Pe,
    Converters: re,
    decodeRawTiff: l,
    rasterToRGBA8: y,
    rasterToContext2d: B,
    rasterToImageBitmap: f,
    getWorkerPool: r,
    terminateWorkerPool() {
      const d = t.RawTiffPluginShared;
      d && d.__rawTiffWorkerPool && (d.__rawTiffWorkerPool.terminate(), d.__rawTiffWorkerPool = null);
    },
    /**
     * Convert using OpenSeadragon.converter.
     * @param {*} tile
     * @param {*} data
     * @param {string} toType
     * @param {string} [fromType]
     */
    convert(d, b, Z, G) {
      if (!t.converter) throw new Error("[RawTiffPlugin] OpenSeadragon.converter is missing.");
      const W = G || t.converter.guessType(b);
      return t.converter.convert(d, b, W, Z);
    },
    /**
     * Wrap binary as a RawTiff object.
     * @param {*} source
     * @param {Object} [opts]
     * @returns {RawTiff}
     */
    wrap(d, b) {
      return new le(d, b);
    },
    /**
     * Expose defaults (merged).
     */
    defaults: s
  };
  return t.RawTiffPlugin = p, p;
}
window.GeoTIFF = zs;
const $s = (i, e = {}) => {
  if (i.version.major < 4 || i.version.major === 4 && i.version.minor < 1)
    throw new Error("Your current OpenSeadragon version is too low to support GeoTIFFTileSource");
  const {
    workerUrl: t,
    // optional: string or URL
    workerPool: s,
    // optional: { createWorker: () => Worker }
    decoderPool: n
    // optional: geotiff.js Pool
  } = e, r = s || {
    createWorker: () => t ? new globalThis.Worker(t, { type: "module" }) : new globalThis.Worker(new URL("data:text/javascript;base64,LyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovCi8qKgogKiBSYXdUSUZGIHdvcmtlciBmb3IgT3BlblNlYWRyYWdvbiBjb252ZXJ0ZXIgcGx1Z2luLgogKgogKiBSZXNwb25zaWJpbGl0aWVzOgogKiAgLSBkZWNvZGVSYXN0ZXI6IHJhdyBUSUZGIGJ5dGVzIC0+IG11bHRpLWJhbmQgcmFzdGVyIHBheWxvYWQgKHRyYW5zZmVyYWJsZSBiYW5kIGJ1ZmZlcnMpCiAqICAtIGRlY29kZUFuZFJlbmRlckltYWdlQml0bWFwOiByYXcgVElGRiBieXRlcyAtPiBJbWFnZUJpdG1hcCAocHJlZmVycmVkKSBvciBSR0JBOCBmYWxsYmFjawogKiAgLSBkZWNvZGVBbmRQYWNrR3B1VGV4dHVyZVNldDogcmF3IFRJRkYgYnl0ZXMgLT4gR1BVLXBhY2tlZCB0ZXh0dXJlIHNldCAoUkdCQTggb3IgUkdCQTE2RikKICogIC0gcmFzdGVyVG9HcHVUZXh0dXJlU2V0OiByYXN0ZXIgcGF5bG9hZCAtPiBHUFUtcGFja2VkIHRleHR1cmUgc2V0IChSR0JBOCBvciBSR0JBMTZGKQogKgogKiBUaGUgImZvcm1hdCIgb3ZlcnJpZGUgaXMgcHJvdmlkZWQgZXh0ZXJuYWxseSBhbmQgbXVzdCBhcnJpdmUgdmlhOgogKiAgIHBheWxvYWQuaGludHMuZm9ybWF0UmVzb2x2ZWQgKHByZWZlcnJlZCkgT1IgcGF5bG9hZC5oaW50cy5mb3JtYXQKICovCgppbXBvcnQgeyBmcm9tQXJyYXlCdWZmZXIgfSBmcm9tICJnZW90aWZmIjsKaW1wb3J0IHsgQ29udmVydGVycyB9IGZyb20gIi4uL3V0aWxzL0NvbnZlcnRlcnMuanMiOwoKLy8gVGVzdHMgaW4gbm9kZSBoYXZlIG5vIHNlbGYuCmNvbnN0IHdvcmtlclJlZiA9IHNlbGYgfHwgZ2xvYmFsVGhpczsKCmZ1bmN0aW9uIHdvcmtlcldhcm4oY29kZSwgbWVzc2FnZSkgewogIHdvcmtlclJlZi5wb3N0TWVzc2FnZSh7CiAgICBraW5kOiAid2FybiIsCiAgICBjb2RlLAogICAgbWVzc2FnZSwKICB9KTsKfQoKLy8gUGhvdG9tZXRyaWMgaW50ZXJwcmV0YXRpb24gY29uc3RhbnRzIChtYXRjaGluZyBUSUZGIHNwZWMgLyBnZW90aWZmLmpzKQpjb25zdCBQSSA9IHsKICBXaGl0ZUlzWmVybzogMCwKICBCbGFja0lzWmVybzogMSwKICBSR0I6IDIsCiAgUGFsZXR0ZTogMywKICBUcmFuc3BhcmVuY3lNYXNrOiA0LAogIENNWUs6IDUsCiAgWUNiQ3I6IDYsCiAgQ0lFTGFiOiA4LAp9OwoKZnVuY3Rpb24gZXJyb3JUb1BsYWluKGVycikgewogIHRyeSB7CiAgICBpZiAoIWVycikgcmV0dXJuICJVbmtub3duIGVycm9yIjsKICAgIGlmICh0eXBlb2YgZXJyID09PSAic3RyaW5nIikgcmV0dXJuIGVycjsKICAgIHJldHVybiBlcnIubWVzc2FnZSB8fCBKU09OLnN0cmluZ2lmeShlcnIpOwogIH0gY2F0Y2ggewogICAgcmV0dXJuIFN0cmluZyhlcnIpOwogIH0KfQoKZnVuY3Rpb24gbm9ybWFsaXplUmFzdGVycyhyYXN0ZXJzKSB7CiAgaWYgKEFycmF5LmlzQXJyYXkocmFzdGVycykpIHJldHVybiByYXN0ZXJzOwogIHJldHVybiBbcmFzdGVyc107Cn0KCmZ1bmN0aW9uIGdldFBob3RvbWV0cmljKGZpbGVEaXJlY3RvcnkpIHsKICByZXR1cm4gZmlsZURpcmVjdG9yeSAmJiB0eXBlb2YgZmlsZURpcmVjdG9yeS5QaG90b21ldHJpY0ludGVycHJldGF0aW9uID09PSAibnVtYmVyIgogICAgPyBmaWxlRGlyZWN0b3J5LlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24KICAgIDogdW5kZWZpbmVkOwp9CgpmdW5jdGlvbiBnZXRDb2xvck1hcChmaWxlRGlyZWN0b3J5KSB7CiAgcmV0dXJuIGZpbGVEaXJlY3RvcnkgPyAoZmlsZURpcmVjdG9yeS5Db2xvck1hcCB8fCBudWxsKSA6IG51bGw7Cn0KCmZ1bmN0aW9uIGdldEJpdHNQZXJTYW1wbGUoaW1nKSB7CiAgdHJ5IHsKICAgIGlmICh0eXBlb2YgaW1nLmdldEJpdHNQZXJTYW1wbGUgPT09ICJmdW5jdGlvbiIpIHJldHVybiBpbWcuZ2V0Qml0c1BlclNhbXBsZSgpOwogIH0gY2F0Y2ggeyAvKiBub29wICovIH0KICByZXR1cm4gKGltZyAmJiBpbWcuZmlsZURpcmVjdG9yeSAmJiBpbWcuZmlsZURpcmVjdG9yeS5CaXRzUGVyU2FtcGxlKSB8fCBbOF07Cn0KCmZ1bmN0aW9uIGdldFNhbXBsZXNQZXJQaXhlbChpbWcpIHsKICB0cnkgewogICAgaWYgKHR5cGVvZiBpbWcuZ2V0U2FtcGxlc1BlclBpeGVsID09PSAiZnVuY3Rpb24iKSByZXR1cm4gaW1nLmdldFNhbXBsZXNQZXJQaXhlbCgpOwogIH0gY2F0Y2ggeyAvKiBub29wICovIH0KICByZXR1cm4gKGltZyAmJiBpbWcuZmlsZURpcmVjdG9yeSAmJiBpbWcuZmlsZURpcmVjdG9yeS5TYW1wbGVzUGVyUGl4ZWwpIHx8IDE7Cn0KCmZ1bmN0aW9uIGdldFNhbXBsZUZvcm1hdChpbWcpIHsKICBjb25zdCBmZCA9IGltZyAmJiBpbWcuZmlsZURpcmVjdG9yeTsKICByZXR1cm4gZmQgJiYgZmQuU2FtcGxlRm9ybWF0ID8gZmQuU2FtcGxlRm9ybWF0IDogbnVsbDsKfQoKZnVuY3Rpb24gcmV2aXZlQmFuZHMoZGVzY3MpIHsKICByZXR1cm4gZGVzY3MubWFwKChiKSA9PiB7CiAgICBjb25zdCBDdG9yID0gKHR5cGVvZiBiLmN0b3IgPT09ICJzdHJpbmciICYmIHdvcmtlclJlZltiLmN0b3JdKSA/IHdvcmtlclJlZltiLmN0b3JdIDogVWludDhBcnJheTsKICAgIHJldHVybiBuZXcgQ3RvcihiLmJ1ZmZlciwgYi5ieXRlT2Zmc2V0IHx8IDAsIGIubGVuZ3RoKTsKICB9KTsKfQoKZnVuY3Rpb24gaW5mZXJGcm9tVElGRlRhZ3MocmFzdGVyKSB7CiAgY29uc3Qgc3BwID0gcmFzdGVyLnNhbXBsZXNQZXJQaXhlbCB8fCAocmFzdGVyLmJhbmRzID8gcmFzdGVyLmJhbmRzLmxlbmd0aCA6IDEpOwogIGNvbnN0IHBpID0gcmFzdGVyLnBob3RvbWV0cmljSW50ZXJwcmV0YXRpb247CgogIC8vIElmIHBob3RvbWV0cmljIGNsZWFybHkgaW1wbGllcyBhbiBpbWFnZSwgdHJlYXQgYXMgaW1hZ2UuCiAgaWYgKAogICAgcGkgPT09IFBJLlJHQiB8fAogICAgcGkgPT09IFBJLllDYkNyIHx8CiAgICBwaSA9PT0gUEkuQ01ZSyB8fAogICAgcGkgPT09IFBJLkNJRUxhYiB8fAogICAgcGkgPT09IFBJLlBhbGV0dGUKICApIHsKICAgIHJldHVybiAiaW1hZ2UiOwogIH0KCiAgLy8gR3JheXNjYWxlICJpbWFnZSIgY2FzZQogIC8vIHRvZG86IGNvbnNpZGVyIHN0aWxsIG91dHB1dGluZyBhcyBkYXRhIHRvIHNhdmUgc3BhY2UgKHRoaXMgZm9yY2VzIFJHQkEgZXhwYW5zaW9uLCBhbHRob3VnaCBidXQgdGhlIGV4cGFuc2lvbgogIC8vICBoYXBwZW5zIHNvb25lciBvciBsYXRlciwgc3lzdGVtcyB0aGF0IGRpcmVjdGx5IHJlbmRlciB0aGUgZGF0YSBtaWdodCBlLmcuIGF2b2lkIHBhc3NpbmcgdGhlIGV4cGFuZGVkIGJhbmRzIHRvIGdwdSkKICBpZiAoKHBpID09PSBQSS5CbGFja0lzWmVybyB8fCBwaSA9PT0gUEkuV2hpdGVJc1plcm8pICYmIHNwcCA9PT0gMSkgewogICAgcmV0dXJuICJpbWFnZSI7CiAgfQoKICAvLyBEZWZhdWx0IHRvIGRhdGEgZm9yIHVua25vd24gUEkuCiAgcmV0dXJuICJkYXRhIjsKfQoKLyoqCiAqIEZsb2F0MzIgLT4gSUVFRS03NTQgaGFsZi1mbG9hdCBiaXRzIChVaW50MTYpLgogKiBQcm9kdWNlcyBjb3JyZWN0IEhBTEZfRkxPQVQgYml0IHBhdHRlcm5zIHN1aXRhYmxlIGZvciBXZWJHTCB1cGxvYWQuCiAqLwpmdW5jdGlvbiBmMzJUb0YxNkJpdHModmFsKSB7CiAgY29uc3QgZmxvYXRWaWV3ID0gbmV3IEZsb2F0MzJBcnJheSgxKTsKICBjb25zdCBpbnRWaWV3ID0gbmV3IFVpbnQzMkFycmF5KGZsb2F0Vmlldy5idWZmZXIpOwoKICBmbG9hdFZpZXdbMF0gPSB2YWw7CiAgY29uc3QgeCA9IGludFZpZXdbMF07CgogIGNvbnN0IHNpZ24gPSAoeCA+PiAzMSkgJiAweDE7CiAgbGV0IGV4cCA9ICh4ID4+IDIzKSAmIDB4RkY7CiAgbGV0IG1hbnQgPSB4ICYgMHg3RkZGRkY7CgogIC8vIE5hTi9JbmYKICBpZiAoZXhwID09PSAweEZGKSB7CiAgICBpZiAobWFudCAhPT0gMCkgcmV0dXJuIChzaWduIDw8IDE1KSB8IDB4N0UwMDsgLy8gcU5hTgogICAgcmV0dXJuIChzaWduIDw8IDE1KSB8IDB4N0MwMDsgLy8gSW5mCiAgfQoKICAvLyBEZW5vcm0vWmVybyBpbiBmMzIKICBpZiAoZXhwID09PSAwKSB7CiAgICByZXR1cm4gKHNpZ24gPDwgMTUpOyAvLyBmbHVzaCBzdWJub3JtYWxzIHRvIDAKICB9CgogIC8vIE5vcm1hbGl6ZSBleHBvbmVudCBmcm9tIGYzMiBiaWFzICgxMjcpIHRvIGYxNiBiaWFzICgxNSkKICBleHAgPSBleHAgLSAxMjcgKyAxNTsKCiAgLy8gT3ZlcmZsb3cgLT4gSW5mCiAgaWYgKGV4cCA+PSAweDFGKSByZXR1cm4gKHNpZ24gPDwgMTUpIHwgMHg3QzAwOwoKICAvLyBVbmRlcmZsb3cgLT4gMCAoZmx1c2gpCiAgaWYgKGV4cCA8PSAwKSByZXR1cm4gKHNpZ24gPDwgMTUpOwoKICAvLyBNYW50aXNzYTogZjMyIGhhcyAyMyBiaXRzLCBmMTYgaGFzIDEwIGJpdHMKICBtYW50ID0gbWFudCArIDB4MDAwMDEwMDA7IC8vIHJvdW5kaW5nCiAgaWYgKG1hbnQgJiAweDAwODAwMDAwKSB7CiAgICBtYW50ID0gMDsKICAgIGV4cCArPSAxOwogICAgaWYgKGV4cCA+PSAweDFGKSByZXR1cm4gKHNpZ24gPDwgMTUpIHwgMHg3QzAwOwogIH0KCiAgcmV0dXJuIChzaWduIDw8IDE1KSB8IChleHAgPDwgMTApIHwgKG1hbnQgPj4gMTMpOwp9CgpmdW5jdGlvbiByZXNvbHZlRm9ybWF0RnJvbUhpbnRzKGhpbnRzKSB7CiAgcmV0dXJuIChoaW50cyAmJiAoaGludHMuZm9ybWF0UmVzb2x2ZWQgfHwgaGludHMuZm9ybWF0KSkgfHwgbnVsbDsKfQoKLyoqCiAqIEltYWdlLW1vZGUgUkdCQTggcmVuZGVyZXIgdGhhdCByZXNwZWN0czoKICogIC0gcGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbgogKiAgLSBvcHRpb25hbCBmb3JtYXQuaW1hZ2UucmdiYUNoYW5uZWxzIG92ZXJyaWRlCiAqICAtIG9wdGlvbmFsIGhpbnRzLnJlbmRlckNoYW5uZWxzIG92ZXJyaWRlCiAqCiAqIE5PVEU6IFRoaXMgd29ya2VyIHZlcnNpb24gaXMgaW50ZW50aW9uYWxseSAiZGlzcGxheS1vcmllbnRlZCIgYW5kIGFzc3VtZXMgOC1iaXQtaXNoCiAqIGZvciBpbWFnZS1tb2RlLiBQcmVjaXNpb24tZm9jdXNlZCBwYWNraW5nIGhhcHBlbnMgYWZ0ZXIgdGhpcyBpZiBSR0JBMTZGIGlzIHJlcXVlc3RlZC4KICovCmZ1bmN0aW9uIHJhc3RlclRvUkdCQThfSW1hZ2VNb2RlKHJhc3RlciwgaGludHMsIGZvcm1hdCkgewogIGNvbnN0IHNwcCA9IHJhc3Rlci5zYW1wbGVzUGVyUGl4ZWwgfHwgKHJhc3Rlci5iYW5kcyA/IHJhc3Rlci5iYW5kcy5sZW5ndGggOiAxKTsKICBjb25zdCBwaG90b21ldHJpYyA9IHJhc3Rlci5waG90b21ldHJpY0ludGVycHJldGF0aW9uOwoKICAvLyBDaGFubmVsIG92ZXJyaWRlIHByZWNlZGVuY2U6CiAgLy8gZm9ybWF0LmltYWdlLnJnYmFDaGFubmVscyA+IGhpbnRzLnJlbmRlckNoYW5uZWxzID4gZGVmYXVsdCBiZWhhdmlvcgogIGxldCBjaGFubmVscyA9IG51bGw7CiAgaWYgKGZvcm1hdCAmJiBmb3JtYXQuaW1hZ2UgJiYgQXJyYXkuaXNBcnJheShmb3JtYXQuaW1hZ2UucmdiYUNoYW5uZWxzKSkgewogICAgY2hhbm5lbHMgPSBmb3JtYXQuaW1hZ2UucmdiYUNoYW5uZWxzLnNsaWNlKCk7CiAgfSBlbHNlIGlmIChoaW50cyAmJiBBcnJheS5pc0FycmF5KGhpbnRzLnJlbmRlckNoYW5uZWxzKSkgewogICAgY2hhbm5lbHMgPSBoaW50cy5yZW5kZXJDaGFubmVscy5zbGljZSgpOwogIH0KCiAgaWYgKGNoYW5uZWxzICYmIGNoYW5uZWxzLmxlbmd0aCA+IDQpIHsKICAgIHdvcmtlcldhcm4oCiAgICAgICJyZW5kZXJDaGFubmVscz40X3RvX1JHQkFfd29ya2VyIiwKICAgICAgYFt0aWZmLXdvcmtlcl0gUmVxdWVzdGVkICR7Y2hhbm5lbHMubGVuZ3RofSBjaGFubmVscyBmb3IgUkdCQSBvdXRwdXQ7IG9ubHkgNCBjYW4gYmUgcmVwcmVzZW50ZWQuIEV4dHJhIGNoYW5uZWxzIHdpbGwgYmUgZHJvcHBlZC5gCiAgICApOwogICAgY2hhbm5lbHMuc3BsaWNlKDQpOwogIH0KCiAgLy8gUGFsZXR0ZQogIGlmIChwaG90b21ldHJpYyA9PT0gUEkuUGFsZXR0ZSAmJiByYXN0ZXIuY29sb3JNYXApIHsKICAgIGNvbnN0IGluZGljZXMgPSByYXN0ZXIuYmFuZHNbMF07CiAgICByZXR1cm4gQ29udmVydGVycy5SR0JBZnJvbVBhbGV0dGUoaW5kaWNlcywgcmFzdGVyLmNvbG9yTWFwKTsKICB9CgogIC8vIFdoaXRlSXNaZXJvIC8gQmxhY2tJc1plcm8KICBpZiAoKHBob3RvbWV0cmljID09PSBQSS5XaGl0ZUlzWmVybyB8fCBwaG90b21ldHJpYyA9PT0gUEkuQmxhY2tJc1plcm8pICYmIHNwcCA+PSAxKSB7CiAgICBjb25zdCBiYW5kMCA9IHJhc3Rlci5iYW5kc1swXTsKICAgIGNvbnN0IGJpdHMgPSByYXN0ZXIuYml0c1BlclNhbXBsZSAmJiByYXN0ZXIuYml0c1BlclNhbXBsZVswXSAhPSBudWxsID8gcmFzdGVyLmJpdHNQZXJTYW1wbGVbMF0gOiA4OwogICAgY29uc3QgbWF4ID0gTWF0aC5wb3coMiwgYml0cykgLSAxOwogICAgaWYgKHBob3RvbWV0cmljID09PSBQSS5XaGl0ZUlzWmVybykgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21XaGl0ZUlzWmVybyhiYW5kMCwgbWF4KTsKICAgIHJldHVybiBDb252ZXJ0ZXJzLlJHQkFmcm9tQmxhY2tJc1plcm8oYmFuZDAsIG1heCk7CiAgfQoKICAvLyBJZiBleHBsaWNpdCBjaGFubmVsIG1hcHBpbmcgZXhpc3RzLCB1c2UgaXQgKHBsYW5hciAtPiBpbnRlcmxlYXZlZCAtPiBSR0JBKQogIGlmIChjaGFubmVscyAmJiBjaGFubmVscy5sZW5ndGggPj0gMSkgewogICAgY29uc3Qgd2lkdGggPSByYXN0ZXIud2lkdGg7CiAgICBjb25zdCBoZWlnaHQgPSByYXN0ZXIuaGVpZ2h0OwogICAgY29uc3QgcGl4ZWxDb3VudCA9IHdpZHRoICogaGVpZ2h0OwoKICAgIGlmIChjaGFubmVscy5sZW5ndGggPT09IDEpIHsKICAgICAgY29uc3QgYjAgPSByYXN0ZXIuYmFuZHNbY2hhbm5lbHNbMF1dOwogICAgICBjb25zdCBiaXRzID0gcmFzdGVyLmJpdHNQZXJTYW1wbGUgJiYgcmFzdGVyLmJpdHNQZXJTYW1wbGVbY2hhbm5lbHNbMF1dICE9IG51bGwgPyByYXN0ZXIuYml0c1BlclNhbXBsZVtjaGFubmVsc1swXV0gOiA4OwogICAgICBjb25zdCBtYXggPSBNYXRoLnBvdygyLCBiaXRzKSAtIDE7CiAgICAgIC8vIHRyZWF0IGFzIGJsYWNrLWlzLXplcm8gZm9yIHZpc3VhbGl6YXRpb24KICAgICAgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21CbGFja0lzWmVybyhiMCwgbWF4KTsKICAgIH0KCiAgICAvLyBidWlsZCBpbnRlcmxlYXZlZCB0bXAgYnl0ZXMgYnkgc2ltcGxlIGNsYW1waW5nIChiZXN0LWVmZm9ydCkKICAgIGNvbnN0IHRtcCA9IG5ldyBVaW50OENsYW1wZWRBcnJheShwaXhlbENvdW50ICogY2hhbm5lbHMubGVuZ3RoKTsKICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGl4ZWxDb3VudDsgaSsrKSB7CiAgICAgIGNvbnN0IGJhc2UgPSBpICogY2hhbm5lbHMubGVuZ3RoOwogICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNoYW5uZWxzLmxlbmd0aDsgYysrKSB7CiAgICAgICAgY29uc3QgYmkgPSBjaGFubmVsc1tjXTsKICAgICAgICBjb25zdCB2ID0gKGJpICE9IG51bGwgJiYgYmkgPj0gMCAmJiBiaSA8IHJhc3Rlci5iYW5kcy5sZW5ndGgpID8gcmFzdGVyLmJhbmRzW2JpXVtpXSA6IDA7CiAgICAgICAgdG1wW2Jhc2UgKyBjXSA9IHY7CiAgICAgIH0KICAgIH0KCiAgICAvLyBJZiB3ZSBhbHJlYWR5IGJ1aWx0IFJHQkEgKDRjaCkgYW5kIG5vIHNwZWNpYWwgcGhvdG9tZXRyaWMsIHJldHVybiBkaXJlY3RseS4KICAgIGlmIChjaGFubmVscy5sZW5ndGggPT09IDQgJiYgcGhvdG9tZXRyaWMgIT09IFBJLllDYkNyICYmIHBob3RvbWV0cmljICE9PSBQSS5DTVlLICYmIHBob3RvbWV0cmljICE9PSBQSS5DSUVMYWIpIHsKICAgICAgcmV0dXJuIHRtcDsKICAgIH0KICAgIGlmIChwaG90b21ldHJpYyA9PT0gUEkuWUNiQ3IgJiYgY2hhbm5lbHMubGVuZ3RoID49IDMpIHJldHVybiBDb252ZXJ0ZXJzLlJHQkFmcm9tWUNiQ3IodG1wKTsKICAgIGlmIChwaG90b21ldHJpYyA9PT0gUEkuQ01ZSyAmJiBjaGFubmVscy5sZW5ndGggPj0gNCkgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21DTVlLKHRtcCk7CiAgICBpZiAocGhvdG9tZXRyaWMgPT09IFBJLkNJRUxhYiAmJiBjaGFubmVscy5sZW5ndGggPj0gMykgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21DSUVMYWIodG1wKTsKICAgIGlmIChjaGFubmVscy5sZW5ndGggPT09IDMpIHJldHVybiBDb252ZXJ0ZXJzLlJHQkFmcm9tUkdCKHRtcCk7CgogICAgLy8gZmFsbGJhY2s6IGZvcmNlIGludG8gUkdCQQogICAgY29uc3Qgb3V0ID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHBpeGVsQ291bnQgKiA0KTsKICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IHBpeGVsQ291bnQ7IGkrKywgaiArPSA0KSB7CiAgICAgIGNvbnN0IGJhc2UgPSBpICogY2hhbm5lbHMubGVuZ3RoOwogICAgICBvdXRbal0gPSB0bXBbYmFzZV0gfHwgMDsKICAgICAgb3V0W2ogKyAxXSA9IHRtcFtiYXNlICsgMV0gfHwgMDsKICAgICAgb3V0W2ogKyAyXSA9IHRtcFtiYXNlICsgMl0gfHwgMDsKICAgICAgb3V0W2ogKyAzXSA9IChjaGFubmVscy5sZW5ndGggPj0gNCkgPyAodG1wW2Jhc2UgKyAzXSB8fCAyNTUpIDogMjU1OwogICAgfQogICAgcmV0dXJuIG91dDsKICB9CgogIC8vIFJHQiAvIFlDYkNyIC8gQ01ZSyAvIExhYiBkZWZhdWx0cwogIGlmIChwaG90b21ldHJpYyA9PT0gUEkuUkdCICYmIHNwcCA+PSAzKSB7CiAgICBjb25zdCByID0gcmFzdGVyLmJhbmRzWzBdOwogICAgY29uc3QgZyA9IHJhc3Rlci5iYW5kc1sxXTsKICAgIGNvbnN0IGIgPSByYXN0ZXIuYmFuZHNbMl07CiAgICBjb25zdCBhID0gc3BwID49IDQgPyByYXN0ZXIuYmFuZHNbM10gOiBudWxsOwogICAgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21SR0IociwgZywgYiwgYSk7CiAgfQoKICBpZiAocGhvdG9tZXRyaWMgPT09IFBJLllDYkNyICYmIHNwcCA+PSAzKSB7CiAgICBjb25zdCB5ID0gcmFzdGVyLmJhbmRzWzBdOwogICAgY29uc3QgY2IgPSByYXN0ZXIuYmFuZHNbMV07CiAgICBjb25zdCBjciA9IHJhc3Rlci5iYW5kc1syXTsKICAgIHJldHVybiBDb252ZXJ0ZXJzLlJHQkFmcm9tWUNiQ3IoeSwgY2IsIGNyKTsKICB9CgogIGlmIChwaG90b21ldHJpYyA9PT0gUEkuQ01ZSyAmJiBzcHAgPj0gNCkgewogICAgY29uc3QgYyA9IHJhc3Rlci5iYW5kc1swXTsKICAgIGNvbnN0IG0gPSByYXN0ZXIuYmFuZHNbMV07CiAgICBjb25zdCB5ID0gcmFzdGVyLmJhbmRzWzJdOwogICAgY29uc3QgayA9IHJhc3Rlci5iYW5kc1szXTsKICAgIHJldHVybiBDb252ZXJ0ZXJzLlJHQkFmcm9tQ01ZSyhjLCBtLCB5LCBrKTsKICB9CgogIGlmIChwaG90b21ldHJpYyA9PT0gUEkuQ0lFTGFiICYmIHNwcCA+PSAzKSB7CiAgICBjb25zdCBsID0gcmFzdGVyLmJhbmRzWzBdOwogICAgY29uc3QgYSA9IHJhc3Rlci5iYW5kc1sxXTsKICAgIGNvbnN0IGIgPSByYXN0ZXIuYmFuZHNbMl07CiAgICByZXR1cm4gQ29udmVydGVycy5SR0JBZnJvbUNJRUxhYihsLCBhLCBiKTsKICB9CgogIC8vIEZhbGxiYWNrIGdyYXlzY2FsZQogIGNvbnN0IGJhbmQwID0gcmFzdGVyLmJhbmRzWzBdOwogIGNvbnN0IGJpdHMgPSByYXN0ZXIuYml0c1BlclNhbXBsZSAmJiByYXN0ZXIuYml0c1BlclNhbXBsZVswXSAhPSBudWxsID8gcmFzdGVyLmJpdHNQZXJTYW1wbGVbMF0gOiA4OwogIGNvbnN0IG1heCA9IE1hdGgucG93KDIsIGJpdHMpIC0gMTsKICByZXR1cm4gQ29udmVydGVycy5SR0JBZnJvbUJsYWNrSXNaZXJvKGJhbmQwLCBtYXgpOwp9CgpmdW5jdGlvbiBwYWNrQ2Fub25pY2FsUkdCQShyZ2JhOCwgd2lkdGgsIGhlaWdodCwgZm9ybWF0KSB7CiAgY29uc3QgZ3B1ID0gKGZvcm1hdCAmJiBmb3JtYXQuZ3B1KSB8fCB7fTsKICBjb25zdCBwcmVmZXJSR0JBOCA9IGdwdS5wcmVmZXJSR0JBOCAhPT0gZmFsc2U7CiAgY29uc3QgZm9yY2VSR0JBMTZGID0gISFncHUuZm9yY2VSR0JBMTZGOwoKICAvLyBSR0JBOCBpcyB0aGUgZGVmYXVsdCBmb3IgaW1hZ2UtbW9kZSB1bmxlc3MgZm9yY2VkIHRvIDE2RgogIGlmIChwcmVmZXJSR0JBOCAmJiAhZm9yY2VSR0JBMTZGKSB7CiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkocmdiYTguYnVmZmVyLCByZ2JhOC5ieXRlT2Zmc2V0LCByZ2JhOC5ieXRlTGVuZ3RoKTsKICAgIHJldHVybiB7CiAgICAgIHdpZHRoLAogICAgICBoZWlnaHQsCiAgICAgIG1vZGU6ICJpbWFnZSIsCiAgICAgIGNoYW5uZWxDb3VudDogNCwKICAgICAgcGFja3M6IFt7CiAgICAgICAgZm9ybWF0OiAiUkdCQTgiLAogICAgICAgIGRhdGE6IHsKICAgICAgICAgIGN0b3I6ICJVaW50OEFycmF5IiwKICAgICAgICAgIGJ1ZmZlcjogZGF0YS5idWZmZXIsCiAgICAgICAgICBieXRlT2Zmc2V0OiBkYXRhLmJ5dGVPZmZzZXQsCiAgICAgICAgICBsZW5ndGg6IGRhdGEubGVuZ3RoLAogICAgICAgIH0sCiAgICAgICAgY2hhbm5lbHM6IFswLCAxLCAyLCAzXSwKICAgICAgICBub3JtYWxpemVkOiBmYWxzZSwKICAgICAgICBzY2FsZTogWzEsIDEsIDEsIDFdLAogICAgICAgIG9mZnNldDogWzAsIDAsIDAsIDBdLAogICAgICB9XSwKICAgIH07CiAgfQoKICAvLyBSR0JBMTZGIGltYWdlLW1vZGU6IGNvbnZlcnQgYnl0ZXMgLT4gZmxvYXQgLT4gaGFsZgogIGNvbnN0IHB4ID0gd2lkdGggKiBoZWlnaHQ7CiAgY29uc3Qgb3V0ID0gbmV3IFVpbnQxNkFycmF5KHB4ICogNCk7CiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXQubGVuZ3RoOyBpKyspIHsKICAgIC8vIHN0b3JlIDAuLjI1NSBhcyBmbG9hdCAwLi4yNTUgKGlkZW50aXR5KTsgc2hhZGVyIGNhbiB0cmVhdCBhcyBsaW5lYXIgZGlzcGxheQogICAgb3V0W2ldID0gZjMyVG9GMTZCaXRzKHJnYmE4W2ldKTsKICB9CgogIHJldHVybiB7CiAgICB3aWR0aCwKICAgIGhlaWdodCwKICAgIG1vZGU6ICJpbWFnZSIsCiAgICBjaGFubmVsQ291bnQ6IDQsCiAgICBwYWNrczogW3sKICAgICAgZm9ybWF0OiAiUkdCQTE2RiIsCiAgICAgIGRhdGE6IHsKICAgICAgICBjdG9yOiAiVWludDE2QXJyYXkiLAogICAgICAgIGJ1ZmZlcjogb3V0LmJ1ZmZlciwKICAgICAgICBieXRlT2Zmc2V0OiAwLAogICAgICAgIGxlbmd0aDogb3V0Lmxlbmd0aCwKICAgICAgfSwKICAgICAgY2hhbm5lbHM6IFswLCAxLCAyLCAzXSwKICAgICAgbm9ybWFsaXplZDogZmFsc2UsCiAgICAgIHNjYWxlOiBbMSwgMSwgMSwgMV0sCiAgICAgIG9mZnNldDogWzAsIDAsIDAsIDBdLAogICAgfV0sCiAgfTsKfQoKZnVuY3Rpb24gcGFja0JhbmRzQXNEYXRhKHJhc3RlciwgZm9ybWF0KSB7CiAgY29uc3QgZ3B1ID0gKGZvcm1hdCAmJiBmb3JtYXQuZ3B1KSB8fCB7fTsKICBjb25zdCBwcmVmZXJSR0JBOCA9IGdwdS5wcmVmZXJSR0JBOCAhPT0gZmFsc2U7CiAgY29uc3QgZm9yY2VSR0JBMTZGID0gISFncHUuZm9yY2VSR0JBMTZGOwoKICBjb25zdCB3aWR0aCA9IHJhc3Rlci53aWR0aDsKICBjb25zdCBoZWlnaHQgPSByYXN0ZXIuaGVpZ2h0OwogIGNvbnN0IHBpeGVsQ291bnQgPSB3aWR0aCAqIGhlaWdodDsKCiAgY29uc3QgYmFuZENvdW50ID0gcmFzdGVyLmJhbmRzID8gcmFzdGVyLmJhbmRzLmxlbmd0aCA6IDA7CiAgY29uc3QgY2hhbm5lbHMgPSAoZm9ybWF0ICYmIEFycmF5LmlzQXJyYXkoZm9ybWF0LmNoYW5uZWxzKSAmJiBmb3JtYXQuY2hhbm5lbHMubGVuZ3RoKQogICAgPyBmb3JtYXQuY2hhbm5lbHMuc2xpY2UoKQogICAgOiBbLi4uQXJyYXkoYmFuZENvdW50KS5rZXlzKCldOwogIGNvbnN0IGNoYW5uZWxDb3VudCA9IGNoYW5uZWxzLmZpbHRlcigoYykgPT4gYyAhPSBudWxsICYmIGMgPj0gMCkubGVuZ3RoOwoKICAvLyBEZWNpZGUgUkdCQTggdnMgUkdCQTE2RgogIGNvbnN0IGFsbFU4ID0gY2hhbm5lbHMuZXZlcnkoKGMpID0+IHsKICAgIGNvbnN0IGIgPSByYXN0ZXIuYmFuZHNbY107CiAgICByZXR1cm4gYiBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgfHwgYiBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5OwogIH0pOwogIGNvbnN0IHVzZVJHQkE4ID0gcHJlZmVyUkdCQTggJiYgIWZvcmNlUkdCQTE2RiAmJiBhbGxVODsKCiAgY29uc3QgcGFja3MgPSBbXTsKICBmb3IgKGxldCBwID0gMDsgcCA8IGNoYW5uZWxzLmxlbmd0aDsgcCArPSA0KSB7CiAgICBjb25zdCBwYWNrQ2ggPSBbCiAgICAgIGNoYW5uZWxzW3BdID8/IC0xLAogICAgICBjaGFubmVsc1twICsgMV0gPz8gLTEsCiAgICAgIGNoYW5uZWxzW3AgKyAyXSA/PyAtMSwKICAgICAgY2hhbm5lbHNbcCArIDNdID8/IC0xLAogICAgXTsKCiAgICBpZiAodXNlUkdCQTgpIHsKICAgICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KHBpeGVsQ291bnQgKiA0KTsKICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgcGl4ZWxDb3VudDsgaSsrLCBqICs9IDQpIHsKICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykgewogICAgICAgICAgY29uc3QgYmkgPSBwYWNrQ2hba107CiAgICAgICAgICBkYXRhW2ogKyBrXSA9IChiaSA+PSAwICYmIGJpIDwgcmFzdGVyLmJhbmRzLmxlbmd0aCkgPyByYXN0ZXIuYmFuZHNbYmldW2ldIDogMDsKICAgICAgICB9CiAgICAgIH0KICAgICAgcGFja3MucHVzaCh7CiAgICAgICAgZm9ybWF0OiAiUkdCQTgiLAogICAgICAgIGRhdGE6IHsgY3RvcjogIlVpbnQ4QXJyYXkiLCBidWZmZXI6IGRhdGEuYnVmZmVyLCBieXRlT2Zmc2V0OiAwLCBsZW5ndGg6IGRhdGEubGVuZ3RoIH0sCiAgICAgICAgY2hhbm5lbHM6IHBhY2tDaCwKICAgICAgICBub3JtYWxpemVkOiBmYWxzZSwKICAgICAgICBzY2FsZTogWzEsIDEsIDEsIDFdLAogICAgICAgIG9mZnNldDogWzAsIDAsIDAsIDBdLAogICAgICB9KTsKICAgICAgY29udGludWU7CiAgICB9CgogICAgLy8gUkdCQTE2RiBwYWNraW5nIHdpdGggImF1dG8gbm9ybWFsaXphdGlvbiBpZiBuZWVkZWQiCiAgICAvLyBJZiBpbnRlZ2VyIG1heCBleGNlZWRzIGhhbGYgZmxvYXQgcmFuZ2UgKDY1NTA0KSwgbm9ybWFsaXplIHRvIFswLi4xXSB1c2luZyBzY2FsZT1tYXguCiAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQxNkFycmF5KHBpeGVsQ291bnQgKiA0KTsKICAgIGNvbnN0IHNjYWxlID0gWzEsIDEsIDEsIDFdOwogICAgY29uc3Qgb2Zmc2V0ID0gWzAsIDAsIDAsIDBdOwoKICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7CiAgICAgIGNvbnN0IGJpID0gcGFja0NoW2tdOwogICAgICBpZiAoYmkgPCAwIHx8IGJpID49IHJhc3Rlci5iYW5kcy5sZW5ndGgpIGNvbnRpbnVlOwoKICAgICAgY29uc3QgYml0cyA9IHJhc3Rlci5iaXRzUGVyU2FtcGxlICYmIHJhc3Rlci5iaXRzUGVyU2FtcGxlW2JpXSAhPSBudWxsID8gcmFzdGVyLmJpdHNQZXJTYW1wbGVbYmldIDogKHJhc3Rlci5iaXRzUGVyU2FtcGxlID8gcmFzdGVyLmJpdHNQZXJTYW1wbGVbMF0gOiA4KTsKICAgICAgY29uc3QgYmFuZCA9IHJhc3Rlci5iYW5kc1tiaV07CiAgICAgIGNvbnN0IGlzRmxvYXQgPSBiYW5kIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5IHx8IGJhbmQgaW5zdGFuY2VvZiBGbG9hdDY0QXJyYXk7CgogICAgICBpZiAoIWlzRmxvYXQpIHsKICAgICAgICBjb25zdCBtYXggPSBiaXRzID4gMCA/IChNYXRoLnBvdygyLCBiaXRzKSAtIDEpIDogNjU1MzU7CiAgICAgICAgaWYgKG1heCA+IDY1NTA0KSB7CiAgICAgICAgICAvLyBub3JtYWxpemUgdG8gMC4uMSBmb3Igc2FmZSBoYWxmIHJhbmdlOyBzaGFkZXIgcmVjb25zdHJ1Y3RzIHdpdGggdmFsdWUgPSBzYW1wbGUgKiBzY2FsZSArIG9mZnNldAogICAgICAgICAgc2NhbGVba10gPSBtYXg7CiAgICAgICAgICBvZmZzZXRba10gPSAwOwogICAgICAgIH0KICAgICAgfQogICAgfQoKICAgIGxldCBjbGFtcGVkID0gZmFsc2U7CiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBwaXhlbENvdW50OyBpKyssIGogKz0gNCkgewogICAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykgewogICAgICAgIGNvbnN0IGJpID0gcGFja0NoW2tdOwogICAgICAgIGxldCB2ID0gKGJpID49IDAgJiYgYmkgPCByYXN0ZXIuYmFuZHMubGVuZ3RoKSA/IE51bWJlcihyYXN0ZXIuYmFuZHNbYmldW2ldKSA6IDA7CgogICAgICAgIC8vIGFwcGx5IG5vcm1hbGl6YXRpb24gKHN0b3JlIHYvc2NhbGUpCiAgICAgICAgaWYgKHNjYWxlW2tdICE9PSAxKSB2ID0gdiAvIHNjYWxlW2tdOwoKICAgICAgICAvLyBjbGFtcCB0byBoYWxmLWZsb2F0IGZpbml0ZSByYW5nZSB3aGVuIHN0b3JpbmcgcmF3IGZsb2F0cwogICAgICAgIGlmICh2ID4gNjU1MDQpIHsgdiA9IDY1NTA0OyBjbGFtcGVkID0gdHJ1ZTsgfQogICAgICAgIGVsc2UgaWYgKHYgPCAtNjU1MDQpIHsgdiA9IC02NTUwNDsgY2xhbXBlZCA9IHRydWU7IH0KCiAgICAgICAgZGF0YVtqICsga10gPSBmMzJUb0YxNkJpdHModik7CiAgICAgIH0KICAgIH0KCiAgICBpZiAoY2xhbXBlZCkgewogICAgICB3b3JrZXJXYXJuKAogICAgICAgICJncHVQYWNrX2YxNl9jbGFtcF93b3JrZXIiLAogICAgICAgICJbdGlmZi13b3JrZXJdIFNvbWUgdmFsdWVzIGV4Y2VlZGVkIFJHQkExNkYgZmluaXRlIHJhbmdlIGFuZCB3ZXJlIGNsYW1wZWQuIENvbnNpZGVyIG5vcm1hbGl6YXRpb24gdmlhIGZvcm1hdC5ncHUuZm9yY2VSR0JBMTZGICsgcmVseWluZyBvbiBzY2FsZS9vZmZzZXQuIgogICAgICApOwogICAgfQoKICAgIHBhY2tzLnB1c2goewogICAgICBmb3JtYXQ6ICJSR0JBMTZGIiwKICAgICAgZGF0YTogeyBjdG9yOiAiVWludDE2QXJyYXkiLCBidWZmZXI6IGRhdGEuYnVmZmVyLCBieXRlT2Zmc2V0OiAwLCBsZW5ndGg6IGRhdGEubGVuZ3RoIH0sCiAgICAgIGNoYW5uZWxzOiBwYWNrQ2gsCiAgICAgIG5vcm1hbGl6ZWQ6IGZhbHNlLAogICAgICBzY2FsZSwKICAgICAgb2Zmc2V0LAogICAgfSk7CiAgfQoKICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0LCBtb2RlOiAiZGF0YSIsIGNoYW5uZWxDb3VudCwgcGFja3MgfTsKfQoKYXN5bmMgZnVuY3Rpb24gZGVjb2RlUmFzdGVyRnJvbUFycmF5QnVmZmVyKGFiLCBoaW50cykgewogIGNvbnN0IHRpZmYgPSBhd2FpdCBmcm9tQXJyYXlCdWZmZXIoYWIpOwogIGNvbnN0IGNvdW50ID0gYXdhaXQgdGlmZi5nZXRJbWFnZUNvdW50KCk7CiAgbGV0IGltYWdlSW5kZXggPSBoaW50cyAmJiB0eXBlb2YgaGludHMuaW1hZ2VJbmRleCA9PT0gIm51bWJlciIgPyBoaW50cy5pbWFnZUluZGV4IDogbnVsbDsKCiAgaWYgKGNvdW50ICE9PSAxKSB7CiAgICBpZiAoaW1hZ2VJbmRleCA9PSBudWxsKSB7CiAgICAgIHRocm93IG5ldyBFcnJvcihgW1Jhd1RpZmZQbHVnaW5dIFRJRkYgaGFzICR7Y291bnR9IGltYWdlczsgcHJvdmlkZSByYXdUaWZmLmhpbnRzLmltYWdlSW5kZXggdG8gZGVjb2RlLmApOwogICAgfQogICAgaWYgKGltYWdlSW5kZXggPCAwIHx8IGltYWdlSW5kZXggPj0gY291bnQpIHsKICAgICAgdGhyb3cgbmV3IEVycm9yKGBbUmF3VGlmZlBsdWdpbl0gaW1hZ2VJbmRleCAke2ltYWdlSW5kZXh9IG91dCBvZiByYW5nZSAoMC4uJHtjb3VudCAtIDF9KS5gKTsKICAgIH0KICB9IGVsc2UgewogICAgaW1hZ2VJbmRleCA9IDA7CiAgfQoKICBjb25zdCBpbWcgPSBhd2FpdCB0aWZmLmdldEltYWdlKGltYWdlSW5kZXgpOwogIGNvbnN0IHdpZHRoID0gaW1nLmdldFdpZHRoKCk7CiAgY29uc3QgaGVpZ2h0ID0gaW1nLmdldEhlaWdodCgpOwogIGNvbnN0IGZpbGVEaXJlY3RvcnkgPSBpbWcuZmlsZURpcmVjdG9yeSB8fCB7fTsKICBjb25zdCBzYW1wbGVzUGVyUGl4ZWwgPSBnZXRTYW1wbGVzUGVyUGl4ZWwoaW1nKTsKICBjb25zdCBiaXRzUGVyU2FtcGxlID0gZ2V0Qml0c1BlclNhbXBsZShpbWcpOwogIGNvbnN0IHNhbXBsZUZvcm1hdCA9IGdldFNhbXBsZUZvcm1hdChpbWcpOwogIGNvbnN0IHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24gPSBnZXRQaG90b21ldHJpYyhmaWxlRGlyZWN0b3J5KTsKICBjb25zdCBjb2xvck1hcCA9IGdldENvbG9yTWFwKGZpbGVEaXJlY3RvcnkpOwoKICBjb25zdCBkZWNvZGVPcHRzID0gT2JqZWN0LmFzc2lnbih7IGludGVybGVhdmU6IGZhbHNlIH0sIChoaW50cyAmJiBoaW50cy5kZWNvZGUpIHx8IHt9KTsKICBjb25zdCByYXN0ZXJzID0gbm9ybWFsaXplUmFzdGVycyhhd2FpdCBpbWcucmVhZFJhc3RlcnMoewogICAgLi4uZGVjb2RlT3B0cywKICAgIHBvb2w6IG51bGwsIC8vIGFscmVhZHkgaW4gd29ya2VyLCBkbyBub3QgbmVzdAogIH0pKTsKCiAgY29uc3QgYmFuZHMgPSByYXN0ZXJzLm1hcCgoYXJyKSA9PiAoewogICAgY3RvcjogYXJyLmNvbnN0cnVjdG9yICYmIGFyci5jb25zdHJ1Y3Rvci5uYW1lID8gYXJyLmNvbnN0cnVjdG9yLm5hbWUgOiAiVWludDhBcnJheSIsCiAgICBidWZmZXI6IGFyci5idWZmZXIsCiAgICBieXRlT2Zmc2V0OiBhcnIuYnl0ZU9mZnNldCwKICAgIGxlbmd0aDogYXJyLmxlbmd0aCwKICB9KSk7CgogIHJldHVybiB7CiAgICB3aWR0aCwKICAgIGhlaWdodCwKICAgIGJhbmRzLAogICAgc2FtcGxlc1BlclBpeGVsOiBNYXRoLm1heChzYW1wbGVzUGVyUGl4ZWwgfHwgMCwgYmFuZHMubGVuZ3RoKSwKICAgIGJpdHNQZXJTYW1wbGU6IEFycmF5LmlzQXJyYXkoYml0c1BlclNhbXBsZSkgPyBiaXRzUGVyU2FtcGxlIDogW2JpdHNQZXJTYW1wbGVdLAogICAgc2FtcGxlRm9ybWF0OiBzYW1wbGVGb3JtYXQgfHwgbnVsbCwKICAgIHBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24sCiAgICBjb2xvck1hcCwKICAgIGZpbGVEaXJlY3RvcnksCiAgfTsKfQoKYXN5bmMgZnVuY3Rpb24gZGVjb2RlQW5kUmVuZGVySW1hZ2VCaXRtYXBGcm9tQXJyYXlCdWZmZXIoYWIsIGhpbnRzKSB7CiAgY29uc3QgcmFzdGVyUGF5bG9hZCA9IGF3YWl0IGRlY29kZVJhc3RlckZyb21BcnJheUJ1ZmZlcihhYiwgaGludHMpOwogIGNvbnN0IHJhc3RlciA9IE9iamVjdC5hc3NpZ24oe30sIHJhc3RlclBheWxvYWQsIHsgYmFuZHM6IHJldml2ZUJhbmRzKHJhc3RlclBheWxvYWQuYmFuZHMpIH0pOwogIGNvbnN0IGZvcm1hdCA9IHJlc29sdmVGb3JtYXRGcm9tSGludHMoaGludHMpOwoKICAvLyBpbWFnZS1tb2RlIHJlbmRlciBvbmx5IGZvciBJbWFnZUJpdG1hcCBwYXRoCiAgY29uc3QgcmdiYSA9IHJhc3RlclRvUkdCQThfSW1hZ2VNb2RlKHJhc3RlciwgaGludHMsIGZvcm1hdCk7CgogIC8vIFByZWZlciBPZmZzY3JlZW5DYW52YXMgLT4gSW1hZ2VCaXRtYXAgaWYgYXZhaWxhYmxlIGluIHRoaXMgd29ya2VyLgogIGlmICh0eXBlb2YgT2Zmc2NyZWVuQ2FudmFzID09PSAiZnVuY3Rpb24iKSB7CiAgICBjb25zdCBjYW52YXMgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKHJhc3Rlci53aWR0aCwgcmFzdGVyLmhlaWdodCk7CiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgiMmQiLCB7IHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZSB9KTsKICAgIGNvbnN0IGltZ0RhdGEgPSBuZXcgSW1hZ2VEYXRhKHJnYmEsIHJhc3Rlci53aWR0aCwgcmFzdGVyLmhlaWdodCk7CiAgICBjdHgucHV0SW1hZ2VEYXRhKGltZ0RhdGEsIDAsIDApOwogICAgY29uc3QgYm1wID0gY2FudmFzLnRyYW5zZmVyVG9JbWFnZUJpdG1hcCgpOwogICAgcmV0dXJuIHsga2luZDogImltYWdlQml0bWFwIiwgaW1hZ2VCaXRtYXA6IGJtcCB9OwogIH0KCiAgLy8gRmFsbGJhY2s6IHJldHVybiBSR0JBIGJ5dGVzIGFuZCBsZXQgbWFpbiB0aHJlYWQgY3JlYXRlIGFuIEltYWdlQml0bWFwLgogIHJldHVybiB7CiAgICBraW5kOiAicmdiYTgiLAogICAgd2lkdGg6IHJhc3Rlci53aWR0aCwKICAgIGhlaWdodDogcmFzdGVyLmhlaWdodCwKICAgIHJnYmFCdWZmZXI6IHJnYmEuYnVmZmVyLAogICAgcmdiYUJ5dGVPZmZzZXQ6IHJnYmEuYnl0ZU9mZnNldCwKICAgIHJnYmFMZW5ndGg6IHJnYmEubGVuZ3RoLAogIH07Cn0KCmZ1bmN0aW9uIHJhc3RlclBheWxvYWRUb1RleHR1cmVTZXQocmFzdGVyUGF5bG9hZCwgaGludHMpIHsKICBjb25zdCByYXN0ZXIgPSBPYmplY3QuYXNzaWduKHt9LCByYXN0ZXJQYXlsb2FkLCB7IGJhbmRzOiByZXZpdmVCYW5kcyhyYXN0ZXJQYXlsb2FkLmJhbmRzKSB9KTsKICBjb25zdCBmb3JtYXQgPSByZXNvbHZlRm9ybWF0RnJvbUhpbnRzKGhpbnRzKSB8fCB7fTsKICBjb25zdCBpbnRlcnByZXRhdGlvbiA9IGZvcm1hdC5pbnRlcnByZXRhdGlvbiB8fCAiYXV0byI7CiAgY29uc3QgaW5mZXJyZWQgPSBpbmZlckZyb21USUZGVGFncyhyYXN0ZXIpOwogIGNvbnN0IG1vZGUgPSAoaW50ZXJwcmV0YXRpb24gPT09ICJhdXRvIikgPyBpbmZlcnJlZCA6IGludGVycHJldGF0aW9uOwoKICBpZiAobW9kZSA9PT0gImltYWdlIikgewogICAgY29uc3QgcmdiYSA9IHJhc3RlclRvUkdCQThfSW1hZ2VNb2RlKHJhc3RlciwgaGludHMsIGZvcm1hdCk7CiAgICByZXR1cm4gcGFja0Nhbm9uaWNhbFJHQkEocmdiYSwgcmFzdGVyLndpZHRoLCByYXN0ZXIuaGVpZ2h0LCBmb3JtYXQpOwogIH0KICByZXR1cm4gcGFja0JhbmRzQXNEYXRhKHJhc3RlciwgZm9ybWF0KTsKfQoKYXN5bmMgZnVuY3Rpb24gZGVjb2RlQW5kUGFja0dwdVRleHR1cmVTZXRGcm9tQXJyYXlCdWZmZXIoYWIsIGhpbnRzKSB7CiAgY29uc3QgcmFzdGVyUGF5bG9hZCA9IGF3YWl0IGRlY29kZVJhc3RlckZyb21BcnJheUJ1ZmZlcihhYiwgaGludHMpOwogIGNvbnN0IHRleFNldCA9IHJhc3RlclBheWxvYWRUb1RleHR1cmVTZXQocmFzdGVyUGF5bG9hZCwgaGludHMpOwogIHJldHVybiB7IHJhc3RlclBheWxvYWQsIHRleFNldCB9Owp9CgpmdW5jdGlvbiBjb2xsZWN0VHJhbnNmZXJzRm9yUmFzdGVyUGF5bG9hZChyYXN0ZXJQYXlsb2FkKSB7CiAgcmV0dXJuIHJhc3RlclBheWxvYWQuYmFuZHMubWFwKChiKSA9PiBiLmJ1ZmZlcik7Cn0KCmZ1bmN0aW9uIGNvbGxlY3RUcmFuc2ZlcnNGb3JUZXh0dXJlU2V0KHRleFNldCkgewogIGNvbnN0IHRyYW5zZmVycyA9IFtdOwogIGZvciAoY29uc3QgcCBvZiB0ZXhTZXQucGFja3MpIHsKICAgIHRyYW5zZmVycy5wdXNoKHAuZGF0YS5idWZmZXIpOwogIH0KICByZXR1cm4gdHJhbnNmZXJzOwp9Cgp3b3JrZXJSZWYub25tZXNzYWdlID0gYXN5bmMgKGV2KSA9PiB7CiAgY29uc3QgbXNnID0gZXYuZGF0YSB8fCB7fTsKICBjb25zdCBpZCA9IG1zZy5pZDsKICBjb25zdCBvcCA9IG1zZy5vcDsKICBjb25zdCBwYXlsb2FkID0gbXNnLnBheWxvYWQgfHwge307CiAgdHJ5IHsKICAgIGlmIChvcCA9PT0gImRlY29kZVJhc3RlciIpIHsKICAgICAgY29uc3QgYWIgPSBwYXlsb2FkLmJ1ZmZlcjsKICAgICAgY29uc3QgaGludHMgPSBwYXlsb2FkLmhpbnRzIHx8IHt9OwogICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZWNvZGVSYXN0ZXJGcm9tQXJyYXlCdWZmZXIoYWIsIGhpbnRzKTsKICAgICAgd29ya2VyUmVmLnBvc3RNZXNzYWdlKHsgaWQsIG9rOiB0cnVlLCByZXN1bHQgfSwgY29sbGVjdFRyYW5zZmVyc0ZvclJhc3RlclBheWxvYWQocmVzdWx0KSk7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICBpZiAob3AgPT09ICJkZWNvZGVBbmRSZW5kZXJJbWFnZUJpdG1hcCIpIHsKICAgICAgY29uc3QgYWIgPSBwYXlsb2FkLmJ1ZmZlcjsKICAgICAgY29uc3QgaGludHMgPSBwYXlsb2FkLmhpbnRzIHx8IHt9OwogICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZWNvZGVBbmRSZW5kZXJJbWFnZUJpdG1hcEZyb21BcnJheUJ1ZmZlcihhYiwgaGludHMpOwoKICAgICAgaWYgKHJlc3VsdC5raW5kID09PSAiaW1hZ2VCaXRtYXAiKSB7CiAgICAgICAgd29ya2VyUmVmLnBvc3RNZXNzYWdlKHsgaWQsIG9rOiB0cnVlLCByZXN1bHQgfSwgW3Jlc3VsdC5pbWFnZUJpdG1hcF0pOwogICAgICB9IGVsc2UgewogICAgICAgIHdvcmtlclJlZi5wb3N0TWVzc2FnZSh7IGlkLCBvazogdHJ1ZSwgcmVzdWx0IH0sIFtyZXN1bHQucmdiYUJ1ZmZlcl0pOwogICAgICB9CiAgICAgIHJldHVybjsKICAgIH0KCiAgICBpZiAob3AgPT09ICJkZWNvZGVBbmRQYWNrR3B1VGV4dHVyZVNldCIpIHsKICAgICAgY29uc3QgYWIgPSBwYXlsb2FkLmJ1ZmZlcjsKICAgICAgY29uc3QgaGludHMgPSBwYXlsb2FkLmhpbnRzIHx8IHt9OwogICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZWNvZGVBbmRQYWNrR3B1VGV4dHVyZVNldEZyb21BcnJheUJ1ZmZlcihhYiwgaGludHMpOwoKICAgICAgY29uc3QgdHJhbnNmZXJzID0gWwogICAgICAgIC4uLmNvbGxlY3RUcmFuc2ZlcnNGb3JSYXN0ZXJQYXlsb2FkKHJlc3VsdC5yYXN0ZXJQYXlsb2FkKSwKICAgICAgICAuLi5jb2xsZWN0VHJhbnNmZXJzRm9yVGV4dHVyZVNldChyZXN1bHQudGV4U2V0KSwKICAgICAgXTsKICAgICAgd29ya2VyUmVmLnBvc3RNZXNzYWdlKHsgaWQsIG9rOiB0cnVlLCByZXN1bHQgfSwgdHJhbnNmZXJzKTsKICAgICAgcmV0dXJuOwogICAgfQoKICAgIGlmIChvcCA9PT0gInJhc3RlclRvR3B1VGV4dHVyZVNldCIpIHsKICAgICAgY29uc3QgcmFzdGVyID0gcGF5bG9hZC5yYXN0ZXI7CiAgICAgIGNvbnN0IGhpbnRzID0gcGF5bG9hZC5oaW50cyB8fCB7fTsKICAgICAgY29uc3QgdGV4U2V0ID0gcmFzdGVyUGF5bG9hZFRvVGV4dHVyZVNldChyYXN0ZXIsIGhpbnRzKTsKICAgICAgd29ya2VyUmVmLnBvc3RNZXNzYWdlKHsgaWQsIG9rOiB0cnVlLCByZXN1bHQ6IHRleFNldCB9LCBjb2xsZWN0VHJhbnNmZXJzRm9yVGV4dHVyZVNldCh0ZXhTZXQpKTsKICAgICAgcmV0dXJuOwogICAgfQoKICAgIHRocm93IG5ldyBFcnJvcihgW1Jhd1RpZmZQbHVnaW5dIFVua25vd24gd29ya2VyIG9wOiAke29wfWApOwogIH0gY2F0Y2ggKGUpIHsKICAgIHdvcmtlclJlZi5wb3N0TWVzc2FnZSh7IGlkLCBvazogZmFsc2UsIGVycm9yOiBlcnJvclRvUGxhaW4oZSkgfSk7CiAgfQp9Ow==", import.meta.url), {
      type: "module"
    })
  }, g = i.RawTiffPlugin || qs(i, {
    workerPool: r
  });
  let c = 0;
  const h = class h extends i.TileSource {
    /**
     * Create a shared GeoTIFF Pool for all GeoTIFFTileSources to use.
     *
     * If a shared pool is not created, every page of every GeoTIFF will create its own pool,
     * which can quickly lead to browser crashes.
     *
     * Created on first use, so that importing this module does not spawn workers.
     *
     * @static sharedPool
     * @type {Pool}
     */
    static get sharedPool() {
      return this._sharedPool = this._sharedPool ?? new kt(), this._sharedPool;
    }
    static set sharedPool(l) {
      this._sharedPool = l;
    }
    constructor(l, a = { logLatency: !1 }) {
      super();
      let m = this;
      this.input = l, this.options = a, this.channel = (l == null ? void 0 : l.channel) ?? null, this._ready = !1, this._pool = h.sharedPool, this._tileSize = 256, this._tsCounter = c, c += 1, l.GeoTIFF && l.GeoTIFFImages ? (this.promises = {
        GeoTIFF: Promise.resolve(l.GeoTIFF),
        GeoTIFFImages: Promise.resolve(l.GeoTIFFImages),
        ready: new xe()
      }, this.GeoTIFF = l.GeoTIFF, this.imageCount = l.GeoTIFFImages.length, this.GeoTIFFImages = l.GeoTIFFImages, this.GeoTIFFAllImages = l.GeoTIFFAllImages ?? l.GeoTIFFImages, this.setupLevels()) : (this.promises = {
        GeoTIFF: l instanceof File ? ue(l, a.GeoTIFFOptions) : We(l, a.GeoTIFFOptions),
        GeoTIFFImages: new xe(),
        ready: new xe()
      }, this.promises.GeoTIFF.then((u) => (m.GeoTIFF = u, u.getImageCount())).then((u) => {
        m.imageCount = u;
        let A = [...Array(u).keys()].map((y) => m.GeoTIFF.getImage(y));
        return Promise.all(A);
      }).then((u) => {
        u = m.constructor.userDefinedImagesFilter(u, a), m.GeoTIFFImages = u, m.GeoTIFFAllImages = u, m.promises.GeoTIFFImages.resolve(u), this.setupLevels();
      }).catch((u) => {
        throw console.error("Re-throwing error with GeoTIFF:", u), u;
      }));
    }
    static async getAllTileSources(l, a) {
      const m = l instanceof File ? l.name.split(".").pop() : l.split(".").pop();
      let u = await (l instanceof File ? ue(l, a.GeoTIFFOptions) : We(l, a.GeoTIFFOptions)), A = await u.getImageCount();
      const y = await Promise.all(
        Array.from({ length: A }, (G, W) => u.getImage(W))
      );
      let f = l instanceof File ? ue(l) : We(l), B = this.userDefinedImagesFilter(y, a);
      B = B.filter(
        (G) => G.fileDirectory.photometricInterpretation !== Q.TransparencyMask
      ), B.sort((G, W) => W.getWidth() - G.getWidth());
      const p = 0.015, b = B.reduce((G, W) => {
        const F = W.getWidth() / W.getHeight();
        let Y = "";
        W.fileDirectory.ImageDescription && (Y = W.fileDirectory.ImageDescription.split(`
`)[1] ?? "");
        const w = G.filter(
          (H) => Math.abs(1 - H.aspectRatio / F) < p && !(Y != null && Y.toLowerCase().includes("macro") || Y != null && Y.toLowerCase().includes("label"))
        );
        return w.length === 0 ? G.push({
          aspectRatio: F,
          images: [W]
        }) : w[0].images.push(W), G;
      }, []).map((G) => G.images), Z = [];
      for (let G = 0; G < b.length; G++) {
        const W = b[G];
        if (G !== 0) {
          Z.push(
            new i.GeoTIFFTileSource(
              {
                GeoTIFF: f,
                GeoTIFFImages: W,
                GeoTIFFAllImages: W
              },
              a
            )
          );
          continue;
        }
        if (m === "qptiff") {
          const w = Ps(W);
          for (const H of w.values())
            Z.push(
              new i.GeoTIFFTileSource(
                {
                  GeoTIFF: f,
                  GeoTIFFImages: H.images,
                  GeoTIFFAllImages: H.images,
                  channel: {
                    name: H.name,
                    color: H.color
                  }
                },
                a
              )
            );
          continue;
        }
        const F = await this.resolveLayout(f, W, a.hints), Y = await this.buildLevelImages(f, F, f);
        Z.push(
          new i.GeoTIFFTileSource(
            {
              GeoTIFF: f,
              GeoTIFFImages: Y,
              GeoTIFFAllImages: W
            },
            a
          )
        );
      }
      return Z;
    }
    /**
     * Return the tileWidth for a given level.
     * @function
     * @param {Number} level
     */
    getTileWidth(l) {
      if (this.levels.length > l)
        return this.levels[l].tileWidth;
    }
    /**
     * Return the tileHeight for a given level.
     * @function
     * @param {Number} level
     */
    getTileHeight(l) {
      if (this.levels.length > l)
        return this.levels[l].tileHeight;
    }
    /**
     * @function
     * @param {Number} level
     */
    getLevelScale(l) {
      let a = NaN;
      return this.levels.length > 0 && l >= this.minLevel && l <= this.maxLevel && (a = this.levels[l].width / this.levels[this.maxLevel].width), a;
    }
    /**
     * Return the number of tiles at a given level.
     *
     * Taken from the level itself: the inherited implementation derives the count from
     * the level scale, whose rounding can yield one row or column more than the level has.
     * @function
     * @param {Number} level
     */
    getNumTiles(l) {
      if (this.levels.length > l) {
        const { width: a, height: m, tileWidth: u, tileHeight: A } = this.levels[l];
        return new i.Point(
          Math.ceil(a / u),
          Math.ceil(m / A)
        );
      }
      return super.getNumTiles(l);
    }
    /**
     * Handle maintaining unique caches per channel in multi-channel images
     */
    getTileHashKey(l, a, m) {
      var u;
      return `geotiffTileSource${this._tsCounter}_${((u = this == null ? void 0 : this.channel) == null ? void 0 : u.name) ?? ""}_${l}_${a}_${m}`;
    }
    /**
     * Implement function here instead of as custom tile source in client code
     * @function
     * @param {Number} levelnum
     * @param {Number} x
     * @param {Number} y
     */
    getTileUrl(l, a, m) {
      return `${l}/${a}_${m}`;
    }
    downloadTileStart(l) {
      const a = !!i.converter && typeof l.fail == "function", m = "" + l.src, u = new AbortController();
      l.userData && (l.userData.abortController = u);
      const A = this.levels[l.tile.level];
      this.regionToTiffRaster(A, l.tile.x, l.tile.y, u.signal).then(async (y) => {
        if (a) {
          l.finish(y, m, y.getType());
          return;
        }
        const f = await Promise.resolve(g.rasterToContext2d(l.tile, y));
        l.finish(f.canvas);
      }).catch((y) => {
        const f = y && y.message ? y.message : String(y);
        a ? l.fail(f) : l.finish(null, m, f);
      });
    }
    downloadTileAbort(l) {
      const a = l.userData && l.userData.abortController;
      a ? a.abort() : $.console.error("Could not abort download: controller not available.");
    }
    setupComplete() {
      this._ready = !0, this.promises.ready.resolve(), this.raiseEvent("ready", { tileSource: this });
    }
    setupLevels() {
      if (this._ready)
        return;
      let l = this.GeoTIFFImages.sort((B, p) => p.getWidth() - B.getWidth()), a = this._tileSize, m = this._tileSize;
      const u = (B) => {
        const p = h.getGeoTiffFileDirectory(B), d = p.TileWidth !== void 0 && p.TileLength !== void 0;
        return {
          tileWidth: this.options.tileWidth || d && B.getTileWidth() || a,
          tileHeight: this.options.tileHeight || d && B.getTileHeight() || m
        };
      };
      let A = l[0].getWidth();
      this.width = A;
      let y = l[0].getHeight();
      if (this.height = y, this.tileOverlap = 0, this.minLevel = 0, this.aspectRatio = this.width / this.height, this.dimensions = new i.Point(this.width, this.height), l.reduce(
        (B, p) => (B.width !== -1 && (B.valid = B.valid && p.getWidth() < B.width), B.width = p.getWidth(), B),
        { valid: !0, width: -1 }
      ).valid)
        this.levels = l.map((B) => {
          let p = B.getWidth(), d = B.getHeight();
          return {
            width: p,
            height: d,
            ...u(B),
            image: B,
            scaleFactor: 1
          };
        }), this.maxLevel = this.levels.length - 1;
      else {
        let B = Math.ceil(
          Math.log2(Math.max(A / a, y / m))
        ), p = [...Array(B).keys()].filter((d) => d % 2 == 0);
        this.levels = p.map((d) => {
          let b = Math.pow(2, d);
          const Z = l.filter((W) => {
            const F = Math.pow(2, d - 1);
            return F >= 0 ? W.getWidth() * F < A && W.getWidth() * b >= A : W.getWidth() * b >= A;
          });
          if (Z.length === 0)
            return null;
          const G = Z[0];
          return {
            width: A / b,
            height: y / b,
            ...u(G),
            image: G,
            scaleFactor: b * G.getWidth() / A
          };
        }).filter((d) => d !== null), this.maxLevel = this.levels.length - 1;
      }
      this.levels = this.levels.sort((B, p) => B.width - p.width), this._tileWidth = this.levels[0].tileWidth, this._tileHeight = this.levels[0].tileHeight, this.setupComplete();
    }
    static getGeoTiffFileDirectory(l) {
      var a;
      return ((a = l.getFileDirectory) == null ? void 0 : a.call(l)) ?? l.fileDirectory ?? {};
    }
    static getGeoTiffFileKey(l) {
      return [
        l.getWidth(),
        l.getHeight(),
        this.getGeoTiffFileDirectory(l).TileWidth ?? 0,
        this.getGeoTiffFileDirectory(l).TileLength ?? 0,
        (l.getWidth() / l.getHeight()).toFixed(6)
      ].join("|");
    }
    /**
     * Aperio-style companion pages (macro / label) use line 1 of ImageDescription; they must not
     * participate in IFD pyramid detection when mixed with the main slide.
     */
    static isSvsStyleCompanionPage(l) {
      var A;
      const a = (A = l.fileDirectory) == null ? void 0 : A.ImageDescription;
      if (typeof a != "string" || !a) return !1;
      const u = (a.split(`
`)[1] ?? "").toLowerCase();
      return u.includes("macro") || u.includes("label");
    }
    static _uniqueByDecreasingSize(l) {
      const a = l.map((A) => ({ im: A, w: A.getWidth(), h: A.getHeight() })).sort((A, y) => y.w - A.w), m = [], u = /* @__PURE__ */ new Set();
      for (const { im: A, w: y, h: f } of a) {
        const B = `${y}x${f}`;
        u.has(B) || (u.add(B), m.push(A));
      }
      return m;
    }
    static async resolveLayout(l, a, m = {}) {
      const u = m.layout || {}, A = u.pyramid || "auto", y = Number.isFinite(u.planeIndex) ? u.planeIndex : 0, f = u.prefer === "stack" ? "stack" : "pyramid", B = /* @__PURE__ */ new Map();
      for (const S of a) {
        const D = this.getGeoTiffFileKey(S);
        S.__key = D;
        const L = B.get(D) || [];
        L.push(S), B.set(D, L);
      }
      const p = this._uniqueByDecreasingSize(a), d = a.filter((S) => !this.isSvsStyleCompanionPage(S)), b = this._uniqueByDecreasingSize(d), Z = (S, D, L) => {
        const j = S / (D + L), T = D - L, oe = T > 0 ? S / T : 1 / 0;
        return { min: j, max: oe };
      }, G = (S, D) => Math.max(S.min, D.min) <= Math.min(S.max, D.max), W = (S, D, L, j, T) => {
        const oe = Z(S, L, T), ge = Z(D, j, T);
        return G(oe, ge);
      }, F = (S) => {
        if (S.length < 2) return !1;
        for (let T = 1; T < S.length; T++)
          if (S[T].getWidth() >= S[T - 1].getWidth() || S[T].getHeight() >= S[T - 1].getHeight()) return !1;
        const D = S[0].getWidth(), L = S[0].getHeight(), j = 1;
        for (const T of S) {
          const oe = T.getWidth(), ge = T.getHeight();
          if (!W(D, L, oe, ge, j)) return !1;
        }
        return !0;
      }, Y = F(p), w = F(b), H = a.some(
        (S) => this.isSvsStyleCompanionPage(S)
      );
      let N = Y, V = !N && w;
      H && w && (V = !0, N = !1);
      const v = N || V, k = N ? p : V ? b : p, P = a.some((S) => {
        const D = this.getGeoTiffFileDirectory(S).SubIFDs;
        return D && D.length;
      });
      let R = "single";
      A === "ifd" ? R = v ? "ifd" : "single" : A === "subifd" ? R = P ? "subifd" : "single" : v ? R = "ifd" : P ? R = "subifd" : R = "single";
      const J = p[0], x = J.__key, K = B.get(x) || [J], E = K[Math.max(0, Math.min(K.length - 1, y))];
      return f === "stack" && K.length > 1 && R === "ifd" && (R = "single"), R === "subifd" && (se(`${E.__key}-subifd-warn`, `[GeoTIFFTileSource] File was detected to contain SubIFD pyramids, 
however, geotiff.js does not support reading SubIFD files and is unable to display the pyramid. Only the
high-resolution lowest level will be shown. Note that loading such data can crash your browser due to memory consumption.`, "warn"), R = "ifd"), { strategy: R, planes: K, chosenPlane: E, ifdLevelsLargestToSmallest: k };
    }
    static async buildLevelImages(l, a, m) {
      const { strategy: u, chosenPlane: A, ifdLevelsLargestToSmallest: y, planes: f } = a, B = (p) => {
        var d;
        return ((d = p.getFileDirectory) == null ? void 0 : d.call(p)) ?? p.fileDirectory ?? {};
      };
      if (u === "ifd") {
        const p = [...y].sort((d, b) => d.getWidth() - b.getWidth());
        return f.length > 1 && se(m, `[GeoTIFFTileSource] Detected a plane stack (${f.length} same-size IFDs) AND a top-level pyramid. Defaulting to planeIndex=0. Set hints.layout.planeIndex to choose a different plane.`, "warn"), p;
      }
      if (u === "subifd") {
        const d = B(A).SubIFDs;
        if (!d || !d.length)
          return se(m, "[GeoTIFFTileSource] SubIFD pyramid requested/detected but the chosen plane has no SubIFDs. Falling back to single level.", "warn"), [A];
        if (typeof A.getSubIFDs == "function") {
          const Z = [...await A.getSubIFDs(), A].sort((G, W) => G.getWidth() - W.getWidth());
          return f.length > 1 && se(m, `[GeoTIFFTileSource] Detected a plane stack (${f.length} same-size IFDs) with SubIFD pyramid. Defaulting to planeIndex=0. Set hints.layout.planeIndex to choose plane.`, "warn"), Z;
        }
        return se(m, "[GeoTIFFTileSource] SubIFDs are present but geotiff.js does not expose getSubIFDs() in this build. Using single level. (You can still render multi-plane data via your GPU pipeline.)", "warn"), [A];
      }
      return f.length > 1 && se(m, `[GeoTIFFTileSource] Detected ${f.length} same-size IFD pages (likely channels/planes). No pyramid detected. Defaulting to planeIndex=0. Set hints.layout.planeIndex to choose plane.`, "warn"), [A];
    }
    regionToTiffRaster(l, a, m, u) {
      var Z, G, W, F;
      const A = this.options.logLatency && Date.now(), y = l.tileWidth, f = l.tileHeight, B = [a * y, m * f, (a + 1) * y, (m + 1) * f].map(
        (Y) => Y * l.scaleFactor
      ), p = l.image, d = (G = (Z = p.fileDirectory) == null ? void 0 : Z.Software) == null ? void 0 : G.startsWith("PerkinElmer-QPI");
      let b = null;
      if (d && ((W = p.fileDirectory) != null && W.ImageDescription))
        try {
          const w = (F = new DOMParser().parseFromString(p.fileDirectory.ImageDescription, "text/xml").querySelector("Color")) == null ? void 0 : F.textContent;
          b = w ? w.split(",").map((H) => parseInt(H, 10)) : null;
        } catch {
          b = null;
        }
      return p.readRasters({
        interleave: !1,
        window: B,
        pool: this._pool,
        width: y,
        height: f,
        signal: u
      }).then((Y) => {
        const w = Array.isArray(Y) ? Y : [Y], H = p.fileDirectory || {}, N = new g.TiffRaster({
          width: y,
          height: f,
          bands: w,
          samplesPerPixel: Math.max(H.SamplesPerPixel || 0, w.length),
          bitsPerSample: H.BitsPerSample || [8],
          sampleFormat: H.SampleFormat || null,
          photometricInterpretation: H.PhotometricInterpretation,
          colorMap: H.ColorMap || null,
          fileDirectory: H,
          hints: {
            ...this.channel ? { channel: this.channel } : {},
            ...b ? { tintRGB: b } : {}
          }
        });
        return this.options.logLatency && (typeof this.options.logLatency == "function" ? this.options.logLatency : console.log)(
          "Tile decode latency (ms):",
          Date.now() - A
        ), N;
      });
    }
  };
  Je(h, "_sharedPool", n ?? null), Je(h, "userDefinedImagesFilter", (l, a) => (typeof a.imagesFilter < "u" && a.imagesFilter && (Array.isArray(a.imagesFilter) ? l = l.filter((m, u) => a.imagesFilter.includes(u)) : typeof a.imagesFilter == "function" && (l = l.filter(a.imagesFilter)), a.imagesFilter = void 0), l));
  let I = h;
  i.GeoTIFFTileSource = I;
};
(function(i, e) {
  typeof exports > "u" || typeof i.OpenSeadragon < "u" && e(i.OpenSeadragon);
})(typeof window < "u" ? window : void 0, $s);
export {
  Ns as B,
  wi as L,
  Wi as a,
  $s as e,
  Zt as g
};
//# sourceMappingURL=main-CM7Rw5f1.js.map
