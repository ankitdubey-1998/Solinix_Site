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

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="relative py-8 lg:py-16 bg-slate-50 overflow-hidden">
      {/* Premium background layer */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center opacity-[0.05]"
        style={{
          backgroundImage: "url('/hero_modern_office.png')",
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold uppercase tracking-widest text-xs mb-6 shadow-sm animate-fade-in-up">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Let's Start Your Next{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
              Breakthrough
            </span>
          </h2>

          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full mx-auto mt-8 mb-8" />

          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Have an idea or need an enterprise digital solution? Fill out the form and our senior team will get back to you within hours.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Column */}
          <div className="flex flex-col gap-10">

            {/* Attractive image banner */}
            <div className="relative h-72 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200/50 group">
              <img
                src="/hero_modern_office.png"
                alt="Our customer support team"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-8 py-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500/30 backdrop-blur-md border border-indigo-400/30 flex items-center justify-center">
                  <BsClockFill className="text-indigo-100" size={18} />
                </div>
                <p className="text-white text-sm md:text-base font-medium">
                  We usually reply within 12 hours — Mon to Sat
                </p>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white rounded-[2.5rem] shadow-xl p-10 lg:p-12 border border-slate-200 hover:shadow-2xl transition duration-500">

              <h3 className="text-2xl font-bold text-slate-900 mb-10 tracking-tight">
                Contact Information
              </h3>

              {/* Office */}
              <div className="flex gap-6 mb-10 group cursor-default">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm border border-indigo-100">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Our Office</h4>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed mt-1">
                    123 Tech Park, Innovation Valley, CA 94043
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-6 mb-10 group">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm border border-indigo-100">
                  <MdEmail size={26} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Email Us</h4>
                  <a href="mailto:hello@solinix.com" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors mt-1 block">
                    hello@solinix.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6 mb-10 group">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm border border-indigo-100">
                  <FaPhoneAlt size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">Call Us</h4>
                  <a href="tel:+15551234567" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors mt-1 block">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full flex items-center justify-center gap-3 py-4 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-indigo-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mt-6">
                <FaCalendarAlt size={16} />
                Schedule a Meeting
              </button>
            </div>
          </div>

          {/* Right Card - Form */}
          <div className="bg-white rounded-[2.5rem] shadow-xl p-10 lg:p-12 border border-slate-200 hover:shadow-2xl transition duration-500 h-fit">

            <h3 className="text-2xl font-bold text-slate-900 mb-10 tracking-tight">
              Send us a Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6 shadow-inner border border-emerald-100">
                  <FaCheckCircle size={40} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Message Sent!</h4>
                <p className="text-slate-600 mt-4 max-w-sm font-medium leading-relaxed">
                  Thanks for reaching out! Our team has received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm text-indigo-600 font-bold hover:text-indigo-800 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>

                <div className="relative">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                    <FaUser className="text-slate-400" size={14} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 pl-20 pr-6 py-5 text-sm font-medium text-slate-900 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                    <MdEmail className="text-slate-400" size={16} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 pl-20 pr-6 py-5 text-sm font-medium text-slate-900 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                    <FaTag className="text-slate-400" size={14} />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 pl-20 pr-6 py-5 text-sm font-medium text-slate-900 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-slate-400"
                  />
                </div>

                <textarea
                  rows="6"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-6 py-5 text-sm font-medium text-slate-900 outline-none resize-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-slate-400"
                ></textarea>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-3 py-5 rounded-2xl bg-indigo-600 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300 mt-4"
                >
                  Send Message
                  <FaArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact