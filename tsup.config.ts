import { readFileSync } from "node:fs";
import { type Plugin } from "esbuild";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
  ],
  bundle: true,
  format: ["cjs", "esm"],
  platform: "node",
});
