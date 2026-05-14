import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl md:text-5xl font-bold text-cream mb-4"
          >
            Kunjungi <span className="text-amber">Kami</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-cream/70 text-lg"
          >
            Temukan kami dan nikmati secangkir kopi hangat hari ini.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="glass-card p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-amber/10 flex items-center justify-center mb-4 text-amber">
                <MapPin className="h-7 w-7" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-cream mb-2">Alamat</h3>
              <p className="text-cream/70 text-sm">
                Jl. Sudirman No. 12,<br />
                Jakarta Selatan, 12190
              </p>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-amber/10 flex items-center justify-center mb-4 text-amber">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-cream mb-2">Jam Buka</h3>
              <p className="text-cream/70 text-sm">
                Senin–Jumat: 07.00–22.00<br />
                Sabtu–Minggu: 08.00–23.00
              </p>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-amber/10 flex items-center justify-center mb-4 text-amber">
                <Phone className="h-7 w-7" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-cream mb-2">WhatsApp</h3>
              <p className="text-cream/70 text-sm mb-3">0812-3456-7890</p>
              <a href="https://wa.me/628123456789" className="text-xs text-amber font-semibold hover:underline">Chat Sekarang</a>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-amber/10 flex items-center justify-center mb-4 text-amber">
                <Mail className="h-7 w-7" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-cream mb-2">Email</h3>
              <p className="text-cream/70 text-sm">hello@senjacoffee.com</p>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-2 h-full min-h-[400px]"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.2403233216!2d106.7410471026048!3d-6.229741893321591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x100c5ea17d3121!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '0.75rem', filter: 'invert(90%) hue-rotate(180deg) contrast(80%)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Senja Coffee"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
