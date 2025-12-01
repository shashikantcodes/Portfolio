'use client';
import data from '@/data/portfolio.json';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';

import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
  Github,
  Layers,
  Lock,
  Zap,
} from 'lucide-react';

/* --------------------------------------------------
   Project Card (Premium Animated Card)
-------------------------------------------------- */
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="w-[320px] md:w-[400px] h-[500px] flex-shrink-0 relative rounded-[26px] 
      overflow-hidden group bg-[#0c0920] border border-white/10 
      shadow-lg hover:shadow-purple-600/25 transition-all"
    >
      {/* IMAGE */}
      <div className="h-[50%] relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 
          transition-transform duration-[1200ms] ease-out"
        />

        {/* Soft Overlay – theme matched */}
        <div
          className="absolute inset-0 bg-gradient-to-t 
        from-[#0c0920]/80 via-[#0c0920]/20 to-transparent"
        />

        {/* Category */}
        <span
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px]
          bg-black/30 text-white border border-white/10 backdrop-blur-md 
          flex items-center gap-1.5 shadow-sm"
        >
          {project.type === 'company' ? <Lock size={10} /> : <Zap size={10} />}
          {project.category}
        </span>

        {/* Status */}
        <span
          className={`
          absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] uppercase flex items-center gap-1.5 
          backdrop-blur-md border shadow-sm
          ${
            project.status === 'Completed'
              ? 'bg-green-800/40 text-green-300 border-green-500/20'
              : 'bg-orange-800/40 text-orange-300 border-orange-500/20'
          }
        `}
        >
          {project.status === 'Completed' ? <CheckCircle2 size={10} /> : <Clock size={10} />}
          {project.status}
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-6 flex flex-col -mt-6 z-20">
        {/* Date */}
        <div
          className="flex items-center gap-2 text-xs text-gray-400 mb-3 font-mono
        bg-black/20 px-3 py-1 rounded-md w-fit border border-white/5"
        >
          <Calendar size={12} className="text-purple-400" />
          {project.date}
        </div>

        {/* Title */}
        <h3
          className="text-xl md:text-2xl font-semibold text-white mb-2 
        group-hover:bg-gradient-to-r group-hover:from-purple-400 
        group-hover:to-blue-400 group-hover:text-transparent bg-clip-text transition-all"
        >
          {project.title}
        </h3>

        {/* Short Description */}
        <p
          className="text-gray-400 text-sm line-clamp-3 border-l-2 border-white/5 pl-3 mb-5
        group-hover:border-purple-500 transition-colors"
        >
          {project.desc}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 
              text-gray-300 text-[10px]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 mt-auto">
          <a
            href={`/project/${project.id}`}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r
            from-purple-600 to-blue-600 text-white text-sm font-semibold 
            flex items-center justify-center gap-2 hover:scale-[1.03]
            transition shadow-md"
          >
            View Details <ArrowRight size={14} />
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="p-3 bg-[#1a1a2e] rounded-xl text-gray-300 border border-white/10 
              hover:text-white hover:bg-[#272746] transition shadow-md"
            >
              <Github size={18} />
            </a>
          )}

          <a
            href={project.demo}
            target="_blank"
            className="p-3 bg-[#1a1a2e] rounded-xl text-gray-300 border border-white/10
            hover:text-white hover:bg-[#272746] transition shadow-md"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

/* --------------------------------------------------
   MAIN SECTION
-------------------------------------------------- */
const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const carouselRef = useRef(null);

  const projects = data.projects;
  const filtered = activeTab === 'all' ? projects : projects.filter((p) => p.type === activeTab);

  const scroll = (dir) => {
    carouselRef.current?.scrollBy({
      left: dir === 'left' ? -420 : 420,
      behavior: 'smooth',
    });
  };

  return (
    <section id="projects" className="relative w-full py-20 md:py-28 overflow-hidden">
      {/* ⭐ TOP LABEL (Blinks) */}
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-center mb-6"
      >
        <div
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#030014]/60 
        border border-white/10 text-white text-sm md:text-base shadow-md backdrop-blur-xl"
        >
          <Zap size={14} /> My latest creations <Zap size={14} />
        </div>
      </motion.div>

      {/* ⭐ TITLE */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-2">
        Featured{' '}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          Projects
        </span>
      </h2>

      <p className="text-gray-400 text-center text-sm md:text-base mb-10">
        Crafted with modern tools, smooth animations and world-class design.
      </p>

      {/* ⭐ TABS — Premium Experience Style */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {[
          { id: 'all', label: 'All Projects', icon: Layers },
          { id: 'personal', label: 'Personal', icon: Zap },
          { id: 'company', label: 'Company', icon: Lock },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2.5 md:px-7 md:py-3 rounded-full flex items-center gap-2 text-sm md:text-base font-semibold 
              transition-all border backdrop-blur-xl shadow-md
              ${
                activeTab === tab.id
                  ? 'bg-white text-black border-white shadow-lg scale-105'
                  : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10'
              }
            `}
          >
            <tab.icon size={16} /> {tab.label}
          </button>
        ))}
      </div>

      {/* ⭐ Carousel */}
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Left Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center 
          w-12 h-12 rounded-full bg-[#151226]/70 text-white border border-white/10 hover:bg-purple-600 
          transition shadow-xl z-30"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center 
          w-12 h-12 rounded-full bg-[#151226]/70 text-white border border-white/10 hover:bg-purple-600 
          transition shadow-xl z-30"
        >
          <ChevronRight size={22} />
        </button>

        {/* Cards */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto py-6 snap-x snap-mandatory scrollbar-hide 
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <AnimatePresence>
            {filtered.map((p, index) => (
              <ProjectCard key={p.id} project={p} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ⭐ Explore All Projects Button */}
      <div className="flex justify-center mt-12">
        <a
          href="/#projects"
          className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/10 
          bg-white/5 hover:bg-white/10 backdrop-blur-xl shadow-lg transition-all text-white"
        >
          <Github size={20} />
          <span className="font-medium">Explore All Projects</span>
          <ExternalLink size={18} />
        </a>
      </div>
    </section>
  );
};

export default Projects;
