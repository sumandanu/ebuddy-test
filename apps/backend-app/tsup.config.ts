import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entryPoints: ["src/core/index.ts"],
  clean: true,
  format: ["cjs"],
  ...options,
}));
