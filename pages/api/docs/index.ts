import type { NextApiRequest, NextApiResponse } from "next";
import error from "@api/error_codes.json";
import { parseFrontmatter } from "@lib/parseFrontmatter";
import { docsTree } from "@lib/getDirTree";

const Docs = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.route == undefined) {
    res.send(JSON.stringify(docsTree, null, 2))
  } else {
    const fetchData = () => {
      const frontmatter = parseFrontmatter(req.query!.route!.toString());
      if (frontmatter == undefined) {
        res.send(error.ERR_INVALID_ARG + "?route=" + req.query.route);
      } else {
        res.send(JSON.stringify(frontmatter, null, 2));
      }
    };

    fetchData();
  }
};

export default Docs;
