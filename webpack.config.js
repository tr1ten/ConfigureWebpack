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
        test:/\.(s[ac]|c)ss$/i,
        use:[MiniCssExtractPlugin.loader,"css-loader","postcss-loader","sass-loader"]
      }
    ],
  },
  plugins:[new MiniCssExtractPlugin()],
  devServer: {
    static: "./dist",
    hot:true,
  },
};
