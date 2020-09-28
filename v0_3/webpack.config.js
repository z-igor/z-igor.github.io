const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: './src/main.js',
    tts: './src/listTasks.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'tts',
      filename: 'tts.html',
      template: './src/tts.html'
    })
  ],
  module: {
    rules: [{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|png|jpe?g|gif)$/i,
        use: [{
          loader: 'file-loader',
        }, ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  },
}
