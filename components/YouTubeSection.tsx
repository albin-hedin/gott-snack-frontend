import YouTubePlayer from "./YouTubePlayer";
import Section from "./ui/Section";

const YouTubeSection = () => {
  return (
    <Section eyebrow="YouTube" className="pt-0 md:pt-0">
      <div className="mx-auto max-w-2xl">
        <YouTubePlayer />
      </div>
    </Section>
  );
};

export default YouTubeSection;
