var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');
var isProduction = process.env.NODE_ENV === 'production';
var jsOutputPath = isProduction ? 'static/scripts/app.[hash].js' : 'static/scripts/app.js';
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var port = isProduction ? process.env.PORT || 8080 : process.env.PORT || 3000;

var webpackConfig = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development'),
      },
    }),
    new HtmlWebpackPlugin({
      template: Path.join(__dirname, './src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].[hash].css' : '[name].css' ,
      chunkFilename: isProduction ? '[id].[hash].css' : '[id].css'
    })
  ],
  module: {
    rules: [{
      test: /.jsx?$/,
      include: Path.join(__dirname, './src/app'),
      exclude: /node_modules/,
      use:{
        loader: 'babel-loader',
      }
    },
    {
      test: /\.s?[ac]ss$/,
        use: [
            !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { url: false, sourceMap: !isProduction } },
            { loader: 'sass-loader', options: { sourceMap: !isProduction, includePaths: Path.join(__dirname, './src/app'), } }
        ],
      }],
    },
};

webpackConfig.entry = !isProduction
  ? ['webpack-dev-server/client?http://localhost:' + port,
     'webpack/hot/dev-server',
     Path.join(__dirname, './src/app/index')]
  : [Path.join(__dirname, './src/app/index')];

webpackConfig.output = {
  path: Path.join(__dirname, './dist'),
  filename: jsOutputPath,
};

webpackConfig.devtool = isProduction ? 'source-map' : 'cheap-eval-source-map';

isProduction
  ? webpackConfig.plugins.push(
      new Webpack.optimize.OccurenceOrderPlugin(),
      new Webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
        },
      })
    )
  : webpackConfig.plugins.push(
      new Webpack.HotModuleReplacementPlugin()
    );

if (!isProduction) {
  webpackConfig.devServer = {
    contentBase: Path.join(__dirname, './'),
    hot: true,
    port: port,
    inline: true,
    progress: true,
    historyApiFallback: true,
  };
}

module.exports = webpackConfig;