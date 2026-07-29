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
    <section id="about" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top section: content + image */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-24">

          {/* Left — text */}
          <div>
            <span className="inline-block text-blue-950 font-semibold uppercase tracking-widest text-sm bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-5">
              Who We Are
            </span>

            <h2 className="text-4xl font-bold text-blue-950 leading-tight">
              Not Just Coders —{" "}
              <span className="text-blue-600">Your Tech Growth Partner</span>
            </h2>

            <p className="text-slate-500 mt-5 leading-relaxed">
              We're a team of engineers, designers, and product builders who
              take clunky software and turn it into clean, well-built
              digital products your team can actually rely on.
            </p>

            <p className="text-blue-950 font-semibold text-lg mt-7">
              We turn ambitious ideas into products that users love &
              markets buy.
            </p>

            <div className="mt-6 space-y-3">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1 shrink-0" size={16} />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-block mt-8 px-7 py-3.5 rounded-xl bg-blue-950 text-white font-semibold hover:bg-blue-900 transition"
            >
              Let's Talk About Your Project
            </Link>
          </div>

          {/* Right — image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
                alt="Our engineering and product team"
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-6 right-6 bg-blue-950 rounded-xl px-6 py-4 shadow-lg flex items-center justify-between">
              <span className="text-white text-sm font-medium">
                Our Senior Engineering & Product Team
              </span>
              <span className="text-blue-300 text-xs font-semibold uppercase tracking-wide shrink-0 ml-3">
                5+ Yrs Avg.
              </span>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-blue-950 font-semibold uppercase tracking-widest text-sm bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-5">
            What Drives Us
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950">
            Built With Purpose,{" "}
            <span className="text-blue-600">Driven By Growth</span>
          </h2>

          <div className="w-14 h-1 bg-blue-600 rounded-full mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {missionVision.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-950 flex items-center justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-blue-950 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature cards — simple, no image, no hover */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-950 flex items-center justify-center mb-5">
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold text-blue-950 mb-2">
                {feature.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed">
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