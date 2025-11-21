import Button from '@/components/Button';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Build a Funnel That Doesn\'t Leak',
    excerpt: 'Most marketing funnels are broken. Learn how to identify the gaps and optimize every stage for maximum conversions.',
    date: 'November 15, 2025',
    readTime: '8 min read',
    category: 'Strategy',
  },
  {
    id: '2',
    title: 'Google Ads in 2025: What You\'re Doing Wrong',
    excerpt: 'Stop wasting ad spend on campaigns that don\'t convert. Here are the most common Google Ads mistakes and how to fix them.',
    date: 'November 10, 2025',
    readTime: '6 min read',
    category: 'Paid Ads',
  },
  {
    id: '3',
    title: 'Why Your Website Is Pretty But Useless',
    excerpt: 'A beautiful website means nothing if it doesn\'t convert. Discover the essential elements every high-converting website needs.',
    date: 'November 5, 2025',
    readTime: '7 min read',
    category: 'Web Design',
  },
  {
    id: '4',
    title: 'The Real SEO Checklist We Actually Use',
    excerpt: 'Forget the generic SEO advice. This is the actual checklist we use to help our clients rank on Google and drive organic traffic.',
    date: 'October 28, 2025',
    readTime: '10 min read',
    category: 'SEO',
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-gray-900 dark:via-black dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to the{' '}
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Adverze Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Actionable insights, real strategies, and honest takes on digital marketing. 
              We break down what&apos;s working, what&apos;s not, and what you should do next.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-600 to-violet-700 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="p-8 lg:p-12 text-white">
                <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                  Featured Post
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                  {blogPosts[0].title}
                </h2>
                <p className="text-purple-100 mb-6 leading-relaxed text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <Button 
                  href={`/blog/${blogPosts[0].id}`} 
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  Read Article
                </Button>
              </div>
              <div className="h-64 lg:h-full bg-white/10 backdrop-blur-sm flex items-center justify-center p-8">
                <svg className="w-full h-full max-w-sm text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Latest Articles
            </h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors">
                All
              </button>
              <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                SEO
              </button>
              <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                Paid Ads
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="h-48 bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 flex items-center justify-center p-8">
                  <svg className="w-24 h-24 text-purple-600 dark:text-purple-400 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-purple-600 dark:text-purple-400 font-semibold text-sm hover:underline flex items-center"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-3xl p-12 border border-purple-100 dark:border-purple-900/50">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Never Miss an Update
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Get our latest insights, tips, and strategies delivered straight to your inbox. 
              No spam, just actionable digital marketing advice.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let&apos;s build your digital playbook—together. Book a free consultation and 
            discover the strategies that will work for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="mailto:hello@adverze.com" 
              variant="secondary" 
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Book Free Consultation
            </Button>
            <Button 
              href="/services" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              View Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
