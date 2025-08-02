import { CoachingParallax } from "./ui/coaching-parallax";

// Coaching photos data for the parallax effect
const coachingPhotos = [
  {
    title: "Football Training Session",
    sport: "Football",
    thumbnail: "https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_640.jpg",
  },
  {
    title: "Basketball Practice",
    sport: "Basketball",
    thumbnail: "https://kingsquaresportscentre.com/wp-content/uploads/2023/09/AdobeStock_520402576-scaled.jpeg",
  },
  {
    title: "Badminton Coaching",
    sport: "Badminton",
    thumbnail: "https://us.yonex.com/cdn/shop/files/Product_Banner_BadmintonProRacquets_Mobile.jpg?v=1750184928&width=3840",
  },
  {
    title: "Swimming Lessons",
    sport: "Swimming",
    thumbnail: "https://ucpa.imgix.net/strapi/00010071_UKBANNER_2x13_060af29291.jpg",
  },
  {
    title: "Team Strategy Session",
    sport: "Football",
    thumbnail: "https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_640.jpg",
  },
  {
    title: "Individual Training",
    sport: "Basketball",
    thumbnail: "https://kingsquaresportscentre.com/wp-content/uploads/2023/09/AdobeStock_520402576-scaled.jpeg",
  },
  {
    title: "Group Badminton Session",
    sport: "Badminton",
    thumbnail: "https://us.yonex.com/cdn/shop/files/Product_Banner_BadmintonProRacquets_Mobile.jpg?v=1750184928&width=3840",
  },
  {
    title: "Advanced Swimming",
    sport: "Swimming",
    thumbnail: "https://ucpa.imgix.net/strapi/00010071_UKBANNER_2x13_060af29291.jpg",
  },
  {
    title: "Youth Football Program",
    sport: "Football",
    thumbnail: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Professional Basketball",
    sport: "Basketball",
    thumbnail: "https://kingsquaresportscentre.com/wp-content/uploads/2023/09/AdobeStock_520402576-scaled.jpeg",
  },
  {
    title: "Competitive Badminton",
    sport: "Badminton",
    thumbnail: "https://us.yonex.com/cdn/shop/files/Product_Banner_BadmintonProRacquets_Mobile.jpg?v=1750184928&width=3840",
  },
  {
    title: "Elite Swimming Training",
    sport: "Swimming",
    thumbnail: "https://ucpa.imgix.net/strapi/00010071_UKBANNER_2x13_060af29291.jpg",
  },
  {
    title: "Fitness & Conditioning",
    sport: "Football",
    thumbnail: "https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199_640.jpg",
  },
  {
    title: "Mental Training Session",
    sport: "Basketball",
    thumbnail: "https://kingsquaresportscentre.com/wp-content/uploads/2023/09/AdobeStock_520402576-scaled.jpeg",
  },
  {
    title: "Recovery & Wellness",
    sport: "Swimming",
    thumbnail: "https://ucpa.imgix.net/strapi/00010071_UKBANNER_2x13_060af29291.jpg",
  },
];

const CoachingPhotos = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <CoachingParallax photos={coachingPhotos} />
    </div>
  );
};

export default CoachingPhotos;
