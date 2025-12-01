'use client';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Code2,
  Coffee,
  Database,
  Globe,
  Rocket,
  Sparkles,
  Target,
  User,
  Zap,
} from 'lucide-react';

const About = () => {
  // --- STATS DATA ---
  const stats = [
    { label: 'Projects Completed', value: '40+', icon: Target, color: 'text-purple-400' },
    { label: 'Years Experience', value: '1+', icon: Code2, color: 'text-cyan-400' },
    { label: 'Lines of Code', value: '10K+', icon: Database, color: 'text-pink-400' },
    { label: 'Learning Mode', value: '24/7', icon: BookOpen, color: 'text-yellow-400' },
  ];

  // --- TECH TAGS (Jo Image me buttons the) ---
  const techStacks = [
    'MERN Stack',
    'Next.js',
    'Tailwind CSS',
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    'Express.js',
    'Framer Motion',
  ];

  return (
    <section
      id="about"
      className="relative w-full py-20 px-4 md:px-10 flex flex-col items-center justify-center overflow-hidden z-[20]"
    >
      {/* 1. HEADING */}
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
        >
          <Sparkles size={16} className="text-yellow-300" />
          <span className="text-sm font-medium text-gray-200">Get to know me</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          About Me
        </motion.h2>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        {/* --- LEFT SIDE: IMAGE & SETUP --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center h-full"
        >
          {/* The Laptop/Setup Frame */}
          <div className="relative w-full h-[450px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0f0c29] group">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

            {/* Simulated Screen Content */}
            <div className="absolute top-10 left-10 right-10 bottom-24 bg-[#1a1a2e] rounded-lg border border-gray-700 p-4 font-mono text-xs overflow-hidden shadow-inner">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-2">
                <p className="text-pink-400">
                  import <span className="text-white">Success</span> from{' '}
                  <span className="text-green-400">'./Life'</span>;
                </p>
                <p className="text-pink-400">
                  const <span className="text-yellow-300">Shashikant</span> ={' '}
                  <span className="text-blue-400">async</span> () ={'>'} {'{'}
                </p>
                <p className="pl-4 text-white">
                  while(<span className="text-blue-400">alive</span>) {'{'}
                </p>
                <p className="pl-8 text-green-400">eat();</p>
                <p className="pl-8 text-green-400">sleep();</p>
                <p className="pl-8 text-green-400">code();</p>
                <p className="pl-8 text-green-400">repeat();</p>
                <p className="pl-4 text-white">{'}'}</p>
                <p className="text-white">{'}'}</p>
              </div>
            </div>

            {/* Animated Coffee Cup */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-6 right-8"
            >
              <Coffee
                size={40}
                className="text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.5)]"
              />
              <motion.div
                animate={{ opacity: [0, 0.8, 0], y: [-5, -15] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-3 left-2 w-1 h-3 bg-white/40 blur-[2px] rounded-full"
              />
              <motion.div
                animate={{ opacity: [0, 0.8, 0], y: [-5, -20] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-4 left-5 w-1 h-4 bg-white/40 blur-[2px] rounded-full"
              />
            </motion.div>

            {/* Floating Tech Badge */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-6 left-8 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg backdrop-blur-md"
            >
              <span className="text-blue-300 text-sm font-semibold flex items-center gap-2">
                <Globe size={14} /> Full Stack Dev
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: CONTENT & PILLS --- */}
        <div className="flex flex-col justify-center gap-8">
          {/* 1. Who I Am */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                <User size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Who I Am</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg">
              I'm <span className="text-white font-semibold">Shashikant</span>, a passionate Full
              Stack Developer. I bridge the gap between design and technology, creating
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
                {' '}
                seamless user experiences{' '}
              </span>
              and robust backend architectures.
            </p>
          </motion.div>

          {/* 2. What I Do (THE ANIMATED PILLS/BUTTONS) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">What I Do</h3>
            </div>
            <p className="text-gray-400 mb-4">
              I build scalable web applications using modern technologies. My toolkit includes:
            </p>

            {/* --- TECH PILLS (Extreme Level) --- */}
            <div className="flex flex-wrap gap-3">
              {techStacks.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -3, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
                  className="px-4 py-2 text-sm font-medium text-blue-200 bg-blue-900/20 border border-blue-500/30 rounded-full cursor-default hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* 3. My Mission (Special Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative p-6 rounded-2xl bg-gradient-to-r from-[#1e1b4b] to-[#312e81] border border-indigo-500/30 overflow-hidden group"
          >
            {/* Rocket Icon Background */}
            <Rocket
              className="absolute -right-4 -bottom-4 text-indigo-500/10 rotate-45 group-hover:scale-110 transition-transform duration-500"
              size={120}
            />

            <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Target className="text-indigo-400" /> My Mission
            </h4>
            <p className="text-indigo-200 relative z-10">
              To leverage my skills in the <span className="font-bold text-white">MERN stack</span>{' '}
              to build software solutions that solve real-world problems and deliver{' '}
              <span className="font-bold text-white">impactful tech solutions</span>.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 3. STATS CARDS (Bottom) */}
      <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.05 }}
            className="flex flex-col items-center justify-center p-6 bg-[#0b0b15]/60 border border-white/5 rounded-2xl backdrop-blur-md hover:border-purple-500/50 hover:bg-[#151226] hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 group shadow-lg"
          >
            <div
              className={`mb-4 p-3 rounded-full bg-white/5 ${stat.color} group-hover:bg-white/10 transition-colors`}
            >
              <stat.icon size={28} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
              {stat.value}
            </h3>
            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
