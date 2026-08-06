import { Link } from "react-router-dom"
import { FaArrowRight, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import posts from "../data/Post";


const Blog = () => {
  return (
    <section className="relative py-20">
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
      
      <div className="px-4 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-blue-950 font-semibold uppercase tracking-widest text-sm bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-5">
            Our Blog
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Ideas That Shape{" "}
            <span className="text-blue-600">Better Products</span>
          </h2>

          <div className="w-14 h-1 bg-blue-600 rounded-full mx-auto mb-6" />

          <p className="text-lg text-slate-500">
            Real lessons from real projects — on technology, design, and
            building digital products that actually work.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="group bg-white rounded-2xl border border-slate-200 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Cover image */}
                {post.image && (
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <FaRegCalendarAlt size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaRegClock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-blue-950 mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-auto flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    Read More <FaArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

       
          
         

        
         
        </div>
      </div>
    </section>
  );
};

export default Blog;