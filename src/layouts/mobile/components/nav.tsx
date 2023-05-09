import { Box, SxProps } from "@mui/material";
import { NavItem } from "./navItem";
import homeIcon from "@/assets/mobileNav/ic_round-person.svg";
import profileIcon from "@/assets/mobileNav/ic_round-profile.svg";
import briefcaseIcon from "@/assets/mobileNav/ic_round-briefcase.svg";
import contactIcon from "@/assets/mobileNav/ic_round-contact.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux";
import { PAGES, selectPage } from "@/layouts/mobile/state";
import { useNavigate } from "react-router-dom";

export const Nav = (props: { sx: SxProps }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pageSelected = useSelector(
    (state: RootState) => state.mobilePageSelected.value,
  );
  const handleClick = (to: string, page: PAGES) => {
    dispatch(selectPage(page));
    navigate(to);
  };
  return (
    <Box sx={props.sx}>
      <NavItem
        icon={homeIcon}
        onClick={() => handleClick("/", PAGES.home)}
        selected={pageSelected === PAGES.home ? true : false}
      />
      <NavItem
        icon={profileIcon}
        onClick={() => handleClick("/me", PAGES.profile)}
        selected={pageSelected === PAGES.profile ? true : false}
      />
      <NavItem
        icon={briefcaseIcon}
        onClick={() => handleClick("/projects", PAGES.projects)}
        selected={pageSelected === PAGES.projects ? true : false}
      />
      <NavItem
        icon={contactIcon}
        onClick={() => handleClick("/contact", PAGES.contact)}
        selected={pageSelected === PAGES.contact ? true : false}
      />
    </Box>
  );
};
