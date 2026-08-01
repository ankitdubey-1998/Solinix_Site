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
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy", path: "/privacy" },
    { name: "Terms", path: "/terms" },
    { name: "Cookies", path: "/cookies" },
  ];

  return (
    <footer className="relative overflow-hidden bg-linear-to-br from-slate-950 via-[#081120] to-blue-950 text-slate-300">

      {/* Background Glow */}
      <div className="absolute -top-40 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-20">

          {/* About */}
          <div>
            <img
              src={logo}
              alt="Solinix"
              className="h-16 w-auto mb-6"
            />

            <p className="leading-8 text-slate-400 text-[15px] max-w-md">
              We build innovative software, websites, mobile apps and AI
              solutions that help businesses grow.
            </p>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute left-0 -bottom-2 w-14 h-1 rounded-full bg-linear-120-to-r from-cyan-400 to-blue-600"></span>
            </h3>

            <div className="grid grid-cols-2 gap-y-4 gap-x-6">

              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex items-center text-slate-400 transition-all duration-300 hover:text-cyan-400"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300">
                    →
                  </span>

                  {link.name}
                </Link>
              ))}

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-6 relative inline-block">
              Contact
             
            </h3>

            <div className="space-y-4 text-slate-400">

              <p className="flex items-center gap-3">
                <span>📧</span>
                hello@solinix.com
              </p>

              <p className="flex items-center gap-3">
                <span>📞</span>
                +91 11234567890
              </p>

              <p className="flex items-center gap-3">
                <span>📍</span>
                Bengaluru, India
              </p>

            </div>

            <div className="flex flex-wrap gap-4 mt-8">

              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="group w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-linear-to-r hover:from-cyan-500 hover:to-blue-600"
                  >
                    <Icon className="text-lg group-hover:text-white transition-colors" />
                  </a>
                )
              )}

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Bottom */}

        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 text-sm">

          <p className="text-center lg:text-left text-slate-400 leading-7">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              Solinix Software Solutions
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            {legalLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-slate-400 hover:text-white transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
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