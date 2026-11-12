import type { JSX } from "react";
import Image from "next/image";
import MixlrPlayer from "./MixlrPlayer";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import Section from "./ui/Section";
import Card from "./ui/Card";
import Heading from "./ui/Heading";

const ListenLive = (): JSX.Element => {
  return (
    <Section id="lyssna" eyebrow="Mixlr & Spotify" className="pt-10 md:pt-14">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="flex flex-col gap-4">
          <Heading level={3}>Mixlr</Heading>
          <div className="overflow-hidden rounded-2xl">
            <MixlrPlayer />
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.mixlr.android&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:-translate-y-0.5"
            >
              <Image
                src="/androidstore.png"
                alt="Ladda ned Mixlr på Google Play"
                width={140}
                height={50}
              />
            </a>
            <a
              href="https://apps.apple.com/se/app/mixlr-social-live-audio/id583705714"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:-translate-y-0.5"
            >
              <Image
                src="/applestore.png"
                alt="Ladda ned Mixlr på App Store"
                width={140}
                height={50}
              />
            </a>
          </div>
        </Card>
        <Card className="flex flex-col gap-4">
          <Heading level={3}>Spotify</Heading>
          <div className="overflow-hidden rounded-2xl">
            <SpotifyPlayer />
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default ListenLive;
