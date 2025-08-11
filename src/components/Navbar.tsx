import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, MapPin } from "lucide-react";

interface NavbarProps {
  currentView: 'home' | 'football' | 'basketball' | 'badminton' | 'swimming' | 'admin';
  setCurrentView: (view: 'home' | 'football' | 'basketball' | 'badminton' | 'swimming' | 'admin') => void;
}

const Navbar = ({ currentView, setCurrentView }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [locationDropdown, setLocationDropdown] = useState(false);
  const [coachingDropdown, setCoachingDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Bangalore');

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-gray-700/30"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(215, 36, 63, 0.08) 0%, transparent 50%), radial-gradient(ellipse at right, rgba(137, 211, 236, 0.06) 0%, transparent 50%), linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(10, 10, 10, 0.8) 100%)',
        borderBottomLeftRadius: "2rem",
        borderBottomRightRadius: "2rem",
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
              className="text-white hover:text-[#89D3EC] transition-colors font-medium"
            >
              Home
            </motion.button>

            {/* Coaching Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCoachingDropdown(true)}
              onMouseLeave={() => setCoachingDropdown(false)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setCoachingDropdown(!coachingDropdown)}
                className="text-white hover:text-[#89D3EC] transition-colors font-medium flex items-center space-x-1"
              >
                <span>Coaching</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>

              <AnimatePresence>
                {coachingDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-96 backdrop-blur-lg rounded-lg border border-gray-700/50 shadow-xl overflow-hidden"
                    style={{
                      background: 'radial-gradient(ellipse at top, rgba(215, 36, 63, 0.1) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(137, 211, 236, 0.08) 0%, transparent 50%), linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 10, 10, 0.95) 100%)'
                    }}
                  >
                    <div className="flex">
                      {/* Left Side - Coaching Info */}
                      <div className="w-1/3 p-4 border-r border-gray-700/50">
                        <h3 className="text-white font-semibold mb-3">Our Coaching</h3>
                      </div>

                      {/* Right Side - Sport Previews */}
                      <div className="w-2/3 p-2">
                        <div className="space-y-2">
                          {/* Football Preview */}
                          <motion.button
                            whileHover={{ backgroundColor: "rgba(215, 36, 63, 0.1)" }}
                            onClick={() => {
                              setCurrentView('football');
                              setCoachingDropdown(false);
                            }}
                            className="w-full p-3 rounded-lg transition-colors text-left flex items-center space-x-3"
                          >
                            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=100&h=100&fit=crop"
                                alt="Football"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="text-white font-medium">Football</h4>
                              <p className="text-gray-400 text-xs">Master the beautiful game</p>
                            </div>
                          </motion.button>

                          {/* Basketball Preview */}
                          <motion.button
                            whileHover={{ backgroundColor: "rgba(137, 211, 236, 0.1)" }}
                            onClick={() => {
                              setCurrentView('basketball');
                              setCoachingDropdown(false);
                            }}
                            className="w-full p-3 rounded-lg transition-colors text-left flex items-center space-x-3"
                          >
                            <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop"
                                alt="Basketball"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="text-white font-medium">Basketball</h4>
                              <p className="text-gray-400 text-xs">Elevate your court game</p>
                            </div>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Location Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setLocationDropdown(!locationDropdown)}
                className="text-white hover:text-[#89D3EC] transition-colors font-medium flex items-center space-x-1"
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
                    className="absolute top-full left-0 mt-2 w-48 backdrop-blur-lg rounded-lg border border-gray-700/50 shadow-xl"
                    style={{
                      background: 'radial-gradient(ellipse at top, rgba(215, 36, 63, 0.1) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(137, 211, 236, 0.08) 0%, transparent 50%), linear-gradient(180deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 10, 10, 0.95) 100%)'
                    }}
                  >
                    {[
                      { name: "Mumbai", available: false },
                      { name: "Delhi", available: false },
                      { name: "Mysore", available: false }
                    ].map((location) => (
                      <motion.button
                        key={location.name}
                        whileHover={{ backgroundColor: "rgba(215, 36, 63, 0.1)" }}
                        onClick={() => {
                          if (location.available) {
                            setSelectedLocation(location.name);
                          }
                          setLocationDropdown(false);
                        }}
                        className="block w-full text-left px-4 py-3 text-gray-300 hover:text-[#D7243F] transition-colors first:rounded-t-lg last:rounded-b-lg relative"
                        disabled={!location.available}
                      >
                        <div className="flex items-center justify-between">
                          <span className={location.available ? '' : 'opacity-60'}>{location.name}</span>
                          {!location.available && (
                            <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Professional Buttons */}
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-[#D7243F] to-[#89D3EC] rounded-full text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download the App
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 border border-white text-white rounded-full font-medium text-sm hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
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
              background: 'radial-gradient(ellipse at bottom, rgba(137, 211, 236, 0.08) 0%, transparent 50%), radial-gradient(ellipse at top, rgba(215, 36, 63, 0.06) 0%, transparent 50%), linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 10, 10, 0.9) 100%)'
            }}
          >
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => {
                  setCurrentView('home');
                  setIsOpen(false);
                }}
                className="block text-white hover:text-[#89D3EC] transition-colors font-medium"
              >
                Home
              </button>

              {/* Mobile Coaching Section */}
              <div className="space-y-2">
                <button
                  onClick={() => setCoachingDropdown(!coachingDropdown)}
                  className="flex items-center justify-between w-full text-white hover:text-[#89D3EC] transition-colors font-medium"
                >
                  <span>Coaching</span>
                  <svg className={`w-4 h-4 transition-transform ${coachingDropdown ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                <AnimatePresence>
                  {coachingDropdown && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2 overflow-hidden"
                    >
                      <button
                        onClick={() => {
                          setCurrentView('football');
                          setIsOpen(false);
                          setCoachingDropdown(false);
                        }}
                        className="flex items-center space-x-3 w-full p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded overflow-hidden flex-shrink-0">
                          <img
                            src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=50&h=50&fit=crop"
                            alt="Football"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-medium">Football</div>
                          <div className="text-xs text-gray-400">Master the beautiful game</div>
                        </div>
                      </button>

                      <button
                        onClick={() => {
                          setCurrentView('basketball');
                          setIsOpen(false);
                          setCoachingDropdown(false);
                        }}
                        className="flex items-center space-x-3 w-full p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded overflow-hidden flex-shrink-0">
                          <img
                            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=50&h=50&fit=crop"
                            alt="Basketball"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-medium">Basketball</div>
                          <div className="text-xs text-gray-400">Elevate your court game</div>
                        </div>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Location Section */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-white font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedLocation}</span>
                </div>
                <div className="pl-6 space-y-1">
                  {[
                    { name: "Mumbai", available: false },
                    { name: "Delhi", available: false },
                    { name: "Mysore", available: false }
                  ].map((location) => (
                    <div key={location.name} className="flex items-center justify-between">
                      <button
                        onClick={() => {
                          if (location.available) {
                            setSelectedLocation(location.name);
                          }
                        }}
                        className={`text-sm ${location.available ? 'text-gray-300 hover:text-[#89D3EC]' : 'text-gray-500'} transition-colors`}
                        disabled={!location.available}
                      >
                        {location.name}
                      </button>
                      {!location.available && (
                        <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Professional Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700/50">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-3 bg-gradient-to-r from-[#D7243F] to-[#89D3EC] rounded-full text-white font-medium shadow-lg"
                >
                  Download the App
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 border border-white text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
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
