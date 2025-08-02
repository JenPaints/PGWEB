import { Toaster } from "sonner";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SportsStackEnhanced from "./components/SportsStackEnhanced";
import PlaygramVelocitySection from "./components/PlaygramVelocitySection";
import CoachingVideos from "./components/CoachingVideos";
import PricingSection from "./components/PricingSection";
import CoachingPhotos from "./components/CoachingPhotos";
import SportsProsBenefits from "./components/SportsProsBenefits";
import AppPreview from "./components/AppPreview";
import Testimonials from "./components/Testimonials";
import EnquirySection from "./components/EnquirySection";
import Footer from "./components/Footer";
import FootballPage from "./components/sports/FootballPage";
import BasketballPage from "./components/sports/BasketballPage";
import BadmintonPage from "./components/sports/BadmintonPage";
import SwimmingPage from "./components/sports/SwimmingPage";

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'football' | 'basketball' | 'badminton' | 'swimming'>('home');

  const renderCurrentView = () => {
    switch (currentView) {
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
            <SportsStackEnhanced />
            <CoachingVideos />
            <PricingSection />
            <CoachingPhotos />
            <SportsProsBenefits />
            <AppPreview />
            <Testimonials />
            <EnquirySection />
            <Footer />
            <PlaygramVelocitySection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      {renderCurrentView()}
      <Toaster />
    </div>
  );
}
