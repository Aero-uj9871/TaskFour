import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle

  return (
    <nav className="w-full h-[4rem] md:h-[5.5rem] shadow-sm py-1.5 flex items-center bg-[#3c64b1]/6 relative">
      <div className="w-[80%] mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/">
          <img
            className="h-[1.5rem] w-[8rem] md:h-[2.413rem] md:w-[11rem] lg:w-[12.8rem] cursor-pointer"
            src={logo}
            alt="VillaCrest"
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#373f41] lg:hidden ml-auto flex items-center text-2xl"
        >
          {isOpen ? <X size={28} /> : <Menu className="text-[#373f41]" size={28} />}
        </button>

        <div className="hidden lg:flex md:gap-3 lg:gap-5 xl:gap-10 items-center text-wrap">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/villas", label: "Villas" },
            { to: "/services", label: "Services" },
            { to: "/partner", label: "Partner with us" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-[0.85rem] font-semibold font-navabarLinks transition-colors duration-300 ${isActive
                  ? "text-[#6d87cb] font-bold"
                  : "text-[#373f41] hover:text-[#6d87cb]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <button className="bg-primary py-[0.6rem] px-[1.9rem] text-[0.85rem] h-[1rem] w-[5rem] md:h-[2.65rem] md:w-[7.06rem] font-navabarLinks font-bold text-white text-center flex items-center justify-center">
            <Link to="/contactUs">Contact</Link>
          </button>
        </div>
      </div>

      {/* Mobile Side Navbar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full hover:text-[#6d87cb] bg-[#ebecef] shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          <X size={28} className="text-[#373f41]" />
        </button>

        {/* Side Menu Links */}
        <div className="flex flex-col mt-16 space-y-6 pl-6">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/villas", label: "Villas" },
            { to: "/services", label: "Services" },
            { to: "/partner", label: "Partner with us" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-[0.85rem] font-semibold font-navabarLinks transition-colors duration-300 ${isActive
                  ? "text-[#6d87cb] font-bold"
                  : "text-[#373f41] hover:text-[#6d87cb]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <button className="bg-primary py-4 px-[1.9rem] text-[0.85rem] h-[1rem] w-[5rem] md:h-[2.65rem] md:w-[7.06rem] font-navabarLinks font-bold text-white text-center flex items-center justify-center">
            <Link to="/contactUs" onClick={() => setIsOpen(false)}>Contact</Link>
          </button>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0  opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;