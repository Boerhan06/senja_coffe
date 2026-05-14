import React from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
  const menuItems = [
    {
      name: 'Espresso',
      description: 'Ekstraksi kopi murni dengan krema tebal, bold dan intens.',
      price: 'Rp 28.000',
      image: '/images/espresso.png',
      badge: '',
    },
    {
      name: 'Cappuccino',
      description: 'Paduan sempurna espresso, susu steam, dan foam lembut.',
      price: 'Rp 35.000',
      image: '/images/cappuccino.png',
      badge: 'Bestseller',
    },
    {
      name: 'Matcha Latte',
      description: 'Premium uji matcha Jepang dipadukan dengan susu segar.',
      price: 'Rp 38.000',
      image: '/images/matcha_latte.png',
      badge: 'Bestseller',
    },
    {
      name: 'Croissant',
      description: 'Pastry mentega klasik yang renyah di luar, lembut di dalam.',
      price: 'Rp 25.000',
      image: '/images/croissant.png',
      badge: '',
    },
    {
      name: 'Cheesecake',
      description: 'New York style cheesecake dengan saus berry segar.',
      price: 'Rp 42.000',
      image: '/images/cheesecake.png',
      badge: 'New',
    },
    {
      name: 'Overnight Oats',
      description: 'Oatmeal sehat direndam semalaman dengan chia seed dan buah.',
      price: 'Rp 32.000',
      image: '/images/oats.png',
      badge: '',
    },
  ];

  return (
    <section id="menu" className="py-24 bg-dark-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4"
          >
            Menu <span className="text-amber">Unggulan</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cream/70 text-lg max-w-2xl mx-auto"
          >
            Pilihan menu terbaik yang diracik sepenuh hati untuk menemani waktu santai Anda di Senja Coffee.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent"></div>
                
                {item.badge && (
                  <div className="absolute top-4 right-4 bg-amber text-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    {item.badge}
                  </div>
                )}
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <h3 className="font-playfair text-2xl font-bold text-cream">{item.name}</h3>
                  <span className="text-amber font-semibold">{item.price}</span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between">
                <p className="text-cream/70 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <button className="w-full py-2 border border-white/20 rounded-lg text-cream/90 hover:bg-amber hover:text-dark hover:border-amber transition-colors text-sm font-medium">
                  Pesan Sekarang
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
