import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center -mt-6 justify-center overflow-hidden"
    >
      {/* Background image with slow zoom (Ken Burns effect) */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-[kenburns_20s_ease-in-out_infinite]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
        }}
      />

      {/* Layer 1: directional color wash (keeps your brand gradient) */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-850/75 via-blue-850/75 to-purple-850/75" />

      {/* Layer 2: bottom-to-top darkening so content always stays readable */}
      <div className="absolute inset-0 bg-linear-to-t from-blue-950/80 via-transparent to-transparent" />

      {/* Layer 3: soft vignette so edges fade instead of cutting off flat */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(15,15,40,0.55) 100%)",
        }}
      />

      {/* Decorative glow blobs for extra depth */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-md h-112 bg-blue-500/20 rounded-full blur-3xl" />

      {/* Subtle dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

      

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight drop-shadow-lg">
          Building Digital Solutions
          <br />
          <span className="bg-linear-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
            That Drive Business Growth
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg md:text-xl text-white max-w-3xl mx-auto leading-8">
          We build innovative software, websites, mobile applications and help businesses by
          digital marketing solutions.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">

  <Link
    to="/services"
    className="px-8 py-3 rounded-xl bg-linear-to-r from-purple-500 to-blue-600 text-white font-semibold shadow-lg shadow-purple-900/40 hover:scale-105 hover:shadow-xl transition duration-300"
  >
    Explore Services
  </Link>

  <Link
    to="/products"
    className="px-8 py-3 rounded-xl bg-linear-to-r from-purple-500 to-blue-600 text-white font-semibold shadow-lg shadow-purple-900/40 hover:scale-105 hover:shadow-xl transition duration-300"
  >
    Our Products
  </Link>

</div>

        {/* Stats row */}
         
      </div>
    </section>
  );
};
         
          
          
          
        


     
     

export default Hero;