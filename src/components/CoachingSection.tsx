import { motion } from "framer-motion";

const CoachingSection = () => {
    return (
        <section className="pb-24 px-6 min-h-screen flex items-center bg-white" style={{
            marginTop: '-100px',
            paddingTop: '100px',
            background: 'radial-gradient(ellipse at top right, rgba(137, 211, 236, 0.08) 0%, transparent 60%), radial-gradient(ellipse at bottom left, rgba(215, 36, 63, 0.05) 0%, transparent 50%), linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)'
        }}>
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Playgram Logo */}
                        <div
                            className="flex items-center justify-center mb-8"
                            style={{
                                width: '140px',
                                height: '36px',
                                flexShrink: 0,
                                borderRadius: '30px',
                                border: '0.75px solid #374151',
                                background: 'rgba(0, 0, 0, 0.05)'
                            }}
                        >
                            <div
                                style={{
                                    width: '102px',
                                    height: '27px',
                                    flexShrink: 0,
                                    aspectRatio: '34/9',
                                    backgroundImage: `url('https://jenpaints.art/wp-content/uploads/2025/07/PHOTO-2025-07-05-01-14-22-removebg-preview.png')`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center'
                                }}
                            />
                        </div>

                        {/* Heading */}
                        <h2 className="font-manrope text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            <span className="text-gray-900">Coaching </span>
                            <span className="text-gray-900">That Brings</span>
                            <br />
                            <span className="text-gray-900">Out Your </span>
                            <span className="text-gray-900 font-bold relative">
                                Best Game
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                            At Playgram, we offer football and basketball coaching for all
                            ages and every skill level, helping each player grow with
                            structured, engaging sessions.
                        </p>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Decorative Diamond Shape */}


                        {/* Main Image */}
                        <motion.div
                            className="relative z-10 rounded-3xl overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                            style={{
                                padding: '4px',
                                perspective: '1000px'
                            }}
                        >
                            <div className="rounded-2xl overflow-hidden relative">
                                <motion.img
                                    src="https://jenpaints.art/wp-content/uploads/2025/08/2nd-Section-1.png"
                                    alt="Playgram coaching session"
                                    className="w-full h-80 lg:h-96 xl:h-[400px] object-contain"
                                    initial={{
                                        x: -100,
                                        opacity: 0,
                                        scale: 1.05
                                    }}
                                    whileInView={{
                                        x: 0,
                                        opacity: 1,
                                        scale: 1
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        delay: 0.4,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                />

                                {/* Reveal mask overlay */}
                                <motion.div
                                    className="absolute inset-0 bg-white"
                                    initial={{ x: "0%" }}
                                    whileInView={{ x: "100%" }}
                                    transition={{
                                        duration: 1.2,
                                        delay: 0.4,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CoachingSection;