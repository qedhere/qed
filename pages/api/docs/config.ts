import type { NextApiRequest, NextApiResponse } from "next";
import config from "@docs/config.json";

const Meta = (req: NextApiRequest, res: NextApiResponse) => {
  if (req) {
    res.send(JSON.stringify(config, null, 2));
  }
};

export default Meta;
