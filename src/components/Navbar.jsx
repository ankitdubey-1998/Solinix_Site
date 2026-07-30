import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/solinix_logo2.png";
import { HiOutlineX } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Products", to: "/products" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm ">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <img
          src={logo}
          alt="Solinix Logo"
          className="h-16 w-auto"
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                ${
                  isActive
                    ? "text-purple-700 bg-purple-100"
                    : "text-gray-700 hover:text-purple-700 hover:bg-purple-50"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="ml-4">
            <Link to="/contact">
    <Button title="Let's Connect" />
  </Link>
          </div>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl text-gray-700"
        >
          {isOpen ? <HiOutlineX /> : <FiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-125" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t px-6 py-5 space-y-2">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl transition-all
                ${
                  isActive
                    ? "bg-purple-100 text-purple-700 font-semibold"
                    : "hover:bg-purple-50 hover:text-purple-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="pt-3 ">
                   <Link to="/contact">
    <Button title="Let's Connect" />
  </Link>
          </div>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;