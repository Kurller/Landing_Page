import { useState } from "react";
import logo from "../assets/logo.jpg";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { LINKS } from "../constants";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="border-b-2 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8 px-4">
        
        {/* Logo */}
        <a href="#">
          <img src={logo} width={150} height={50} alt="Company Logo" />
        </a>

        {/* Toggle (mobile only) */}
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {LINKS.map((link) => (
            <a
              key={link.name}
              href={link.link}
              className="uppercase text-sm font-medium text-cyan-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          ${isOpen ? "block" : "hidden"}
          md:hidden
          absolute
          top-full
          left-0
          w-full
          bg-neutral-50
          py-5
          px-4
          border-b-4
        `}
      >
        {LINKS.map((link) => (
          <a
            key={link.name}
            href={link.link}
            className="uppercase text-lg font-medium block py-2 tracking-wide"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
