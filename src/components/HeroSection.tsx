import { motion } from "framer-motion";
import { analytics } from "../services/analytics";

interface HeroSectionProps {
  setCurrentView?: (view: 'home' | 'football' | 'basketball' | 'badminton' | 'swimming' | 'waitlist' | 'admin') => void;
}

const HeroSection = ({ setCurrentView }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-8 mb-0">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover object-center sm:object-bottom"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="https://jenpaints.art/wp-content/uploads/2025/08/IMG_7998.mov"
            type="video/mp4"
          />
          {/* Fallback for browsers that don't support video */}
          <img
            src="https://jenpaints.art/wp-content/uploads/2025/08/IMG_7998.mov"
            alt="Children playing sports"
            className="w-full h-full object-cover object-center sm:object-bottom"
          />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-left px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl lg:max-w-4xl mb-8 sm:mb-2">
          <motion.h1
            className="font-manrope text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="text-white font-thin">Where</span>
            <span className="text-white"> Passion</span>
            <span className="text-white font-thin"> Finds</span>
            <br />
            <span className="text-white font-thin">it's </span>
            <span className="text-white font-bold">Playground</span>
          </motion.h1>

          <motion.p
            className="font-manrope text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-lg sm:max-w-xl lg:max-w-2xl leading-relaxed mb-6 sm:mb-8 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Step into a sport-first experience made for every age,
            <br />
            every skill level, and every goal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                analytics.trackEvent('download_app_click', {
                  location: 'hero_section',
                  button_text: 'Download the App'
                });
                setCurrentView?.('waitlist');
              }}
              className="inline-flex items-center justify-center h-12 sm:h-14 lg:h-16 px-6 sm:px-8 lg:px-10 bg-transparent border border-white/30 hover:border-white/50 rounded-full text-sm sm:text-base lg:text-lg font-medium font-manrope text-white hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <span className="mr-1 sm:mr-2">Download the App</span>
              <img
                src="https://jenpaints.art/wp-content/uploads/2025/08/Screenshot_2025-07-13_at_22.16.29-removebg-preview.png"
                alt="Playgram Logo"
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 object-contain"
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;