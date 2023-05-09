import { NavItem } from "./navItem";
import homeIcon from "@/assets/mobileNav/ic_round-person.svg";
import profileIcon from "@/assets/mobileNav/ic_round-profile.svg";
import briefcaseIcon from "@/assets/mobileNav/ic_round-briefcase.svg";
import contactIcon from "@/assets/mobileNav/ic_round-contact.svg";
import { CSSProperties } from "react";

export const Nav = (props: { sx: CSSProperties }) => {
  return (
    <nav style={props.sx}>
      <NavItem icon={homeIcon} to="/" />
      <NavItem icon={profileIcon} to="/me" />
      <NavItem icon={briefcaseIcon} to="/projects" />
      <NavItem icon={contactIcon} to="/contact" />
    </nav>
  );
};
