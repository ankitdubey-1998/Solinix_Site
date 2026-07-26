import {
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaPaintBrush,
  FaBullhorn,
  FaCloud,
} from "react-icons/fa";
import FadeInSection from "../components/FadeInSection";

const services = [
  {
    icon: <FaCode />,
    title: "Custom Software Development",
    desc: "Scalable software solutions tailored to your specific business requirements, built with modern enterprise-grade technologies.",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: <FaGlobe />,
    title: "Website Development",
    desc: "Responsive, fast and SEO-friendly websites with stunning designs that drive real results and business growth.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    desc: "Android, iOS & cross-platform apps with seamless user experiences and native-level performance.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "Creative and intuitive designs that enhance engagement. User-centered, conversion-optimized and beautifully crafted.",
    image: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fFVJJTIwVVglMjBEZXNpZ258ZW58MHx8MHx8fDA%3D",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "Result-driven marketing strategies to grow your brand and reach. SEO, social media, paid campaigns and more.",
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fERpZ2l0YWwlMjBNYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & Maintenance",
    desc: "Secure hosting, cloud deployment and ongoing support to keep your software running at peak performance 24/7.",
    image: "https://media.istockphoto.com/id/1159763195/photo/internet-web-concept-shot-in-the-modern-data-center-it-engineer-standing-beside-open-server.webp?a=1&b=1&s=612x612&w=0&k=20&c=By3zLEySH1upDIxnwa3fbEYacQ4Fn3MZouIeXehSBrs=",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <FadeInSection>
          <div className="text-center mb-14">
            

            <h2 className="text-4xl font-bold text-slate-900 mt-2">
               <span className="inline-block text-purple-700 font-semibold uppercase tracking-widest text-sm bg-purple-100 px-4 py-1.5 rounded-full mb-5">
              Our Services
            </span>
            </h2>
            <h2 className="text-4xl font-bold mt-2">
              End-to-End Engineering. {" "}
              <span className="bg-linear-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
                Zero Fluff.
              </span>
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              End-to-end solutions built to help your business win users and scale reliably.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <FadeInSection key={service.title} delay={index * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 min-h-105 flex flex-col justify-end">
                {/* Background image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark gradient overlay for readability */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/85 to-slate-900/40 group-hover:from-purple-950 group-hover:via-slate-900/90 transition-colors duration-300" />

                {/* Icon badge */}
                <div className="relative z-10 mx-6 mt-6 w-12 h-12 rounded-xl bg-linear-to-r from-purple-600 to-blue-900 text-white flex items-center justify-center text-xl shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 pt-4">
                  <h3 className="text-xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;