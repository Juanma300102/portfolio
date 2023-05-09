import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";

export interface INavItemProps {
  to: string;
  icon: string;
}

const activeStyle: CSSProperties = {
  zIndex: 1,
  boxSizing: "border-box",
  borderStyle: "none none solid none",
  borderWidth: "2px",
  borderColor: "#006783",
};

const pendingStyle: CSSProperties = {
  zIndex: 1,
  boxSizing: "border-box",
  borderStyle: "none",
  borderWidth: "2px",
  borderColor: "#006783",
};

export const NavItem = (props: INavItemProps) => {
  return (
    <NavLink
      to={props.to}
      style={({ isActive }) => {
        return isActive ? activeStyle : pendingStyle;
      }}
    >
      <img style={{ width: "40px", height: "40px" }} src={props.icon} />
    </NavLink>
  );
};
