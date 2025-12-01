'use client';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Briefcase,
  Building2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Linkedin,
  Mail,
  Rocket,
  Sparkles,
  Star,
  Trophy,
  Users,
  Zap,
} from 'lucide-react';
import { useRef, useState } from 'react';

// --- 1. REUSABLE EXPERIENCE CARD ---
// Added 'group/card' to isolate hover effects
const ExperienceCard = ({ exp }) => (
  <div className="w-[320px] md:w-[450px] h-full p-6 md:p-8 rounded-[30px] bg-[#0f0c29] border border-white/5 relative overflow-hidden group/card hover:border-blue-500/30 transition-all duration-300 flex flex-col snap-center shrink-0">
    {/* Background Gradient Blob */}
    <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-blue-900/20 rounded-full blur-[80px] -mr-10 -mt-10 pointer-events-none group-hover/card:bg-blue-600/20 transition-colors duration-500" />

    {/* Header Section */}
    <div className="flex items-start gap-5 mb-6 relative z-10">
      <div
        className={`p-4 rounded-2xl bg-[#1a1a2e] border border-white/5 ${exp.logoColor} group-hover/card:scale-110 group-hover/card:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300`}
      >
        <Building2 size={32} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 truncate group-hover/card:text-blue-400 transition-colors">
          {exp.role}
        </h3>
        <p className="text-sm font-medium text-gray-400">{exp.company}</p>
      </div>
    </div>

    {/* Status & Date Pills */}
    <div className="flex flex-wrap items-center gap-3 mb-6 relative z-10">
      <span className="px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider bg-green-500/10 text-green-400 border border-green-500/20 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        {exp.status}
      </span>
      <span className="px-3 py-1 rounded-full text-[10px] md:text-xs font-mono text-gray-400 border border-white/10 flex items-center gap-1.5 bg-[#1a1a2e]">
        <Calendar size={12} /> {exp.date}
      </span>
    </div>

    {/* Description */}
    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover/card:line-clamp-none transition-all duration-300 relative z-10 border-l-2 border-white/5 pl-4 group-hover/card:border-blue-500">
      {exp.desc}
    </p>

    {/* Tech Stack Footer */}
    <div className="flex flex-wrap gap-2 mt-auto relative z-10">
      {exp.skills.map((skill, i) => (
        <span
          key={i}
          className="px-3 py-1 text-[10px] font-semibold text-blue-200 bg-blue-900/10 border border-blue-500/10 rounded-lg group-hover/card:border-blue-500/30 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

// --- 2. REUSABLE STATS CARD ---
const StatCard = ({ stat }) => (
  <div className="w-[280px] md:w-[300px] h-full p-6 rounded-[24px] bg-[#0e0e1a] border border-white/5 hover:border-purple-500/30 transition-all group/card flex flex-col items-center text-center relative overflow-hidden snap-center shrink-0">
    {/* Hover Glow */}
    <div
      className={`absolute inset-0 bg-gradient-to-b ${stat.gradient} opacity-0 group-hover/card:opacity-10 transition-opacity duration-500`}
    />

    <div
      className={`p-5 rounded-2xl bg-[#151525] mb-5 group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-300 shadow-lg ${stat.color}`}
    >
      <stat.icon size={36} />
    </div>
    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight group-hover/card:scale-105 transition-transform">
      {stat.value}
    </h3>
    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
    <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed">{stat.desc}</p>
  </div>
);

// --- 3. REUSABLE ACHIEVEMENT CARD ---
const AchievementCard = ({ achieve }) => (
  <div className="w-[300px] md:w-[380px] h-full p-6 rounded-[24px] bg-[#0f0c29] border border-white/5 hover:border-yellow-500/30 transition-all group/card relative overflow-hidden snap-center flex flex-col shrink-0">
    {/* Left Accent Line */}
    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-yellow-500 to-orange-600 opacity-50 group-hover/card:opacity-100 transition-opacity" />

    <div className="flex items-start gap-4 mb-4">
      <div className="mt-1 p-2.5 rounded-xl bg-yellow-500/10 text-yellow-400 shrink-0 group-hover/card:bg-yellow-500/20 transition-colors">
        <Trophy size={24} />
      </div>
      <div>
        <h4 className="text-lg font-bold text-white leading-tight group-hover/card:text-yellow-200 transition-colors">
          {achieve.title}
        </h4>
        <div className="mt-2 flex items-center gap-2 text-xs font-mono text-yellow-500/80 bg-yellow-500/5 px-2 py-1 rounded w-fit">
          <Star size={10} fill="currentColor" />
          <span>{achieve.highlight}</span>
        </div>
      </div>
    </div>

    <p className="text-sm text-gray-400 leading-relaxed mt-2 border-t border-white/5 pt-4">
      {achieve.desc}
    </p>
  </div>
);

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const carouselRef = useRef(null);

  // Scroll Handler
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // --- DATA ---
  const experienceData = [
    {
      id: 1,
      role: 'Team Lead Full Stack Dev',
      company: 'MissionT5',
      location: 'Remote',
      date: 'Feb 2025 - Present',
      status: 'Current',
      desc: 'Leading a team of 5 developers to build a scalable internship platform. Architected the entire backend using Microservices pattern.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      logoColor: 'text-blue-400',
    },
    {
      id: 2,
      role: 'Frontend Developer Intern',
      company: 'InnovativeArc Solutions',
      location: 'Remote',
      date: 'Aug 2024 - Jan 2025',
      status: 'Completed',
      desc: 'Optimized React components reducing load time by 40%. Implemented responsive dashboard designs from Figma.',
      skills: ['React', 'Tailwind', 'Redux', 'Figma'],
      logoColor: 'text-purple-400',
    },
    {
      id: 3,
      role: 'Web Development Intern',
      company: 'TechStart',
      location: 'Indore',
      date: 'Jan 2024 - Jun 2024',
      status: 'Completed',
      desc: 'Built landing pages and integrated payment gateways. Learned agile methodologies and version control.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Git'],
      logoColor: 'text-green-400',
    },
  ];

  const statsData = [
    {
      label: 'Experience',
      value: '2+',
      desc: 'Years of Professional Dev',
      icon: Calendar,
      color: 'text-blue-400',
      gradient: 'from-blue-500/20 to-transparent',
    },
    {
      label: 'Team Lead',
      value: '5mo',
      desc: 'Leading High-Impact Teams',
      icon: Users,
      color: 'text-purple-400',
      gradient: 'from-purple-500/20 to-transparent',
    },
    {
      label: 'Projects',
      value: '3',
      desc: 'Enterprise Level Apps',
      icon: Trophy,
      color: 'text-yellow-400',
      gradient: 'from-yellow-500/20 to-transparent',
    },
    {
      label: 'Efficiency',
      value: '30%',
      desc: 'Query Time Reduction',
      icon: Zap,
      color: 'text-green-400',
      gradient: 'from-green-500/20 to-transparent',
    },
    {
      label: 'Uptime',
      value: '100%',
      desc: 'Project Reliability',
      icon: Clock,
      color: 'text-pink-400',
      gradient: 'from-pink-500/20 to-transparent',
    },
  ];

  const achievementsData = [
    {
      title: 'Best Intern Award',
      desc: 'Recognized for outstanding performance and leadership during the internship program.',
      highlight: 'MissionT5',
    },
    {
      title: 'Hackathon Winner',
      desc: 'Secured 1st place in the National Level Hackathon for building an AI-based health app.',
      highlight: 'SmartIndia Hackathon',
    },
    {
      title: 'Open Source Contributor',
      desc: 'Contributed 5+ PRs to major React libraries improving accessibility.',
      highlight: 'GitHub',
    },
    {
      title: '5 Star Coder',
      desc: 'Achieved 5-star rating in Problem Solving on HackerRank.',
      highlight: 'HackerRank',
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full py-20 md:py-32 flex flex-col items-center justify-center overflow-hidden z-[20]"
    >
      {/* Background Glows */}
      <div className="absolute top-[20%] left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* --- SECTION HEADING & ANIMATED LABEL --- */}
      <div className="relative z-10 flex flex-col items-center mb-10 md:mb-16 text-center px-4 mt-8 md:mt-16">
        {/* NEW: Professional Journey Label with Blinking Stars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#030014]/80 border border-white/10 mb-8 shadow-lg shadow-purple-900/20 backdrop-blur-md"
        >
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles size={16} className="text-white" />
          </motion.div>

          <span className="text-base md:text-lg font-medium text-white tracking-wide">
            Professional Journey
          </span>

          <motion.div
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <Sparkles size={16} className="text-white" />
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Experience &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Growth
          </span>
        </motion.h2>
        <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed">
          Crafting innovative solutions through{' '}
          <span className="text-white font-medium">continuous learning</span> and collaborative
          excellence.
        </p>
      </div>

      {/* --- TABS NAVIGATION --- */}
      <div className="relative z-10 flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16 px-4">
        {[
          { id: 'experience', label: 'Experience', icon: Briefcase },
          { id: 'achievements', label: 'Achievements', icon: Trophy },
          { id: 'stats', label: 'Stats', icon: Zap },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-5 py-2.5 md:px-8 md:py-3.5 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 border flex items-center gap-2 group ${
              activeTab === tab.id
                ? 'bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.4)] scale-105'
                : 'bg-[#0f0c29]/50 text-gray-400 border-white/10 hover:text-white hover:border-white/30 hover:bg-[#1a1a2e]'
            }`}
          >
            <tab.icon
              size={16}
              className={
                activeTab === tab.id ? 'text-blue-600' : 'group-hover:text-white transition-colors'
              }
            />
            {tab.label}
          </button>
        ))}
      </div>

      {/* --- CAROUSEL CONTENT --- */}
      <div className="relative z-10 w-full max-w-[1400px] px-0 md:px-12 mb-20 md:mb-24 group/carousel">
        {/* Navigation Buttons (Desktop Only - Smartly Positioned) */}
        <button
          onClick={() => scrollCarousel('left')}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#151226]/80 backdrop-blur-md border border-white/10 text-white hover:bg-blue-600 hover:border-blue-500 shadow-xl transition-all items-center justify-center opacity-0 group-hover/carousel:opacity-100 -translate-x-2 group-hover/carousel:translate-x-0"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scrollCarousel('right')}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#151226]/80 backdrop-blur-md border border-white/10 text-white hover:bg-blue-600 hover:border-blue-500 shadow-xl transition-all items-center justify-center opacity-0 group-hover/carousel:opacity-100 translate-x-2 group-hover/carousel:translate-x-0"
        >
          <ChevronRight size={24} />
        </button>

        {/* Scrollable Container (With Smart Padding for Hover Effect) */}
        <div
          ref={carouselRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide py-4 px-4 md:px-4 scroll-smooth cursor-grab active:cursor-grabbing snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <AnimatePresence mode="wait">
            {activeTab === 'experience' &&
              experienceData.map((item, index) => (
                <motion.div
                  key={`exp-${item.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="flex-shrink-0 h-full snap-center"
                >
                  <ExperienceCard exp={item} />
                </motion.div>
              ))}

            {activeTab === 'stats' &&
              statsData.map((item, index) => (
                <motion.div
                  key={`stat-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="flex-shrink-0 snap-center"
                >
                  <StatCard stat={item} />
                </motion.div>
              ))}

            {activeTab === 'achievements' &&
              achievementsData.map((item, index) => (
                <motion.div
                  key={`achieve-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="flex-shrink-0 snap-center"
                >
                  <AchievementCard achieve={item} />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>

      {/* --- COMMON CTA FOOTER --- */}
      <div className="relative z-10 w-full max-w-5xl px-4">
        <div className="p-8 md:p-12 rounded-[30px] md:rounded-[40px] bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/5 text-center relative overflow-hidden backdrop-blur-sm group">
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Rocket Icon Background */}
          <Rocket
            className="absolute -right-10 -bottom-10 text-white/5 rotate-45 group-hover:scale-110 group-hover:rotate-[50deg] transition-all duration-700"
            size={200}
          />

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-flex p-3 md:p-4 rounded-2xl bg-white/5 mb-6 md:mb-8 border border-white/5 shadow-2xl">
              <Rocket
                size={32}
                className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              />
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-white mb-4 md:mb-6">
              Let's Build Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Amazing
              </span>
            </h3>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
              Ready to take on exciting challenges? Whether it's a complex web app or an innovative
              AI solution, let's turn your ideas into reality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 flex items-center gap-2 w-full sm:w-auto justify-center group text-sm md:text-base">
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />{' '}
                Connect on LinkedIn
              </button>
              <button className="px-6 py-3 md:px-8 md:py-4 rounded-xl bg-[#1a1a2e] hover:bg-[#252540] text-white border border-white/10 font-bold transition-all hover:border-white/30 flex items-center gap-2 w-full sm:w-auto justify-center group text-sm md:text-base">
                <Mail size={18} className="group-hover:scale-110 transition-transform" /> Send an
                Email
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
