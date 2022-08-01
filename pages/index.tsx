import type { NextPage } from "next";
import * as React from "react";

import Header from "@components/Header/Header";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Landing from "@components/pages/index/Landing";
import GridBackground from "@components/pages/index/GridBackground";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { useSpring, animated } from "@react-spring/web";
import { useTheme } from "next-themes";

import styles from "@styles/Home.module.css";

const Home: NextPage = () => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState<any | null>(null);
  React.useEffect(() => {
    if (typeof theme != undefined) {
      setCurrentTheme(theme);
    }
  }, [theme]);
  const boxAnimProps = useSpring({
    to: {
      opacity: 1,
      scale: 1,
    },
    from: {
      opacity: 0,
      scale: 0.9,
    },
    delay: 250,
    config: { mass: 1, tension: 180, friction: 50 },
  });

  return (
    <div>
      <Header />
      <Parallax pages={5} style={{ top: "0", left: "0" }} id="body">
        <Landing />
        <GridBackground />
        <animated.div style={boxAnimProps}>
          <ParallaxLayer className={styles.Home} offset={0} speed={2}>
            <Canvas style={{ backgroundColor: "transparent" }}>
              <OrbitControls enableZoom={false} enablePan={false} />
              {currentTheme == "dark" ? (
                <ambientLight intensity={0} color="white" />
              ) : (
                <ambientLight intensity={1} color="black" />
              )}
              {currentTheme == "dark" ? (
                <hemisphereLight
                  intensity={1}
                  color="white"
                  groundColor="black"
                />
              ) : (
                <hemisphereLight
                  intensity={10}
                  color="white"
                  groundColor="black"
                />
              )}
              <Box />
            </Canvas>
          </ParallaxLayer>
        </animated.div>
      </Parallax>
    </div>
  );
};

const Box = () => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState<any | null>(null);
  React.useEffect(() => {
    if (typeof theme != undefined) {
      setCurrentTheme(theme);
    }
  }, [theme]);
  const mesh = React.useRef("null");
  //@ts-ignore
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.0025));

  return (
    // @ts-ignore
    <mesh rotation={[10, 10, 20]} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1.5, 1.5, 1.5]} />
      {currentTheme == "dark" ? (
        <meshStandardMaterial color="#111111" />
      ) : (
        <meshStandardMaterial color="#999999" />
      )}
    </mesh>
  );
};
export default Home;
