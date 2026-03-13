import { motion } from 'motion/react';

const images = [
  'https://i.ibb.co/MxgBwXy7/455906479-17847251796275622-2576530552132273748-n.jpg',
  'https://i.ibb.co/VpkCLmHS/485971931-644592208318433-6758515386755095518-n.jpg',
  'https://i.ibb.co/hRh6yrjQ/486011535-643698835074437-1450131879339462354-n.jpg',
  'https://i.ibb.co/FbmPbjtR/535890538-762362746541378-1694248862797700784-n.jpg',
  'https://i.ibb.co/PZ0mgMQN/468094735-17862031983275622-2405038587657057249-n.jpg',
  'https://i.ibb.co/fYPLr0J8/645598005-917341804376804-488611687515073432-n.jpg',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-rose-gold font-semibold mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-light text-ink mb-6">Our Masterpieces</h3>
          <div className="w-24 h-px bg-rose-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl aspect-square"
            >
              <img
                src={src}
                alt={`Salon Work ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale brightness-110 contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <span className="text-white font-serif text-lg tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  View Work
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
