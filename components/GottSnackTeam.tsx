import type { JSX } from "react";
import Image from "next/image";
import ImageWithTitle from "./ImageWithTitle";
import Section from "./ui/Section";

const team = [
  {
    title: "Fredrik",
    picUrl: "/portraits/FREDRIK-kopia-1097x1536.jpg",
    id: "fredrik",
    insta: "https://www.instagram.com/genietsoderholm/",
  },
  {
    title: "August",
    picUrl: "/portraits/AUGUST-kopia-1097x1536.jpg",
    id: "agge",
    insta: "https://www.instagram.com/aggeinthehus/",
  },
  {
    title: "Sanna Dollan",
    picUrl: "/portraits/sanna.png",
    id: "sanna",
    insta: "https://www.instagram.com/sannadollan/",
  },
  {
    title: "Max",
    picUrl: "/portraits/MAX-1-kopia-732x1024.jpg",
    id: "max",
    insta: "https://www.instagram.com/seniorsoderholm/",
  },
  {
    title: "Bruce & Räkan",
    picUrl: "/portraits/cats.png",
    id: "bruce",
    insta: "https://www.instagram.com/gottsnackradio/",
  },
];

const Gottsnackteam = ({
  handleModalClick,
}: {
  handleModalClick: (
    isOpen: boolean,
    coWorker?: string,
    instaUrl?: string,
  ) => void;
}): JSX.Element => {
  return (
    <Section
      tone="tinted"
      eyebrow="Familjen"
      title="Gott snack familjen"
      lead={
        <div className="space-y-4">
          <p>
            Gott snack är oberoende, lyssnarfinansierad radio som också streamar
            på youtube! Vi vågar påstå att vi har en mix av gäster och innehåll
            som ingen annan. Vi tar tramset på allvar och tramsar med allvaret!
            Kändisar med blandad dignitet delar rum med tunga politiker, vänner
            och familj.
          </p>
          <p>
            När vi startade 20020 ville vi göra helt fri, filterlös punkig
            morgonradio och idag, sju år senare, gör vi fortfarande det, enda
            skillnaden är att vi sänder på eftermiddagen istället! När vi säger
            filterlös så betyder det filterlös på riktigt, inte filterlös på det
            där sättet alla andra som devalverar ordet gör.
          </p>
          <p>
            Vi pratar med problematiska och helt oproblematiska personer och är
            övertygade om att våra lyssnare själva kan avgöra vilka idéer och
            åsikter som är värda att ta på allvar. Vi tror på samtalet som vägen
            framåt i de allra flesta situationer och att förstå världen utan att
            prata med sina meningsmotståndare är en omöjlig uppgift. Vi tror
            också att skratt och humor är viktigare än någonsin i en samtid
            djupt färgad av splittring och polarisering.
          </p>
          <p>
            Som Patron får du varje vardag hela sändningen – cirka 30 minuter
            efter avslutad sändning! Hela programmet är 90 minuter långt och
            ibland blir det eftersnack som du får tillgång till om du betalar
            100:- per månad eller mer! Om ni vill komma i kontakt med oss skriv
            en rad till fredrik@gottsnack.nu Vi är öppna för sponsorer men vi
            finns tack vare alla våra kära prenumeranter som betalar en valfri
            summa varje månad på patreon.com/gottsnack.
          </p>
        </div>
      }
    >
      <Image
        src="/HEADER-kontrast.png"
        alt="Gott snack familjen"
        width={6000}
        height={1605}
        sizes="(max-width: 1024px) 100vw, 1024px"
        className="mx-auto mb-10 h-auto w-full max-w-5xl rounded-2xl"
      />
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-10">
        {team.map((member) => (
          <li key={member.id}>
            <ImageWithTitle
              title={member.title}
              picUrl={member.picUrl}
              onClick={() => handleModalClick(true, member.id, member.insta)}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Gottsnackteam;
