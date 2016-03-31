var path = require("path");
console.log(path.resolve(__dirname, "build"));
console.log(path.resolve(__dirname));
module.exports = {
    entry: {
        app: ["./app/main.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    }
};
