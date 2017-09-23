const path = require( 'path' );
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
        extensions: ['.js','.jsx','.css','.less'],
        alias: {
            "modules": __dirname+'/node_modules'
        },
    },
    plugins:[
        new ExtractTextPlugin('app.css')
    ],
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                      babelrc: false,
                      presets: [
                        ['es2015', { modules: false }],
                        'react',
                      ]
                    }
                  }
                ]
            },
            {
                 test: /.css?$/,
                 use: ExtractTextPlugin.extract('style-loader','css-loader')
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                use: 'file'
            }
        ]
    }

}