import type { JSX } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Image from "next/image";

const facts: {
  label: string;
  key:
    | "slogan"
    | "interests"
    | "opinion"
    | "favoriteSubject"
    | "triggers"
    | "sandwich";
}[] = [
  { label: "Valslogan", key: "slogan" },
  { label: "Intressen", key: "interests" },
  { label: "Unpopular opinion", key: "opinion" },
  { label: "Favoritämnen", key: "favoriteSubject" },
  { label: "Triggers", key: "triggers" },
  { label: "Favoritmacka", key: "sandwich" },
];

const AboutModal = ({
  handleModalClick,
  modalVisable,
  coWorker,
  instaProfileUrl,
}: {
  handleModalClick: (isOpen: boolean) => void;
  modalVisable: boolean;
  coWorker: string;
  instaProfileUrl: string;
}): JSX.Element => {
  const currentCoWorker = coWorkerData.find((cw) => cw.id === coWorker);

  return (
    <Dialog
      className="relative z-50"
      open={modalVisable}
      onClose={() => handleModalClick(false)}
    >
      <DialogBackdrop className="fixed inset-0 bg-ink/60 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="relative w-full max-w-2xl rounded-3xl bg-paper p-6 shadow-card-lg md:p-10">
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink transition-colors hover:bg-ink/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/60"
            onClick={() => handleModalClick(false)}
            aria-label="Stäng"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>

          <div className="flex flex-wrap items-center gap-3 pr-12">
            <DialogTitle className="font-display text-2xl font-bold tracking-tight md:text-4xl">
              {currentCoWorker?.name}
            </DialogTitle>
            {instaProfileUrl && (
              <a
                href={instaProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                aria-label={`${currentCoWorker?.name ?? ""} på Instagram`}
                className="overflow-hidden rounded-xl shadow-card transition-transform hover:-translate-y-0.5"
              >
                <Image
                  src="/instagram-logo.jpg"
                  alt=""
                  width={36}
                  height={36}
                />
              </a>
            )}
          </div>

          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.key}>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed md:text-base">
                  {currentCoWorker?.[fact.key]}
                </dd>
              </div>
            ))}
          </dl>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

