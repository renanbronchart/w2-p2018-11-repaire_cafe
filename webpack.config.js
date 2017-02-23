var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractSass = new ExtractTextPlugin({
    filename: "../css/[name].css",
    disable: process.env.NODE_ENV === "dev"
});

module.exports = {
  entry: "./app/js/app.js",
  output: {
    path: path.join(__dirname, '/dist/js'),
    publicPath: 'dist/js',
    filename: 'bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: extractSass.extract({
          loader: [{
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [
                  require ('autoprefixer')
                ];
              }
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }],
          // use style-loader in development
          fallbackLoader: "style-loader"
        })
      },
    ]
  },
  plugins: [
    extractSass
  ]
}
