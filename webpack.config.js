module.exports = {
  entry: './app',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test   :/\.jsx?$/,
        exclude:/(node_modules|bower_components)/,
        loader :'babel',
        query  :{
            presets:['react','es2015']
        }
      },
     { test: /\.css$/, loader: 'style!css' },
     { test: /\.scss$/, loader: 'style!css!sass' },
    ]
  },
  devServer: {
    contentBase: './build',
    inline: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css']
  }
}
