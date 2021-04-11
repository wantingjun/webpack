1. mode: development production
2. output - filename-hash
3. http缓存-cache
4. HtmlWebpackPlugin - title- 加入div
5. css-loader/ style-loader
6. devServer:不使用dist，用的是内存更新
7. MiniCssExtractPlugin（styleloader快一点，不需要生产文件）
8. 2个config.不同的环境用不同的配置，使用继承/
9. loader和plugin的区别：
* loader是加载器。plugin是插件
* loader： 用来加载一个文件。比如css-loader， babel-loader
* plugin：用来加强扩展功能。比如
10. yarn add sass-loader dart-sass
11. yarn add less-loader --devnpm install -D sass-loader@7.x
12. less语法
13. stylus语法(less scss stylus的区别)
14. webpack引入图片:file-loader:把文件变为文件路径
15. 使用懒加载：用import（）加载一个文件，会得到一个promise。promise前面是成功，后面失败是什么