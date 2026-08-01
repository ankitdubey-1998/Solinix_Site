import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import posts from "../data/Post";

const Blogdetail = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="relative py-20 bg-white">
        <div className="px-4 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">
            Post not found
          </h2>
          <p className="text-slate-500 mb-6">
            The post you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all duration-300"
          >
            <FaArrowLeft size={12} /> Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 bg-white">
      <div className="px-4 relative z-10 max-w-3xl mx-auto">
        {/* Back link */}
       
       

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6 leading-snug">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-8 pb-8 border-b border-slate-200">
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
        <div className="space-y-6">
          {(post.content || [post.excerpt]).map((paragraph, index) => (
            <p
              key={index}
              className="text-base text-slate-600 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Bottom back link */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all duration-300"
          >
            <FaArrowLeft size={12} /> Back to all posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogdetail;