'use client';
import data from '@/data/portfolio.json';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    // CHANGE 1: 'h-screen' hata kar 'min-h-screen' kiya.
    // 'overflow-hidden' hata diya taki scroll ho sake.
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center z-[10] pt-32 pb-10"
    >
      {/* --- FLOATING CODE CARDS (Position fix) --- */}
      {/* Inhe thoda adjust kiya taki content par na chadhein */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden xl:block absolute left-[5%] top-[30%] z-[20]"
      >
        <div className="p-4 rounded-xl bg-[#0b0b15]/80 border border-slate-800 backdrop-blur-md font-mono text-xs shadow-2xl">
          <div className="flex gap-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>
          <p className="text-slate-500">// Building Future</p>
          <p>
            <span className="text-purple-400">console</span>.
            <span className="text-blue-400">log</span>('
            <span className="text-green-400">Hello World!</span>');
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden xl:block absolute right-[5%] top-[30%] z-[20]"
      >
        <div className="p-5 rounded-xl bg-[#0b0b15]/90 border border-purple-500/20 backdrop-blur-md shadow-2xl max-w-[250px]">
          <div className="font-mono text-sm leading-6">
            <span className="text-purple-400">const</span> <span className="text-white">dev</span> ={' '}
            <span className="text-white">{'{'}</span>
            <br />
            &nbsp;name: <span className="text-blue-400">'{data.personalInfo.name}'</span>,<br />
            &nbsp;skills: [<span className="text-green-400">'React'</span>,{' '}
            <span className="text-green-400">'Node'</span>],
            <br />
            <span className="text-white">{'}'}</span>;
          </div>
        </div>
      </motion.div>

      {/* --- MAIN CENTER CONTENT --- */}
      <div className="relative z-[20] flex flex-col items-center text-center px-4 w-full max-w-[900px]">
        {/* Welcome Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-2 px-4 border border-[#7042f88b] rounded-full bg-[#151226]/80 mb-4 flex items-center gap-2 shadow-[0_0_20px_rgba(112,66,248,0.3)]"
        >
          <Sparkles className="w-4 h-4 text-[#b49bff]" />
          <span className="text-gray-200 text-sm font-medium">Welcome to my digital universe</span>
        </motion.div>

        {/* Big Name (Spacing kam ki 'mb-2') */}
        <h1 className="flex flex-col items-center text-6xl md:text-8xl font-extrabold text-white mb-2 tracking-tight leading-tight">
          <span>Hi, I&apos;m</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500 pb-2">
            {data.personalInfo.name}
          </span>
        </h1>

        {/* Typing Text (Spacing kam ki 'mb-6') */}
        <div className="text-2xl md:text-4xl font-medium mb-6 h-[40px] flex items-center gap-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
            <TypeAnimation
              sequence={['Full Stack Developer', 1000, 'Innovation Creator', 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </div>

        {/* Description (Spacing kam ki 'mb-8') */}
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mb-8 leading-relaxed text-center">
          I&apos;m a passionate developer creating{' '}
          <span className="text-blue-400">innovative websites</span>. Specializing in{' '}
          <span className="text-purple-400">cutting-edge solutions</span>.
        </p>

        {/* --- BUTTONS --- */}
        <div className="flex flex-col sm:flex-row gap-5 w-full justify-center mb-10">
          <a
            href="#projects"
            className="relative px-8 py-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-bold text-lg shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-purple-500/30 bg-[#0b0b15]/50 text-white font-bold text-lg hover:bg-purple-900/20 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <Mail size={20} />
            Get In Touch
          </a>
        </div>

        {/* --- SOCIAL ICONS (Ab ye nahi chupenge) --- */}
        <div className="flex gap-5 items-center justify-center pb-10">
          {[
            { icon: Github, href: '#' },
            { icon: Linkedin, href: '#' },
            { icon: Mail, href: '#' },
            { icon: FileText, href: '#' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-purple-600 hover:scale-110 hover:shadow-[0_0_20px_#a855f7] transition-all duration-300"
            >
              <social.icon size={22} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="hidden md:flex absolute bottom-5 flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500">Scroll Down</span>
        <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400">
          <ArrowDown size={16} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
