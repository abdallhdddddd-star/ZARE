import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart, FaRegHeart, FaStar, FaArrowLeft } from 'react-icons/fa';

export default function Viewproduct() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);


  const product = location.state?.product;

  const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600";

  if (!product) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6">
        <p className="text-sm tracking-widest uppercase mb-6 text-zinc-400">No Product Selected</p>
        <button
          onClick={() => navigate('/products')}
          className="bg-white text-black px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest hover:bg-zinc-200 transition-colors cursor-pointer"
        >
          Back To Products
        </button>
      </div>
    );
  }


  let rawImage = product.images?.[0] || '';
  let imageUrl = rawImage.replace(/[\[\]"]/g, '');
  if (!imageUrl.startsWith('http')) imageUrl = FALLBACK_IMAGE;

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-28 pb-16 px-6 md:px-12 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">


        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-zinc-400 hover:text-white text-xs uppercase tracking-widest mb-8 transition-colors cursor-pointer"
        >
          <FaArrowLeft /> Back to Collection
        </button>

        {/* Product View Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl h-[450px] md:h-[550px]"
          >
            <img
              src={imageUrl}
              alt={product.title}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
            />

            <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-widest text-zinc-300 px-3 py-1.5 rounded-full border border-white/10">
              {product.category?.name || 'Luxury Item'}
            </span>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-serif tracking-[0.2em] uppercase font-bold text-white mb-4">
                {product.title}
              </h1>


              <div className="flex items-center gap-3 mb-6">
                <div className="flex text-amber-400 gap-1 text-xs">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <span className="text-zinc-400 text-xs tracking-widest uppercase">
                  (4.9 / 5.0 Rating)
                </span>
              </div>


              <div className="text-2xl font-serif tracking-widest text-white font-bold mb-6">
                ${product.price}
              </div>


              <p className="text-zinc-400 text-sm leading-relaxed font-light tracking-wide mb-8 border-t border-b border-zinc-800/80 py-6">
                {product.description || 'Crafted with premium materials for a modern, minimalist design.'}
              </p>
            </div>


            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 transition-colors text-xl cursor-pointer"
              >
                {isLiked ? (
                  <FaHeart className="text-red-500 scale-110 transition-transform" />
                ) : (
                  <FaRegHeart className="text-zinc-300" />
                )}
              </button>

              <button className="flex-1 bg-white text-black py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-200 transition-colors cursor-pointer shadow-lg">
                Add To Cart
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}