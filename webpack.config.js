const path = require("node:path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: "./src/HelloWorld.vue",

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },

      {
        // This applies to `<template>` in Vue components
        // example: app/scripts/components/sandbox/foo-ts.vue ?vue&type=template&id=dd97be18&
        resourceQuery: /vue.*type=template/,
        use: path.join(__dirname, "./build/test-loader.js"),
      },
    ],
  },

  plugins: [new VueLoaderPlugin()],
};
