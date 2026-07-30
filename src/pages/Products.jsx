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
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-950 font-semibold uppercase tracking-widest text-sm bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-5">
            Our Products
          </span>

          <h2 className="text-4xl font-bold text-blue-950 mt-2">
            Built. Shipped.{" "}
            <span className="text-blue-600">Actually Used.</span>
          </h2>

          <div className="w-14 h-1 bg-blue-600 rounded-full mx-auto mt-6 mb-6" />

          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
            Real platforms, real users, real results — built end-to-end by
            our team.
          </p>
        </div>

        {/* Product cards */}
        <div className="flex flex-col gap-10">
          {products.map((item, index) => {
            const isLive = item.status === "Live Platform";
            const imageOnLeft = index % 2 === 1;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white p-8 lg:p-10"
              >
                <div className="grid lg:grid-cols-2 gap-10 items-start">

                  {/* Content */}
                  <div className={imageOnLeft ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center text-lg">
                        {item.icon}
                      </div>
                      <span
                        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full ${
                          isLive
                            ? "text-blue-700 bg-blue-50 border border-blue-100"
                            : "text-slate-500 bg-slate-100 border border-slate-200"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isLive ? "bg-blue-600" : "bg-slate-400"
                          }`}
                        />
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-2xl font-bold text-blue-950">
                      {item.title}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mt-2 mb-5">
                      {item.tagline}
                    </p>

                    <p className="text-slate-500 leading-relaxed mb-7">
                      {item.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 bg-slate-50 rounded-2xl p-5 mb-7 divide-x divide-slate-200">
                      {item.stats.map((stat) => (
                        <div key={stat.label} className="text-center px-1">
                          <div className="text-blue-950 font-bold text-lg sm:text-xl">
                            {stat.value}
                          </div>
                          <div className="text-slate-500 text-xs mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features checklist */}
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
                      {item.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <FaCheckCircle className="text-blue-600 shrink-0" size={15} />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    {isLive ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition"
                      >
                        {item.cta} <FaArrowRight size={14} />
                      </a>
                    ) : (
                      <button
                        disabled
                        className="inline-flex items-center gap-2 bg-slate-100 text-slate-400 px-6 py-3.5 rounded-xl font-semibold cursor-not-allowed"
                      >
                        {item.cta} <FaArrowRight size={14} />
                      </button>
                    )}
                  </div>

                  {/* Visual */}
                  <div className={imageOnLeft ? "lg:order-1" : ""}>
                    {isLive ? (
                      <div className="rounded-2xl border border-slate-200 shadow-md overflow-hidden h-fit">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-auto block"
                        />
                      </div>
                    ) : (
                      <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 aspect-4/3 flex flex-col items-center justify-center text-center p-8">
                        <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center text-xl mb-4">
                          {item.icon}
                        </div>
                        <h4 className="text-blue-950 font-bold">
                          HRMS Automation Platform
                        </h4>
                        <p className="text-slate-500 text-sm mt-2 max-w-56">
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