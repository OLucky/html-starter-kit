const merge = require('webpack-merge');
const common = require('./webpack.common');
const dev = require('./webpack.dev');
const prod = require('./webpack.prod');

module.exports = env => {
  return merge.smart(common, env && env.dev ? dev : prod);
}; 
