import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import posts from "../data/Post";

const Blogdetail = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="relative py-32 bg-slate-50 min-h-[60vh] flex items-center justify-center">
        <div className="px-6 relative z-10 text-center">
          <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-slate-400 text-3xl font-bold">?</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
            Post not found
          </h2>
          <p className="text-slate-600 mb-8 font-medium">
            The post you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-indigo-600 text-white font-bold text-sm hover:bg-slate-900 hover:shadow-lg transition-all duration-300"
          >
            <FaArrowLeft size={14} /> Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-8 lg:py-16 bg-slate-50">
      <div className="px-6 relative z-10 max-w-3xl mx-auto">
        
        {/* Top Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-indigo-600 font-bold text-sm hover:gap-3 transition-all duration-300 mb-10"
        >
          <FaArrowLeft size={12} /> Back to Blog
        </Link>

        {/* Cover Image */}
        {post.image && (
          <div className="w-full h-64 md:h-96 rounded-[2rem] overflow-hidden shadow-xl mb-12 border border-slate-200">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-bold uppercase tracking-wider mb-10 pb-10 border-b border-slate-200">
          <span className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
              <FaRegCalendarAlt size={14} />
            </div>
            {post.date}
          </span>
          <span className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
              <FaRegClock size={14} />
            </div>
            {post.readTime}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-8 prose prose-lg prose-slate max-w-none">
          {(post.content || [post.excerpt]).map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-slate-700 leading-relaxed font-medium"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Bottom back link */}
        <div className="mt-16 pt-10 border-t border-slate-200 flex justify-between items-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-indigo-50 text-indigo-700 font-bold text-sm hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            <FaArrowLeft size={14} /> Back to all posts
          </Link>
          
          <div className="text-slate-400 font-medium text-sm">
            Share this article
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogdetail;