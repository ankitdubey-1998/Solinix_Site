const Privacy = () => {
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
            Privacy Policy
          </h1>

          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Last updated: August 1, 2026
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200/60 p-8 md:p-12 prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight prose-a:text-indigo-600">
          
          <h2>1. Information We Collect</h2>
          <p>
            When you use our website or contact us, we may collect
            information such as your name, email address, phone number,
            and any details you voluntarily share through our forms. We
            also collect standard technical data like browser type, device
            information, and pages visited to help us improve our services.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to inquiries,
            provide our services, improve our website, and communicate
            updates relevant to you. We do not sell your personal
            information to third parties.
          </p>

          <h2>3. Data Security</h2>
          <p>
            We take reasonable technical and organizational measures to
            protect your data from unauthorized access, alteration, or
            disclosure. However, no method of transmission over the
            internet is completely secure, and we cannot guarantee
            absolute security.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            We may use third-party tools for analytics, hosting, or
            communication. These providers only access the information
            necessary to perform their functions and are expected to
            handle it in accordance with applicable privacy standards.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal information at any time by reaching out to us at{" "}
            <a href="mailto:hello@solinix.com">
              hello@solinix.com
            </a>
            .
          </p>

          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any
            changes will be posted on this page with an updated revision
            date.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Privacy;