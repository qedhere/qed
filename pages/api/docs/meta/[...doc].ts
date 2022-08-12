import type { NextApiRequest, NextApiResponse } from "next";
import error from "@api/error_codes.json";
import { parseFrontmatter } from "@lib/parseFrontmatter.js";

const MetaDoc = (req: NextApiRequest, res: NextApiResponse) => {
  if (Array(req.query.doc!).length == 1) {
    try {
      const matter = JSON.stringify(
        parseFrontmatter("/docs/" + req.query.doc![0]),
        null,
        2
      );

      if (matter == undefined) {
        res.send(error.ERR_INVALID_ROUTE);
      } else {
        res.send(matter);
      }
    } catch {
      res.send(error.ERR_INVALID_ROUTE);
    }
  } else if (Array(req.query.doc!).length == 2) {
    try {
      const matter = JSON.stringify(
        parseFrontmatter(
          "/docs/" + req.query.doc![0] + "/" + req.query.doc![1]
        ),
        null,
        2
      );

      if (matter == undefined) {
        res.send(error.ERR_INVALID_ROUTE);
      } else {
        res.send(matter);
      }
    } catch {
      res.send(error.ERR_INVALID_ROUTE);
    }
  } else {
    res.send(error.ERR_INVALID_ROUTE);
  }
};

export default MetaDoc;
