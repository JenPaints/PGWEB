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
import ComingSoonPage from "./components/ComingSoonPage";
import { analytics } from "./services/analytics";

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'football' | 'basketball' | 'badminton' | 'swimming' | 'waitlist' | 'admin' | 'privacy' | 'terms' | 'cookies' | 'coming-soon'>('coming-soon');

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
      'cookies': 'Cookie Policy',
      'coming-soon': 'Coming Soon Page'
    };

    analytics.trackPageView(currentView, pageNames[currentView]);
  }, [currentView]);

  const renderCurrentView = () => {
    // Always show Coming Soon page until it's manually removed
    return <ComingSoonPage />;
  };

  // Always show Coming Soon page until manually removed
  return (
    <>
      <ComingSoonPage />
      <Toaster />
    </>
  );
}
