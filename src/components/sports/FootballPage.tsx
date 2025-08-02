import { motion } from "framer-motion";
import { ArrowLeft, Play, Users, Trophy, Target, Clock, CircleDot } from "lucide-react";

interface FootballPageProps {
    onBack: () => void;
}

const FootballPage = ({ onBack }: FootballPageProps) => {
    const features = [
        {
            icon: Target,
            title: "Technical Skills",
            description: "Master ball control, passing accuracy, and shooting techniques with professional guidance."
        },
        {
            icon: Users,
            title: "Tactical Training",
            description: "Learn formations, positioning, and game strategies used by professional teams."
        },
        {
            icon: Trophy,
            title: "Match Analysis",
            description: "Review game footage and receive personalized feedback to improve your performance."
        },
        {
            icon: Clock,
            title: "Fitness Programs",
            description: "Build stamina, speed, and agility with football-specific conditioning routines."
        }
    ];

    const coaches = [
        {
            name: "Marcus Silva",
            experience: "15+ years",
            specialty: "Technical Skills",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
        },
        {
            name: "David Thompson",
            experience: "12+ years",
            specialty: "Tactical Analysis",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
        },
        {
            name: "Carlos Rodriguez",
            experience: "18+ years",
            specialty: "Youth Development",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            {/* Header */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D7243F]/20 to-[#89D3EC]/20"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
                    <motion.button
                        onClick={onBack}
                        className="flex items-center space-x-2 text-gray-300 hover:text-white mb-8 transition-colors"
                        whileHover={{ x: -5 }}
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Home</span>
                    </motion.button>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <CircleDot className="w-16 h-16 text-white" />
                                <h1 className="text-5xl md:text-6xl font-bold">
                                    <span className="bg-gradient-to-r from-[#D7243F] to-[#89D3EC] bg-clip-text text-transparent">
                                        Football
                                    </span>
                                    <br />
                                    <span className="text-white">Excellence</span>
                                </h1>
                            </div>

                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Master the beautiful game with our comprehensive football training program.
                                From technical skills to tactical awareness, we'll help you reach your full potential on the field.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-[#D7243F] to-[#89D3EC] rounded-full text-white font-bold text-lg shadow-lg"
                                >
                                    Start Free Trial
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 border-2 border-[#89D3EC] text-[#89D3EC] rounded-full font-bold text-lg hover:bg-[#89D3EC] hover:text-gray-900 transition-all"
                                >
                                    View Programs
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800"
                                    alt="Football Training"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center"
                                >
                                    <Play className="w-8 h-8 text-white ml-1" />
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

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
                            <span className="text-white">What You'll </span>
                            <span className="bg-gradient-to-r from-[#D7243F] to-[#89D3EC] bg-clip-text text-transparent">Learn</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Our comprehensive football program covers all aspects of the game
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
                                className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-600/30 hover:border-[#89D3EC]/30 transition-all"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-[#D7243F] to-[#89D3EC] rounded-xl flex items-center justify-center mb-4">
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
                            <span className="text-white">Expert </span>
                            <span className="bg-gradient-to-r from-[#D7243F] to-[#89D3EC] bg-clip-text text-transparent">Coaches</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Learn from professional coaches with years of experience
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
                                <p className="text-[#89D3EC] font-semibold mb-1">{coach.experience}</p>
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
                            Ready to Master Football?
                        </h3>
                        <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                            Join our football program and take your skills to the next level with professional coaching and personalized training plans.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-[#D7243F] to-[#89D3EC] rounded-full text-white font-bold text-lg shadow-lg"
                            >
                                Start Free Trial
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-[#89D3EC] text-[#89D3EC] rounded-full font-bold text-lg hover:bg-[#89D3EC] hover:text-gray-900 transition-all"
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

export default FootballPage;