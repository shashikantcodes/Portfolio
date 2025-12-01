'use client';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Code2,
  Layers,
  Calendar,
  CheckCircle2,
  Clock,
  User,
  Globe,
  Zap,
  Database,
} from 'lucide-react';
import { motion } from 'framer-motion';
// JSON Data Import (Path ko adjust karein agar zaroorat ho)
import data from '../../../data/portfolio.json';

const ProjectDetail = () => {
  const params = useParams();
  const router = useRouter();

  // URL se ID nikal kar number me convert karein
  const id = params?.id ? parseInt(params.id) : null;

  // JSON me se wo project dhundhein
  const project = data.projects.find((p) => p.id === id);

  // Agar project na mile (Invalid ID)
  if (!project)
    return (
      <div className="min-h-screen bg-[#030014] text-white flex items-center justify-center">
        <div className="text-center p-8 rounded-2xl border border-white/10 bg-[#0f0c29]">
          <h2 className="text-2xl font-bold mb-4">Project Not Found 🚫</h2>
          <p className="text-gray-400 mb-6">The project you are looking for doesn't exist.</p>
          <button
            onClick={() => router.back()}
            className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all"
          >
            Go Back
          </button>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen w-full bg-[#030014] text-white pt-24 pb-20 px-4 md:px-20 overflow-x-hidden">
      {/* --- BACK BUTTON --- */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group px-4 py-2 rounded-full border border-white/5 hover:bg-white/5 w-fit"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to
        Projects
      </motion.button>

      {/* --- HERO IMAGE SECTION --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full h-[350px] md:h-[550px] rounded-[40px] overflow-hidden mb-16 border border-white/10 shadow-2xl group"
      >
        {/* Background Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/70 to-transparent" />

        {/* Title & Badges */}
        <div className="absolute bottom-8 left-6 md:bottom-16 md:left-16 max-w-4xl z-10">
          <div className="flex flex-wrap gap-3 mb-6">
            {/* Category Badge */}
            <span className="px-4 py-1.5 rounded-full bg-blue-600/20 backdrop-blur-md text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30 flex items-center gap-2 shadow-lg">
              {project.type === 'company' ? <Globe size={12} /> : <Zap size={12} />}
              {project.category}
            </span>

            {/* Status Badge */}
            <span
              className={`px-4 py-1.5 rounded-full backdrop-blur-md text-xs font-bold uppercase tracking-wider border flex items-center gap-2 shadow-lg ${
                project.status === 'Completed'
                  ? 'bg-green-500/20 text-green-400 border-green-500/30'
                  : 'bg-orange-500/20 text-orange-400 border-orange-500/30'
              }`}
            >
              {project.status === 'Completed' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl md:text-6xl font-black text-white mb-4 leading-tight drop-shadow-lg">
            {project.title}
          </h1>

          <p className="text-gray-300 text-sm md:text-lg flex items-center gap-2 font-mono bg-black/40 w-fit px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
            <Calendar size={16} className="text-purple-400" /> {project.date}
          </p>
        </div>
      </motion.div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* LEFT COLUMN: Description & Features */}
        <div className="lg:col-span-2 space-y-12">
          {/* Project Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#0f0c29]/50 p-8 rounded-3xl border border-white/5"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
              <Layers className="text-purple-400" /> Project Overview
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg text-justify">
              {project.fullDesc || project.desc}
            </p>
          </motion.div>

          {/* Key Features */}
          {project.features && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-4 px-2">
                <Zap className="text-yellow-400" /> Key Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all group cursor-default"
                  >
                    <div className="mt-1 p-1 rounded-full bg-green-500/20 text-green-400 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-gray-300 text-sm font-medium leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 border-b border-white/10 pb-4 px-2">
              <Code2 className="text-blue-400" /> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 rounded-xl bg-[#1a1a2e] border border-white/10 text-gray-300 font-mono text-sm hover:border-purple-500/50 hover:text-white hover:bg-purple-900/10 transition-all cursor-default hover:-translate-y-1 transform duration-300 shadow-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Sidebar Info */}
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="p-8 rounded-[30px] bg-[#0f0c29] border border-white/10 sticky top-24 shadow-2xl relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-purple-900/20 rounded-full blur-[80px] -mr-10 -mt-10 pointer-events-none" />

            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
              <Database size={20} className="text-pink-400" /> Project Info
            </h4>

            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-center group border-b border-white/5 pb-4">
                <span className="text-gray-400 flex items-center gap-3 group-hover:text-purple-400 transition-colors text-sm">
                  <User size={16} /> Role
                </span>
                <span className="font-semibold text-white text-sm">
                  {project.role || 'Developer'}
                </span>
              </div>
              <div className="flex justify-between items-center group border-b border-white/5 pb-4">
                <span className="text-gray-400 flex items-center gap-3 group-hover:text-purple-400 transition-colors text-sm">
                  <Globe size={16} /> Client
                </span>
                <span className="font-semibold text-white text-sm">{project.client || 'Self'}</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 relative z-10">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] group"
                >
                  <ExternalLink size={20} className="group-hover:rotate-45 transition-transform" />{' '}
                  View Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="w-full py-4 rounded-xl bg-[#1a1a2e] hover:bg-[#252540] border border-white/10 text-white font-bold flex items-center justify-center gap-2 transition-all hover:border-white/30 hover:scale-[1.02] active:scale-[0.98] group"
                >
                  <Github size={20} className="group-hover:rotate-12 transition-transform" /> Source
                  Code
                </a>
              )}

              {!project.github && !project.demo && (
                <div className="text-center text-gray-500 text-sm italic py-2">
                  Private Project / Links not available
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
