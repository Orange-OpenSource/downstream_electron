"use strict";
const makeDir = require("make-dir");
const fs = require("fs");
const path = require("path");

function saveFile (filePath, fileName, value, callback) {
  makeDir(filePath).then(function (value) {
    const fileUrl = path.resolve(filePath + "/" + fileName);
    fs.writeFile(fileUrl, value, "utf-8", callback);
  }, function (error) {
    callback(error);
  });
}

module.exports = saveFile;
