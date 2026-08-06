import { Link } from "react-router-dom"
import { FaArrowRight, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import posts from "../data/Post";


const Blog = () => {
  return (
    <section className="relative py-8 lg:py-16 bg-slate-50 overflow-hidden">
      {/* Premium background layer */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center opacity-[0.05]"
        style={{
          backgroundImage: "url('/abstract_tech_growth.png')",
        }}
      />
      
      <div className="px-6 max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-5 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold uppercase tracking-widest text-xs mb-6 shadow-sm animate-fade-in-up">
            Our Blog
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Ideas That Shape{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
              Better Products
            </span>
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full mx-auto mb-8" />

          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Real lessons from real projects — on technology, design, and
            building enterprise software that actually works.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="group bg-white/90 backdrop-blur-sm rounded-[2rem] border border-slate-200/60 flex flex-col shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Cover image */}
              {post.image && (
                <div className="overflow-hidden relative h-56">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-5 text-xs text-slate-500 font-bold uppercase tracking-wider mb-5">
                  <span className="flex items-center gap-2">
                    <FaRegCalendarAlt size={14} className="text-indigo-400" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaRegClock size={14} className="text-indigo-400" />
                    {post.readTime}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-1 font-medium">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-auto flex items-center gap-2 text-indigo-600 font-bold text-sm hover:gap-3 hover:text-indigo-700 transition-all duration-300"
                >
                  Read Full Article <FaArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;