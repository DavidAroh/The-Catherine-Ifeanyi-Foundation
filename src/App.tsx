import { Heart, Users, GraduationCap, Stethoscope, HandHeart, ChevronRight, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Check, BookOpen, Globe, Shield, TrendingUp, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState<'once' | 'monthly'>('once');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img
                className="w-60 h-30"
                src="./Logo.png" alt="" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-grass transition-colors font-medium">About</a>
              <a href="#mission" className="text-gray-700 hover:text-grass transition-colors font-medium">Mission</a>
              <a href="#focus" className="text-gray-700 hover:text-grass transition-colors font-medium">Focus Areas</a>
              <a href="#donate" className="text-gray-700 hover:text-sun transition-colors font-medium">Donate</a>
              <a href="#trustees" className="text-gray-700 hover:text-grass transition-colors font-medium">Leadership</a>
              <a href="#contact" className="text-gray-700 hover:text-grass transition-colors font-medium">Contact</a>
            </div>

            {/* Desktop CTA Button */}
            <a href="#contact" className="hidden md:block bg-sun text-white px-6 py-2.5 rounded-full hover:bg-sun-light transition-all hover:shadow-lg transform hover:-translate-y-0.5 font-semibold">
              Support Us
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-sun hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg transform transition-all duration-300 ease-in-out">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a
                href="#about"
                className="block px-3 py-3 text-gray-700 hover:text-grass hover:bg-gray-50 rounded-md transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#mission"
                className="block px-3 py-3 text-gray-700 hover:text-grass hover:bg-gray-50 rounded-md transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mission
              </a>
              <a
                href="#focus"
                className="block px-3 py-3 text-gray-700 hover:text-grass hover:bg-gray-50 rounded-md transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Focus Areas
              </a>
              <a
                href="#donate"
                className="block px-3 py-3 text-gray-700 hover:text-sun hover:bg-gray-50 rounded-md transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Donate
              </a>
              <a
                href="#trustees"
                className="block px-3 py-3 text-gray-700 hover:text-grass hover:bg-gray-50 rounded-md transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Leadership
              </a>
              <a
                href="#contact"
                className="block px-3 py-3 text-gray-700 hover:text-grass hover:bg-gray-50 rounded-md transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-3">
                <a
                  href="#contact"
                  className="block w-full bg-sun text-white px-6 py-3 rounded-full hover:bg-sun-light transition-all text-center font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Support Us
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sun-light/20 via-white to-grass-light/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-sun/10 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Founded September 20, 2023
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                THE CATHERINE IFEANYI<br />
                <span className="text-foundation-text">FOUNDATION</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Demonstrating God's love through humanitarian acts, providing education, healthcare, and empowerment to vulnerable children, women, and families across Nigeria and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#mission" className="bg-sun text-white px-8 py-4 rounded-full hover:bg-sun-light transition-all hover:shadow-xl transform hover:-translate-y-1 text-center font-semibold">
                  Our Mission
                </a>
                <a href="#trustees" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-sun hover:text-sun transition-all text-center font-semibold">
                  Meet Our Team
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-sun to-grass rounded-3xl transform rotate-3"></div>
              <img
                src="header.png"
                alt="Children learning"
                className="relative rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To bring hope, compassion, and practical help to vulnerable children, women, and families through acts of love, giving, and empowerment — ensuring that every person, regardless of circumstance, has a chance to live with dignity, safety, and joy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Founded on Faith & Compassion</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Catherine Ifeanyi Foundation was born from a divine call to serve humanity. Founded by Miss Chidera Monica Anene on September 20, 2023, our organization has consistently provided school fees for children from kindergarten to university, supported expectant mothers with baby supplies, and inspired hope among families in rural Nigerian communities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Operating as a non-profit, non-political, and non-discriminatory humanitarian organization, we are guided by faith and compassion in everything we do. Our vision extends beyond borders — to provide love, empowerment, and support across nations.
              </p>
            </div>
            <div className="relative">
              <img
                src="./header2.png"
                alt="Community support"
                className="rounded-2xl shadow-xl w-full h-[300px] sm:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To demonstrate God's love through humanitarian acts — providing school fees, baby supplies, clothing, toys, and essential support to children, pregnant mothers, and families in need. We are committed to empowering communities through education, healthcare, economic empowerment, and development projects.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sun/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-sun" />
                </div>
                <p className="text-gray-700">Support children from kindergarten to university through scholarships and educational assistance</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sun/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-sun" />
                </div>
                <p className="text-gray-700">Provide food items, clothing, shoes, toys, and supplies for children in underserved communities</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sun/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-sun" />
                </div>
                <p className="text-gray-700">Offer care packages, healthcare support, and essential supplies to pregnant mothers and families</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sun/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-sun" />
                </div>
                <p className="text-gray-700">Receive and manage donations from individuals, organizations, and churches worldwide</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sun/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-sun" />
                </div>
                <p className="text-gray-700">Partner with local schools, churches, and community groups to identify genuine beneficiaries</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-sun/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-sun" />
                </div>
                <p className="text-gray-700">Maintain transparency and integrity in all operations and distribution of donations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section id="focus" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Focus Areas</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We implement programs across four key pillars to create lasting change in communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-grass/10 to-grass/20 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-grass rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
              <p className="text-gray-700 leading-relaxed">
                Promoting access to learning through scholarships, school supplies, and educational support from kindergarten to university.
              </p>
            </div>

            <div className="bg-gradient-to-br from-grass-light/10 to-grass-light/20 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-grass-light rounded-full flex items-center justify-center mb-6">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Healthcare</h3>
              <p className="text-gray-700 leading-relaxed">
                Supporting child and maternal health through care packages, medical assistance, and essential supplies for mothers and families.
              </p>
            </div>

            <div className="bg-gradient-to-br from-sun-light/10 to-sun-light/20 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-sun-light rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Economic Empowerment</h3>
              <p className="text-gray-700 leading-relaxed">
                Providing skills, tools, and opportunities for families to build sustainable livelihoods and break the cycle of poverty.
              </p>
            </div>

            <div className="bg-gradient-to-br from-sun/10 to-sun/20 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-sun rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Development</h3>
              <p className="text-gray-700 leading-relaxed">
                Fostering clean, safe, and sustainable environments where families can thrive with dignity and hope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-gradient-to-br from-grass/5 via-white to-sun/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Make a Donation</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your generous contribution helps us provide education, healthcare, and essential support to children, women, and families in need. Every donation makes a real difference in someone's life.
            </p>
          </div>

          {/* Donation Type Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-full w-full max-w-md sm:w-auto">
              <div className="flex flex-col sm:flex-row">
                <button
                  onClick={() => setActiveTab('once')}
                  className={`px-6 sm:px-8 py-3 rounded-full font-semibold transition-all text-center ${activeTab === 'once'
                      ? 'bg-sun text-white shadow-lg'
                      : 'text-gray-600 hover:text-sun'
                    }`}
                >
                  One-Time Donation
                </button>
                <button
                  onClick={() => setActiveTab('monthly')}
                  className={`px-6 sm:px-8 py-3 rounded-full font-semibold transition-all text-center ${activeTab === 'monthly'
                      ? 'bg-sun text-white shadow-lg'
                      : 'text-gray-600 hover:text-sun'
                    }`}
                >
                  Monthly Donation
                </button>
              </div>
            </div>
          </div>

          {/* Donation Options */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'once' ? (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                  Choose Your Impact Level
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-sun/30">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-grass/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-grass">£25</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">School Supplies</h4>
                      <p className="text-sm text-gray-600 mb-4">Provides essential school materials for one child for a month</p>
                      <button className="w-full bg-grass text-white py-3 px-6 rounded-full hover:bg-grass/90 transition-colors font-semibold">
                        Donate £25
                      </button>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-sun/30">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-sun/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-sun">£50</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Healthcare Kit</h4>
                      <p className="text-sm text-gray-600 mb-4">Covers medical supplies and care for a pregnant mother</p>
                      <button className="w-full bg-sun text-white py-3 px-6 rounded-full hover:bg-sun-light transition-colors font-semibold">
                        Donate £50
                      </button>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-sun/30">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-grass-light/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-grass-light">£100</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Family Support</h4>
                      <p className="text-sm text-gray-600 mb-4">Provides comprehensive support for a family in need</p>
                      <button className="w-full bg-grass-light text-white py-3 px-6 rounded-full hover:bg-grass-light/90 transition-colors font-semibold">
                        Donate £100
                      </button>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-sun/20 bg-gradient-to-br from-sun/5 to-grass/5">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-sun to-grass rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">£250</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Scholarship Fund</h4>
                      <p className="text-sm text-gray-600 mb-4">Covers one child's education for an entire term</p>
                      <button className="w-full bg-gradient-to-r from-sun to-grass text-white py-3 px-6 rounded-full hover:from-sun-light hover:to-grass-light transition-colors font-semibold">
                        Donate £250
                      </button>
                    </div>
                  </div>
                </div>

                {/* Custom Amount */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 text-center mb-6">Custom Amount</h4>
                  <div className="max-w-md mx-auto">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-2xl font-bold text-gray-900">£</span>
                      <input
                        type="number"
                        placeholder="Enter amount"
                        className="flex-1 text-2xl font-bold text-center border-0 border-b-2 border-gray-300 focus:border-sun outline-none pb-2"
                      />
                    </div>
                    <button className="w-full bg-gray-900 text-white py-4 px-8 rounded-full hover:bg-gray-800 transition-colors font-semibold text-lg">
                      Donate Custom Amount
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                  Monthly Giving - Sustained Impact
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-grass/30">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-grass/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-grass">£15</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Monthly Basics</h4>
                      <p className="text-sm text-gray-600 mb-4">Monthly school supplies for one child</p>
                      <button className="w-full bg-grass text-white py-3 px-6 rounded-full hover:bg-grass/90 transition-colors font-semibold">
                        Give £15/month
                      </button>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-sun/30">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-sun/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-sun">£30</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Monthly Care</h4>
                      <p className="text-sm text-gray-600 mb-4">Healthcare support for mothers and children</p>
                      <button className="w-full bg-sun text-white py-3 px-6 rounded-full hover:bg-sun-light transition-colors font-semibold">
                        Give £30/month
                      </button>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-grass-light/30">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-grass-light/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-grass-light">£60</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Monthly Family</h4>
                      <p className="text-sm text-gray-600 mb-4">Complete family support package</p>
                      <button className="w-full bg-grass-light text-white py-3 px-6 rounded-full hover:bg-grass-light/90 transition-colors font-semibold">
                        Give £60/month
                      </button>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-sun/20 bg-gradient-to-br from-sun/5 to-grass/5">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-sun to-grass rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">£150</span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Monthly Scholar</h4>
                      <p className="text-sm text-gray-600 mb-4">Full scholarship support for one child</p>
                      <button className="w-full bg-gradient-to-r from-sun to-grass text-white py-3 px-6 rounded-full hover:from-sun-light hover:to-grass-light transition-colors font-semibold">
                        Give £150/month
                      </button>
                    </div>
                  </div>
                </div>

                {/* Custom Monthly Amount */}
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 text-center mb-6">Custom Monthly Amount</h4>
                  <div className="max-w-md mx-auto">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-2xl font-bold text-gray-900">£</span>
                      <input
                        type="number"
                        placeholder="Enter amount"
                        className="flex-1 text-2xl font-bold text-center border-0 border-b-2 border-gray-300 focus:border-grass outline-none pb-2"
                      />
                      <span className="text-lg text-gray-600">/month</span>
                    </div>
                    <button className="w-full bg-gray-900 text-white py-4 px-8 rounded-full hover:bg-gray-800 transition-colors font-semibold text-lg">
                      Give Monthly
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Impact Message */}
            <div className="mt-12 text-center bg-gradient-to-r from-sun/10 to-grass/10 p-8 rounded-3xl border border-sun/20">
              <HandHeart className="w-12 h-12 text-sun mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Your Impact Matters</h4>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {activeTab === 'once' ? (
                  "Every one-time donation helps us provide immediate relief and support to families in crisis."
                ) : (
                  "Monthly donations create lasting change by ensuring consistent support for our ongoing programs."
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="trustees" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Board of Trustees</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our foundation is governed by dedicated individuals of integrity and good standing, committed to upholding our mission and Christian values.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-sun/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-10 h-10 text-sun" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Anene Chidera Monica</h3>
              <p className="text-sun font-semibold mb-3">Chairperson & Founder</p>
              <p className="text-sm text-gray-600 mb-2">786 Seven Sisters Road, London, UK N15 5NU</p>
              <a href="mailto:anene.monica@gmail.com" className="text-sm text-blue-600 hover:text-blue-700">anene.monica@gmail.com</a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-grass/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-10 h-10 text-grass" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Fortune Samuel</h3>
              <p className="text-grass font-semibold mb-3">Vice Chair</p>
              <p className="text-sm text-gray-600 mb-2">Christ Apostolic Church, Zion City Family, Tasha 1, Abuja, Nigeria</p>
              <a href="mailto:fortunesam123@gmail.com" className="text-sm text-blue-600 hover:text-blue-700">fortunesam123@gmail.com</a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-grass-light/10 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-10 h-10 text-grass-light" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Olanipekun Michael Oluwatosin</h3>
              <p className="text-grass-light font-semibold mb-3">Secretary</p>
              <p className="text-sm text-gray-600 mb-2">Opp. Government Secondary School, Tasha, Abuja</p>
              <a href="mailto:olanipekundad1@gmail.com" className="text-sm text-blue-600 hover:text-blue-700">olanipekundad1@gmail.com</a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-sun-light/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-10 h-10 text-sun-light" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Fortune Oluwakemi Comfort</h3>
              <p className="text-sun-light font-semibold mb-3">Treasurer</p>
              <p className="text-sm text-gray-600 mb-2">Christ Apostolic Church, Zion City Family, Tasha 1, Abuja, Nigeria</p>
              <a href="mailto:fortunecomfort1234@gmail.com" className="text-sm text-blue-600 hover:text-blue-700">fortunecomfort1234@gmail.com</a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-silhouette/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-10 h-10 text-silhouette" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Emmanuel C. Anene</h3>
              <p className="text-silhouette font-semibold mb-3">Consultant</p>
              <p className="text-sm text-gray-600 mb-2">2 Daniel Close, Elijiji Phase 4, Rumurolu, Woji Rivers State</p>
              <a href="mailto:ecanene2@gmail.com" className="text-sm text-blue-600 hover:text-blue-700">ecanene2@gmail.com</a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-foundation-text/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-10 h-10 text-foundation-text" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Onyedikachi Timothy Anene</h3>
              <p className="text-foundation-text font-semibold mb-3">Public Relations Officer</p>
              <p className="text-sm text-gray-600 mb-2">2278 East 24th Avenue, Vancouver, BC, Canada</p>
              <a href="mailto:anenetimothy@gmail.com" className="text-sm text-blue-600 hover:text-blue-700">anenetimothy@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-sun to-grass text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Faith & Ethics</h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              The Catherine Ifeanyi Foundation operates as a ministry of help, rooted in Christian compassion and biblical principles of giving, service, stewardship, and love for humanity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <HandHeart className="w-12 h-12 mb-4 text-sun-light" />
              <h3 className="text-2xl font-bold mb-3">Compassionate Service</h3>
              <p className="text-white/90 leading-relaxed">
                We serve all people regardless of faith, background, or nationality with unconditional love and respect.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <Shield className="w-12 h-12 mb-4 text-grass-light" />
              <h3 className="text-2xl font-bold mb-3">Transparency & Integrity</h3>
              <p className="text-white/90 leading-relaxed">
                We maintain complete transparency in all operations and ensure accountability in every donation received.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <Globe className="w-12 h-12 mb-4 text-sun" />
              <h3 className="text-2xl font-bold mb-3">Global Impact</h3>
              <p className="text-white/90 leading-relaxed">
                Operating in the UK and Nigeria with plans for expansion, we envision a world where love transcends borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us, volunteer, or learn more about how you can make a difference. We operate in both the United Kingdom and Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">United Kingdom Office</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sun/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-sun" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Address</div>
                    <p className="text-gray-600">
                      786 Seven Sisters Road<br />
                      London, UK N15 5NU
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sun/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-sun" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <a href="tel:+447823517244" className="text-gray-600 hover:text-sun">+44 7823 517244</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sun/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-sun" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <a href="mailto:anene.monica@gmail.com" className="text-gray-600 hover:text-sun">anene.monica@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nigeria Office</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-grass/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-grass" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Address</div>
                    <p className="text-gray-600">
                      Christ Apostolic Church<br />
                      Zion City Family, Tasha 1<br />
                      Abuja, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-grass/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-grass" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <a href="tel:+2348022487652" className="text-gray-600 hover:text-grass">+234 802 248 7652</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-grass/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-grass" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <a href="mailto:fortunesam123@gmail.com" className="text-gray-600 hover:text-grass">fortunesam123@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="flex justify-center space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-sun hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-sun hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-sun hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Become a Member</h3>
          <p className="text-lg text-gray-600 mb-8">
            Membership is open to individuals and partners who share our vision and values, demonstrate integrity, and are willing to volunteer or contribute expertise, resources, or support.
          </p>
          <a href="#contact" className="inline-block bg-sun text-white px-8 py-4 rounded-full hover:bg-sun-light transition-all hover:shadow-xl transform hover:-translate-y-1 font-semibold">
            Join Our Mission
          </a>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Accountability"
                className="rounded-2xl shadow-xl w-full h-[300px] sm:h-[400px] object-cover"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Accountability & Reporting</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Catherine Ifeanyi Foundation maintains transparent financial, operational, and activity records. We are committed to the highest standards of accountability.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-sun flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Annual reports summarizing donations, beneficiaries, and impact</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-sun flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Regular donor updates via newsletters and social media</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-sun flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Board of Trustees meetings held at least twice yearly</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-sun flex-shrink-0 mt-1" />
                  <p className="text-gray-700">All income applied solely toward humanitarian objectives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Logo and Description */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <img
                    src="./footer logo.png"
                    alt="The Catherine Ifeanyi Foundation"
                    className="w-50 sm:w-56 lg:w-80 h-auto"
                  />
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Bringing hope, compassion, and dignity to vulnerable children, women, and families since 2023.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-sun flex-shrink-0" />
                    <a href="mailto:anene.monica@gmail.com" className="text-gray-400 hover:text-sun transition-colors text-sm">
                      anene.monica@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-sun flex-shrink-0" />
                    <a href="tel:+447823517244" className="text-gray-400 hover:text-sun transition-colors text-sm">
                      +44 7823 517244
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-white mb-6 text-lg">Quick Links</h4>
                <ul className="space-y-3">
                  <li><a href="#about" className="text-gray-400 hover:text-sun transition-colors">About Us</a></li>
                  <li><a href="#mission" className="text-gray-400 hover:text-sun transition-colors">Our Mission</a></li>
                  <li><a href="#focus" className="text-gray-400 hover:text-sun transition-colors">Focus Areas</a></li>
                  <li><a href="#donate" className="text-gray-400 hover:text-sun transition-colors">Make a Donation</a></li>
                  <li><a href="#trustees" className="text-gray-400 hover:text-sun transition-colors">Leadership Team</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-sun transition-colors">Get in Touch</a></li>
                </ul>
              </div>

              {/* Our Work */}
              <div>
                <h4 className="font-semibold text-white mb-6 text-lg">Our Impact</h4>
                <ul className="space-y-3">
                  <li><a href="#focus" className="text-gray-400 hover:text-sun transition-colors">Education Programs</a></li>
                  <li><a href="#focus" className="text-gray-400 hover:text-sun transition-colors">Healthcare Support</a></li>
                  <li><a href="#focus" className="text-gray-400 hover:text-sun transition-colors">Economic Empowerment</a></li>
                  <li><a href="#focus" className="text-gray-400 hover:text-sun transition-colors">Community Development</a></li>
                  <li><a href="#trustees" className="text-gray-400 hover:text-sun transition-colors">Success Stories</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-sun transition-colors">Partner with Us</a></li>
                </ul>
              </div>

              {/* Legal & Info */}
              <div>
                <h4 className="font-semibold text-white mb-6 text-lg">About</h4>
                <ul className="space-y-3 mb-6">
                  <li className="text-gray-400 text-sm">Non-profit organization</li>
                  <li className="text-gray-400 text-sm">Non-political entity</li>
                  <li className="text-gray-400 text-sm">Non-discriminatory service</li>
                  <li className="text-gray-400 text-sm">Registered charity</li>
                </ul>

                {/* Social Media */}
                <div>
                  <h5 className="font-semibold text-white mb-4 text-sm">Follow Us</h5>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sun hover:text-white transition-all duration-200"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sun hover:text-white transition-all duration-200"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sun hover:text-white transition-all duration-200"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm text-center sm:text-left">
                © 2025 Catherine Ifeanyi Foundation. Founded September 20, 2023. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-end space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-sun transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-sun transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-sun transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
