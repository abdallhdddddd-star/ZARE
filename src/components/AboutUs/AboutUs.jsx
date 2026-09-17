import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="min-h-screen bg-zinc-950 text-white pt-32 pb-24 px-6 md:px-12 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        
      
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase text-zinc-400 font-light block mb-3">
            Our Philosophy
          </span>
          <h1 className="text-4xl md:text-6xl font-serif tracking-[0.25em] uppercase font-bold text-white">
            THE CONCEPT
          </h1>
        </motion.div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-zinc-300 font-light text-sm leading-relaxed tracking-wide"
          >
            <p className="text-base text-white font-serif border-l-2 border-white pl-4 leading-normal">
              Defined by clean lines, functional geometry, and refined aesthetic contrast.
            </p>
            <p>
              Our vision reimagines contemporary fashion by combining strict minimalism with modern craftsmanship. Each collection is carefully engineered to deliver timeless silhouettes that strip away the non-essential.
            </p>
            <p className="text-zinc-400">
              We create pieces designed to integrate seamlessly into a sophisticated daily wardrobe, elevating luxury into an everyday standard.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[420px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800" 
              alt="The Concept Visual" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
            />
          </motion.div>

        </div>

        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-zinc-800/80 pt-16 text-center"
        >
          <div className="space-y-2">
            <h3 className="text-xl font-serif tracking-[0.2em] text-white">2026</h3>
            <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-light">Modern Era</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-serif tracking-[0.2em] text-white">PURE</h3>
            <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-light">Minimal Aesthetics</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-serif tracking-[0.2em] text-white">CRAFTED</h3>
            <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-light">Premium Standard</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}