const path = require('path')
module.exports = {
    entry: './frontend-overflow/src/index.js',
    output: {
        path: path.resolve('frontend-overflow/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}
