const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
   mode: 'development',
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
                     name: '[name]-[hash:8].[ext]',
                     outputPath: 'images',
                  },
               },
            ],
         },

         // loading css
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
         }
      ],
   },


   plugins: [
      new HtmlWebpackPlugin({
         template: 'public/index.html',
         title: 'Webpack project',
         buildTime: new Date().toString()
      }),

      new CleanWebpackPlugin()
   ],

   devServer: {
      open: true,
      port: 3000,
      hot: true
   }
}