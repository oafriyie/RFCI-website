import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailConfig';

// EmailJS initialized by config


export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    volunteerType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
    setError('');

    try {
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.VOLUNTEER_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: EMAIL_CONFIG.RECIPIENT_EMAIL,
          volunteer_type: formData.volunteerType,
          message: formData.message,
        }
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', volunteerType: '', message: '' });
    } catch (err) {
      setError('Failed to send application. Please try again or contact us directly.');
      console.error('Email error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
        <p className="text-slate-600 mb-8">
          Thank you for reaching out. A member of the RFCI team will contact you shortly.
        </p>
        <button 
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', volunteerType: '', message: '' });
          }}
          className="text-green-600 font-bold hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
          <input 
            required
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-green-500 transition-all" 
            placeholder="Abeiku Mensah" 
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
          <input 
            required
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-green-500 transition-all" 
            placeholder="abeiku@email.com" 
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">How would you like to help?</label>
        <select 
          name="volunteerType"
          value={formData.volunteerType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-green-500 bg-white"
        >
          <option value="">Select an option</option>
          <option value="Volunteer in the Field">Volunteer in the Field</option>
          <option value="Medical Outreach Support">Medical Outreach Support</option>
          <option value="Financial Donation / Partnership">Financial Donation / Partnership</option>
          <option value="Educational Training">Educational Training</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
        <textarea 
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-green-500 transition-all" 
          rows="4" 
          placeholder="Tell us a bit about yourself..."
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
        disabled={loading}
        type="submit"
        className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg shadow-green-900/10 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            Send Message <Send size={18} />
          </>
        )}
      </button>
    </form>
  );
}