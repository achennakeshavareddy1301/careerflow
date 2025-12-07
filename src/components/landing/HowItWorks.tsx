import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ClipboardList, Kanban, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Log your applications',
    description: 'Add each company with role, mode (on/off campus/referral), deadlines, and resume version used.',
  },
  {
    icon: Kanban,
    title: 'Track progress visually',
    description: 'Move applications across stages like Applied, Test, Shortlisted, Interview, Offer, Rejected on a drag-and-drop board.',
  },
  {
    icon: BarChart3,
    title: 'Review your journey',
    description: 'See a clean summary of where you stand — how many applications, shortlists, offers, and rejections.',
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How Careerflow works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple flow for a chaotic job search.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl p-8 border border-border card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection Lines (Desktop) */}
        <div className="hidden md:flex justify-center items-center mt-8">
          <div className="flex items-center gap-4">
            {[1, 2].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.2 }}
                className="w-32 h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 origin-left"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;