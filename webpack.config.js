const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const TSLintPlugin = require("tslint-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./index.tsx",
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    crossOriginLoading: "anonymous",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    publicPath: "/",
    port: 8000,
    historyApiFallback: true,
    open: true,
  },

  context: path.resolve(__dirname, "src"),

  target: "web",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      app: path.resolve(__dirname, "src/"),
    },
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        use: ["file-loader"],
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: path.resolve(__dirname, "node_modules"),
          name: "vendor",
          enforce: true,
        },
      },
    },
    runtimeChunk: {
      name: "manifest",
    },
    minimize: false,
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      // favicon: "./assets/img/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "./styles/[name].css",
    }),
    new TSLintPlugin({
      files: ["./src/**/*.tsx"],
    }),
    new Dotenv(),
  ],
};
