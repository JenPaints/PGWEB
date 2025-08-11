import { motion } from "framer-motion";

interface SportsSelectionProps {
  setCurrentView?: (view: 'home' | 'football' | 'basketball' | 'badminton' | 'swimming' | 'admin') => void;
}

const SportsSelection = ({ setCurrentView }: SportsSelectionProps) => {
  const sports = [
    {
      name: "Football",
      description: "From powerful kicks to precision passes and slam dunks, Playgram brings you the thrill of focused",
      image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=500&h=300&fit=crop",
      gradient: "from-green-400 to-green-600",
      view: "football" as const
    },
    {
      name: "Basketball",
      description: "From powerful kicks to precision passes and slam dunks, Playgram brings you the thrill of focused",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=300&fit=crop",
      gradient: "from-orange-400 to-red-600",
      view: "basketball" as const
    }
  ];

  const handleSportClick = (view: 'football' | 'basketball') => {
    if (setCurrentView) {
      setCurrentView(view);
    }
  };

  return (
    <section className="py-20 px-6" style={{
      background: 'radial-gradient(ellipse at top left, rgba(215, 36, 63, 0.15) 0%, rgba(215, 36, 63, 0.04) 35%, transparent 60%), radial-gradient(ellipse at top right, rgba(137, 211, 236, 0.12) 0%, rgba(137, 211, 236, 0.03) 40%, transparent 65%), radial-gradient(ellipse at bottom center, rgba(137, 211, 236, 0.08) 0%, transparent 55%), radial-gradient(ellipse at center, rgba(215, 36, 63, 0.04) 0%, transparent 70%), linear-gradient(135deg, #000000 0%, #0a0a0a 20%, #1a1a1a 40%, #0f0f0f 60%, #1a1a1a 80%, #000000 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Our Coaching Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-gray-600 text-gray-300 text-sm mb-8"
          >
            Our Coaching
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-manrope text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            <span className="text-white">Pick </span>
            <span className="text-white">Your Game. </span>
            <span className="text-white">Bring Your </span>
            <span className="bg-gradient-to-r from-[#D7243F] to-[#89D3EC] bg-clip-text text-transparent">A-Game.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
          >
            From powerful kicks to precision passes and slam dunks, Playgram brings you the thrill of
            focused, high-energy training.
          </motion.p>
        </div>

        {/* Sports Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSportClick(sport.view)}
              className="relative group cursor-pointer"
            >
              <div className="relative h-80 rounded-3xl overflow-hidden">
                {/* Background Image */}
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sport.gradient} opacity-40`}></div>

                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <h3 className="text-white text-3xl font-bold mb-4">{sport.name}</h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    {sport.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D7243F]/10 to-[#89D3EC]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsSelection;