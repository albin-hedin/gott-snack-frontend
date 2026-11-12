import { useEffect, useState } from "react";
import Image from "next/image";

interface VideoData {
  videoId: string;
  title: string;
  thumbnail: string;
}

const YouTubePlayer = () => {
  const [video, setVideo] = useState<VideoData | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/youtube-latest");
        if (!res.ok) throw new Error();
        setVideo(await res.json());
      } catch {
        setFailed(true);
      }
    })();
  }, []);

  if (failed) return null;

  if (!video) {
    return <div className="w-full h-88 rounded-2xl bg-ink/10 animate-pulse" />;
  }

  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative w-full h-88 overflow-hidden rounded-2xl shadow-card transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/60"
    >
      <Image
        src={video.thumbnail}
        alt={video.title}
        fill
        sizes="(min-width: 768px) 672px, 100vw"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-ink/30 transition-colors group-hover:bg-ink/40">
        <svg
          className="w-16 h-auto opacity-90 drop-shadow-lg"
          viewBox="0 0 159 110"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M154 17.5c-1.8-6.7-7.1-12-13.8-13.8C128 0 78.8 0 78.8 0S29.6 0 17.4 3.7C10.7 5.5 5.4 10.8 3.6 17.5 0 29.7 0 55 0 55s0 25.3 3.6 37.5c1.8 6.7 7.1 12 13.8 13.8C29.6 110 78.8 110 78.8 110s49.2 0 61.4-3.7c6.7-1.8 12-7.1 13.8-13.8C157.6 80.3 157.6 55 157.6 55s0-25.3-3.6-37.5z"
            fill="#FF0000"
          />
          <path d="M63 79.5L104 55 63 30.5v49z" fill="#FFF" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent p-4">
        <p className="truncate text-sm font-semibold text-paper md:text-base">{video.title}</p>
      </div>
    </a>
  );
};

export default YouTubePlayer;
