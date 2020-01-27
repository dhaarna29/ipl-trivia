const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.component.ts'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});
const BrotliPlugin = require(`brotli-webpack-plugin`);

module.exports = {
  plugins:[
    new BrotliPlugin({
      asset: '[fileWithoutExt].[ext].br',
      test: /\.(js|scss|html|svg|txt|eot|otf|ttf|gif)$/
  }),
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
