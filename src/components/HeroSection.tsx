import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    console.log('Setting up video...');

    const handleLoadedData = () => {
      console.log('Video data loaded');
      setVideoLoaded(true);
      setVideoError(false);
    };

    const handleCanPlay = async () => {
      console.log('Video can play, attempting to start...');
      try {
        await video.play();
        console.log('Video started playing');
        setVideoLoaded(true);
        setVideoError(false);
      } catch (error) {
        console.error('Failed to play video:', error);
        setVideoError(true);
        setShowFallback(true);
      }
    };

    const handleError = (e: Event) => {
      console.error('Video error:', e);
      setVideoError(true);
      setShowFallback(true);
    };

    const handleLoadStart = () => {
      console.log('Video loading started');
      setShowFallback(false);
    };

    // Add event listeners
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('loadstart', handleLoadStart);

    // Set a timeout to show fallback if video takes too long
    const fallbackTimer = setTimeout(() => {
      if (!videoLoaded && !videoError) {
        console.log('Video taking too long, showing fallback');
        setShowFallback(true);
      }
    }, 5000);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadstart', handleLoadStart);
      clearTimeout(fallbackTimer);
    };
  }, [videoLoaded, videoError]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Always show fallback image first, then overlay video when ready */}
        <img
          src="https://jenpaints.art/wp-content/uploads/2025/07/image-3.png"
          alt="Sports Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Video overlay */}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded && !videoError ? 'opacity-40' : 'opacity-0'
            }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          crossOrigin="anonymous"
        >
          <source
            src="https://jenpaints.art/wp-content/uploads/2025/08/Cinematic-Sports-Video-Basketball-Sony-A7SIII-Brunel-Tutonda-Shoot-by-mathiskinny-Mathiskinny-1080p-h264-youtube.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Manual play button if autoplay fails */}
        {!videoLoaded && !videoError && (
          <button
            onClick={async () => {
              const video = videoRef.current;
              if (video) {
                try {
                  await video.play();
                  setVideoLoaded(true);
                } catch (error) {
                  console.error('Manual play failed:', error);
                  setVideoError(true);
                }
              }
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/30 backdrop-blur-lg rounded-full p-4 transition-all"
          >
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        )}

        {/* Debug info (remove in production) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="absolute top-4 left-4 bg-black/50 text-white p-2 text-xs rounded z-50">
            Video Status: {videoLoaded ? 'Loaded' : videoError ? 'Error' : 'Loading...'}
            {videoError && <div className="text-red-400">Using fallback image</div>}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-[#D7243F] via-[#89D3EC] to-[#D7243F] bg-clip-text text-transparent">
              Unleash Your
            </span>
            <br />
            <span className="text-white">Athletic Potential</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Transform your game with world-class coaching in Football, Basketball, Badminton & Swimming.
            <span className="text-[#89D3EC] font-semibold"> Join the athletes</span> of Playgram.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(215, 36, 63, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#D7243F] to-[#89D3EC] rounded-full text-white font-bold text-lg shadow-2xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                <span>Download App Now</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#89D3EC] to-[#D7243F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#89D3EC] text-[#89D3EC] rounded-full font-bold text-lg hover:bg-[#89D3EC] hover:text-gray-900 transition-all duration-300"
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </motion.div>


      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#89D3EC] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#89D3EC] rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
