const Privacy = () => {
  return (
    <section className="relative py-20">
      {/* Natural background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&auto=format&fit=crop&q=80')",
        }}
      />
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/90" />
      
      <div className="px-4 relative z-10 max-w-3xl mx-auto">
        <span className="inline-block text-blue-950 font-semibold uppercase tracking-widest text-sm bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-5">
          Legal
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
          Privacy Policy
        </h1>

        <p className="text-sm text-slate-500 mb-10">
          Last updated: August 1, 2026
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              1. Information We Collect
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              When you use our website or contact us, we may collect
              information such as your name, email address, phone number,
              and any details you voluntarily share through our forms. We
              also collect standard technical data like browser type, device
              information, and pages visited to help us improve our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We use the information we collect to respond to inquiries,
              provide our services, improve our website, and communicate
              updates relevant to you. We do not sell your personal
              information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              3. Data Security
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We take reasonable technical and organizational measures to
              protect your data from unauthorized access, alteration, or
              disclosure. However, no method of transmission over the
              internet is completely secure, and we cannot guarantee
              absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              4. Third-Party Services
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We may use third-party tools for analytics, hosting, or
              communication. These providers only access the information
              necessary to perform their functions and are expected to
              handle it in accordance with applicable privacy standards.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              5. Your Rights
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              You may request access to, correction of, or deletion of your
              personal information at any time by reaching out to us at{" "}
              <a
                href="mailto:hello@solinix.com"
                className="text-blue-600 font-semibold"
              >
                hello@solinix.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              6. Changes to This Policy
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time. Any
              changes will be posted on this page with an updated revision
              date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;