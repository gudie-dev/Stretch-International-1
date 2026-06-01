import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import hero6 from '../assets/hero6.png';
import hero7 from '../assets/hero7.png';
import hero12a from '../assets/hero12a.png';
import nyscCorpers from '../assets/nysc_corpers_training.png';
import programEap from '../assets/program_eap_new.jpg';

const slides = [
  {
    image: hero7,
    title: "EMPOWERING AFRICA’S NEXT GENERATION OF CHANGEMAKERS",
    subtitle: "Building the entrepreneurial and innovation gap to drive economic growth through opportunity, while helping existing businesses scale with the structure, strategy, and funding needed."
  },
  {
    image: hero12a,
    title: "EMPOWERING AFRICA’S NEXT GENERATION OF CHANGEMAKERS",
    subtitle: "Building the entrepreneurial and innovation gap to drive economic growth through opportunity, while helping existing businesses scale with the structure, strategy, and funding needed."
  },
  {
    image: nyscCorpers,
    title: "EMPOWERING AFRICA’S NEXT GENERATION OF CHANGEMAKERS",
    subtitle: "Building the entrepreneurial and innovation gap to drive economic growth through opportunity, while helping existing businesses scale with the structure, strategy, and funding needed."
  },
  {
    image: programEap,
    title: "EMPOWERING AFRICA’S NEXT GENERATION OF CHANGEMAKERS",
    subtitle: "Building the entrepreneurial and innovation gap to drive economic growth through opportunity, while helping existing businesses scale with the structure, strategy, and funding needed.",
    imagePosition: "object-[center_25%]"
  }
];


const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10" />
          <img 
            src={slides[current].image} 
            alt="Hero" 
            className={`w-full h-full object-cover ${slides[current].imagePosition || 'object-center'} scale-105 animate-slow-zoom`}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 container-wide h-full flex flex-col justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
            EMPOWERING AFRICA’S NEXT GENERATION OF CHANGEMAKERS
          </h1>
          <p className="text-lg md:text-xl text-slate-100 mb-12 leading-relaxed max-w-2xl font-medium drop-shadow-md">
            Building the entrepreneurial and innovation gap to drive economic growth through opportunity, while helping existing businesses scale with the structure, strategy, and funding needed.
          </p>
        </motion.div>
      </div>

      <div className="absolute top-1/2 right-8 -translate-y-1/2 flex flex-col gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 transition-all duration-300 rounded-full ${current === i ? 'h-12 bg-primary' : 'h-3 bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
