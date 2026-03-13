import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-nude text-ink py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-gold rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blush rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="flex items-center mb-6">
              <img 
                src="https://i.ibb.co/4nyLHBm3/468960341-574509171970353-1307256537538525636-n-removebg-preview.png" 
                alt="Intuition Logo" 
                className="h-36 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-ink-light font-light text-sm leading-relaxed mb-8 max-w-xs">
              A modern luxury hair and beauty salon offering premium services in Kenai, Alaska. Experience relaxation, pampering, and outstanding results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blush flex items-center justify-center hover:bg-rose-gold hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blush flex items-center justify-center hover:bg-rose-gold hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-rose-gold font-semibold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-ink-light hover:text-rose-gold transition-colors text-sm font-light">Home</a></li>
              <li><a href="#services" className="text-ink-light hover:text-rose-gold transition-colors text-sm font-light">Services</a></li>
              <li><a href="#about" className="text-ink-light hover:text-rose-gold transition-colors text-sm font-light">About Us</a></li>
              <li><a href="#gallery" className="text-ink-light hover:text-rose-gold transition-colors text-sm font-light">Gallery</a></li>
              <li><a href="#testimonials" className="text-ink-light hover:text-rose-gold transition-colors text-sm font-light">Reviews</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-rose-gold font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-ink-light text-sm font-light">
                <MapPin size={18} className="text-rose-gold flex-shrink-0 mt-0.5" />
                <span>10767 Kenai Spur Hwy suite B<br />Kenai, AK 99611<br />United States</span>
              </li>
              <li className="flex items-center gap-3 text-ink-light text-sm font-light">
                <Phone size={18} className="text-rose-gold flex-shrink-0" />
                <span>+1 907-335-0001</span>
              </li>
              <li className="flex items-center gap-3 text-ink-light text-sm font-light">
                <Mail size={18} className="text-rose-gold flex-shrink-0" />
                <span>hello@intuitionsalon.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-rose-gold font-semibold mb-6">Hours</h4>
            <ul className="space-y-4 text-sm font-light text-ink-light">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Tuesday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Saturday</span>
                <span>9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Sunday - Monday</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-ink-light">Women-Owned</span>
              <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-ink-light">LGBTQ+ Friendly</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ink-light/70 text-xs font-light">
            &copy; {new Date().getFullYear()} Intuition Salon LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs font-light text-ink-light/70">
            <a href="#" className="hover:text-rose-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-rose-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
