import { rollupTypescript } from "../../scripts/rollup";

export default [
  ...rollupTypescript("node/index", { external: ["@vuepress/utils"] }),
  ...rollupTypescript("client/root-components/AddThis", { external: ["vue"] }),
];
