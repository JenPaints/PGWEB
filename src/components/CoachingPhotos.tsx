import { motion } from "framer-motion";

const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
    title: "Football Training Session",
    sport: "Football",
    size: "large"
  },
  {
    id: 2, 
    url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400",
    title: "Basketball Practice",
    sport: "Basketball", 
    size: "medium"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1544717684-6e5e4c2b5b5b?w=400", 
    title: "Badminton Coaching",
    sport: "Badminton",
    size: "medium"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600",
    title: "Swimming Lessons", 
    sport: "Swimming",
    size: "large"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400",
    title: "Team Strategy",
    sport: "Football",
    size: "small"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=400", 
    title: "Individual Training",
    sport: "Basketball",
    size: "small"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
    title: "Group Session",
    sport: "Badminton", 
    size: "medium"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    title: "Advanced Training",
    sport: "Swimming",
    size: "small"
  }
];

const CoachingPhotos = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D7243F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#89D3EC] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Behind the </span>
            <span className="bg-gradient-to-r from-[#D7243F] to-[#89D3EC] bg-clip-text text-transparent">
              Scenes
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the energy and dedication of our coaching sessions through these captured moments of athletic excellence.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className={`
                relative group cursor-pointer break-inside-avoid mb-6 overflow-hidden rounded-2xl
                ${photo.size === 'large' ? 'h-80' : photo.size === 'medium' ? 'h-64' : 'h-48'}
              `}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-[#D7243F]/20 border border-[#D7243F] text-[#D7243F] rounded-full text-xs font-medium">
                    {photo.sport}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg">{photo.title}</h3>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#89D3EC] rounded-2xl transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#D7243F] to-[#89D3EC] text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-[#D7243F]/25 transition-shadow"
          >
            View Full Gallery
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachingPhotos;
