module.exports = {
    entry: './src',
    output: {
        path: 'builds',
        filename: 'bundle.js',
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
    }
};
