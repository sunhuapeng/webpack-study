/*
 * @Author: sunhuapeng
 * @Date: 2020-10-13 19:02:20
 * @LastEditors: sunhuapeng
 * @LastEditTime: 2020-10-13 19:33:24
 */
module.exports = {
  entry: './src/index.js', // 资源入口
  output: { // 更多详细配置的对象
    filename: './build.js' // 
  },
  devServer: {
    publicPath: '/dist'
  }
}