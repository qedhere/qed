import process from "process";
import path from "path";
import fs from "fs";

const DOCS_DIR = path.join(process.cwd(), "pages", "docs");

export function getDirTree() {
  var dirTree = {};

  function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path + "/" + file).isDirectory();
    });
  }

  function getFiles(path) {
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path + "/" + file).isFile();
    });
  }

  const mainFolders = getDirectories(DOCS_DIR);
  const mainFiles = getFiles(DOCS_DIR);

  for (let i in mainFiles) {
    dirTree[mainFiles[i]] = {};
    dirTree[mainFiles[i]]["route"] = path.join(mainFiles[i]);
    dirTree[mainFiles[i]]["type"] = "file";
    if (mainFiles[i].slice(0, -4) == "index") {
      dirTree[mainFiles[i]]["href"] = "docs/";
    } else {
      dirTree[mainFiles[i]]["href"] = "docs/" + mainFiles[i].slice(0, -4);
    }
  }

  for (let j in mainFolders) {
    dirTree[mainFolders[j]] = {};
    dirTree[mainFolders[j]]["route"] = path.join(mainFolders[j]);
    dirTree[mainFolders[j]]["type"] = "folder";
    dirTree[mainFolders[j]]["children"] = {};

    var children = getFiles(path.join(DOCS_DIR, mainFolders[j]));

    for (let k in children) {
      dirTree[mainFolders[j]]["children"][children[k]] = {};
      dirTree[mainFolders[j]]["children"][children[k]]["route"] = path.join(
        mainFolders[j],
        children[k]
      );

      dirTree[mainFolders[j]]["children"][children[k]]["type"] = "file";

      if (children[k].slice(0, -4) == "index") {
        dirTree[mainFolders[j]]["children"][children[k]]["href"] =
          "docs/" + mainFolders[j];
      } else {
        dirTree[mainFolders[j]]["children"][children[k]]["href"] =
          "docs/" + mainFolders[j] + "/" + children[k].slice(0, -4);
      }
    }
  }

  return dirTree;
}
