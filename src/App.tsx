import { Toaster } from "sonner";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CoachingSection from "./components/CoachingSection";
import SportsSelection from "./components/SportsSelection";
import WholeExperienceSection from "./components/WholeExperienceSection";
import BetterExperienceSection from "./components/BetterExperienceSection";
import PlaygramVelocitySection from "./components/PlaygramVelocitySection";

import PricingSection from "./components/PricingSection";
import CoachingPhotos from "./components/CoachingPhotos";
import SportsProsBenefits from "./components/SportsProsBenefits";
import AppPreview from "./components/AppPreview";
import MacBookShowcase from "./components/MacBookShowcase";
import Testimonials from "./components/Testimonials";
import EnquirySection from "./components/EnquirySection";
import Footer from "./components/Footer";
import FootballPage from "./components/sports/FootballPage";
import BasketballPage from "./components/sports/BasketballPage";
import BadmintonPage from "./components/sports/BadmintonPage";
import SwimmingPage from "./components/sports/SwimmingPage";
import SectionTransition from "./components/ui/SectionTransition";
import AdminWrapper from "./components/admin/AdminWrapper";
import { analytics } from "./services/analytics";

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'football' | 'basketball' | 'badminton' | 'swimming' | 'admin'>('home');

  // Check for admin route in URL and track page views
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/admin') {
      setCurrentView('admin');
    }
  }, []);

  // Track page views when view changes
  useEffect(() => {
    const pageNames = {
      'home': 'Home Page',
      'football': 'Football Page',
      'basketball': 'Basketball Page',
      'badminton': 'Badminton Page',
      'swimming': 'Swimming Page',
      'admin': 'Admin Dashboard'
    };

    analytics.trackPageView(currentView, pageNames[currentView]);
  }, [currentView]);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'admin':
        return <AdminWrapper />;
      case 'football':
        return <FootballPage onBack={() => setCurrentView('home')} />;
      case 'basketball':
        return <BasketballPage onBack={() => setCurrentView('home')} />;
      case 'badminton':
        return <BadmintonPage onBack={() => setCurrentView('home')} />;
      case 'swimming':
        return <SwimmingPage onBack={() => setCurrentView('home')} />;
      default:
        return (
          <>
            <HeroSection />
            <CoachingSection />

            <SectionTransition
              topGradient="from-transparent via-gray-900/40 to-gray-900"
              marginTop="-mt-24"
            >
              <SportsSelection setCurrentView={setCurrentView} />
            </SectionTransition>

            <WholeExperienceSection />

            <BetterExperienceSection />





            <SectionTransition
              topGradient="from-transparent via-gray-900/40 to-gray-900"
              marginTop="-mt-16"
            >
              <SportsProsBenefits />
            </SectionTransition>

            <SectionTransition
              topGradient="from-gray-900 via-gray-800/50 to-transparent"
              marginTop="-mt-20"
            >
              <MacBookShowcase />
            </SectionTransition>

            <SectionTransition
              topGradient="from-transparent via-gray-900/60 to-gray-900"
              marginTop="-mt-16"
            >
              <AppPreview />
            </SectionTransition>

            <SectionTransition
              topGradient="from-gray-900 via-gray-800/40 to-transparent"
              marginTop="-mt-12"
            >
              <Testimonials />
            </SectionTransition>

            <SectionTransition
              topGradient="from-transparent via-gray-900/50 to-gray-900"
              marginTop="-mt-16"
            >
              <EnquirySection />
            </SectionTransition>

            <SectionTransition
              topGradient="from-gray-900 via-gray-800/60 to-black"
              marginTop="-mt-8"
            >
              <Footer setCurrentView={setCurrentView} />
            </SectionTransition>

            <SectionTransition
              topGradient="from-black via-gray-900/30 to-black"
              marginTop="-mt-1"
            >
              <PlaygramVelocitySection />
            </SectionTransition>
          </>
        );
    }
  };

  // Don't show navbar for admin view
  if (currentView === 'admin') {
    return (
      <>
        {renderCurrentView()}
        <Toaster />
      </>
    );
  }

  return (
    <div className="min-h-screen text-white overflow-x-hidden scroll-smooth" style={{
      background: 'radial-gradient(ellipse at top left, rgba(215, 36, 63, 0.1) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(137, 211, 236, 0.08) 0%, transparent 50%), linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)'
    }}>
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="relative">
        {renderCurrentView()}
      </div>
      <Toaster />
    </div>
  );
}
