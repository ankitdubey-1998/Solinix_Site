import { FaHome, FaBuilding, FaUsers, FaArrowRight } from "react-icons/fa";
import FadeInSection from "../components/FadeInSection";

const products = [
  {
    title: "PGMove.in",
    subtitle: "Rental Platform",
    icon: <FaHome />,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32iJniuKgQ9sRLGRxlotuha6n14CZU8DWJy_4743PhQ&s",
    url: "https://pgmove.in",
  },
  {
    title: "Stayzzy.in",
    subtitle: "Tenant Management",
    icon: <FaBuilding />,
    img: "https://stayzzy.in/images/image.png",
    url: "https://stayzzy.in",
  },
  {
    title: "HRMS",
    subtitle: "Coming Soon",
    icon: <FaUsers />,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm4cSfl9_2bsPjTmT1Rh4zMFgr8SCivhL1gCJTanEjow&s=10",
    url: "https://hrms.yourdomain.com",
  },
];

export default function Products() {
  return (
    <section className="relative py-20 overflow-hidden bg-linear-to-b from-white via-blue-50/40 to-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-400/25 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-200/25 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeInSection>
          <div className="text-center mb-14">
            <span className="inline-block text-purple-700 font-semibold uppercase tracking-widest text-sm bg-purple-100 px-4 py-1.5 rounded-full mb-5">
              Our Products
            </span>

            <h2 className="text-4xl font-bold mt-2">
              Our{" "}
              <span className="bg-linear-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
                Flagship Products
              </span>
            </h2>
            <p className="text-gray-500 mt-3">Smart solutions for modern businesses.</p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <FadeInSection key={item.title} delay={index * 0.15}>
              <div className="relative h-107.5 rounded-3xl overflow-hidden group shadow-xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/20" />

                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full" />

                <div className="relative z-10 h-full flex flex-col justify-between p-6 text-white">
                  <div className="flex justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-purple-600 to-blue-900 flex items-center justify-center text-xl shadow-lg">
                      {item.icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold">{item.title}</h3>
                    <p className="text-gray-200 mt-2">{item.subtitle}</p>

                    
                    <a  href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center gap-2 mr-40 bg-white text-purple-700 px-5 py-3 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition"
                    >
                      Learn More <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}