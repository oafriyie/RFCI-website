import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img src="/newlogo.png" alt="RFCI Logo" className="w-20 h-20 object-contain" />
        </Link>
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center font-medium text-slate-600">
          <Link to="/work" className="hover:text-green-600 transition">About Us</Link>
          <Link to="/programs" className="hover:text-green-600 transition">Core Initiatives</Link>
          <Link to="/what-new" className="hover:text-green-600 transition">What's New</Link>
          <Link to="/team" className="hover:text-green-600 transition">Meet the Team</Link>
          <Link to="/contact" className="hover:text-green-600 transition">Contact Us</Link>
          
          <div className="flex items-center gap-3">
            {/* UPDATED: Navigates to the new /join page */}
            <Link 
              to="/join" 
              className="text-slate-700 px-5 py-2.5 rounded-full font-bold hover:bg-slate-100 transition"
            >
              Join Us
            </Link>
            
            {/* Donate with Heart Icon */}
            <Link 
              to="/donate" 
              className="bg-green-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-green-700 transition shadow-lg shadow-green-900/10 flex items-center gap-2"
            >
              Donate <Heart size={18} className="fill-white/20" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-slate-800 p-2">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-bold text-green-600">Home</Link>
              <Link to="/work" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700">About Us</Link>
              <Link to="/what-new" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700">What's New</Link>
              <Link to="/programs" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700">Core Initiatives</Link>
              <Link to="/team" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700">Meet the Team</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700">Contact Us</Link>
              
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-50 mt-2">
                {/* UPDATED: Mobile Link to /join page */}
                <Link 
                  to="/join" 
                  onClick={() => setIsOpen(false)} 
                  className="bg-slate-100 text-slate-800 px-5 py-3 rounded-xl font-bold text-center"
                >
                  Join Us
                </Link>
                <Link 
                  to="/donate" 
                  onClick={() => setIsOpen(false)} 
                  className="bg-green-600 text-white px-5 py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2"
                >
                  Donate <Heart size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}