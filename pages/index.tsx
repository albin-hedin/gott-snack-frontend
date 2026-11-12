import FestivalBanner from "@/components/FestivalBanner";
import Gottsnackteam from "@/components/GottSnackTeam";
import Hero from "@/components/Hero";
import ListenLive from "@/components/ListenLive";
import AboutModal from "@/components/modals/AboutModal";
import RandomQuote from "@/components/RandomQuote";
import SupportUs from "@/components/SupportUs";
import YouTubeSection from "@/components/YouTubeSection";
import { useState } from "react";

const Home = () => {
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [aboutModalCoworker, setAboutModalCoworker] = useState("");
  const [aboutModalInstaUrl, setAboutModalInstaUrl] = useState("");

  const handleAboutModalClick = (
    isOpen: boolean,
    coWorker?: string,
    instaUrl?: string,
  ): void => {
    setAboutModalOpen(isOpen);
    setAboutModalCoworker(coWorker ?? "");
    setAboutModalInstaUrl(instaUrl ?? "");
  };

  return (
    <>
      <h1 className="sr-only">Gott snack – podd och radio live</h1>
      <Hero />
      <ListenLive />
      <YouTubeSection />
      <SupportUs />
      <RandomQuote />
      <FestivalBanner />
      <Gottsnackteam handleModalClick={handleAboutModalClick} />
      <AboutModal
        modalVisable={aboutModalOpen}
        handleModalClick={handleAboutModalClick}
        coWorker={aboutModalCoworker}
        instaProfileUrl={aboutModalInstaUrl}
      />
    </>
  );
};

export default Home;
