module.exports = {
  entry: './webpack/application/index.js',
  output: {
    path: './public/webpack',
  },
  module: {
    rules: [
      {
        test: /.*\.pcss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', query: { importLoaders: 1 } },
          { loader: 'postcss-loader' }          
        ]
      }
    ],
  },

};