import { useState } from "react"
import FadeInSection from "../components/FadeInSection"



const projects = [
  {
    category: "PropTech",
    badgeColor: "bg-blue-500",
    gradient: "from-indigo-900/95 to-purple-900/70",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32iJniuKgQ9sRLGRxlotuha6n14CZU8DWJy_4743PhQ&s",
    title: "PGMove — PG Discovery Platform",
    description:
      "A smart rental and PG discovery platform that connects tenants with property owners across India, built for speed and scale.",
    challenge: "Fragmented listings across cities made it hard for tenants to find verified PGs quickly.",
    solution: "Unified search, verified listings, and instant owner-tenant matching in one platform.",
    stats: [
      { value: "1,200+", label: "Properties" },
      { value: "8", label: "Cities" },
      { value: "3x", label: "Faster Search" },
    ],
    tags: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    category: "PropTech SaaS",
    badgeColor: "bg-emerald-500",
    gradient: "from-emerald-900/95 to-teal-900/70",
    image: "https://stayzzy.in/images/image.png",
    title: "Stayzzy — Hostel Management SaaS",
    description:
      "Complete hostel and PG management platform with tenant onboarding, digital rent agreements, and occupancy tracking for owners.",
    challenge: "Property owners were managing tenants and rent collection manually across spreadsheets.",
    solution: "One dashboard for occupancy, digital agreements, and automated rent reminders.",
    stats: [
      { value: "800+", label: "Managed" },
      { value: "99.9%", label: "Uptime" },
      { value: "2.5x", label: "Faster Onboarding" },
    ],
    tags: ["React", "Express", "PostgreSQL", "Razorpay"],
  },
  {
    category: "Enterprise SaaS",
    badgeColor: "bg-purple-500",
    gradient: "from-violet-900/95 to-indigo-900/70",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHPcAPOVEO6JSb7xVRv5hI1QM_bvcsdqFJQZ5yYvr2BQ&s=10",
    title: "HRMS — HR Automation Platform",
    description:
      "An intelligent human resource management system for businesses of all sizes — from onboarding to payroll and performance tracking.",
    challenge: "HR teams relied on multiple disconnected tools for onboarding, payroll, and reviews.",
    solution: "A single HRMS covering the entire employee lifecycle with automated workflows.",
    stats: [
      { value: "12+", label: "HR Modules" },
      { value: "60%", label: "Time Saved" },
      { value: "Automated", label: "Payroll" },
    ],
    tags: ["React", "NestJS", "MySQL", "Docker"],
  },
  {
    category: "E-Commerce",
    badgeColor: "bg-orange-500",
    gradient: "from-orange-900/95 to-red-900/70",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Ta5Jx-voaUghf0ebuTrYXbu1xP12AY6o_O6MCMW-sQ&s=10",
    title: "Enterprise E-Commerce Platform",
    description:
      "A high-performance headless e-commerce storefront with real-time inventory, marketing integrations, and seamless checkout.",
    challenge: "Legacy storefront couldn't handle traffic spikes or integrate with modern marketing tools.",
    solution: "Rebuilt on a headless architecture with CDN caching and modular checkout.",
    stats: [
      { value: "-45%", label: "Load Time" },
      { value: "+2x", label: "Conversions" },
      { value: "50K SKU", label: "Catalog" },
    ],
  },
]

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="relative px-4 sm:px-12 lg:px-24 xl:px-40 py-20 overflow-hidden bg-linear-to-b from-white via-purple-50/40 to-white">

      {/* Background mesh */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-400/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-purple-200/25 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">

        {/* Header */}
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block text-purple-700 font-semibold uppercase tracking-widest text-sm bg-purple-100 px-4 py-1.5 rounded-full mb-5">
              Our Work
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Projects That{" "}
              <span className="bg-linear-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                Delivered Results
              </span>
            </h2>
            <p className="mt-3 text-gray-500 text-sm sm:text-base">
              From SaaS platforms to enterprise applications — explore our work and the
              business impact we created.
            </p>
          </div>
        </FadeInSection>

       

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project, index) => (
            <FadeInSection key={project.title} delay={index * 0.1}>
              <div className="group rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 bg-white/90 backdrop-blur-sm">
                {/* Image header with gradient overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 ${project.gradient}`} />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />

                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                   
                    <h3 className="text-white text-lg font-bold drop-shadow-sm">{project.title}</h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-4">{project.description}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Portfolio