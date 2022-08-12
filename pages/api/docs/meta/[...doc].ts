import type { NextApiRequest, NextApiResponse } from "next";
import error from "@api/error_codes.json";
import { parseFrontmatter } from "@lib/parseFrontmatter.js";

const MetaDoc = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.doc!.length == 1) {
    try {
      const matter = JSON.stringify(
        parseFrontmatter("/docs/" + req.query.doc![0]),
        null,
        2
      );

      if (matter == undefined) {
        res.send(
          error.ERR_INVALID_ROUTE +
            "`/" +
            req.query.doc!.toString().replace(",", "/") +
            "`"
        );
      } else {
        res.send(matter);
      }
    } catch {
      res.send(
        error.ERR_INVALID_ROUTE +
          "`/" +
          req.query.doc!.toString().replace(",", "/") +
          "`"
      );
    }
  } else if (req.query.doc!.length == 2) {
    try {
      const matter = JSON.stringify(
        parseFrontmatter(
          "/docs/" + req.query.doc![0] + "/" + req.query.doc![1]
        ),
        null,
        2
      );

      if (matter == undefined) {
        res.send(
          error.ERR_INVALID_ROUTE +
            "`/" +
            req.query.doc!.toString().replace(",", "/") +
            "`"
        );
      } else {
        res.send(matter);
      }
    } catch {
      res.send(
        error.ERR_INVALID_ROUTE +
          "`/" +
          req.query.doc!.toString().replace(",", "/") +
          "`"
      );
    }
  } else {
    res.send(
      error.ERR_INVALID_ROUTE +
        "`/" +
        req.query.doc!.toString().replace(",", "/") +
        "`"
    );
  }
};

export default MetaDoc;
