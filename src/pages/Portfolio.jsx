const projects = [
  {
    category: "PropTech",
    title: "PGMove — PG Discovery Platform",
    description:
      "A smart rental and PG discovery platform that connects tenants with property owners across India, built for speed and scale.",
    stats: [
      { value: "1,200+", label: "Properties" },
      { value: "8", label: "Cities" },
      { value: "3x", label: "Faster Search" },
    ],
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    image: "/port_1.png",
  },
  {
    category: "PropTech SaaS",
    title: "Stayzzy — Hostel Management SaaS",
    description:
      "Complete hostel and PG management platform with tenant onboarding, digital rent agreements, and occupancy tracking for owners.",
    stats: [
      { value: "800+", label: "Managed" },
      { value: "99.9%", label: "Uptime" },
      { value: "2.5x", label: "Faster Onboarding" },
    ],
    tags: ["React", "Express", "PostgreSQL", "Razorpay"],
    image: "/port_2.png",
  },
  {
    category: "Enterprise SaaS",
    title: "HRMS — HR Automation Platform",
    description:
      "An intelligent human resource management system for businesses of all sizes — from onboarding to payroll and performance tracking.",
    stats: [
      { value: "12+", label: "HR Modules" },
      { value: "60%", label: "Time Saved" },
      { value: "Auto", label: "Payroll" },
    ],
    tags: ["React", "NestJS", "MySQL", "Docker"],
    image: "/port_3.png",
  },
  {
    category: "E-Commerce",
    title: "Enterprise E-Commerce Platform",
    description:
      "A high-performance headless e-commerce storefront with real-time inventory, marketing integrations, and seamless checkout.",
    stats: [
      { value: "-45%", label: "Load Time" },
      { value: "+2x", label: "Conversions" },
      { value: "50K", label: "SKU Catalog" },
    ],
    tags: ["Next.js", "Shopify", "Redis", "Cloudflare"],
    image: "/port_4.png",
  },
]

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative px-4 sm:px-12 lg:px-24 xl:px-40 py-8 lg:py-16 bg-slate-50 overflow-hidden"
    >
      {/* Abstract Tech Background */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center opacity-[0.1]"
        style={{
          backgroundImage: "url('/abstract_tech_growth.png')",
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-5 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold uppercase tracking-widest text-xs mb-6 shadow-sm animate-fade-in-up">
            Our Work
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Case Studies That{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
              Speak for Themselves
            </span>
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full mx-auto mt-8 mb-8" />

          <p className="text-slate-600 text-lg leading-relaxed font-medium">
            Every product below started as a hard problem. Here's how we
            turned each one into scalable results our clients could measure.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 mb-20">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-slate-200/60 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Preview image */}
              <div className="overflow-hidden relative h-56 sm:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 left-4 inline-block bg-white/95 backdrop-blur-md text-indigo-700 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-sm">
                  {project.category}
                </span>
              </div>

              <div className="p-8 sm:p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow font-medium">
                  {project.description}
                </p>

                {/* Stats strip */}
                <div className="grid grid-cols-3 gap-3 rounded-2xl bg-indigo-50/50 border border-indigo-100 py-4 px-2 mb-8">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-indigo-600 font-extrabold text-lg sm:text-xl">
                        {stat.value}
                      </div>
                      <div className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold text-slate-600 border border-slate-200 bg-slate-50 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio