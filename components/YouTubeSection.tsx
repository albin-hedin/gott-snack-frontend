import YouTubePlayer from "./YouTubePlayer";

const YouTubeSection = () => {
  return (
    <div
      className="text-center flex flex-col items-center py-4"
    >
      <div className="w-full max-w-md px-4">
        <YouTubePlayer />
      </div>
    </div>
  );
};

export default YouTubeSection;
