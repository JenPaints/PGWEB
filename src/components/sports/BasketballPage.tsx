import { motion } from "framer-motion";
import { ArrowLeft, Play, Users, Trophy, Target, Clock, Activity, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";

interface BasketballPageProps {
  onBack: () => void;
  setCurrentView?: (view: 'home' | 'football' | 'basketball' | 'badminton' | 'swimming' | 'waitlist' | 'admin' | 'privacy' | 'terms' | 'cookies') => void;
}

const BasketballPage = ({ onBack, setCurrentView }: BasketballPageProps) => {
  const [selectedLocation, setSelectedLocation] = useState('HSR Layout');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const locations = [
    { id: 'hsr', name: 'HSR Layout', available: true },
    { id: 'coming-soon', name: 'Coming Soon', available: false }
  ];

  const handleLocationSelect = (location: typeof locations[0]) => {
    if (location.available) {
      setSelectedLocation(location.name);
      setShowLocationDropdown(false);
      setShowComingSoon(false);
    } else {
      setShowComingSoon(true);
      setShowLocationDropdown(false);
      setTimeout(() => setShowComingSoon(false), 3000);
    }
  };

  const pricingPlans = [
    {
      duration: "1 Month",
      pricePerSession: "₹400",
      originalPricePerSession: "₹470",
      sessions: 12,
      totalPrice: "₹4,800",
      originalTotalPrice: "₹5,640",
      discount: null,
      batches: ["T", "T", "S"],
      timings: "6pm - 7:30pm",
      popular: false
    },
    {
      duration: "3 Months",
      pricePerSession: "₹380",
      originalPricePerSession: "₹470",
      sessions: 36,
      totalPrice: "₹13,680",
      originalTotalPrice: "₹16,920",
      discount: "5% Off",
      batches: ["T", "T", "S"],
      timings: "6pm - 7:30pm",
      popular: true
    },
    {
      duration: "6 Months",
      pricePerSession: "₹360",
      originalPricePerSession: "₹470",
      sessions: 72,
      totalPrice: "₹25,920",
      originalTotalPrice: "₹33,840",
      discount: "10% Off",
      batches: ["T", "T", "S"],
      timings: "6pm - 7:30pm",
      popular: false
    },
    {
      duration: "12 Months",
      pricePerSession: "₹320",
      originalPricePerSession: "₹470",
      sessions: 144,
      totalPrice: "₹46,080",
      originalTotalPrice: "₹67,680",
      discount: "20% Off",
      batches: ["T", "T", "S"],
      timings: "6pm - 7:30pm",
      popular: false
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Shooting Mechanics",
      description: "Perfect your shooting form, accuracy, and consistency from all positions on the court."
    },
    {
      icon: Users,
      title: "Team Strategies",
      description: "Learn offensive and defensive plays, pick-and-roll execution, and court awareness."
    },
    {
      icon: Trophy,
      title: "Ball Handling",
      description: "Master dribbling techniques, crossovers, and ball control under pressure."
    },
    {
      icon: Clock,
      title: "Athletic Training",
      description: "Build explosive power, vertical jump, and basketball-specific conditioning."
    }
  ];

  const coaches = [
    {
      name: "Michael Jordan Jr.",
      experience: "20+ years",
      specialty: "Shooting & Scoring",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    {
      name: "Sarah Williams",
      experience: "15+ years",
      specialty: "Defense & Strategy",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150"
    },
    {
      name: "Coach Thompson",
      experience: "25+ years",
      specialty: "Youth Development",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                  <span className="text-white">Where Passion Finds</span>
                  <br />
                  <span className="text-white">it's </span>
                  <span className="bg-gradient-to-r from-orange-500 to-[#D7243F] bg-clip-text text-transparent">
                    Playground
                  </span>
                </h1>

                <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                  Step into a sport-first experience made for every age,
                  every skill level, and every goal.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-transparent border border-white rounded-full text-white font-medium hover:bg-white hover:text-gray-900 transition-all"
              >
                <span>Book a Free Trial</span>
                <span className="text-lg">🏀</span>
              </motion.button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <video
                  src="https://jenpaints.art/wp-content/uploads/2025/08/IMG_8135.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-full text-sm text-gray-300 mb-6"
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Training Packages
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Choose Your <span className="bg-gradient-to-r from-orange-500 to-[#D7243F] bg-clip-text text-transparent">Game Plan</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
            >
              Professional basketball coaching tailored to your schedule and goals
            </motion.p>

            {/* Location Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative inline-block"
            >
              <button
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                className="inline-flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm rounded-xl px-6 py-3 border border-gray-700/50 hover:border-orange-500/50 transition-all"
              >
                <MapPin className="w-5 h-5 text-orange-500" />
                <span className="text-white font-medium">{selectedLocation}</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showLocationDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown */}
              {showLocationDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 left-0 right-0 bg-gray-800/95 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden z-50"
                >
                  {locations.map((location) => (
                    <button
                      key={location.id}
                      onClick={() => handleLocationSelect(location)}
                      className={`w-full px-6 py-3 text-left hover:bg-gray-700/50 transition-all ${selectedLocation === location.name ? 'bg-orange-500/10 text-orange-500' : 'text-white'
                        }`}
                    >
                      <span>{location.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Coming Soon Modal */}
            {showComingSoon && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
                onClick={() => setShowComingSoon(false)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-800 rounded-2xl p-8 border border-gray-700 max-w-md mx-4 text-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-[#D7243F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Coming Soon!</h3>
                  <p className="text-gray-300 mb-6">
                    We're expanding to other locations. Stay tuned for updates!
                  </p>
                  <button
                    onClick={() => setShowComingSoon(false)}
                    className="px-6 py-2 bg-gradient-to-r from-orange-500 to-[#D7243F] rounded-full text-white font-medium hover:shadow-lg transition-all"
                  >
                    Got it!
                  </button>
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.duration}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800 rounded-2xl p-6 border transition-all ${plan.popular
                  ? 'border-orange-500 shadow-lg shadow-orange-500/20 scale-105'
                  : 'border-gray-700 hover:border-orange-500/30'
                  }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-[#D7243F] text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                {/* Discount Badge */}
                {plan.discount && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {plan.discount}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Duration */}
                  <h3 className="text-xl font-bold text-white">{plan.duration}</h3>

                  {/* Per Session Price - Most Prominent */}
                  <div className="text-center bg-gradient-to-r from-orange-500/20 to-[#D7243F]/20 rounded-lg p-4 border border-orange-500/30">
                    <div className="flex items-baseline justify-center space-x-2 mb-1">
                      <span className="text-3xl font-bold text-orange-500">{plan.pricePerSession}</span>
                      <span className="text-sm text-gray-500 line-through">{plan.originalPricePerSession}</span>
                    </div>
                    <div className="text-sm text-gray-300">per session</div>
                  </div>

                  {/* Sessions Count */}
                  <div className="text-center">
                    <div className="text-lg font-semibold text-white">{plan.sessions} Sessions</div>
                    <div className="text-sm text-gray-400">Total: {plan.totalPrice}</div>
                  </div>

                  {/* Batch Days */}
                  <div>
                    <span className="text-sm text-gray-400 block mb-2">Batch:</span>
                    <div className="flex space-x-2">
                      {plan.batches.map((day, dayIndex) => (
                        <span key={dayIndex} className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm text-white">
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timings */}
                  <div>
                    <span className="text-sm text-gray-400 block mb-1">Timings:</span>
                    <span className="text-sm bg-gray-700 rounded-full px-3 py-1 text-white">
                      {plan.timings}
                    </span>
                  </div>

                  {/* Enroll Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setCurrentView?.('waitlist')}
                    className={`w-full py-3 rounded-full font-semibold mt-6 transition-all ${plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-[#D7243F] text-white shadow-lg'
                      : 'bg-gradient-to-r from-[#D7243F] to-orange-500 text-white hover:shadow-lg'
                      }`}
                  >
                    {plan.popular ? 'Choose Popular Plan' : 'Enroll Now'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Professional Coaches</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Progress Tracking</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Master the </span>
              <span className="bg-gradient-to-r from-orange-500 to-[#D7243F] bg-clip-text text-transparent">Fundamentals</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Develop complete basketball skills with our comprehensive training program
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-600/30 hover:border-orange-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-[#D7243F] rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Professional </span>
              <span className="bg-gradient-to-r from-orange-500 to-[#D7243F] bg-clip-text text-transparent">Coaches</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Train with coaches who have NBA and collegiate experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <motion.div
                key={coach.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-600/30 text-center"
              >
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-white mb-2">{coach.name}</h3>
                <p className="text-orange-500 font-semibold mb-1">{coach.experience}</p>
                <p className="text-gray-300">{coach.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-lg rounded-3xl p-8 border border-gray-600/30"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Dominate the Court?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Join our basketball program and develop the skills, strategy, and mindset needed to excel at every level of the game.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-[#D7243F] rounded-full text-white font-bold text-lg shadow-lg"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-all"
              >
                Contact Coach
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BasketballPage;