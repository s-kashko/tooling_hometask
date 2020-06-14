const path = require('path');

module.exports = {
   mode: 'development',
   entry: './src/index.js',

   output: {
      filename: 'bundle.js',
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
   }
}