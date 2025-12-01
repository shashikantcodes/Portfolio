'use client';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { useEffect, useState } from 'react';

const Preloader = ({ finishLoading }) => {
  const [count, setCount] = useState(0);

  // 1. COUNTER LOGIC (Sirf ginti badhayega)
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        // Agar 100 ho gaya to interval rok do, par parent ko abhi mat batao
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Speed control

    return () => clearInterval(interval);
  }, []);

  // 2. TRIGGER PARENT (Jab count 100 ho jaye, tab parent ko bolo)
  useEffect(() => {
    if (count === 100) {
      // Thoda sa wait karte hain taaki user "100%" dekh sake, phir gayab karenge
      const timer = setTimeout(() => {
        finishLoading();
      }, 200); // 0.2 second ka delay smooth feel ke liye

      return () => clearTimeout(timer);
    }
  }, [count, finishLoading]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030014] text-white"
    >
      {/* Glowing Icon */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mb-8 p-4 rounded-full bg-purple-500/10 border border-purple-500/30 shadow-[0_0_30px_#a855f7]"
      >
        <Code size={48} className="text-purple-400" />
      </motion.div>

      {/* Loading Bar Container */}
      <div className="w-[300px] h-[4px] bg-gray-800 rounded-full overflow-hidden mb-4 relative">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
          style={{ width: `${count}%` }}
        />
      </div>

      {/* Text & Counter */}
      <div className="flex flex-col items-center gap-2 font-mono">
        <h2 className="text-xl font-bold tracking-wider">Loading Portfolio...</h2>
        <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          {count}%
        </span>
      </div>
    </motion.div>
  );
};

export default Preloader;
