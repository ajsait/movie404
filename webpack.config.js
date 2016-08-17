var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");

const API_KEY = JSON.stringify("fddbc809fcf78a80db20519380baad8d");
const BASE_URL = JSON.stringify("http://api.themoviedb.org/3");

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "source-map" : null,
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
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: debug ? [
    new webpack.DefinePlugin({
      BASE_URL,
      API_KEY
    })
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.DefinePlugin({
      BASE_URL,
      API_KEY
    })
  ],
};
