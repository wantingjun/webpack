var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

 
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[index].[contenthash].js', //生产的文件名
  },
  plugins: [new HtmlWebpackPlugin({
      title : '写代码了', //html的title
     template:'src/assets/index.html' //模版
  })],
  module: {
    rules: [
 
    ],
  },

};
