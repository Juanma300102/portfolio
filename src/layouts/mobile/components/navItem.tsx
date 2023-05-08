import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export interface INavItemProps {
  icon: string;
  selected: boolean;
  onClick: any;
}

export const NavItem = (props: INavItemProps) => {
  const theme: any = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [boxStyle, setBoxStyle] = useState({
    zIndex: 1,
    boxSizing: "border-box",
    borderStyle: props.selected ? "none none solid none" : "none",
    borderWidth: "4px",
    borderColor: theme.schemes.light.primary,
  });
  useEffect(() => {
    console.log(props.selected);
    setBoxStyle({
      zIndex: 1,
      boxSizing: "border-box",
      borderStyle: props.selected ? "none none solid none" : "none",
      borderWidth: "4px",
      borderColor: theme.schemes.light.primary,
    });
  }, [props.selected]);
  return (
    <Box sx={boxStyle} onClick={props.onClick}>
      <img style={{ width: "40px", height: "40px" }} src={props.icon} />
    </Box>
  );
};
