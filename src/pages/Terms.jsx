const Terms = () => {
  return (
    <section className="relative py-20 bg-white">
      <div className="px-4 relative z-10 max-w-3xl mx-auto">
        <span className="inline-block text-blue-950 font-semibold uppercase tracking-widest text-sm bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-5">
          Legal
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
          Terms of Service
        </h1>

        <p className="text-sm text-slate-500 mb-10">
          Last updated: August 1, 2026
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              By accessing or using the Solinix Software Solutions website,
              you agree to be bound by these Terms of Service. If you do not
              agree with any part of these terms, please do not use our
              website or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              2. Use of Our Services
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Our website and services are provided for informational and
              business purposes. You agree not to misuse our services,
              attempt unauthorized access to our systems, or use our content
              in a way that violates applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              3. Intellectual Property
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              All content on this website, including text, graphics, logos,
              and design elements, is the property of Solinix Software
              Solutions unless otherwise stated, and may not be reproduced
              without permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              4. Service Availability
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We aim to keep our website and services available at all
              times, but we do not guarantee uninterrupted access. We may
              update, modify, or discontinue parts of our services without
              prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              5. Limitation of Liability
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Solinix Software Solutions is not liable for any indirect,
              incidental, or consequential damages arising from your use of
              our website or services, to the fullest extent permitted by
              law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              6. Changes to These Terms
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We may revise these Terms of Service from time to time.
              Continued use of our website after changes are posted
              constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-blue-950 mb-3">
              7. Contact Us
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              If you have questions about these terms, reach out to us at{" "}
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

export default Terms;