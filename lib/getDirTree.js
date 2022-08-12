import process from "process";
import path from "path";
import matter from "gray-matter";
import fs from "fs";

const DOCS_DIR = path.join(process.cwd(), "pages", "docs");

export function getDir() {
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
    dirTree[mainFiles[i]]["path"] = path.join(mainFiles[i]);
    dirTree[mainFiles[i]]["type"] = "file";
    if (mainFiles[i].slice(0, -4) == "index") {
      dirTree[mainFiles[i]]["route"] = "/docs";
    } else {
      dirTree[mainFiles[i]]["route"] = "/docs/" + mainFiles[i].slice(0, -4);
    }
  }

  for (let j in mainFolders) {
    dirTree[mainFolders[j]] = {};
    dirTree[mainFolders[j]]["path"] = path.join(mainFolders[j]);
    dirTree[mainFolders[j]]["route"] = "/docs/" + mainFolders[j];
    dirTree[mainFolders[j]]["type"] = "folder";
    dirTree[mainFolders[j]]["children"] = {};

    var children = getFiles(path.join(DOCS_DIR, mainFolders[j]));

    for (let k in children) {
      dirTree[mainFolders[j]]["children"][children[k]] = {};
      dirTree[mainFolders[j]]["children"][children[k]]["path"] = path.join(
        mainFolders[j],
        children[k]
      );

      dirTree[mainFolders[j]]["children"][children[k]]["type"] = "file";

      if (children[k].slice(0, -4) == "index") {
        dirTree[mainFolders[j]]["children"][children[k]]["route"] =
          "/docs/" + mainFolders[j];
      } else {
        dirTree[mainFolders[j]]["children"][children[k]]["route"] =
          "/docs/" + mainFolders[j] + "/" + children[k].slice(0, -4);
      }
    }
  }

  return dirTree;
}

const dirTree = getDir();

function convertRouteToPath(route) {
  var validRoutes = {};

  for (let i in dirTree) {
    if (dirTree[i]["type"] == "folder") {
      for (let j in dirTree[i]["children"]) {
        var validPage = {};
        validRoutes[dirTree[i]["children"][j.toString()]["route"].toString()] =
          dirTree[i]["children"][j.toString()]["path"].toString();
      }
    } else {
      var validPage = {};
      validRoutes[dirTree[i]["route"].toString()] =
        dirTree[i]["path"].toString();
    }
  }

  return validRoutes[route];
}

function parseFrontmatter(fileRoute) {
  try {
    const data = fs.readFileSync(
      path.join(DOCS_DIR, convertRouteToPath(fileRoute)),
      "utf8"
    );
    const frontmatter = matter(data);
    return frontmatter.data;
  } catch {
    return undefined;
  }
}

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
    dirTree[mainFiles[i]]["path"] = path.join(mainFiles[i]);
    dirTree[mainFiles[i]]["type"] = "file";
    if (mainFiles[i].slice(0, -4) == "index") {
      dirTree[mainFiles[i]]["route"] = "/docs";
      dirTree[mainFiles[i]]["id"] = parseFrontmatter("/docs").id;
      dirTree[mainFiles[i]]["name"] = parseFrontmatter("/docs").name;
    } else {
      dirTree[mainFiles[i]]["route"] = "/docs/" + mainFiles[i].slice(0, -4);
      dirTree[mainFiles[i]]["id"] = parseFrontmatter(
        "/docs/" + mainFiles[i].slice(0, -4)
      ).id;
      dirTree[mainFiles[i]]["name"] = parseFrontmatter(
        "/docs/" + mainFiles[i].slice(0, -4)
      ).name;
    }
  }

  for (let j in mainFolders) {
    dirTree[mainFolders[j]] = {};
    dirTree[mainFolders[j]]["path"] = path.join(mainFolders[j]);
    dirTree[mainFolders[j]]["route"] = "/docs/" + mainFolders[j];
    dirTree[mainFolders[j]]["type"] = "folder";
    dirTree[mainFolders[j]]["children"] = {};

    var children = getFiles(path.join(DOCS_DIR, mainFolders[j]));

    for (let k in children) {
      dirTree[mainFolders[j]]["children"][children[k]] = {};
      dirTree[mainFolders[j]]["children"][children[k]]["path"] = path.join(
        mainFolders[j],
        children[k]
      );

      dirTree[mainFolders[j]]["children"][children[k]]["type"] = "file";

      if (children[k].slice(0, -4) == "index") {
        dirTree[mainFolders[j]]["children"][children[k]]["route"] =
          "/docs/" + mainFolders[j];
        dirTree[mainFolders[j]]["children"][children[k]]["id"] =
          parseFrontmatter("/docs/" + mainFolders[j]).id;
        dirTree[mainFolders[j]]["children"][children[k]]["name"] =
          parseFrontmatter("/docs/" + mainFolders[j]).name;
      } else {
        dirTree[mainFolders[j]]["children"][children[k]]["route"] =
          "/docs/" + mainFolders[j] + "/" + children[k].slice(0, -4);
        dirTree[mainFolders[j]]["children"][children[k]]["id"] =
          parseFrontmatter(
            "/docs/" + mainFolders[j] + "/" + children[k].slice(0, -4)
          ).id;
        dirTree[mainFolders[j]]["children"][children[k]]["name"] =
          parseFrontmatter(
            "/docs/" + mainFolders[j] + "/" + children[k].slice(0, -4)
          ).name;
      }
    }
  }

  return dirTree;
}
