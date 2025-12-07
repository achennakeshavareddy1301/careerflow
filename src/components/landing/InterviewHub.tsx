import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Calendar, User, CheckCircle } from 'lucide-react';

const InterviewHub = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const questions = [
    'Walk me through your most challenging project',
    'How do you handle tight deadlines?',
    'Explain the difference between REST and GraphQL',
    'Tell me about a time you worked with a difficult team member',
  ];

  return (
    <section className="py-20 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Never forget what happened in any interview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Keep all your interview notes, questions, and contacts organized in one place.
          </p>
        </motion.div>

        {/* Interview Notes Mock */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card rounded-2xl card-shadow-xl border border-border overflow-hidden">
            {/* Header */}
            <div className="bg-muted/50 px-6 py-4 border-b border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">TechNova – SDE 1</h3>
                    <p className="text-sm text-muted-foreground">Technical Round 1</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/15 text-accent">
                  Shortlisted
                </span>
              </div>
            </div>

            <div className="p-6">
              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Dec 5, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>Sarah Chen (HR) • sarah@technova.io</span>
                </div>
              </div>

              {/* Questions */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Questions Asked</h4>
                <ul className="space-y-2">
                  {questions.map((question, index) => (
                    <motion.li
                      key={question}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{question}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Notes */}
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Your Notes</h4>
                <p className="text-sm text-muted-foreground">
                  Interviewer was friendly and focused on problem-solving skills. They liked my explanation of the microservices architecture from my last project. Follow up on system design concepts before the next round.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InterviewHub;