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
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100vw",
        height: "100vh",
        bgcolor: theme.schemes.light.onPrimaryContainer,
        padding: 3,
        boxSizing: "border-box",
      }}
    >
      <Outlet />
      <Nav />
      <Particles
        id="tsparticles"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        init={particlesInit}
        loaded={particlesLoaded}
        options={backgroudParticlesConfig}
      />
    </Box>
  );
};
