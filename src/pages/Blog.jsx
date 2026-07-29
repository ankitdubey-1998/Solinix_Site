import { FaArrowRight, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";

const posts = [
  {
    title: "How AI is Reshaping Digital Product Development",
    excerpt:
      "From automated testing to smarter UX decisions, explore how AI tools are helping startups and enterprises ship better products, faster.",
    date: "July 18, 2026",
    readTime: "5 min read",
  },
  {
    title: "5 Signs Your Startup Needs a Scalable Tech Stack",
    excerpt:
      "Scaling too fast without the right architecture can break your product. Here are the warning signs and how to fix them early.",
    date: "July 10, 2026",
    readTime: "4 min read",
  },
  {
    title: "UI/UX Trends That Will Define 2026",
    excerpt:
      "Minimalism, motion design, and accessibility-first thinking are shaping how users experience digital products this year.",
    date: "June 29, 2026",
    readTime: "6 min read",
  },
  {
    title: "Why Long-Term Partnerships Beat One-Off Projects",
    excerpt:
      "A look at how continuous collaboration between businesses and their tech partners drives better outcomes over time.",
    date: "June 15, 2026",
    readTime: "3 min read",
  },
  {
    title: "Building Secure Web Apps: A Practical Checklist",
    excerpt:
      "Security shouldn't be an afterthought. Here's a practical checklist every team should run through before launch.",
    date: "June 2, 2026",
    readTime: "7 min read",
  },
  {
    title: "From Idea to MVP: Our Proven Framework",
    excerpt:
      "How we help founders go from a rough concept to a working, testable product in weeks, not months.",
    date: "May 20, 2026",
    readTime: "5 min read",
  },
];

const Blog = () => {
  return (
    <section className="relative py-20 bg-white">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.title}
                className="bg-white rounded-2xl border border-slate-200 p-7 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
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

                <button className="mt-auto flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all duration-300">
                  Read More <FaArrowRight size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;