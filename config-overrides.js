const path = require("path");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve = {
    extensions: [
      ".ts",
      ".tsx",
      ".svg",
      ".png",
      ".jpg",
      ".jpeg",
      ".json",
      ".js",
      ".jsx",
    ],
    alias: {
      "@components": path.resolve(__dirname, "src/app/components"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@screens": path.resolve(__dirname, "src/app/screens"),
    },
  };
  return config;
};
