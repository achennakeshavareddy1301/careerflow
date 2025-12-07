import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Globe, Users, Code } from 'lucide-react';

const personas = [
  {
    icon: GraduationCap,
    title: 'Final-year college students',
    description: 'Preparing for campus placements with dozens of companies to track.',
  },
  {
    icon: Globe,
    title: 'Off-campus job hunters',
    description: 'Applying across multiple job portals like LinkedIn, Indeed, and Naukri.',
  },
  {
    icon: Users,
    title: 'Referral-heavy candidates',
    description: 'Managing opportunities from friends, alumni, and professional networks.',
  },
  {
    icon: Code,
    title: 'Bootcamp graduates',
    description: 'Organizing their intensive job search after completing coding programs.',
  },
];

const WhoUsesCareerflow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="for-students" className="py-20 lg:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Who uses Careerflow?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built specifically for ambitious job seekers who refuse to let opportunities slip away.
          </p>
        </motion.div>

        {/* Persona Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 border border-border card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1 h-full text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <persona.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {persona.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {persona.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoUsesCareerflow;