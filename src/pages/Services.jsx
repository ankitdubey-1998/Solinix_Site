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
    icon: <FaCode />,
    title: "Custom Software Development",
    desc: "Scalable software solutions tailored to your specific business requirements, built with modern enterprise-grade technologies.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
  },
  {
    icon: <FaGlobe />,
    title: "Website Development",
    desc: "Responsive, fast and SEO-friendly websites with stunning designs that drive real results and business growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    desc: "Android, iOS & cross-platform apps with seamless user experiences and native-level performance.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "Creative and intuitive designs that enhance engagement. User-centered, conversion-optimized and beautifully crafted.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "Result-driven marketing strategies to grow your brand and reach. SEO, social media, paid campaigns and more.",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&auto=format&fit=crop&q=80",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & Maintenance",
    desc: "Secure hosting, cloud deployment and ongoing support to keep your software running at peak performance 24/7.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
  },
];

const Services = () => {
  return (
    <section className="relative py-20">
      {/* Natural background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&auto=format&fit=crop&q=80')",
        }}
      />
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/90" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-14">
          <span className="inline-block text-blue-950 font-semibold uppercase tracking-widest text-sm bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-5">
            Our Services
          </span>

          <h2 className="text-4xl font-bold text-blue-950 mt-2">
            End-to-End Engineering.{" "}
            <span className="text-blue-600">Zero Fluff.</span>
          </h2>

          <div className="w-14 h-1 bg-blue-600 rounded-full mx-auto mt-6 mb-6" />

          <p className="text-slate-500 max-w-2xl mx-auto">
            End-to-end solutions built to help your business win users and
            scale reliably.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 min-h-105 flex flex-col justify-end border border-slate-100"
            >
              {/* Background image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Solid overlay for readability */}
              <div className="absolute inset-0 bg-blue-950/80 transition-all duration-300 group-hover:bg-blue-950/85" />

              

              {/* Content */}
              <div className="relative z-10 p-6 pt-4">
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="text-slate-200 text-sm mt-2 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Corporate image banner */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg mb-20">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80"
            alt="Team planning a project together"
            className="w-full h-72 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-blue-950/45" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-14 max-w-xl">
              <p className="text-white text-2xl md:text-3xl font-bold leading-snug">
                One team, every service you need to ship.
              </p>
              <p className="text-blue-100 text-sm md:text-base mt-4">
                From the first line of code to ongoing maintenance, our
                specialists work as a single team so nothing falls through
                the cracks between disciplines.
              </p>
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="rounded-2xl border border-slate-200 bg-blue-50/60 px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-blue-950">
              Not sure which service fits your project?
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Tell us what you're building — we'll map out the right mix of
              services for you.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 px-7 py-3.5 rounded-xl bg-blue-950 text-white font-semibold hover:bg-blue-900"
          >
            Let's Talk About Your Project
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;