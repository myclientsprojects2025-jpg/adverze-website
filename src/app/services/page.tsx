'use client';

import Link from "next/link";
import { 
  UilSearch, 
  UilMegaphone, 
  UilChartLine,
  UilPalette,
  UilAnalytics,
  UilArrowRight,
  UilCheckCircle
} from '@iconscout/react-unicons';

export default function Services() {
  const services = [
    {
      id: "seo",
      icon: <UilSearch size={56} className="text-purple-400" />,
      title: "SEO that Ranks & Converts",
      subtitle: "Get found. Get clicked. Get customers.",
      description: "SEO isn't just about rankings—it's about driving the right traffic that converts. We optimize your entire digital presence to capture high-intent visitors and turn them into customers.",
      features: [
        "Technical SEO audits & optimization",
        "Keyword research & competitor analysis",
        "On-page & off-page optimization",
        "Content strategy that ranks",
        "Local SEO for Tamilnadu businesses",
        "Performance tracking & reporting"
      ],
      color: "from-purple-600 to-purple-500"
    },
    {
      id: "ads",
      icon: <UilMegaphone size={56} className="text-purple-400" />,
      title: "Paid Ads that Deliver ROI",
      subtitle: "Every rupee counts. We make them work harder.",
      description: "Stop wasting money on ads that don't convert. We build data-driven campaigns on Google Ads and Meta that reach your ideal customers and maximize your return on ad spend.",
      features: [
        "Google Ads campaign management",
        "Facebook & Instagram advertising",
        "LinkedIn B2B campaigns",
        "YouTube video advertising",
        "Remarketing & retargeting strategies",
        "A/B testing & conversion optimization"
      ],
      color: "from-purple-600 to-purple-500"
    },
    {
      id: "social",
      icon: <UilChartLine size={56} className="text-purple-400" />,
      title: "Social Media that Engages",
      subtitle: "Build communities. Drive conversations. Grow your brand.",
      description: "Social media isn't just about posting—it's about building relationships. We create content that sparks engagement, builds loyal communities, and drives real business results.",
      features: [
        "Social media strategy & planning",
        "Content creation & copywriting",
        "Instagram, Facebook & LinkedIn management",
        "Community engagement & growth",
        "Influencer partnerships",
        "Analytics & performance reporting"
      ],
      color: "from-purple-600 to-purple-500"
    },
    {
      id: "branding",
      icon: <UilPalette size={56} className="text-purple-400" />,
      title: "Content Strategy & Branding",
      subtitle: "Define your voice. Build authority. Own your space.",
      description: "Your brand is more than a logo—it's how you make people feel. We help you define your unique voice, craft compelling narratives, and build authority in your industry.",
      features: [
        "Brand strategy & positioning",
        "Content marketing strategy",
        "Blog & article writing",
        "Email marketing campaigns",
        "Video content strategy",
        "Brand guidelines & messaging"
      ],
      color: "from-purple-600 to-purple-500"
    },
    {
      id: "web",
      icon: <UilAnalytics size={56} className="text-purple-400" />,
      title: "Web Design That Performs",
      subtitle: "Fast. Beautiful. Conversion-optimized.",
      description: "Your website is your digital storefront. We build lightning-fast, mobile-first websites that not only look stunning but are engineered to convert visitors into customers.",
      features: [
        "Custom website design & development",
        "Mobile-first responsive design",
        "E-commerce solutions",
        "Landing page optimization",
        "Speed & performance optimization",
        "Ongoing maintenance & support"
      ],
      color: "from-purple-600 to-purple-500"
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0A0A24] via-[#161730] to-[#0A0A24] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-200"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="gradient-text">Full-Service Digital Marketing.</span>
              <span className="block mt-2">Built Around Your Goals.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed animate-slide-up delay-200">
              Whether you want more traffic, more leads, or more revenue — we'll build the roadmap.
              No cookie-cutter solutions. Just strategies tailored to your unique business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0A0A24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Content Side */}
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="mb-6">
                      {service.icon}
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-3">
                      {service.title}
                    </h2>
                    <p className="text-xl text-gray-400 mb-6 font-medium">
                      {service.subtitle}
                    </p>
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <UilCheckCircle size={24} className="text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual Side */}
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className={`relative h-96 rounded-2xl bg-gradient-to-br ${service.color} p-8 flex items-center justify-center shadow-2xl shadow-purple-500/20 overflow-hidden group`}>
                      <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-purple-900/30 transition-all duration-300"></div>
                      <div className="relative text-center text-white">
                        <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <div className="text-3xl font-bold">
                          {service.title.split(' ')[0]}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#161730]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our proven process for delivering results that matter
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We dive deep into your business, goals, audience, and competition."
              },
              {
                step: "02",
                title: "Strategy",
                description: "We build a custom roadmap with clear milestones and KPIs."
              },
              {
                step: "03",
                title: "Execution",
                description: "We launch campaigns, create content, and optimize relentlessly."
              },
              {
                step: "04",
                title: "Growth",
                description: "We analyze, refine, and scale what works to maximize your ROI."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl font-bold gradient-text mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Let's stop being strangers.
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-slide-up delay-200">
            Reach out—no fluff, no sales talk, just real conversation about how we can help you grow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in delay-300">
            <a 
              href="mailto:hello@adverze.com"
              className="group bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Get in Touch
              <UilArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+919876543210"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Call Us: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
