import type { NextApiRequest, NextApiResponse } from "next";
import error from "@api/error_codes.json";
import { parseFrontmatter } from "@lib/parseFrontmatter.js";

const MetaDoc = (req: NextApiRequest, res: NextApiResponse) => {
  res.send(req.query.doc)
};

export default MetaDoc;
