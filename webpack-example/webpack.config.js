const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js',
    },
    devtool: 'inline-source-map', // 开启错误源 映射
    devServer: {
        contentBase: './dist', // 配置一个简单的 web 服务器，并告诉开发服务器在哪里找文件
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
        })

    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};