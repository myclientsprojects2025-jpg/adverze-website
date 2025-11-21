'use client';

import Image from "next/image";
import Link from "next/link";
import { 
  UilSearch, 
  UilMegaphone, 
  UilPalette, 
  UilAnalytics,
  UilCheckCircle,
  UilArrowRight,
  UilLightbulbAlt,
  UilRocket,
  UilAward,
  UilChartLine
} from '@iconscout/react-unicons';

export default function Home() {
  const services = [
    {
      icon: <UilSearch size={40} className="text-purple-400" />,
      title: "SEO & Content Strategy",
      description: "Rank higher, convert better with data-driven optimization and strategic content."
    },
    {
      icon: <UilMegaphone size={40} className="text-purple-400" />,
      title: "Paid Ads (Google & Meta)",
      description: "ROI-focused campaigns that reach your audience and drive real results."
    },
    {
      icon: <UilChartLine size={40} className="text-purple-400" />,
      title: "Social Media Marketing",
      description: "Engaging content that builds communities and drives brand awareness."
    },
    {
      icon: <UilAnalytics size={40} className="text-purple-400" />,
      title: "Branding & Website Development",
      description: "Fast, beautiful, conversion-optimized websites that perform."
    }
  ];

  const features = [
    "Performance marketing for modern brands",
    "Based in Namakkal, serving clients all over Tamilnadu",
    "Let's turn attention into action"
  ];

  const whyChoose = [
    {
      icon: <UilLightbulbAlt size={32} className="text-purple-400" />,
      title: "Strategy First",
      description: "We don't just execute—we strategize. Every campaign starts with understanding your goals."
    },
    {
      icon: <UilRocket size={32} className="text-purple-400" />,
      title: "Results That Matter",
      description: "We're obsessed with metrics that move the needle: conversions, revenue, growth."
    },
    {
      icon: <UilAward size={32} className="text-purple-400" />,
      title: "Personalized Approach",
      description: "No cookie-cutter solutions. Your brand gets a custom roadmap designed for success."
    }
  ];

  const clients = [
    "ADD Nirmala Logistics",
    "Balamurugan",
    "Lakshmi Doors and Lights"
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "40+", label: "Happy Clients" },
    { number: "545+", label: "Campaigns Launched" },
    { number: "130+", label: "ROI Increase" }
  ];

  return (
    <main className="min-h-screen bg-[#0A0A24]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center bg-[#0A0A24] pt-20 pb-10 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-5 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-purple-600/20 rounded-full filter blur-3xl opacity-60 animate-float"></div>
          <div className="absolute top-40 right-5 md:right-10 w-48 md:w-72 h-48 md:h-72 bg-purple-500/20 rounded-full filter blur-3xl opacity-60 animate-float delay-200"></div>
          <div className="absolute -bottom-8 left-1/2 w-48 md:w-72 h-48 md:h-72 bg-purple-700/20 rounded-full filter blur-3xl opacity-60 animate-float delay-400"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight px-2">
              <span className="block text-white">Digital That Makes</span>
              <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent animate-slide-up delay-200">a Difference</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-semibold max-w-2xl mx-auto animate-slide-up delay-300 px-4">
              Strategic. Creative. Performance-Driven.
            </p>
            
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-400 px-4">
              Adverze is a digital marketing agency that blends strategy, creativity, and technology 
              to unlock your brand's full potential. We don't just run campaigns—we build growth engines.
            </p>

            {/* Key Features */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-gray-300 animate-slide-up delay-500 px-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <UilCheckCircle size={20} className="text-purple-400 flex-shrink-0 sm:w-6 sm:h-6" />
                  <span className="text-xs sm:text-sm md:text-base font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 animate-scale-in delay-500 px-4 w-full max-w-lg mx-auto">
              <Link 
                href="#contact"
                className="group relative bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 overflow-hidden w-full sm:w-auto justify-center"
              >
                <span className="relative z-10 text-sm sm:text-base">Book Free Digital Audit</span>
                <UilArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
              </Link>
              <Link 
                href="/services"
                className="border-2 border-purple-500 text-purple-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex">
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-[#161730]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl bg-purple-900/20 backdrop-blur-md hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 md:hover:scale-110 animate-scale-in border border-purple-500/20 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl sm:text-3xl md:text-5xl font-bold mb-1 md:mb-2 transform group-hover:scale-110 md:group-hover:scale-125 transition-transform duration-300 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium text-xs sm:text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 md:py-20 bg-[#0A0A24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4 px-4">
              What We <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Offer for</span>
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4 px-4">
              Your <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Satisfaction</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Full-spectrum digital marketing services designed to drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-[#161730] p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2 md:hover:-translate-y-4 animate-scale-in overflow-hidden border border-purple-900/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="mb-3 md:mb-4 transform group-hover:scale-110 md:group-hover:scale-125 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Adverze */}
      <section className="py-12 md:py-20 bg-[#161730]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Adverze?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We're not just another agency—we're your growth partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl bg-[#0A0A24] border-2 border-purple-900/30 hover:border-purple-600 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-4 transform group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-[#0A0A24] border-t border-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-gray-500 text-sm uppercase tracking-wide mb-8 font-semibold">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="text-2xl font-bold text-gray-600 hover:text-purple-400 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Gallery */}
      <section className="py-20 bg-[#161730]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Latest Work</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Creative campaigns that drive results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
              const categories = ['Branding', 'Social Media', 'Web Design', 'Packaging', 'Campaign', 'Product', 'Marketing', 'Design'];
              return (
                <div 
                  key={index}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer animate-scale-in shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 border-2 border-purple-900/30 hover:border-purple-500"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Image
                    src={`/works/${
                      ['Artboard 1.jpg', 'Born to be grilled.jpg', 'CGM-Recovered.jpg', 'Dog need.jpg', 
                       'F FEast.jpg', 'FF sea.jpg', 'Fig Powdder 2.jpg', 'Fit Fuel.jpg'][index]
                    }`}
                    alt={`Work ${item}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-between p-6">
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full mb-2">
                        {categories[index]}
                      </span>
                    </div>
                    <div className="w-full">
                      <p className="text-white font-bold text-base line-clamp-2 mb-1">Portfolio Project</p>
                      <p className="text-white/90 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to see details</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link 
              href="/portfolio"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 group"
            >
              <span>Explore Full Portfolio</span>
              <UilArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" style={{ animation: 'float 8s ease-in-out infinite reverse' }}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Let's build something your audience won't ignore.
          </h2>
          <p className="text-xl mb-10 opacity-90 animate-slide-up delay-200">
            Ready to transform your digital presence? Book a free consultation and let's create your roadmap to success.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in delay-300">
            <a 
              href="mailto:hello@adverze.com"
              className="group bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-2"
            >
              <span>Schedule a Call</span>
              <UilArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+919876543210"
              className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2"
            >
              <span>Call Us Now</span>
              <UilArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
