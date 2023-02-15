const path = require('path');
const nodeExternals = require('webpack-node-externals')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './dist/index.js', // arquivo de entrada
    target: 'node',
    mode:'production',
    output: {
      path: path.resolve(__dirname, 'build'), // pasta de saída
      filename: 'bundle.js' // nome do arquivo de saída
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          // {
          //   test: /\.ejs$/,
          //   exclude: /(node_modules)/,
          //   use: {
          //     loader: 'ejs-loader',
          //     options: {
          //       esModule: false
          //     }
          //   }
          // },
        ]
      },
    plugins: [
      // new HtmlWebpackPlugin({
      //   template: '!!raw-loader!./dist/views/public/index.ejs',
      //   filename: 'public/index.ejs',
      // }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: './src/views/public/',
            to: 'public/',
          },
        ],
      }),
    ]
  };