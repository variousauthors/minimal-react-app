const Dotenv = require('dotenv-webpack');
const WebpackAutoInject = require('webpack-auto-inject-version')

module.exports = env => {
  let filename = "index.js"

  return {
    entry: './src/index.tsx',
    output: {
      path: __dirname + "/dist",
      filename,
      library: 'SomeLibrary',
      libraryTarget: 'umd',
      publicPath: "/dist/"
    },

    // Enable sourcemaps for debugging webpack's output
    devtool: "source-map",

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
      rules: [
        // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader",
          exclude: [
            /\.stories.tsx?$/
          ]
        },
        // All output ".js" files will have any sourcemaps re-processed by "source-map-loader".
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader",
          exclude: [
            /node_modules/
          ]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"]
        }
      ]
    },
    plugins: [
      new Dotenv(),
      new WebpackAutoInject()
    ],
  };
}
