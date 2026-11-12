import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/ui/Heading";

const press = [
  {
    href: "https://gaffa.se/nyheter/2023/maj/gott-snack-ny-endagsfestival-till-stockholm/",
    src: "/gaffa.png",
    alt: "Gaffa",
    width: 120,
  },
  {
    href: "https://ng.se/artiklar/fredrik-soderholm-startar-festival",
    src: "/nojesguiden.png",
    alt: "Nöjesguiden",
    width: 140,
  },
  {
    href: "https://www.mitti.se/nyheter/fredrik-bjuder-in-till-festival-pa-barndomens-ravudden-6.3.82585.e1b32dca83",
    src: "/mittisthlm.png",
    alt: "Mitt i Stockholm",
    width: 140,
  },
];

const gallery = [
  "/gs-festival.jpg",
  "/forfest.jpg",
  "/festrival_funk.jpg",
  "/planch4.jpg",
  "/planch5.jpg",
  "/planch6.jpg",
  "/planch3.jpg",
  "/planch2.jpg",
  "/planch.jpg",
  "/planch7.jpg",
];

const FestivalContent2023 = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Heading level={2}>Festivalen 2023</Heading>
        <p>
          Första upplagan av Gott snack festivalen BLIR av lördagen den 5 augusti
          2023 vid Gröndals båtklubb!
          <br />
          Köp en biljett eller två så att vi äntligen kan sjösätta Stockholms nya
          kärleksfulla endags-festival!
        </p>
        <p>
          Följ gärna festivalen på{" "}
          <Link
            href="https://www.instagram.com/gott_snack_festival/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </Link>{" "}
          och kolla in evenemanget på{" "}
          <Link
            href="https://www.facebook.com/events/3412056322456299"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </Link>
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted">
          Läs om festivalen på
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {press.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="overflow-hidden rounded-xl bg-paper-2 p-2 shadow-card transition-transform hover:-translate-y-0.5"
            >
              <Image
                className="rounded-lg"
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.width}
              />
            </Link>
          ))}
        </div>
      </div>

      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {gallery.map((src) => (
          <li key={src} className="relative aspect-square overflow-hidden rounded-2xl bg-paper-2 shadow-card">
            <Image
              src={src}
              alt="Bild från Gott snack festival 2023"
              fill
              sizes="(min-width: 768px) 256px, 50vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FestivalContent2023;
