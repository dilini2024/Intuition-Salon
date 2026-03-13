import { motion } from 'motion/react';
import { Scissors, Sparkles, Droplets, Palette } from 'lucide-react';

const services = [
  {
    title: 'Haircuts & Styling',
    description: 'Precision cuts for men and women, tailored to your unique style and face shape.',
    icon: <Scissors size={32} className="text-rose-gold mb-4" />,
    price: 'From $45',
  },
  {
    title: 'Color & Balayage',
    description: 'Expert color services, including our highly-rated Balayage technique for a natural, sun-kissed look.',
    icon: <Palette size={32} className="text-rose-gold mb-4" />,
    price: 'From $120',
  },
  {
    title: 'Treatments',
    description: 'Deep conditioning and restorative treatments to keep your hair healthy and vibrant.',
    icon: <Droplets size={32} className="text-rose-gold mb-4" />,
    price: 'From $35',
  },
  {
    title: 'Special Occasions',
    description: 'Elegant styling and updos for weddings, proms, and other memorable events.',
    icon: <Sparkles size={32} className="text-rose-gold mb-4" />,
    price: 'From $85',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-rose-gold font-semibold mb-4">Our Offerings</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-light text-ink mb-6">Premium Services</h3>
          <div className="w-24 h-px bg-rose-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-nude/30 p-8 rounded-2xl hover:bg-blush transition-colors duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-bg rounded-full shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-serif font-medium text-ink mb-3">{service.title}</h4>
                <p className="text-ink-light font-light text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <span className="text-rose-gold font-medium uppercase tracking-wider text-sm">
                  {service.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#book"
            className="inline-block border border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest transition-colors"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
