import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FolderKanban, Kanban, Brain, LineChart, MessageSquareText, Sparkles } from 'lucide-react';

const features = [
  {
    icon: FolderKanban,
    title: 'Smart Application Manager',
    description: 'Store all your job applications in one place with role, source, deadlines, HR contacts, and notes.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Kanban,
    title: 'Visual Application Pipeline',
    description: 'Kanban-style board to track your applications across every stage, from first apply to final offer.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
  {
    icon: Brain,
    title: 'Resume Intelligence',
    description: 'Upload a job description and compare it with your saved resume versions. AI will score which resume fits best and why.',
    isAI: true,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: LineChart,
    title: 'Placement Analytics Dashboard',
    description: 'See how many companies you\'ve applied to, your shortlist rate, offer count, and how you\'re trending over time.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: MessageSquareText,
    title: 'Interview Memory Hub',
    description: 'Save interview questions, rounds, HR contacts, and feedback so you\'re always better prepared for the next one.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
];

const FeaturesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="py-20 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Built for serious job hunters
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to take control of your job search and land your dream role.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl p-6 lg:p-8 border border-border card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                {/* AI Badge */}
                {feature.isAI && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-accent/10 border border-accent/20">
                    <Sparkles className="w-3 h-3 text-accent" />
                    <span className="text-[10px] font-medium text-accent">AI preview</span>
                  </div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Extra CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group"
          >
            <div className="relative h-full gradient-bg rounded-2xl p-6 lg:p-8 card-shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">
                Ready to get organized?
              </h3>
              <p className="text-sm text-primary-foreground/80 mb-6">
                Join thousands of job seekers who track smarter.
              </p>
              <a
                href="#cta"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-primary bg-card rounded-full hover:bg-muted transition-colors duration-200"
              >
                Get started free
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;