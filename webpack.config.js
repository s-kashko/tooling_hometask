const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env = {}) => {

   const { mode = 'development' } = env;
   const isProd = mode === 'production';
   const isDev = mode === 'development';

   const getStyleLoaders = () => {
      return [
         isProd ? MiniCssExtractPlugin.loader : 'style-loader',
         'css-loader'
      ]
   }

   const getPlugins = () => {
      const plugins = [
         new HtmlWebpackPlugin({
            template: 'public/index.html',
            title: 'Webpack project',
            buildTime: new Date().toString(),
            minify: {
               collapseWhitespace: isProd
            }
         }),
         new CleanWebpackPlugin()
      ];

      if (isProd) {
         plugins.push(new MiniCssExtractPlugin({
            filename: 'main.[hash].css'
         })
         )
      }

      return plugins;
   }

   const optimization = () => {
      const config = {
         splitChunks: {
            chunks: 'all'
         }
      }

      if (isProd) {
         config.minimizer = [
            new OptimizeCssAssetPlugin(),
            new TerserPlugin()
         ]
      }
   }

   return {
      mode: isProd ? 'production' : isDev && 'development',
      entry: './src/index.js',

      output: {
         filename: '[name].[hash].js',
         path: path.resolve(__dirname, 'build')
      },

      module: {
         rules: [

            // loading images
            {
               test: /\.(png|jpe?g|gif|webp|svg)$/i,
               use: [
                  {
                     loader: 'file-loader',
                     options: {
                        name: '[name].[hash:8].[ext]',
                        outputPath: 'images',
                     },
                  },
               ],
            },

            // loading css
            {
               test: /\.css$/i,
               use: getStyleLoaders()
            }
         ],
      },

      plugins: getPlugins(),
      optimization: optimization(),

      devServer: {
         open: true,
         port: 3000,
         hot: true
      }
   }
}