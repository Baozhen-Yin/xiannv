const path = require('path')
const webpack = require('webpack') //启用热更新第二步

//只要是插件都需要放到plugins节点中去
const htmlWebpackPlugin = require('html-webpack-plugin')

//node语法 webpack基于node构建
//这个配置文件其实就是js文件 通过node中的模块操作 向外暴露了一个配置对象
module.exports = {
    "mode": "production",
    //在配置文件中需要手动指定入口和出口
    //入口：表示要打包哪个文件 出口：输出到哪个文件
    entry: path.join(__dirname, './src/main.js'),
    output: {
        //表示输出到哪个目录中去
        path: path.join(__dirname, './dist'),
        //指定输出文件 的名称
        filename: 'bundle.js'
    },
    devServer: {
        //这是配置dev-server命令参数的第二种形式
        open: true, // 自动打开浏览器
        port: 3000, //设置启动时候的运行端口
        contentBase: "src", //指定托管到根目录
        hot: true //启用热更新第一步
    },
    plugins: [
        //webpack所有带s都是数组
        //new 一个热更新的模块对象 启用热更新第三步
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            //创建一个在内存中生成 HTML 页面的插件
            //指定模板页面 根据指定的模板页面来生成  将来会根据这个路径生成内存中的页面
            template: path.join(__dirname, './src/index.html'),
            //指定生成页面的名称
            filename: 'index.html'
        })
    ],
    module: { //这个节点用于配置 所有 第三方模块的加载器
        rules: [
            //所有第三方模块的匹配规则
            {
                test: /\.css$/,
                //配置 .css 文件的第三方规则 调用顺序从后往前 css-loader处理结果再给 style-loader继续处理
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                //配置 .css 文件的第三方规则
                use: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.scss$/,
                //配置 .css 文件的第三方规则
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}