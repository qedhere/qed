import type { NextApiRequest, NextApiResponse } from "next";
import { DOCS_DIR } from "@lib/parseFrontmatter.js";
import fs from "fs"

const Temp = (req: NextApiRequest, res: NextApiResponse) => {
  res.send(fs.readdirSync(DOCS_DIR))
};

export default Temp;
