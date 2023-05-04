import { Box } from "@mui/material";
import { NavItem } from "./navItem";
/* import { useTheme } from "@emotion/react";
import { Theme } from "@mui/material"; */

export const Nav = () => {
  // const theme: any = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        boxSizing: "border-box",
        width: "100vw",
        display: "flex",
        zIndex: 2,
      }}
    >
      <NavItem />
      <NavItem />
      <NavItem />
      <NavItem />
    </Box>
  );
};
