import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A] text-white">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d"
            alt="Designer workspace"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Sarah Anderson
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Product Designer crafting meaningful digital experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <a
            href="#work"
            className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-colors text-lg"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors text-lg"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={32} className="text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}