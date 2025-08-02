import { CoachingParallax } from "./ui/coaching-parallax";

// Coaching photos data for the parallax effect
const coachingPhotos = [
  {
    title: "Football Training Session",
    sport: "Football",
    thumbnail: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Basketball Practice",
    sport: "Basketball",
    thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Badminton Coaching",
    sport: "Badminton",
    thumbnail: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Swimming Lessons",
    sport: "Swimming",
    thumbnail: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Team Strategy Session",
    sport: "Football",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Individual Training",
    sport: "Basketball",
    thumbnail: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Group Badminton Session",
    sport: "Badminton",
    thumbnail: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Advanced Swimming",
    sport: "Swimming",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Youth Football Program",
    sport: "Football",
    thumbnail: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Professional Basketball",
    sport: "Basketball",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Competitive Badminton",
    sport: "Badminton",
    thumbnail: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Elite Swimming Training",
    sport: "Swimming",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Fitness & Conditioning",
    sport: "Football",
    thumbnail: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Mental Training Session",
    sport: "Basketball",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=center",
  },
  {
    title: "Recovery & Wellness",
    sport: "Swimming",
    thumbnail: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=600&fit=crop&crop=center",
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
