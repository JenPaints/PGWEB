import { Toaster } from "sonner";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SportsStackEnhanced from "./components/SportsStackEnhanced";
import PlaygramVelocitySection from "./components/PlaygramVelocitySection";
import CoachingVideos from "./components/CoachingVideos";
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

            <SectionTransition
              topGradient="from-transparent via-gray-900/40 to-gray-900"
              marginTop="-mt-24"
            >
              <SportsStackEnhanced />
            </SectionTransition>

            <SectionTransition
              topGradient="from-gray-900 via-gray-800/70 to-transparent"
              marginTop="-mt-20"
            >
              <CoachingVideos />
            </SectionTransition>

            <SectionTransition
              topGradient="from-transparent via-gray-900/50 to-gray-900"
              marginTop="-mt-16"
            >
              <PricingSection />
            </SectionTransition>

            <SectionTransition
              topGradient="from-gray-900 via-gray-800/60 to-transparent"
              marginTop="-mt-12"
            >
              <CoachingPhotos />
            </SectionTransition>

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
              topGradient="from-gray-900 to-black"
              marginTop="-mt-8"
            >
              <Footer setCurrentView={setCurrentView} />
            </SectionTransition>

            <PlaygramVelocitySection />
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden scroll-smooth">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="relative">
        {renderCurrentView()}
      </div>
      <Toaster />
    </div>
  );
}
