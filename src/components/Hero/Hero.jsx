import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroBg from '../../assets/Gemini_Generated_Image_9l7pzg9l7pzg9l7p.jpg';
import { motion } from "motion/react";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay Box */}
      <motion.div 
        animate={{ y: [350, 0, 0] }} 
        transition={{ duration: 2 }} 
        className="bg-black/40 backdrop-blur-sm p-8 md:p-12 text-center text-white rounded-md max-w-lg mx-4 z-10"
      >
        <h1 className="text-4xl md:text-5xl font-serif tracking-[0.2em] mb-3">
          ZARA
        </h1>
        <p className="text-sm md:text-base tracking-[0.15em] mb-6 font-light">
          2026 • LUXURY DEFINED
        </p>

        <button 
          onClick={() => navigate('/products')} 
          className="bg-white text-black font-semibold px-8 py-3 tracking-widest text-xs uppercase hover:bg-black hover:text-white transition-all duration-300 cursor-pointer rounded-4xl"
        >
          SHOP NOW
        </button>
      </motion.div>
    </div>
  );
}