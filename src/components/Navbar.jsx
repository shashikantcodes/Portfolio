'use client';

import { Briefcase, Code, Home, Layers, Mail, User } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AnimatedStar from './AnimatedStar';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  // ScrollSpy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= -300 && rect.top <= 300) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', icon: <Home size={18} />, href: '#home' },
    { name: 'About', id: 'about', icon: <User size={18} />, href: '#about' },
    { name: 'Skills', id: 'skills', icon: <Code size={18} />, href: '#skills' },
    { name: 'Experience', id: 'experience', icon: <Layers size={18} />, href: '#experience' },
    { name: 'Projects', id: 'projects', icon: <Briefcase size={18} />, href: '#projects' },
    { name: 'Contact', id: 'contact', icon: <Mail size={18} />, href: '#contact' },
  ];

  return (
    <>
      {/* Desktop Left Branding */}
      <div className="fixed top-8 left-10 z-50 hidden md:flex items-center">
        <AnimatedStar />
      </div>

      {/* Desktop Navbar Center */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex">
        <div
          className="flex items-center gap-1 px-2 py-2 bg-[#030014]/80 backdrop-blur-xl 
                        border border-white/10 rounded-full shadow-2xl"
        >
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.id;

            return (
              <Link
                key={i}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm font-medium
                  ${
                    isActive
                      ? 'bg-[#ffffff1a] border border-white/10 text-white shadow-inner'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {isActive && <span className="text-purple-400">{link.icon}</span>}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[400px] md:hidden">
        <div
          className="flex justify-between items-center px-6 py-3 bg-[#050314]/80 backdrop-blur-xl 
                        border border-white/10 rounded-2xl shadow-2xl shadow-purple-900/40"
        >
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.id;

            return (
              <Link
                key={i}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`flex flex-col items-center gap-1 transition-all duration-300 
                  ${isActive ? 'text-purple-400 scale-110' : 'text-gray-400 hover:text-white'}
                `}
              >
                <div className={isActive ? 'drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]' : ''}>
                  {link.icon}
                </div>

                <span className="text-[10px] font-medium opacity-70">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