const coWorkerData = [
  {
    id: "fredrik",
    name: "Fredrik Söderholm",
    slogan: "Var lite snällare än vad situationen kräver",
    interests: "Skratta och ha kul",
    opinion: "FÖRSIKTIGT positiv till Dumpen",
    favoriteSubject: "Folks mörker & Nostalgi",
    triggers: "Triggervarningar och snack om löpning",
    sandwich: "Pågens sirapslimpa med fasansfulla mängder smör och skarp ost",
  },
  {
    id: "max",
    name: "Max Söderholm",
    slogan: "Allt smakar bättre med smält ost",
    interests: "Rock mat och stilla hemmakvällar kärestan My och Bob",
    opinion: "Dålig smak = dålig människa",
    favoriteSubject: "Rock, mat & otrevliga kändisar",
    triggers: "Samtiden",
    sandwich: "En grilled cheese-variant med jalapenos, signerad My Jonsson",
  },
  {
    id: "plommon",
    name: "Adam Plommon",
    slogan: "Mer åt alla hela tiden",
    interests: "Kollektivtrafik och damer",
    opinion: "Abort bör vara tillåtet fram till att man klippt navelsträngen",
    favoriteSubject: "Droger och hjärnan, personlig hygien samt tåg",
    triggers: "Folk som har mammor",
    sandwich:
      "Köttmacka (kallt, grillat nöt/fläsk kött från grillfesten innan serverat mellan två skivor rostbröd med bea och grillkrydda",
  },
  {
    id: "micke",
    name: "Mikael Ljungberg",
    slogan: "Rättigheter - men framförallt skyldigheter",
    interests: "Sport och fritid",
    opinion: '"Ryck upp dig" är den bästa terapin',
    favoriteSubject: "Hockey och allt som rör norra dalarna",
    triggers: "Kroppsaktivister och långa naglar (obs även lösnaglar)",
    sandwich:
      "Skogaholmslimpa med leverpastej och smörgåsgurka (Önos mor Annas)",
  },
  {
    id: "tollstoy",
    name: "Rickard Tollstoy",
    slogan: "Trygghet. Trivlse. Tollstoy",
    interests: "Adventures, song and mead",
    opinion: '"Springsteen är tvåplus',
    favoriteSubject: "Vädret",
    triggers: "Dålig andedräkt",
    sandwich: "Croque Monsieur med hutlösa mängder dijon",
  },
  {
    id: "tore",
    name: "Tore Kullgren",
    slogan: "Gör bättre själv då!",
    interests: "Standup, geografi och killyoga",
    opinion: "Avskaffa kravet att simma 200 meter i årskurs 6",
    favoriteSubject: "Arkitektur, kriget i Ukraina och dejting",
    triggers: "Identitetspolitik och astrologi",
    sandwich: "Färska räkor på rågbröd",
  },
  {
    id: "sanna",
    name: "Sanna Dollan",
    slogan:
      "Jag är redo att dö för er men ni får göra det mesta av jobbet själva",
    interests: "Real housewives of New York, läsa, böcker och GTA",
    opinion: "Det JK Rowling sa var väl inte så jävla farligt",
    favoriteSubject: "Kändisbarn, Black panthers och JonBenét Ramsey",
    triggers: "När någon förminskar mig eller ser ner på mig",
    sandwich: "Grillad kyckling och majonnäs",
  },
  {
    id: "agge",
    name: "August Bohlin",
    slogan: '"Ta någon annan först jag måste tänka lite"',
    interests: "Bygga lägerplatser av schysta pinnar och gott doftande barr!",
    opinion: "Det ÄR skönt att beställa foodora i snöstorm",
    favoriteSubject: "Historiska skepp gärna sänkta av andra historiska skepp",
    triggers:
      "Är du för gammal för att cyckla i rimlig fart (minst 20km/h) avstå gärna och sluta stanna upp hela cykelvägen",
    sandwich: "Klassisk toast men glöm inte att ta bort kanterna på skinkan",
  },
  {
    id: "ballafjang",
    name: 'Petter "Ballafjang" Ströbaek',
    slogan: "Kriminalisera allt",
    interests: "Musik",
    opinion: "Mobbning är kul",
    favoriteSubject: "Melodifestivalen 1986",
    triggers: "Persilja",
    sandwich: "New york style bagel med gravlax",
  },
  {
    id: "sagah",
    name: "Sagah Larsson",
    slogan: "Inte gett upp än",
    interests: "Gud, Marabou helnöt, rock från 92-99 och schack",
    opinion: "Alla med katt är psykiskt sjuka",
    favoriteSubject: "Helium och väte",
    triggers: "Folk som snyter sig, spoken word poesi, sand",
    sandwich: "Lingongrova, philadelphia, kalkon, tomat, örtsalt",
  },
  {
    id: "petrina",
    name: "Petrina Hinas",
    slogan: "Slogan, är det 1997 eller?",
    interests: "Efter Jonatan Unges krönika om kvinnor säger jag pass",
    opinion: "Här? Att jag gillar public service",
    favoriteSubject:
      "Usch vilken jobbig fråga, skvaller, politik, sex & relationer",
    triggers: "Smala yngre tjejer och sär skrivningar",
    sandwich: "Dubbelmackan",
  },
  {
    id: "zorbas",
    name: "Zorbas Newton",
    slogan: '"Kriminalisera allt"',
    interests: "Böcker om gubbar som betett sig illa",
    opinion:
      "Alla stockholmare bör göra lumpen ett år genom att bo i en svensk småstad",
    favoriteSubject: "Bardomsminnen",
    triggers: "Poliser på sociala medier",
    sandwich: "Lätt rostad formfranska med slapp prästost",
  },
  {
    id: "andre",
    name: "André Miettinen Persson",
    slogan: "Ha d gott! Glenn",
    interests: "Alla killintressen som finns tror jag",
    opinion: "Älskar public service",
    favoriteSubject: "All jävla sport och reality tyvärr",
    triggers: "Idioter på twitter främst. Och jag är en av dem",
    sandwich: "Just nu en go BLT mellan två välrostade rågbrödskillar",
  },
  {
    id: "jesper",
    name: "Jesper Ekstedt",
    slogan: "Stopp och belägg",
    interests: "Fundera, åka Voi",
    opinion: "Plant-based burgare är vidriga",
    favoriteSubject: "Fastighetsjuridik och skavande anekdoter",
    triggers: '"Forskningen visar"',
    sandwich: "Allt med salami eller curry. Var för sig",
  },
  {
    id: "otto",
    name: 'Otto "HEMAN" Larsson',
    slogan: "Det finns nog med Otto till alla som vill ha, och lite till...",
    interests:
      "Månskens promenader i VR, hämtmatsfinedining, gåtor och cannabis!",
    opinion: "Ananas på pizza är en grje, banan är inte!",
    favoriteSubject: "Narkotikapolitik och kändisskvaller",
    triggers: "Icke korrekt pasta carbonara, orättvisor och typ allt annat",
    sandwich: "Smörgåstårta",
  },
  {
    id: "fanny",
    name: "Fanny Klefelt",
    slogan: "Frihetsberöva män som tar selfies",
    interests: "Mord, katastrofer och ond bråd död",
    opinion: "Har inga, är en opinion popular så är det den jag har",
    favoriteSubject: "Mig själv",
    triggers: "Mig själv",
    sandwich:
      "Allt med mycket ost och krispigt bröd? Gillar inte att ta i för hårt med tänderna",
  },
  {
    id: "bruce",
    name: "Bruce & Räkan",
    slogan: "Man har bara nio liv",
    interests: "Sova, äta, gosa och krafsa frenetikst på ishinken",
    opinion: "Tonfisk lite överskattat ändå?",
    favoriteSubject: "Jakt, fiske och mat",
    triggers: "Folk som inte släpper in under tröjan",
    sandwich: "Räkmacka",
  },
];

export default AboutModal;
