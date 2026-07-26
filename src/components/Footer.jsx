import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/solinix_logo_dark_bg.png";
import { Link } from "react-router-dom";

const Footer = () => {

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <footer className="relative overflow-hidden bg-linear-to-br from-slate-950 via-[#0f1729] to-blue-950 text-gray-300 pt-16">

      {/* Glow */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">



        {/* Main Footer */}
        <div className="grid md:grid-cols-3 gap-45">

          {/* About */}
          <div>
            <img src={logo} alt="Solinix" className="h-16 mb-4" />
            <p className="text-gray-400 leading-7">
              We build innovative software, websites, mobile apps and AI
              solutions that help businesses grow.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>

            <div className="grid grid-cols-2 gap-3 text-sm">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-cyan-400 transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>

            <p>📧 hello@solinix.com</p>
            <p className="mt-2">📞 +91 11234567890</p>
            <p className="mt-2">📍 Bengaluru, India
            </p>

            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-linear-to-r hover:from-purple-600 hover:to-blue-700 hover:scale-110 transition-all"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} <span className="text-white font-semibold">Solinix Software Solutions</span>. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;