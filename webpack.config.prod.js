var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.config.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    ...base,
  mode: 'production',
  plugins: [
      ...base.plugins,
      new MiniCssExtractPlugin({
      filename: '[name].css',
    chunkFilename: '[id].css',
}
   
  )],
  module: {
    rules: [
      {
        test: /\.css$/i,
        //生产环境用这个，可以做缓存
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
                },
            },
            'css-loader', 
          ],
      },
    ],
  },

};
