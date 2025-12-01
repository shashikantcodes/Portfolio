'use client';
import { Briefcase, Code, Home, Mail, User } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home'); // Default active

  // ScrollSpy Logic: Pata lagayega ki user abhi kaha hai
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'Experience', 'projects', 'contact'];

      // Loop through sections to find which one is visible
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Agar section screen ke beech mein hai (viewpoint)
          if (rect.top >= -300 && rect.top <= 300) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Data (id match hona chahiye page sections se)
  const navLinks = [
    { name: 'Home', id: 'home', icon: <Home size={18} />, href: '#home' },
    { name: 'About', id: 'about', icon: <User size={18} />, href: '#about' },
    { name: 'Skills', id: 'skills', icon: <Code size={18} />, href: '#skills' },
    { name: 'Experience', id: 'experience', icon: <Code size={18} />, href: '#skills' },

    { name: 'Projects', id: 'projects', icon: <Briefcase size={18} />, href: '#projects' },
    { name: 'Contact', id: 'contact', icon: <Mail size={18} />, href: '#contact' },
  ];

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div className="fixed top-8 left-10 z-50 hidden md:flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/20">
          S
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold text-lg tracking-wide leading-none">
            Shashikant
          </span>
          <span className="text-gray-400 text-xs tracking-widest">PORTFOLIO</span>
        </div>
      </div>

      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex">
        <div className="flex items-center gap-1 px-2 py-2 bg-[#030014]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={index}
                href={link.href}
                onClick={() => setActiveSection(link.id)} // Click pe turant active kare
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm font-medium ${
                  isActive
                    ? 'bg-[#ffffff1a] border border-white/10 text-white shadow-inner'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {/* Icon sirf active hone par dikhega, ya hover par? 
                        Desktop me usually text clean lagta hai, par icon bhi rakh sakte hain */}
                {isActive && <span className="text-purple-400">{link.icon}</span>}
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[400px] md:hidden">
        <div className="flex justify-between items-center px-6 py-3 bg-[#050314]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-purple-900/40">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={index}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`flex flex-col items-center gap-1 transition-all duration-300 group ${
                  isActive ? 'text-purple-400 scale-110' : 'text-gray-400 hover:text-white'
                }`}
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
