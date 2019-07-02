const path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    // output direciona ao local que vai ser jogado o Bundle (código transpilado pelo webpack)
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  devServer: {
    // devServer direciona ao local que vai encontrar o nosso index.html
    contentBase: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Expressão Regular usa as barras
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  }
};
