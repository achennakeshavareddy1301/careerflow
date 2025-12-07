import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, FileText, Users, Award, Lightbulb } from 'lucide-react';

const stats = [
  { label: 'Total Applications', value: '32', icon: FileText },
  { label: 'Shortlists', value: '9', icon: Users },
  { label: 'Interviews', value: '4', icon: TrendingUp },
  { label: 'Offers', value: '1', icon: Award },
];

const AnalyticsHighlight = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="analytics" className="py-20 lg:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            See where you actually stand
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your job search, visualized with real numbers.
          </p>
        </motion.div>

        {/* Analytics Mock Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl card-shadow-xl border border-border overflow-hidden">
            {/* Header Bar */}
            <div className="bg-muted/50 px-6 py-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Analytics Dashboard</span>
              <div className="w-20" />
            </div>

            <div className="p-6 lg:p-8">
              {/* Stats Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-muted/50 rounded-xl p-4 text-center"
                  >
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Chart Section */}
              <div className="bg-muted/30 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-foreground">Weekly Application Trend</h4>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary" /> Applied
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-accent" /> Shortlisted
                    </span>
                  </div>
                </div>
                
                {/* Mock Chart */}
                <div className="flex items-end justify-between gap-2 h-32">
                  {[
                    { applied: 5, shortlisted: 1 },
                    { applied: 8, shortlisted: 2 },
                    { applied: 6, shortlisted: 2 },
                    { applied: 4, shortlisted: 1 },
                    { applied: 7, shortlisted: 3 },
                    { applied: 9, shortlisted: 2 },
                    { applied: 3, shortlisted: 1 },
                  ].map((week, i) => (
                    <div key={i} className="flex-1 flex gap-1 items-end">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${week.applied * 10}%` } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
                        className="flex-1 bg-primary/80 rounded-t"
                      />
                      <motion.div
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${week.shortlisted * 12}%` } : {}}
                        transition={{ duration: 0.5, delay: 0.9 + i * 0.05 }}
                        className="flex-1 bg-accent rounded-t"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <span key={day} className="text-[10px] text-muted-foreground flex-1 text-center">
                      {day}
                    </span>
                  ))}
                </div>
              </div>

              {/* Insight Block */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-start gap-4 bg-accent/10 rounded-xl p-4 border border-accent/20"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">AI Insight</h4>
                  <p className="text-sm text-muted-foreground">
                    Your shortlist rate is highest for Backend and Platform roles. Consider applying to more of these.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyticsHighlight;