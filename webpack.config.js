var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
  mode: 'development',
  devtool:'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
        ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], //开发环境用loader，不用生产文件，速度快
      },
    ],
  },

};
