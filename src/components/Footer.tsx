import Link from "next/link";
import { UilFacebookF, UilInstagram, UilLinkedin, UilTwitter, UilEnvelope, UilPhone, UilMapMarker, UilArrowRight } from '@iconscout/react-unicons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A24] text-gray-300 relative overflow-hidden border-t border-purple-900/20">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="space-y-4 md:space-y-6">
            <div className="group">
              <img 
                src="/logo.png" 
                alt="Adverze Logo" 
                className="h-9 sm:h-11 w-auto group-hover:scale-105 transition-transform duration-300"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-400">
              Strategic. Creative. Performance-Driven. Turning attention into action and ideas into impact.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="group p-2 sm:p-2.5 rounded-lg bg-purple-900/20 hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50">
                <UilFacebookF size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="group p-2 sm:p-2.5 rounded-lg bg-purple-900/20 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50">
                <UilInstagram size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="group p-2 sm:p-2.5 rounded-lg bg-purple-900/20 hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50">
                <UilLinkedin size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="group p-2 sm:p-2.5 rounded-lg bg-purple-900/20 hover:bg-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50">
                <UilTwitter size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/" className="group flex items-center gap-2 hover:text-purple-400 transition-all duration-200 hover:translate-x-1 text-sm md:text-base">
                  <UilArrowRight size={14} className="sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="group flex items-center gap-2 hover:text-purple-400 transition-all duration-200 hover:translate-x-1 text-sm md:text-base">
                  <UilArrowRight size={14} className="sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="group flex items-center gap-2 hover:text-purple-400 transition-all duration-200 hover:translate-x-1 text-sm md:text-base">
                  <UilArrowRight size={14} className="sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="group flex items-center gap-2 hover:text-purple-400 transition-all duration-200 hover:translate-x-1 text-sm md:text-base">
                  <UilArrowRight size={14} className="sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="group flex items-center gap-2 hover:text-purple-400 transition-all duration-200 hover:translate-x-1 text-sm md:text-base">
                  <UilArrowRight size={14} className="sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></span>
              Our Services
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/services#seo" className="group flex items-center gap-2 hover:text-purple-400 transition-all duration-200 hover:translate-x-1 text-sm md:text-base">
                  <UilArrowRight size={14} className="sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  SEO & Content
                </Link>
              </li>
              <li>
                <Link href="/services#ads" className="group flex items-center gap-2 hover:text-purple-400 transition-all duration-200 hover:translate-x-1 text-sm md:text-base">
                  <UilArrowRight size={14} className="sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Paid Advertising
                </Link>
              </li>
              <li>
                <Link href="/services#social" className="group flex items-center gap-2 hover:text-purple-400 transition-all duration-200 hover:translate-x-1 text-sm md:text-base">
                  <UilArrowRight size={14} className="sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Social Media
                </Link>
              </li>
              <li>
                <Link href="/services#branding" className="group flex items-center gap-2 hover:text-purple-400 transition-all duration-200 hover:translate-x-1 text-sm md:text-base">
                  <UilArrowRight size={14} className="sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Branding & Design
                </Link>
              </li>
              <li>
                <Link href="/services#web" className="group flex items-center gap-2 hover:text-purple-400 transition-all duration-200 hover:translate-x-1 text-sm md:text-base">
                  <UilArrowRight size={14} className="sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></span>
              Get In Touch
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="group">
                <div className="flex items-start space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg hover:bg-purple-900/10 transition-all duration-200">
                  <UilMapMarker size={18} className="sm:w-5 sm:h-5 text-purple-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300">Namakkal, Tamilnadu, India</span>
                </div>
              </li>
              <li className="group">
                <a href="mailto:hello@adverze.com" className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg hover:bg-purple-900/10 transition-all duration-200">
                  <UilEnvelope size={18} className="sm:w-5 sm:h-5 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm text-gray-400 group-hover:text-purple-400 transition-colors break-all">
                    hello@adverze.com
                  </span>
                </a>
              </li>
              <li className="group">
                <a href="tel:+919876543210" className="flex items-center space-x-2 md:space-x-3 p-2 md:p-3 rounded-lg hover:bg-purple-900/10 transition-all duration-200">
                  <UilPhone size={18} className="sm:w-5 sm:h-5 text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-xs sm:text-sm text-gray-400 group-hover:text-purple-400 transition-colors">
                    +91 98765 43210
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-purple-900/20 pt-6 md:pt-8 mb-6 md:mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-bold text-lg md:text-xl mb-2 md:mb-3">Stay Updated</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-6 px-4">Subscribe to our newsletter for the latest insights and tips</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-md mx-auto px-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-purple-900/10 border border-purple-900/30 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-gray-500 transition-all duration-200 text-sm md:text-base"
              />
              <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 whitespace-nowrap text-sm md:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-900/20 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left px-4">
              © {currentYear} <span className="text-white font-semibold">Adverze</span>. All rights reserved. Crafted with ❤️ in India
            </p>
            <div className="flex space-x-4 md:space-x-6 text-xs sm:text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Privacy Policy</Link>
              <span className="text-gray-700">•</span>
              <Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
