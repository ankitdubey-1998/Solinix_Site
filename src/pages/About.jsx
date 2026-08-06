import { Link } from "react-router-dom";
import { FaRegLightbulb, FaCheckCircle, FaBullseye, FaEye } from "react-icons/fa";
import { FaMedal, FaHandshakeSimple } from "react-icons/fa6";

const missionVision = [
  {
    icon: <FaBullseye size={26} />,
    title: "Our Mission",
    description:
      "We believe technology should simplify business, not complicate it. Our mission is to help businesses embrace digital transformation by creating modern software solutions that improve efficiency, increase productivity, and accelerate growth. With expertise in software development, mobile applications, cloud technologies, UI/UX design, and digital marketing, we work closely with our clients from idea to launch and beyond.",
  },
  {
    icon: <FaEye size={26} />,
    title: "Our Vision",
    description:
      "To be the technology partner ambitious businesses turn to first — recognized not just for the products we ship, but for the measurable growth and lasting value we help create for every client we work with.",
  },
];

const checklist = [
  "Full stack web & mobile app development",
  "Custom software built to scale",
  "SEO-friendly, high-performance websites",
  "Fast onboarding & transparent, ongoing support",
];

const features = [
  {
    icon: <FaRegLightbulb size={26} />,
    title: "Innovation",
    description: "Building future-ready solutions with the latest technologies.",
  },
  {
    icon: <FaMedal size={26} />,
    title: "Quality",
    description: "Secure, scalable, and reliable solutions built to last.",
  },
  {
    icon: <FaHandshakeSimple size={26} />,
    title: "Partnership",
    description: "We believe in long-term partnerships and shared success.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-8 lg:py-16 bg-slate-50 overflow-hidden">
      {/* Premium background layer */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center opacity-5"
        style={{
          backgroundImage: "url('/hero_modern_office.png')",
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          
          {/* Left — text */}
          <div>
            <span className="inline-block px-5 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold uppercase tracking-widest text-xs mb-6 shadow-sm animate-fade-in-up">
              Who We Are
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Not Just Coders —{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
                Your Tech Growth Partner
              </span>
            </h2>

            <p className="text-slate-600 mt-6 leading-relaxed text-lg font-medium">
              We're a team of engineers, designers, and product builders who
              take clunky software and turn it into clean, well-built
              digital products your team can actually rely on.
            </p>

            <p className="text-slate-900 font-bold text-xl mt-8">
              We turn ambitious ideas into products that users love & markets buy.
            </p>

            <div className="mt-8 space-y-4">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                    <FaCheckCircle className="text-indigo-600" size={14} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-block mt-10 px-8 py-4 rounded-full bg-indigo-600 text-white font-bold shadow-xl shadow-indigo-600/30 hover:bg-slate-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Let's Talk About Your Project
            </Link>
          </div>

          {/* Right — image */}
          <div className="relative group">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200/60 bg-white p-2">
              <div className="rounded-[2rem] overflow-hidden">
                <img
                  src="/corporate_team_collab.png"
                  alt="Our engineering and product team"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-200/60 flex items-center gap-5 group-hover:-translate-y-2 transition-transform duration-500">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xl">
                5+
              </div>
              <div>
                <p className="text-slate-900 font-bold text-sm">Senior Engineering Team</p>
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Years Avg. Experience</p>
              </div>
            </div>
          </div>
        </div>


        {/* Mission & Vision */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold uppercase tracking-widest text-xs mb-6 shadow-sm">
            What Drives Us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Built With Purpose,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
              Driven By Growth
            </span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 mb-32">
          {missionVision.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-lg p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 shadow-sm border border-indigo-100">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Features banner */}
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl mb-24 border border-slate-200/50">
          <img
            src="/elegant_architecture.png"
            alt="Corporate architecture"
            className="w-full h-80 md:h-[32rem] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" />
          
          <div className="absolute inset-0 flex items-center px-10 md:px-20">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 font-semibold text-xs tracking-widest uppercase mb-6 backdrop-blur-md">
                Long Term Value
              </span>
              <p className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6">
                A team that treats your product like it's our own.
              </p>
              <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed">
                Every engagement is backed by a dedicated team that stays
                invested in your product's scalable success long after launch day.
              </p>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 text-indigo-600 flex items-center justify-center mb-6 border border-slate-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;