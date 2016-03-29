module.exports = {
    devtool: 'source-map',
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true,
        port: 9999
    },
    entry:  __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                // to install: npm i json-loader -D
                test: /\.json$/,
                loader: "json"
            },
            {
                //npm i -S babel-core babel-loader babel-preset-es2015 babel-preset-react
                test    : /\.jsx?$/,
                exclude : /node_modules/,
                loader  : 'babel',
                query   : { presets : ['es2015','react'] }
            }
        ]
    },
}
