import React, { useEffect, useState } from "react";
import NavbarLink from "./NavBarLink";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/articles", label: "Articles" },
  { to: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={
      "w-full border-b fixed top-0 left-0 z-50 transition-all duration-300 " +
      (scrolled
        ? "bg-primary border-primary shadow-md"
        : "bg-transparent border-transparent")
    }>
      <div className="w-full max-w-1200 md:w-4/5 mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-xl tracking-wide text-accent transition-colors">
          Fardil <span className="text-white">KHALIDI</span>
        </div>
        <div className="flex gap-1 md:gap-3">
          {navItems.map((item) => (
            <NavbarLink key={item.to} to={item.to} scrolled={scrolled}>
              {item.label}
            </NavbarLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;