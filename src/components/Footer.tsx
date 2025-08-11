import { motion } from "framer-motion";
import { Mail, Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { useContent } from "../contexts/ContentContext";

interface FooterProps {
  setCurrentView?: (view: 'home' | 'football' | 'basketball' | 'admin') => void;
}

const Footer = ({ setCurrentView }: FooterProps) => {
  const { content } = useContent();
  return (
    <footer className="backdrop-blur-lg border-t border-gray-700/50 py-16 px-4" style={{
      background: 'radial-gradient(ellipse at center top, rgba(215, 36, 63, 0.08) 0%, transparent 50%), radial-gradient(ellipse at bottom center, rgba(137, 211, 236, 0.06) 0%, transparent 60%), linear-gradient(180deg, #000000 0%, #0a0a0a 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-6"
            >
              <img
                src="https://jenpaints.art/wp-content/uploads/2025/08/IMG_6671-removebg-preview.png"
                alt="Playgram Logo"
                className="w-26 h-26 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#D7243F] to-[#89D3EC] bg-clip-text text-transparent">

              </span>
            </motion.div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {content.footer.description}
            </p>
            <div className="flex space-x-4">
              {[
                { name: "Instagram", icon: Instagram },
                { name: "Facebook", icon: Facebook },

              ].map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.button
                    key={social.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-r hover:from-[#D7243F] hover:to-[#89D3EC] rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Sports Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Sports</h3>
            <ul className="space-y-3">
              {["Football", "Basketball"].map((sport) => (
                <li key={sport}>
                  <a href={`#${sport.toLowerCase()}`} className="text-gray-300 hover:text-[#89D3EC] transition-colors">
                    {sport}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              {[
                "Individual Training",
                "Group Sessions",
                "Online Coaching",
                "Competition Prep",
                "Youth Programs",
                "Adult Classes"
              ].map((program) => (
                <li key={program}>
                  <a href="#programs" className="text-gray-300 hover:text-[#89D3EC] transition-colors">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-6">
              {[
                {
                  icon: <MapPin className="w-5 h-5" />,
                  title: "Visit Our Facility",
                  info: "4th Floor, BL Complex, 462, 16th Cross Rd, Sector 4, HSR Layout, Bengaluru, Karnataka 560102",
                  gradient: "from-[#D7243F] to-red-600"
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  title: "Call Us",
                  info: "+91 7483223862",
                  gradient: "from-[#89D3EC] to-blue-500"
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  title: "Email Us",
                  info: "support@playgram.app",
                  gradient: "from-[#D7243F] to-[#89D3EC]"
                }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${contact.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">{contact.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-[#89D3EC] transition-colors">
                        {contact.title}
                      </h4>
                      <p className="text-gray-300 text-xs leading-relaxed group-hover:text-white transition-colors">
                        {contact.info}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Playgram. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-[#89D3EC] transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-[#89D3EC] transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-[#89D3EC] transition-colors">
                Cookie Policy
              </a>
              <button
                onClick={() => setCurrentView?.('admin')}
                className="text-gray-400 hover:text-[#89D3EC] transition-colors"
              >
                Admin
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
