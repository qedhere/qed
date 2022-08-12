import type { NextApiRequest, NextApiResponse } from "next";
import { parseFrontmatter } from "@lib/parseFrontmatter.js";

const Meta = (req: NextApiRequest, res: NextApiResponse) => {
  if (req) {
    res.send(JSON.stringify(parseFrontmatter("/docs"), null, 2));
  }
};

export default Meta;
