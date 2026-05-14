import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "Tempatnya cozy banget buat nugas malam. Kopinya juara, terutama Cappuccino-nya yang creamy. Pelayanannya juga ramah."
    },
    {
      id: 2,
      name: "Siti Aminah",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "Vibesnya beneran kayak artisan coffee di luar negeri. Pas banget buat nongkrong bareng temen atau sekadar me-time baca buku."
    },
    {
      id: 3,
      name: "Rizky Pratama",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 4,
      text: "Matcha Latte di sini salah satu yang terbaik yang pernah saya coba. Gak terlalu manis dan rasa matchanya dapet banget."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-dark-light relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-32 w-64 h-64 rounded-full bg-amber/5 blur-[80px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4"
          >
            Kata <span className="text-amber">Mereka</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cream/70 text-lg"
          >
            Cerita hangat dari pelanggan setia Senja Coffee.
          </motion.p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12 text-center relative"
            >
              <Quote className="absolute top-6 left-6 text-white/5 h-20 w-20" />
              
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber fill-amber" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-cream/90 italic mb-8 relative z-10 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex flex-col items-center">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name} 
                  className="w-16 h-16 rounded-full border-2 border-amber/50 mb-3"
                />
                <h4 className="font-playfair text-lg font-bold text-cream">
                  {testimonials[currentIndex].name}
                </h4>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full glass hover:bg-amber hover:text-dark transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'bg-amber w-6' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full glass hover:bg-amber hover:text-dark transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
