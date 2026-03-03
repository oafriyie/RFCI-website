import { motion } from "framer-motion";
import { MapPin, Mail, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import VolunteerForm from "../components/VolunteerForm";
import Navbar from "../components/Navbar";

export default function JoinUs() {
  return (
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          {/* Breadcrumb / Back Link */}
          <Link to="/" className="inline-flex items-center text-green-600 font-bold mb-8 hover:gap-2 transition-all">
            <ChevronLeft size={20} /> Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Context */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-green-600 font-bold tracking-widest uppercase text-sm">
                Get Involved
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 leading-tight">
                Join the Movement
              </h1>
              <p className="text-slate-600 mt-6 text-xl leading-relaxed max-w-lg">
                Whether you are a student, a professional, or a fellow farmer, 
                your time and expertise can change lives in our communities.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm border border-slate-100">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Our Headquarters</p>
                    <p className="text-slate-800 font-bold text-xl">Accra & Northern Regions</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm border border-slate-100">
                    <Mail size={32} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Direct Inquiry</p>
                    <p className="text-slate-800 font-bold text-xl">join@rfci.org</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: The Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-8">Volunteer Application</h2>
              <VolunteerForm />
            </motion.div>

          </div>
        </div>
      </main>
  );
}