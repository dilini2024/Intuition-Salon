import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Lisa Marie Hansen',
    role: 'Local Guide',
    text: 'I recently had the pleasure of changing my husband’s hair care from the Barber Shop to going to Intuition Salon, and I must say, the experience exceeded our expectations in every way.',
    rating: 5,
  },
  {
    name: 'Katie Archer Olson',
    role: 'Local Guide',
    text: 'Ester nailed the Balayage with color. It is with great pleasure that I write this review for our exceptional stylist. The modern decor and comfortable seating made us feel relaxed and pampered.',
    rating: 5,
  },
  {
    name: 'Merlyn L',
    role: 'Client',
    text: 'Amazing haircut and experience. Robyn is a master at men\'s hair and women\'s. Best color and dye jobs I\'ve ever seen. She has multiple times shaved lines in my hair perfect and I\'m always ecstatic with her efforts.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-nude/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-rose-gold font-semibold mb-4">Client Love</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-light text-ink mb-6">4.8 Stars on Google</h3>
          <div className="w-24 h-px bg-rose-gold mx-auto mb-8"></div>
          <div className="flex justify-center items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="text-rose-gold fill-rose-gold" />
            ))}
            <span className="text-ink-light font-medium ml-2">(16 Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-blush p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote size={40} className="text-nude absolute top-6 right-6 opacity-50" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-rose-gold fill-rose-gold" />
                ))}
              </div>
              <p className="text-ink-light font-light leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-serif font-medium text-ink text-lg">{review.name}</h4>
                <p className="text-xs uppercase tracking-widest text-rose-gold mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
