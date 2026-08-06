import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center -mt-6 justify-center overflow-hidden bg-slate-50">

      {/* Stunning high-fidelity background image */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-[kenburns_30s_ease-in-out_infinite]"
        style={{
          backgroundImage: "url('/hero_modern_office.png')",
        }}
      />

      {/* Premium glassmorphism gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90 backdrop-blur-[2px]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-10">

        {/* Elegant Badge */}
        <span className="inline-block px-5 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm tracking-widest uppercase mb-8 shadow-sm animate-fade-in-up">
          Enterprise Grade Solutions
        </span>

        {/* Stunning Gradient Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-900 tracking-tight animate-fade-in-up delay-100">
          We Don't Just Build Software.
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
            We Build Business Growth.
          </span>
        </h1>

        {/* Professional Subtext */}
        <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-medium">
          Accelerate your digital transformation with our world-class engineering, stunning design, and scalable architecture.
        </p>

        {/* Elevated Call to Actions */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 animate-fade-in-up delay-300">

          <Link
            to="/services"
            className="px-8 py-4 rounded-full bg-indigo-600 text-white font-bold shadow-xl shadow-indigo-600/30 hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
          >
            Explore Our Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </Link>

          <Link
            to="/products"
            className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200"
          >
            View Products
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Hero;