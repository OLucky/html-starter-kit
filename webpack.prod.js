const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
      minChunks: 2
    }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: ''
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE_BUNDLE ? 'server' : 'disabled'
    }),
    new CleanWebpackPlugin(['build']),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'src/static'),
        to: path.join(__dirname, 'build'),
        ignore: ['placeholder.txt']
      }
    ])
  ]
};
