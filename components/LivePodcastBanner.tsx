import Link from "next/link";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { useEffect, useState } from "react";

const LivePodcastBanner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 py-16 px-4 overflow-hidden"
        style={{
          minHeight: "450px",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/gs-live.jpg)",
            backgroundSize: "cover",
            backgroundPosition: `center ${75 - scrollY * 0.05}%`,
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center md:items-center text-center">
          <div
            style={{
              textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            }}
            className="font-semibold"
          >
            <SectionHeader text="Gott Snack Live" />
          </div>
          <span className="text-white lg:text-2xl md:text-lg text-sm mt-2">
            Fredag 12 juni 2026
          </span>
          <span className="text-white lg:text-xl md:text-lg text-sm">
            Södra Teaterns Stora Scen i Stockholm
          </span>
          <div
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
            className="lg:text-xl md:text-lg font-sans mb-4 text-sm text-white mt-1"
          >
            Missa inte vår live podcast!
          </div>
          <div>
            <button>
              <Link
                href="https://secure.tickster.com/sv/mhkdv5yyvlpt6d0/seating#seatings-container"
                target="_blank"
                style={{ textDecoration: "none !important" }}
              >
                <div
                  className="patreon-button rounded-xl flex justify-between px-4 py-3 items-center gap-1"
                  style={{ backgroundColor: "#D66821", textDecoration: "none" }}
                >
                  <span className="text-white text-lg roboto-font font-bold">
                    Köp biljetter
                  </span>
                  <div>
                    <Image
                      src="/icons8-chevron-right-30.png"
                      alt=""
                      width={25}
                      height={25}
                    />
                  </div>
                </div>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LivePodcastBanner;
