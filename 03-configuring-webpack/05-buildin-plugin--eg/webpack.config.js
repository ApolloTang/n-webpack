var webpack = require('webpack');

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
                // To install: npm i json-loader -D
                test: /\.json$/,
                loader: "json"
            },
            {
                // To install: npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react
                test    : /\.jsx?$/,
                exclude : /node_modules/,
                loader  : 'babel',
                // query   : { presets : ['es2015','react'] }  // required if not using .babalrc
            },
            {
                // To install: npm i -D style-loader css-loader
                // To install: npm i -D postcss-loader
                test: /\.css$/,
                loader: 'style!css?modules!postcss'
                                         // ^-- css is transformed b4 load into modules
                                         // according to section in 'postcss'
            }
        ]
    },
    postcss: [
        // To install: npm i -D autoprefixer
        require('autoprefixer')
    ]
    , plugins: [
        new webpack.BannerPlugin("email: your.email@gmail.com") // build in plugin, not need to install
    ]
}
