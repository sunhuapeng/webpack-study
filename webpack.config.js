/*
 * @Author: sunhuapeng
 * @Date: 2020-10-13 19:02:20
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-10-13 19:33:24
 */
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    foo:'./src/foo.js',
    bar: './src/bar.js'
  }, // 资源入口
  output: {
    // 更多详细配置的对象
    filename: "[name].js", // [name] [chunkhash] 与chunkhash有关 可以控制客户端缓存  [name] @ [chunkhash].js
    path: path.join(__dirname, "dist"), //webpacl4.+默认dist目录，除非我们需要改变它否则不必单独配置
  },
  devServer: {
    publicPath: "/dist",
  },
  // mode: 'development',
  module: {
    // rules: [
    //   {
    //     test: /\.css$/,
    //     use: ["style-loader", "css-loader"],
    //     exclude: /node_modules/
    //   },
    // ],
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};
