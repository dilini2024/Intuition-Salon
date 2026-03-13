import { motion } from 'motion/react';
import { Calendar, MessageCircle, Clock, Scissors } from 'lucide-react';

export default function Booking() {
  return (
    <section id="book" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-rose-gold font-semibold mb-4">Reservation</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-light text-ink mb-6">Book Your Appointment</h3>
          <div className="w-24 h-px bg-rose-gold mx-auto mb-8"></div>
          <p className="text-ink-light font-light max-w-2xl mx-auto">
            Choose your preferred booking method. Use our online form for a complete request, or message us directly on WhatsApp for quick inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-nude/20 p-10 md:p-14 rounded-[2rem] shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-gold focus:border-transparent outline-none transition-all bg-white"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-gold focus:border-transparent outline-none transition-all bg-white"
                    placeholder="(907) 335-0001"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-ink mb-2">Service Needed</label>
                <div className="relative">
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 focus:ring-2 focus:ring-rose-gold focus:border-transparent outline-none transition-all bg-bg appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="haircut">Haircut & Styling</option>
                    <option value="color">Color & Balayage</option>
                    <option value="treatment">Hair Treatment</option>
                    <option value="special">Special Occasion Styling</option>
                    <option value="other">Other</option>
                  </select>
                  <Scissors className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-ink mb-2">Preferred Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-gold focus:border-transparent outline-none transition-all bg-white"
                    />
                    <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-ink mb-2">Preferred Time</label>
                  <div className="relative">
                    <input
                      type="time"
                      id="time"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-gold focus:border-transparent outline-none transition-all bg-white"
                    />
                    <Clock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">Additional Notes</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 focus:ring-2 focus:ring-rose-gold focus:border-transparent outline-none transition-all bg-bg resize-none"
                  placeholder="Any specific requests or details..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-ink hover:bg-ink-light text-white px-8 py-4 rounded-xl text-sm uppercase tracking-widest transition-colors shadow-md"
              >
                Request Appointment
              </button>
            </form>
          </motion.div>

          {/* WhatsApp Alternative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center items-center text-center bg-blush/30 p-10 md:p-14 rounded-[2rem] border border-rose-gold/20"
          >
            <div className="w-24 h-24 bg-bg rounded-full flex items-center justify-center shadow-lg mb-8">
              <MessageCircle size={48} className="text-green-500" />
            </div>
            <h3 className="text-3xl font-serif font-medium text-ink mb-4">Prefer to Chat?</h3>
            <p className="text-ink-light font-light mb-10 leading-relaxed max-w-sm">
              Message us directly on WhatsApp to check availability, ask questions, or book your appointment instantly.
            </p>
            <a
              href="https://wa.me/19073350001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            
            <div className="mt-12 pt-8 border-t border-rose-gold/20 w-full">
              <p className="text-sm text-ink-light font-light mb-2">Or book online via Vagaro:</p>
              <a 
                href="https://vagaro.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-rose-gold hover:text-rose-gold-dark font-medium uppercase tracking-widest text-sm underline underline-offset-4"
              >
                Vagaro Booking Portal
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
