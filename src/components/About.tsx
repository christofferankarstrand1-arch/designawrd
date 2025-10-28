import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Award, Users, Target, TrendingUp } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    value: "15+",
    label: "Års erfarenhet"
  },
  {
    icon: Users,
    value: "200+",
    label: "Nöjda kunder"
  },
  {
    icon: Target,
    value: "500+",
    label: "Genomförda projekt"
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Kundnöjdhet"
  }
];

const timeline = [
  {
    year: "2009",
    title: "Grundandet",
    description: "Eximius Partner AB grundades med visionen att bli Sveriges ledande partner inom administrativ rådgivning."
  },
  {
    year: "2012",
    title: "Expansion",
    description: "Utökade vårt team och serviceutbud för att möta den växande efterfrågan från svenska företag."
  },
  {
    year: "2015",
    title: "Nationell närvaro",
    description: "Etablerade kontor i flera svenska städer och stärkte vår position på marknaden."
  },
  {
    year: "2018",
    title: "Digital transformation",
    description: "Implementerade moderna digitala verktyg och processer för att effektivisera våra tjänster."
  },
  {
    year: "2021",
    title: "Branschledare",
    description: "Blev erkända som en av Sveriges mest pålitliga partners inom företagsrådgivning."
  },
  {
    year: "2025",
    title: "Hållbar framtid",
    description: "Fortsätter att utvecklas med fokus på hållbarhet och långsiktig värdeskapande för våra kunder."
  }
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <section ref={ref} className="min-h-screen bg-neutral-900 text-white">
        <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-32">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mb-24 space-y-8"
          >
            <div className="text-neutral-400 tracking-[0.2em] uppercase text-xs">
              Om oss
            </div>
            <h2
              className="text-white text-5xl md:text-6xl lg:text-7xl tracking-tight"
              style={{ fontWeight: 300, lineHeight: 1.1 }}
            >
              Byggd på erfarenhet,<br />
              driven av resultat
            </h2>
            <div className="h-px w-16 bg-white/30" />
            <p className="text-neutral-300 text-lg max-w-2xl" style={{ lineHeight: 1.8 }}>
              Sedan 2009 har vi hjälpt svenska företag att växa och utvecklas genom strategisk rådgivning 
              och djup branschkunskap.
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-24">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-4 text-center lg:text-left"
                >
                  <div className="flex justify-center lg:justify-start">
                    <div className="w-12 h-12 flex items-center justify-center border border-white/20 bg-white/5">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div
                      className="text-white text-4xl md:text-5xl"
                      style={{ fontWeight: 300 }}
                    >
                      {achievement.value}
                    </div>
                    <div className="text-neutral-400 text-sm tracking-wide">
                      {achievement.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <button
              onClick={() => setIsDialogOpen(true)}
              className="group relative px-12 py-5 border border-white/30 text-white overflow-hidden transition-all duration-500 hover:border-white/60"
            >
              <span className="relative z-10 tracking-wide">Vår resa</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Timeline Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl tracking-tight" style={{ fontWeight: 300 }}>
              Vår resa
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-8 space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-neutral-200 pb-8 last:pb-0"
              >
                {/* Year badge */}
                <div className="absolute -left-[1px] top-0 w-2 h-2 bg-neutral-900 transform -translate-x-1/2" />
                
                <div className="space-y-3">
                  <div className="text-neutral-500 text-sm tracking-[0.2em] uppercase">
                    {item.year}
                  </div>
                  <h3 className="text-neutral-900 text-2xl tracking-tight" style={{ fontWeight: 400 }}>
                    {item.title}
                  </h3>
                  <p className="text-neutral-600" style={{ lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <p className="text-neutral-500 text-sm text-center" style={{ lineHeight: 1.7 }}>
              Tack för att ni har varit en del av vår resa. Vi ser fram emot att fortsätta bygga framgång tillsammans.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
