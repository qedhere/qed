import process from "process";
import matter from "gray-matter";
import path from "path";
import fs from "fs";

import { getDirTree } from "./getDirTree";

const DOCS_DIR = path.join(process.cwd(), "pages", "docs");
const dirTree = getDirTree()

function convertRouteToPath(route){
  var validRoutes = {}

  for (let i in dirTree){
    if (dirTree[i]["type"] == "folder"){
      for (let j in dirTree[i]["children"]){
        var validPage = {}
        validRoutes[dirTree[i]["children"][j.toString()]['route'].toString()] = dirTree[i]["children"][j.toString()]['path'].toString()
      }
    } else {
      var validPage = {}
      validRoutes[dirTree[i]['route'].toString()] = dirTree[i]['path'].toString()
    }
  }

  return validRoutes[route]
}


export function parseFrontmatter(fileRoute) {
  try {
    const data = fs.readFileSync(path.join(DOCS_DIR, convertRouteToPath(fileRoute)), "utf8");
    const frontmatter = matter(data);
    return frontmatter.data;
  } catch {
    return undefined;
  }
}
