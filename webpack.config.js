const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
  mode: "development",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test:/\.s?css$/i,
        use:[MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
      }
    ],
  },
  plugins:[new MiniCssExtractPlugin()],
  devServer: {
    static: "./dist",
  },
};
