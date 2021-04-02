const path = require("path");
// entry  --> output

module.exports = {
  mode: "development",
  // where it should start
  entry: "./src/app.js",
  // where it should end
  output: {
    path: path.join(__dirname, "public"),
    // filename you can put anything name that you like
    filename: "bundle.js",
  },
};