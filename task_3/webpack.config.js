const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    mode: 'production',
    entry: {
        filename: path.resolve(__dirname,'src/index.js')
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        assetModuleFilename: 'assets/[name][ext]',
        clean: true
    },


    performance:{
        hints: false,
        maxAssetSize: 512000,//максимальный размер изображения
        maxEntrypointSize: 512000//иначе подгружаем после прогрузки сайта
    },


    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            title: 'My Web Page',
            filename: 'index.htm',
            template: 'src/index.html'
        }),

       new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ]
}