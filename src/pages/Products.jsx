import {
  FaHome,
  FaBuilding,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import hrmsImg from "../assets/HRMS_app.png";

const products = [
  {
    title: "PGMove.in",
    tagline: "Smart PG & Rental Management Platform",
    status: "Live Platform",
    icon: <FaHome />,
    description:
      "A smart platform that connects people with PGs, hostels and rental accommodations — while helping property owners manage listings and receive quality leads.",
    stats: [
      { value: "1,200+", label: "Properties" },
      { value: "8", label: "Cities" },
      { value: "5,000+", label: "Active Users" },
    ],
    features: [
      "Smart Property Search",
      "Digital Rental Agreements",
      "Lead Automation",
      "Owner Dashboard",
      "Occupancy Management",
      "Tenant Verification",
    ],
    img: "https://solinix-website.vercel.app/images/product-pgmove.webp",
    url: "https://pgmove.in",
    cta: "Visit PGMove.in",
  },
  {
    title: "Stayzzy.in",
    tagline: "Complete PG & Hostel Management System",
    status: "Live Platform",
    icon: <FaBuilding />,
    description:
      "A complete PG and hostel management platform built for property owners and tenants. Manage listings, collect rent, handle agreements, and grow your occupancy.",
    stats: [
      { value: "800+", label: "Properties" },
      { value: "2,500+", label: "Tenants Managed" },
      { value: "99.9%", label: "Uptime" },
    ],
    features: [
      "Tenant Management",
      "Digital Agreements",
      "Analytics & Reports",
      "Automated Rent Collection",
      "Maintenance Ticket System",
      "Mobile Ownership",
    ],
    img: "https://solinix-website.vercel.app/images/product-stayzzy.webp",
    url: "https://stayzzy.in",
    cta: "Visit Stayzzy.in",
  },
  {
    title: "HRMS Engine",
    tagline: "Intelligent Human Resource Automation",
    status: "In Beta / Coming Soon",
    icon: <FaUsers />,
    description:
      "An intelligent Human Resource Management System designed to simplify workforce management for enterprises and businesses of all sizes — from onboarding to payroll.",
    stats: [
      { value: "12+", label: "HR Modules" },
      { value: "Unlimited", label: "Employees" },
      { value: "15+", label: "Integrations" },
    ],
    features: [
      "Employee Directory",
      "Recruitment & Onboarding",
      "Biometric Attendance",
      "Automated Payroll",
      "Leave Management",
      "Performance Analytics",
    ],
    img: hrmsImg,
    url: "https://hrms.yourdomain.com",
    cta: "Coming Soon",
  },
];

export default function Products() {
  return (
    <section className="relative py-8 lg:py-16 bg-slate-50 overflow-hidden">
      {/* Premium Background */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center opacity-[0.1]"
        style={{
          backgroundImage: "url('/elegant_architecture.png')",
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-24">
          <span className="inline-block px-5 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold uppercase tracking-widest text-xs mb-6 shadow-sm animate-fade-in-up">
            Our Products
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Built. Shipped.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
              Actually Used.
            </span>
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full mx-auto mt-8 mb-8" />

          <p className="text-slate-600 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
            Real platforms, real users, real results — built end-to-end by
            our in-house engineering team.
          </p>
        </div>

        {/* Product cards */}
        <div className="flex flex-col gap-16 lg:gap-24 mb-20">
          {products.map((item, index) => {
            const isLive = item.status === "Live Platform";
            const imageOnLeft = index % 2 === 1;

            return (
              <div
                key={item.title}
                className="group rounded-[2.5rem] border border-slate-200/60 bg-white/90 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 p-8 lg:p-14"
              >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                  {/* Content */}
                  <div className={imageOnLeft ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center text-2xl shadow-sm">
                        {item.icon}
                      </div>
                      <span
                        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm ${
                          isLive
                            ? "text-indigo-700 bg-indigo-50 border border-indigo-100"
                            : "text-slate-600 bg-slate-100 border border-slate-200"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full animate-pulse ${
                            isLive ? "bg-indigo-600" : "bg-slate-400"
                          }`}
                        />
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-indigo-600 font-bold text-sm uppercase tracking-wider mt-3 mb-6">
                      {item.tagline}
                    </p>

                    <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                      {item.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 bg-slate-50 border border-slate-100 rounded-3xl p-6 mb-8 divide-x divide-slate-200 shadow-inner">
                      {item.stats.map((stat) => (
                        <div key={stat.label} className="text-center px-2">
                          <div className="text-slate-900 font-extrabold text-xl sm:text-2xl">
                            {stat.value}
                          </div>
                          <div className="text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                            <FaCheckCircle className="text-indigo-600" size={12} />
                          </div>
                          <span className="text-sm font-semibold text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    {isLive ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-indigo-600/30 hover:bg-slate-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                      >
                        {item.cta} <FaArrowRight size={14} />
                      </a>
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center gap-3 bg-slate-100 text-slate-400 px-8 py-4 rounded-full font-bold cursor-not-allowed border border-slate-200"
                      >
                        {item.cta} <FaArrowRight size={14} />
                      </button>
                    )}
                  </div>

                  {/* Visual */}
                  <div className={imageOnLeft ? "lg:order-1" : ""}>
                    {isLive ? (
                      <div className="rounded-[2rem] border border-slate-200/60 shadow-2xl overflow-hidden group-hover:-translate-y-2 transition-transform duration-700 h-fit bg-slate-50">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-auto block object-cover"
                        />
                      </div>
                    ) : (
                      <div className="rounded-[2rem] border-2 border-dashed border-slate-300 bg-slate-50 aspect-4/3 flex flex-col items-center justify-center text-center p-10 group-hover:-translate-y-2 transition-transform duration-700">
                        <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 text-indigo-600 flex items-center justify-center text-3xl mb-6 shadow-sm">
                          {item.icon}
                        </div>
                        <h4 className="text-slate-900 text-xl font-bold mb-2 tracking-tight">
                          HRMS Automation Platform
                        </h4>
                        <p className="text-slate-500 font-medium text-sm mt-2 max-w-[200px] leading-relaxed">
                          Private beta in progress. Stay tuned for the early
                          launch invite.
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}