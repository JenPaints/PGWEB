import { motion } from "framer-motion";
import { BarChart3, Smartphone, CircleDot, Activity } from "lucide-react";

const AppPreview = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 bg-[#D7243F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#89D3EC] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">Train Anywhere with </span>
              <span className="bg-gradient-to-r from-[#D7243F] to-[#89D3EC] bg-clip-text text-transparent">
                Playgram App
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Take your training to the next level with our mobile app. Access personalized workouts, 
              track your progress, and connect with coaches anytime, anywhere.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: <Smartphone className="w-6 h-6" />,
                  title: "Personalized Training Plans",
                  description: "AI-powered workouts tailored to your skill level and goals"
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />, 
                  title: "Progress Tracking",
                  description: "Monitor your improvement with detailed analytics and insights"
                },
                {
                  icon: "🎥",
                  title: "Video Coaching",
                  description: "Access premium coaching videos and live training sessions"
                },
                {
                  icon: "👥",
                  title: "Community Features", 
                  description: "Connect with fellow athletes and share your achievements"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="text-white">{feature.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-3 px-6 py-4 bg-black rounded-2xl border border-gray-700 hover:border-[#89D3EC] transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-white font-semibold">App Store</div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-3 px-6 py-4 bg-black rounded-2xl border border-gray-700 hover:border-[#D7243F] transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-white font-semibold">Google Play</div>
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* App Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-[600px]">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  
                  {/* Screen Content */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black p-6 pt-12">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <img 
                        src="https://jenpaints.art/wp-content/uploads/2025/08/IMG_6671-removebg-preview.png" 
                        alt="Playgram Logo" 
                        className="w-8 h-8 object-contain"
                      />
                      <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                    </div>

                    {/* Welcome Section */}
                    <div className="mb-8">
                      <h3 className="text-white text-xl font-bold mb-2">Welcome back!</h3>
                      <p className="text-gray-400 text-sm">Ready for today's training?</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-gray-800/50 rounded-2xl p-4">
                        <div className="text-[#D7243F] text-2xl font-bold">12</div>
                        <div className="text-gray-400 text-xs">Sessions</div>
                      </div>
                      <div className="bg-gray-800/50 rounded-2xl p-4">
                        <div className="text-[#89D3EC] text-2xl font-bold">85%</div>
                        <div className="text-gray-400 text-xs">Progress</div>
                      </div>
                    </div>

                    {/* Training Cards */}
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[#D7243F]/20 to-[#89D3EC]/20 rounded-2xl p-4 border border-[#D7243F]/30">
                        <div className="flex items-center space-x-3">
                          <CircleDot className="w-6 h-6 text-white" />
                          <div>
                            <div className="text-white font-semibold text-sm">Football Training</div>
                            <div className="text-gray-400 text-xs">45 min • Intermediate</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-800/30 rounded-2xl p-4">
                        <div className="flex items-center space-x-3">
                          <Activity className="w-6 h-6 text-white" />
                          <div>
                            <div className="text-white font-semibold text-sm">Basketball Drills</div>
                            <div className="text-gray-400 text-xs">30 min • Beginner</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-[#D7243F] to-[#89D3EC] rounded-full opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div
                className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-[#89D3EC] to-[#D7243F] rounded-full opacity-20"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
