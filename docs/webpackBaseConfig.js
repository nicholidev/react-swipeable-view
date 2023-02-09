const path = require('path');

// This module isn't used to build the documentation. We use Next.js for that.
// This module is used by the visual regression tests to run the demos.
module.exports = {
  context: path.resolve(__dirname),
  resolve: {
    modules: [path.join(__dirname, '../'), 'node_modules'],
    alias: {
      'react-swipeable-view': path.resolve(__dirname, '../packages/react-swipeable-view/src'),
      'react-swipeable-view-core': path.resolve(
        __dirname,
        '../packages/react-swipeable-view-core/src',
      ),
      'react-swipeable-view-utils': path.resolve(
        __dirname,
        '../packages/react-swipeable-view-utils/src',
      ),
      docs: __dirname,
    },
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },
};
