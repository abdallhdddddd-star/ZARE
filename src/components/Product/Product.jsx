import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600";
  const navigate = useNavigate();
  async function getProducts() {
    try {
      const { data } = await axios.get('https://api.escuelajs.co/api/v1/products');
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <section className="bg-zinc-100 text-zinc-900 min-h-screen pt-32 pb-24 px-6 md:px-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif tracking-[0.25em] uppercase font-bold text-zinc-900">
            Product Collection
          </h2>
          <p className="text-zinc-500 text-xs tracking-widest uppercase mt-3">
            Minimalist Luxury Aesthetic
          </p>
        </motion.div>

        {/* Responsive Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.slice(0, 16).map((product, index) => {
            // Clean Image URL
            let rawImage = product.images?.[0] || '';
            let imageUrl = rawImage.replace(/[\[\]"]/g, '');

            if (!imageUrl.startsWith('http')) {
              imageUrl = FALLBACK_IMAGE;
            }

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                className="group relative bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:bg-zinc-950 transition-all duration-500 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative w-full h-80 overflow-hidden bg-zinc-100">
                    <img
                      src={imageUrl}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = FALLBACK_IMAGE;
                      }}
                    />
                    <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-md text-zinc-900 text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-zinc-200 group-hover:bg-zinc-900/80 group-hover:text-white group-hover:border-zinc-700 transition-colors duration-500">
                      {product.category?.name || 'Collection'}
                    </span>
                  </div>

                  {/* Content Info */}
                  <div className="p-6">
                    <h3 className="text-xs uppercase tracking-[0.15em] font-bold text-zinc-900 group-hover:text-white transition-colors duration-500 line-clamp-1 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-zinc-500 group-hover:text-zinc-400 text-xs line-clamp-2 leading-relaxed font-light transition-colors duration-500">
                      {product.description || 'Exclusive luxury item with fine details and modern craftsmanship.'}
                    </p>
                  </div>
                </div>

                {/* Footer: Price & Curved Hover Button */}
                <div className="p-6 pt-0 flex items-center justify-between mt-2">
                  <span className="text-sm font-serif font-bold tracking-widest text-zinc-900 group-hover:text-white transition-colors duration-500">
                    ${product.price}
                  </span>

                  {/* Curved Button with Smooth Color Swap */}
                  <button
                    onClick={() => navigate('/view-product', { state: { product } })}
                    className="bg-white text-zinc-900 border border-zinc-300 text-[11px] font-semibold px-5 py-2.5 rounded-lg uppercase tracking-widest group-hover:bg-black group-hover:text-white group-hover:border-white transition-all duration-500 shadow-sm cursor-pointer"
                  >
                    View
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}