import { useEffect, useState } from "react";

interface VideoData {
  videoId: string;
  title: string;
  thumbnail: string;
}

const YouTubePlayer = () => {
  const [video, setVideo] = useState<VideoData | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/youtube-latest");
        if (!res.ok) return;
        const data = await res.json();
        setVideo(data);
      } catch {}
    })();
  }, []);

  if (!video) return null;

  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative shadow-2xl rounded-lg overflow-hidden group"
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full aspect-video object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
        <svg
          className="w-16 h-auto opacity-90"
          viewBox="0 0 159 110"
          fill="none"
        >
          <path
            d="M154 17.5c-1.8-6.7-7.1-12-13.8-13.8C128 0 78.8 0 78.8 0S29.6 0 17.4 3.7C10.7 5.5 5.4 10.8 3.6 17.5 0 29.7 0 55 0 55s0 25.3 3.6 37.5c1.8 6.7 7.1 12 13.8 13.8C29.6 110 78.8 110 78.8 110s49.2 0 61.4-3.7c6.7-1.8 12-7.1 13.8-13.8C157.6 80.3 157.6 55 157.6 55s0-25.3-3.6-37.5z"
            fill="#FF0000"
          />
          <path d="M63 79.5L104 55 63 30.5v49z" fill="#FFF" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
        <p className="text-white text-sm font-medium truncate">{video.title}</p>
      </div>
    </a>
  );
};

export default YouTubePlayer;
