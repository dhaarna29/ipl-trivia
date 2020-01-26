const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.html', './src/**/*.component.ts'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});
module.exports = {
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
                purgecss
              ]
            }
          }
        ]
      }
    ]
  }
};
