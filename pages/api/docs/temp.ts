import type { NextApiRequest, NextApiResponse } from "next";
import { DOCS_DIR } from "@lib/parseFrontmatter.js";

const Temp = (req: NextApiRequest, res: NextApiResponse) => {
  res.send(DOCS_DIR)
};

export default Temp;
