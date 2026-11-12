import Image from "next/image";
import Button from "./ui/Button";
import { Container, Eyebrow } from "./ui/Section";

const Hero = () => {
  return (
    <div className="relative">
      <div className="relative h-[230px] w-full sm:h-[320px] md:h-[520px] lg:h-[600px]">
        <Image
          src="/background-startpage.jpg"
          alt="Fredrik Söderholm med katten Bruce och Gott snack-loggan"
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-paper via-paper/60 to-transparent"
        />
      </div>

      <Container className="relative -mt-10 md:-mt-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl bg-paper px-6 py-6 text-center shadow-card-lg ring-1 ring-ink/5 md:flex-row md:justify-between md:px-8 md:text-left">
          <div>
            <Eyebrow className="flex items-center justify-center gap-2 text-primary md:justify-start">
              <span
                aria-hidden="true"
                className="relative inline-flex h-2.5 w-2.5"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              Sänds live
            </Eyebrow>
            <p className="mt-1 font-display text-2xl font-bold tracking-tight md:text-4xl">
              Måndag – torsdag 15:00 – 16:30
            </p>
          </div>
          <Button href="#lyssna" chevron>
            Lyssna nu
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
