import { Box, SxProps } from "@mui/material";
import { NavItem } from "./navItem";
/* import { useTheme } from "@emotion/react";
import { Theme } from "@mui/material"; */

export const Nav = (props: { sx: SxProps }) => {
  return (
    <Box sx={props.sx}>
      <NavItem />
      <NavItem />
      <NavItem />
      <NavItem />
    </Box>
  );
};
