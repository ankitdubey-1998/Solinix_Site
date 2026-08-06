const Terms = () => {
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
            Terms of Service
          </h1>

          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
            Last updated: August 1, 2026
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200/60 p-8 md:p-12 prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight prose-a:text-indigo-600">
          
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website and services, you agree to
            be bound by these Terms of Service. If you do not agree,
            please do not use our services.
          </p>

          <h2>2. Services Provided</h2>
          <p>
            We provide software development, design, and digital marketing
            services as outlined in specific project agreements. The
            content on this website is for informational purposes only.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All original content, designs, and code displayed on this
            website are the intellectual property of our company unless
            otherwise stated. You may not reuse, republish, or distribute
            our materials without explicit permission.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            While we strive for excellence, we cannot guarantee that our
            website or services will be completely error-free or
            uninterrupted. We are not liable for any indirect, incidental,
            or consequential damages arising from your use of our website.
          </p>

          <h2>5. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are
            not responsible for the content, privacy policies, or
            practices of these external sites.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These terms are governed by the laws of the jurisdiction in
            which we operate. Any disputes arising from these terms will
            be resolved in the appropriate local courts.
          </p>

          <h2>7. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us
            at{" "}
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

export default Terms;