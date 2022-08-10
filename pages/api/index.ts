import type { NextApiRequest, NextApiResponse } from "next";
import { logo } from "@api/ascii";

const Home = (req: NextApiRequest, res: NextApiResponse) => {
  if (req) {
    res
      .status(200)
      .send(
        logo +
          "\n\n" +
          "Hello! This is the offical API endpoint for QED.\n" +
          "For information, read the documentation here:\n\n" +
          " - https://qed.vercel.app/docs/api" +
          "\n\n\n" +
          "       __________ . . . __________\n\n\n\n" +
          " > Website: https://qed.vercel.app\n" +
          " > Github: https://github.com/qedhere\n" +
          " > Twitter: https://twitter.com/qedhere\n" +
          " > Email: qedhere@outlook.com"
      );
  }
};

export default Home;
