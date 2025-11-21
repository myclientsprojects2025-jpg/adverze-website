import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-gray-900 dark:via-black dark:to-purple-900/20 overflow-hidden pt-16">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-300 dark:bg-violet-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Digital That Makes <br />
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                a Difference
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-semibold mb-6">
              Strategic. Creative. Performance-Driven.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              We&apos;re a digital marketing agency that blends strategy, creativity, and technology 
              to unlock your brand&apos;s full potential. Based in Namakkal, serving brands across Tamil Nadu.
            </p>

            {/* Key Features */}
            <div className="max-w-2xl mx-auto mb-10 space-y-3">
              <div className="flex items-center justify-center text-left">
                <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Performance marketing for modern brands</span>
              </div>
              <div className="flex items-center justify-center text-left">
                <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Based in Namakkal, serving clients all over Tamil Nadu</span>
              </div>
              <div className="flex items-center justify-center text-left">
                <svg className="w-6 h-6 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Let&apos;s turn attention into action</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="#contact" size="lg">
                Book a Free Digital Audit
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              End-to-end digital marketing solutions designed to grow your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
              title="SEO & Content Strategy"
              description="Rank higher, convert better. We build SEO strategies that drive organic traffic and turn visitors into customers."
            />
            <ServiceCard
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              }
              title="Paid Ads (Google & Meta)"
              description="Performance-driven campaigns on Google and Meta that deliver measurable ROI and qualified leads."
            />
            <ServiceCard
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              }
              title="Social Media Marketing"
              description="Create, engage, and grow. We craft social media strategies that build communities and drive engagement."
            />
            <ServiceCard
              icon={
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              title="Branding & Website Development"
              description="Beautiful, fast, and conversion-focused websites that represent your brand and drive results."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Adverze Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-violet-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Why Choose Adverze?
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              We&apos;re not just another agency. We&apos;re your growth partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Strategy First</h3>
              <p className="text-purple-100 leading-relaxed">
                We don&apos;t jump into tactics. Every campaign starts with a deep understanding of your goals, 
                audience, and competitive landscape.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">Data-Driven Results</h3>
              <p className="text-purple-100 leading-relaxed">
                Every decision is backed by data. We track, measure, and optimize continuously to ensure 
                you&apos;re getting the best possible ROI.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-4">Partnership Mindset</h3>
              <p className="text-purple-100 leading-relaxed">
                Your success is our success. We work as an extension of your team, transparent and 
                committed to your long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We&apos;ve helped businesses across Tamil Nadu achieve their digital goals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">ADD Nirmala Logistics</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">Logistics & Transportation</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Balamurugan</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">Professional Services</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Lakshmi Doors and Lights</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">Home & Interior Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let&apos;s Build Something Your Audience Won&apos;t Ignore
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Ready to transform your digital presence? Book a free consultation and discover 
            how we can help you achieve your growth goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="mailto:hello@adverze.com" 
              variant="secondary" 
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Book Your Free Digital Audit
            </Button>
            <Button 
              href="tel:+919876543210" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

