var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./app/js/app.js",
  output: {
    path: path.join(__dirname, '/dist/js'),
    publicPath: 'dist/js',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          "sass-loader"
        ]
      },
    ]
  }
}
