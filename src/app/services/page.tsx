import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-gray-900 dark:via-black dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Full-Service Digital Marketing.
              </span>
              <br />
              Built Around Your Goals.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Whether you want more traffic, more leads, or more revenue — we&apos;ll build the roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            
            {/* SEO Service */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">SEO & Content</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  SEO That Ranks & Converts
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  We don&apos;t just chase rankings. We build SEO strategies that drive qualified traffic 
                  and convert visitors into customers.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">In-depth keyword research and competitor analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Technical SEO optimization for maximum visibility</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">On-page optimization and content strategy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Link building and authority development</span>
                  </li>
                </ul>
                <Button href="#contact">Get Started</Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-2xl flex items-center justify-center p-8">
                  <svg className="w-full h-full text-purple-600 dark:text-purple-400 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Paid Ads Service */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 rounded-2xl flex items-center justify-center p-8">
                  <svg className="w-full h-full text-emerald-600 dark:text-emerald-400 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
                  <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm">Paid Advertising</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Paid Ads That Deliver ROI
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Stop wasting ad budget. We create high-performing campaigns on Google and Meta 
                  that target the right audience at the right time.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Google Ads campaign setup and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Facebook & Instagram ad campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Advanced audience targeting and retargeting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Continuous A/B testing and performance tracking</span>
                  </li>
                </ul>
                <Button href="#contact">Get Started</Button>
              </div>
            </div>

            {/* Social Media Service */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Social Media</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Social Media That Engages
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Build a loyal community and turn followers into customers with content that sparks 
                  conversation and drives engagement.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Instagram, Facebook, and LinkedIn management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Creative content creation and scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Community engagement and reputation management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Influencer collaborations and partnerships</span>
                  </li>
                </ul>
                <Button href="#contact">Get Started</Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl flex items-center justify-center p-8">
                  <svg className="w-full h-full text-blue-600 dark:text-blue-400 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content & Branding Service */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl flex items-center justify-center p-8">
                  <svg className="w-full h-full text-amber-600 dark:text-amber-400 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-6">
                  <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span className="text-amber-600 dark:text-amber-400 font-semibold text-sm">Content & Brand</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Content Strategy & Branding
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Define your voice, tell your story, and build authority in your industry with 
                  compelling content and consistent branding.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Brand identity and messaging development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Blog writing and thought leadership content</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Video scripts and multimedia content</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Email marketing campaigns</span>
                  </li>
                </ul>
                <Button href="#contact">Get Started</Button>
              </div>
            </div>

            {/* Web Design Service */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center px-4 py-2 bg-pink-100 dark:bg-pink-900/30 rounded-full mb-6">
                  <svg className="w-5 h-5 text-pink-600 dark:text-pink-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-pink-600 dark:text-pink-400 font-semibold text-sm">Web Development</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Web Design That Performs
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Your website should be more than just pretty—it should convert. We build fast, 
                  mobile-first websites that turn visitors into customers.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Custom website design and development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Mobile-first responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">E-commerce solutions and integrations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Performance optimization and security</span>
                  </li>
                </ul>
                <Button href="#contact">Get Started</Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 rounded-2xl flex items-center justify-center p-8">
                  <svg className="w-full h-full text-pink-600 dark:text-pink-400 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let&apos;s Stop Being Strangers
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Reach out—no fluff, no sales talk, just real conversation about how we can help 
            you grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="mailto:hello@adverze.com" 
              variant="secondary" 
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Email Us
            </Button>
            <Button 
              href="tel:+919876543210" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
