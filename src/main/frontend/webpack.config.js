const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app/index.js'),
    libs: path.join(__dirname, 'app/libs.js'),
    output: path.join(__dirname, '../../../target/classes/static')
};

const reactToolboxVariables = {
    'z-index-higher': "1060"
};


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
                presets: ['es2015', 'react', 'stage-2']
            }
        }, {
            test: /\.css$/,
            use: [
                {loader: 'style-loader'},
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        sourceMap: true,
                        importLoaders: 1,
                        localIdentName: '[name]__[local]___[hash:base64:8]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        sourceComments: true,
                        /* eslint-disable global-require */
                        plugins: [
                            require('postcss-cssnext')({
                                features: {
                                    customProperties: {
                                        variables: reactToolboxVariables,
                                    },
                                },
                            }),
                        ],

                        /* eslint-enable */
                    }
                }
            ]
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    sourceMap: true
                }
            }, {
                loader: "resolve-url-loader"
            }, {
                loader: "sass-loader",
                options: {
                    sourceMap: true
                }
            }]
        }, {
            test: /\.jpg|png$/,
            loader: "file-loader?name=[path][name].[ext]"
        }, {
            test: /.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?/,
            loader: "file-loader?sourceMap"
        }, {
            test: /\.(woff|woff2)(\?.*$|$)/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff&sourceMap"
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

