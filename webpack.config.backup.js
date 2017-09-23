const webpack =  require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname+"/public",
        filename: "./app.js"
    },
    devServer:{
        port: 8080,
        contentBase: './public'
    },
    resolve:{
        extensions: ['.js','.jsx'],
        alias: {
            "modules": __dirname+'/node_modules'
        }
    },
    plugins:[
        new ExtractTextPlugin('app.css')
    ],
    module: {
        rules: [
            {
                test: /.js[x]?$/,
                use: 'babel-loader',
                options: {
                    ignore: /node_modules/
                },
                query: {
                    presets:['es2015','react'],
                    plugins: ['transform-object-rest-spread']
                }

            },
            {
                 test: /.css?$/,
                 use: ExtractTextPlugin.extract('style-loader','css-loader')
            },
            {
                test: /.less?$/,
                use: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                use: 'file'
            }
        ]
    }

}