import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import { backgroudParticlesConfig } from "../../shared";
import { useTheme } from "@emotion/react";
import { Nav } from "./components";

export default () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
    console.log(engine);
  }, []);
  const particlesLoaded = useCallback(async () => {}, []);

  const theme: any = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        padding: 3,
        bgcolor: theme.schemes.light.onPrimaryContainer,
      }}
    >
      <Outlet />
      <Nav />
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      >
        <Particles
          id="tsparticles"
          width="100vw"
          height="100vh"
          init={particlesInit}
          loaded={particlesLoaded}
          canvasClassName="particles-canvas"
          options={backgroudParticlesConfig}
        />
      </div>
    </Box>
  );
};
