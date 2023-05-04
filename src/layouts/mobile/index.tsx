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
  }, []);
  const particlesLoaded = useCallback(async () => {}, []);
  const theme: any = useTheme();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        boxSizing: "border-box",
        padding: 3,
        bgcolor: theme.schemes.light.onPrimaryContainer,
      }}
    >
      <Outlet />
      <Nav />
      <Particles
        id="tsparticles"
        style={{ position: "absolute", zIndex: 1 }}
        init={particlesInit}
        loaded={particlesLoaded}
        options={backgroudParticlesConfig}
      />
    </Box>
  );
};
