import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/solinix_logo2.png";
import { HiOutlineX } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import Button from "../ui/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll listener for dynamic navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm py-1" 
          : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="Solinix Logo"
            className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-slate-200/50 shadow-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                ${
                  isActive
                    ? "text-white bg-indigo-600 shadow-md shadow-indigo-600/20"
                    : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block ml-4">
          <Link to="/contact">
            <button className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-indigo-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Let's Connect
            </button>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl text-slate-800 p-2 rounded-full bg-white/50 backdrop-blur-md border border-slate-200"
        >
          {isOpen ? <HiOutlineX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-2xl border-t border-slate-200 px-6 py-6 mt-1 space-y-2 shadow-2xl rounded-b-3xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-5 py-4 rounded-2xl transition-all font-semibold
                ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-4 pb-2">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-bold text-center shadow-lg shadow-indigo-600/30 active:scale-95 transition-all">
                Let's Connect
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;