import { Box, SxProps } from "@mui/material";
import { NavItem } from "./navItem";
import homeIcon from "@/assets/mobileNav/ic_round-person.svg";
import profileIcon from "@/assets/mobileNav/ic_round-profile.svg";
import briefcaseIcon from "@/assets/mobileNav/ic_round-briefcase.svg";
import contactIcon from "@/assets/mobileNav/ic_round-contact.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import { PAGES } from "@/layouts/mobile/state";
import { useNavigate } from "react-router-dom";

export const Nav = (props: { sx: SxProps }) => {
  const navigate = useNavigate();
  const pageSelected = useSelector(
    (state: RootState) => state.mobilePageSelected.value,
  );
  const handleClick = (to: string) => {
    console.log(pageSelected);
    navigate(to);
  };
  return (
    <Box sx={props.sx}>
      <NavItem
        icon={homeIcon}
        onClick={() => handleClick("/")}
        selected={pageSelected === PAGES.home ? true : false}
      />
      <NavItem
        icon={profileIcon}
        onClick={() => handleClick("/me")}
        selected={pageSelected === PAGES.profile ? true : false}
      />
      <NavItem
        icon={briefcaseIcon}
        onClick={() => handleClick("/projects")}
        selected={pageSelected === PAGES.projects ? true : false}
      />
      <NavItem
        icon={contactIcon}
        onClick={() => handleClick("/contact")}
        selected={pageSelected === PAGES.contact ? true : false}
      />
    </Box>
  );
};
