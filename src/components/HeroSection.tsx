import { motion } from "framer-motion";
import { analytics } from "../services/analytics";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden pt-20 pb-8 mb-0">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover object-bottom"
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
            className="w-full h-full object-cover object-bottom"
          />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-left px-6 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl mb-2">
          <motion.h1
            className="font-manrope text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="text-white">Where </span>
            <span className="text-white font-bold">PASSION</span>
            <span className="text-white"> finds</span>
            <br />
            <span className="text-white">it's </span>
            <span className="text-white font-bold">PLAYGROUND</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-white/80 max-w-md leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Step into a sport-first experience made for every age,
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
              }}
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#D7243F_0%,#89D3EC_50%,#D7243F_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-white hover:text-gray-900 transition-all duration-300">
                <span className="mr-2">Download the App</span>
                <img
                  src="https://jenpaints.art/wp-content/uploads/2025/08/Screenshot_2025-07-13_at_22.16.29-removebg-preview.png"
                  alt="Playgram Logo"
                  className="w-4 h-4 object-contain"
                />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;