import FestivalContent2023 from "@/components/FestivalContent2023";
import FestivalContent2024 from "@/components/FestivalContent2024";
import FestivalContent2025 from "@/components/FestivalContent2025";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const tabs = [
  { id: "start", label: "Allmänt" },
  { id: "2023", label: "2023" },
  { id: "2024", label: "2024" },
  { id: "contact", label: "Kontakt" },
];

const Festival = () => {
  const [contentToShow, setContentToShow] = useState("start");

  return (
    <>
      <Head>
        <title>Festival | Gott snack</title>
        <meta
          name="description"
          key="description"
          content="Gott snack festival – musik, konst och gemenskap i Stockholm."
        />
        <meta property="og:title" key="og:title" content="Festival | Gott snack" />
      </Head>
      <div id="top"></div>
      <Section eyebrow="Musik, konst & gemenskap" title="Gott snack festival" titleAs="h1">
        <div
          role="tablist"
          aria-label="Festivalinnehåll"
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {tabs.map((tab) => {
            const active = contentToShow === tab.id;
            return (
              <Button
                key={tab.id}
                role="tab"
                aria-selected={active}
                variant={active ? "dark" : "secondary"}
                size="sm"
                onClick={() => setContentToShow(tab.id)}
              >
                {tab.label}
              </Button>
            );
          })}
        </div>

        <div className="prose-links mx-auto max-w-3xl text-base leading-relaxed md:text-lg">
          {contentToShow === "start" && (
            <div className="space-y-10">
              <div className="space-y-4">
                <p>
                  Gott snack festival gick av stapeln för första gången 5 augusti
                  2023 på Gröndals båtklubb i Stockholm och lockade närmare 700
                  glada besökare som njöt av magisk mat från Food trucks, grym
                  musik från hela elva akter, ett otroligt väder och en
                  kärleksfull stämning som påminner om den känsla man fick på
                  festivaler som Hultsfred, Emmaboda och Peace & Love.
                </p>
                <p>
                  Den där känslan av att musiken och gemenskapen är i fokus, inte
                  att ett stort multinationellt bolag ska maximera vinst till sina
                  aktieägare
                </p>
              </div>
              <div className="space-y-4">
                <Heading level={2}>Bakgrund</Heading>
                <p>
                  Jag (Fredrik Söderholm) har startat och driver radioprogrammet
                  Gott snack och har haft många artister och konstnärer som
                  gäster. Jag vill anordna en festival där några av dessa
                  begåvade människor får möjligheten att uppträda live och visa
                  upp sina alster. Målet med podden är att möta människor med
                  olika perspektiv och erfarenheter och målet med festivalen är
                  också att samla människor och förenas kring det vi så många av
                  oss älskar: Musik, konst & gemenskap på riktigt.
                </p>
                <div className="flex justify-center pt-2">
                  <Image
                    className="rounded-2xl shadow-card"
                    src="/fredrik_festival.png"
                    alt="Fredrik Söderholm på festivalen"
                    width={300}
                    height={323}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <Heading level={2}>Inkludering & kärlek är ledord</Heading>
                <p>
                  Samtliga medborgare är inbjudna till att närvara på denna
                  folkfest. Festivalen 2023 besöktes av 680 besökare i
                  åldersspannet 3-75. Barnfamiljer, seniorer och ungdomar trivdes
                  på samma inbjudande, varma festival. Vi hade låga biljettpriser
                  (250) men när en flykting från Ukraina dök upp vid entrén utan
                  biljett släppte vi självklart in henne. Även barn under 12 år
                  gick in gratis.
                </p>
                <p>
                  Vi kommer under vintern/våren annonsera ett open call för
                  konstnärer som vill vara med och bidra till
                  utställningar/installationer på festivalen.
                  <br />
                  Alla är välkomna att delta genom att bidra till konsten på plats
                  eller om man vill jobba som funktionär. Artister som vill spela
                  på festivalen får gratis ansöka om att delta.
                </p>
                <p>
                  Vi väljer ut ett antal akter som sedan kommer att få spela i
                  Gott snack radio för att få låta publiken lyssna och rösta på
                  vilken artist som ska få spela ett set på festivalen.
                </p>
              </div>
              <div className="space-y-4">
                <Heading level={2}>Ekonomi</Heading>
                <p>
                  Festivalen 2023 fungerade för att alla artister spelade gratis
                  och många eldsjälar jobbade ideellt. Festivalen gick cirka 50K
                  back. Målet för nästa år är att söka bidrag och sponsorer och på
                  så vis landa på plus minus noll.
                </p>
                <p>
                  Visionen är att växa organiskt och gå plus år tre eller fyra. Om
                  man klickar med gruppen och gillar konceptet finns givetvis
                  möjligheter att fortsätta vara en del av arbetsgruppen kommande
                  år och vara med och bygga Sveriges nya indie-festival
                </p>
                <div className="flex justify-center pt-2">
                  <Image
                    className="rounded-2xl shadow-card"
                    src="/festival2023_pink.png"
                    alt="Gott snack festival 2023"
                    width={500}
                    height={292}
                  />
                </div>
              </div>
            </div>
          )}
          {contentToShow === "contact" && (
            <div className="space-y-4">
              <Heading level={2}>Kontakt</Heading>
              <p>
                Gott snack festival på{" "}
                <Link
                  href="https://www.instagram.com/gott_snack_festival/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>
                <br />
                <b>Mail: </b>
                <Link href="mailto:festival@gottsnack.nu">festival@gottsnack.nu</Link>
                <br />
                <b>Telefon:</b> 070-6067591
              </p>
            </div>
          )}
          {contentToShow === "2023" && <FestivalContent2023 />}
          {contentToShow === "2024" && (
            <FestivalContent2024 setContentToShow={setContentToShow} />
          )}
          {contentToShow === "2025" && <FestivalContent2025 />}
        </div>
      </Section>
    </>
  );
};

export default Festival;
