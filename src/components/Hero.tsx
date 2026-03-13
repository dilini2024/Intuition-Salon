import { motion } from 'motion/react';
import { Calendar, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nude">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.ibb.co/ynQ5hsRR/588946321-843326028445049-2452236469135175839-n.jpg"
          alt="Luxury Salon Interior"
          className="w-full h-full object-cover opacity-70 grayscale brightness-150 contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nude/50 via-nude/30 to-nude/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel p-10 md:p-16 rounded-3xl max-w-3xl shadow-xl"
        >
          <h2 className="text-sm md:text-base uppercase tracking-[0.3em] text-rose-gold font-semibold mb-4">
            Welcome to
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-ink mb-6 leading-tight">
            Intuition Salon
          </h1>
          <p className="text-lg md:text-xl text-ink-light font-light mb-10 max-w-xl mx-auto leading-relaxed">
            A modern luxury hair and beauty salon offering premium services in Kenai, Alaska. Experience relaxation, pampering, and outstanding results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#book"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-rose-gold hover:bg-rose-gold-dark text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Calendar size={18} />
              Book Appointment
            </a>
            <a
              href="https://wa.me/19073350001"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-nude hover:bg-blush text-ink px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all shadow-sm border border-rose-gold/20 hover:shadow-md transform hover:-translate-y-0.5"
            >
              <MessageCircle size={18} className="text-green-500" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest text-ink-light mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-ink-light/30 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-rose-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
