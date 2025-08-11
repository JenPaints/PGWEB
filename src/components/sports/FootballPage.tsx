import { motion } from "framer-motion";
import { ArrowLeft, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";

interface FootballPageProps {
    onBack: () => void;
    setCurrentView?: (view: 'home' | 'football' | 'basketball' | 'badminton' | 'swimming' | 'waitlist' | 'admin' | 'privacy' | 'terms' | 'cookies') => void;
}

const FootballPage = ({ onBack, setCurrentView }: FootballPageProps) => {
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
            pricePerSession: "₹383",
            originalPricePerSession: "₹450",
            sessions: 12,
            totalPrice: "₹4,599",
            originalTotalPrice: "₹5,400",
            discount: null,
            batches: ["M", "W", "F"],
            timings: "5pm - 6:30pm",
            popular: false
        },
        {
            duration: "3 Months",
            pricePerSession: "₹364",
            originalPricePerSession: "₹450",
            sessions: 36,
            totalPrice: "₹13,107",
            originalTotalPrice: "₹16,200",
            discount: "5% Off",
            batches: ["M", "W", "F"],
            timings: "5pm - 6:30pm",
            popular: true
        },
        {
            duration: "6 Months",
            pricePerSession: "₹345",
            originalPricePerSession: "₹450",
            sessions: 72,
            totalPrice: "₹24,835",
            originalTotalPrice: "₹32,400",
            discount: "10% Off",
            batches: ["M", "W", "F"],
            timings: "5pm - 6:30pm",
            popular: false
        },
        {
            duration: "12 Months",
            pricePerSession: "₹307",
            originalPricePerSession: "₹450",
            sessions: 144,
            totalPrice: "₹44,150",
            originalTotalPrice: "₹64,800",
            discount: "20% Off",
            batches: ["M", "W", "F"],
            timings: "5pm - 6:30pm",
            popular: false
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
                                    <span className="text-white">Football </span>
                                    <span className="text-white">Coaching</span>
                                    <br />
                                    <span className="text-white">That Matches Your</span>
                                    <br />
                                    <span className="bg-gradient-to-r from-[#89D3EC] to-[#89D3EC] bg-clip-text text-transparent">
                                        Goals
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
                                <span className="text-lg">⚽</span>
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
                                    src="https://jenpaints.art/wp-content/uploads/2025/08/IMG_8126.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    Your browser does not support the video tag.
                                </video>
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
                            <span className="w-2 h-2 bg-[#89D3EC] rounded-full mr-2"></span>
                            Training Packages
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-white mb-4"
                        >
                            Choose Your <span className="bg-gradient-to-r from-[#89D3EC] to-[#D7243F] bg-clip-text text-transparent">Game Plan</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
                        >
                            Professional football coaching tailored to your schedule and goals
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
                                className="inline-flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm rounded-xl px-6 py-3 border border-gray-700/50 hover:border-[#89D3EC]/50 transition-all"
                            >
                                <MapPin className="w-5 h-5 text-[#89D3EC]" />
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
                                            className={`w-full px-6 py-3 text-left hover:bg-gray-700/50 transition-all ${
                                                selectedLocation === location.name ? 'bg-[#89D3EC]/10 text-[#89D3EC]' : 'text-white'
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
                                    <div className="w-16 h-16 bg-gradient-to-r from-[#89D3EC] to-[#D7243F] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MapPin className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Coming Soon!</h3>
                                    <p className="text-gray-300 mb-6">
                                        We're expanding to other locations. Stay tuned for updates!
                                    </p>
                                    <button
                                        onClick={() => setShowComingSoon(false)}
                                        className="px-6 py-2 bg-gradient-to-r from-[#89D3EC] to-[#D7243F] rounded-full text-white font-medium hover:shadow-lg transition-all"
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
                                    ? 'border-[#89D3EC] shadow-lg shadow-[#89D3EC]/20 scale-105'
                                    : 'border-gray-700 hover:border-[#89D3EC]/30'
                                    }`}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#89D3EC] to-[#D7243F] text-white text-xs font-bold px-4 py-1 rounded-full">
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
                                    <div className="text-center bg-gradient-to-r from-[#89D3EC]/20 to-[#D7243F]/20 rounded-lg p-4 border border-[#89D3EC]/30">
                                        <div className="flex items-baseline justify-center space-x-2 mb-1">
                                            <span className="text-3xl font-bold text-[#89D3EC]">{plan.pricePerSession}</span>
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
                                            {plan.batches.map((day) => (
                                                <span key={day} className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-sm text-white">
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
                                            ? 'bg-gradient-to-r from-[#89D3EC] to-[#D7243F] text-white shadow-lg'
                                            : 'bg-gradient-to-r from-[#D7243F] to-[#89D3EC] text-white hover:shadow-lg'
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
        </div>
    );
};

export default FootballPage;