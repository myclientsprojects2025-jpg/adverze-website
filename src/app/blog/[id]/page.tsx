'use client';

import { useParams } from 'next/navigation';
import Link from "next/link";
import { UilArrowLeft, UilCalendarAlt, UilClock, UilShare } from '@iconscout/react-unicons';

export default function BlogPost() {
  const params = useParams();
  const id = params?.id;

  // Mock blog post data
  const blogPosts: { [key: string]: any } = {
    "1": {
      title: "How to Build a Funnel That Doesn't Leak",
      category: "Conversion Optimization",
      date: "November 15, 2025",
      readTime: "8 min read",
      content: `
        <h2>The Problem with Most Marketing Funnels</h2>
        <p>Most businesses pour money into driving traffic, only to watch potential customers disappear at every stage. If you're spending on ads but not seeing proportional results, your funnel is leaking.</p>
        
        <h2>Identifying the Leaks</h2>
        <p>The first step is understanding where people are dropping off. Here are the most common leak points:</p>
        <ul>
          <li><strong>Awareness to Interest:</strong> Your messaging doesn't resonate with your audience</li>
          <li><strong>Interest to Decision:</strong> Lack of social proof or trust signals</li>
          <li><strong>Decision to Action:</strong> Complicated checkout or unclear CTAs</li>
        </ul>

        <h2>How to Plug the Leaks</h2>
        <p>Now that you know where the problems are, here's how to fix them:</p>
        
        <h3>1. Optimize Your Landing Pages</h3>
        <p>Every landing page should have one clear goal. Remove distractions, strengthen your headline, and make your CTA impossible to miss.</p>
        
        <h3>2. Add Social Proof</h3>
        <p>Testimonials, case studies, and client logos build trust. Show prospects that others have succeeded with your solution.</p>
        
        <h3>3. Simplify the Path to Purchase</h3>
        <p>Every extra form field or additional step costs you conversions. Make it as easy as possible for people to say yes.</p>

        <h2>Track, Test, Improve</h2>
        <p>A funnel is never "done." Use analytics to identify bottlenecks, run A/B tests on critical elements, and continuously refine your approach.</p>
      `
    },
    "2": {
      title: "Google Ads in 2025: What You're Doing Wrong",
      category: "Paid Advertising",
      date: "November 10, 2025",
      readTime: "10 min read",
      content: `
        <h2>Why Your Google Ads Aren't Working</h2>
        <p>Google Ads can be a goldmine—or a money pit. The difference comes down to strategy, targeting, and optimization.</p>
        
        <h2>Common Mistakes That Kill ROI</h2>
        
        <h3>1. Targeting Too Broad</h3>
        <p>Casting a wide net wastes budget on irrelevant clicks. Narrow your targeting to high-intent keywords that signal buyer readiness.</p>
        
        <h3>2. Ignoring Negative Keywords</h3>
        <p>If you're not actively building a negative keyword list, you're throwing money away on searches that will never convert.</p>
        
        <h3>3. Weak Ad Copy</h3>
        <p>Your ad needs to stand out. Use compelling headlines, clear value propositions, and strong CTAs that make people want to click.</p>

        <h2>What Actually Works in 2025</h2>
        <p>Google's algorithm has gotten smarter. Here's how to work with it:</p>
        <ul>
          <li>Focus on conversion value, not just conversions</li>
          <li>Use responsive search ads with multiple headline variations</li>
          <li>Implement proper conversion tracking</li>
          <li>Test different landing pages for different ad groups</li>
        </ul>
      `
    },
    "3": {
      title: "Why Your Website Is Pretty But Useless",
      category: "Web Design",
      date: "November 5, 2025",
      readTime: "7 min read",
      content: `
        <h2>Beauty Doesn't Pay the Bills</h2>
        <p>A gorgeous website means nothing if it doesn't convert visitors into customers. Here's what actually matters.</p>
        
        <h2>The Elements That Actually Convert</h2>
        
        <h3>1. Clear Value Proposition</h3>
        <p>Within 5 seconds of landing on your site, visitors should know exactly what you do and why it matters to them.</p>
        
        <h3>2. Strategic CTAs</h3>
        <p>Every page should guide users toward a specific action. Make your CTAs stand out and eliminate friction.</p>
        
        <h3>3. Fast Load Times</h3>
        <p>Every second of load time costs you conversions. Optimize images, minimize code, and use a quality hosting provider.</p>

        <h2>Mobile-First Is Non-Negotiable</h2>
        <p>Over 60% of web traffic comes from mobile devices. If your site doesn't work perfectly on phones, you're losing more than half your potential customers.</p>
      `
    },
    "4": {
      title: "The Real SEO Checklist We Actually Use",
      category: "SEO Strategy",
      date: "October 28, 2025",
      readTime: "12 min read",
      content: `
        <h2>The SEO Checklist That Actually Works</h2>
        <p>Forget outdated tactics. This is what we use to rank our clients' websites in 2025.</p>
        
        <h2>Technical SEO Foundation</h2>
        <ul>
          <li>Ensure mobile responsiveness</li>
          <li>Optimize Core Web Vitals (LCP, FID, CLS)</li>
          <li>Implement proper schema markup</li>
          <li>Create and submit XML sitemap</li>
          <li>Fix broken links and 404 errors</li>
        </ul>

        <h2>On-Page Optimization</h2>
        <ul>
          <li>Target one primary keyword per page</li>
          <li>Optimize title tags and meta descriptions</li>
          <li>Use header tags (H1, H2, H3) strategically</li>
          <li>Include internal links to related content</li>
          <li>Optimize images with descriptive alt text</li>
        </ul>

        <h2>Content Strategy</h2>
        <p>Content is still king, but only if it serves user intent. Research what your audience is actually searching for and create comprehensive resources that answer their questions.</p>

        <h2>Link Building</h2>
        <p>Quality over quantity. One link from an authoritative site is worth more than 100 spammy backlinks.</p>
      `
    }
  };

  const post = blogPosts[id as string] || blogPosts["1"];

  return (
    <main className="min-h-screen pt-20 bg-[#0A0A24]">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors group"
        >
          <UilArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <header className="mb-12 animate-fade-in">
          <div className="mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/50">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <UilCalendarAlt size={20} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <UilClock size={20} />
              <span>{post.readTime}</span>
            </div>
            <button className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <UilShare size={20} />
              <span>Share</span>
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-96 mb-12 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-500 overflow-hidden animate-scale-in shadow-2xl shadow-purple-500/20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none animate-slide-up delay-200 prose-invert prose-headings:text-white prose-p:text-gray-400 prose-strong:text-white prose-li:text-gray-400"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-purple-900/20">
          <div className="flex flex-wrap gap-3">
            <span className="text-gray-400 font-medium">Tags:</span>
            {['Digital Marketing', 'SEO', 'Strategy', 'Growth'].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-purple-900/20 text-gray-300 rounded-full text-sm hover:bg-purple-900/30 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author CTA */}
        <div className="mt-12 p-8 bg-gradient-to-br from-purple-600/20 to-purple-500/20 rounded-2xl border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want help implementing this strategy?
          </h3>
          <p className="text-gray-400 mb-6">
            At Adverze, we don't just write about strategies—we implement them. Let's build your growth roadmap together.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hello@adverze.com"
              className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
            >
              Schedule a Free Audit
            </a>
            <Link
              href="/services"
              className="border-2 border-purple-500 text-purple-400 px-6 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-[#161730]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <Link
                key={index}
                href={`/blog/${item}`}
                className="bg-[#0A0A24] rounded-xl shadow-lg shadow-purple-900/10 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden group border border-purple-900/20"
              >
                <div className="h-48 bg-gradient-to-br from-purple-600 to-purple-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    Related Article {item}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Discover more insights and strategies...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
   