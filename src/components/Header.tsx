import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="flex items-center gap-1">
              <div className="w-2.5 h-2.5 bg-[#B4D12E] rotate-45" />
              <div className="w-2.5 h-2.5 bg-[#F58220] rotate-45" />
              <div className="w-2.5 h-2.5 bg-[#FFD100] rotate-45" />
              <div className="w-2.5 h-2.5 bg-[#0071BC] rotate-45" />
            </div>
            <span className="text-white tracking-wide text-sm">EXIMIUS PARTNER</span>
          </motion.div>

          {/* Contact Button */}
          <motion.a
            href="mailto:info@expab.se"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white text-sm tracking-wide px-6 py-2.5 border border-white/30 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
          >
            Kontakt
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
