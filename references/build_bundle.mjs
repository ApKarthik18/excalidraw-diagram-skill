import { build } from "esbuild";

await build({
  entryPoints: ["excalidraw_entry.js"],
  bundle: true,
  format: "iife",
  outfile: "excalidraw.bundle.js",
  platform: "browser",
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  logLevel: "info",
});
