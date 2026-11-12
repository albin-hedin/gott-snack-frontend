import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

const FestivalContent2024 = ({
  setContentToShow,
}: {
  setContentToShow: (contentToShow: string) => void;
}) => {
  return (
    <div className="space-y-4">
      <Heading level={2}>Festivalen 2024</Heading>
      <p>
        Gott snack festival kommer i år att arrangeras på Stadsgårdsterminalen
        den 2 & 3 augusti med stöd av Stockholms stad och Kulturrådet. Förra
        året blev en succé där 700 gäster dansade in sommarnatten till ljus
        musik. På området kommer det dessutom finnas två barer, foodtrucks,
        co-creation, loungehäng, schyssta viner utvalda av sommelier,
        närproducerad öl från Fjäderholmarnas bryggeri och hard seltzer i goda
        smaker från Kubik.
      </p>
      <p>
        Upplev detta tillsammans med underbar livemusik från artister som{" "}
        <b>Llojd, Boys and Ivy, Tiger</b> och <b>Aasma</b>. Fler STORA släpp
        kommer snart, följ oss på{" "}
        <Link
          href="https://www.instagram.com/gott_snack_festival/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Link>{" "}
        för uppdateringar! Köp dina biljetter nu och åk med på det kärleksfulla
        tåget som är Stockholms enda nya indie-festival!
      </p>
      <p>
        Alla ska trivas och känna sig välkomna på festivalen. Om du har
        särskilda behov eller önskemål för tillgänglighetsanpassning, såsom
        tillgång till handikapptoalett eller en reserverad plats på ett
        avspärrat område, är vi här för att hjälpa till.
        <br />
        <button
          type="button"
          className="font-semibold text-primary underline decoration-primary/40 underline-offset-[3px] hover:text-primary-deep hover:decoration-current"
          onClick={() => setContentToShow("contact")}
        >
          Kontakta oss gärna
        </button>{" "}
        så gör vi vårt absolut bästa för att tillgodose dina behov. Vi vill göra
        din festivalupplevelse så rolig, trevlig och smidig som möjligt!
      </p>
      <p>Liten festival = väldigt begränsat antal biljetter!</p>
      <div className="flex justify-center pt-2">
        <Button
          href="https://billetto.se/e/gott-snack-festival-biljetter-969436?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=1"
          external
          size="lg"
          chevron
        >
          Biljetter (billetto.se)
        </Button>
      </div>
      <div className="flex justify-center pt-2">
        <Image
          className="rounded-2xl shadow-card"
          src="/festival24/poster24WithText.JPG"
          alt="Affisch för Gott snack festival 2024"
          width={400}
          height={484}
        />
      </div>
    </div>
  );
};

export default FestivalContent2024;
