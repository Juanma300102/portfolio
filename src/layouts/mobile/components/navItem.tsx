import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
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
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.5 }}>
      <NavLink
        to={props.to}
        style={({ isActive }) => {
          return isActive ? activeStyle : pendingStyle;
        }}
      >
        <img style={{ width: "40px", height: "40px" }} src={props.icon} />
      </NavLink>
    </motion.div>
  );
};
