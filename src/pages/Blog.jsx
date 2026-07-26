import { FaArrowRight } from "react-icons/fa6";
import FadeInSection from "../components/FadeInSection";

const posts = [
  {
    title: "How AI is Reshaping Digital Product Development",
    excerpt:
      "From automated testing to smarter UX decisions, explore how AI tools are helping startups and enterprises ship better products, faster.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    date: "July 18, 2026",
    readTime: "5 min read",
  },
  {
    title: "5 Signs Your Startup Needs a Scalable Tech Stack",
    excerpt:
      "Scaling too fast without the right architecture can break your product. Here are the warning signs and how to fix them early.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    date: "July 10, 2026",
    readTime: "4 min read",
  },
  {
    title: "UI/UX Trends That Will Define 2026",
    excerpt:
      "Minimalism, motion design, and accessibility-first thinking are shaping how users experience digital products this year.",
    image:
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f",
    date: "June 29, 2026",
    readTime: "6 min read",
  },
  {
    title: "Why Long-Term Partnerships Beat One-Off Projects",
    excerpt:
      "A look at how continuous collaboration between businesses and their tech partners drives better outcomes over time.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    date: "June 15, 2026",
    readTime: "3 min read",
  },
  {
    title: "Building Secure Web Apps: A Practical Checklist",
    excerpt:
      "Security shouldn't be an afterthought. Here's a practical checklist every team should run through before launch.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    date: "June 2, 2026",
    readTime: "7 min read",
  },
  {
    title: "From Idea to MVP: Our Proven Framework",
    excerpt:
      "How we help founders go from a rough concept to a working, testable product in weeks, not months.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    date: "May 20, 2026",
    readTime: "5 min read",
  },
];

const Blog = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-linear-to-b from-white via-blue-50/40 to-white">

      {/* Background mesh */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-purple-400/25 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-16 left-1/3 w-64 h-64 bg-purple-200/25 rounded-full blur-3xl" />
      </div>

      <div className="px-4 relative z-10">
        {/* Header */}
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-purple-700 font-semibold uppercase tracking-widest text-sm bg-purple-100 px-4 py-1.5 rounded-full mb-5">
              Our Blog
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Insights &{" "}
              <span className="bg-linear-to-r from-blue-900 to-purple-700 bg-clip-text text-transparent">
                Ideas
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Insights, ideas, and updates from our team on technology, design,
              and building great digital products.
            </p>
          </div>
        </FadeInSection>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <FadeInSection key={post.title} delay={index * 0.1}>
                <div className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-500 flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`${post.image}?auto=format&fit=crop&w=800&q=80`}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">
                      {post.title}
                    </h3>

                    <button className="mt-auto flex items-center gap-2 text-purple-700 font-semibold text-sm hover:gap-3 transition-all duration-300">
                      Read More <FaArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;