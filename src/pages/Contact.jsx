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
    // Hook this up to your backend/EmailJS later
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-950 font-semibold uppercase tracking-widest text-sm bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-5">
            Contact Us
          </span>

          <h2 className="text-2xl md:text-4xl font-bold text-blue-950 mt-3">
            Let's Start Your Next{" "}
            <span className="text-blue-600">Breakthrough</span>
          </h2>

          <div className="w-14 h-1 bg-blue-600 rounded-full mx-auto mt-6 mb-6" />

          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Have an idea or need a digital solution? We'd love to hear from
            you. Fill out the form and our team will get back to you shortly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Column */}
          <div className="flex flex-col gap-8">

            {/* Attractive image banner */}
            <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=60"
                alt="Our team at work"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-blue-950/90 px-6 py-4 flex items-center gap-3">
                <BsClockFill className="text-blue-300 shrink-0" size={20} />
                <p className="text-white text-sm font-medium">
                  We usually reply within 24 hours — Mon to Sat
                </p>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100 hover:shadow-2xl transition duration-300">

              <h3 className="text-2xl font-bold text-blue-950 mb-8">
                Contact Information
              </h3>

              {/* Office */}
              <div className="flex gap-5 mb-8 group">
                <div className="w-14 h-14 shrink-0 rounded-full bg-blue-950 text-white flex items-center justify-center group-hover:scale-110 transition">
                  <FaMapMarkerAlt size={24} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-slate-900">Our Office</h4>
                  <p className="text-slate-500">
                    123 Tech Park, Innovation Valley, CA 94043
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5 mb-8 group">
                <div className="w-14 h-14 shrink-0 rounded-full bg-blue-950 text-white flex items-center justify-center group-hover:scale-110 transition">
                  <MdEmail size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-slate-900">Email Us</h4>
                  <a href="mailto:hello@solinix.com" className="text-slate-500 hover:text-blue-600 transition-colors">
                    hello@solinix.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5 mb-8 group">
                <div className="w-14 h-14 shrink-0 rounded-full bg-blue-950 text-white flex items-center justify-center group-hover:scale-110 transition">
                  <FaPhoneAlt size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-slate-900">Call Us</h4>
                  <a href="tel:+15551234567" className="text-slate-500 hover:text-blue-600 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex gap-5 mb-10 group">
                <div className="w-14 h-14 shrink-0 rounded-full bg-blue-950 text-white flex items-center justify-center group-hover:scale-110 transition">
                  <BsClockFill size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-slate-900">Office Hours</h4>
                  <p className="text-slate-500">
                    Monday - Saturday
                    <br />
                    9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-950 text-white font-semibold hover:bg-blue-900 hover:scale-[1.02] transition">
                <FaCalendarAlt size={20} />
                Schedule a Meeting
              </button>
            </div>
          </div>

          {/* Right Card - Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100 hover:shadow-2xl transition duration-300 h-fit">

            <h3 className="text-2xl font-bold text-blue-950 mb-8">
              Send us a Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                  <FaCheckCircle size={30} />
                </div>
                <h4 className="text-xl font-bold text-blue-950">Message Sent!</h4>
                <p className="text-slate-500 mt-2 max-w-xs">
                  Thanks for reaching out — our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-blue-600 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>

                <div className="relative">
                  <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full rounded-xl border border-slate-300 pl-12 pr-5 py-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                  />
                </div>

                <div className="relative">
                  <MdEmail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full rounded-xl border border-slate-300 pl-12 pr-5 py-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                  />
                </div>

                <div className="relative">
                  <FaTag className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full rounded-xl border border-slate-300 pl-12 pr-5 py-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                  />
                </div>

                <textarea
                  rows="6"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none resize-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
                ></textarea>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 py-4 rounded-xl bg-blue-950 text-white font-semibold hover:bg-blue-900 hover:scale-[1.02] transition"
                >
                  Send Message
                  <FaArrowRight size={20} />
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