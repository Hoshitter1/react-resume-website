var webpack = require("webpack");
var path = require("path");
var publidDir = __dirname + "/react-resume/public";
const outputPath = path.resolve(publidDir, "js");

function resolve(dir) {
  console.log(path.resolve(__dirname, dir));
  return path.resolve(__dirname, dir);
}

module.exports = {
  mode: "development",
  entry: ["./react-resume/src/index.jsx"],
  output: {
    filename: "main.js",
    path: outputPath,
  },
  devServer: {
    contentBase: publidDir,
    hot: true,
    watchContentBase: true,
    inline: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "~": resolve("react-resume/src/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,

        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/react"],
            },
          },
        ],
      },
    ],
  },
};
