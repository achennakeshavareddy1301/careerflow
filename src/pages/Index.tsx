import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import HowItWorks from '@/components/landing/HowItWorks';
import FeaturesGrid from '@/components/landing/FeaturesGrid';
import AnalyticsHighlight from '@/components/landing/AnalyticsHighlight';
import InterviewHub from '@/components/landing/InterviewHub';
import WhoUsesCareerflow from '@/components/landing/WhoUsesCareerflow';
import FinalCTA from '@/components/landing/FinalCTA';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturesGrid />
      <AnalyticsHighlight />
      <InterviewHub />
      <WhoUsesCareerflow />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;