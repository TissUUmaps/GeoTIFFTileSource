import path from "path";
import { defineConfig } from "vite";
import license from "rollup-plugin-license";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig(({ mode }) => {
  const lite = mode === "lite";

  return {
    server: {
      open: "/demo/demo.html",
      watch: {
        usePolling: true,
      },
    },
    build: {
      sourcemap: !lite,

      lib: {
        entry: path.resolve(__dirname, "src/main.js"),
        name: "GeoTIFFTileSource",

        // lite: single ESM file (best chance of “few files”)
        // normal: keep your es + umd outputs
        formats: lite ? ["es"] : ["es", "umd"],

        fileName: (format) => {
          if (lite) return "geotiff-tilesource.lite.mjs";
          return format === "es"
            ? "geotiff-tilesource.mjs"
            : "geotiff-tilesource.min.js";
        },
      },

      rollupOptions: {
        // geotiff.js is a peer dependency, so the host application's copy is used.
        // Only the lite build, meant to be dropped in as a single file, bundles it.
        external: lite ? [] : ["geotiff"],
        output: {
          // the UMD script reads geotiff.js's browser bundle from its global
          globals: { geotiff: "GeoTIFF" },
          ...(lite ? { inlineDynamicImports: true, manualChunks: undefined } : {}),
        },
      },
    },

    worker: {
      format: "es",
    },

    plugins: [
      license({
        sourcemap: !lite,
        thirdParty: {
          output: path.join(__dirname, "dist", "bundled-licenses.txt"),
          includePrivate: false,
          includeSelf: true,
        },
      })
    ],

    test: {
      projects: [
        {
          test: {
            name: "layout-jsdom",
            environment: "jsdom",
            setupFiles: ["test/polyfills/worker.js"],
            browser: { enabled: false },
            include: ["test/pyramid-layout.test.js"],
          },
        },
        {
          test: {
            name: "browser",
            environment: "jsdom",
            setupFiles: ["test/polyfills/worker.js"],
            browser: {
              enabled: true,
              provider: playwright(),
              instances: [{ browser: "chromium" }],
            },
            include: ["test/conversion.browser.test.js", "test/import.test.js"],
          },
        },
      ],
    },
  };
});
