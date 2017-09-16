const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    source: path.join(__dirname, 'app'),
    output: path.join(__dirname, '../../../target/classes/static')
};

console.log(PATHS.output);

const common = {
    entry: [
        PATHS.source
    ],
    output: {
        path: PATHS.output,
        publicPath: '',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: 'style!css|postcss-loader'
        }, {
            test: /\.scss$/,
            loader: 'style!css!resolve-url-loader!sass'
        }, {
            test: /\.jpg|png$/,
            loader: "file?name=[path][name].[ext]"
        },{
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            'window.jQuery': 'jquery',
            "Tether": 'tether',
            Popper: ['popper.js', 'default']
            // In case you imported plugins individually, you must also require them here:
            // Util: "exports-loader?Util!bootstrap/js/dist/util",
            // Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
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

