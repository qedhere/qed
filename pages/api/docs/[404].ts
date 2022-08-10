import type { NextApiRequest, NextApiResponse } from "next";

const Error = (req: NextApiRequest, res: NextApiResponse) => {
  if (req) {
    res.status(200).send("404");
  }
};

export default Error;
