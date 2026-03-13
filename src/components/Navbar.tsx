import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-bg/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center">
              <img 
                src="https://i.ibb.co/4nyLHBm3/468960341-574509171970353-1307256537538525636-n-removebg-preview.png" 
                alt="Intuition Logo" 
                className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-24' : 'h-36'}`}
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-ink-light hover:text-rose-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#book"
              className="bg-rose-gold hover:bg-rose-gold-dark text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-colors shadow-sm"
            >
              Book Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-ink hover:text-rose-gold focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-nude shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-ink-light hover:text-rose-gold transition-colors block py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-rose-gold text-white px-6 py-3 rounded-full text-sm uppercase tracking-widest text-center transition-colors"
          >
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
}
