const Cookies = () => {
  return (
    <section className="relative py-8 lg:py-16 bg-slate-50 overflow-hidden">
      {/* Background layer */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center opacity-[0.03]"
        style={{
          backgroundImage: "url('/hero_modern_office.png')",
        }}
      />
      
      <div className="px-6 relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold uppercase tracking-widest text-xs mb-6 shadow-sm">
            Legal
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Cookie Policy
          </h1>

          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Last updated: August 1, 2026
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200/60 p-8 md:p-12 prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight prose-a:text-indigo-600">
          
          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device when you
            visit a website. They are widely used to make websites work
            more efficiently and provide information to the site owners.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>
            We use cookies to:
          </p>
          <ul>
            <li>Understand how you use our website (Analytics).</li>
            <li>Remember your preferences and settings.</li>
            <li>Improve the speed and security of the site.</li>
          </ul>

          <h2>3. Types of Cookies We Use</h2>
          <p>
            <strong>Essential Cookies:</strong> Required for the website
            to function properly. They cannot be switched off in our
            systems.
          </p>
          <p>
            <strong>Performance Cookies:</strong> Allow us to count visits
            and traffic sources so we can measure and improve the
            performance of our site.
          </p>

          <h2>4. Third-Party Cookies</h2>
          <p>
            We may use third-party services (like Google Analytics) that
            set their own cookies to track usage and performance. We do
            not control these third-party cookies.
          </p>

          <h2>5. Managing Your Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their
            settings preferences. You can choose to block or delete
            cookies, but doing so may impact your experience on our
            website.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            For any questions about our use of cookies, please email us at{" "}
            <a href="mailto:hello@solinix.com">
              hello@solinix.com
            </a>
            .
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Cookies;