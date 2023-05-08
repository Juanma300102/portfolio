import { Box, SxProps } from "@mui/material";
import { NavItem } from "./navItem";
import homeIcon from "@/assets/mobileNav/ic_round-person.svg";
import profileIcon from "@/assets/mobileNav/ic_round-profile.svg";
import briefcaseIcon from "@/assets/mobileNav/ic_round-briefcase.svg";
import contactIcon from "@/assets/mobileNav/ic_round-contact.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux";
import { PAGES } from "@/layouts/mobile/state";
import { selectPage } from "@/layouts/mobile/state";
import { useNavigate } from "react-router-dom";

export const Nav = (props: { sx: SxProps }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pageSelected = useSelector(
    (state: RootState) => state.mobilePageSelected.value,
  );

  const onClickHandler = (page: PAGES, target: string) => {
    dispatch(selectPage(page));
    navigate(target);
  };
  return (
    <Box sx={props.sx}>
      <NavItem
        icon={homeIcon}
        onClick={onClickHandler(PAGES.home, "/")}
        selected={pageSelected === PAGES.home}
      />
      <NavItem
        icon={profileIcon}
        onClick={onClickHandler(PAGES.profile, "/me")}
        selected={pageSelected === PAGES.profile}
      />
      <NavItem
        icon={briefcaseIcon}
        onClick={onClickHandler(PAGES.projects, "/projects")}
        selected={pageSelected === PAGES.projects}
      />
      <NavItem
        icon={contactIcon}
        onClick={onClickHandler(PAGES.contact, "/contact")}
        selected={pageSelected === PAGES.contact}
      />
    </Box>
  );
};
