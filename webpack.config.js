module.exports = {
  entry: './app',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["es2015"]
        }
      }
    ]
  },
  devServer: {
    contentBase: './build',
    inline: true
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  }
}
