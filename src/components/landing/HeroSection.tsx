import { motion } from 'framer-motion';
import { ArrowRight, Play, Briefcase, FileText, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30 pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <Briefcase className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Job Application Control Center</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Your job search,{' '}
              <span className="gradient-text">finally organized.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Careerflow gives you a clean, visual system to track every application, 
              deadline, resume version, and interview in one place.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6"
            >
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground gradient-bg rounded-full hover:opacity-90 transition-all duration-200 hover:scale-105 glow-shadow"
              >
                Start tracking my applications
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground bg-card border border-border rounded-full hover:border-primary/30 hover:bg-muted transition-all duration-200"
              >
                <Play className="w-5 h-5 text-primary" />
                View demo
              </a>
            </motion.div>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-muted-foreground"
            >
              Perfect for final-year students and early-career job seekers juggling multiple applications.
            </motion.p>
          </motion.div>

          {/* Right Column - Mock UI */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            <div className="animate-float">
              <ProductMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProductMockup = () => {
  const stages = [
    { name: 'Applied', count: 12, color: 'bg-muted-foreground' },
    { name: 'Test', count: 5, color: 'bg-secondary' },
    { name: 'Shortlisted', count: 4, color: 'bg-primary' },
    { name: 'Interview', count: 3, color: 'bg-accent' },
    { name: 'Offer', count: 1, color: 'bg-green-500' },
    { name: 'Rejected', count: 4, color: 'bg-destructive/70' },
  ];

  const sampleCards = [
    { company: 'TechNova', role: 'SDE 1', stage: 'Interview' },
    { company: 'DataSync', role: 'Backend Dev', stage: 'Shortlisted' },
    { company: 'CloudMesh', role: 'Full Stack', stage: 'Applied' },
  ];

  return (
    <div className="relative">
      {/* Main Kanban Card */}
      <div className="bg-card rounded-2xl card-shadow-xl p-4 lg:p-6 border border-border">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="text-xs text-muted-foreground font-medium">Application Pipeline</span>
        </div>

        {/* Mini Kanban */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
          {stages.map((stage) => (
            <div key={stage.name} className="text-center">
              <div className={`w-full h-1.5 ${stage.color} rounded-full mb-1.5 opacity-80`} />
              <p className="text-[10px] lg:text-xs font-medium text-foreground">{stage.name}</p>
              <p className="text-[10px] text-muted-foreground">{stage.count}</p>
            </div>
          ))}
        </div>

        {/* Sample Cards */}
        <div className="space-y-2">
          {sampleCards.map((card, index) => (
            <motion.div
              key={card.company}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{card.company}</p>
                  <p className="text-xs text-muted-foreground">{card.role}</p>
                </div>
              </div>
              <span className={`text-[10px] font-medium px-2 py-1 rounded-full ${
                card.stage === 'Interview' ? 'bg-accent/15 text-accent' :
                card.stage === 'Shortlisted' ? 'bg-primary/15 text-primary' :
                'bg-muted-foreground/15 text-muted-foreground'
              }`}>
                {card.stage}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Resume Fit Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute -bottom-6 -left-4 lg:-left-8 bg-card rounded-xl card-shadow-lg p-4 border border-border animate-float-delayed"
      >
        <div className="flex items-center gap-3 mb-2">
          <FileText className="w-5 h-5 text-secondary" />
          <span className="text-xs font-medium text-foreground">Resume vs JD match</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '82%' }}
              transition={{ delay: 1, duration: 0.8 }}
              className="h-full gradient-bg rounded-full"
            />
          </div>
          <span className="text-sm font-bold text-primary">82%</span>
        </div>
        <p className="text-[10px] text-muted-foreground mt-1">AI preview</p>
      </motion.div>

      {/* Floating Analytics Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="absolute -top-4 -right-4 lg:-right-8 bg-card rounded-xl card-shadow-lg p-4 border border-border"
      >
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-4 h-4 text-accent" />
          <span className="text-xs font-medium text-foreground">Weekly Progress</span>
        </div>
        <div className="flex items-end gap-1 h-10">
          {[40, 25, 60, 35, 80, 55, 70].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: 1 + i * 0.05, duration: 0.3 }}
              className={`w-2 rounded-t ${i === 4 ? 'bg-primary' : 'bg-muted-foreground/30'}`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;