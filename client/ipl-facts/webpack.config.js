const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.component.ts'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  plugins:[
    new CompressionPlugin({
      test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
      filename(info){
          let opFile= info.path.split('.'),
          opFileType =  opFile.pop(),
          opFileName = opFile.join('.');
          return `${opFileName}.${opFileType}.gzip`;
      }
  })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("tailwindcss")("./tailwind.config.js"),
                require('autoprefixer'),
                purgecss,
                
              ]
            }
          }
        ]
      }
    ]
  }
};
