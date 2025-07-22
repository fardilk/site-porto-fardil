import React, { useEffect, useState } from "react";
import NavbarLink from "./NavBarLink";
import { FiMenu } from "react-icons/fi";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/articles", label: "Articles" },
  { to: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className={`flex flex-col items-start select-none ${scrolled ? '' : ''}`}>
          <span className={`font-extrabold leading-none ${scrolled ? 'text-white' : 'text-primary'} text-2xl md:text-3xl lg:text-4xl`}>Fardil</span>
          <div className="flex flex-row items-center mt-0.5">
            <span className={`font-medium leading-none mr-2 ${scrolled ? 'text-white/70' : 'text-primary/70'} text-sm md:text-base lg:text-lg`}>Khalidi</span>
            <span className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-[#fca311] leading-none" style={{fontSize: '1.2em'}}>•</span>
          </div>
        </div>
        {/* Hamburger menu for <=980px */}
        <div className="block lg:hidden">
          <button
            aria-label="Open menu"
            className="p-1 h-8 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            style={{ minHeight: '32px', height: '32px' }}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <FiMenu size={24} className={scrolled ? "text-white" : "text-primary"} />
          </button>
        </div>
        {/* Desktop nav links */}
        <div className="hidden lg:flex gap-1 md:gap-3">
          {navItems.map((item) => (
            <NavbarLink key={item.to} to={item.to} scrolled={scrolled}>
              {item.label}
            </NavbarLink>
          ))}
        </div>
      </div>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="lg:hidden fixed top-16 right-0 w-2/5 max-w-xs bg-white shadow-md border-t border-primary px-4 py-3 z-50" style={{ minWidth: '180px' }}>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavbarLink key={item.to} to={item.to} scrolled={scrolled}>
                {item.label}
              </NavbarLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;