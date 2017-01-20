const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const TARGET = process.env.npm_lifecycle_event
process.env.BABEL_ENV = TARGET

const PATHS = {
    static: path.join(__dirname, 'static'),
    dist: path.join(__dirname, 'dist')
}

const PAGES = [{
    title: 'E-businessmen',
    entry: ['main'],
    template: path.resolve(PATHS.static, 'index.html'),
    fileName: 'dist/index.html'
}]

/*
  Common config
 */

var common = {
    entry: {
        main: path.resolve(PATHS.static, 'js/index.js')
    },

    output: {
        path: PATHS.dist,
        filename: 'js/[name].[hash].js',
        publicPath: '/'
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            include: [path.resolve(PATHS.static, 'js')]
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.(gif|jpg|png|svg|woff|eot|ttf)\??.*$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: path.normalize('./img/[name].[ext]?[hash]')
            }
        }, {
            test: /\.(webp)\??.*$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: path.normalize('./img/[name].[ext]')
            }
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            css: path.resolve(__dirname, 'static/css'),
            fonts: path.resolve(__dirname, 'static/fonts'),
            js: path.resolve(__dirname, 'static/js'),
            components: path.resolve(__dirname, 'static/js/ReactComponents'),
            pages: path.resolve(__dirname, 'static/js/ReactPages'),
            img: path.resolve(__dirname, 'static/img')
        }
    }
}


/*
  Dev config
*/

if (TARGET === 'start' || !TARGET || TARGET == 'dev') {
    module.exports = merge(common, {
        devServer: {
            contentBase: PATHS.dist,
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT || 8080
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"development"',
                'process.env.rap': true
            }),
            new HtmlWebpackPlugin({
                favicon: path.resolve(__dirname, 'static/img/favicon.ico'),
                filename: 'index.html',
                chunks: ['main'],
                title: '【友盟+】全球领先的第三方全域大数据服务提供商',
                template: path.resolve(__dirname, 'static/index.html')
            })
        ]
    });
}

/*
  Prodcution config
 */

if (TARGET === 'build') {
    common.module = {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            include: [path.resolve(PATHS.static, 'js')]
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style", "css")
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style', 'css!less')
        }, {
            test: /\.(gif|jpg|png|svg|woff|eot|ttf)\??.*$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: path.normalize('./img/[name].[ext]?[hash]')
            }
        }, {
            test: /\.(webp)\??.*$/,
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: path.normalize('./img/[name].[ext]')
            }
        }]
    };
    module.exports = merge(common, {
        output: {
            publicPath: '/'
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"',
                'process.env.rap': false
            }),
            new ExtractTextPlugin("css/[name].[hash].css"),
            new UglifyJsPlugin({
                comments: false,
                compress: {
                    warnings: false,
                    drop_console: true
                }
            }),
            new HtmlWebpackPlugin({
                favicon: path.resolve(__dirname, 'static/img/favicon.ico'),
                filename: 'index.html',
                chunks: ['main'],
                title: '【友盟+】全球领先的第三方全域大数据服务提供商',
                template: path.resolve(__dirname, 'static/index.html')
            })
        ]
    })
}


// 生成 HtmlWebpackPlguin 页面
function HtmlWebpackPluginPages(pages) {
    return pages.map(function(page) {
        return new HtmlWebpackPlugin({
            title: page.title,
            filename: page.fileName,
            chunks: page.entry,
            chunksSortMode: 'none',
            template: page.template
        })
    })
}