'use client';
import { motion } from 'framer-motion';

export default function AnimatedLogo() {
  return (
    <div className="flex flex-col select-none leading-tight">
      {/* NAME + STAR */}
      <div className="flex items-center gap-1">
        {/* PREMIUM SIGNATURE NAME */}
        <motion.h1
          className="text-3xl font-semibold italic tracking-wide 
                     bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 
                     text-transparent bg-clip-text 
                     drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ fontFamily: `"Dancing Script", cursive` }}
        >
          Shashikant Pathak
        </motion.h1>

        {/* 🔥 ANIMATED STAR LIKE ANSH MODI */}
        <motion.span
          className="text-purple-300 ml-1 text-xl"
          initial={{ scale: 0.7, opacity: 0.7 }}
          animate={{
            scale: [0.8, 1.2, 0.9],
            opacity: [0.5, 1, 0.6],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ✨
        </motion.span>
      </div>

      {/* SIGNATURE UNDERLINE */}
      <motion.div
        className="relative h-[3px] mt-[4px] rounded-full 
                   bg-gradient-to-r from-transparent via-purple-400 to-transparent"
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 1 }}
      >
        {/* flowing highlight */}
        <motion.div
          className="absolute top-0 left-0 h-full w-1/3 
                     bg-gradient-to-r from-white/60 to-transparent blur-md opacity-60"
          animate={{ x: ['-30%', '130%'] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </div>
  );
}
