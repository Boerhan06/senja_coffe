import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Users, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Coffee className="h-6 w-6 text-amber" />, value: '25+', label: 'Varian Menu' },
    { icon: <Users className="h-6 w-6 text-amber" />, value: '10k+', label: 'Pelanggan Setia' },
    { icon: <Star className="h-6 w-6 text-amber" />, value: '4.9', label: 'Rating' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-6">
              Lebih Dari Sekadar <span className="text-amber">Kopi</span>
            </h2>
            <p className="text-cream/70 text-lg mb-6 leading-relaxed">
              Didirikan pada tahun 2021, Senja Coffee lahir dari kecintaan kami terhadap kopi Nusantara. Kami percaya bahwa setiap cangkir kopi memiliki ceritanya sendiri, dan kami ingin menjadi bagian dari cerita Anda.
            </p>
            <p className="text-cream/70 text-lg mb-10 leading-relaxed">
              Dengan suasana premium yang cozy dan warm, kami menghadirkan tempat sempurna untuk bersantai, berbincang, atau mencari inspirasi di malam hari. Nikmati racikan biji kopi pilihan terbaik oleh barista berpengalaman kami.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-4 text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <h4 className="font-playfair text-2xl font-bold text-cream">{stat.value}</h4>
                  <p className="text-sm text-cream/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-2 md:p-4 rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop" 
                alt="Suasana Senja Coffee" 
                className="w-full h-[500px] object-cover rounded-xl"
              />
              <div className="absolute -bottom-6 -left-6 glass-card p-6 bg-dark-light/80">
                <p className="font-playfair text-xl text-cream">Sejak <span className="text-amber font-bold text-2xl">2021</span></p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
