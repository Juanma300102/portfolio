import { Box } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { useCallback, useEffect } from "react";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import { backgroudParticlesConfig } from "@/shared";
import { useTheme } from "@emotion/react";
import { Nav } from "@/layouts/mobile/components";
import { useDispatch } from "react-redux";
import { PAGES, selectPage } from "./state";

export default () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const theme: any = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async () => {}, []);

  useEffect(() => {
    switch (location.pathname) {
      case "/": {
        console.log("dispatch select");
        dispatch(selectPage(PAGES.home));
      }
      case "/me": {
        dispatch(selectPage(PAGES.profile));
      }
      case "/projects": {
        dispatch(selectPage(PAGES.projects));
      }
      case "/contact": {
        dispatch(selectPage(PAGES.contact));
      }
    }
  }, [location]);

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
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Outlet />
      </Box>
      <Nav
        sx={{
          boxSizing: "border-box",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          padding: 2,
          zIndex: 1,
        }}
      />
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
