'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-violet-500 transition-all">
              Adverze
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive(link.href)
                    ? 'text-purple-600 dark:text-purple-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-purple-600 dark:bg-purple-400 transition-all ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-gray-700 dark:bg-gray-300 transition-all ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-700 dark:bg-gray-300 transition-all ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-gray-700 dark:bg-gray-300 transition-all ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-semibold text-center transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
