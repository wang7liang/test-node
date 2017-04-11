//let webpack = require('webpack');
import webpack from 'webpack';

export default {
    entry:  __dirname + "/client/index.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer:{
        inline:true,
        port:8181
    },
    module: {
        // 加载器配置
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    // 插件项
    plugins : [
        new webpack.HotModuleReplacementPlugin()
    ]
}