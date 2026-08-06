import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center -mt-6 justify-center overflow-hidden">

      {/* Background image — stunning natural landscape */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-[kenburns_20s_ease-in-out_infinite]"
        style={{
          backgroundImage:
            "url('/office-hero.png')",
        }}
      />

      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <span className="inline-block text-blue-950 font-semibold uppercase tracking-widest text-sm bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-8">
          Digital Product Studio
        </span>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-blue-950">
          We Don't Just Build Software.
          <br />
          <span className="text-blue-600">We Build Business Growth.</span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-8">
          We build innovative software, websites and mobile applications —
          and back them with digital marketing that gets real results.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Link
            to="/services"
            className="px-8 py-3 rounded-xl bg-blue-950 text-white font-semibold shadow-lg hover:bg-blue-900 hover:scale-105 transition duration-300"
          >
            Explore Services
          </Link>

          <Link
            to="/products"
            className="px-8 py-3 rounded-xl bg-white text-blue-950 font-semibold border-2 border-blue-950 hover:bg-blue-50 hover:scale-105 transition duration-300"
          >
            Our Products
          </Link>

        </div>

      </div>
    </section>
  );
};

export default Hero;