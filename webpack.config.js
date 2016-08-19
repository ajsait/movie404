var webpack = require("webpack");
var path = require("path");

const DEBUG = process.env.NODE_ENV !== "production";

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: DEBUG ? "source-map" : null,
  entry: "./js/client.js",
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "eslint-loader"
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: DEBUG ? [
    new webpack.DefinePlugin({
      DEBUG
    })
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.DefinePlugin({
      DEBUG
    })
  ],
};
