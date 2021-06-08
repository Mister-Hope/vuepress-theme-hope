import { rollupTypescript } from "../../scripts/rollup";

export default rollupTypescript("node/index", {
  external: ["@vuepress/core", "chalk", "fs-extra", "path", "sitemap"],
});