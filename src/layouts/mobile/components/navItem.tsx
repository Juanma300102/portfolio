import { Box } from "@mui/material";

export const NavItem = (props: { icon: string }) => {
  return (
    <Box sx={{ zIndex: 1 }}>
      <img style={{ width: "40px", height: "40px" }} src={props.icon} />
    </Box>
  );
};
