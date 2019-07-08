const path = require("path");

const projectRoot = path.resolve(__dirname);

module.exports = {
  lintOnSave: false,

  configureWebpack: {
    resolve: {
      alias: {
        "@": `${projectRoot}/src`
      }
    }
  },

  pwa: {
    name: "Fin 5",
    themeColor: "#DAA520"
  },

  publicPath: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  css: undefined
};
