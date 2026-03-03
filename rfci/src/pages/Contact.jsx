import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "../config/emailConfig";

// EmailJS already initialized in config


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.CONTACT_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: EMAIL_CONFIG.RECIPIENT_EMAIL,
          subject: formData.subject,
          message: formData.message,
        }
      );

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again or contact us directly.");
      console.error("Email error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Message Sent!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for reaching out. A member of the RFCI team will contact you shortly.
          </p>
          <button 
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", subject: "", message: "" });
            }}
            className="text-green-600 font-bold hover:underline"
          >
            Send another message
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-black text-slate-800"
            >
              Get in Touch
            </motion.h1>
            <p className="text-slate-600 mt-4 text-lg">
              Have questions about our programs or want to partner with RFCI? We're here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-green-600 p-10 rounded-[3rem] text-white shadow-xl shadow-green-900/20">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-green-300 shrink-0" />
                    <div>
                      <p className="font-bold text-lg">Our Office</p>
                      <p className="text-green-100">123 Agriculture Lane, North Legon,<br />Accra, Ghana</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-green-300 shrink-0" />
                    <div>
                      <p className="font-bold text-lg">Phone</p>
                      <p className="text-green-100">+233 24 000 0000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-green-300 shrink-0" />
                    <div>
                      <p className="font-bold text-lg">Email</p>
                      <p className="text-green-100">info@rfci-ghana.org</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-2">Office Hours</h3>
                <p className="text-slate-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-slate-600">Saturday: By Appointment Only</p>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 outline-none transition" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 outline-none transition" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 outline-none transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnership Proposal">Partnership Proposal</option>
                    <option value="Volunteer Opportunities">Volunteer Opportunities</option>
                    <option value="Donation Question">Donation Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows="5" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-500 outline-none transition" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                    >
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}