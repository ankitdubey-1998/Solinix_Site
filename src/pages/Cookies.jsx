const Cookies = () => {
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
      
      <div className="px-4 relative z-10 max-w-3xl mx-auto">
        <span className="inline-block text-blue-950 font-semibold uppercase tracking-widest text-sm bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-5">
          Legal
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
          Cookies Policy
        </h1>

        <p className="text-sm text-slate-500 mb-10">
          Last updated: August 1, 2026
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              1. What Are Cookies
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Cookies are small text files stored on your device when you
              visit a website. They help websites remember your preferences
              and understand how visitors use the site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              2. How We Use Cookies
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We use cookies to keep our website running smoothly, remember
              your preferences, and gather anonymous analytics to help us
              understand how our site is used and improve it over time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              3. Types of Cookies We Use
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Essential cookies are necessary for the website to function
              properly. Analytics cookies help us understand visitor
              behavior so we can improve our content and design. We do not
              use cookies for third-party advertising.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              4. Managing Cookies
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Most browsers allow you to control or disable cookies through
              their settings. Please note that disabling certain cookies may
              affect how parts of our website function.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              5. Changes to This Policy
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We may update this Cookies Policy periodically. Any changes
              will be reflected on this page with a revised update date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              6. Contact Us
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              If you have any questions about our use of cookies, contact us
              at{" "}
              <a
                href="mailto:hello@solinix.com"
                className="text-blue-600 font-semibold"
              >
                hello@solinix.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cookies;