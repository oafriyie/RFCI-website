import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import SuccessStories from "./components/SuccessStories";
import VolunteerForm from "./components/VolunteerForm";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import OurWork from "./pages/OurWork";
import ProgramsPage from "./pages/ProgramsPage";
import MeetTheTeam from "./pages/MeetTheTeam";
import WhatsNew from "./pages/WhatsNew";
import InitiativeDetail from "./pages/InitiativeDetail";
import { motion } from "framer-motion";
import { MapPin, Mail, ArrowLeft } from "lucide-react";

const Home = () => (
  <>
    <Hero />
    <Programs />
    <SuccessStories />
    <section className="py-24 bg-green-600 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to make a real difference?</h2>
        <Link 
          to="/join" 
          className="inline-block bg-white text-green-600 px-12 py-5 rounded-full font-black text-lg shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Become a Volunteer
        </Link>
      </div>
    </section>
  </>
);

const JoinUs = () => (
  <section className="py-16 md:py-24 bg-white min-h-screen">
    <div className="container mx-auto px-6">
      <Link to="/" className="inline-flex items-center text-green-600 font-bold mb-10 transition-all duration-200 gap-2 hover:gap-3">
        <ArrowLeft size={20} /> Back to Home
      </Link>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Get Involved</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mt-4 leading-tight">Join the Movement</h1>
          <p className="text-slate-600 mt-6 text-xl max-w-md">Your expertise can change lives. Fill out the form below.</p>
          <div className="mt-12 space-y-8">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shadow-sm"><MapPin size={28} /></div>
              <div><p className="text-xs text-slate-400 font-bold uppercase">Location</p><p className="text-slate-800 font-bold text-lg">Accra, Ghana</p></div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 shadow-sm"><Mail size={28} /></div>
              <div><p className="text-xs text-slate-400 font-bold uppercase">Direct Email</p><p className="text-slate-800 font-bold text-lg">join@rfci.org</p></div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-50 p-8 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl">
          <VolunteerForm />
        </motion.div>
      </div>
    </div>
  </section>
);

function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/:id" element={<InitiativeDetail />} />
        <Route path="/team" element={<MeetTheTeam />} />
        <Route path="/what-new" element={<WhatsNew />} />
      </Routes>
      <footer className="bg-slate-900 text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-green-400">RFCI</h2>
          <p className="mt-4 text-slate-400 max-w-md mx-auto">Rural Farmer Care Initiative: Sustainable agriculture and rural health.</p>
          <div className="mt-10 pt-8 border-t border-slate-800 text-sm text-slate-500">© 2026 RFCI. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;