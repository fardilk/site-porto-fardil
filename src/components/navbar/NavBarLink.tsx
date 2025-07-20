import React from "react";
import { NavLink } from "react-router-dom";

type NavbarLinkProps = {
  to: string;
  children: React.ReactNode;
  scrolled?: boolean;
};

const NavbarLink: React.FC<NavbarLinkProps> = ({ to, children, scrolled }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      "px-3 py-2 rounded-md text-sm font-medium border-b-2 transition-all duration-200 " +
      (scrolled
        ? "text-white hover:text-accent"
        : "text-secondary hover:text-accent") +
      " " +
      (isActive
        ? "border-accent"
        : "border-transparent")
    }
    end={to === "/"}
  >
    {children}
  </NavLink>
);

export default NavbarLink;
