import { FaRegLightbulb } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import FadeInSection from "../components/FadeInSection";

const features = [
  {
    icon: <FaRegLightbulb size={34} color="white" />,
    title: "Innovation",
    description: "Building future-ready solutions with the latest technologies.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    icon: <FaMedal size={34} color="white" />,
    title: "Quality",
    description: "Secure, scalable, and reliable solutions built to last.",
    image: "https://images.unsplash.com/photo-1560264418-c4445382edbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHF1YWxpdHl8ZW58MHx8MHx8fDA%3D",
  },
  {
    icon: <FaHandshakeSimple size={34} color="white" />,
    title: "Partnership",
    description: "We believe in long-term partnerships and shared success.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNvcnBvcmF0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-15 overflow-hidden bg-linear-to-b from-white via-purple-50/40 to-white">

      {/* Background mesh */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-400/25 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-200/25 rounded-full blur-3xl" />
      </div>

      <div className="px-4 relative z-10">

        {/* Header */}
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-purple-700 font-semibold uppercase tracking-widest text-sm bg-purple-100 px-4 py-1.5 rounded-full mb-5">
              About Us
            </span>

            
           <h2 className="text-4xl font-bold mt-2">
              Not Just Coders {" "}
              <span className="bg-linear-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
                Your Tech Growth Partner
              </span>
            </h2>

            <p className="text-lg text-gray-600">
              We help startups, SMBs and enterprises transform their ideas into powerful digital products. From strategy and design to development, marketing and support - we do it all.
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeInSection key={feature.title} delay={index * 0.15}>
                <div className="relative overflow-hidden rounded-3xl h-80 group shadow-xl hover:-translate-y-2 transition-all duration-500">
                  {/* Background Image */}
                  <img
                    src={`${feature.image}?auto=format&fit=crop&w=800&q=80`}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-950/35 to-purple-900/35"></div>

                  {/* Content */}
                  <div className="relative z-10 flex h-full items-end p-8">
                    <div className="w-full">
                      <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-purple-600 to-blue-900 flex items-center justify-center shadow-lg mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        {feature.icon}
                      </div>

                      <h3 className="text-2xl text-white font-bold mb-3">{feature.title}</h3>

                      <p className="text-gray-200">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;