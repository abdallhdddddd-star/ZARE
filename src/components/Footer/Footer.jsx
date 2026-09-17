import React from 'react';
import { Link } from 'react-router-dom';
import { SiZara } from 'react-icons/si';
import { FaInstagram, FaFacebookF, FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from "react-icons/io5";
export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        
        <div className="flex flex-col space-y-4">
          <Link to="/" className="inline-block">
            <SiZara className="text-6xl text-white tracking-widest" />
          </Link>
          <p className="text-zinc-400 text-xs tracking-widest uppercase leading-relaxed font-light">
            2026 • Luxury Defined. Minimalist design for the modern aesthetic.
          </p>
        </div>

      
        <div>
          <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-white mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs tracking-widest uppercase font-light text-zinc-400">
            <li>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

      
        <div>
          <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-white mb-4">
            Customer Care
          </h4>
          <ul className="space-y-2 text-xs tracking-widest uppercase font-light text-zinc-400">
            <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

       
        <div>
          <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-white mb-4">
            Follow Us
          </h4>
          <div className="flex space-x-4 mb-6 text-zinc-400 text-lg">
            <a href="https://www.instagram.com/abdallh_manaa/" className="hover:text-white transition-colors"><FaInstagram /></a>
            <a href="https://www.facebook.com/abdallh.ahmed.90410834?locale=ar_AR" className="hover:text-white transition-colors"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/abdallh-ahmed-42bb05396/" className="hover:text-white transition-colors"><IoLogoLinkedin /></a>
            <a href="https://github.com/abdallhdddddd-star" className="hover:text-white transition-colors"><FaGithub /></a>
          </div>
          <p className="text-[11px] tracking-widest uppercase text-zinc-400 mb-2">
            Subscribe for Updates
          </p>
          <div className="flex border-b border-white/20 pb-1">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="bg-transparent text-xs text-white placeholder-zinc-500 focus:outline-none w-full tracking-widest"
            />
            <button className="text-xs uppercase tracking-widest font-semibold hover:text-zinc-400 transition-colors">
              JOIN
            </button>
          </div>
        </div>

      </div>

      
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase text-zinc-500 font-light">
        <p>© 2026 ZARA CONCEPT. ALL RIGHTS RESERVED.</p>
        <p className="mt-2 md:mt-0">DESIGNED WITH MINIMALISM IN MIND</p>
      </div>
    </footer>
  );
}