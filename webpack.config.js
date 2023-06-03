const path = require('path'); //引入node的核心模块path，来处理路径
module.exports = {
    mode: 'production',//设置当前的开发环境为production，这个选项可以不写，但是不写的话终端里会有一个警告，当这个值为production时，默认打包出来的文件会帮我们进行压缩，而当设置为development时，打包出来的代码默认是不会进行压缩的
    entry: './src/index.js', //入口文件为当前目录下的src下的index.js文件
    output: {//打包文件的输出路径
        filename: 'bundle.js', //打包后的文件名
        path: path.resolve(__dirname, 'bundle') //__dirname:表示当前文件所在的文件目录，也就是项目根目录
    }
}