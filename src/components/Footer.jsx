import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/solinix_logo_dark_bg.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookies", path: "/cookies" },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">

      {/* Premium Background Glow */}
      <div className="absolute -top-40 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-20">

          {/* About */}
          <div>
            <img
              src={logo}
              alt="Solinix"
              className="h-16 w-auto mb-6 opacity-90"
            />

            <p className="leading-relaxed text-slate-400 text-[15px] max-w-sm">
              We build innovative software, websites, mobile apps and enterprise 
              solutions that help businesses scale securely and dominate their industry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block tracking-tight">
              Quick Links
              <span className="absolute left-0 -bottom-2 w-10 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500"></span>
            </h3>

            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex items-center text-slate-400 font-medium transition-all duration-300 hover:text-indigo-400"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300 text-indigo-500">
                    →
                  </span>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative inline-block tracking-tight">
              Contact
              <span className="absolute left-0 -bottom-2 w-10 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500"></span>
            </h3>

            <div className="space-y-4 text-slate-400 font-medium">
              <p className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <span className="text-indigo-400">📧</span>
                hello@solinix.com
              </p>
              <p className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <span className="text-indigo-400">📞</span>
                +91 123 456 7890
              </p>
              <p className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <span className="text-indigo-400">📍</span>
                Bengaluru, India
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="group w-12 h-12 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20"
                  >
                    <Icon className="text-lg text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                )
              )}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 text-sm">
          <p className="text-center lg:text-left text-slate-500 leading-7 font-medium">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-slate-300">
              Solinix Software Solutions
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-slate-500 font-medium hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-indigo-400 after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;