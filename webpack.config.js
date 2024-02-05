const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/script.js',
    output: {
        filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ],
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node-modules/,
                use: ['babel-loader']
            }, 
            {
                test:/\.css$/,
                use: ['postcss-loader']
            }
        ]
    }
}