import { Link } from "react-router-dom";
import {
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaPaintBrush,
  FaBullhorn,
  FaCloud,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="w-8 h-8" />,
    title: "Custom Software Development",
    desc: "Scalable software solutions tailored to your specific business requirements, built with modern enterprise-grade technologies.",
    image: "/serv_1.png",
  },
  {
    icon: <FaGlobe className="w-8 h-8" />,
    title: "Website Development",
    desc: "Responsive, fast and SEO-friendly websites with stunning designs that drive real results and business growth.",
    image: "/serv_2.png",
  },
  {
    icon: <FaMobileAlt className="w-8 h-8" />,
    title: "Mobile App Development",
    desc: "Android, iOS & cross-platform apps with seamless user experiences and native-level performance.",
    image: "/serv_3.png",
  },
  {
    icon: <FaPaintBrush className="w-8 h-8" />,
    title: "UI/UX Design",
    desc: "Creative and intuitive designs that enhance engagement. User-centered, conversion-optimized and beautifully crafted.",
    image: "/serv_4.png",
  },
  {
    icon: <FaBullhorn className="w-8 h-8" />,
    title: "Digital Marketing",
    desc: "Result-driven marketing strategies to grow your brand and reach. SEO, social media, paid campaigns and more.",
    image: "/serv_5.png",
  },
  {
    icon: <FaCloud className="w-8 h-8" />,
    title: "Cloud & Maintenance",
    desc: "Secure hosting, cloud deployment and ongoing support to keep your software running at peak performance 24/7.",
    image: "/serv_6.jpg",
  },
];

const Services = () => {
  return (
    <section className="relative py-8 lg:py-16 bg-slate-50 overflow-hidden">
      {/* Natural background image with elegant fade */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center opacity-[0.15]"
        style={{
          backgroundImage: "url('/abstract_tech_growth.png')",
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-indigo-700 font-bold uppercase tracking-widest text-xs bg-indigo-50 border border-indigo-100 px-5 py-2 rounded-full mb-6 shadow-sm animate-fade-in-up">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            End-to-End Engineering.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
              Zero Fluff.
            </span>
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full mx-auto mt-8 mb-8" />

          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            End-to-end solutions built to help your business win users, scale reliably, and dominate your industry.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-end min-h-[400px] border border-slate-200/50 bg-white"
            >
              {/* Background image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Sophisticated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10 p-8 transform transition-transform duration-500">
                <div className="text-indigo-400 mb-4 bg-white/10 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate image banner */}
        <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200/50 shadow-2xl mb-24 group">
          <img
            src="/corporate_team_collab.png"
            alt="Team planning a project together"
            className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Glassmorphism gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="px-10 md:px-20 max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 font-semibold text-xs tracking-widest uppercase mb-6 backdrop-blur-md">
                The Solinix Advantage
              </span>
              <p className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6">
                One team, every service you need to ship.
              </p>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl font-light">
                From the first line of code to ongoing maintenance, our
                specialists work as a single cohesive unit so nothing falls through
                the cracks between disciplines.
              </p>
            </div>
          </div>
        </div>

        {/* Floating CTA strip */}
        <div className="relative rounded-3xl bg-white border border-slate-200 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 shadow-xl overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-indigo-50 blur-3xl opacity-60 pointer-events-none" />
          
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Not sure which service fits your project?
            </h3>
            <p className="text-slate-600 text-lg">
              Tell us what you're building — we'll map out the exact architecture, timeline, and the right mix of services to get you there.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-indigo-600 text-white font-bold text-lg hover:bg-slate-900 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Let's Talk About Your Project
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;