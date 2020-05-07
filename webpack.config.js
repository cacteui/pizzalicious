const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '' // This should be the domain name in production mode
    },
    resolve: {
        alias: {
            controllers: path.resolve(__dirname, './src/js/controllers/'),
            models: path.resolve(__dirname, './src/js/models/'),
            views: path.resolve(__dirname, './src/js/views/')
        }
    },
    mode: "none",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.[contenthash].css'
        }),
        new CleanWebpackPlugin()
    ]
}