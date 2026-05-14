import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.div 
      className="fixed bottom-8 right-4 md:bottom-10 md:right-10 z-[99]"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
    >
      <a 
        href="https://wa.me/628123456789" 
        target="_blank" 
        rel="noreferrer"
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors group relative"
      >
        {/* Pulse effect */}
        <span className="absolute top-0 left-0 inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        
        <MessageCircle className="h-6 w-6 md:h-7 md:w-7 relative z-10" />
        
        {/* Tooltip (Hidden on mobile) */}
        <span className="hidden md:block absolute right-full mr-4 bg-dark/90 text-cream text-xs px-3 py-1.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm border border-white/10">
          Chat dengan kami!
        </span>
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
