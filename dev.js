var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractSass = new ExtractTextPlugin({
  filename: "../css/[name].css",
  fallback: 'style-loader'
});

module.exports = function (env) {
  return {
    entry: "./app/js/app.js",
    output: {
      path: path.join(__dirname, '/dist/js'),
      publicPath: 'dist/js',
      filename: 'bundle.js'
    },
    watch: true,
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
          use: extractSass.extract({
            loader: [{
              loader: "css-loader",
              options: {
                sourceMap: true,
                minimize: true
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
            fallback: "style-loader"
          })
        },
      ]
    },
    plugins: [
      // Use copyWebpackPlugin for directory fonts
      new CopyWebpackPlugin([
        { from: './app/fonts', to: '../fonts' }
      ],
      {
        copyUnmodified: true
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true
      }),
      new CleanWebpackPlugin(['dist'], {
        root   : path.resolve( __dirname, './' ),
        verbose: true,
        dry: false
        // exclude: ['shared.js']
      }),
      extractSass
    ]
  }
}
