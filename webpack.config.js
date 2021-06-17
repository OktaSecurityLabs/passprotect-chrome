const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: {
    inject: './src/inject.js',
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './images', to: 'images' },
        { from: './src/manifest.json', to: 'manifest.json' }
      ],
    }),
  ],
};