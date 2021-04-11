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