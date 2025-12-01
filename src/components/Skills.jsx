'use client';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Award,
  Blocks,
  Box,
  Brain,
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  Layout,
  Server,
  Shield,
  Smartphone,
  Star,
  Terminal,
  Workflow,
  Zap,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

// --- REUSABLE SKILL CARD COMPONENT ---
const SkillCard = ({ skill }) => {
  return (
    <div className="w-[280px] md:w-[350px] h-full p-5 md:p-6 rounded-[20px] md:rounded-[24px] bg-[#0f0c29] border border-white/5 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-300 flex flex-col snap-center">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-purple-900/20 rounded-full blur-[60px] -mr-8 -mt-8 pointer-events-none" />

      {/* Top Section */}
      <div className="flex items-start gap-4 md:gap-5 mb-4 md:mb-6 relative z-10">
        <div
          className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shrink-0 ${skill.bgIcon} ${skill.iconColor}`}
        >
          <skill.icon size={24} className="md:w-8 md:h-8" />
        </div>

        <div className="flex-1 min-w-0 pt-1">
          <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 truncate">{skill.name}</h3>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`px-2 py-0.5 rounded text-[9px] md:text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${skill.badgeBg} ${skill.badgeText}`}
            >
              <Star size={8} fill="currentColor" /> {skill.level}
            </span>
            <span className="text-[10px] md:text-xs text-gray-500 font-mono whitespace-nowrap">
              {skill.exp}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 h-[40px] md:h-[60px] overflow-hidden relative z-10 line-clamp-2 md:line-clamp-3">
        {skill.desc}
      </p>

      {/* Tags Footer */}
      <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto relative z-10">
        {skill.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2.5 py-1 text-[10px] md:text-xs font-medium text-gray-300 bg-[#1a1a2e] border border-white/5 rounded-md group-hover:border-purple-500/20 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const tabContainerRef = useRef(null);
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [activeTab]);

  const scrollTabs = (direction) => {
    if (tabContainerRef.current) {
      const scrollAmount = 200;
      tabContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 360; // Approximate card width + gap
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const categories = [
    { id: 'frontend', label: 'Frontend', fullLabel: 'Frontend Development', icon: Layout },
    { id: 'backend', label: 'Backend', fullLabel: 'Backend Development', icon: Server },
    { id: 'tools', label: 'Tools', fullLabel: 'Design & Tools', icon: Terminal },
    { id: 'other', label: 'Mobile', fullLabel: 'Mobile & Other', icon: Smartphone },
  ];

  const skillsData = {
    frontend: [
      {
        name: 'React.js',
        level: 'Expert',
        exp: '2+ Years',
        desc: 'Building modern, scalable web apps.',
        tags: ['Hooks', 'Context'],
        icon: Globe,
        bgIcon: 'bg-[#2dd4bf]/10',
        iconColor: 'text-[#2dd4bf]',
        badgeBg: 'bg-[#2dd4bf]/10',
        badgeText: 'text-[#2dd4bf]',
      },
      {
        name: 'JavaScript',
        level: 'Expert',
        exp: '3 Years',
        desc: 'Core JS concepts & async programming.',
        tags: ['ES6+', 'Async/Await'],
        icon: Code2,
        bgIcon: 'bg-[#fbbf24]/10',
        iconColor: 'text-[#fbbf24]',
        badgeBg: 'bg-[#fbbf24]/10',
        badgeText: 'text-[#fbbf24]',
      },
      {
        name: 'Tailwind',
        level: 'Expert',
        exp: '2 Years',
        desc: 'Utility-first CSS framework.',
        tags: ['Responsive', 'Dark Mode'],
        icon: Layers,
        bgIcon: 'bg-[#3b82f6]/10',
        iconColor: 'text-[#3b82f6]',
        badgeBg: 'bg-[#3b82f6]/10',
        badgeText: 'text-[#3b82f6]',
      },
      {
        name: 'Next.js',
        level: 'Advanced',
        exp: '1.5 Years',
        desc: 'React framework for production.',
        tags: ['SSR', 'SSG'],
        icon: Cpu,
        bgIcon: 'bg-white/10',
        iconColor: 'text-white',
        badgeBg: 'bg-white/10',
        badgeText: 'text-white',
      },
    ],
    backend: [
      {
        name: 'Node.js',
        level: 'Advanced',
        exp: '1.5 Years',
        desc: 'Scalable network applications.',
        tags: ['REST API', 'Streams'],
        icon: Server,
        bgIcon: 'bg-[#22c55e]/10',
        iconColor: 'text-[#22c55e]',
        badgeBg: 'bg-[#22c55e]/10',
        badgeText: 'text-[#22c55e]',
      },
      {
        name: 'MongoDB',
        level: 'Inter',
        exp: '1 Year',
        desc: 'NoSQL database design.',
        tags: ['Schema', 'Atlas'],
        icon: Database,
        bgIcon: 'bg-[#4ade80]/10',
        iconColor: 'text-[#4ade80]',
        badgeBg: 'bg-[#4ade80]/10',
        badgeText: 'text-[#4ade80]',
      },
      {
        name: 'Express',
        level: 'Advanced',
        exp: '1.5 Years',
        desc: 'Web framework for Node.js.',
        tags: ['Middleware', 'API'],
        icon: Server,
        bgIcon: 'bg-[#94a3b8]/10',
        iconColor: 'text-[#94a3b8]',
        badgeBg: 'bg-[#94a3b8]/10',
        badgeText: 'text-[#94a3b8]',
      },
    ],
    tools: [
      {
        name: 'Git',
        level: 'Expert',
        exp: '2 Years',
        desc: 'Version control system.',
        tags: ['Branching', 'PRs'],
        icon: GitBranch,
        bgIcon: 'bg-[#f97316]/10',
        iconColor: 'text-[#f97316]',
        badgeBg: 'bg-[#f97316]/10',
        badgeText: 'text-[#f97316]',
      },
      {
        name: 'Figma',
        level: 'Inter',
        exp: '1 Year',
        desc: 'UI/UX design tool.',
        tags: ['Prototyping'],
        icon: Box,
        bgIcon: 'bg-[#ec4899]/10',
        iconColor: 'text-[#ec4899]',
        badgeBg: 'bg-[#ec4899]/10',
        badgeText: 'text-[#ec4899]',
      },
    ],
    other: [
      {
        name: 'React Native',
        level: 'Inter',
        exp: '1 Year',
        desc: 'Cross-platform mobile apps.',
        tags: ['iOS', 'Android'],
        icon: Smartphone,
        bgIcon: 'bg-[#60a5fa]/10',
        iconColor: 'text-[#60a5fa]',
        badgeBg: 'bg-[#60a5fa]/10',
        badgeText: 'text-[#60a5fa]',
      },
    ],
  };

  const achievementsData = {
    frontend: [
      { text: 'Led front-end for MissionT5 platform', highlight: 'MissionT5' },
      { text: 'Built ParkNest & IMDb Clone UIs', highlight: 'ParkNest' },
      { text: 'Improved UI responsiveness by 25%', highlight: '25%' },
      { text: '99% cross-browser compatibility', highlight: '99%' },
    ],
    backend: [
      { text: 'Designed APIs handling 10k+ req/day', highlight: '10k+' },
      { text: 'Reduced MongoDB query time by 40%', highlight: '40%' },
      { text: 'Secure JWT auth implementation', highlight: 'JWT' },
      { text: 'Microservices with Docker', highlight: 'Docker' },
    ],
    tools: [
      { text: 'CI/CD pipelines reducing deployment by 50%', highlight: '50%' },
      { text: 'Figma prototypes for 5+ projects', highlight: 'Figma' },
      { text: 'Git workflow for 10+ devs', highlight: 'Git' },
      { text: 'Automated API tests', highlight: 'API' },
    ],
    other: [
      { text: '500+ downloads on Play Store', highlight: '500+' },
      { text: 'Native features integration', highlight: 'Native' },
      { text: '30% bundle size reduction', highlight: '30%' },
      { text: '60fps smooth animations', highlight: '60fps' },
    ],
  };

  const exploring = [
    {
      name: 'ML / AI',
      icon: Brain,
      color: 'text-pink-500',
      badge: 'Learning',
      badgeColor: 'bg-pink-500/10 text-pink-500 border-pink-500/20',
    },
    {
      name: 'Web 3.0',
      icon: Blocks,
      color: 'text-purple-500',
      badge: 'Exploring',
      badgeColor: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    },
    {
      name: 'CyberSec',
      icon: Shield,
      color: 'text-yellow-400',
      badge: 'Exploring',
      badgeColor: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    },
    {
      name: 'DevOps',
      icon: Workflow,
      color: 'text-blue-500',
      badge: 'Learning',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden z-[20]"
    >
      {/* Background Glows */}
      <div className="absolute top-[20%] left-[10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-purple-900/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-blue-900/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      {/* --- HEADING --- */}
      <div className="relative z-10 flex flex-col items-center mb-10 md:mb-16 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-4 md:mb-6"
        >
          <Terminal size={12} className="text-purple-400" />
          <span className="text-[10px] md:text-xs font-semibold text-purple-300 tracking-wider">
            TECHNICAL ARSENAL
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-bold text-white mb-4"
        >
          Skills &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
            Expertise
          </span>
        </motion.h2>
      </div>

      {/* --- 1. SMART TABS (Compact on Mobile) --- */}
      <div className="relative z-10 w-full max-w-6xl px-4 mb-10 md:mb-16">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => scrollTabs('left')}
            className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-[#151226] border border-white/5 text-gray-400 hover:text-white transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={tabContainerRef}
            className="flex gap-2 md:gap-4 overflow-x-auto scrollbar-hide py-2 px-1 scroll-smooth w-full md:w-auto mask-linear-fade"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative flex items-center gap-2 px-5 py-2.5 md:px-8 md:py-4 rounded-full transition-all duration-300 whitespace-nowrap overflow-hidden flex-shrink-0 ${
                  activeTab === cat.id
                    ? 'text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] ring-1 ring-purple-500/50'
                    : 'bg-[#0f0c29] text-gray-400 border border-white/5 hover:text-white'
                }`}
              >
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#d946ef]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2 text-sm md:text-lg font-medium">
                  <cat.icon size={16} className="md:w-5 md:h-5" />
                  {/* Mobile pe short label, desktop pe full */}
                  <span className="md:hidden">{cat.label}</span>
                  <span className="hidden md:inline">{cat.fullLabel}</span>
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTabs('right')}
            className="hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-[#151226] border border-white/5 text-gray-400 hover:text-white transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* --- 2. CAROUSEL WITH SIDE BUTTONS --- */}
      <div className="relative z-10 w-full max-w-7xl px-0 md:px-12 mb-16 md:mb-24 group">
        {/* Left Button (Absolute Side) */}
        <button
          onClick={() => scrollCarousel('left')}
          className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#151226]/80 backdrop-blur-md border border-white/10 text-white hover:bg-purple-600 hover:border-purple-500 shadow-xl transition-all hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Container */}
        <div
          ref={carouselRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide py-4 px-4 md:px-4 scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <AnimatePresence mode="wait">
            {skillsData[activeTab]?.map((skill, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex-shrink-0"
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Button (Absolute Side) */}
        <button
          onClick={() => scrollCarousel('right')}
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#151226]/80 backdrop-blur-md border border-white/10 text-white hover:bg-purple-600 hover:border-purple-500 shadow-xl transition-all hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* --- 3. DYNAMIC KEY ACHIEVEMENTS (Smart Stack on Mobile) --- */}
      <div className="relative z-10 w-full max-w-5xl px-4 mb-16 md:mb-24">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
            <Award size={20} className="md:w-6 md:h-6" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            Key Achievements
            <span className="text-gray-500 text-xs md:text-sm font-normal ml-2 md:ml-3">
              ({categories.find((c) => c.id === activeTab)?.label})
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <AnimatePresence mode="wait">
            {achievementsData[activeTab]?.map((item, index) => (
              <motion.div
                key={`${activeTab}-achievement-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-[#0e0e1a] border border-white/5 hover:border-blue-500/30 hover:bg-[#13132b] transition-all group"
              >
                <div className="flex gap-3 md:gap-4">
                  <div className="mt-0.5">
                    <Star
                      size={16}
                      className="md:w-5 md:h-5 text-blue-400 group-hover:text-yellow-400 transition-colors"
                    />
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xs md:text-sm">
                    {item.text.split(item.highlight).map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="text-white font-semibold">{item.highlight}</span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* --- 4. CURRENTLY EXPLORING (Clean Grid) --- */}
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-8 md:mb-10 flex items-center gap-2 md:gap-3">
          <span className="p-1.5 md:p-2 rounded-lg bg-purple-500/20 text-purple-400">
            <Zap size={18} className="md:w-5 md:h-5" />
          </span>
          Currently Exploring
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full">
          {exploring.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-[1px] rounded-xl bg-gradient-to-br from-white/5 to-transparent hover:from-purple-500/50 hover:to-blue-500/50 transition-all duration-300 group"
            >
              <div className="h-full p-3 md:p-4 rounded-[11px] bg-[#0e0e1a] flex items-center gap-3 relative overflow-hidden">
                <div
                  className={`p-2 md:p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors ${item.color}`}
                >
                  <item.icon size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm md:text-base font-bold text-white block mb-0.5 truncate">
                    {item.name}
                  </span>
                  <span
                    className={`text-[9px] md:text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded border inline-block ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
