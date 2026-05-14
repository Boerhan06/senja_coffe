import React from 'react';
import { motion } from 'framer-motion';
import { Camera as Instagram } from 'lucide-react';

const Gallery = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop', alt: 'Suasana Kafe', span: 'col-span-1 md:col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop', alt: 'Latte Art', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop', alt: 'Biji Kopi', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop', alt: 'Barista', span: 'col-span-1 md:col-span-2 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop', alt: 'Kopi Hitam', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=800&auto=format&fit=crop', alt: 'Kue', span: 'col-span-1 row-span-1' },
  ];

  return (
    <section id="gallery" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4">
              Galeri <span className="text-amber">Senja</span>
            </h2>
            <p className="text-cream/70 text-lg max-w-xl">
              Abadikan momen spesial Anda bersama kami. Bagikan cerita Anda dengan tagar #SenjaCoffee.
            </p>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#" 
            className="flex items-center gap-2 text-amber hover:text-amber-light transition-colors group"
          >
            <Instagram className="h-5 w-5" />
            <span className="font-medium underline underline-offset-4 decoration-amber/30 group-hover:decoration-amber">@senjacoffee</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group ${image.span}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <Instagram className="text-white h-8 w-8 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 delay-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
