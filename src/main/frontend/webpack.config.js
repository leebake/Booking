const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app/index.js'),
    libs: path.join(__dirname, 'app/libs.js'),
    output: path.join(__dirname, '../../../target/classes/static')
};

console.log(PATHS.output);

const common = {
    entry: [
        PATHS.libs,
        PATHS.app
    ],
    output: {
        path: PATHS.output,
        publicPath: '',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!resolve-url-loader!sass-loader'
        }, {
            test: /\.jpg|png$/,
            loader: "file-loader?name=[path][name].[ext]"
        }, {
            test: /.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?/,
            loader: "file-loader"
        }, {
            test: /\.(woff|woff2)(\?.*$|$)/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        })
    ]
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devServer: {
            port: 9090,
            proxy: {
                '/': {
                    target: 'http://localhost:8080',
                    secure: false,
                    prependPath: false
                }
            },
            publicPath: 'http://localhost:9090/',
            historyApiFallback: true
        },
        devtool: 'source-map'
    });
}

if (TARGET === 'build') {
    module.exports = merge(common, {});
}

