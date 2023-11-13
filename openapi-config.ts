import { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "http://127.0.0.1:8000/openapi/?format=openapi",
  apiFile: "./src/store/emptyApi.ts",
  apiImport: "emptySplitApi",
  outputFile: "./src/store/dfsmApi.ts",
  exportName: "dfsmApi",
  hooks: { queries: true, lazyQueries: true, mutations: true },
  tag: true,
};

export default config;
