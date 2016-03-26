webpack = require('webpack');

module.exports = {
    entry:  './src',
    output: {
        path: 'builds',
        filename: 'bundle.js',
        chunkFilename: '[name].js',
        publicPath: 'builds/'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'react'] },
                include: __dirname + '/src'
            },
            {
                test: /\.scss/,
                loader: 'style!css!sass'
            },
            {
                test: /\.html/,
                loader: 'html'
            }
        ]
    },
    // Plugins differ from loaders in the sense that instead
    // of only executing on a certain set of files, and being
    // more of a “pipe”, they execute on all files and perform
    // more advanced actions, that aren’t necessarily related
    // to transformations.
    plugins: [
        // CommonChunksPlugin: it analyzes your chunks for recurring
        // dependencies, and extracts them somewhere else. It
        // can be a completely separate file (like vendor.js) or
        // it can be your main file.
        new webpack.optimize.CommonsChunkPlugin({
            children:  true, // Look for common dependencies in all children,
            minChunks: 2, // How many times a dependency must come up before being extracted
        }),
    ]
};
