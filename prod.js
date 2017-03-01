var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var isProd = (process.env.NODE_ENV === 'production');

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
              loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
          })
        },
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      extractSass,
      // Use copyWebpackPlugin for directory fonts
      new CopyWebpackPlugin([
        { from: './app/fonts', to: '../fonts' }
      ],
      {
        copyUnmodified: true
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: false
      }),
      new CleanWebpackPlugin(['dist'], {
        root   : path.resolve( __dirname, './' ),
        verbose: true,
        dry: false
        // exclude: ['shared.js']
      })
    ]
  }
}
