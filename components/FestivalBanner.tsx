import SectionHeader from "./SectionHeader";
import CtaLink from "./CtaLink";

const FestivalBanner = () => {
  return (
    <>
      <div
        className={`text-center flex flex-col items-center md:festival-bg-image festival-bg-image-small`}
      >
        <div
          style={{
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          }}
          className="mt-2 font-semibold"
        >
          <SectionHeader text="Gott snack festival" />
        </div>
        <div className="mb-6 mt-4">
          <CtaLink href="/festival#top" text="Läs mer" />
        </div>
      </div>
    </>
  );
};

export default FestivalBanner;
