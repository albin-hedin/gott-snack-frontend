import YouTubePlayer from "./YouTubePlayer";

const YouTubeSection = () => {
  return (
    <div className="mx-3 md:mx-6">
      <div className="mx-auto md:w-[calc(50%-0.75rem)]">
        <p className="text-center text-black text-sm md:text-base font-fredoka mb-2">
          YouTube
        </p>
        <YouTubePlayer />
      </div>
    </div>
  );
};

export default YouTubeSection;
