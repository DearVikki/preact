// import webpack from 'webpack';
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:'./demo/index.js',
  output:'dist',
  devtool: 'source-map',
  devServer: {
    hot: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [/demo/, /src/],
      loader: 'babel',
      query: {
        /* When using babel, please don't turn off cache for better performance! */
        cacheDirectory: true
      }
    }]
  },
  resolve:{
    extensions: ['', '.js', '.jsx']
  },
  plugins:[
    new htmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
}