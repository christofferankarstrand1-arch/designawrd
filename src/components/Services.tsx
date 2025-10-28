import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen bg-white">
      {/* Services Grid */}
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="text-neutral-500 tracking-[0.2em] uppercase text-xs">
                Expertis
              </div>
              <h2
                className="text-neutral-900 text-5xl md:text-6xl lg:text-7xl tracking-tight"
                style={{ fontWeight: 300, lineHeight: 1.1 }}
              >
                Administrativ<br />
                Rådgivning
              </h2>
            </div>

            <div className="h-px w-16 bg-neutral-300" />

            <div className="space-y-8 text-neutral-600 max-w-xl" style={{ lineHeight: 1.8 }}>
              <p className="text-lg">
                Vår vision är att verka för ett välmående näringsliv i Sverige.
              </p>
              
              <p className="text-lg">
                Rådgivning som ökar värdet på ditt bolag och den ekonomiska behållningen för dig som ägare.
              </p>

              <p>
                Vi erbjuder strategisk rådgivning som hjälper dig att planera, prioritera och utföra dina 
                viktiga affärsstrategier på ett effektivt sätt. På så vis stöttar vi den långsiktiga 
                utvecklingen av din verksamhet.
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-100/20 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjE2NTQzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional team"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>

      {/* Secondary Image Section */}
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="relative aspect-[3/2] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1728581665814-684c66cb036d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNTY3NzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Office interior"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="relative aspect-[3/2] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1759593218431-6f1585bc14de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYxNTgzNzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Executive workspace"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
