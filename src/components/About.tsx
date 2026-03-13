import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-nude/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://i.ibb.co/jvN3MF38/499372067-712677991509854-8415239326301932269-n.jpg"
                alt="Salon Interior"
                className="w-full h-full object-cover object-center grayscale brightness-110 contrast-125"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blush rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-gold/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-rose-gold font-semibold mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-light text-ink mb-8 leading-tight">
              A Sanctuary for Your Hair & Soul
            </h3>
            
            <p className="text-ink-light font-light text-lg mb-6 leading-relaxed">
              Located in the heart of Kenai, Alaska, Intuition Salon is a modern luxury space designed to make you feel relaxed, pampered, and beautiful. We believe in creating an atmosphere where modern decor meets exceptional service.
            </p>
            
            <p className="text-ink-light font-light text-lg mb-10 leading-relaxed">
              Our team of master stylists, including Robyn and Esther, are dedicated to providing outstanding results, from precision men's and women's cuts to flawless Balayage techniques. We are proud to be a women-owned and LGBTQ+ friendly establishment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-bg rounded-full shadow-sm text-rose-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-medium text-ink mb-1">Location</h4>
                  <p className="text-sm text-ink-light font-light">10767 Kenai Spur Hwy suite B<br />Kenai, AK 99611</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-bg rounded-full shadow-sm text-rose-gold">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-medium text-ink mb-1">Hours</h4>
                  <p className="text-sm text-ink-light font-light">Opens at 9:00 AM<br />Tuesday - Saturday</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-bg rounded-full shadow-sm text-rose-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-medium text-ink mb-1">Contact</h4>
                  <p className="text-sm text-ink-light font-light">+1 907-335-0001<br />vagaro.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-bg rounded-full shadow-sm text-rose-gold">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-medium text-ink mb-1">Values</h4>
                  <p className="text-sm text-ink-light font-light">Women-Owned<br />LGBTQ+ Friendly</p>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 text-rose-gold font-medium uppercase tracking-widest text-sm hover:text-rose-gold-dark transition-colors group"
              >
                View Our Work
                <span className="w-8 h-px bg-rose-gold group-hover:w-12 transition-all duration-300"></span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
