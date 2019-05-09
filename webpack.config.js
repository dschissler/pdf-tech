const path = require('path')

const rootDir = path.resolve(__dirname) + '/'
const srcDir = `${rootDir}src/`
const distDir = `${rootDir}dist/`

module.exports = {
  mode: 'production',
  context: srcDir,
  entry: {
    pdf: 'pdf.js',
  },
  output: {
    path: distDir,
    filename      : 'assets/js/[name].js',
    chunkFilename : 'assets/js/chunk/[id].js',
  },
  optimization: {
    // We no not want to minimize our code.
    minimize: false
  },
  resolve: {
    extensions: [
      '.js',
    ],
    modules: [
      srcDir,
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file)
        ),
        options: {
          cwd: rootDir,
          configFile: `${rootDir}babel.config.js`,
        },
      },
    ],
  },
  plugins: [
  ],
}
