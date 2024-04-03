const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:'./src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/chunk-[contenthash].js',
        clean : true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devServer: {
        port: 8080,
        open: true,
    }
}