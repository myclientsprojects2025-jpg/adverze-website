'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { UilBars, UilTimes, UilPhone } from '@iconscout/react-unicons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0A0A24]/95 backdrop-blur-xl border-b border-purple-900/20' 
        : 'bg-[#0A0A24]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <img 
              src="/logo.png" 
              alt="Adverze Logo" 
              className="h-10 sm:h-11 w-auto transition-transform duration-300 group-hover:scale-105 relative z-10"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-purple-900/20 transition-all duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-gray-300 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-purple-900/20 transition-all duration-200"
            >
              <UilPhone size={20} />
              <span className="text-sm">+91 98765 43210</span>
            </a>
            <Link
              href="#contact"
              className="relative bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl hover:bg-purple-900/20 transition-all duration-300 active:scale-95"
          >
            {isOpen ? (
              <UilTimes size={26} className="text-gray-300" />
            ) : (
              <UilBars size={26} className="text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'
        }`}>
          <div className="flex flex-col space-y-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-purple-900/20 font-medium py-3 px-4 rounded-lg transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-purple-900/20 font-medium py-3 px-4 rounded-lg transition-all duration-200"
            >
              <UilPhone size={20} />
              <span>+91 98765 43210</span>
            </a>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300 mt-2"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
