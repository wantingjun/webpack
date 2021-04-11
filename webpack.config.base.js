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
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        {
            test: /\.styl$/,
            loader: [ "style-loader","css-loader","stylus-loader"] // compiles Styl to CSS
          },
        {
            test: /\.less$/i,
            loader: [
              // compiles Less to CSS
              "style-loader",
              "css-loader",
              "less-loader",
            ],
          },
        // {
        //     test: /\.scss$/i,
        //     use: [
        //       // Creates `style` nodes from JS strings
        //       "style-loader",
        //       // Translates CSS into CommonJS
        //       "css-loader",
        //       // Compiles Sass to CSS
        //       {
        //           loader:"sass-loader",
        //         options:{
        //             implementation:require("dart-sass")
        //         }
        //     },
             
        //     ],
        //   },
    ],
  },

};
