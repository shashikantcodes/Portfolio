'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  User,
  MessageSquare,
  Send,
  Github,
  Linkedin,
  Terminal,
  Sparkles,
  Coffee,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 px-4 md:px-10 flex flex-col items-center justify-center overflow-hidden z-[20]"
    >
      {/* Background Decor */}
      <div className="absolute top-[20%] left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-0 w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* --- HEADING --- */}
      <div className="relative z-10 flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6"
        >
          <Sparkles size={14} className="text-purple-400" />
          <span className="text-xs font-semibold text-purple-300 tracking-wider">GET IN TOUCH</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Let's{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
            Connect
          </span>
        </motion.h2>

        <p className="text-gray-400 max-w-2xl text-lg">
          Have a project in mind or just want to say hi? Feel free to send me a message!
        </p>
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* LEFT: CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative p-8 rounded-[30px] bg-[#0f0c29]/50 border border-white/10 backdrop-blur-md shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Send className="text-purple-400" /> Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400 font-medium ml-1">Full Name</label>
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a2e] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400 font-medium ml-1">Email Address</label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a2e] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400 font-medium ml-1">Subject</label>
              <div className="relative">
                <Terminal
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Let's work together!"
                  className="w-full bg-[#1a1a2e] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400 font-medium ml-1">Message</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-6 text-gray-500" size={18} />
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a2e] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 group"
            >
              <Send
                size={20}
                className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
              />{' '}
              Send Message
            </button>
          </form>
        </motion.div>

        {/* RIGHT: CONTACT INFO & SOCIALS */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {/* Info Box */}
          <div className="p-8 rounded-[30px] bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              Ready to collaborate on your next project? I'm always open to discussing{' '}
              <span className="text-white font-semibold">new opportunities</span> and exciting
              challenges. Let's create something amazing together!
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <a
                href="mailto:contact@shashikant.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#1a1a2e] border border-white/5 hover:border-purple-500/30 hover:bg-[#202035] transition-all group"
              >
                <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-400 text-sm">contact@shashikant.com</p>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href="#"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#1a1a2e] border border-white/5 hover:border-blue-500/30 hover:bg-[#202035] transition-all group"
              >
                <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <p className="text-gray-400 text-sm">Connect with me</p>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href="#"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#1a1a2e] border border-white/5 hover:border-gray-500/30 hover:bg-[#202035] transition-all group"
              >
                <div className="p-3 rounded-xl bg-gray-700/20 text-gray-300 group-hover:scale-110 transition-transform">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">GitHub</h4>
                  <p className="text-gray-400 text-sm">Check out my code</p>
                </div>
              </a>
            </div>
          </div>

          {/* Collaboration Card (Bottom Right) */}
          <div className="p-8 rounded-[30px] bg-[#0f0c29] border border-white/10 relative overflow-hidden group">
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-[80px] -mr-20 -mt-20 pointer-events-none" />

            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Coffee className="text-yellow-400" /> Let's Collaborate
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                I'm always excited to work on{' '}
                <span className="text-white font-semibold">innovative projects</span> and help bring
                creative ideas to life. Whether it's a small feature or a complete application,
                let's discuss how we can work together.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- THANK YOU CARD (Bottom) --- */}
      <div className="mt-24 w-full max-w-4xl px-4 text-center">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent border-y border-white/5">
          <p className="text-gray-400 text-sm md:text-base">
            Thank you for visiting! I appreciate you taking the time to explore my portfolio.{' '}
            <span className="text-white font-semibold">
              Let's create something amazing together!
            </span>{' '}
            🚀
          </p>
        </div>
        <p className="text-gray-600 text-xs mt-8">
          © {new Date().getFullYear()} Shashikant. All rights reserved. Built with Next.js &
          Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default Contact;
