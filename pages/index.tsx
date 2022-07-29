import type { NextPage } from "next";

import Header from "@components/Header/Header";
import { Parallax } from "@react-spring/parallax";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Parallax id="body" pages={2}>
      </Parallax>
    </div>
  );
};

export default Home;
