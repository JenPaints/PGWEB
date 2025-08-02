import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, LogIn } from "lucide-react";

interface NavbarProps {
  currentView: 'home' | 'football' | 'basketball' | 'badminton' | 'swimming';
  setCurrentView: (view: 'home' | 'football' | 'basketball' | 'badminton' | 'swimming') => void;
}

const Navbar = ({ currentView, setCurrentView }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sportsDropdown, setSportsDropdown] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-lg border-b border-gray-700/50"
      style={{
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
            <img
              src="https://jenpaints.art/wp-content/uploads/2025/08/IMG_6671-removebg-preview.png"
              alt="Playgram Logo"
              className="w-20 h-20 object-contain"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setCurrentView('home')}
              className={`font-medium transition-colors ${currentView === 'home'
                ? 'text-[#89D3EC]'
                : 'text-gray-300 hover:text-[#89D3EC]'
                }`}
            >
              Home
            </motion.button>

            {/* Sports Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSportsDropdown(!sportsDropdown)}
                className="text-gray-300 hover:text-[#89D3EC] transition-colors font-medium flex items-center space-x-1"
              >
                <span>Sports</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>

              <AnimatePresence>
                {sportsDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-lg rounded-lg border border-gray-700/50 shadow-xl"
                  >
                    {[
                      { name: "Football", view: "football" as const },
                      { name: "Basketball", view: "basketball" as const },
                      { name: "Badminton", view: "badminton" as const },
                      { name: "Swimming", view: "swimming" as const }
                    ].map((sport) => (
                      <motion.button
                        key={sport.name}
                        whileHover={{ backgroundColor: "rgba(215, 36, 63, 0.1)" }}
                        onClick={() => {
                          setCurrentView(sport.view);
                          setSportsDropdown(false);
                        }}
                        className="block w-full text-left px-4 py-3 text-gray-300 hover:text-[#D7243F] transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {sport.name}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setCurrentView('home')}
              className="text-gray-300 hover:text-[#89D3EC] transition-colors font-medium"
            >
              Community
            </motion.button>

            {/* Professional Buttons */}
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#D7243F] to-[#89D3EC] rounded-lg text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download App</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 border border-[#89D3EC] text-[#89D3EC] rounded-lg font-medium text-sm hover:bg-[#89D3EC] hover:text-gray-900 transition-all duration-300"
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
            className="md:hidden bg-gray-800/95 backdrop-blur-lg border-t border-gray-700/50"
          >
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => {
                  setCurrentView('home');
                  setIsOpen(false);
                }}
                className={`block w-full text-left transition-colors ${currentView === 'home'
                  ? 'text-[#89D3EC]'
                  : 'text-gray-300 hover:text-[#89D3EC]'
                  }`}
              >
                Home
              </button>

              <div className="space-y-2">
                <span className="block text-gray-300 font-medium">Sports</span>
                {[
                  { name: "Football", view: "football" as const },
                  { name: "Basketball", view: "basketball" as const },
                  { name: "Badminton", view: "badminton" as const },
                  { name: "Swimming", view: "swimming" as const }
                ].map((sport) => (
                  <button
                    key={sport.name}
                    onClick={() => {
                      setCurrentView(sport.view);
                      setIsOpen(false);
                    }}
                    className="block w-full text-left pl-4 text-gray-400 hover:text-[#D7243F] transition-colors"
                  >
                    {sport.name}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setCurrentView('home');
                  setIsOpen(false);
                }}
                className="block text-gray-300 hover:text-[#89D3EC] transition-colors"
              >
                Community
              </button>

              {/* Mobile Professional Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-700/50">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-[#D7243F] to-[#89D3EC] rounded-lg text-white font-medium shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>Download App</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 border border-[#89D3EC] text-[#89D3EC] rounded-lg font-medium hover:bg-[#89D3EC] hover:text-gray-900 transition-all duration-300"
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
