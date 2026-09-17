import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Cant() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();FGHG
        console.log('Contact Form Submitted:', formData);
        alert('Thank you for contacting us. We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="min-h-screen bg-zinc-950 text-white pt-32 pb-24 px-6 md:px-12 flex flex-col justify-center">
            <div className="max-w-6xl mx-auto w-full">


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-[10px] tracking-[0.35em] uppercase text-zinc-400 font-light block mb-3">
                        Client Services
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif tracking-[0.25em] uppercase font-bold text-white">
                        CONTACT US
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">


                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8 text-zinc-300 font-light"
                    >
                        <div>
                            <h3 className="text-xs uppercase tracking-[0.25em] text-white font-semibold mb-2">
                                Headquarters
                            </h3>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                Mohandessin, Giza, Egypt
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xs uppercase tracking-[0.25em] text-white font-semibold mb-2">
                                General Inquiries
                            </h3>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                support@zaraconcept.com
                            </p>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                +20 100 000 0000
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xs uppercase tracking-[0.25em] text-white font-semibold mb-2">
                                Hours of Operation
                            </h3>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                Monday – Saturday: 10:00 AM – 10:00 PM
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 shadow-2xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="JOHN DOE"
                                    className="w-full bg-transparent border-b border-zinc-700 text-xs py-2 text-white focus:outline-none focus:border-white tracking-widest uppercase transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="NAME@EXAMPLE.COM"
                                    className="w-full bg-transparent border-b border-zinc-700 text-xs py-2 text-white focus:outline-none focus:border-white tracking-widest uppercase transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="YOUR MESSAGE HERE..."
                                    className="w-full bg-transparent border-b border-zinc-700 text-xs py-2 text-white focus:outline-none focus:border-white tracking-widest uppercase transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-white text-black py-4 rounded-xl text-xs font-bold uppercase tracking-[0.25em] hover:bg-zinc-200 transition-colors cursor-pointer shadow-lg mt-4"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}