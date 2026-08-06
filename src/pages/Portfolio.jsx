
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
    image:
      "/office-hero.png",
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
    image:
      "/office-team.png",
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
    image:
      "/office-workspace.png",
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
    image:
      "/office-team.png",
  },
]

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative px-4 sm:px-12 lg:px-24 xl:px-40 py-24"
    >
      {/* Natural background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/office-workspace.png')",
        }}
      />
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/90" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-blue-950 font-semibold uppercase tracking-[0.2em] text-xs bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-6">
            Our Work
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 leading-[1.1] tracking-tight">
            Case Studies That{" "}
            <span className="text-blue-600">Speak for Themselves</span>
          </h2>

          <div className="w-14 h-1 bg-blue-600 rounded-full mx-auto mt-6 mb-6" />

          <p className="text-slate-500 text-base leading-relaxed">
            Every product below started as a hard problem. Here's how we
            turned each one into results our clients could measure.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Preview image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <span className="inline-block bg-blue-50 text-blue-950 text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                  {project.category}
                </span>

                <h3 className="text-lg font-bold text-blue-950 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Stats strip — signature element */}
                <div className="grid grid-cols-3 gap-2 rounded-xl bg-blue-950 py-3.5 mb-5">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="text-center px-1">
                      <div className="text-white font-bold text-sm sm:text-base">
                        {stat.value}
                      </div>
                      <div className="text-blue-300 text-[10px] uppercase tracking-wide mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                {project.tags && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-blue-950 border border-slate-200 bg-slate-50 px-2.5 py-1 rounded-full"
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