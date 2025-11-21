'use client';

import Link from "next/link";
import { UilArrowRight, UilCalendarAlt, UilFileAlt } from '@iconscout/react-unicons';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "How to Build a Funnel That Doesn't Leak",
      excerpt: "Most marketing funnels have holes. Learn how to identify the leaks in your customer journey and plug them for maximum conversion rates.",
      category: "Conversion Optimization",
      date: "November 15, 2025",
      readTime: "8 min read",
      slug: "build-funnel-that-doesnt-leak"
    },
    {
      id: 2,
      title: "Google Ads in 2025: What You're Doing Wrong",
      excerpt: "Wasting ad budget? Discover the most common Google Ads mistakes that are killing your ROI and how to fix them immediately.",
      category: "Paid Advertising",
      date: "November 10, 2025",
      readTime: "10 min read",
      slug: "google-ads-2025-mistakes"
    },
    {
      id: 3,
      title: "Why Your Website Is Pretty But Useless",
      excerpt: "A beautiful website means nothing if it doesn't convert. Learn the critical elements that turn visitors into customers.",
      category: "Web Design",
      date: "November 5, 2025",
      readTime: "7 min read",
      slug: "pretty-website-doesnt-convert"
    },
    {
      id: 4,
      title: "The Real SEO Checklist We Actually Use",
      excerpt: "Forget the outdated SEO guides. This is our battle-tested checklist that actually ranks websites in 2025 and beyond.",
      category: "SEO Strategy",
      date: "October 28, 2025",
      readTime: "12 min read",
      slug: "real-seo-checklist"
    },
    {
      id: 5,
      title: "Social Media Marketing: Stop Posting, Start Converting",
      excerpt: "Social media isn't about vanity metrics. Learn how to turn followers into customers with strategic content.",
      category: "Social Media",
      date: "October 20, 2025",
      readTime: "9 min read",
      slug: "social-media-stop-posting-start-converting"
    },
    {
      id: 6,
      title: "Content Marketing for Tamilnadu Businesses",
      excerpt: "How to create content that resonates with local audiences while building authority in your industry.",
      category: "Content Strategy",
      date: "October 15, 2025",
      readTime: "11 min read",
      slug: "content-marketing-tamilnadu"
    }
  ];

  const categories = [
    "All Posts",
    "SEO Strategy",
    "Paid Advertising",
    "Social Media",
    "Content Strategy",
    "Web Design",
    "Conversion Optimization"
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0A0A24] via-[#161730] to-[#0A0A24] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 bg-purple-600/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-200"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="block">Welcome to the</span>
              <span className="gradient-text">Adverze Blog</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8 animate-slide-up delay-200">
              Real insights. Actionable strategies. No fluff. We break down what's working in digital 
              marketing so you can apply it to your business today.
            </p>
            <p className="text-lg text-gray-400 animate-slide-up delay-300">
              From SEO tactics to paid ad strategies, we share what actually moves the needle.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-[#161730] sticky top-20 z-40 border-b border-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-purple-900/20 text-gray-300 hover:bg-purple-900/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-20 bg-[#0A0A24]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-[#161730] rounded-xl md:rounded-2xl shadow-lg shadow-purple-900/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden animate-scale-in border border-purple-900/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Post Image Placeholder */}
                <div className="relative h-48 md:h-56 bg-gradient-to-br from-purple-600 to-purple-500 overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <UilFileAlt size={56} className="sm:w-16 sm:h-16 text-white opacity-50" />
                  </div>
                  <div className="absolute top-3 md:top-4 left-3 md:left-4">
                    <span className="bg-white text-purple-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 md:gap-4 text-xs sm:text-sm text-gray-500 mb-2 md:mb-3">
                    <div className="flex items-center gap-1">
                      <UilCalendarAlt size={14} className="sm:w-4 sm:h-4" />
                      <span className="text-xs">{post.date}</span>
                    </div>
                    <span>•</span>
                    <span className="text-xs">{post.readTime}</span>
                  </div>

                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-3 transition-all text-sm md:text-base"
                  >
                    Read More
                    <UilArrowRight size={18} className="sm:w-5 sm:h-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-8 md:mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#161730]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-600 to-purple-500 rounded-3xl p-12 text-white shadow-2xl shadow-purple-500/20">
            <h2 className="text-4xl font-bold mb-4 animate-slide-up">
              Never Miss an Insight
            </h2>
            <p className="text-xl mb-8 opacity-90 animate-slide-up delay-200">
              Get our latest strategies delivered straight to your inbox. No spam, just value.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto animate-scale-in delay-300">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A0A24]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
            Not sure where to start?
          </h2>
          <p className="text-xl text-gray-400 mb-8 animate-slide-up delay-200">
            Let's build your digital playbook — together. Book a free consultation and we'll map out your path to growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in delay-300">
            <a
              href="mailto:hello@adverze.com"
              className="group bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Schedule Free Audit
              <UilArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/services"
              className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
