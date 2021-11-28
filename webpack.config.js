const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // for extracting css in seperate file
const HtmlWebpackPlugin = require("html-webpack-plugin"); // automatically adding index.html file in final output
const {CleanWebpackPlugin} = require("clean-webpack-plugin"); // removing old build output directory 
const path = require("path");
module.exports = {
  mode: "development",
  devtool: false, // just to make js more readable??
  output: {
    path: path.resolve(__dirname, "dist"), // to make it know the output build abs path for clean
    assetModuleFilename: "images/[hash][ext][query]", // for images to put them in seperate dir
  },
  module: {
    // all the rules for different files
    rules: [
      // images
      {
        test: /\.(png|jpe?g|svg|gif)/,
        type: "asset",
      },
      // js/jsx files
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // sass scss css
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" }, // idk just fix minicss error 
          },
          // order matter last to first 
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  // to resolve test.jsx test.js from import test 
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // plugins used by webpack
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  // dev server stuff 
  devServer: {
    static: "./dist",
    hot: true,
  },
};
