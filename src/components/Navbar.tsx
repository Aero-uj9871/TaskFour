// import { Link } from "react-router-dom";
// import logo from "../assets/logo.svg";
// function Navbar() {
//   return (
//     <nav className="bg-[#3c64b1]/6 shadow-sm p-4 flex items-center justify-between lg:justify-around md:gap-10 overflow-x-hidden">
//       <div className=""><Link to="/"><img src={logo} alt="" className="h-[30px] object-contain w-full" /></Link></div>
//       <div className=""> 
//         <button data-collapse-toggle="navbar-sticky" type="button" className="  inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none   dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//           <span className="sr-only">Open main menu</span>
//           <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
//           </svg>
//         </button>
//       </div>
//       <ul className="hidden lg:flex text-nowrap justify-around space-x-6 text-md md:space-x-6 items-center  sm:{w-120 mr-4}">
//         <li><Link to="/" className="text-navTextCol font-navabarLinks hover:text-[#5b70a5]">Home</Link></li>
//         <li><Link to="/about" className="text-navTextCol font-navabarLinks hover:text-[#5b70a5]">About Us</Link></li>
//         <li><Link to="/villas" className="text-navTextCol font-navabarLinks hover:text-[#5b70a5]">Villas</Link></li>
//         <li><Link to="/services" className="text-navTextCol font-navabarLinks hover:text-[#5b70a5]">Services</Link></li>
//         <li><Link to="/partners" className="text-navTextCol font-navabarLinks hover:text-[#5b70a5]">Partner with us</Link></li>
//         <li><Link to="/contactUs" className="bg-primary font-navabarLinks text-[14px] text-white px-4 py-2 rounded hover:bg-[#5b70a5]">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;





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
          <div className="bg-primary py-[0.6rem] px-[1.9rem] text-[0.85rem] h-[1rem] w-[5rem] md:h-[2.65rem] md:w-[7.06rem] font-navabarLinks font-bold text-white text-center flex items-center justify-center">
            <Link to="/contactUs">Contact</Link>
          </div>
        </div>
      </div>

      {/* Mobile Side Navbar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"
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
            { to: "/contactUs", label: "Contact" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className="tetx-[#373f41] text-lg font-semibold text-gray-700 hover:text-[#6d87cb] transition-colors"
            >
              {label}
            </NavLink>
          ))}
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