import React from 'react';
import { Coffee, Camera as Instagram, Users as Facebook, MessageCircle as Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-light pt-16 pb-8 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/logo-bean.png" alt="Senja Coffee Logo" className="h-12 w-12 object-contain" style={{ filter: 'url(#remove-white) drop-shadow(0px 2px 4px rgba(0,0,0,0.5))' }} />
              <span className="font-playfair text-2xl font-bold text-cream tracking-wide">Senja <span className="text-amber">Coffee</span></span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed max-w-sm mb-6">
              Menghadirkan kehangatan dan kenyamanan di setiap seduhan. 
              Tempat terbaik untuk melepas penat dan mencari inspirasi di penghujung hari.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream/70 hover:text-amber hover:border-amber transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream/70 hover:text-amber hover:border-amber transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-cream/70 hover:text-amber hover:border-amber transition-all">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-bold text-cream mb-6">Navigasi</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-sm text-cream/70 hover:text-amber transition-colors">Home</a></li>
              <li><a href="#about" className="text-sm text-cream/70 hover:text-amber transition-colors">Tentang Kami</a></li>
              <li><a href="#menu" className="text-sm text-cream/70 hover:text-amber transition-colors">Menu</a></li>
              <li><a href="#gallery" className="text-sm text-cream/70 hover:text-amber transition-colors">Galeri</a></li>
              <li><a href="#location" className="text-sm text-cream/70 hover:text-amber transition-colors">Lokasi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-bold text-cream mb-6">Bantuan</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-cream/70 hover:text-amber transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-cream/70 hover:text-amber transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-sm text-cream/70 hover:text-amber transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="text-sm text-cream/70 hover:text-amber transition-colors">Karir</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-xs">
            &copy; {new Date().getFullYear()} Senja Coffee. All rights reserved.
          </p>
          <p className="text-cream/50 text-xs flex items-center gap-1">
            Dibuat dengan <span className="text-amber">♥</span> untuk pecinta kopi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
