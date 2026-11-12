import Image from "next/image";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import { Container, Eyebrow } from "./ui/Section";

const FestivalBanner = () => {
  return (
    <section className="py-6 md:py-10">
      <Container>
        <div className="grid overflow-hidden rounded-3xl bg-paper-2 shadow-card-lg md:grid-cols-2">
          <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[360px]">
            <Image
              src="/festival24/new-cat-festival.jpg"
              alt="Illustration av en sphynxkatt som flyter i en badring"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[55%_32%]"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-4 p-6 md:p-10">
            <Eyebrow className="text-primary">Musik, konst & gemenskap</Eyebrow>
            <Heading level={2}>Gott snack festival</Heading>
            <Button href="/festival#top" chevron>
              Läs mer
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FestivalBanner;
