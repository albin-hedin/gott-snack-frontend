import type { JSX } from "react";
import ImageWithTitle from "./ImageWithTitle";
import Section from "./ui/Section";

const team = [
  { title: "Fredrik", picUrl: "/portraits/FREDRIK-kopia-1097x1536.jpg", id: "fredrik", insta: "https://www.instagram.com/genietsoderholm/" },
  { title: "August", picUrl: "/portraits/AUGUST-kopia-1097x1536.jpg", id: "agge", insta: "https://www.instagram.com/aggeinthehus/" },
  { title: "Max", picUrl: "/portraits/MAX-1-kopia-732x1024.jpg", id: "max", insta: "https://www.instagram.com/seniorsoderholm/" },
  { title: "Jesper", picUrl: "/portraits/JESPER-kopia-1097x1536.jpg", id: "jesper", insta: "https://www.instagram.com/jesperekstedt/" },
  { title: "Micke", picUrl: "/portraits/MICKE-kopia-1097x1536.jpg", id: "micke", insta: "https://www.instagram.com/mikaelljungberg_/" },
  { title: "Fanny", picUrl: "/portraits/FANNY-kopia-1628x2048.jpeg", id: "fanny", insta: "https://www.instagram.com/tjafanny/" },
  { title: "Petrina", picUrl: "/portraits/PETRINA_Gott_Snack_PORTRAIT_3739_LOW_RES.jpg", id: "petrina", insta: "https://www.instagram.com/petrinahinas/" },
  { title: "André", picUrl: "/portraits/ANDRE-kopia-1097x1536.jpg", id: "andre", insta: "https://www.instagram.com/andreperssooon/" },
  { title: "Bruce & Räkan", picUrl: "/portraits/cats.png", id: "bruce", insta: "https://www.instagram.com/gottsnackradio/" },
];

const Gottsnackteam = ({
  handleModalClick,
}: {
  handleModalClick: (isOpen: boolean, coWorker?: string, instaUrl?: string) => void;
}): JSX.Element => {
  return (
    <Section
      tone="tinted"
      eyebrow="Familjen"
      title="Gott snack familjen"
      lead={
        <div className="space-y-4">
          <p>
            Gott Snack grundades av Fredrik Geniet Söderholm år 2020. Projektet
            drogs igång med ambitionen att sända ofiltrerad och gränslös radio –
            på Geniets sätt.
          </p>
          <p>
            Allt började med en insamling på Patreon i november 2019, där
            frivilliga följare kunde donera sina små eller stora bidrag. Det hela
            gick fort, insamlingen skramlade gott och snart hade projektet landat
            i en studio på Ringvägen, bra utrustning och trogna lyssnare – som
            ännu finansierar merparten av Gott Snack.
          </p>
          <p>
            Gott snack behövs för att människor som inte passar in i public
            service eller de kommersiella kanalernas likriktade mallar också ska
            få en chans att säga sin mening och få höras i etern. Hur dessa
            människor ser ut, var de kommer från, hur gamla de är spelar ingen
            roll, vi vill ha en mix av människor från från alla samhällsskikt i
            mitt program.
          </p>
        </div>
      }
    >
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
