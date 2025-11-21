'use client';

import Image from "next/image";
import Link from "next/link";
import { UilArrowLeft, UilArrowRight } from '@iconscout/react-unicons';

export default function Portfolio() {
  const portfolioItems = [
    { name: 'Artboard 1', category: 'Branding' },
    { name: 'Batter sticker final-03', category: 'Design' },
    { name: 'Born to be grilled', category: 'Social Media' },
    { name: 'CGM-Recovered', category: 'Web Design' },
    { name: 'Dog need', category: 'Packaging' },
    { name: 'F FEast', category: 'Campaign' },
    { name: 'FF sea', category: 'Design' },
    { name: 'Fig Powdder 2', category: 'Product' },
    { name: 'Fit Fuel', category: 'Branding' },
    { name: 'Fr day', category: 'Campaign' },
    { name: 'Friendship day KRN', category: 'Social Media' },
    { name: 'Friendship day schai', category: 'Campaign' },
    { name: 'GC KRN', category: 'Design' },
    { name: 'GC NH', category: 'Branding' },
    { name: 'Ground meat', category: 'Social Media' },
    { name: 'IND day NH', category: 'Marketing' },
    { name: 'KAF 1', category: 'Design' },
    { name: 'KJ NH', category: 'Campaign' },
    { name: 'KJ Sank 2', category: 'Branding' },
    { name: 'Prawns', category: 'Product' },
    { name: 'RB KRN', category: 'Social Media' },
    { name: 'RB SC', category: 'Design' },
    { name: 'Raksha Bandhan SK', category: 'Campaign' },
    { name: 'S smile', category: 'Branding' },
    { name: 'SANK emoji day', category: 'Social Media' },
    { name: 'Sank GC', category: 'Design' },
    { name: 'Stain', category: 'Product' },
    { name: 'Taste Of Ocean', category: 'Branding' },
    { name: 'VS Launch', category: 'Campaign' },
    { name: 'Vitamins', category: 'Product' },
    { name: 'WED nh', category: 'Social Media' },
    { name: 'WFSD-1', category: 'Design' },
    { name: 'emoji day', category: 'Campaign' },
    { name: 'fathers day', category: 'Social Media' },
    { name: 'smile', category: 'Branding' },
    { name: 'water melone', category: 'Product' },
  ];

  const fileNames = [
    'Artboard 1.jpg',
    'Batter sticker final-03.jpg',
    'Born to be grilled.jpg',
    'CGM-Recovered.jpg',
    'Dog need.jpg',
    'F FEast.jpg',
    'FF sea.jpg',
    'Fig Powdder 2.jpg',
    'Fit Fuel.jpg',
    'Fr day.jpg',
    'Friendship day KRN.jpg',
    'Friendship day schai.jpg',
    'GC KRN.jpg',
    'GC NH.jpg',
    'Ground meat.jpg',
    'IND day NH.jpg',
    'KAF 1.jpg',
    'KJ NH.jpg',
    'KJ Sank 2.jpg',
    'Prawns.jpg',
    'RB KRN.jpg',
    'RB SC.jpg',
    'Raksha Bandhan SK.jpg',
    'S smile.jpg',
    'SANK emoji day.jpg',
    'Sank GC.jpg',
    'Stain.jpg',
    'Taste Of Ocean.jpg',
    'VS Launch.jpg',
    'Vitamins.jpg',
    'WED nh.jpg',
    'WFSD-1.jpg',
    'emoji day.jpg',
    'fathers day.jpg',
    'smile.jpg',
    'water melone.jpg',
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-[#0A0A24] via-[#161730] to-[#0A0A24] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-5 md:right-10 w-48 md:w-64 h-48 md:h-64 bg-purple-600/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute bottom-20 left-5 md:left-10 w-48 md:w-64 h-48 md:h-64 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-200"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-2">
              Our Complete <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed px-4">
              Explore our diverse range of creative projects and successful campaigns that showcase our expertise in digital marketing, branding, and design.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 md:py-20 bg-[#0A0A24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg shadow-purple-900/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 animate-scale-in border border-purple-900/20"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative w-full aspect-square overflow-hidden bg-[#161730]">
                  <Image
                    src={`/works/${fileNames[index]}`}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 md:mb-2 line-clamp-2">{item.name}</h3>
                  <p className="text-purple-300 font-medium mb-2 md:mb-3 lg:mb-4 text-xs sm:text-sm md:text-base">{item.category}</p>
                  <button className="inline-flex items-center gap-1 sm:gap-2 text-white font-semibold hover:text-purple-300 transition-colors group/btn text-xs sm:text-sm md:text-base">
                    <span>View Details</span>
                    <UilArrowRight size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-600 to-purple-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 animate-slide-up px-2">
            Ready to Start Your Project?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90 animate-slide-up delay-200 px-4">
            Let's create something amazing together. Reach out to discuss your next big idea.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-scale-in delay-300 px-4">
            <a
              href="mailto:hello@adverze.com"
              className="w-full sm:w-auto bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
            >
              Get in Touch
            </a>
            <Link
              href="/"
              className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
