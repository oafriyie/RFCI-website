import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  { src: "/LadyCare.jpg" },
  { src: "/freenhis.jpg" },
  { src: "/co.jpeg" },
  { src: "/ff.jpeg" },
  { src: "/ss.jpeg" },
  { src: "/group.jpeg" }
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-150 flex items-center overflow-hidden">
      {/* Animated Background Image with Carousel */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((imageObj, index) => (
          <motion.img
            key={index}
            src={imageObj.src}
            className="absolute w-full h-full object-cover"
            alt={`Hero Background ${index + 1}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0
            }}
            transition={{ duration: 1 }}
          />
        ))}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-green-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">Growing Together</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-6 leading-tight">
            Empowering the <span className="text-green-400">Hands</span> that Feed the Nation.
          </h1>
          <p className="text-xl mt-6 text-slate-200">
            Rural Farmer Care Initiative (RFCI) provides smallholder farmers with the tools, 
            health outreach, and education they need to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link 
              to="/donate" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-900/20 transition-all active:scale-95 text-center"
            >
              Support a Farmer
            </Link>
            <Link 
              to="/programs" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all text-center"
            >
              Our Initiatives
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Caption overlay for specific images */}
      {HERO_IMAGES[currentImageIndex]?.caption && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h2 className="text-white text-4xl md:text-6xl font-bold bg-black/40 px-6 py-4 rounded">
            {HERO_IMAGES[currentImageIndex].caption}
          </h2>
        </div>
      )}

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {HERO_IMAGES.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentImageIndex 
                ? "w-8 bg-green-400" 
                : "w-3 bg-white/50 hover:bg-white/70"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  );
}