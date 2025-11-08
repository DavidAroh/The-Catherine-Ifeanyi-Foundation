import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  // Using the original About section content from Home page

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
              <Link to="/" className="text-gray-700 hover:text-grass transition-colors font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-grass transition-colors font-medium">About</Link>
              <a href="/#mission" className="text-gray-700 hover:text-grass transition-colors font-medium">Mission</a>
              <a href="/#focus" className="text-gray-700 hover:text-grass transition-colors font-medium">Focus Areas</a>
              <a href="/#donate" className="text-gray-700 hover:text-sun transition-colors font-medium">Donate</a>
              <a href="/#trustees" className="text-gray-700 hover:text-grass transition-colors font-medium">Leadership</a>
              <a href="/#contact" className="text-gray-700 hover:text-grass transition-colors font-medium">Contact</a>
            </div>

            {/* Desktop CTA Button */}
            <Link to="/#contact" className="hidden md:block bg-sun text-white px-6 py-2.5 rounded-full hover:bg-sun-light transition-all hover:shadow-lg transform hover:-translate-y-0.5 font-semibold">
              Support Us
            </Link>

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
              <Link
                to="/"
                className="block px-3 py-3 text-gray-700 hover:text-grass hover:bg-gray-50 rounded-md transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-3 text-gray-700 hover:text-grass hover:bg-gray-50 rounded-md transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <a
                href="/#mission"
                className="block px-3 py-3 text-gray-700 hover:text-grass hover:bg-gray-50 rounded-md transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mission
              </a>
              <a
                href="/#focus"
                className="block px-3 py-3 text-gray-700 hover:text-grass hover:bg-gray-50 rounded-md transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Focus Areas
              </a>
              <a
                href="/#donate"
                className="block px-3 py-3 text-gray-700 hover:text-sun hover:bg-gray-50 rounded-md transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Donate
              </a>
              <a
                href="/#trustees"
                className="block px-3 py-3 text-gray-700 hover:text-grass hover:bg-gray-50 rounded-md transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Leadership
              </a>
              <a
                href="/#contact"
                className="block px-3 py-3 text-gray-700 hover:text-grass hover:bg-gray-50 rounded-md transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-3">
                <Link
                  to="/#contact"
                  className="block w-full bg-sun text-white px-6 py-3 rounded-full hover:bg-sun-light transition-all text-center font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Support Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* About section copied from Home page (App.tsx) */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sun-light/20 via-white to-grass-light/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              To bring hope, compassion, and practical help to vulnerable children, women, and families through acts of love, giving, and empowerment — ensuring that every person, regardless of circumstance, has a chance to live with dignity, safety, and joy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Giving Hope, Touching Lives.</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Founded by Chidera Monica Anene, the Catherine Ifeanyi Foundation (CIF) is a humanitarian movement dedicated to bringing hope, dignity, and practical support to children, mothers, and families in need.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What began as a simple act of compassion — paying school fees, supporting pregnant mothers, and providing essentials to families in rural communities around Abuja, Nigeria — has grown into a global mission of love and service, connecting people from all walks of life.
              </p>
              <br/>
              <p className="text-gray-600 leading-relaxed">
                Today, CIF builds bridges of hope between nations, gathering support from individuals and partners across the UK, Nigeria, and beyond to uplift communities and restore lives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At the Catherine Ifeanyi Foundation, we believe that love and kindness know no boundaries. We serve people of every background, belief, and culture — because humanity unites us all. Guided by the values of love, service, and compassion, we remain committed to meeting both the practical and emotional needs of those we serve, one life at a time.
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
    </div>
  );
};

export default AboutUs;