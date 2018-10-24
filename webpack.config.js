const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'best_investiment.js'
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module:{
        rules: [
            {
                test: /\.jsx/,
                use: {
                    loader: 'babel-loader',
                    options: {presets: ['react', 'es2015']}
                }
            },
            {
                test: /\.scss/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    devServer:{
        contentBase: './src',
        publicPath: '/dist'
    }
};