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
import WaitlistPage from "./components/WaitlistPage";
import SectionTransition from "./components/ui/SectionTransition";
import AdminWrapper from "./components/admin/AdminWrapper";
import PrivacyPolicy from "./components/legal/PrivacyPolicy";
import TermsOfService from "./components/legal/TermsOfService";
import CookiePolicy from "./components/legal/CookiePolicy";
import { analytics } from "./services/analytics";

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'football' | 'basketball' | 'badminton' | 'swimming' | 'waitlist' | 'admin' | 'privacy' | 'terms' | 'cookies'>('home');

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
      'waitlist': 'Waitlist Page',
      'admin': 'Admin Dashboard',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service',
      'cookies': 'Cookie Policy'
    };

    analytics.trackPageView(currentView, pageNames[currentView]);
  }, [currentView]);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'admin':
        return <AdminWrapper />;
      case 'football':
        return <FootballPage onBack={() => setCurrentView('home')} setCurrentView={setCurrentView} />;
      case 'basketball':
        return <BasketballPage onBack={() => setCurrentView('home')} setCurrentView={setCurrentView} />;
      case 'badminton':
        return <BadmintonPage onBack={() => setCurrentView('home')} />;
      case 'swimming':
        return <SwimmingPage onBack={() => setCurrentView('home')} />;
      case 'waitlist':
        return <WaitlistPage onBack={() => setCurrentView('home')} />;
      case 'privacy':
        return <PrivacyPolicy setCurrentView={setCurrentView} />;
      case 'terms':
        return <TermsOfService setCurrentView={setCurrentView} />;
      case 'cookies':
        return <CookiePolicy setCurrentView={setCurrentView} />;
      default:
        return (
          <>
            <HeroSection setCurrentView={setCurrentView} />
            <CoachingSection />

            <SectionTransition
              topGradient="from-transparent via-gray-900/40 to-gray-900"
              marginTop="-mt-24"
            >
              <SportsSelection setCurrentView={setCurrentView} />
            </SectionTransition>

            <WholeExperienceSection />


          


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

          </>
        );
    }
  };

  // Don't show navbar for admin and legal pages
  if (currentView === 'admin' || currentView === 'privacy' || currentView === 'terms' || currentView === 'cookies') {
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
