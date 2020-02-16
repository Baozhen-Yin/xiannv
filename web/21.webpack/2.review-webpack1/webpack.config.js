const path = require('path')

//根据指定的模板页面 生成一份内存中的首页 同时把自动打包好的bundle.js植入到页面底部
const htmiWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    'mode': 'production',
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        //所有webpack插件的配置节点
        new htmiWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(jpg|png|gif|bmp|jpeg)$/,
            //处理图片路径的loader
            use: ['url-loader?limit=9317&name=[hash:8]-[name].[ext]']
        }, {
            test: /\.(ttf|eot|svg|woff|woff2)$/,
            //处理字体文件的loader
            use: 'url-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/ //这是配置babel来转化高级es6语法
        }],
    },

}