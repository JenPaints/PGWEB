import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ComingSoonPage = () => {
    const [showComingSoon, setShowComingSoon] = useState(false);
    const [videoOpacity, setVideoOpacity] = useState(1);

    useEffect(() => {
        // Start reducing video opacity after 2 seconds
        const opacityTimer = setTimeout(() => {
            setVideoOpacity(0.4);
        }, 2000);

        // Show "Coming Soon" text after video plays for a bit
        const textTimer = setTimeout(() => {
            setShowComingSoon(true);
        }, 5000); // 5 seconds

        return () => {
            clearTimeout(opacityTimer);
            clearTimeout(textTimer);
        };
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'radial-gradient(ellipse at center top, rgba(215, 36, 63, 0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom center, rgba(137, 211, 236, 0.12) 0%, transparent 60%), linear-gradient(180deg, #000000 0%, #0a0a0a 100%)'
                }}
            />

            {/* Video Background */}
            <div className="absolute inset-0 z-10">
                <motion.video
                    src="https://jenpaints.art/wp-content/uploads/2025/08/IMG_7998.mov"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    animate={{ opacity: videoOpacity }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-20" />

            {/* Coming Soon Content */}
            <AnimatePresence>
                {showComingSoon && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute inset-0 z-30 flex items-center justify-center"
                    >
                        <div className="text-center px-4">
                            {/* Logo */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="mb-8"
                            >
                                <img
                                    src="https://jenpaints.art/wp-content/uploads/2025/08/IMG_6671-removebg-preview.png"
                                    alt="Playgram Logo"
                                    className="w-80 h-80 mx-auto object-contain px-8"
                                />
                            </motion.div>

                            {/* Coming Soon Text */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="space-y-6"
                            >
                                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#D7243F] via-[#89D3EC] to-[#D7243F] bg-clip-text text-transparent pt-8 pb-8 px-4">
                                    Coming Soon!
                                </h1>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1 }}
                                    className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed"
                                >
                                    Get ready for the ultimate sports coaching experience
                                </motion.p>

                                {/* Animated Dots */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1.3 }}
                                    className="flex justify-center space-x-2 mt-8"
                                >
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.5, 1, 0.5]
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                delay: i * 0.2
                                            }}
                                            className="w-3 h-3 rounded-full bg-gradient-to-r from-[#D7243F] to-[#89D3EC]"
                                        />
                                    ))}
                                </motion.div>

                                {/* Subtitle */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 1.6 }}
                                    className="mt-12"
                                >
                                    <p className="text-lg text-white/70">
                                        Something amazing is on the way...
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


        </div>
    );
};

export default ComingSoonPage;