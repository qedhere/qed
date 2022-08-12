import type { NextApiRequest, NextApiResponse } from "next";
import config from "@docs/config.json";
import { getDirTree } from "@lib/getDirTree";

const Meta = (req: NextApiRequest, res: NextApiResponse) => {
  if (req) {
    var sidebar = {};
    var children = [];
    const dirTree = getDirTree();

    for (let i in config) {
      children.push({
        component: "Section",
        // @ts-ignore
        text: config[i],
        // @ts-ignore
        key: i,
      });

      var currentFiles = [];

      // @ts-ignore
      for (let j in dirTree[i.toString().substring(1)]["children"]) {
        // @ts-ignore
        currentFiles.push(dirTree[i.toString().substring(1)]["children"][j]);
      }

      currentFiles.sort(function (a, b) {
        return a.id - b.id || a.name.localeCompare(b.name);
      });

      for (let k in currentFiles) {
        children.push({
          component: "SidebarLink",
          href: currentFiles[k].route,
          key: currentFiles[k].route,
          name: currentFiles[k].name,
        });
      }
    }
    // @ts-ignore
    sidebar["children"] = children;
    res.send(JSON.stringify(children, null, 2));
  }
};

export default Meta;
