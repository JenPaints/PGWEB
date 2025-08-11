import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, MapPin } from "lucide-react";

interface NavbarProps {
  currentView: 'home' | 'football' | 'basketball' | 'badminton' | 'swimming' | 'waitlist' | 'admin';
  setCurrentView: (view: 'home' | 'football' | 'basketball' | 'badminton' | 'swimming' | 'waitlist' | 'admin') => void;
}

const Navbar = ({ currentView, setCurrentView }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [locationDropdown, setLocationDropdown] = useState(false);
  const [coachingDropdown, setCoachingDropdown] = useState(false);
  const [mobileLocationDropdown, setMobileLocationDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Bangalore');

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-gray-700/30"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(215, 36, 63, 0.08) 0%, transparent 50%), radial-gradient(ellipse at right, rgba(137, 211, 236, 0.06) 0%, transparent 50%), linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(10, 10, 10, 0.8) 100%)',
        fontFamily: 'Manrope',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: 'normal',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setCurrentView('home')}
          >
            <div className="flex items-center space-x-2">
              <img
                src="https://jenpaints.art/wp-content/uploads/2025/08/IMG_6671-removebg-preview.png"
                alt="Playgram Logo"
                className="w-32 h-32 object-contain"
              />

            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setCurrentView('home')}
              className="text-white hover:text-[#86D5F0] transition-colors font-medium text-sm"
            >
              Home
            </motion.button>

            {/* Coaching Dropdown - Optimized for all devices */}
            <div
              className="relative"
              onMouseEnter={() => setCoachingDropdown(true)}
              onMouseLeave={() => setCoachingDropdown(false)}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCoachingDropdown(!coachingDropdown)}
                className="text-white hover:text-[#86D5F0] transition-all duration-200 font-medium flex items-center space-x-1 px-2 py-1 rounded-md hover:bg-white/5"
              >
                <span className="text-sm">Coaching</span>
                <svg className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-200 ${coachingDropdown ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>

              <AnimatePresence>
                {coachingDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-3 w-52 lg:w-56 backdrop-blur-xl rounded-xl border border-gray-700/30 shadow-2xl overflow-hidden z-50"
                    style={{
                      background: 'radial-gradient(ellipse at top, rgba(215, 36, 63, 0.12) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(137, 211, 236, 0.1) 0%, transparent 50%), linear-gradient(180deg, rgba(0, 0, 0, 0.96) 0%, rgba(10, 10, 10, 0.96) 100%)',
                      fontFamily: 'Manrope',
                      fontSize: '14px',
                      fontWeight: 500,
                      lineHeight: 'normal',
                    }}
                  >
                    <div className="p-3 lg:p-4">
                      <div className="space-y-1">
                        {/* Football Option */}
                        <motion.button
                          whileHover={{ backgroundColor: "rgba(215, 36, 63, 0.15)", x: 2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setCurrentView('football');
                            setCoachingDropdown(false);
                          }}
                          className="w-full p-3 lg:p-4 rounded-lg transition-all duration-200 text-left group"
                        >
                          <div className="flex items-center space-x-3">

                            <div>
                              <h4 className="text-white font-semibold text-sm group-hover:text-[#86D5F0] transition-colors">Football</h4>

                            </div>
                          </div>
                        </motion.button>

                        {/* Basketball Option */}
                        <motion.button
                          whileHover={{ backgroundColor: "rgba(137, 211, 236, 0.15)", x: 2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setCurrentView('basketball');
                            setCoachingDropdown(false);
                          }}
                          className="w-full p-3 lg:p-4 rounded-lg transition-all duration-200 text-left group"
                        >
                          <div className="flex items-center space-x-3">

                            <div>
                              <h4 className="text-white font-semibold text-sm group-hover:text-[#D7243F] transition-colors">Basketball</h4>

                            </div>
                          </div>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Location Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationDropdown(true)}
              onMouseLeave={() => setLocationDropdown(false)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-white hover:text-[#86D5F0] transition-colors font-medium flex items-center space-x-1 text-sm"
              >
                <MapPin className="w-4 h-4" />
                <span>{selectedLocation}</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>

              <AnimatePresence>
                {locationDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-44 rounded-xl shadow-xl overflow-hidden"
                    style={{
                      background: '#1a1a1a',
                      fontFamily: 'Manrope',
                    }}
                  >
                    <div className="px-4 py-3 space-y-2">
                      {/* Bangalore - Active */}
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="text-left"
                      >
                        <div className="text-[#89D3EC] text-sm font-semibold">Bangalore</div>
                      </motion.div>

                      {/* Mumbai - Coming Soon */}
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="text-left"
                      >
                        <div className="text-gray-400 text-sm font-medium">Mumbai</div>
                        <div className="text-gray-500 text-[8px] opacity-60">Coming Soon</div>
                      </motion.div>

                      {/* Delhi - Coming Soon */}
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="text-left"
                      >
                        <div className="text-gray-400 text-sm font-medium">Delhi</div>
                        <div className="text-gray-500 text-[8px] opacity-60">Coming Soon</div>
                      </motion.div>

                      {/* Mysore - Coming Soon */}
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="text-left"
                      >
                        <div className="text-gray-400 text-sm font-medium">Mysore</div>
                        <div className="text-gray-500 text-[8px] opacity-60">Coming Soon</div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Professional Buttons */}
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentView('waitlist')}
                className="px-6 py-2 bg-gradient-to-r from-[#D7243F] to-[#89D3EC] rounded-full text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download the App
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentView('waitlist')}
                className="flex items-center space-x-2 px-4 py-2 border border-white text-white rounded-full font-medium text-sm hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <LogIn className="w-4 h-4" />
                <span>Join Waitlist</span>
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-lg border-t border-gray-700/30"
            style={{
              background: 'radial-gradient(ellipse at bottom, rgba(137, 211, 236, 0.08) 0%, transparent 50%), radial-gradient(ellipse at top, rgba(215, 36, 63, 0.06) 0%, transparent 50%), linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 10, 10, 0.9) 100%)',
              fontFamily: 'Manrope',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: 'normal',
            }}
          >
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => {
                  setCurrentView('home');
                  setIsOpen(false);
                }}
                className="block text-white hover:text-[#86D5F0] transition-colors font-medium"
              >
                Home
              </button>

              {/* Mobile Coaching Section - Optimized and Always Expanded */}
              <div className="space-y-3">
                <div className="text-white font-semibold text-base flex items-center space-x-2">
                  <span className="w-1 h-4 bg-gradient-to-b from-[#D7243F] to-[#89D3EC] rounded-full"></span>
                  <span>Coaching</span>
                </div>

                <div className="pl-2 space-y-2">
                  {/* Mobile Football Option */}
                  <motion.button
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setCurrentView('football');
                      setIsOpen(false);
                    }}
                    className="w-full p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#D7243F]/10 hover:to-[#D7243F]/5 transition-all duration-200 text-left group border border-transparent hover:border-[#D7243F]/20"
                  >
                    <div className="flex items-center space-x-3">
                    
                      <div>
                        <div className="text-sm font-semibold group-hover:text-[#86D5F0] transition-colors">Football</div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">Master the beautiful game</div>
                      </div>
                    </div>
                  </motion.button>

                  {/* Mobile Basketball Option */}
                  <motion.button
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setCurrentView('basketball');
                      setIsOpen(false);
                    }}
                    className="w-full p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#89D3EC]/10 hover:to-[#89D3EC]/5 transition-all duration-200 text-left group border border-transparent hover:border-[#89D3EC]/20"
                  >
                    <div className="flex items-center space-x-3">
                      
                      <div>
                        <div className="text-sm font-semibold group-hover:text-[#D7243F] transition-colors">Basketball</div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">Elevate your court game</div>
                      </div>
                    </div>
                  </motion.button>
                </div>
              </div>

              {/* Mobile Location Section */}
              <div className="space-y-2">
                <button
                  onClick={() => setMobileLocationDropdown(!mobileLocationDropdown)}
                  className="flex items-center justify-between w-full text-white hover:text-[#86D5F0] transition-colors font-medium"
                >
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedLocation}</span>
                  </div>
                  <svg className={`w-4 h-4 transition-transform ${mobileLocationDropdown ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                <AnimatePresence>
                  {mobileLocationDropdown && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-6 space-y-1 overflow-hidden"
                    >
                      {[
                        { name: "Mumbai", available: false },
                        { name: "Delhi", available: false },
                        { name: "Mysore", available: false }
                      ].map((location) => (
                        <div key={location.name} className="text-left">
                          <button
                            onClick={() => {
                              if (location.available) {
                                setSelectedLocation(location.name);
                                setMobileLocationDropdown(false);
                              }
                            }}
                            className={`text-sm ${location.available ? 'text-gray-300 hover:text-[#86D5F0]' : 'text-gray-500'} transition-colors block`}
                            disabled={!location.available}
                          >
                            {location.name}
                          </button>
                          {!location.available && (
                            <div className="text-[8px] text-gray-500 opacity-60 mt-0.5">
                              Coming Soon
                            </div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Professional Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700/50">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setCurrentView('waitlist');
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-gradient-to-r from-[#D7243F] to-[#89D3EC] rounded-full text-white font-medium shadow-lg"
                >
                  Download the App
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setCurrentView('waitlist');
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 border border-white text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Join Waitlist</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
