import type { NextApiRequest, NextApiResponse } from "next";
import error from "@api/error_codes.json";
import { getDirTree } from "@lib/getDirTree.js";

const Docs = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const doc = req!.query!.doc!.toString() as string;
    const fileTree = getDirTree() as Object;
    // @ts-ignore
    const data = JSON.stringify(fileTree[doc.toString()], null, 2);

    if (data == undefined) {
      res.send(error.ERR_INVALID_ROUTE);
    } else {
      res.send(data);
    }
  } catch {
    res.send(error.ERR_INVALID_ROUTE);
  }
};

export default Docs;
