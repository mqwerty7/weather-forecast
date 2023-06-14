const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.ProgressPlugin({
      percentBy: 'modules'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devServer: {
    open: true,
    port: 8008,
    hot: true,
    historyApiFallback: true
  }
};
