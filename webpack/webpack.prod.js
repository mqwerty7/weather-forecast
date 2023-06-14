const webpack = require('webpack');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()]
  }
};
