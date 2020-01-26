const purgecss = require('@fullhuman/postcss-purgecss')
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
                purgecss({
                  content: ['./src/*.html']
                })
              ]
            }
          }
        ]
      }
    ]
  }
};
