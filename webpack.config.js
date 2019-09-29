const {join} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: join(__dirname, 'index.jsx'),
    output: {
        path: join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',

            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test application',
            template: 'index.html'
        }),
    ]
};
