import { MacbookScroll } from "./ui/macbook-scroll";

const MacBookShowcase = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      <MacbookScroll
        title={
          <span className="text-white">
            Experience Playgram on{" "}
            <span className="bg-gradient-to-r from-[#D7243F] to-[#89D3EC] bg-clip-text text-transparent">
              Every Device
            </span>
          </span>
        }
        src="https://jenpaints.art/wp-content/uploads/2025/08/Screenshot-2025-08-03-at-00.13.52.png"
        showGradient={false}
        badge={
          <div className="flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-[#D7243F] to-[#89D3EC] rounded-full">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white text-xs font-medium">Live App</span>
          </div>
        }
      />
    </div>
  );
};

export default MacBookShowcase;