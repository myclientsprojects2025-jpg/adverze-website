import Button from '@/components/Button';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-gray-900 dark:via-black dark:to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Not Just Another Agency.
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                We&apos;re Your Digital Growth Partner.
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              We believe in solving real problems with strategy and impact. No cookie-cutter solutions. 
              No empty promises. Just honest work, clear communication, and results that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Adverze was born out of a simple frustration: businesses weren&apos;t getting the digital 
                  marketing support they truly needed. Too many agencies were focused on vanity metrics, 
                  complicated jargon, and one-size-fits-all strategies.
                </p>
                <p>
                  We started in Namakkal with a different vision—to be the kind of partner we&apos;d want for 
                  our own business. One that listens, understands, and builds strategies that actually work.
                </p>
                <p>
                  Today, we serve clients across Tamil Nadu, helping them navigate the complex digital 
                  landscape with clarity, creativity, and data-driven results. We&apos;re proud to be their 
                  growth partners, not just their service providers.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Mission-Driven
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Empowering businesses through strategic digital solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These aren&apos;t just values on a wall. They&apos;re the principles that guide every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Clarity Over Complexity
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We cut through the noise and speak in plain language. No jargon, no confusion—just clear, 
                actionable insights that make sense for your business.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Strategy Before Execution
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We don&apos;t rush into tactics. Every campaign starts with a solid strategy rooted in your 
                business goals, target audience, and competitive reality.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Results That Matter
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We measure success by outcomes, not outputs. More leads, higher conversions, better ROI—
                that&apos;s what we&apos;re here to deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg className="w-24 h-24 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Strategy Lead</h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3">Digital Strategist</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Expert in crafting data-driven marketing strategies that deliver measurable results.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg className="w-24 h-24 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Creative Director</h3>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-3">Brand & Content</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Bringing brands to life with compelling visuals and engaging content that resonates.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg className="w-24 h-24 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Technical Lead</h3>
              <p className="text-amber-600 dark:text-amber-400 font-semibold mb-3">Development & SEO</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Building fast, scalable websites and implementing technical SEO for maximum visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Start Your Growth Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let&apos;s connect and discuss how we can help you achieve your digital marketing goals. 
            No pressure, no sales pitch—just an honest conversation about your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="mailto:hello@adverze.com" 
              variant="secondary" 
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Schedule a Call
            </Button>
            <Button 
              href="tel:+919876543210" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
