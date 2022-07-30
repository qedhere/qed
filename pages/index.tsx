import type { NextPage } from "next";

import Header from "@components/Header/Header";
import { Parallax } from "@react-spring/parallax";

import Landing from "@components/pages/index/Landing";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Parallax pages={2} style={{ top: "0", left: "0" }} id="body">
        <Landing />
      </Parallax>
    </div>
  );
};

export default Home;
