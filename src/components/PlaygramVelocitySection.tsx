import { VelocityScroll } from "./ui/VelocityScroll";

const PlaygramVelocitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden relative">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-40 h-40 bg-[#D7243F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-[#89D3EC] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-[#D7243F] to-[#89D3EC] rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10">
        <VelocityScroll
          text="PLAYGRAM"
          default_velocity={2}
          className="text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black tracking-tighter select-none"
          style={{
            fontFamily: "'Inter', 'Helvetica Neue', 'Arial Black', sans-serif",
            fontWeight: 900,
            letterSpacing: '-0.08em',
            background: 'linear-gradient(135deg, #D7243F 0%, #89D3EC 50%, #D7243F 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 30px rgba(215, 36, 63, 0.3), 0 0 60px rgba(137, 211, 236, 0.2)',
            filter: 'drop-shadow(0 0 20px rgba(215, 36, 63, 0.4))',
          }}
        />
      </div>

      {/* Additional glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-to-r from-transparent via-[#D7243F]/10 to-transparent blur-xl"></div>
      </div>
    </section>
  );
};

export default PlaygramVelocitySection;