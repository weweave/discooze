var path = require('path');
var webpack = require('webpack');
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        app: './src/app/main.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [{
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: path.resolve(__dirname, 'src/tsconfig.json') }
                }, 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                  attrs: []
                }
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/app')
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            Popper: "popper.js"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'polyfills']
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new BabiliPlugin()
    ]
};
