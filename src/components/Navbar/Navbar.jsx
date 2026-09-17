import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SiZara } from 'react-icons/si';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10 text-white"
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        
       
        <NavLink to="/" className="flex items-center gap-2">
          <SiZara className="text-5xl text-white tracking-widest" />
        </NavLink>

        
        <ul className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase font-light">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => 
                  `relative py-1 transition-colors duration-200 ${
                    isActive ? 'text-white font-medium' : 'text-zinc-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-white" 
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

      
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-2xl text-white focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

      </div>

     
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-b border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-sm tracking-[0.2em] uppercase font-light">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-zinc-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}