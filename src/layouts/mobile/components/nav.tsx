import { Box, SxProps } from "@mui/material";
import { NavItem } from "./navItem";
import homeIcon from "../../../assets/mobileNav/ic_round-person.svg";
import profileIcon from "../../../assets/mobileNav/ic_round-profile.svg";
import briefcaseIcon from "../../../assets/mobileNav/ic_round-briefcase.svg";
import contactIcon from "../../../assets/mobileNav/ic_round-contact.svg";

export const Nav = (props: { sx: SxProps }) => {
  return (
    <Box sx={props.sx}>
      <NavItem icon={homeIcon} />
      <NavItem icon={profileIcon} />
      <NavItem icon={briefcaseIcon} />
      <NavItem icon={contactIcon} />
    </Box>
  );
};
