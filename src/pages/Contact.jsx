import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaArrowRight,
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaCheckCircle,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { BsClockFill } from "react-icons/bs";
import FadeInSection from "../components/FadeInSection";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to your backend/EmailJS later
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className=" relative py-18 overflow-hidden bg-linear-to-b from-white via-purple-50/40 to-white">

      {/* Background mesh */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-400/25 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-200/25 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="inline-block text-purple-700 font-semibold uppercase tracking-widest text-sm bg-purple-100 px-4 py-1.5 rounded-full mb-5">
              Contact Us
            </span>

            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-3">
              Let's Build Something{" "}
              <span className="bg-linear-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>

            <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
              Have an idea or need a digital solution? We'd love to hear from
              you. Fill out the form and our team will get back to you shortly.
            </p>

           
          </div>
        </FadeInSection>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Card */}
          <FadeInSection delay={0}>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition duration-300">

              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Contact Information
              </h3>

              {/* Office */}
              <div className="flex gap-5 mb-8 group">
                <div className="w-14 h-14 shrink-0 rounded-full bg-linear-to-r from-purple-600 to-blue-900 text-white flex items-center justify-center group-hover:scale-110 transition">
                  <FaMapMarkerAlt size={24} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Our Office</h4>
                  <p className="text-gray-500">
                    123 Tech Park, Innovation Valley, CA 94043
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5 mb-8 group">
                <div className="w-14 h-14 shrink-0 rounded-full bg-linear-to-r from-purple-600 to-blue-900 text-white flex items-center justify-center group-hover:scale-110 transition">
                  <MdEmail size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Email Us</h4>
                  <a href="mailto:hello@solinix.com" className="text-gray-500 hover:text-purple-600 transition-colors">
                    hello@solinix.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5 mb-8 group">
                <div className="w-14 h-14 shrink-0 rounded-full bg-linear-to-r from-purple-600 to-blue-900 text-white flex items-center justify-center group-hover:scale-110 transition">
                  <FaPhoneAlt size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Call Us</h4>
                  <a href="tel:+15551234567" className="text-gray-500 hover:text-purple-600 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex gap-5 mb-10 group">
                <div className="w-14 h-14 shrink-0 rounded-full bg-linear-to-r from-purple-600 to-blue-900 text-white flex items-center justify-center group-hover:scale-110 transition">
                  <BsClockFill size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Office Hours</h4>
                  <p className="text-gray-500">
                    Monday - Saturday
                    <br />
                    9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-linear-to-r from-purple-600 to-blue-900 text-white font-semibold hover:scale-105 transition">
                <FaCalendarAlt size={20} />
                Schedule a Meeting
              </button>
            </div>
          </FadeInSection>

          {/* Right Card */}
          <FadeInSection delay={0.15}>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition duration-300">

              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Send us a Message
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                    <FaCheckCircle size={30} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Message Sent!</h4>
                  <p className="text-gray-500 mt-2 max-w-xs">
                    Thanks for reaching out — our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-purple-600 font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>

                  <div className="relative">
                    <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full rounded-xl border border-gray-300 pl-12 pr-5 py-4 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition"
                    />
                  </div>

                  <div className="relative">
                    <MdEmail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full rounded-xl border border-gray-300 pl-12 pr-5 py-4 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition"
                    />
                  </div>

                  <div className="relative">
                    <FaTag className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="w-full rounded-xl border border-gray-300 pl-12 pr-5 py-4 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition"
                    />
                  </div>

                  <textarea
                    rows="6"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none resize-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 py-4 rounded-xl bg-linear-to-r from-purple-600 to-blue-900 text-white font-semibold hover:scale-[1.02] transition"
                  >
                    Send Message
                    <FaArrowRight size={20} />
                  </button>
                </form>
              )}
            </div>
          </FadeInSection>

        </div>
      </div>
    </section>
  )
}

export default Contact