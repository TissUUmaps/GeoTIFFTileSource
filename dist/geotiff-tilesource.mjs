var Ag = Object.defineProperty;
var Gg = (c, I, t) => I in c ? Ag(c, I, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[I] = t;
var tg = (c, I, t) => Gg(c, typeof I != "symbol" ? I + "" : I, t);
import { globals as Zg, fromArrayBuffer as mg, fromBlob as og, Pool as dg, fromUrl as ag } from "geotiff";
class ig {
  constructor() {
    this.promise = new Promise((I, t) => {
      this.reject = t, this.resolve = I;
    });
  }
}
const sg = {};
function M(c, I, t = "warn") {
  sg[c] || (sg[c] = !0, console[t](I));
}
function U(c, I) {
  return c.getFileDirectory().getValue(I);
}
function E(c, I) {
  return c.getFileDirectory().loadValue(I);
}
function Ig(c, I) {
  return c.getFileDirectory().hasTag(I);
}
const Bg = (c) => {
  var t, i, h;
  const I = /* @__PURE__ */ new Map();
  for (const A of c) {
    const s = new DOMParser().parseFromString(
      (t = A.fileDirectory) == null ? void 0 : t.ImageDescription,
      "text/xml"
    ), b = (i = s == null ? void 0 : s.querySelector("Name")) == null ? void 0 : i.textContent, m = (h = s == null ? void 0 : s.querySelector("Color")) == null ? void 0 : h.textContent;
    if (!b)
      continue;
    const y = m ? m.split(",").map((F) => parseInt(F)) : [255, 255, 255];
    I.has(b) || I.set(b, {
      name: b,
      color: y,
      images: []
    }), I.get(b).images.push(A);
  }
  return I;
};
class j {
  static RGBAfromYCbCr(...I) {
    let t, i, h;
    if (I.length === 1) {
      const b = I[0], m = new Uint8ClampedArray(b.length * 4 / 3);
      for (let y = 0, F = 0; y < b.length; y += 3, F += 4)
        t = b[y], i = b[y + 1], h = b[y + 2], m[F] = t + 1.402 * (h - 128), m[F + 1] = t - 0.34414 * (i - 128) - 0.71414 * (h - 128), m[F + 2] = t + 1.772 * (i - 128), m[F + 3] = 255;
      return m;
    }
    [t, i, h] = I;
    const A = t.length, s = new Uint8ClampedArray(A * 4);
    for (let b = 0, m = 0; b < A; b++, m += 4) {
      const y = t[b], F = i[b], X = h[b];
      s[m] = y + 1.402 * (X - 128), s[m + 1] = y - 0.34414 * (F - 128) - 0.71414 * (X - 128), s[m + 2] = y + 1.772 * (F - 128), s[m + 3] = 255;
    }
    return s;
  }
  static RGBAfromRGB(...I) {
    if (I.length === 1) {
      const m = I[0], y = new Uint8ClampedArray(m.length * 4 / 3);
      for (let F = 0, X = 0; F < m.length; F += 3, X += 4)
        y[X] = m[F], y[X + 1] = m[F + 1], y[X + 2] = m[F + 2], y[X + 3] = 255;
      return y;
    }
    const t = I[0], i = I[1], h = I[2], A = I.length >= 4 ? I[3] : null, s = t.length, b = new Uint8ClampedArray(s * 4);
    for (let m = 0, y = 0; m < s; m++, y += 4)
      b[y] = t[m], b[y + 1] = i[m], b[y + 2] = h[m], b[y + 3] = A ? A[m] : 255;
    return b;
  }
  static RGBAfromWhiteIsZero(I, t) {
    const i = new Uint8ClampedArray(I.length * 4);
    let h;
    for (let A = 0, s = 0; A < I.length; ++A, s += 4)
      h = 256 - I[A] / t * 256, i[s] = h, i[s + 1] = h, i[s + 2] = h, i[s + 3] = 255;
    return i;
  }
  static RGBAfromBlackIsZero(I, t) {
    const i = new Uint8ClampedArray(I.length * 4);
    let h;
    for (let A = 0, s = 0; A < I.length; ++A, s += 4)
      h = I[A] / t * 256, i[s] = h, i[s + 1] = h, i[s + 2] = h, i[s + 3] = 255;
    return i;
  }
  static RGBAfromPalette(I, t) {
    const i = new Uint8ClampedArray(I.length * 4), h = t.length / 3, A = t.length / 3 * 2;
    for (let s = 0, b = 0; s < I.length; ++s, b += 4) {
      const m = I[s];
      i[b] = t[m] / 65536 * 256, i[b + 1] = t[m + h] / 65536 * 256, i[b + 2] = t[m + A] / 65536 * 256, i[b + 3] = 255;
    }
    return i;
  }
  static RGBAfromCMYK(...I) {
    if (I.length === 1) {
      const m = I[0], y = new Uint8ClampedArray(m.length);
      for (let F = 0, X = 0; F < m.length; F += 4, X += 4) {
        const v = m[F], l = m[F + 1], e = m[F + 2], d = m[F + 3];
        y[X] = 255 * ((255 - v) / 256) * ((255 - d) / 256), y[X + 1] = 255 * ((255 - l) / 256) * ((255 - d) / 256), y[X + 2] = 255 * ((255 - e) / 256) * ((255 - d) / 256), y[X + 3] = 255;
      }
      return y;
    }
    const t = I[0], i = I[1], h = I[2], A = I[3], s = t.length, b = new Uint8ClampedArray(s * 4);
    for (let m = 0, y = 0; m < s; m++, y += 4) {
      const F = t[m], X = i[m], v = h[m], l = A[m];
      b[y] = 255 * ((255 - F) / 256) * ((255 - l) / 256), b[y + 1] = 255 * ((255 - X) / 256) * ((255 - l) / 256), b[y + 2] = 255 * ((255 - v) / 256) * ((255 - l) / 256), b[y + 3] = 255;
    }
    return b;
  }
  static RGBAfromCIELab(...I) {
    const A = (X, v, l) => {
      const e = v << 24 >> 24, d = l << 24 >> 24;
      let o = (X + 16) / 116, Z = e / 500 + o, W = o - d / 200;
      Z = 0.95047 * (Z * Z * Z > 8856e-6 ? Z * Z * Z : (Z - 0.13793103448275862) / 7.787), o = 1 * (o * o * o > 8856e-6 ? o * o * o : (o - 0.13793103448275862) / 7.787), W = 1.08883 * (W * W * W > 8856e-6 ? W * W * W : (W - 0.13793103448275862) / 7.787);
      let V = Z * 3.2406 + o * -1.5372 + W * -0.4986, a = Z * -0.9689 + o * 1.8758 + W * 0.0415, u = Z * 0.0557 + o * -0.204 + W * 1.057;
      return V = V > 31308e-7 ? 1.055 * V ** 0.4166666666666667 - 0.055 : 12.92 * V, a = a > 31308e-7 ? 1.055 * a ** 0.4166666666666667 - 0.055 : 12.92 * a, u = u > 31308e-7 ? 1.055 * u ** 0.4166666666666667 - 0.055 : 12.92 * u, [
        Math.max(0, Math.min(1, V)) * 255,
        Math.max(0, Math.min(1, a)) * 255,
        Math.max(0, Math.min(1, u)) * 255
      ];
    };
    if (I.length === 1) {
      const X = I[0], v = new Uint8ClampedArray(X.length * 4 / 3);
      for (let l = 0, e = 0; l < X.length; l += 3, e += 4) {
        const [d, o, Z] = A(X[l], X[l + 1], X[l + 2]);
        v[e] = d, v[e + 1] = o, v[e + 2] = Z, v[e + 3] = 255;
      }
      return v;
    }
    const s = I[0], b = I[1], m = I[2], y = s.length, F = new Uint8ClampedArray(y * 4);
    for (let X = 0, v = 0; X < y; X++, v += 4) {
      const [l, e, d] = A(s[X], b[X], m[X]);
      F[v] = l, F[v + 1] = e, F[v + 2] = d, F[v + 3] = 255;
    }
    return F;
  }
}
const hg = {
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
function yg() {
  let c, I;
  return { promise: new Promise((i, h) => {
    c = i, I = h;
  }), resolve: c, reject: I };
}
function Wg(c) {
  try {
    return c ? typeof c == "string" ? c : c && typeof c.message == "string" ? c.message : JSON.stringify(c) : "Unknown error";
  } catch {
    return String(c);
  }
}
class ng {
  constructor(I) {
    Object.assign(this, I);
  }
  getType() {
    return "gpuTextureSet";
  }
}
class rg {
  /**
   * @param {Object} params
   * @param {number} params.size
   * @param {() => Worker} params.createWorker
   */
  constructor({ size: I, createWorker: t }) {
    this.size = Math.max(1, I | 0), this.createWorker = t, this.workers = [], this._nextId = 1;
    for (let i = 0; i < this.size; i++) {
      const h = this.createWorker(), A = { worker: h, pending: 0, callbacks: /* @__PURE__ */ new Map() };
      h.onmessage = (s) => {
        const b = s.data || {};
        if (b.kind === "warn") {
          M(
            b.code || "RawTiffWorker_warn",
            b.message || "[RawTiffWorker] warning",
            "warn"
          );
          return;
        }
        const m = b.id, y = A.callbacks.get(m);
        y && (A.callbacks.delete(m), A.pending = Math.max(0, A.pending - 1), b.ok ? y.resolve(b.result) : y.reject(new Error(Wg(b.error))));
      }, h.onerror = (s) => {
        for (const b of A.callbacks.values())
          b.reject(s instanceof Error ? s : new Error(String(s)));
        A.callbacks.clear(), A.pending = 0;
      }, this.workers.push(A);
    }
  }
  /**
   * @param {string} op
   * @param {any} payload
   * @param {Transferable[]} [transfer]
   * @returns {Promise<any>}
   */
  request(I, t, i) {
    const h = this._nextId++, A = yg();
    let s = this.workers[0];
    for (const b of this.workers)
      b.pending < s.pending && (s = b);
    s.pending++, s.callbacks.set(h, A);
    try {
      i && i.length ? s.worker.postMessage({ id: h, op: I, payload: t }, i) : s.worker.postMessage({ id: h, op: I, payload: t });
    } catch (b) {
      s.callbacks.delete(h), s.pending = Math.max(0, s.pending - 1), A.reject(b);
    }
    return A.promise;
  }
  terminate() {
    for (const I of this.workers) {
      try {
        I.worker.terminate();
      } catch {
      }
      I.callbacks.clear(), I.pending = 0;
    }
    this.workers.length = 0;
  }
}
function Yg() {
  return new globalThis.Worker(new URL("data:text/javascript;base64,LyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovCi8qKgogKiBSYXdUSUZGIHdvcmtlciBmb3IgT3BlblNlYWRyYWdvbiBjb252ZXJ0ZXIgcGx1Z2luLgogKgogKiBSZXNwb25zaWJpbGl0aWVzOgogKiAgLSBkZWNvZGVSYXN0ZXI6IHJhdyBUSUZGIGJ5dGVzIC0+IG11bHRpLWJhbmQgcmFzdGVyIHBheWxvYWQgKHRyYW5zZmVyYWJsZSBiYW5kIGJ1ZmZlcnMpCiAqICAtIGRlY29kZUFuZFJlbmRlckltYWdlQml0bWFwOiByYXcgVElGRiBieXRlcyAtPiBJbWFnZUJpdG1hcCAocHJlZmVycmVkKSBvciBSR0JBOCBmYWxsYmFjawogKiAgLSBkZWNvZGVBbmRQYWNrR3B1VGV4dHVyZVNldDogcmF3IFRJRkYgYnl0ZXMgLT4gR1BVLXBhY2tlZCB0ZXh0dXJlIHNldCAoUkdCQTggb3IgUkdCQTE2RikKICogIC0gcmFzdGVyVG9HcHVUZXh0dXJlU2V0OiByYXN0ZXIgcGF5bG9hZCAtPiBHUFUtcGFja2VkIHRleHR1cmUgc2V0IChSR0JBOCBvciBSR0JBMTZGKQogKgogKiBUaGUgImZvcm1hdCIgb3ZlcnJpZGUgaXMgcHJvdmlkZWQgZXh0ZXJuYWxseSBhbmQgbXVzdCBhcnJpdmUgdmlhOgogKiAgIHBheWxvYWQuaGludHMuZm9ybWF0UmVzb2x2ZWQgKHByZWZlcnJlZCkgT1IgcGF5bG9hZC5oaW50cy5mb3JtYXQKICovCgppbXBvcnQgeyBmcm9tQXJyYXlCdWZmZXIgfSBmcm9tICJnZW90aWZmIjsKaW1wb3J0IHsgQ29udmVydGVycyB9IGZyb20gIi4uL3V0aWxzL0NvbnZlcnRlcnMuanMiOwppbXBvcnQgeyBnZXRUYWcsIGxvYWRUYWcgfSBmcm9tICIuLi91dGlscy90YWdzLmpzIjsKCi8vIFRlc3RzIGluIG5vZGUgaGF2ZSBubyBzZWxmLgpjb25zdCB3b3JrZXJSZWYgPSBzZWxmIHx8IGdsb2JhbFRoaXM7CgpmdW5jdGlvbiB3b3JrZXJXYXJuKGNvZGUsIG1lc3NhZ2UpIHsKICB3b3JrZXJSZWYucG9zdE1lc3NhZ2UoewogICAga2luZDogIndhcm4iLAogICAgY29kZSwKICAgIG1lc3NhZ2UsCiAgfSk7Cn0KCi8vIFBob3RvbWV0cmljIGludGVycHJldGF0aW9uIGNvbnN0YW50cyAobWF0Y2hpbmcgVElGRiBzcGVjIC8gZ2VvdGlmZi5qcykKY29uc3QgUEkgPSB7CiAgV2hpdGVJc1plcm86IDAsCiAgQmxhY2tJc1plcm86IDEsCiAgUkdCOiAyLAogIFBhbGV0dGU6IDMsCiAgVHJhbnNwYXJlbmN5TWFzazogNCwKICBDTVlLOiA1LAogIFlDYkNyOiA2LAogIENJRUxhYjogOCwKfTsKCmZ1bmN0aW9uIGVycm9yVG9QbGFpbihlcnIpIHsKICB0cnkgewogICAgaWYgKCFlcnIpIHJldHVybiAiVW5rbm93biBlcnJvciI7CiAgICBpZiAodHlwZW9mIGVyciA9PT0gInN0cmluZyIpIHJldHVybiBlcnI7CiAgICByZXR1cm4gZXJyLm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkoZXJyKTsKICB9IGNhdGNoIHsKICAgIHJldHVybiBTdHJpbmcoZXJyKTsKICB9Cn0KCmZ1bmN0aW9uIG5vcm1hbGl6ZVJhc3RlcnMocmFzdGVycykgewogIGlmIChBcnJheS5pc0FycmF5KHJhc3RlcnMpKSByZXR1cm4gcmFzdGVyczsKICByZXR1cm4gW3Jhc3RlcnNdOwp9CgpmdW5jdGlvbiByZXZpdmVCYW5kcyhkZXNjcykgewogIHJldHVybiBkZXNjcy5tYXAoKGIpID0+IHsKICAgIGNvbnN0IEN0b3IgPSAodHlwZW9mIGIuY3RvciA9PT0gInN0cmluZyIgJiYgd29ya2VyUmVmW2IuY3Rvcl0pID8gd29ya2VyUmVmW2IuY3Rvcl0gOiBVaW50OEFycmF5OwogICAgcmV0dXJuIG5ldyBDdG9yKGIuYnVmZmVyLCBiLmJ5dGVPZmZzZXQgfHwgMCwgYi5sZW5ndGgpOwogIH0pOwp9CgpmdW5jdGlvbiBpbmZlckZyb21USUZGVGFncyhyYXN0ZXIpIHsKICBjb25zdCBzcHAgPSByYXN0ZXIuc2FtcGxlc1BlclBpeGVsIHx8IChyYXN0ZXIuYmFuZHMgPyByYXN0ZXIuYmFuZHMubGVuZ3RoIDogMSk7CiAgY29uc3QgcGkgPSByYXN0ZXIucGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbjsKCiAgLy8gSWYgcGhvdG9tZXRyaWMgY2xlYXJseSBpbXBsaWVzIGFuIGltYWdlLCB0cmVhdCBhcyBpbWFnZS4KICBpZiAoCiAgICBwaSA9PT0gUEkuUkdCIHx8CiAgICBwaSA9PT0gUEkuWUNiQ3IgfHwKICAgIHBpID09PSBQSS5DTVlLIHx8CiAgICBwaSA9PT0gUEkuQ0lFTGFiIHx8CiAgICBwaSA9PT0gUEkuUGFsZXR0ZQogICkgewogICAgcmV0dXJuICJpbWFnZSI7CiAgfQoKICAvLyBHcmF5c2NhbGUgImltYWdlIiBjYXNlCiAgLy8gdG9kbzogY29uc2lkZXIgc3RpbGwgb3V0cHV0aW5nIGFzIGRhdGEgdG8gc2F2ZSBzcGFjZSAodGhpcyBmb3JjZXMgUkdCQSBleHBhbnNpb24sIGFsdGhvdWdoIGJ1dCB0aGUgZXhwYW5zaW9uCiAgLy8gIGhhcHBlbnMgc29vbmVyIG9yIGxhdGVyLCBzeXN0ZW1zIHRoYXQgZGlyZWN0bHkgcmVuZGVyIHRoZSBkYXRhIG1pZ2h0IGUuZy4gYXZvaWQgcGFzc2luZyB0aGUgZXhwYW5kZWQgYmFuZHMgdG8gZ3B1KQogIGlmICgocGkgPT09IFBJLkJsYWNrSXNaZXJvIHx8IHBpID09PSBQSS5XaGl0ZUlzWmVybykgJiYgc3BwID09PSAxKSB7CiAgICByZXR1cm4gImltYWdlIjsKICB9CgogIC8vIERlZmF1bHQgdG8gZGF0YSBmb3IgdW5rbm93biBQSS4KICByZXR1cm4gImRhdGEiOwp9CgovKioKICogRmxvYXQzMiAtPiBJRUVFLTc1NCBoYWxmLWZsb2F0IGJpdHMgKFVpbnQxNikuCiAqIFByb2R1Y2VzIGNvcnJlY3QgSEFMRl9GTE9BVCBiaXQgcGF0dGVybnMgc3VpdGFibGUgZm9yIFdlYkdMIHVwbG9hZC4KICovCmZ1bmN0aW9uIGYzMlRvRjE2Qml0cyh2YWwpIHsKICBjb25zdCBmbG9hdFZpZXcgPSBuZXcgRmxvYXQzMkFycmF5KDEpOwogIGNvbnN0IGludFZpZXcgPSBuZXcgVWludDMyQXJyYXkoZmxvYXRWaWV3LmJ1ZmZlcik7CgogIGZsb2F0Vmlld1swXSA9IHZhbDsKICBjb25zdCB4ID0gaW50Vmlld1swXTsKCiAgY29uc3Qgc2lnbiA9ICh4ID4+IDMxKSAmIDB4MTsKICBsZXQgZXhwID0gKHggPj4gMjMpICYgMHhGRjsKICBsZXQgbWFudCA9IHggJiAweDdGRkZGRjsKCiAgLy8gTmFOL0luZgogIGlmIChleHAgPT09IDB4RkYpIHsKICAgIGlmIChtYW50ICE9PSAwKSByZXR1cm4gKHNpZ24gPDwgMTUpIHwgMHg3RTAwOyAvLyBxTmFOCiAgICByZXR1cm4gKHNpZ24gPDwgMTUpIHwgMHg3QzAwOyAvLyBJbmYKICB9CgogIC8vIERlbm9ybS9aZXJvIGluIGYzMgogIGlmIChleHAgPT09IDApIHsKICAgIHJldHVybiAoc2lnbiA8PCAxNSk7IC8vIGZsdXNoIHN1Ym5vcm1hbHMgdG8gMAogIH0KCiAgLy8gTm9ybWFsaXplIGV4cG9uZW50IGZyb20gZjMyIGJpYXMgKDEyNykgdG8gZjE2IGJpYXMgKDE1KQogIGV4cCA9IGV4cCAtIDEyNyArIDE1OwoKICAvLyBPdmVyZmxvdyAtPiBJbmYKICBpZiAoZXhwID49IDB4MUYpIHJldHVybiAoc2lnbiA8PCAxNSkgfCAweDdDMDA7CgogIC8vIFVuZGVyZmxvdyAtPiAwIChmbHVzaCkKICBpZiAoZXhwIDw9IDApIHJldHVybiAoc2lnbiA8PCAxNSk7CgogIC8vIE1hbnRpc3NhOiBmMzIgaGFzIDIzIGJpdHMsIGYxNiBoYXMgMTAgYml0cwogIG1hbnQgPSBtYW50ICsgMHgwMDAwMTAwMDsgLy8gcm91bmRpbmcKICBpZiAobWFudCAmIDB4MDA4MDAwMDApIHsKICAgIG1hbnQgPSAwOwogICAgZXhwICs9IDE7CiAgICBpZiAoZXhwID49IDB4MUYpIHJldHVybiAoc2lnbiA8PCAxNSkgfCAweDdDMDA7CiAgfQoKICByZXR1cm4gKHNpZ24gPDwgMTUpIHwgKGV4cCA8PCAxMCkgfCAobWFudCA+PiAxMyk7Cn0KCmZ1bmN0aW9uIHJlc29sdmVGb3JtYXRGcm9tSGludHMoaGludHMpIHsKICByZXR1cm4gKGhpbnRzICYmIChoaW50cy5mb3JtYXRSZXNvbHZlZCB8fCBoaW50cy5mb3JtYXQpKSB8fCBudWxsOwp9CgovKioKICogSW1hZ2UtbW9kZSBSR0JBOCByZW5kZXJlciB0aGF0IHJlc3BlY3RzOgogKiAgLSBwaG90b21ldHJpY0ludGVycHJldGF0aW9uCiAqICAtIG9wdGlvbmFsIGZvcm1hdC5pbWFnZS5yZ2JhQ2hhbm5lbHMgb3ZlcnJpZGUKICogIC0gb3B0aW9uYWwgaGludHMucmVuZGVyQ2hhbm5lbHMgb3ZlcnJpZGUKICoKICogTk9URTogVGhpcyB3b3JrZXIgdmVyc2lvbiBpcyBpbnRlbnRpb25hbGx5ICJkaXNwbGF5LW9yaWVudGVkIiBhbmQgYXNzdW1lcyA4LWJpdC1pc2gKICogZm9yIGltYWdlLW1vZGUuIFByZWNpc2lvbi1mb2N1c2VkIHBhY2tpbmcgaGFwcGVucyBhZnRlciB0aGlzIGlmIFJHQkExNkYgaXMgcmVxdWVzdGVkLgogKi8KZnVuY3Rpb24gcmFzdGVyVG9SR0JBOF9JbWFnZU1vZGUocmFzdGVyLCBoaW50cywgZm9ybWF0KSB7CiAgY29uc3Qgc3BwID0gcmFzdGVyLnNhbXBsZXNQZXJQaXhlbCB8fCAocmFzdGVyLmJhbmRzID8gcmFzdGVyLmJhbmRzLmxlbmd0aCA6IDEpOwogIGNvbnN0IHBob3RvbWV0cmljID0gcmFzdGVyLnBob3RvbWV0cmljSW50ZXJwcmV0YXRpb247CgogIC8vIENoYW5uZWwgb3ZlcnJpZGUgcHJlY2VkZW5jZToKICAvLyBmb3JtYXQuaW1hZ2UucmdiYUNoYW5uZWxzID4gaGludHMucmVuZGVyQ2hhbm5lbHMgPiBkZWZhdWx0IGJlaGF2aW9yCiAgbGV0IGNoYW5uZWxzID0gbnVsbDsKICBpZiAoZm9ybWF0ICYmIGZvcm1hdC5pbWFnZSAmJiBBcnJheS5pc0FycmF5KGZvcm1hdC5pbWFnZS5yZ2JhQ2hhbm5lbHMpKSB7CiAgICBjaGFubmVscyA9IGZvcm1hdC5pbWFnZS5yZ2JhQ2hhbm5lbHMuc2xpY2UoKTsKICB9IGVsc2UgaWYgKGhpbnRzICYmIEFycmF5LmlzQXJyYXkoaGludHMucmVuZGVyQ2hhbm5lbHMpKSB7CiAgICBjaGFubmVscyA9IGhpbnRzLnJlbmRlckNoYW5uZWxzLnNsaWNlKCk7CiAgfQoKICBpZiAoY2hhbm5lbHMgJiYgY2hhbm5lbHMubGVuZ3RoID4gNCkgewogICAgd29ya2VyV2FybigKICAgICAgInJlbmRlckNoYW5uZWxzPjRfdG9fUkdCQV93b3JrZXIiLAogICAgICBgW3RpZmYtd29ya2VyXSBSZXF1ZXN0ZWQgJHtjaGFubmVscy5sZW5ndGh9IGNoYW5uZWxzIGZvciBSR0JBIG91dHB1dDsgb25seSA0IGNhbiBiZSByZXByZXNlbnRlZC4gRXh0cmEgY2hhbm5lbHMgd2lsbCBiZSBkcm9wcGVkLmAKICAgICk7CiAgICBjaGFubmVscy5zcGxpY2UoNCk7CiAgfQoKICAvLyBQYWxldHRlCiAgaWYgKHBob3RvbWV0cmljID09PSBQSS5QYWxldHRlICYmIHJhc3Rlci5jb2xvck1hcCkgewogICAgY29uc3QgaW5kaWNlcyA9IHJhc3Rlci5iYW5kc1swXTsKICAgIHJldHVybiBDb252ZXJ0ZXJzLlJHQkFmcm9tUGFsZXR0ZShpbmRpY2VzLCByYXN0ZXIuY29sb3JNYXApOwogIH0KCiAgLy8gV2hpdGVJc1plcm8gLyBCbGFja0lzWmVybwogIGlmICgocGhvdG9tZXRyaWMgPT09IFBJLldoaXRlSXNaZXJvIHx8IHBob3RvbWV0cmljID09PSBQSS5CbGFja0lzWmVybykgJiYgc3BwID49IDEpIHsKICAgIGNvbnN0IGJhbmQwID0gcmFzdGVyLmJhbmRzWzBdOwogICAgY29uc3QgYml0cyA9IHJhc3Rlci5iaXRzUGVyU2FtcGxlICYmIHJhc3Rlci5iaXRzUGVyU2FtcGxlWzBdICE9IG51bGwgPyByYXN0ZXIuYml0c1BlclNhbXBsZVswXSA6IDg7CiAgICBjb25zdCBtYXggPSBNYXRoLnBvdygyLCBiaXRzKSAtIDE7CiAgICBpZiAocGhvdG9tZXRyaWMgPT09IFBJLldoaXRlSXNaZXJvKSByZXR1cm4gQ29udmVydGVycy5SR0JBZnJvbVdoaXRlSXNaZXJvKGJhbmQwLCBtYXgpOwogICAgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21CbGFja0lzWmVybyhiYW5kMCwgbWF4KTsKICB9CgogIC8vIElmIGV4cGxpY2l0IGNoYW5uZWwgbWFwcGluZyBleGlzdHMsIHVzZSBpdCAocGxhbmFyIC0+IGludGVybGVhdmVkIC0+IFJHQkEpCiAgaWYgKGNoYW5uZWxzICYmIGNoYW5uZWxzLmxlbmd0aCA+PSAxKSB7CiAgICBjb25zdCB3aWR0aCA9IHJhc3Rlci53aWR0aDsKICAgIGNvbnN0IGhlaWdodCA9IHJhc3Rlci5oZWlnaHQ7CiAgICBjb25zdCBwaXhlbENvdW50ID0gd2lkdGggKiBoZWlnaHQ7CgogICAgaWYgKGNoYW5uZWxzLmxlbmd0aCA9PT0gMSkgewogICAgICBjb25zdCBiMCA9IHJhc3Rlci5iYW5kc1tjaGFubmVsc1swXV07CiAgICAgIGNvbnN0IGJpdHMgPSByYXN0ZXIuYml0c1BlclNhbXBsZSAmJiByYXN0ZXIuYml0c1BlclNhbXBsZVtjaGFubmVsc1swXV0gIT0gbnVsbCA/IHJhc3Rlci5iaXRzUGVyU2FtcGxlW2NoYW5uZWxzWzBdXSA6IDg7CiAgICAgIGNvbnN0IG1heCA9IE1hdGgucG93KDIsIGJpdHMpIC0gMTsKICAgICAgLy8gdHJlYXQgYXMgYmxhY2staXMtemVybyBmb3IgdmlzdWFsaXphdGlvbgogICAgICByZXR1cm4gQ29udmVydGVycy5SR0JBZnJvbUJsYWNrSXNaZXJvKGIwLCBtYXgpOwogICAgfQoKICAgIC8vIGJ1aWxkIGludGVybGVhdmVkIHRtcCBieXRlcyBieSBzaW1wbGUgY2xhbXBpbmcgKGJlc3QtZWZmb3J0KQogICAgY29uc3QgdG1wID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHBpeGVsQ291bnQgKiBjaGFubmVscy5sZW5ndGgpOwogICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwaXhlbENvdW50OyBpKyspIHsKICAgICAgY29uc3QgYmFzZSA9IGkgKiBjaGFubmVscy5sZW5ndGg7CiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY2hhbm5lbHMubGVuZ3RoOyBjKyspIHsKICAgICAgICBjb25zdCBiaSA9IGNoYW5uZWxzW2NdOwogICAgICAgIGNvbnN0IHYgPSAoYmkgIT0gbnVsbCAmJiBiaSA+PSAwICYmIGJpIDwgcmFzdGVyLmJhbmRzLmxlbmd0aCkgPyByYXN0ZXIuYmFuZHNbYmldW2ldIDogMDsKICAgICAgICB0bXBbYmFzZSArIGNdID0gdjsKICAgICAgfQogICAgfQoKICAgIC8vIElmIHdlIGFscmVhZHkgYnVpbHQgUkdCQSAoNGNoKSBhbmQgbm8gc3BlY2lhbCBwaG90b21ldHJpYywgcmV0dXJuIGRpcmVjdGx5LgogICAgaWYgKGNoYW5uZWxzLmxlbmd0aCA9PT0gNCAmJiBwaG90b21ldHJpYyAhPT0gUEkuWUNiQ3IgJiYgcGhvdG9tZXRyaWMgIT09IFBJLkNNWUsgJiYgcGhvdG9tZXRyaWMgIT09IFBJLkNJRUxhYikgewogICAgICByZXR1cm4gdG1wOwogICAgfQogICAgaWYgKHBob3RvbWV0cmljID09PSBQSS5ZQ2JDciAmJiBjaGFubmVscy5sZW5ndGggPj0gMykgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21ZQ2JDcih0bXApOwogICAgaWYgKHBob3RvbWV0cmljID09PSBQSS5DTVlLICYmIGNoYW5uZWxzLmxlbmd0aCA+PSA0KSByZXR1cm4gQ29udmVydGVycy5SR0JBZnJvbUNNWUsodG1wKTsKICAgIGlmIChwaG90b21ldHJpYyA9PT0gUEkuQ0lFTGFiICYmIGNoYW5uZWxzLmxlbmd0aCA+PSAzKSByZXR1cm4gQ29udmVydGVycy5SR0JBZnJvbUNJRUxhYih0bXApOwogICAgaWYgKGNoYW5uZWxzLmxlbmd0aCA9PT0gMykgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21SR0IodG1wKTsKCiAgICAvLyBmYWxsYmFjazogZm9yY2UgaW50byBSR0JBCiAgICBjb25zdCBvdXQgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkocGl4ZWxDb3VudCAqIDQpOwogICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgcGl4ZWxDb3VudDsgaSsrLCBqICs9IDQpIHsKICAgICAgY29uc3QgYmFzZSA9IGkgKiBjaGFubmVscy5sZW5ndGg7CiAgICAgIG91dFtqXSA9IHRtcFtiYXNlXSB8fCAwOwogICAgICBvdXRbaiArIDFdID0gdG1wW2Jhc2UgKyAxXSB8fCAwOwogICAgICBvdXRbaiArIDJdID0gdG1wW2Jhc2UgKyAyXSB8fCAwOwogICAgICBvdXRbaiArIDNdID0gKGNoYW5uZWxzLmxlbmd0aCA+PSA0KSA/ICh0bXBbYmFzZSArIDNdIHx8IDI1NSkgOiAyNTU7CiAgICB9CiAgICByZXR1cm4gb3V0OwogIH0KCiAgLy8gUkdCIC8gWUNiQ3IgLyBDTVlLIC8gTGFiIGRlZmF1bHRzCiAgaWYgKHBob3RvbWV0cmljID09PSBQSS5SR0IgJiYgc3BwID49IDMpIHsKICAgIGNvbnN0IHIgPSByYXN0ZXIuYmFuZHNbMF07CiAgICBjb25zdCBnID0gcmFzdGVyLmJhbmRzWzFdOwogICAgY29uc3QgYiA9IHJhc3Rlci5iYW5kc1syXTsKICAgIGNvbnN0IGEgPSBzcHAgPj0gNCA/IHJhc3Rlci5iYW5kc1szXSA6IG51bGw7CiAgICByZXR1cm4gQ29udmVydGVycy5SR0JBZnJvbVJHQihyLCBnLCBiLCBhKTsKICB9CgogIGlmIChwaG90b21ldHJpYyA9PT0gUEkuWUNiQ3IgJiYgc3BwID49IDMpIHsKICAgIGNvbnN0IHkgPSByYXN0ZXIuYmFuZHNbMF07CiAgICBjb25zdCBjYiA9IHJhc3Rlci5iYW5kc1sxXTsKICAgIGNvbnN0IGNyID0gcmFzdGVyLmJhbmRzWzJdOwogICAgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21ZQ2JDcih5LCBjYiwgY3IpOwogIH0KCiAgaWYgKHBob3RvbWV0cmljID09PSBQSS5DTVlLICYmIHNwcCA+PSA0KSB7CiAgICBjb25zdCBjID0gcmFzdGVyLmJhbmRzWzBdOwogICAgY29uc3QgbSA9IHJhc3Rlci5iYW5kc1sxXTsKICAgIGNvbnN0IHkgPSByYXN0ZXIuYmFuZHNbMl07CiAgICBjb25zdCBrID0gcmFzdGVyLmJhbmRzWzNdOwogICAgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21DTVlLKGMsIG0sIHksIGspOwogIH0KCiAgaWYgKHBob3RvbWV0cmljID09PSBQSS5DSUVMYWIgJiYgc3BwID49IDMpIHsKICAgIGNvbnN0IGwgPSByYXN0ZXIuYmFuZHNbMF07CiAgICBjb25zdCBhID0gcmFzdGVyLmJhbmRzWzFdOwogICAgY29uc3QgYiA9IHJhc3Rlci5iYW5kc1syXTsKICAgIHJldHVybiBDb252ZXJ0ZXJzLlJHQkFmcm9tQ0lFTGFiKGwsIGEsIGIpOwogIH0KCiAgLy8gRmFsbGJhY2sgZ3JheXNjYWxlCiAgY29uc3QgYmFuZDAgPSByYXN0ZXIuYmFuZHNbMF07CiAgY29uc3QgYml0cyA9IHJhc3Rlci5iaXRzUGVyU2FtcGxlICYmIHJhc3Rlci5iaXRzUGVyU2FtcGxlWzBdICE9IG51bGwgPyByYXN0ZXIuYml0c1BlclNhbXBsZVswXSA6IDg7CiAgY29uc3QgbWF4ID0gTWF0aC5wb3coMiwgYml0cykgLSAxOwogIHJldHVybiBDb252ZXJ0ZXJzLlJHQkFmcm9tQmxhY2tJc1plcm8oYmFuZDAsIG1heCk7Cn0KCmZ1bmN0aW9uIHBhY2tDYW5vbmljYWxSR0JBKHJnYmE4LCB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQpIHsKICBjb25zdCBncHUgPSAoZm9ybWF0ICYmIGZvcm1hdC5ncHUpIHx8IHt9OwogIGNvbnN0IHByZWZlclJHQkE4ID0gZ3B1LnByZWZlclJHQkE4ICE9PSBmYWxzZTsKICBjb25zdCBmb3JjZVJHQkExNkYgPSAhIWdwdS5mb3JjZVJHQkExNkY7CgogIC8vIFJHQkE4IGlzIHRoZSBkZWZhdWx0IGZvciBpbWFnZS1tb2RlIHVubGVzcyBmb3JjZWQgdG8gMTZGCiAgaWYgKHByZWZlclJHQkE4ICYmICFmb3JjZVJHQkExNkYpIHsKICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShyZ2JhOC5idWZmZXIsIHJnYmE4LmJ5dGVPZmZzZXQsIHJnYmE4LmJ5dGVMZW5ndGgpOwogICAgcmV0dXJuIHsKICAgICAgd2lkdGgsCiAgICAgIGhlaWdodCwKICAgICAgbW9kZTogImltYWdlIiwKICAgICAgY2hhbm5lbENvdW50OiA0LAogICAgICBwYWNrczogW3sKICAgICAgICBmb3JtYXQ6ICJSR0JBOCIsCiAgICAgICAgZGF0YTogewogICAgICAgICAgY3RvcjogIlVpbnQ4QXJyYXkiLAogICAgICAgICAgYnVmZmVyOiBkYXRhLmJ1ZmZlciwKICAgICAgICAgIGJ5dGVPZmZzZXQ6IGRhdGEuYnl0ZU9mZnNldCwKICAgICAgICAgIGxlbmd0aDogZGF0YS5sZW5ndGgsCiAgICAgICAgfSwKICAgICAgICBjaGFubmVsczogWzAsIDEsIDIsIDNdLAogICAgICAgIG5vcm1hbGl6ZWQ6IGZhbHNlLAogICAgICAgIHNjYWxlOiBbMSwgMSwgMSwgMV0sCiAgICAgICAgb2Zmc2V0OiBbMCwgMCwgMCwgMF0sCiAgICAgIH1dLAogICAgfTsKICB9CgogIC8vIFJHQkExNkYgaW1hZ2UtbW9kZTogY29udmVydCBieXRlcyAtPiBmbG9hdCAtPiBoYWxmCiAgY29uc3QgcHggPSB3aWR0aCAqIGhlaWdodDsKICBjb25zdCBvdXQgPSBuZXcgVWludDE2QXJyYXkocHggKiA0KTsKICBmb3IgKGxldCBpID0gMDsgaSA8IG91dC5sZW5ndGg7IGkrKykgewogICAgLy8gc3RvcmUgMC4uMjU1IGFzIGZsb2F0IDAuLjI1NSAoaWRlbnRpdHkpOyBzaGFkZXIgY2FuIHRyZWF0IGFzIGxpbmVhciBkaXNwbGF5CiAgICBvdXRbaV0gPSBmMzJUb0YxNkJpdHMocmdiYThbaV0pOwogIH0KCiAgcmV0dXJuIHsKICAgIHdpZHRoLAogICAgaGVpZ2h0LAogICAgbW9kZTogImltYWdlIiwKICAgIGNoYW5uZWxDb3VudDogNCwKICAgIHBhY2tzOiBbewogICAgICBmb3JtYXQ6ICJSR0JBMTZGIiwKICAgICAgZGF0YTogewogICAgICAgIGN0b3I6ICJVaW50MTZBcnJheSIsCiAgICAgICAgYnVmZmVyOiBvdXQuYnVmZmVyLAogICAgICAgIGJ5dGVPZmZzZXQ6IDAsCiAgICAgICAgbGVuZ3RoOiBvdXQubGVuZ3RoLAogICAgICB9LAogICAgICBjaGFubmVsczogWzAsIDEsIDIsIDNdLAogICAgICBub3JtYWxpemVkOiBmYWxzZSwKICAgICAgc2NhbGU6IFsxLCAxLCAxLCAxXSwKICAgICAgb2Zmc2V0OiBbMCwgMCwgMCwgMF0sCiAgICB9XSwKICB9Owp9CgpmdW5jdGlvbiBwYWNrQmFuZHNBc0RhdGEocmFzdGVyLCBmb3JtYXQpIHsKICBjb25zdCBncHUgPSAoZm9ybWF0ICYmIGZvcm1hdC5ncHUpIHx8IHt9OwogIGNvbnN0IHByZWZlclJHQkE4ID0gZ3B1LnByZWZlclJHQkE4ICE9PSBmYWxzZTsKICBjb25zdCBmb3JjZVJHQkExNkYgPSAhIWdwdS5mb3JjZVJHQkExNkY7CgogIGNvbnN0IHdpZHRoID0gcmFzdGVyLndpZHRoOwogIGNvbnN0IGhlaWdodCA9IHJhc3Rlci5oZWlnaHQ7CiAgY29uc3QgcGl4ZWxDb3VudCA9IHdpZHRoICogaGVpZ2h0OwoKICBjb25zdCBiYW5kQ291bnQgPSByYXN0ZXIuYmFuZHMgPyByYXN0ZXIuYmFuZHMubGVuZ3RoIDogMDsKICBjb25zdCBjaGFubmVscyA9IChmb3JtYXQgJiYgQXJyYXkuaXNBcnJheShmb3JtYXQuY2hhbm5lbHMpICYmIGZvcm1hdC5jaGFubmVscy5sZW5ndGgpCiAgICA/IGZvcm1hdC5jaGFubmVscy5zbGljZSgpCiAgICA6IFsuLi5BcnJheShiYW5kQ291bnQpLmtleXMoKV07CiAgY29uc3QgY2hhbm5lbENvdW50ID0gY2hhbm5lbHMuZmlsdGVyKChjKSA9PiBjICE9IG51bGwgJiYgYyA+PSAwKS5sZW5ndGg7CgogIC8vIERlY2lkZSBSR0JBOCB2cyBSR0JBMTZGCiAgY29uc3QgYWxsVTggPSBjaGFubmVscy5ldmVyeSgoYykgPT4gewogICAgY29uc3QgYiA9IHJhc3Rlci5iYW5kc1tjXTsKICAgIHJldHVybiBiIGluc3RhbmNlb2YgVWludDhBcnJheSB8fCBiIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXk7CiAgfSk7CiAgY29uc3QgdXNlUkdCQTggPSBwcmVmZXJSR0JBOCAmJiAhZm9yY2VSR0JBMTZGICYmIGFsbFU4OwoKICBjb25zdCBwYWNrcyA9IFtdOwogIGZvciAobGV0IHAgPSAwOyBwIDwgY2hhbm5lbHMubGVuZ3RoOyBwICs9IDQpIHsKICAgIGNvbnN0IHBhY2tDaCA9IFsKICAgICAgY2hhbm5lbHNbcF0gPz8gLTEsCiAgICAgIGNoYW5uZWxzW3AgKyAxXSA/PyAtMSwKICAgICAgY2hhbm5lbHNbcCArIDJdID8/IC0xLAogICAgICBjaGFubmVsc1twICsgM10gPz8gLTEsCiAgICBdOwoKICAgIGlmICh1c2VSR0JBOCkgewogICAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkocGl4ZWxDb3VudCAqIDQpOwogICAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBwaXhlbENvdW50OyBpKyssIGogKz0gNCkgewogICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7CiAgICAgICAgICBjb25zdCBiaSA9IHBhY2tDaFtrXTsKICAgICAgICAgIGRhdGFbaiArIGtdID0gKGJpID49IDAgJiYgYmkgPCByYXN0ZXIuYmFuZHMubGVuZ3RoKSA/IHJhc3Rlci5iYW5kc1tiaV1baV0gOiAwOwogICAgICAgIH0KICAgICAgfQogICAgICBwYWNrcy5wdXNoKHsKICAgICAgICBmb3JtYXQ6ICJSR0JBOCIsCiAgICAgICAgZGF0YTogeyBjdG9yOiAiVWludDhBcnJheSIsIGJ1ZmZlcjogZGF0YS5idWZmZXIsIGJ5dGVPZmZzZXQ6IDAsIGxlbmd0aDogZGF0YS5sZW5ndGggfSwKICAgICAgICBjaGFubmVsczogcGFja0NoLAogICAgICAgIG5vcm1hbGl6ZWQ6IGZhbHNlLAogICAgICAgIHNjYWxlOiBbMSwgMSwgMSwgMV0sCiAgICAgICAgb2Zmc2V0OiBbMCwgMCwgMCwgMF0sCiAgICAgIH0pOwogICAgICBjb250aW51ZTsKICAgIH0KCiAgICAvLyBSR0JBMTZGIHBhY2tpbmcgd2l0aCAiYXV0byBub3JtYWxpemF0aW9uIGlmIG5lZWRlZCIKICAgIC8vIElmIGludGVnZXIgbWF4IGV4Y2VlZHMgaGFsZiBmbG9hdCByYW5nZSAoNjU1MDQpLCBub3JtYWxpemUgdG8gWzAuLjFdIHVzaW5nIHNjYWxlPW1heC4KICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDE2QXJyYXkocGl4ZWxDb3VudCAqIDQpOwogICAgY29uc3Qgc2NhbGUgPSBbMSwgMSwgMSwgMV07CiAgICBjb25zdCBvZmZzZXQgPSBbMCwgMCwgMCwgMF07CgogICAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHsKICAgICAgY29uc3QgYmkgPSBwYWNrQ2hba107CiAgICAgIGlmIChiaSA8IDAgfHwgYmkgPj0gcmFzdGVyLmJhbmRzLmxlbmd0aCkgY29udGludWU7CgogICAgICBjb25zdCBiaXRzID0gcmFzdGVyLmJpdHNQZXJTYW1wbGUgJiYgcmFzdGVyLmJpdHNQZXJTYW1wbGVbYmldICE9IG51bGwgPyByYXN0ZXIuYml0c1BlclNhbXBsZVtiaV0gOiAocmFzdGVyLmJpdHNQZXJTYW1wbGUgPyByYXN0ZXIuYml0c1BlclNhbXBsZVswXSA6IDgpOwogICAgICBjb25zdCBiYW5kID0gcmFzdGVyLmJhbmRzW2JpXTsKICAgICAgY29uc3QgaXNGbG9hdCA9IGJhbmQgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkgfHwgYmFuZCBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheTsKCiAgICAgIGlmICghaXNGbG9hdCkgewogICAgICAgIGNvbnN0IG1heCA9IGJpdHMgPiAwID8gKE1hdGgucG93KDIsIGJpdHMpIC0gMSkgOiA2NTUzNTsKICAgICAgICBpZiAobWF4ID4gNjU1MDQpIHsKICAgICAgICAgIC8vIG5vcm1hbGl6ZSB0byAwLi4xIGZvciBzYWZlIGhhbGYgcmFuZ2U7IHNoYWRlciByZWNvbnN0cnVjdHMgd2l0aCB2YWx1ZSA9IHNhbXBsZSAqIHNjYWxlICsgb2Zmc2V0CiAgICAgICAgICBzY2FsZVtrXSA9IG1heDsKICAgICAgICAgIG9mZnNldFtrXSA9IDA7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgbGV0IGNsYW1wZWQgPSBmYWxzZTsKICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IHBpeGVsQ291bnQ7IGkrKywgaiArPSA0KSB7CiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7CiAgICAgICAgY29uc3QgYmkgPSBwYWNrQ2hba107CiAgICAgICAgbGV0IHYgPSAoYmkgPj0gMCAmJiBiaSA8IHJhc3Rlci5iYW5kcy5sZW5ndGgpID8gTnVtYmVyKHJhc3Rlci5iYW5kc1tiaV1baV0pIDogMDsKCiAgICAgICAgLy8gYXBwbHkgbm9ybWFsaXphdGlvbiAoc3RvcmUgdi9zY2FsZSkKICAgICAgICBpZiAoc2NhbGVba10gIT09IDEpIHYgPSB2IC8gc2NhbGVba107CgogICAgICAgIC8vIGNsYW1wIHRvIGhhbGYtZmxvYXQgZmluaXRlIHJhbmdlIHdoZW4gc3RvcmluZyByYXcgZmxvYXRzCiAgICAgICAgaWYgKHYgPiA2NTUwNCkgeyB2ID0gNjU1MDQ7IGNsYW1wZWQgPSB0cnVlOyB9CiAgICAgICAgZWxzZSBpZiAodiA8IC02NTUwNCkgeyB2ID0gLTY1NTA0OyBjbGFtcGVkID0gdHJ1ZTsgfQoKICAgICAgICBkYXRhW2ogKyBrXSA9IGYzMlRvRjE2Qml0cyh2KTsKICAgICAgfQogICAgfQoKICAgIGlmIChjbGFtcGVkKSB7CiAgICAgIHdvcmtlcldhcm4oCiAgICAgICAgImdwdVBhY2tfZjE2X2NsYW1wX3dvcmtlciIsCiAgICAgICAgIlt0aWZmLXdvcmtlcl0gU29tZSB2YWx1ZXMgZXhjZWVkZWQgUkdCQTE2RiBmaW5pdGUgcmFuZ2UgYW5kIHdlcmUgY2xhbXBlZC4gQ29uc2lkZXIgbm9ybWFsaXphdGlvbiB2aWEgZm9ybWF0LmdwdS5mb3JjZVJHQkExNkYgKyByZWx5aW5nIG9uIHNjYWxlL29mZnNldC4iCiAgICAgICk7CiAgICB9CgogICAgcGFja3MucHVzaCh7CiAgICAgIGZvcm1hdDogIlJHQkExNkYiLAogICAgICBkYXRhOiB7IGN0b3I6ICJVaW50MTZBcnJheSIsIGJ1ZmZlcjogZGF0YS5idWZmZXIsIGJ5dGVPZmZzZXQ6IDAsIGxlbmd0aDogZGF0YS5sZW5ndGggfSwKICAgICAgY2hhbm5lbHM6IHBhY2tDaCwKICAgICAgbm9ybWFsaXplZDogZmFsc2UsCiAgICAgIHNjYWxlLAogICAgICBvZmZzZXQsCiAgICB9KTsKICB9CgogIHJldHVybiB7IHdpZHRoLCBoZWlnaHQsIG1vZGU6ICJkYXRhIiwgY2hhbm5lbENvdW50LCBwYWNrcyB9Owp9Cgphc3luYyBmdW5jdGlvbiBkZWNvZGVSYXN0ZXJGcm9tQXJyYXlCdWZmZXIoYWIsIGhpbnRzKSB7CiAgY29uc3QgdGlmZiA9IGF3YWl0IGZyb21BcnJheUJ1ZmZlcihhYik7CiAgY29uc3QgY291bnQgPSBhd2FpdCB0aWZmLmdldEltYWdlQ291bnQoKTsKICBsZXQgaW1hZ2VJbmRleCA9IGhpbnRzICYmIHR5cGVvZiBoaW50cy5pbWFnZUluZGV4ID09PSAibnVtYmVyIiA/IGhpbnRzLmltYWdlSW5kZXggOiBudWxsOwoKICBpZiAoY291bnQgIT09IDEpIHsKICAgIGlmIChpbWFnZUluZGV4ID09IG51bGwpIHsKICAgICAgdGhyb3cgbmV3IEVycm9yKGBbUmF3VGlmZlBsdWdpbl0gVElGRiBoYXMgJHtjb3VudH0gaW1hZ2VzOyBwcm92aWRlIHJhd1RpZmYuaGludHMuaW1hZ2VJbmRleCB0byBkZWNvZGUuYCk7CiAgICB9CiAgICBpZiAoaW1hZ2VJbmRleCA8IDAgfHwgaW1hZ2VJbmRleCA+PSBjb3VudCkgewogICAgICB0aHJvdyBuZXcgRXJyb3IoYFtSYXdUaWZmUGx1Z2luXSBpbWFnZUluZGV4ICR7aW1hZ2VJbmRleH0gb3V0IG9mIHJhbmdlICgwLi4ke2NvdW50IC0gMX0pLmApOwogICAgfQogIH0gZWxzZSB7CiAgICBpbWFnZUluZGV4ID0gMDsKICB9CgogIGNvbnN0IGltZyA9IGF3YWl0IHRpZmYuZ2V0SW1hZ2UoaW1hZ2VJbmRleCk7CiAgY29uc3Qgd2lkdGggPSBpbWcuZ2V0V2lkdGgoKTsKICBjb25zdCBoZWlnaHQgPSBpbWcuZ2V0SGVpZ2h0KCk7CiAgY29uc3Qgc2FtcGxlc1BlclBpeGVsID0gaW1nLmdldFNhbXBsZXNQZXJQaXhlbCgpOwogIGNvbnN0IGJpdHNQZXJTYW1wbGUgPSBnZXRUYWcoaW1nLCAiQml0c1BlclNhbXBsZSIpOwogIGNvbnN0IHNhbXBsZUZvcm1hdCA9IGdldFRhZyhpbWcsICJTYW1wbGVGb3JtYXQiKTsKICBjb25zdCBwaG90b21ldHJpY0ludGVycHJldGF0aW9uID0gZ2V0VGFnKGltZywgIlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24iKTsKICBjb25zdCBjb2xvck1hcCA9IChhd2FpdCBsb2FkVGFnKGltZywgIkNvbG9yTWFwIikpIHx8IG51bGw7CiAgY29uc3QgZmlsZURpcmVjdG9yeSA9IGltZy5nZXRGaWxlRGlyZWN0b3J5KCkudG9PYmplY3QoKTsKCiAgY29uc3QgZGVjb2RlT3B0cyA9IE9iamVjdC5hc3NpZ24oeyBpbnRlcmxlYXZlOiBmYWxzZSB9LCAoaGludHMgJiYgaGludHMuZGVjb2RlKSB8fCB7fSk7CiAgY29uc3QgcmFzdGVycyA9IG5vcm1hbGl6ZVJhc3RlcnMoYXdhaXQgaW1nLnJlYWRSYXN0ZXJzKHsKICAgIC4uLmRlY29kZU9wdHMsCiAgICBwb29sOiBudWxsLCAvLyBhbHJlYWR5IGluIHdvcmtlciwgZG8gbm90IG5lc3QKICB9KSk7CgogIGNvbnN0IGJhbmRzID0gcmFzdGVycy5tYXAoKGFycikgPT4gKHsKICAgIGN0b3I6IGFyci5jb25zdHJ1Y3RvciAmJiBhcnIuY29uc3RydWN0b3IubmFtZSA/IGFyci5jb25zdHJ1Y3Rvci5uYW1lIDogIlVpbnQ4QXJyYXkiLAogICAgYnVmZmVyOiBhcnIuYnVmZmVyLAogICAgYnl0ZU9mZnNldDogYXJyLmJ5dGVPZmZzZXQsCiAgICBsZW5ndGg6IGFyci5sZW5ndGgsCiAgfSkpOwoKICByZXR1cm4gewogICAgd2lkdGgsCiAgICBoZWlnaHQsCiAgICBiYW5kcywKICAgIHNhbXBsZXNQZXJQaXhlbDogTWF0aC5tYXgoc2FtcGxlc1BlclBpeGVsLCBiYW5kcy5sZW5ndGgpLAogICAgYml0c1BlclNhbXBsZTogYml0c1BlclNhbXBsZSA/IEFycmF5LmZyb20oYml0c1BlclNhbXBsZSkgOiBbOF0sCiAgICBzYW1wbGVGb3JtYXQ6IHNhbXBsZUZvcm1hdCA/IEFycmF5LmZyb20oc2FtcGxlRm9ybWF0KSA6IG51bGwsCiAgICBwaG90b21ldHJpY0ludGVycHJldGF0aW9uLAogICAgY29sb3JNYXAsCiAgICBmaWxlRGlyZWN0b3J5LAogIH07Cn0KCmFzeW5jIGZ1bmN0aW9uIGRlY29kZUFuZFJlbmRlckltYWdlQml0bWFwRnJvbUFycmF5QnVmZmVyKGFiLCBoaW50cykgewogIGNvbnN0IHJhc3RlclBheWxvYWQgPSBhd2FpdCBkZWNvZGVSYXN0ZXJGcm9tQXJyYXlCdWZmZXIoYWIsIGhpbnRzKTsKICBjb25zdCByYXN0ZXIgPSBPYmplY3QuYXNzaWduKHt9LCByYXN0ZXJQYXlsb2FkLCB7IGJhbmRzOiByZXZpdmVCYW5kcyhyYXN0ZXJQYXlsb2FkLmJhbmRzKSB9KTsKICBjb25zdCBmb3JtYXQgPSByZXNvbHZlRm9ybWF0RnJvbUhpbnRzKGhpbnRzKTsKCiAgLy8gaW1hZ2UtbW9kZSByZW5kZXIgb25seSBmb3IgSW1hZ2VCaXRtYXAgcGF0aAogIGNvbnN0IHJnYmEgPSByYXN0ZXJUb1JHQkE4X0ltYWdlTW9kZShyYXN0ZXIsIGhpbnRzLCBmb3JtYXQpOwoKICAvLyBQcmVmZXIgT2Zmc2NyZWVuQ2FudmFzIC0+IEltYWdlQml0bWFwIGlmIGF2YWlsYWJsZSBpbiB0aGlzIHdvcmtlci4KICBpZiAodHlwZW9mIE9mZnNjcmVlbkNhbnZhcyA9PT0gImZ1bmN0aW9uIikgewogICAgY29uc3QgY2FudmFzID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhyYXN0ZXIud2lkdGgsIHJhc3Rlci5oZWlnaHQpOwogICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoIjJkIiwgeyB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWUgfSk7CiAgICBjb25zdCBpbWdEYXRhID0gbmV3IEltYWdlRGF0YShyZ2JhLCByYXN0ZXIud2lkdGgsIHJhc3Rlci5oZWlnaHQpOwogICAgY3R4LnB1dEltYWdlRGF0YShpbWdEYXRhLCAwLCAwKTsKICAgIGNvbnN0IGJtcCA9IGNhbnZhcy50cmFuc2ZlclRvSW1hZ2VCaXRtYXAoKTsKICAgIHJldHVybiB7IGtpbmQ6ICJpbWFnZUJpdG1hcCIsIGltYWdlQml0bWFwOiBibXAgfTsKICB9CgogIC8vIEZhbGxiYWNrOiByZXR1cm4gUkdCQSBieXRlcyBhbmQgbGV0IG1haW4gdGhyZWFkIGNyZWF0ZSBhbiBJbWFnZUJpdG1hcC4KICByZXR1cm4gewogICAga2luZDogInJnYmE4IiwKICAgIHdpZHRoOiByYXN0ZXIud2lkdGgsCiAgICBoZWlnaHQ6IHJhc3Rlci5oZWlnaHQsCiAgICByZ2JhQnVmZmVyOiByZ2JhLmJ1ZmZlciwKICAgIHJnYmFCeXRlT2Zmc2V0OiByZ2JhLmJ5dGVPZmZzZXQsCiAgICByZ2JhTGVuZ3RoOiByZ2JhLmxlbmd0aCwKICB9Owp9CgpmdW5jdGlvbiByYXN0ZXJQYXlsb2FkVG9UZXh0dXJlU2V0KHJhc3RlclBheWxvYWQsIGhpbnRzKSB7CiAgY29uc3QgcmFzdGVyID0gT2JqZWN0LmFzc2lnbih7fSwgcmFzdGVyUGF5bG9hZCwgeyBiYW5kczogcmV2aXZlQmFuZHMocmFzdGVyUGF5bG9hZC5iYW5kcykgfSk7CiAgY29uc3QgZm9ybWF0ID0gcmVzb2x2ZUZvcm1hdEZyb21IaW50cyhoaW50cykgfHwge307CiAgY29uc3QgaW50ZXJwcmV0YXRpb24gPSBmb3JtYXQuaW50ZXJwcmV0YXRpb24gfHwgImF1dG8iOwogIGNvbnN0IGluZmVycmVkID0gaW5mZXJGcm9tVElGRlRhZ3MocmFzdGVyKTsKICBjb25zdCBtb2RlID0gKGludGVycHJldGF0aW9uID09PSAiYXV0byIpID8gaW5mZXJyZWQgOiBpbnRlcnByZXRhdGlvbjsKCiAgaWYgKG1vZGUgPT09ICJpbWFnZSIpIHsKICAgIGNvbnN0IHJnYmEgPSByYXN0ZXJUb1JHQkE4X0ltYWdlTW9kZShyYXN0ZXIsIGhpbnRzLCBmb3JtYXQpOwogICAgcmV0dXJuIHBhY2tDYW5vbmljYWxSR0JBKHJnYmEsIHJhc3Rlci53aWR0aCwgcmFzdGVyLmhlaWdodCwgZm9ybWF0KTsKICB9CiAgcmV0dXJuIHBhY2tCYW5kc0FzRGF0YShyYXN0ZXIsIGZvcm1hdCk7Cn0KCmFzeW5jIGZ1bmN0aW9uIGRlY29kZUFuZFBhY2tHcHVUZXh0dXJlU2V0RnJvbUFycmF5QnVmZmVyKGFiLCBoaW50cykgewogIGNvbnN0IHJhc3RlclBheWxvYWQgPSBhd2FpdCBkZWNvZGVSYXN0ZXJGcm9tQXJyYXlCdWZmZXIoYWIsIGhpbnRzKTsKICBjb25zdCB0ZXhTZXQgPSByYXN0ZXJQYXlsb2FkVG9UZXh0dXJlU2V0KHJhc3RlclBheWxvYWQsIGhpbnRzKTsKICByZXR1cm4geyByYXN0ZXJQYXlsb2FkLCB0ZXhTZXQgfTsKfQoKZnVuY3Rpb24gY29sbGVjdFRyYW5zZmVyc0ZvclJhc3RlclBheWxvYWQocmFzdGVyUGF5bG9hZCkgewogIHJldHVybiByYXN0ZXJQYXlsb2FkLmJhbmRzLm1hcCgoYikgPT4gYi5idWZmZXIpOwp9CgpmdW5jdGlvbiBjb2xsZWN0VHJhbnNmZXJzRm9yVGV4dHVyZVNldCh0ZXhTZXQpIHsKICBjb25zdCB0cmFuc2ZlcnMgPSBbXTsKICBmb3IgKGNvbnN0IHAgb2YgdGV4U2V0LnBhY2tzKSB7CiAgICB0cmFuc2ZlcnMucHVzaChwLmRhdGEuYnVmZmVyKTsKICB9CiAgcmV0dXJuIHRyYW5zZmVyczsKfQoKd29ya2VyUmVmLm9ubWVzc2FnZSA9IGFzeW5jIChldikgPT4gewogIGNvbnN0IG1zZyA9IGV2LmRhdGEgfHwge307CiAgY29uc3QgaWQgPSBtc2cuaWQ7CiAgY29uc3Qgb3AgPSBtc2cub3A7CiAgY29uc3QgcGF5bG9hZCA9IG1zZy5wYXlsb2FkIHx8IHt9OwogIHRyeSB7CiAgICBpZiAob3AgPT09ICJkZWNvZGVSYXN0ZXIiKSB7CiAgICAgIGNvbnN0IGFiID0gcGF5bG9hZC5idWZmZXI7CiAgICAgIGNvbnN0IGhpbnRzID0gcGF5bG9hZC5oaW50cyB8fCB7fTsKICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVjb2RlUmFzdGVyRnJvbUFycmF5QnVmZmVyKGFiLCBoaW50cyk7CiAgICAgIHdvcmtlclJlZi5wb3N0TWVzc2FnZSh7IGlkLCBvazogdHJ1ZSwgcmVzdWx0IH0sIGNvbGxlY3RUcmFuc2ZlcnNGb3JSYXN0ZXJQYXlsb2FkKHJlc3VsdCkpOwogICAgICByZXR1cm47CiAgICB9CgogICAgaWYgKG9wID09PSAiZGVjb2RlQW5kUmVuZGVySW1hZ2VCaXRtYXAiKSB7CiAgICAgIGNvbnN0IGFiID0gcGF5bG9hZC5idWZmZXI7CiAgICAgIGNvbnN0IGhpbnRzID0gcGF5bG9hZC5oaW50cyB8fCB7fTsKICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVjb2RlQW5kUmVuZGVySW1hZ2VCaXRtYXBGcm9tQXJyYXlCdWZmZXIoYWIsIGhpbnRzKTsKCiAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gImltYWdlQml0bWFwIikgewogICAgICAgIHdvcmtlclJlZi5wb3N0TWVzc2FnZSh7IGlkLCBvazogdHJ1ZSwgcmVzdWx0IH0sIFtyZXN1bHQuaW1hZ2VCaXRtYXBdKTsKICAgICAgfSBlbHNlIHsKICAgICAgICB3b3JrZXJSZWYucG9zdE1lc3NhZ2UoeyBpZCwgb2s6IHRydWUsIHJlc3VsdCB9LCBbcmVzdWx0LnJnYmFCdWZmZXJdKTsKICAgICAgfQogICAgICByZXR1cm47CiAgICB9CgogICAgaWYgKG9wID09PSAiZGVjb2RlQW5kUGFja0dwdVRleHR1cmVTZXQiKSB7CiAgICAgIGNvbnN0IGFiID0gcGF5bG9hZC5idWZmZXI7CiAgICAgIGNvbnN0IGhpbnRzID0gcGF5bG9hZC5oaW50cyB8fCB7fTsKICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVjb2RlQW5kUGFja0dwdVRleHR1cmVTZXRGcm9tQXJyYXlCdWZmZXIoYWIsIGhpbnRzKTsKCiAgICAgIGNvbnN0IHRyYW5zZmVycyA9IFsKICAgICAgICAuLi5jb2xsZWN0VHJhbnNmZXJzRm9yUmFzdGVyUGF5bG9hZChyZXN1bHQucmFzdGVyUGF5bG9hZCksCiAgICAgICAgLi4uY29sbGVjdFRyYW5zZmVyc0ZvclRleHR1cmVTZXQocmVzdWx0LnRleFNldCksCiAgICAgIF07CiAgICAgIHdvcmtlclJlZi5wb3N0TWVzc2FnZSh7IGlkLCBvazogdHJ1ZSwgcmVzdWx0IH0sIHRyYW5zZmVycyk7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICBpZiAob3AgPT09ICJyYXN0ZXJUb0dwdVRleHR1cmVTZXQiKSB7CiAgICAgIGNvbnN0IHJhc3RlciA9IHBheWxvYWQucmFzdGVyOwogICAgICBjb25zdCBoaW50cyA9IHBheWxvYWQuaGludHMgfHwge307CiAgICAgIGNvbnN0IHRleFNldCA9IHJhc3RlclBheWxvYWRUb1RleHR1cmVTZXQocmFzdGVyLCBoaW50cyk7CiAgICAgIHdvcmtlclJlZi5wb3N0TWVzc2FnZSh7IGlkLCBvazogdHJ1ZSwgcmVzdWx0OiB0ZXhTZXQgfSwgY29sbGVjdFRyYW5zZmVyc0ZvclRleHR1cmVTZXQodGV4U2V0KSk7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICB0aHJvdyBuZXcgRXJyb3IoYFtSYXdUaWZmUGx1Z2luXSBVbmtub3duIHdvcmtlciBvcDogJHtvcH1gKTsKICB9IGNhdGNoIChlKSB7CiAgICB3b3JrZXJSZWYucG9zdE1lc3NhZ2UoeyBpZCwgb2s6IGZhbHNlLCBlcnJvcjogZXJyb3JUb1BsYWluKGUpIH0pOwogIH0KfTs=", import.meta.url), { type: "module" });
}
class O {
  /**
   * @param {ArrayBuffer|Uint8Array|Blob|{bytes?:any, blob?:Blob, arrayBuffer?:Function}} source
   * @param {Object} [opts]
   * @param {RawTiffHints} [opts.hints]
   * @param {*} [opts.meta]
   */
  constructor(I, t = {}) {
    this.source = I, this.hints = t.hints || {}, this.meta = t.meta;
  }
  getType() {
    return "rawTiff";
  }
}
class lg {
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
  constructor(I) {
    Object.assign(this, I), this.hints = I.hints || {};
  }
  getType() {
    return "tiffRaster";
  }
}
function ug(c) {
  return new lg({ ...c, bands: c.bands.map((I) => I.slice()) });
}
function _(c, I) {
  const t = Array.isArray(c) ? c.slice() : Object.assign({}, c || {});
  if (!I || typeof I != "object") return t;
  for (const i of Object.keys(I)) {
    const h = I[i];
    h && typeof h == "object" && !Array.isArray(h) && t[i] && typeof t[i] == "object" && !Array.isArray(t[i]) ? t[i] = _(t[i], h) : t[i] = h;
  }
  return t;
}
function Cg(c, I) {
  const t = I && I.hints;
  if (t && t.formatResolved) return t.formatResolved;
  if (t && t.format) return t.format;
  if (I && I.meta && I.meta.format) return I.meta.format;
  if (c && c.format) return c.format;
  if (c && c.userData && c.userData.format) return c.userData.format;
  const i = c && (c.source || c.tileSource || c._tileSource);
  return i && i.format ? i.format : i && i.options && i.options.format ? i.options.format : null;
}
function Xg(c) {
  return Array.isArray(c) ? c.map((I) => {
    const t = typeof I.ctor == "string" && globalThis[I.ctor] ? globalThis[I.ctor] : Uint8Array;
    return new t(I.buffer, I.byteOffset || 0, I.length);
  }) : [];
}
function Vg(c, I) {
  const t = Xg(c.bands);
  return new lg({
    width: c.width,
    height: c.height,
    bands: t,
    samplesPerPixel: c.samplesPerPixel,
    bitsPerSample: c.bitsPerSample,
    sampleFormat: c.sampleFormat,
    photometricInterpretation: c.photometricInterpretation,
    colorMap: c.colorMap,
    fileDirectory: c.fileDirectory,
    hints: I || {}
  });
}
function bg(c) {
  const I = (c.packs || []).map((t) => {
    const i = t.data, h = typeof i.ctor == "string" && globalThis[i.ctor] ? globalThis[i.ctor] : Uint8Array, A = new h(i.buffer, i.byteOffset || 0, i.length);
    return Object.assign({}, t, { data: A });
  });
  return new ng({
    width: c.width,
    height: c.height,
    mode: c.mode,
    channelCount: c.channelCount,
    packs: I
  });
}
function Jg(c, I = {}) {
  const t = c;
  if (t.RawTiffPlugin && t.RawTiffPlugin.__installed) return t.RawTiffPlugin;
  const i = Object.assign({
    toneMap: null,
    format: _(hg, I.defaults && I.defaults.format || null)
  }, I.defaults || {}), h = I.copyRasters !== !1, A = Object.assign({
    enabled: !0,
    size: typeof navigator < "u" && navigator.hardwareConcurrency ? Math.max(1, Math.min(4, Math.ceil(navigator.hardwareConcurrency / 2))) : 2,
    createWorker: null,
    transferInput: !1,
    enableRawTiffToImageBitmap: !0
  }, I.workerPool || {}), s = t.RawTiffPluginShared = t.RawTiffPluginShared || {};
  function b() {
    var C, n;
    if (!A.enabled || typeof Worker > "u") return null;
    if (s.__rawTiffWorkerPool) return s.__rawTiffWorkerPool;
    const g = A.createWorker || Yg;
    try {
      return s.__rawTiffWorkerPool = new rg({
        size: A.size,
        createWorker: g
      }), s.__rawTiffWorkerPool;
    } catch (r) {
      return (n = (C = t.console) == null ? void 0 : C.warn) == null || n.call(C, "[RawTiffPlugin] Failed to create worker pool; falling back to main thread.", r), s.__rawTiffWorkerPool = null, null;
    }
  }
  async function m(g) {
    if (g == null) throw new Error("[RawTiffPlugin] rawTiff is null/undefined.");
    if (g instanceof O) return m(g.source);
    if (typeof g == "object") {
      if (typeof g.arrayBuffer == "function") {
        const C = await g.arrayBuffer();
        if (C instanceof ArrayBuffer) return C;
      }
      if (g.bytes != null) return m(g.bytes);
      if (g.blob != null) return m(g.blob);
    }
    if (typeof Blob < "u" && g instanceof Blob) return await g.arrayBuffer();
    if (g instanceof ArrayBuffer) return g;
    if (ArrayBuffer.isView(g)) {
      const { buffer: C, byteOffset: n, byteLength: r } = g;
      return C.slice(n, n + r);
    }
    throw new Error("[RawTiffPlugin] Unsupported rawTiff payload. Provide ArrayBuffer, TypedArray, Blob, or RawTiff wrapper.");
  }
  async function y(g) {
    return typeof g.getImageCount == "function" ? await g.getImageCount() : typeof g.getImages == "function" ? (await g.getImages()).length : 1;
  }
  async function F(g, C) {
    if (typeof g.getImage == "function") return await g.getImage(C);
    if (typeof g.getImages == "function") return (await g.getImages())[C];
    throw new Error("[RawTiffPlugin] geotiff instance does not expose getImage/getImages.");
  }
  async function X(g, C) {
    if (!t.supportsAsync) throw new Error("[RawTiffPlugin] Not supported in sync mode.");
    const n = C && C.hints || (C instanceof O ? C.hints : null) || {}, r = await m(C);
    let G;
    if (typeof mg == "function")
      G = await mg(r);
    else if (typeof og == "function")
      G = await og(new Blob([r], { type: "image/tiff" }));
    else
      throw new Error("[RawTiffPlugin] geotiff module does not provide fromArrayBuffer/fromBlob.");
    const B = await y(G);
    let H = n.imageIndex;
    if (B > 1) {
      if (typeof H != "number" || !Number.isFinite(H))
        throw new Error(`[RawTiffPlugin] TIFF contains ${B} images. Provide rawTiff.hints.imageIndex.`);
      if (H < 0 || H >= B)
        throw new Error(`[RawTiffPlugin] imageIndex ${H} out of range (0..${B - 1}).`);
    } else
      H = 0;
    const J = await F(G, H), Q = J.getWidth(), w = J.getHeight(), Y = J.getSamplesPerPixel(), S = U(J, "BitsPerSample"), k = U(J, "SampleFormat"), D = U(J, "PhotometricInterpretation"), K = await E(J, "ColorMap") || null, p = J.getFileDirectory().toObject(), N = Object.assign({ interleave: !1 }, n.decode || {}), f = await J.readRasters(N), T = Array.isArray(f) ? f : [f], P = Math.max(Y || 0, T.length);
    return new lg({
      width: Q,
      height: w,
      bands: T,
      samplesPerPixel: P,
      bitsPerSample: S ? Array.from(S) : [8],
      sampleFormat: k ? Array.from(k) : null,
      photometricInterpretation: D,
      colorMap: K,
      fileDirectory: p,
      hints: n
    });
  }
  async function v(g, C, n) {
    const r = C && C.hints || (C instanceof O ? C.hints : null) || {}, G = await m(C), B = Cg(g, C), H = _(i.format, B || null), J = Object.assign({}, r, { formatResolved: H }), Q = A && A.transferInput ? [G] : [], w = await n.request("decodeRaster", { buffer: G, hints: J }, Q);
    return Vg(w, J);
  }
  async function l(g, C) {
    if (!t.supportsAsync) throw new Error("[RawTiffPlugin] Not supported in sync mode.");
    const n = b();
    return n ? await v(g, C, n) : await X(g, C);
  }
  async function e(g, C) {
    const n = C && C.hints || (C instanceof O ? C.hints : null) || {}, r = b();
    if (r) {
      const B = await m(C), H = Cg(g, C), J = _(i.format, H || null), Q = Object.assign({}, n, { formatResolved: J }), w = A && A.transferInput ? [B] : [], Y = await r.request("decodeAndRenderImageBitmap", { buffer: B, hints: Q }, w);
      if (Y && Y.kind === "imageBitmap") return Y.imageBitmap;
      if (Y && Y.kind === "rgba8") {
        if (typeof createImageBitmap != "function")
          throw new Error("[RawTiffPlugin] createImageBitmap is not available to build ImageBitmap fallback.");
        const S = new Uint8ClampedArray(Y.rgbaBuffer, Y.rgbaByteOffset || 0, Y.rgbaLength), k = new ImageData(S, Y.width, Y.height);
        return await createImageBitmap(k);
      }
      throw new Error("[RawTiffPlugin] Worker did not return a supported output.");
    }
    const G = await X(g, C);
    return await V(g, G);
  }
  async function d(g, C) {
    const n = C && C.hints || (C instanceof O ? C.hints : null) || {}, r = b();
    if (!r) {
      const S = await X(g, C);
      return await o(g, S);
    }
    const G = await m(C), B = Cg(g, C), H = _(i.format, B || null), J = Object.assign({}, n, { formatResolved: H }), Q = A && A.transferInput ? [G] : [], w = await r.request("decodeAndPackGpuTextureSet", { buffer: G, hints: J }, Q), Y = bg(w.texSet);
    return Y.hints = J, Y;
  }
  async function o(g, C) {
    const n = b();
    if (!n) {
      M("gpuTextureSet_no_worker", "[RawTiffPlugin] No worker pool available; gpuTextureSet packing will fall back to worker-less path (slower).", "warn");
      const k = C.width, D = C.height, K = k * D, p = new Uint8Array(K * 4);
      for (let N = 0, f = 0; N < K; N++, f += 4)
        p[f] = C.bands[0] ? C.bands[0][N] : 0, p[f + 1] = C.bands[1] ? C.bands[1][N] : 0, p[f + 2] = C.bands[2] ? C.bands[2][N] : 0, p[f + 3] = C.bands[3] ? C.bands[3][N] : 255;
      return new ng({
        width: k,
        height: D,
        mode: "data",
        channelCount: C.bands ? C.bands.length : 0,
        packs: [{ format: "RGBA8", data: p, channels: [0, 1, 2, 3], normalized: !1, scale: [1, 1, 1, 1], offset: [0, 0, 0, 0] }]
      });
    }
    const r = C.hints || {}, G = Cg(g, C), B = _(i.format, G || null), H = Object.assign({}, r, { formatResolved: B }), J = C.bands.map((k) => {
      var D;
      return {
        ctor: ((D = k.constructor) == null ? void 0 : D.name) || "Uint8Array",
        buffer: k.buffer,
        byteOffset: k.byteOffset,
        length: k.length
      };
    }), Q = {
      width: C.width,
      height: C.height,
      bands: J,
      samplesPerPixel: C.samplesPerPixel,
      bitsPerSample: C.bitsPerSample,
      sampleFormat: C.sampleFormat,
      photometricInterpretation: C.photometricInterpretation,
      colorMap: C.colorMap,
      fileDirectory: C.fileDirectory
    }, w = J.map((k) => k.buffer), Y = await n.request("rasterToGpuTextureSet", { raster: Q, hints: H }, w), S = bg(Y);
    return S.hints = H, S;
  }
  function Z(g, C, n) {
    if (g == null || Number.isNaN(g)) return 0;
    const r = n.bands[C];
    if (r instanceof Float32Array || r instanceof Float64Array) {
      const J = Math.max(0, Math.min(1, g));
      return Math.round(J * 255);
    }
    const B = n.bitsPerSample && n.bitsPerSample[C] != null ? n.bitsPerSample[C] : n.bitsPerSample ? n.bitsPerSample[0] : 8, H = B <= 0 ? 255 : Math.pow(2, B) - 1;
    return H <= 255 ? Math.max(0, Math.min(255, g)) : Math.round(Math.max(0, Math.min(1, g / H)) * 255);
  }
  function W(g) {
    const C = i.toneMap || Z, n = Zg.photometricInterpretations || {}, r = g.width, G = g.height, B = r * G, H = g.hints.renderChannels || g.renderChannels || null, J = g.samplesPerPixel || g.bands.length || 1, Q = (K, p) => C(g.bands[K][p], K, g), w = g.photometricInterpretation;
    if (w === n.Palette && g.colorMap) {
      const K = g.bands[0];
      return j.RGBAfromPalette(K, g.colorMap);
    }
    if ((w === n.WhiteIsZero || w === n.BlackIsZero) && J >= 1) {
      const K = g.bands[0], p = g.bitsPerSample && g.bitsPerSample[0] != null ? g.bitsPerSample[0] : 8, N = Math.pow(2, p) - 1;
      if (w === n.WhiteIsZero) return j.RGBAfromWhiteIsZero(K, N);
      if (w === n.BlackIsZero) return j.RGBAfromBlackIsZero(K, N);
      const f = new Uint8ClampedArray(B * 4);
      for (let T = 0, P = 0; T < B; T++, P += 4) {
        let R = C(K[T], 0, g);
        w === n.WhiteIsZero && (R = 255 - R), f[P] = f[P + 1] = f[P + 2] = R, f[P + 3] = 255;
      }
      return f;
    }
    const Y = H || (w === n.RGB || w === n.YCbCr || w === n.CIELab ? [0, 1, 2] : J >= 3 ? [0, 1, 2] : [0]);
    if (Y.length > 4 && (M(
      "renderChannels>4_to_RGBA",
      `[tiff] Requested ${Y.length} channels for RGBA output; only 4 can be represented. Extra channels will be dropped.`,
      "warn"
    ), Y.splice(4)), Y.length === 1) {
      const K = Y[0], p = new Uint8ClampedArray(B * 4);
      for (let N = 0, f = 0; N < B; N++, f += 4) {
        const T = Q(K, N);
        p[f] = p[f + 1] = p[f + 2] = T, p[f + 3] = 255;
      }
      return p;
    }
    const S = new Uint8ClampedArray(B * Y.length);
    for (let K = 0; K < B; K++) {
      const p = K * Y.length;
      for (let N = 0; N < Y.length; N++) {
        const f = Y[N];
        S[p + N] = f < g.bands.length ? Q(f, K) : 0;
      }
    }
    if (w === n.YCbCr && Y.length >= 3) return j.RGBAfromYCbCr(S);
    if (w === n.CMYK && Y.length >= 4) return j.RGBAfromCMYK(S);
    if (w === n.CIELab && Y.length >= 3) return j.RGBAfromCIELab(S);
    if (Y.length === 4) return S;
    if (Y.length === 3) return j.RGBAfromRGB(S);
    const k = new Uint8ClampedArray(B * 4), D = Y.length >= 4;
    for (let K = 0, p = 0; K < B; K++, p += 4) {
      const N = K * Y.length;
      k[p] = S[N], k[p + 1] = S[N + 1] || 0, k[p + 2] = S[N + 2] || 0, k[p + 3] = D ? S[N + 3] : 255;
    }
    return k;
  }
  async function V(g, C) {
    if (typeof createImageBitmap != "function")
      throw new Error("[RawTiffPlugin] createImageBitmap is not available.");
    const n = W(C), r = new ImageData(n, C.width, C.height);
    return await createImageBitmap(r);
  }
  async function a(g, C) {
    const n = await V(g, C), r = document.createElement("canvas");
    r.width = n.width, r.height = n.height;
    const G = r.getContext("2d", { willReadFrequently: !0 });
    return G.drawImage(n, 0, 0), G;
  }
  t.converter ? (t.converter.learn("rawTiff", "tiffRaster", (g, C) => l(g, C), 2, 10), A.enableRawTiffToImageBitmap && t.converter.learn("rawTiff", "imageBitmap", (g, C) => e(g, C), 1, 5), t.converter.learn(
    "tiffRaster",
    "tiffRaster",
    h ? (g, C) => ug(C) : (g, C) => C,
    1,
    1
  ), t.converter.learn("tiffRaster", "context2d", (g, C) => a(g, C), 2, 10), t.converter.learn("tiffRaster", "imageBitmap", (g, C) => V(g, C), 1, 50), t.converter.learn("rawTiff", "gpuTextureSet", (g, C) => d(g, C), 1, 8), t.converter.learn("tiffRaster", "gpuTextureSet", (g, C) => o(g, C), 1, 12)) : t.console.warn("[RawTiffPlugin] OpenSeadragon.converter is missing. Load OSD v6+.");
  const u = {
    __installed: !0,
    RawTiff: O,
    TiffRaster: lg,
    GpuTextureSet: ng,
    Converters: j,
    decodeRawTiff: l,
    rasterToRGBA8: W,
    rasterToContext2d: a,
    rasterToImageBitmap: V,
    getWorkerPool: b,
    terminateWorkerPool() {
      const g = t.RawTiffPluginShared;
      g && g.__rawTiffWorkerPool && (g.__rawTiffWorkerPool.terminate(), g.__rawTiffWorkerPool = null);
    },
    /**
     * Convert using OpenSeadragon.converter.
     * @param {*} tile
     * @param {*} data
     * @param {string} toType
     * @param {string} [fromType]
     */
    convert(g, C, n, r) {
      if (!t.converter) throw new Error("[RawTiffPlugin] OpenSeadragon.converter is missing.");
      const G = r || t.converter.guessType(C);
      return t.converter.convert(g, C, G, n);
    },
    /**
     * Wrap binary as a RawTiff object.
     * @param {*} source
     * @param {Object} [opts]
     * @returns {RawTiff}
     */
    wrap(g, C) {
      return new O(g, C);
    },
    /**
     * Expose defaults (merged).
     */
    defaults: i
  };
  return t.RawTiffPlugin = u, u;
}
const eg = (c, I) => c instanceof File ? og(c) : ag(c, { blockSize: 65536, ...I }), Fg = (c, I = {}) => {
  if (c.version.major < 4 || c.version.major === 4 && c.version.minor < 1)
    throw new Error("Your current OpenSeadragon version is too low to support GeoTIFFTileSource");
  const {
    workerUrl: t,
    // optional: string or URL
    workerPool: i,
    // optional: { createWorker: () => Worker }
    decoderPool: h,
    // optional: geotiff.js Pool
    copyRasters: A
    // optional: boolean, default true
  } = I, b = i || {
    createWorker: () => t ? new globalThis.Worker(t, { type: "module" }) : new globalThis.Worker(new URL("data:text/javascript;base64,LyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovCi8qKgogKiBSYXdUSUZGIHdvcmtlciBmb3IgT3BlblNlYWRyYWdvbiBjb252ZXJ0ZXIgcGx1Z2luLgogKgogKiBSZXNwb25zaWJpbGl0aWVzOgogKiAgLSBkZWNvZGVSYXN0ZXI6IHJhdyBUSUZGIGJ5dGVzIC0+IG11bHRpLWJhbmQgcmFzdGVyIHBheWxvYWQgKHRyYW5zZmVyYWJsZSBiYW5kIGJ1ZmZlcnMpCiAqICAtIGRlY29kZUFuZFJlbmRlckltYWdlQml0bWFwOiByYXcgVElGRiBieXRlcyAtPiBJbWFnZUJpdG1hcCAocHJlZmVycmVkKSBvciBSR0JBOCBmYWxsYmFjawogKiAgLSBkZWNvZGVBbmRQYWNrR3B1VGV4dHVyZVNldDogcmF3IFRJRkYgYnl0ZXMgLT4gR1BVLXBhY2tlZCB0ZXh0dXJlIHNldCAoUkdCQTggb3IgUkdCQTE2RikKICogIC0gcmFzdGVyVG9HcHVUZXh0dXJlU2V0OiByYXN0ZXIgcGF5bG9hZCAtPiBHUFUtcGFja2VkIHRleHR1cmUgc2V0IChSR0JBOCBvciBSR0JBMTZGKQogKgogKiBUaGUgImZvcm1hdCIgb3ZlcnJpZGUgaXMgcHJvdmlkZWQgZXh0ZXJuYWxseSBhbmQgbXVzdCBhcnJpdmUgdmlhOgogKiAgIHBheWxvYWQuaGludHMuZm9ybWF0UmVzb2x2ZWQgKHByZWZlcnJlZCkgT1IgcGF5bG9hZC5oaW50cy5mb3JtYXQKICovCgppbXBvcnQgeyBmcm9tQXJyYXlCdWZmZXIgfSBmcm9tICJnZW90aWZmIjsKaW1wb3J0IHsgQ29udmVydGVycyB9IGZyb20gIi4uL3V0aWxzL0NvbnZlcnRlcnMuanMiOwppbXBvcnQgeyBnZXRUYWcsIGxvYWRUYWcgfSBmcm9tICIuLi91dGlscy90YWdzLmpzIjsKCi8vIFRlc3RzIGluIG5vZGUgaGF2ZSBubyBzZWxmLgpjb25zdCB3b3JrZXJSZWYgPSBzZWxmIHx8IGdsb2JhbFRoaXM7CgpmdW5jdGlvbiB3b3JrZXJXYXJuKGNvZGUsIG1lc3NhZ2UpIHsKICB3b3JrZXJSZWYucG9zdE1lc3NhZ2UoewogICAga2luZDogIndhcm4iLAogICAgY29kZSwKICAgIG1lc3NhZ2UsCiAgfSk7Cn0KCi8vIFBob3RvbWV0cmljIGludGVycHJldGF0aW9uIGNvbnN0YW50cyAobWF0Y2hpbmcgVElGRiBzcGVjIC8gZ2VvdGlmZi5qcykKY29uc3QgUEkgPSB7CiAgV2hpdGVJc1plcm86IDAsCiAgQmxhY2tJc1plcm86IDEsCiAgUkdCOiAyLAogIFBhbGV0dGU6IDMsCiAgVHJhbnNwYXJlbmN5TWFzazogNCwKICBDTVlLOiA1LAogIFlDYkNyOiA2LAogIENJRUxhYjogOCwKfTsKCmZ1bmN0aW9uIGVycm9yVG9QbGFpbihlcnIpIHsKICB0cnkgewogICAgaWYgKCFlcnIpIHJldHVybiAiVW5rbm93biBlcnJvciI7CiAgICBpZiAodHlwZW9mIGVyciA9PT0gInN0cmluZyIpIHJldHVybiBlcnI7CiAgICByZXR1cm4gZXJyLm1lc3NhZ2UgfHwgSlNPTi5zdHJpbmdpZnkoZXJyKTsKICB9IGNhdGNoIHsKICAgIHJldHVybiBTdHJpbmcoZXJyKTsKICB9Cn0KCmZ1bmN0aW9uIG5vcm1hbGl6ZVJhc3RlcnMocmFzdGVycykgewogIGlmIChBcnJheS5pc0FycmF5KHJhc3RlcnMpKSByZXR1cm4gcmFzdGVyczsKICByZXR1cm4gW3Jhc3RlcnNdOwp9CgpmdW5jdGlvbiByZXZpdmVCYW5kcyhkZXNjcykgewogIHJldHVybiBkZXNjcy5tYXAoKGIpID0+IHsKICAgIGNvbnN0IEN0b3IgPSAodHlwZW9mIGIuY3RvciA9PT0gInN0cmluZyIgJiYgd29ya2VyUmVmW2IuY3Rvcl0pID8gd29ya2VyUmVmW2IuY3Rvcl0gOiBVaW50OEFycmF5OwogICAgcmV0dXJuIG5ldyBDdG9yKGIuYnVmZmVyLCBiLmJ5dGVPZmZzZXQgfHwgMCwgYi5sZW5ndGgpOwogIH0pOwp9CgpmdW5jdGlvbiBpbmZlckZyb21USUZGVGFncyhyYXN0ZXIpIHsKICBjb25zdCBzcHAgPSByYXN0ZXIuc2FtcGxlc1BlclBpeGVsIHx8IChyYXN0ZXIuYmFuZHMgPyByYXN0ZXIuYmFuZHMubGVuZ3RoIDogMSk7CiAgY29uc3QgcGkgPSByYXN0ZXIucGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbjsKCiAgLy8gSWYgcGhvdG9tZXRyaWMgY2xlYXJseSBpbXBsaWVzIGFuIGltYWdlLCB0cmVhdCBhcyBpbWFnZS4KICBpZiAoCiAgICBwaSA9PT0gUEkuUkdCIHx8CiAgICBwaSA9PT0gUEkuWUNiQ3IgfHwKICAgIHBpID09PSBQSS5DTVlLIHx8CiAgICBwaSA9PT0gUEkuQ0lFTGFiIHx8CiAgICBwaSA9PT0gUEkuUGFsZXR0ZQogICkgewogICAgcmV0dXJuICJpbWFnZSI7CiAgfQoKICAvLyBHcmF5c2NhbGUgImltYWdlIiBjYXNlCiAgLy8gdG9kbzogY29uc2lkZXIgc3RpbGwgb3V0cHV0aW5nIGFzIGRhdGEgdG8gc2F2ZSBzcGFjZSAodGhpcyBmb3JjZXMgUkdCQSBleHBhbnNpb24sIGFsdGhvdWdoIGJ1dCB0aGUgZXhwYW5zaW9uCiAgLy8gIGhhcHBlbnMgc29vbmVyIG9yIGxhdGVyLCBzeXN0ZW1zIHRoYXQgZGlyZWN0bHkgcmVuZGVyIHRoZSBkYXRhIG1pZ2h0IGUuZy4gYXZvaWQgcGFzc2luZyB0aGUgZXhwYW5kZWQgYmFuZHMgdG8gZ3B1KQogIGlmICgocGkgPT09IFBJLkJsYWNrSXNaZXJvIHx8IHBpID09PSBQSS5XaGl0ZUlzWmVybykgJiYgc3BwID09PSAxKSB7CiAgICByZXR1cm4gImltYWdlIjsKICB9CgogIC8vIERlZmF1bHQgdG8gZGF0YSBmb3IgdW5rbm93biBQSS4KICByZXR1cm4gImRhdGEiOwp9CgovKioKICogRmxvYXQzMiAtPiBJRUVFLTc1NCBoYWxmLWZsb2F0IGJpdHMgKFVpbnQxNikuCiAqIFByb2R1Y2VzIGNvcnJlY3QgSEFMRl9GTE9BVCBiaXQgcGF0dGVybnMgc3VpdGFibGUgZm9yIFdlYkdMIHVwbG9hZC4KICovCmZ1bmN0aW9uIGYzMlRvRjE2Qml0cyh2YWwpIHsKICBjb25zdCBmbG9hdFZpZXcgPSBuZXcgRmxvYXQzMkFycmF5KDEpOwogIGNvbnN0IGludFZpZXcgPSBuZXcgVWludDMyQXJyYXkoZmxvYXRWaWV3LmJ1ZmZlcik7CgogIGZsb2F0Vmlld1swXSA9IHZhbDsKICBjb25zdCB4ID0gaW50Vmlld1swXTsKCiAgY29uc3Qgc2lnbiA9ICh4ID4+IDMxKSAmIDB4MTsKICBsZXQgZXhwID0gKHggPj4gMjMpICYgMHhGRjsKICBsZXQgbWFudCA9IHggJiAweDdGRkZGRjsKCiAgLy8gTmFOL0luZgogIGlmIChleHAgPT09IDB4RkYpIHsKICAgIGlmIChtYW50ICE9PSAwKSByZXR1cm4gKHNpZ24gPDwgMTUpIHwgMHg3RTAwOyAvLyBxTmFOCiAgICByZXR1cm4gKHNpZ24gPDwgMTUpIHwgMHg3QzAwOyAvLyBJbmYKICB9CgogIC8vIERlbm9ybS9aZXJvIGluIGYzMgogIGlmIChleHAgPT09IDApIHsKICAgIHJldHVybiAoc2lnbiA8PCAxNSk7IC8vIGZsdXNoIHN1Ym5vcm1hbHMgdG8gMAogIH0KCiAgLy8gTm9ybWFsaXplIGV4cG9uZW50IGZyb20gZjMyIGJpYXMgKDEyNykgdG8gZjE2IGJpYXMgKDE1KQogIGV4cCA9IGV4cCAtIDEyNyArIDE1OwoKICAvLyBPdmVyZmxvdyAtPiBJbmYKICBpZiAoZXhwID49IDB4MUYpIHJldHVybiAoc2lnbiA8PCAxNSkgfCAweDdDMDA7CgogIC8vIFVuZGVyZmxvdyAtPiAwIChmbHVzaCkKICBpZiAoZXhwIDw9IDApIHJldHVybiAoc2lnbiA8PCAxNSk7CgogIC8vIE1hbnRpc3NhOiBmMzIgaGFzIDIzIGJpdHMsIGYxNiBoYXMgMTAgYml0cwogIG1hbnQgPSBtYW50ICsgMHgwMDAwMTAwMDsgLy8gcm91bmRpbmcKICBpZiAobWFudCAmIDB4MDA4MDAwMDApIHsKICAgIG1hbnQgPSAwOwogICAgZXhwICs9IDE7CiAgICBpZiAoZXhwID49IDB4MUYpIHJldHVybiAoc2lnbiA8PCAxNSkgfCAweDdDMDA7CiAgfQoKICByZXR1cm4gKHNpZ24gPDwgMTUpIHwgKGV4cCA8PCAxMCkgfCAobWFudCA+PiAxMyk7Cn0KCmZ1bmN0aW9uIHJlc29sdmVGb3JtYXRGcm9tSGludHMoaGludHMpIHsKICByZXR1cm4gKGhpbnRzICYmIChoaW50cy5mb3JtYXRSZXNvbHZlZCB8fCBoaW50cy5mb3JtYXQpKSB8fCBudWxsOwp9CgovKioKICogSW1hZ2UtbW9kZSBSR0JBOCByZW5kZXJlciB0aGF0IHJlc3BlY3RzOgogKiAgLSBwaG90b21ldHJpY0ludGVycHJldGF0aW9uCiAqICAtIG9wdGlvbmFsIGZvcm1hdC5pbWFnZS5yZ2JhQ2hhbm5lbHMgb3ZlcnJpZGUKICogIC0gb3B0aW9uYWwgaGludHMucmVuZGVyQ2hhbm5lbHMgb3ZlcnJpZGUKICoKICogTk9URTogVGhpcyB3b3JrZXIgdmVyc2lvbiBpcyBpbnRlbnRpb25hbGx5ICJkaXNwbGF5LW9yaWVudGVkIiBhbmQgYXNzdW1lcyA4LWJpdC1pc2gKICogZm9yIGltYWdlLW1vZGUuIFByZWNpc2lvbi1mb2N1c2VkIHBhY2tpbmcgaGFwcGVucyBhZnRlciB0aGlzIGlmIFJHQkExNkYgaXMgcmVxdWVzdGVkLgogKi8KZnVuY3Rpb24gcmFzdGVyVG9SR0JBOF9JbWFnZU1vZGUocmFzdGVyLCBoaW50cywgZm9ybWF0KSB7CiAgY29uc3Qgc3BwID0gcmFzdGVyLnNhbXBsZXNQZXJQaXhlbCB8fCAocmFzdGVyLmJhbmRzID8gcmFzdGVyLmJhbmRzLmxlbmd0aCA6IDEpOwogIGNvbnN0IHBob3RvbWV0cmljID0gcmFzdGVyLnBob3RvbWV0cmljSW50ZXJwcmV0YXRpb247CgogIC8vIENoYW5uZWwgb3ZlcnJpZGUgcHJlY2VkZW5jZToKICAvLyBmb3JtYXQuaW1hZ2UucmdiYUNoYW5uZWxzID4gaGludHMucmVuZGVyQ2hhbm5lbHMgPiBkZWZhdWx0IGJlaGF2aW9yCiAgbGV0IGNoYW5uZWxzID0gbnVsbDsKICBpZiAoZm9ybWF0ICYmIGZvcm1hdC5pbWFnZSAmJiBBcnJheS5pc0FycmF5KGZvcm1hdC5pbWFnZS5yZ2JhQ2hhbm5lbHMpKSB7CiAgICBjaGFubmVscyA9IGZvcm1hdC5pbWFnZS5yZ2JhQ2hhbm5lbHMuc2xpY2UoKTsKICB9IGVsc2UgaWYgKGhpbnRzICYmIEFycmF5LmlzQXJyYXkoaGludHMucmVuZGVyQ2hhbm5lbHMpKSB7CiAgICBjaGFubmVscyA9IGhpbnRzLnJlbmRlckNoYW5uZWxzLnNsaWNlKCk7CiAgfQoKICBpZiAoY2hhbm5lbHMgJiYgY2hhbm5lbHMubGVuZ3RoID4gNCkgewogICAgd29ya2VyV2FybigKICAgICAgInJlbmRlckNoYW5uZWxzPjRfdG9fUkdCQV93b3JrZXIiLAogICAgICBgW3RpZmYtd29ya2VyXSBSZXF1ZXN0ZWQgJHtjaGFubmVscy5sZW5ndGh9IGNoYW5uZWxzIGZvciBSR0JBIG91dHB1dDsgb25seSA0IGNhbiBiZSByZXByZXNlbnRlZC4gRXh0cmEgY2hhbm5lbHMgd2lsbCBiZSBkcm9wcGVkLmAKICAgICk7CiAgICBjaGFubmVscy5zcGxpY2UoNCk7CiAgfQoKICAvLyBQYWxldHRlCiAgaWYgKHBob3RvbWV0cmljID09PSBQSS5QYWxldHRlICYmIHJhc3Rlci5jb2xvck1hcCkgewogICAgY29uc3QgaW5kaWNlcyA9IHJhc3Rlci5iYW5kc1swXTsKICAgIHJldHVybiBDb252ZXJ0ZXJzLlJHQkFmcm9tUGFsZXR0ZShpbmRpY2VzLCByYXN0ZXIuY29sb3JNYXApOwogIH0KCiAgLy8gV2hpdGVJc1plcm8gLyBCbGFja0lzWmVybwogIGlmICgocGhvdG9tZXRyaWMgPT09IFBJLldoaXRlSXNaZXJvIHx8IHBob3RvbWV0cmljID09PSBQSS5CbGFja0lzWmVybykgJiYgc3BwID49IDEpIHsKICAgIGNvbnN0IGJhbmQwID0gcmFzdGVyLmJhbmRzWzBdOwogICAgY29uc3QgYml0cyA9IHJhc3Rlci5iaXRzUGVyU2FtcGxlICYmIHJhc3Rlci5iaXRzUGVyU2FtcGxlWzBdICE9IG51bGwgPyByYXN0ZXIuYml0c1BlclNhbXBsZVswXSA6IDg7CiAgICBjb25zdCBtYXggPSBNYXRoLnBvdygyLCBiaXRzKSAtIDE7CiAgICBpZiAocGhvdG9tZXRyaWMgPT09IFBJLldoaXRlSXNaZXJvKSByZXR1cm4gQ29udmVydGVycy5SR0JBZnJvbVdoaXRlSXNaZXJvKGJhbmQwLCBtYXgpOwogICAgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21CbGFja0lzWmVybyhiYW5kMCwgbWF4KTsKICB9CgogIC8vIElmIGV4cGxpY2l0IGNoYW5uZWwgbWFwcGluZyBleGlzdHMsIHVzZSBpdCAocGxhbmFyIC0+IGludGVybGVhdmVkIC0+IFJHQkEpCiAgaWYgKGNoYW5uZWxzICYmIGNoYW5uZWxzLmxlbmd0aCA+PSAxKSB7CiAgICBjb25zdCB3aWR0aCA9IHJhc3Rlci53aWR0aDsKICAgIGNvbnN0IGhlaWdodCA9IHJhc3Rlci5oZWlnaHQ7CiAgICBjb25zdCBwaXhlbENvdW50ID0gd2lkdGggKiBoZWlnaHQ7CgogICAgaWYgKGNoYW5uZWxzLmxlbmd0aCA9PT0gMSkgewogICAgICBjb25zdCBiMCA9IHJhc3Rlci5iYW5kc1tjaGFubmVsc1swXV07CiAgICAgIGNvbnN0IGJpdHMgPSByYXN0ZXIuYml0c1BlclNhbXBsZSAmJiByYXN0ZXIuYml0c1BlclNhbXBsZVtjaGFubmVsc1swXV0gIT0gbnVsbCA/IHJhc3Rlci5iaXRzUGVyU2FtcGxlW2NoYW5uZWxzWzBdXSA6IDg7CiAgICAgIGNvbnN0IG1heCA9IE1hdGgucG93KDIsIGJpdHMpIC0gMTsKICAgICAgLy8gdHJlYXQgYXMgYmxhY2staXMtemVybyBmb3IgdmlzdWFsaXphdGlvbgogICAgICByZXR1cm4gQ29udmVydGVycy5SR0JBZnJvbUJsYWNrSXNaZXJvKGIwLCBtYXgpOwogICAgfQoKICAgIC8vIGJ1aWxkIGludGVybGVhdmVkIHRtcCBieXRlcyBieSBzaW1wbGUgY2xhbXBpbmcgKGJlc3QtZWZmb3J0KQogICAgY29uc3QgdG1wID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHBpeGVsQ291bnQgKiBjaGFubmVscy5sZW5ndGgpOwogICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwaXhlbENvdW50OyBpKyspIHsKICAgICAgY29uc3QgYmFzZSA9IGkgKiBjaGFubmVscy5sZW5ndGg7CiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY2hhbm5lbHMubGVuZ3RoOyBjKyspIHsKICAgICAgICBjb25zdCBiaSA9IGNoYW5uZWxzW2NdOwogICAgICAgIGNvbnN0IHYgPSAoYmkgIT0gbnVsbCAmJiBiaSA+PSAwICYmIGJpIDwgcmFzdGVyLmJhbmRzLmxlbmd0aCkgPyByYXN0ZXIuYmFuZHNbYmldW2ldIDogMDsKICAgICAgICB0bXBbYmFzZSArIGNdID0gdjsKICAgICAgfQogICAgfQoKICAgIC8vIElmIHdlIGFscmVhZHkgYnVpbHQgUkdCQSAoNGNoKSBhbmQgbm8gc3BlY2lhbCBwaG90b21ldHJpYywgcmV0dXJuIGRpcmVjdGx5LgogICAgaWYgKGNoYW5uZWxzLmxlbmd0aCA9PT0gNCAmJiBwaG90b21ldHJpYyAhPT0gUEkuWUNiQ3IgJiYgcGhvdG9tZXRyaWMgIT09IFBJLkNNWUsgJiYgcGhvdG9tZXRyaWMgIT09IFBJLkNJRUxhYikgewogICAgICByZXR1cm4gdG1wOwogICAgfQogICAgaWYgKHBob3RvbWV0cmljID09PSBQSS5ZQ2JDciAmJiBjaGFubmVscy5sZW5ndGggPj0gMykgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21ZQ2JDcih0bXApOwogICAgaWYgKHBob3RvbWV0cmljID09PSBQSS5DTVlLICYmIGNoYW5uZWxzLmxlbmd0aCA+PSA0KSByZXR1cm4gQ29udmVydGVycy5SR0JBZnJvbUNNWUsodG1wKTsKICAgIGlmIChwaG90b21ldHJpYyA9PT0gUEkuQ0lFTGFiICYmIGNoYW5uZWxzLmxlbmd0aCA+PSAzKSByZXR1cm4gQ29udmVydGVycy5SR0JBZnJvbUNJRUxhYih0bXApOwogICAgaWYgKGNoYW5uZWxzLmxlbmd0aCA9PT0gMykgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21SR0IodG1wKTsKCiAgICAvLyBmYWxsYmFjazogZm9yY2UgaW50byBSR0JBCiAgICBjb25zdCBvdXQgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkocGl4ZWxDb3VudCAqIDQpOwogICAgZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgcGl4ZWxDb3VudDsgaSsrLCBqICs9IDQpIHsKICAgICAgY29uc3QgYmFzZSA9IGkgKiBjaGFubmVscy5sZW5ndGg7CiAgICAgIG91dFtqXSA9IHRtcFtiYXNlXSB8fCAwOwogICAgICBvdXRbaiArIDFdID0gdG1wW2Jhc2UgKyAxXSB8fCAwOwogICAgICBvdXRbaiArIDJdID0gdG1wW2Jhc2UgKyAyXSB8fCAwOwogICAgICBvdXRbaiArIDNdID0gKGNoYW5uZWxzLmxlbmd0aCA+PSA0KSA/ICh0bXBbYmFzZSArIDNdIHx8IDI1NSkgOiAyNTU7CiAgICB9CiAgICByZXR1cm4gb3V0OwogIH0KCiAgLy8gUkdCIC8gWUNiQ3IgLyBDTVlLIC8gTGFiIGRlZmF1bHRzCiAgaWYgKHBob3RvbWV0cmljID09PSBQSS5SR0IgJiYgc3BwID49IDMpIHsKICAgIGNvbnN0IHIgPSByYXN0ZXIuYmFuZHNbMF07CiAgICBjb25zdCBnID0gcmFzdGVyLmJhbmRzWzFdOwogICAgY29uc3QgYiA9IHJhc3Rlci5iYW5kc1syXTsKICAgIGNvbnN0IGEgPSBzcHAgPj0gNCA/IHJhc3Rlci5iYW5kc1szXSA6IG51bGw7CiAgICByZXR1cm4gQ29udmVydGVycy5SR0JBZnJvbVJHQihyLCBnLCBiLCBhKTsKICB9CgogIGlmIChwaG90b21ldHJpYyA9PT0gUEkuWUNiQ3IgJiYgc3BwID49IDMpIHsKICAgIGNvbnN0IHkgPSByYXN0ZXIuYmFuZHNbMF07CiAgICBjb25zdCBjYiA9IHJhc3Rlci5iYW5kc1sxXTsKICAgIGNvbnN0IGNyID0gcmFzdGVyLmJhbmRzWzJdOwogICAgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21ZQ2JDcih5LCBjYiwgY3IpOwogIH0KCiAgaWYgKHBob3RvbWV0cmljID09PSBQSS5DTVlLICYmIHNwcCA+PSA0KSB7CiAgICBjb25zdCBjID0gcmFzdGVyLmJhbmRzWzBdOwogICAgY29uc3QgbSA9IHJhc3Rlci5iYW5kc1sxXTsKICAgIGNvbnN0IHkgPSByYXN0ZXIuYmFuZHNbMl07CiAgICBjb25zdCBrID0gcmFzdGVyLmJhbmRzWzNdOwogICAgcmV0dXJuIENvbnZlcnRlcnMuUkdCQWZyb21DTVlLKGMsIG0sIHksIGspOwogIH0KCiAgaWYgKHBob3RvbWV0cmljID09PSBQSS5DSUVMYWIgJiYgc3BwID49IDMpIHsKICAgIGNvbnN0IGwgPSByYXN0ZXIuYmFuZHNbMF07CiAgICBjb25zdCBhID0gcmFzdGVyLmJhbmRzWzFdOwogICAgY29uc3QgYiA9IHJhc3Rlci5iYW5kc1syXTsKICAgIHJldHVybiBDb252ZXJ0ZXJzLlJHQkFmcm9tQ0lFTGFiKGwsIGEsIGIpOwogIH0KCiAgLy8gRmFsbGJhY2sgZ3JheXNjYWxlCiAgY29uc3QgYmFuZDAgPSByYXN0ZXIuYmFuZHNbMF07CiAgY29uc3QgYml0cyA9IHJhc3Rlci5iaXRzUGVyU2FtcGxlICYmIHJhc3Rlci5iaXRzUGVyU2FtcGxlWzBdICE9IG51bGwgPyByYXN0ZXIuYml0c1BlclNhbXBsZVswXSA6IDg7CiAgY29uc3QgbWF4ID0gTWF0aC5wb3coMiwgYml0cykgLSAxOwogIHJldHVybiBDb252ZXJ0ZXJzLlJHQkFmcm9tQmxhY2tJc1plcm8oYmFuZDAsIG1heCk7Cn0KCmZ1bmN0aW9uIHBhY2tDYW5vbmljYWxSR0JBKHJnYmE4LCB3aWR0aCwgaGVpZ2h0LCBmb3JtYXQpIHsKICBjb25zdCBncHUgPSAoZm9ybWF0ICYmIGZvcm1hdC5ncHUpIHx8IHt9OwogIGNvbnN0IHByZWZlclJHQkE4ID0gZ3B1LnByZWZlclJHQkE4ICE9PSBmYWxzZTsKICBjb25zdCBmb3JjZVJHQkExNkYgPSAhIWdwdS5mb3JjZVJHQkExNkY7CgogIC8vIFJHQkE4IGlzIHRoZSBkZWZhdWx0IGZvciBpbWFnZS1tb2RlIHVubGVzcyBmb3JjZWQgdG8gMTZGCiAgaWYgKHByZWZlclJHQkE4ICYmICFmb3JjZVJHQkExNkYpIHsKICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDhBcnJheShyZ2JhOC5idWZmZXIsIHJnYmE4LmJ5dGVPZmZzZXQsIHJnYmE4LmJ5dGVMZW5ndGgpOwogICAgcmV0dXJuIHsKICAgICAgd2lkdGgsCiAgICAgIGhlaWdodCwKICAgICAgbW9kZTogImltYWdlIiwKICAgICAgY2hhbm5lbENvdW50OiA0LAogICAgICBwYWNrczogW3sKICAgICAgICBmb3JtYXQ6ICJSR0JBOCIsCiAgICAgICAgZGF0YTogewogICAgICAgICAgY3RvcjogIlVpbnQ4QXJyYXkiLAogICAgICAgICAgYnVmZmVyOiBkYXRhLmJ1ZmZlciwKICAgICAgICAgIGJ5dGVPZmZzZXQ6IGRhdGEuYnl0ZU9mZnNldCwKICAgICAgICAgIGxlbmd0aDogZGF0YS5sZW5ndGgsCiAgICAgICAgfSwKICAgICAgICBjaGFubmVsczogWzAsIDEsIDIsIDNdLAogICAgICAgIG5vcm1hbGl6ZWQ6IGZhbHNlLAogICAgICAgIHNjYWxlOiBbMSwgMSwgMSwgMV0sCiAgICAgICAgb2Zmc2V0OiBbMCwgMCwgMCwgMF0sCiAgICAgIH1dLAogICAgfTsKICB9CgogIC8vIFJHQkExNkYgaW1hZ2UtbW9kZTogY29udmVydCBieXRlcyAtPiBmbG9hdCAtPiBoYWxmCiAgY29uc3QgcHggPSB3aWR0aCAqIGhlaWdodDsKICBjb25zdCBvdXQgPSBuZXcgVWludDE2QXJyYXkocHggKiA0KTsKICBmb3IgKGxldCBpID0gMDsgaSA8IG91dC5sZW5ndGg7IGkrKykgewogICAgLy8gc3RvcmUgMC4uMjU1IGFzIGZsb2F0IDAuLjI1NSAoaWRlbnRpdHkpOyBzaGFkZXIgY2FuIHRyZWF0IGFzIGxpbmVhciBkaXNwbGF5CiAgICBvdXRbaV0gPSBmMzJUb0YxNkJpdHMocmdiYThbaV0pOwogIH0KCiAgcmV0dXJuIHsKICAgIHdpZHRoLAogICAgaGVpZ2h0LAogICAgbW9kZTogImltYWdlIiwKICAgIGNoYW5uZWxDb3VudDogNCwKICAgIHBhY2tzOiBbewogICAgICBmb3JtYXQ6ICJSR0JBMTZGIiwKICAgICAgZGF0YTogewogICAgICAgIGN0b3I6ICJVaW50MTZBcnJheSIsCiAgICAgICAgYnVmZmVyOiBvdXQuYnVmZmVyLAogICAgICAgIGJ5dGVPZmZzZXQ6IDAsCiAgICAgICAgbGVuZ3RoOiBvdXQubGVuZ3RoLAogICAgICB9LAogICAgICBjaGFubmVsczogWzAsIDEsIDIsIDNdLAogICAgICBub3JtYWxpemVkOiBmYWxzZSwKICAgICAgc2NhbGU6IFsxLCAxLCAxLCAxXSwKICAgICAgb2Zmc2V0OiBbMCwgMCwgMCwgMF0sCiAgICB9XSwKICB9Owp9CgpmdW5jdGlvbiBwYWNrQmFuZHNBc0RhdGEocmFzdGVyLCBmb3JtYXQpIHsKICBjb25zdCBncHUgPSAoZm9ybWF0ICYmIGZvcm1hdC5ncHUpIHx8IHt9OwogIGNvbnN0IHByZWZlclJHQkE4ID0gZ3B1LnByZWZlclJHQkE4ICE9PSBmYWxzZTsKICBjb25zdCBmb3JjZVJHQkExNkYgPSAhIWdwdS5mb3JjZVJHQkExNkY7CgogIGNvbnN0IHdpZHRoID0gcmFzdGVyLndpZHRoOwogIGNvbnN0IGhlaWdodCA9IHJhc3Rlci5oZWlnaHQ7CiAgY29uc3QgcGl4ZWxDb3VudCA9IHdpZHRoICogaGVpZ2h0OwoKICBjb25zdCBiYW5kQ291bnQgPSByYXN0ZXIuYmFuZHMgPyByYXN0ZXIuYmFuZHMubGVuZ3RoIDogMDsKICBjb25zdCBjaGFubmVscyA9IChmb3JtYXQgJiYgQXJyYXkuaXNBcnJheShmb3JtYXQuY2hhbm5lbHMpICYmIGZvcm1hdC5jaGFubmVscy5sZW5ndGgpCiAgICA/IGZvcm1hdC5jaGFubmVscy5zbGljZSgpCiAgICA6IFsuLi5BcnJheShiYW5kQ291bnQpLmtleXMoKV07CiAgY29uc3QgY2hhbm5lbENvdW50ID0gY2hhbm5lbHMuZmlsdGVyKChjKSA9PiBjICE9IG51bGwgJiYgYyA+PSAwKS5sZW5ndGg7CgogIC8vIERlY2lkZSBSR0JBOCB2cyBSR0JBMTZGCiAgY29uc3QgYWxsVTggPSBjaGFubmVscy5ldmVyeSgoYykgPT4gewogICAgY29uc3QgYiA9IHJhc3Rlci5iYW5kc1tjXTsKICAgIHJldHVybiBiIGluc3RhbmNlb2YgVWludDhBcnJheSB8fCBiIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXk7CiAgfSk7CiAgY29uc3QgdXNlUkdCQTggPSBwcmVmZXJSR0JBOCAmJiAhZm9yY2VSR0JBMTZGICYmIGFsbFU4OwoKICBjb25zdCBwYWNrcyA9IFtdOwogIGZvciAobGV0IHAgPSAwOyBwIDwgY2hhbm5lbHMubGVuZ3RoOyBwICs9IDQpIHsKICAgIGNvbnN0IHBhY2tDaCA9IFsKICAgICAgY2hhbm5lbHNbcF0gPz8gLTEsCiAgICAgIGNoYW5uZWxzW3AgKyAxXSA/PyAtMSwKICAgICAgY2hhbm5lbHNbcCArIDJdID8/IC0xLAogICAgICBjaGFubmVsc1twICsgM10gPz8gLTEsCiAgICBdOwoKICAgIGlmICh1c2VSR0JBOCkgewogICAgICBjb25zdCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkocGl4ZWxDb3VudCAqIDQpOwogICAgICBmb3IgKGxldCBpID0gMCwgaiA9IDA7IGkgPCBwaXhlbENvdW50OyBpKyssIGogKz0gNCkgewogICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7CiAgICAgICAgICBjb25zdCBiaSA9IHBhY2tDaFtrXTsKICAgICAgICAgIGRhdGFbaiArIGtdID0gKGJpID49IDAgJiYgYmkgPCByYXN0ZXIuYmFuZHMubGVuZ3RoKSA/IHJhc3Rlci5iYW5kc1tiaV1baV0gOiAwOwogICAgICAgIH0KICAgICAgfQogICAgICBwYWNrcy5wdXNoKHsKICAgICAgICBmb3JtYXQ6ICJSR0JBOCIsCiAgICAgICAgZGF0YTogeyBjdG9yOiAiVWludDhBcnJheSIsIGJ1ZmZlcjogZGF0YS5idWZmZXIsIGJ5dGVPZmZzZXQ6IDAsIGxlbmd0aDogZGF0YS5sZW5ndGggfSwKICAgICAgICBjaGFubmVsczogcGFja0NoLAogICAgICAgIG5vcm1hbGl6ZWQ6IGZhbHNlLAogICAgICAgIHNjYWxlOiBbMSwgMSwgMSwgMV0sCiAgICAgICAgb2Zmc2V0OiBbMCwgMCwgMCwgMF0sCiAgICAgIH0pOwogICAgICBjb250aW51ZTsKICAgIH0KCiAgICAvLyBSR0JBMTZGIHBhY2tpbmcgd2l0aCAiYXV0byBub3JtYWxpemF0aW9uIGlmIG5lZWRlZCIKICAgIC8vIElmIGludGVnZXIgbWF4IGV4Y2VlZHMgaGFsZiBmbG9hdCByYW5nZSAoNjU1MDQpLCBub3JtYWxpemUgdG8gWzAuLjFdIHVzaW5nIHNjYWxlPW1heC4KICAgIGNvbnN0IGRhdGEgPSBuZXcgVWludDE2QXJyYXkocGl4ZWxDb3VudCAqIDQpOwogICAgY29uc3Qgc2NhbGUgPSBbMSwgMSwgMSwgMV07CiAgICBjb25zdCBvZmZzZXQgPSBbMCwgMCwgMCwgMF07CgogICAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHsKICAgICAgY29uc3QgYmkgPSBwYWNrQ2hba107CiAgICAgIGlmIChiaSA8IDAgfHwgYmkgPj0gcmFzdGVyLmJhbmRzLmxlbmd0aCkgY29udGludWU7CgogICAgICBjb25zdCBiaXRzID0gcmFzdGVyLmJpdHNQZXJTYW1wbGUgJiYgcmFzdGVyLmJpdHNQZXJTYW1wbGVbYmldICE9IG51bGwgPyByYXN0ZXIuYml0c1BlclNhbXBsZVtiaV0gOiAocmFzdGVyLmJpdHNQZXJTYW1wbGUgPyByYXN0ZXIuYml0c1BlclNhbXBsZVswXSA6IDgpOwogICAgICBjb25zdCBiYW5kID0gcmFzdGVyLmJhbmRzW2JpXTsKICAgICAgY29uc3QgaXNGbG9hdCA9IGJhbmQgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkgfHwgYmFuZCBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheTsKCiAgICAgIGlmICghaXNGbG9hdCkgewogICAgICAgIGNvbnN0IG1heCA9IGJpdHMgPiAwID8gKE1hdGgucG93KDIsIGJpdHMpIC0gMSkgOiA2NTUzNTsKICAgICAgICBpZiAobWF4ID4gNjU1MDQpIHsKICAgICAgICAgIC8vIG5vcm1hbGl6ZSB0byAwLi4xIGZvciBzYWZlIGhhbGYgcmFuZ2U7IHNoYWRlciByZWNvbnN0cnVjdHMgd2l0aCB2YWx1ZSA9IHNhbXBsZSAqIHNjYWxlICsgb2Zmc2V0CiAgICAgICAgICBzY2FsZVtrXSA9IG1heDsKICAgICAgICAgIG9mZnNldFtrXSA9IDA7CiAgICAgICAgfQogICAgICB9CiAgICB9CgogICAgbGV0IGNsYW1wZWQgPSBmYWxzZTsKICAgIGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IHBpeGVsQ291bnQ7IGkrKywgaiArPSA0KSB7CiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7CiAgICAgICAgY29uc3QgYmkgPSBwYWNrQ2hba107CiAgICAgICAgbGV0IHYgPSAoYmkgPj0gMCAmJiBiaSA8IHJhc3Rlci5iYW5kcy5sZW5ndGgpID8gTnVtYmVyKHJhc3Rlci5iYW5kc1tiaV1baV0pIDogMDsKCiAgICAgICAgLy8gYXBwbHkgbm9ybWFsaXphdGlvbiAoc3RvcmUgdi9zY2FsZSkKICAgICAgICBpZiAoc2NhbGVba10gIT09IDEpIHYgPSB2IC8gc2NhbGVba107CgogICAgICAgIC8vIGNsYW1wIHRvIGhhbGYtZmxvYXQgZmluaXRlIHJhbmdlIHdoZW4gc3RvcmluZyByYXcgZmxvYXRzCiAgICAgICAgaWYgKHYgPiA2NTUwNCkgeyB2ID0gNjU1MDQ7IGNsYW1wZWQgPSB0cnVlOyB9CiAgICAgICAgZWxzZSBpZiAodiA8IC02NTUwNCkgeyB2ID0gLTY1NTA0OyBjbGFtcGVkID0gdHJ1ZTsgfQoKICAgICAgICBkYXRhW2ogKyBrXSA9IGYzMlRvRjE2Qml0cyh2KTsKICAgICAgfQogICAgfQoKICAgIGlmIChjbGFtcGVkKSB7CiAgICAgIHdvcmtlcldhcm4oCiAgICAgICAgImdwdVBhY2tfZjE2X2NsYW1wX3dvcmtlciIsCiAgICAgICAgIlt0aWZmLXdvcmtlcl0gU29tZSB2YWx1ZXMgZXhjZWVkZWQgUkdCQTE2RiBmaW5pdGUgcmFuZ2UgYW5kIHdlcmUgY2xhbXBlZC4gQ29uc2lkZXIgbm9ybWFsaXphdGlvbiB2aWEgZm9ybWF0LmdwdS5mb3JjZVJHQkExNkYgKyByZWx5aW5nIG9uIHNjYWxlL29mZnNldC4iCiAgICAgICk7CiAgICB9CgogICAgcGFja3MucHVzaCh7CiAgICAgIGZvcm1hdDogIlJHQkExNkYiLAogICAgICBkYXRhOiB7IGN0b3I6ICJVaW50MTZBcnJheSIsIGJ1ZmZlcjogZGF0YS5idWZmZXIsIGJ5dGVPZmZzZXQ6IDAsIGxlbmd0aDogZGF0YS5sZW5ndGggfSwKICAgICAgY2hhbm5lbHM6IHBhY2tDaCwKICAgICAgbm9ybWFsaXplZDogZmFsc2UsCiAgICAgIHNjYWxlLAogICAgICBvZmZzZXQsCiAgICB9KTsKICB9CgogIHJldHVybiB7IHdpZHRoLCBoZWlnaHQsIG1vZGU6ICJkYXRhIiwgY2hhbm5lbENvdW50LCBwYWNrcyB9Owp9Cgphc3luYyBmdW5jdGlvbiBkZWNvZGVSYXN0ZXJGcm9tQXJyYXlCdWZmZXIoYWIsIGhpbnRzKSB7CiAgY29uc3QgdGlmZiA9IGF3YWl0IGZyb21BcnJheUJ1ZmZlcihhYik7CiAgY29uc3QgY291bnQgPSBhd2FpdCB0aWZmLmdldEltYWdlQ291bnQoKTsKICBsZXQgaW1hZ2VJbmRleCA9IGhpbnRzICYmIHR5cGVvZiBoaW50cy5pbWFnZUluZGV4ID09PSAibnVtYmVyIiA/IGhpbnRzLmltYWdlSW5kZXggOiBudWxsOwoKICBpZiAoY291bnQgIT09IDEpIHsKICAgIGlmIChpbWFnZUluZGV4ID09IG51bGwpIHsKICAgICAgdGhyb3cgbmV3IEVycm9yKGBbUmF3VGlmZlBsdWdpbl0gVElGRiBoYXMgJHtjb3VudH0gaW1hZ2VzOyBwcm92aWRlIHJhd1RpZmYuaGludHMuaW1hZ2VJbmRleCB0byBkZWNvZGUuYCk7CiAgICB9CiAgICBpZiAoaW1hZ2VJbmRleCA8IDAgfHwgaW1hZ2VJbmRleCA+PSBjb3VudCkgewogICAgICB0aHJvdyBuZXcgRXJyb3IoYFtSYXdUaWZmUGx1Z2luXSBpbWFnZUluZGV4ICR7aW1hZ2VJbmRleH0gb3V0IG9mIHJhbmdlICgwLi4ke2NvdW50IC0gMX0pLmApOwogICAgfQogIH0gZWxzZSB7CiAgICBpbWFnZUluZGV4ID0gMDsKICB9CgogIGNvbnN0IGltZyA9IGF3YWl0IHRpZmYuZ2V0SW1hZ2UoaW1hZ2VJbmRleCk7CiAgY29uc3Qgd2lkdGggPSBpbWcuZ2V0V2lkdGgoKTsKICBjb25zdCBoZWlnaHQgPSBpbWcuZ2V0SGVpZ2h0KCk7CiAgY29uc3Qgc2FtcGxlc1BlclBpeGVsID0gaW1nLmdldFNhbXBsZXNQZXJQaXhlbCgpOwogIGNvbnN0IGJpdHNQZXJTYW1wbGUgPSBnZXRUYWcoaW1nLCAiQml0c1BlclNhbXBsZSIpOwogIGNvbnN0IHNhbXBsZUZvcm1hdCA9IGdldFRhZyhpbWcsICJTYW1wbGVGb3JtYXQiKTsKICBjb25zdCBwaG90b21ldHJpY0ludGVycHJldGF0aW9uID0gZ2V0VGFnKGltZywgIlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24iKTsKICBjb25zdCBjb2xvck1hcCA9IChhd2FpdCBsb2FkVGFnKGltZywgIkNvbG9yTWFwIikpIHx8IG51bGw7CiAgY29uc3QgZmlsZURpcmVjdG9yeSA9IGltZy5nZXRGaWxlRGlyZWN0b3J5KCkudG9PYmplY3QoKTsKCiAgY29uc3QgZGVjb2RlT3B0cyA9IE9iamVjdC5hc3NpZ24oeyBpbnRlcmxlYXZlOiBmYWxzZSB9LCAoaGludHMgJiYgaGludHMuZGVjb2RlKSB8fCB7fSk7CiAgY29uc3QgcmFzdGVycyA9IG5vcm1hbGl6ZVJhc3RlcnMoYXdhaXQgaW1nLnJlYWRSYXN0ZXJzKHsKICAgIC4uLmRlY29kZU9wdHMsCiAgICBwb29sOiBudWxsLCAvLyBhbHJlYWR5IGluIHdvcmtlciwgZG8gbm90IG5lc3QKICB9KSk7CgogIGNvbnN0IGJhbmRzID0gcmFzdGVycy5tYXAoKGFycikgPT4gKHsKICAgIGN0b3I6IGFyci5jb25zdHJ1Y3RvciAmJiBhcnIuY29uc3RydWN0b3IubmFtZSA/IGFyci5jb25zdHJ1Y3Rvci5uYW1lIDogIlVpbnQ4QXJyYXkiLAogICAgYnVmZmVyOiBhcnIuYnVmZmVyLAogICAgYnl0ZU9mZnNldDogYXJyLmJ5dGVPZmZzZXQsCiAgICBsZW5ndGg6IGFyci5sZW5ndGgsCiAgfSkpOwoKICByZXR1cm4gewogICAgd2lkdGgsCiAgICBoZWlnaHQsCiAgICBiYW5kcywKICAgIHNhbXBsZXNQZXJQaXhlbDogTWF0aC5tYXgoc2FtcGxlc1BlclBpeGVsLCBiYW5kcy5sZW5ndGgpLAogICAgYml0c1BlclNhbXBsZTogYml0c1BlclNhbXBsZSA/IEFycmF5LmZyb20oYml0c1BlclNhbXBsZSkgOiBbOF0sCiAgICBzYW1wbGVGb3JtYXQ6IHNhbXBsZUZvcm1hdCA/IEFycmF5LmZyb20oc2FtcGxlRm9ybWF0KSA6IG51bGwsCiAgICBwaG90b21ldHJpY0ludGVycHJldGF0aW9uLAogICAgY29sb3JNYXAsCiAgICBmaWxlRGlyZWN0b3J5LAogIH07Cn0KCmFzeW5jIGZ1bmN0aW9uIGRlY29kZUFuZFJlbmRlckltYWdlQml0bWFwRnJvbUFycmF5QnVmZmVyKGFiLCBoaW50cykgewogIGNvbnN0IHJhc3RlclBheWxvYWQgPSBhd2FpdCBkZWNvZGVSYXN0ZXJGcm9tQXJyYXlCdWZmZXIoYWIsIGhpbnRzKTsKICBjb25zdCByYXN0ZXIgPSBPYmplY3QuYXNzaWduKHt9LCByYXN0ZXJQYXlsb2FkLCB7IGJhbmRzOiByZXZpdmVCYW5kcyhyYXN0ZXJQYXlsb2FkLmJhbmRzKSB9KTsKICBjb25zdCBmb3JtYXQgPSByZXNvbHZlRm9ybWF0RnJvbUhpbnRzKGhpbnRzKTsKCiAgLy8gaW1hZ2UtbW9kZSByZW5kZXIgb25seSBmb3IgSW1hZ2VCaXRtYXAgcGF0aAogIGNvbnN0IHJnYmEgPSByYXN0ZXJUb1JHQkE4X0ltYWdlTW9kZShyYXN0ZXIsIGhpbnRzLCBmb3JtYXQpOwoKICAvLyBQcmVmZXIgT2Zmc2NyZWVuQ2FudmFzIC0+IEltYWdlQml0bWFwIGlmIGF2YWlsYWJsZSBpbiB0aGlzIHdvcmtlci4KICBpZiAodHlwZW9mIE9mZnNjcmVlbkNhbnZhcyA9PT0gImZ1bmN0aW9uIikgewogICAgY29uc3QgY2FudmFzID0gbmV3IE9mZnNjcmVlbkNhbnZhcyhyYXN0ZXIud2lkdGgsIHJhc3Rlci5oZWlnaHQpOwogICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoIjJkIiwgeyB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWUgfSk7CiAgICBjb25zdCBpbWdEYXRhID0gbmV3IEltYWdlRGF0YShyZ2JhLCByYXN0ZXIud2lkdGgsIHJhc3Rlci5oZWlnaHQpOwogICAgY3R4LnB1dEltYWdlRGF0YShpbWdEYXRhLCAwLCAwKTsKICAgIGNvbnN0IGJtcCA9IGNhbnZhcy50cmFuc2ZlclRvSW1hZ2VCaXRtYXAoKTsKICAgIHJldHVybiB7IGtpbmQ6ICJpbWFnZUJpdG1hcCIsIGltYWdlQml0bWFwOiBibXAgfTsKICB9CgogIC8vIEZhbGxiYWNrOiByZXR1cm4gUkdCQSBieXRlcyBhbmQgbGV0IG1haW4gdGhyZWFkIGNyZWF0ZSBhbiBJbWFnZUJpdG1hcC4KICByZXR1cm4gewogICAga2luZDogInJnYmE4IiwKICAgIHdpZHRoOiByYXN0ZXIud2lkdGgsCiAgICBoZWlnaHQ6IHJhc3Rlci5oZWlnaHQsCiAgICByZ2JhQnVmZmVyOiByZ2JhLmJ1ZmZlciwKICAgIHJnYmFCeXRlT2Zmc2V0OiByZ2JhLmJ5dGVPZmZzZXQsCiAgICByZ2JhTGVuZ3RoOiByZ2JhLmxlbmd0aCwKICB9Owp9CgpmdW5jdGlvbiByYXN0ZXJQYXlsb2FkVG9UZXh0dXJlU2V0KHJhc3RlclBheWxvYWQsIGhpbnRzKSB7CiAgY29uc3QgcmFzdGVyID0gT2JqZWN0LmFzc2lnbih7fSwgcmFzdGVyUGF5bG9hZCwgeyBiYW5kczogcmV2aXZlQmFuZHMocmFzdGVyUGF5bG9hZC5iYW5kcykgfSk7CiAgY29uc3QgZm9ybWF0ID0gcmVzb2x2ZUZvcm1hdEZyb21IaW50cyhoaW50cykgfHwge307CiAgY29uc3QgaW50ZXJwcmV0YXRpb24gPSBmb3JtYXQuaW50ZXJwcmV0YXRpb24gfHwgImF1dG8iOwogIGNvbnN0IGluZmVycmVkID0gaW5mZXJGcm9tVElGRlRhZ3MocmFzdGVyKTsKICBjb25zdCBtb2RlID0gKGludGVycHJldGF0aW9uID09PSAiYXV0byIpID8gaW5mZXJyZWQgOiBpbnRlcnByZXRhdGlvbjsKCiAgaWYgKG1vZGUgPT09ICJpbWFnZSIpIHsKICAgIGNvbnN0IHJnYmEgPSByYXN0ZXJUb1JHQkE4X0ltYWdlTW9kZShyYXN0ZXIsIGhpbnRzLCBmb3JtYXQpOwogICAgcmV0dXJuIHBhY2tDYW5vbmljYWxSR0JBKHJnYmEsIHJhc3Rlci53aWR0aCwgcmFzdGVyLmhlaWdodCwgZm9ybWF0KTsKICB9CiAgcmV0dXJuIHBhY2tCYW5kc0FzRGF0YShyYXN0ZXIsIGZvcm1hdCk7Cn0KCmFzeW5jIGZ1bmN0aW9uIGRlY29kZUFuZFBhY2tHcHVUZXh0dXJlU2V0RnJvbUFycmF5QnVmZmVyKGFiLCBoaW50cykgewogIGNvbnN0IHJhc3RlclBheWxvYWQgPSBhd2FpdCBkZWNvZGVSYXN0ZXJGcm9tQXJyYXlCdWZmZXIoYWIsIGhpbnRzKTsKICBjb25zdCB0ZXhTZXQgPSByYXN0ZXJQYXlsb2FkVG9UZXh0dXJlU2V0KHJhc3RlclBheWxvYWQsIGhpbnRzKTsKICByZXR1cm4geyByYXN0ZXJQYXlsb2FkLCB0ZXhTZXQgfTsKfQoKZnVuY3Rpb24gY29sbGVjdFRyYW5zZmVyc0ZvclJhc3RlclBheWxvYWQocmFzdGVyUGF5bG9hZCkgewogIHJldHVybiByYXN0ZXJQYXlsb2FkLmJhbmRzLm1hcCgoYikgPT4gYi5idWZmZXIpOwp9CgpmdW5jdGlvbiBjb2xsZWN0VHJhbnNmZXJzRm9yVGV4dHVyZVNldCh0ZXhTZXQpIHsKICBjb25zdCB0cmFuc2ZlcnMgPSBbXTsKICBmb3IgKGNvbnN0IHAgb2YgdGV4U2V0LnBhY2tzKSB7CiAgICB0cmFuc2ZlcnMucHVzaChwLmRhdGEuYnVmZmVyKTsKICB9CiAgcmV0dXJuIHRyYW5zZmVyczsKfQoKd29ya2VyUmVmLm9ubWVzc2FnZSA9IGFzeW5jIChldikgPT4gewogIGNvbnN0IG1zZyA9IGV2LmRhdGEgfHwge307CiAgY29uc3QgaWQgPSBtc2cuaWQ7CiAgY29uc3Qgb3AgPSBtc2cub3A7CiAgY29uc3QgcGF5bG9hZCA9IG1zZy5wYXlsb2FkIHx8IHt9OwogIHRyeSB7CiAgICBpZiAob3AgPT09ICJkZWNvZGVSYXN0ZXIiKSB7CiAgICAgIGNvbnN0IGFiID0gcGF5bG9hZC5idWZmZXI7CiAgICAgIGNvbnN0IGhpbnRzID0gcGF5bG9hZC5oaW50cyB8fCB7fTsKICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVjb2RlUmFzdGVyRnJvbUFycmF5QnVmZmVyKGFiLCBoaW50cyk7CiAgICAgIHdvcmtlclJlZi5wb3N0TWVzc2FnZSh7IGlkLCBvazogdHJ1ZSwgcmVzdWx0IH0sIGNvbGxlY3RUcmFuc2ZlcnNGb3JSYXN0ZXJQYXlsb2FkKHJlc3VsdCkpOwogICAgICByZXR1cm47CiAgICB9CgogICAgaWYgKG9wID09PSAiZGVjb2RlQW5kUmVuZGVySW1hZ2VCaXRtYXAiKSB7CiAgICAgIGNvbnN0IGFiID0gcGF5bG9hZC5idWZmZXI7CiAgICAgIGNvbnN0IGhpbnRzID0gcGF5bG9hZC5oaW50cyB8fCB7fTsKICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVjb2RlQW5kUmVuZGVySW1hZ2VCaXRtYXBGcm9tQXJyYXlCdWZmZXIoYWIsIGhpbnRzKTsKCiAgICAgIGlmIChyZXN1bHQua2luZCA9PT0gImltYWdlQml0bWFwIikgewogICAgICAgIHdvcmtlclJlZi5wb3N0TWVzc2FnZSh7IGlkLCBvazogdHJ1ZSwgcmVzdWx0IH0sIFtyZXN1bHQuaW1hZ2VCaXRtYXBdKTsKICAgICAgfSBlbHNlIHsKICAgICAgICB3b3JrZXJSZWYucG9zdE1lc3NhZ2UoeyBpZCwgb2s6IHRydWUsIHJlc3VsdCB9LCBbcmVzdWx0LnJnYmFCdWZmZXJdKTsKICAgICAgfQogICAgICByZXR1cm47CiAgICB9CgogICAgaWYgKG9wID09PSAiZGVjb2RlQW5kUGFja0dwdVRleHR1cmVTZXQiKSB7CiAgICAgIGNvbnN0IGFiID0gcGF5bG9hZC5idWZmZXI7CiAgICAgIGNvbnN0IGhpbnRzID0gcGF5bG9hZC5oaW50cyB8fCB7fTsKICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVjb2RlQW5kUGFja0dwdVRleHR1cmVTZXRGcm9tQXJyYXlCdWZmZXIoYWIsIGhpbnRzKTsKCiAgICAgIGNvbnN0IHRyYW5zZmVycyA9IFsKICAgICAgICAuLi5jb2xsZWN0VHJhbnNmZXJzRm9yUmFzdGVyUGF5bG9hZChyZXN1bHQucmFzdGVyUGF5bG9hZCksCiAgICAgICAgLi4uY29sbGVjdFRyYW5zZmVyc0ZvclRleHR1cmVTZXQocmVzdWx0LnRleFNldCksCiAgICAgIF07CiAgICAgIHdvcmtlclJlZi5wb3N0TWVzc2FnZSh7IGlkLCBvazogdHJ1ZSwgcmVzdWx0IH0sIHRyYW5zZmVycyk7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICBpZiAob3AgPT09ICJyYXN0ZXJUb0dwdVRleHR1cmVTZXQiKSB7CiAgICAgIGNvbnN0IHJhc3RlciA9IHBheWxvYWQucmFzdGVyOwogICAgICBjb25zdCBoaW50cyA9IHBheWxvYWQuaGludHMgfHwge307CiAgICAgIGNvbnN0IHRleFNldCA9IHJhc3RlclBheWxvYWRUb1RleHR1cmVTZXQocmFzdGVyLCBoaW50cyk7CiAgICAgIHdvcmtlclJlZi5wb3N0TWVzc2FnZSh7IGlkLCBvazogdHJ1ZSwgcmVzdWx0OiB0ZXhTZXQgfSwgY29sbGVjdFRyYW5zZmVyc0ZvclRleHR1cmVTZXQodGV4U2V0KSk7CiAgICAgIHJldHVybjsKICAgIH0KCiAgICB0aHJvdyBuZXcgRXJyb3IoYFtSYXdUaWZmUGx1Z2luXSBVbmtub3duIHdvcmtlciBvcDogJHtvcH1gKTsKICB9IGNhdGNoIChlKSB7CiAgICB3b3JrZXJSZWYucG9zdE1lc3NhZ2UoeyBpZCwgb2s6IGZhbHNlLCBlcnJvcjogZXJyb3JUb1BsYWluKGUpIH0pOwogIH0KfTs=", import.meta.url), {
      type: "module"
    })
  }, m = c.RawTiffPlugin || Jg(c, {
    workerPool: b,
    copyRasters: A
  });
  let y = 0;
  const X = class X extends c.TileSource {
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
      return this._sharedPool = this._sharedPool ?? new dg(), this._sharedPool;
    }
    static set sharedPool(l) {
      this._sharedPool = l;
    }
    constructor(l, e = { logLatency: !1 }) {
      super();
      let d = this;
      this.input = l, this.options = e, this.channel = (l == null ? void 0 : l.channel) ?? null, this._ready = !1, this._pool = X.sharedPool, this._tileSize = 256, this._tsCounter = y, y += 1, l.GeoTIFF && l.GeoTIFFImages ? (this.promises = {
        GeoTIFF: Promise.resolve(l.GeoTIFF),
        GeoTIFFImages: Promise.resolve(l.GeoTIFFImages),
        ready: new ig()
      }, this.GeoTIFF = l.GeoTIFF, this.imageCount = l.GeoTIFFImages.length, this.GeoTIFFImages = l.GeoTIFFImages, this.GeoTIFFAllImages = l.GeoTIFFAllImages ?? l.GeoTIFFImages, this.setupLevels()) : (this.promises = {
        GeoTIFF: eg(l, e.GeoTIFFOptions),
        GeoTIFFImages: new ig(),
        ready: new ig()
      }, this.promises.GeoTIFF.then((o) => (d.GeoTIFF = o, o.getImageCount())).then((o) => {
        d.imageCount = o;
        let Z = [...Array(o).keys()].map((W) => d.GeoTIFF.getImage(W));
        return Promise.all(Z);
      }).then((o) => {
        o = d.constructor.userDefinedImagesFilter(o, e), d.GeoTIFFImages = o, d.GeoTIFFAllImages = o, d.promises.GeoTIFFImages.resolve(o), this.setupLevels();
      }).catch((o) => {
        throw console.error("Re-throwing error with GeoTIFF:", o), o;
      }));
    }
    static async getAllTileSources(l, e) {
      const d = l instanceof File ? l.name.split(".").pop() : l.split(".").pop();
      let o = await eg(l, e.GeoTIFFOptions), Z = await o.getImageCount();
      const W = await Promise.all(
        Array.from({ length: Z }, (G, B) => o.getImage(B))
      );
      let V = eg(l, e.GeoTIFFOptions), a = this.userDefinedImagesFilter(W, e);
      a = a.filter(
        (G) => U(G, "PhotometricInterpretation") !== Zg.photometricInterpretations.TransparencyMask
      ), a.sort((G, B) => B.getWidth() - G.getWidth());
      const u = new Map(
        await Promise.all(
          a.map(async (G) => [G, await E(G, "ImageDescription")])
        )
      ), g = 0.015, n = a.reduce((G, B) => {
        var w;
        const H = B.getWidth() / B.getHeight(), J = ((w = u.get(B)) == null ? void 0 : w.split(`
`)[1]) ?? "", Q = G.filter(
          (Y) => Math.abs(1 - Y.aspectRatio / H) < g && !(J != null && J.toLowerCase().includes("macro") || J != null && J.toLowerCase().includes("label"))
        );
        return Q.length === 0 ? G.push({
          aspectRatio: H,
          images: [B]
        }) : Q[0].images.push(B), G;
      }, []).map((G) => G.images), r = [];
      for (let G = 0; G < n.length; G++) {
        const B = n[G];
        if (G !== 0) {
          r.push(
            new c.GeoTIFFTileSource(
              {
                GeoTIFF: V,
                GeoTIFFImages: B,
                GeoTIFFAllImages: B
              },
              e
            )
          );
          continue;
        }
        if (d === "qptiff") {
          const Q = Bg(B);
          for (const w of Q.values())
            r.push(
              new c.GeoTIFFTileSource(
                {
                  GeoTIFF: V,
                  GeoTIFFImages: w.images,
                  GeoTIFFAllImages: w.images,
                  channel: {
                    name: w.name,
                    color: w.color
                  }
                },
                e
              )
            );
          continue;
        }
        const H = await this.resolveLayout(V, B, e.hints), J = await this.buildLevelImages(V, H, V);
        r.push(
          new c.GeoTIFFTileSource(
            {
              GeoTIFF: V,
              GeoTIFFImages: J,
              GeoTIFFAllImages: B
            },
            e
          )
        );
      }
      return r;
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
      let e = NaN;
      return this.levels.length > 0 && l >= this.minLevel && l <= this.maxLevel && (e = this.levels[l].width / this.levels[this.maxLevel].width), e;
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
        const { width: e, height: d, tileWidth: o, tileHeight: Z } = this.levels[l];
        return new c.Point(
          Math.ceil(e / o),
          Math.ceil(d / Z)
        );
      }
      return super.getNumTiles(l);
    }
    /**
     * Handle maintaining unique caches per channel in multi-channel images
     */
    getTileHashKey(l, e, d) {
      var o;
      return `geotiffTileSource${this._tsCounter}_${((o = this == null ? void 0 : this.channel) == null ? void 0 : o.name) ?? ""}_${l}_${e}_${d}`;
    }
    /**
     * Implement function here instead of as custom tile source in client code
     * @function
     * @param {Number} levelnum
     * @param {Number} x
     * @param {Number} y
     */
    getTileUrl(l, e, d) {
      return `${l}/${e}_${d}`;
    }
    downloadTileStart(l) {
      const e = !!c.converter && typeof l.fail == "function", d = "" + l.src, o = new AbortController();
      l.userData && (l.userData.abortController = o);
      const Z = this.levels[l.tile.level];
      this.regionToTiffRaster(Z, l.tile.x, l.tile.y, o.signal).then(async (W) => {
        if (e) {
          l.finish(W, d, W.getType());
          return;
        }
        const V = await Promise.resolve(m.rasterToContext2d(l.tile, W));
        l.finish(V.canvas);
      }).catch((W) => {
        const V = W && W.message ? W.message : String(W);
        e ? l.fail(V) : l.finish(null, d, V);
      });
    }
    downloadTileAbort(l) {
      const e = l.userData && l.userData.abortController;
      e ? e.abort() : $.console.error("Could not abort download: controller not available.");
    }
    setupComplete() {
      this._ready = !0, this.promises.ready.resolve(), this.raiseEvent("ready", { tileSource: this });
    }
    setupLevels() {
      if (this._ready)
        return;
      let l = this.GeoTIFFImages.sort((a, u) => u.getWidth() - a.getWidth()), e = this._tileSize, d = this._tileSize;
      const o = (a) => {
        const u = Ig(a, "TileWidth") && Ig(a, "TileLength");
        return {
          tileWidth: this.options.tileWidth || u && a.getTileWidth() || e,
          tileHeight: this.options.tileHeight || u && a.getTileHeight() || d
        };
      };
      let Z = l[0].getWidth();
      this.width = Z;
      let W = l[0].getHeight();
      if (this.height = W, this.tileOverlap = 0, this.minLevel = 0, this.aspectRatio = this.width / this.height, this.dimensions = new c.Point(this.width, this.height), l.reduce(
        (a, u) => (a.width !== -1 && (a.valid = a.valid && u.getWidth() < a.width), a.width = u.getWidth(), a),
        { valid: !0, width: -1 }
      ).valid)
        this.levels = l.map((a) => {
          let u = a.getWidth(), g = a.getHeight();
          return {
            width: u,
            height: g,
            ...o(a),
            image: a,
            scaleFactor: 1
          };
        }), this.maxLevel = this.levels.length - 1;
      else {
        let a = Math.ceil(
          Math.log2(Math.max(Z / e, W / d))
        ), u = [...Array(a).keys()].filter((g) => g % 2 == 0);
        this.levels = u.map((g) => {
          let C = Math.pow(2, g);
          const n = l.filter((G) => {
            const B = Math.pow(2, g - 1);
            return B >= 0 ? G.getWidth() * B < Z && G.getWidth() * C >= Z : G.getWidth() * C >= Z;
          });
          if (n.length === 0)
            return null;
          const r = n[0];
          return {
            width: Z / C,
            height: W / C,
            ...o(r),
            image: r,
            scaleFactor: C * r.getWidth() / Z
          };
        }).filter((g) => g !== null), this.maxLevel = this.levels.length - 1;
      }
      this.levels = this.levels.sort((a, u) => a.width - u.width), this._tileWidth = this.levels[0].tileWidth, this._tileHeight = this.levels[0].tileHeight, this.setupComplete();
    }
    static getGeoTiffFileKey(l) {
      return [
        l.getWidth(),
        l.getHeight(),
        U(l, "TileWidth") ?? 0,
        U(l, "TileLength") ?? 0,
        (l.getWidth() / l.getHeight()).toFixed(6)
      ].join("|");
    }
    /**
     * Aperio-style companion pages (macro / label) use line 1 of ImageDescription; they must not
     * participate in IFD pyramid detection when mixed with the main slide.
     */
    static async isSvsStyleCompanionPage(l) {
      const e = await E(l, "ImageDescription");
      if (typeof e != "string" || !e) return !1;
      const o = (e.split(`
`)[1] ?? "").toLowerCase();
      return o.includes("macro") || o.includes("label");
    }
    static _uniqueByDecreasingSize(l) {
      const e = l.map((Z) => ({ im: Z, w: Z.getWidth(), h: Z.getHeight() })).sort((Z, W) => W.w - Z.w), d = [], o = /* @__PURE__ */ new Set();
      for (const { im: Z, w: W, h: V } of e) {
        const a = `${W}x${V}`;
        o.has(a) || (o.add(a), d.push(Z));
      }
      return d;
    }
    static async resolveLayout(l, e, d = {}) {
      const o = d.layout || {}, Z = o.pyramid || "auto", W = Number.isFinite(o.planeIndex) ? o.planeIndex : 0, V = o.prefer === "stack" ? "stack" : "pyramid", a = /* @__PURE__ */ new Map();
      for (const R of e) {
        const x = this.getGeoTiffFileKey(R);
        R.__key = x;
        const L = a.get(x) || [];
        L.push(R), a.set(x, L);
      }
      const u = this._uniqueByDecreasingSize(e), g = /* @__PURE__ */ new Set();
      for (const R of e)
        await this.isSvsStyleCompanionPage(R) && g.add(R);
      const C = e.filter((R) => !g.has(R)), n = this._uniqueByDecreasingSize(C), r = (R, x, L) => {
        const q = R / (x + L), z = x - L, gg = z > 0 ? R / z : 1 / 0;
        return { min: q, max: gg };
      }, G = (R, x) => Math.max(R.min, x.min) <= Math.min(R.max, x.max), B = (R, x, L, q, z) => {
        const gg = r(R, L, z), cg = r(x, q, z);
        return G(gg, cg);
      }, H = (R) => {
        if (R.length < 2) return !1;
        for (let z = 1; z < R.length; z++)
          if (R[z].getWidth() >= R[z - 1].getWidth() || R[z].getHeight() >= R[z - 1].getHeight()) return !1;
        const x = R[0].getWidth(), L = R[0].getHeight(), q = 1;
        for (const z of R) {
          const gg = z.getWidth(), cg = z.getHeight();
          if (!B(x, L, gg, cg, q)) return !1;
        }
        return !0;
      }, J = H(u), Q = H(n), w = g.size > 0;
      let Y = J, S = !Y && Q;
      w && Q && (S = !0, Y = !1);
      const k = Y || S, D = Y ? u : S ? n : u, K = e.some((R) => Ig(R, "SubIFDs"));
      let p = "single";
      Z === "ifd" ? p = k ? "ifd" : "single" : Z === "subifd" ? p = K ? "subifd" : "single" : k ? p = "ifd" : K ? p = "subifd" : p = "single";
      const N = u[0], f = N.__key, T = a.get(f) || [N], P = T[Math.max(0, Math.min(T.length - 1, W))];
      return V === "stack" && T.length > 1 && p === "ifd" && (p = "single"), p === "subifd" && (M(`${P.__key}-subifd-warn`, `[GeoTIFFTileSource] File was detected to contain SubIFD pyramids, 
however, geotiff.js does not support reading SubIFD files and is unable to display the pyramid. Only the
high-resolution lowest level will be shown. Note that loading such data can crash your browser due to memory consumption.`, "warn"), p = "ifd"), { strategy: p, planes: T, chosenPlane: P, ifdLevelsLargestToSmallest: D };
    }
    static async buildLevelImages(l, e, d) {
      const { strategy: o, chosenPlane: Z, ifdLevelsLargestToSmallest: W, planes: V } = e;
      if (o === "ifd") {
        const a = [...W].sort((u, g) => u.getWidth() - g.getWidth());
        return V.length > 1 && M(d, `[GeoTIFFTileSource] Detected a plane stack (${V.length} same-size IFDs) AND a top-level pyramid. Defaulting to planeIndex=0. Set hints.layout.planeIndex to choose a different plane.`, "warn"), a;
      }
      if (o === "subifd") {
        if (!Ig(Z, "SubIFDs"))
          return M(d, "[GeoTIFFTileSource] SubIFD pyramid requested/detected but the chosen plane has no SubIFDs. Falling back to single level.", "warn"), [Z];
        if (typeof Z.getSubIFDs == "function") {
          const u = [...await Z.getSubIFDs(), Z].sort((g, C) => g.getWidth() - C.getWidth());
          return V.length > 1 && M(d, `[GeoTIFFTileSource] Detected a plane stack (${V.length} same-size IFDs) with SubIFD pyramid. Defaulting to planeIndex=0. Set hints.layout.planeIndex to choose plane.`, "warn"), u;
        }
        return M(d, "[GeoTIFFTileSource] SubIFDs are present but geotiff.js does not expose getSubIFDs() in this build. Using single level. (You can still render multi-plane data via your GPU pipeline.)", "warn"), [Z];
      }
      return V.length > 1 && M(d, `[GeoTIFFTileSource] Detected ${V.length} same-size IFD pages (likely channels/planes). No pyramid detected. Defaulting to planeIndex=0. Set hints.layout.planeIndex to choose plane.`, "warn"), [Z];
    }
    async regionToTiffRaster(l, e, d, o) {
      var Y;
      const Z = this.options.logLatency && Date.now(), W = l.tileWidth, V = l.tileHeight, a = [e * W, d * V, (e + 1) * W, (d + 1) * V].map(
        (S) => S * l.scaleFactor
      ), u = l.image, g = await E(u, "Software"), C = typeof g == "string" && g.startsWith("PerkinElmer-QPI");
      let n = null;
      const r = C ? await E(u, "ImageDescription") : null;
      if (r)
        try {
          const k = (Y = new DOMParser().parseFromString(r, "text/xml").querySelector("Color")) == null ? void 0 : Y.textContent;
          n = k ? k.split(",").map((D) => parseInt(D, 10)) : null;
        } catch {
          n = null;
        }
      const G = await u.readRasters({
        interleave: !1,
        window: a,
        pool: this._pool,
        width: W,
        height: V,
        signal: o
      }), B = Array.isArray(G) ? G : [G], H = U(u, "BitsPerSample"), J = U(u, "SampleFormat"), Q = await E(u, "ColorMap"), w = new m.TiffRaster({
        width: W,
        height: V,
        bands: B,
        samplesPerPixel: Math.max(u.getSamplesPerPixel(), B.length),
        bitsPerSample: H ? Array.from(H) : [8],
        sampleFormat: J ? Array.from(J) : null,
        photometricInterpretation: U(u, "PhotometricInterpretation"),
        colorMap: Q || null,
        fileDirectory: u.getFileDirectory().toObject(),
        hints: {
          ...this.channel ? { channel: this.channel } : {},
          ...n ? { tintRGB: n } : {}
        }
      });
      return this.options.logLatency && (typeof this.options.logLatency == "function" ? this.options.logLatency : console.log)(
        "Tile decode latency (ms):",
        Date.now() - Z
      ), w;
    }
  };
  tg(X, "_sharedPool", h ?? null), tg(X, "userDefinedImagesFilter", (l, e) => (typeof e.imagesFilter < "u" && e.imagesFilter && (Array.isArray(e.imagesFilter) ? l = l.filter((d, o) => e.imagesFilter.includes(o)) : typeof e.imagesFilter == "function" && (l = l.filter(e.imagesFilter)), e.imagesFilter = void 0), l));
  let F = X;
  c.GeoTIFFTileSource = F;
};
(function(c, I) {
  typeof exports > "u" || typeof c.OpenSeadragon < "u" && I(c.OpenSeadragon);
})(typeof window < "u" ? window : void 0, Fg);
export {
  Fg as enableGeoTIFFTileSource
};
//# sourceMappingURL=geotiff-tilesource.mjs.map
