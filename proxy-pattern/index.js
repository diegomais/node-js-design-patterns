var path = require("path");

var FS_Proxy = require("./FS_Proxy");
var fs = new FS_Proxy(require("fs"));

var txtFile = path.join(__dirname, "Readme.txt");
var mdFile = path.join(__dirname, "Readme.md");

var result = (error, contents) => {
  console.log("reading file...");

  if (error) {
    console.log("\x07");
    console.error(error);
  } else {
    console.log(contents);
  }
};

fs.readFile(txtFile, "UTF-8", result);
fs.readFile(mdFile, "UTF-8", result);
