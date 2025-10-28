import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen bg-neutral-50 flex items-center">
      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-16 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center space-y-16"
        >
          <div className="space-y-8">
            <div className="text-neutral-500 tracking-[0.2em] uppercase text-xs">
              Kontakt
            </div>
            
            <h2
              className="text-neutral-900 text-5xl md:text-6xl lg:text-7xl tracking-tight"
              style={{ fontWeight: 300, lineHeight: 1.1 }}
            >
              Låt oss skapa<br />
              värde tillsammans
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="h-px w-24 bg-neutral-300" />
          </div>

          <motion.a
            href="mailto:info@expab.se"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-4 text-neutral-900 text-2xl md:text-3xl group relative overflow-hidden py-4"
          >
            <Mail className="w-6 h-6 text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300" />
            <span className="relative">
              info@expab.se
              <span className="absolute bottom-0 left-0 w-0 h-px bg-neutral-900 group-hover:w-full transition-all duration-500" />
            </span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-16 text-neutral-500 text-sm"
          >
            <p style={{ lineHeight: 1.8 }}>
              Vi är här för att hjälpa dig navigera i affärsvärlden<br />
              och utveckla ditt företag mot framgång.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
