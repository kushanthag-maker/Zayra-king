'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Github, MessageCircle, Search, ExternalLink, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ZayraAPIs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCards, setVisibleCards] = useState({});

  const apis = [
    {
      id: 1,
      name: 'WhatsApp Bot API',
      description: 'Send messages, media, and automate WhatsApp conversations with Baileys integration.',
      method: 'POST',
      endpoints: 24,
      speed: 'Ultra-fast',
    },
    {
      id: 2,
      name: 'Image Resizer',
      description: 'Resize, crop, and optimize images with custom dimensions and formats.',
      method: 'POST',
      endpoints: 8,
      speed: 'Fast',
    },
    {
      id: 3,
      name: 'URL Shortener',
      description: 'Create short URLs and track analytics with real-time statistics.',
      method: 'GET',
      endpoints: 12,
      speed: 'Fast',
    },
    {
      id: 4,
      name: 'Text to Speech',
      description: 'Convert text to natural-sounding speech in multiple languages.',
      method: 'POST',
      endpoints: 15,
      speed: 'Ultra-fast',
    },
    {
      id: 5,
      name: 'QR Code Generator',
      description: 'Generate custom QR codes with logo embedding and tracking.',
      method: 'GET',
      endpoints: 10,
      speed: 'Instant',
    },
    {
      id: 6,
      name: 'Email Sender',
      description: 'Send HTML emails with attachments and template support.',
      method: 'POST',
      endpoints: 18,
      speed: 'Fast',
    },
    {
      id: 7,
      name: 'JSON Validator',
      description: 'Validate and format JSON with error detection and suggestions.',
      method: 'POST',
      endpoints: 6,
      speed: 'Instant',
    },
    {
      id: 8,
      name: 'Currency Converter',
      description: 'Real-time currency conversion with live market rates.',
      method: 'GET',
      endpoints: 9,
      speed: 'Real-time',
    },
    {
      id: 9,
      name: 'Weather API',
      description: 'Get weather data, forecasts, and alerts for any location worldwide.',
      method: 'GET',
      endpoints: 14,
      speed: 'Fast',
    },
  ];

  const filteredAPIs = apis.filter((api) =>
    api.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    api.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    { label: '10+ Free APIs', value: '10+' },
    { label: '99% Uptime', value: '99%' },
    { label: '< 100ms Response', value: '100ms' },
  ];

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal-card').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Zayra APIs
              </span>
            </motion.div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'APIs', 'Docs', 'Contact'].map((link, idx) => (
                <motion.a
                  key={link}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-cyan-400 transition-colors text-gray-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="px-4 py-2 rounded-lg border border-cyan-400/30 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all"
              >
                Login
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all font-semibold"
              >
                Dashboard
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pb-4 flex flex-col gap-4"
            >
              {['Home', 'APIs', 'Docs', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-cyan-400 transition-colors text-gray-300"
                >
                  {link}
                </a>
              ))}
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 w-full font-semibold">
                Dashboard
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Zayra APIs
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Experience lightning-fast API integration with 99% uptime guarantee. Our powerful, developer-friendly APIs
              are built for speed and reliability. Get started in minutes with comprehensive documentation and 24/7
              support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/75 transition-all"
              >
                Explore APIs
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg border-2 border-purple-500/50 text-purple-400 font-semibold hover:bg-purple-500/10 hover:border-purple-400 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Join Telegram
              </motion.button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="relative">
              {/* Glassmorphic Card */}
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
                      className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/30"
                    >
                      <div className="h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded w-3/4"></div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full opacity-20 blur-2xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-4 mt-20 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* APIs Section */}
      <section id="apis" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            Available{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              APIs
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Explore our collection of powerful APIs designed for modern applications
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search APIs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all"
            />
          </motion.div>

          {/* API Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAPIs.map((api, idx) => (
              <motion.div
                key={api.id}
                id={`api-${api.id}`}
                className="reveal-card"
                initial={{ opacity: 0, y: 20 }}
                animate={visibleCards[`api-${api.id}`] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {api.name}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold border border-green-500/30">
                      {api.method}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 flex-grow">{api.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-t border-white/10 pt-6">
                    <div>
                      <div className="text-xs text-gray-500">Endpoints</div>
                      <div className="text-lg font-bold text-cyan-400">{api.endpoints}+</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Speed</div>
                      <div className="text-lg font-bold text-purple-400">{api.speed}</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-400 font-semibold hover:from-cyan-500/40 hover:to-purple-500/40 hover:border-cyan-400/60 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                  >
                    Get API
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredAPIs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No APIs found matching your search.</p>
            </div>
          )}
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-12 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to get started?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers using Zayra APIs. Get your API key and start building amazing applications
            today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/75 transition-all"
          >
            Get Started Free
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 backdrop-blur-xl bg-black/20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zayra APIs
                </span>
              </div>
              <p className="text-gray-400 text-sm">Lightning-fast API solutions for modern developers.</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">APIs</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2026 Zayra APIs. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm text-gray-500">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Tailwind Animation Classes */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
