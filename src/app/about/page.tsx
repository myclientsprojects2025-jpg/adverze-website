'use client';

import Link from "next/link";
import Image from "next/image";
import { UilCheckCircle, UilArrowRight, UilLightbulbAlt, UilRocket, UilAward } from '@iconscout/react-unicons';

export default function About() {
  const values = [
    {
      icon: <UilLightbulbAlt size={48} className="text-purple-400" />,
      title: "Clarity over complexity",
      description: "We believe in simple, effective strategies. No jargon, no confusion—just clear paths to your goals."
    },
    {
      icon: <UilRocket size={48} className="text-purple-400" />,
      title: "Strategy before execution",
      description: "Every campaign starts with understanding. We dig deep before we dive in."
    },
    {
      icon: <UilAward size={48} className="text-purple-400" />,
      title: "Results that matter",
      description: "Vanity metrics don't pay the bills. We focus on conversions, revenue, and real growth."
    }
  ];

  const teamMembers = [
    {
      name: "Aruveen",
      role: "Founder & Strategy Lead",
      bio: "10+ years turning brands into revenue machines with performance-driven marketing.",
      image: "/team/member1.jpg"
    },
    {
      name: "Creative Director",
      role: "Brand & Content Specialist",
      bio: "Crafting compelling narratives that resonate and convert.",
      image: "/team/member2.jpg"
    },
    {
      name: "Technical Lead",
      role: "Web Development Expert",
      bio: "Building fast, scalable, and beautiful digital experiences.",
      image: "/team/member3.jpg"
    }
  ];

  return (
    <main className="min-h-screen pt-20 bg-[#0A0A24]">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#0A0A24] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-purple-600/20 rounded-full filter blur-xl opacity-60 animate-float"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full filter blur-xl opacity-60 animate-float delay-200"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Not Just Another Agency.
              <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mt-2">
                We're Your Digital Growth Partner.
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8 animate-slide-up delay-200">
              We're Adverze, a digital marketing agency based in Namakkal, serving ambitious brands 
              across Tamilnadu. We believe in solving real problems with strategy, creativity, and measurable impact.
            </p>
            <p className="text-lg text-gray-400 animate-slide-up delay-300">
              No fluff. No empty promises. Just results that move your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-[#161730]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                We exist to help businesses unlock their full digital potential. In a world cluttered 
                with noise, we cut through with strategy that's backed by data and creativity that converts.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-4">
                Every brand has a story. We help you tell it in a way that resonates, engages, and drives action.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Whether you're a startup finding your voice or an established business scaling up, 
                we're here to build sustainable growth engines—not quick fixes.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl animate-slide-in-right border border-purple-900/30">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">40+</div>
                  <div className="text-2xl">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-20 bg-[#0A0A24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              These aren't just values on a wall—they're the foundation of every strategy we build
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-[#161730] p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 animate-slide-up border border-purple-900/30"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
  

      {/* Why Namakkal */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Based in Namakkal. Serving All of Tamilnadu.
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed animate-slide-up delay-200">
            We're proud to call Namakkal home, but our impact reaches businesses across Tamilnadu. 
            Whether you're in Chennai, Coimbatore, Madurai, or anywhere in between—we're here to help 
            you dominate your digital space.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg animate-fade-in delay-300">
            <div className="flex items-center gap-2">
              <UilCheckCircle size={24} />
              <span>Local expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <UilCheckCircle size={24} />
              <span>Regional insights</span>
            </div>
            <div className="flex items-center gap-2">
              <UilCheckCircle size={24} />
              <span>Global standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A0A24]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-400 mb-8 animate-slide-up delay-200">
            Let's stop being strangers. Reach out—no fluff, no sales talk, just real conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in delay-300">
            <a 
              href="mailto:hello@adverze.com"
              className="group bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Schedule a Call
              <UilArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link 
              href="/services"
              className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:border-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
