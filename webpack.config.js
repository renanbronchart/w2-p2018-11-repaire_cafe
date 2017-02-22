const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const extractSCSS = new ExtractTextPlugin( './app/scss/style.scss' );
const autoPrefix = require( 'autoprefixer' );
const env = process.env.NODE_ENV;
let cssDist = "[name].bundle.css";
let assetsDist = "./app";
let devtool = "cheap-eval-source-map";
const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin(),
//  new HtmlWebpackPlugin( {
//    template: '../index.html',
//    inject: true,
//    hash: true
//  } ),
  new ExtractTextPlugin( {
    filename : cssDist,
    allChunks: true,
  } ),
  new CleanWebpackPlugin( [ 'dist' ], {
    root   : path.resolve( __dirname, './' ),
    verbose: true,
    dry    : false,
    // exclude: ['shared.js']
  } ),
  new webpack.LoaderOptionsPlugin( {
    options: {
      postcss: [
        autoPrefix(),
      ]
    }
  } )
];

if( env === 'prod' )
{
  cssDist = "../css/[name].bundle.css";
  assetsDist = "dist/";
  devtool = 'source-map';
  plugins.push(
    new webpack.optimize.UglifyJsPlugin( {
      compressor: {
        warnings: false,
      },
    } ),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin( {
      template: './index.html'
    } )
  );
}

module.exports = {
  context  : path.resolve( __dirname, './app/' ),
  devtool  : devtool,
  devServer: {
    contentBase: './app',
    hot        : true
  },
  entry    : [ './js/app.js' ],
  output   : {
    path    : path.resolve( __dirname, assetsDist ),
    filename: '[name].bundle.js',
  },
  module   : {
    loaders: [
      {
        test   : /\.js$/,
        exclude: /node_modules/,
        loader : 'babel-loader',
        query  : {
          presets: [ 'es2015' ]
        }
      },
      {
        test   : /\.scss$/,
        loaders: ExtractTextPlugin.extract( {
          loader        : [ "css-loader", {
            loader : 'postcss-loader',
            options: { plugins: () => [ require( 'autoprefixer' ) ] }
          }/*"postcss-loader?sourceMap=inline"*/, "sass-loader" ],
          fallbackLoader: "style-loader"
        } )
      }
    ]
  },
  plugins  : plugins,
};
