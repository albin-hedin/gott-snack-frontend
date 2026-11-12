import Image from "next/image";
import Section from "./ui/Section";
import Button from "./ui/Button";

const SupportUs = () => {
  return (
    <Section
      tone="dark"
      eyebrow="Patreon"
      title="Stötta oss"
      lead="Som Patron får du varje vardag hela sändningen på två timmar – cirka 30 minuter efter avslutad sändning"
    >
      <div className="flex justify-center">
        <Button
          href="https://www.patreon.com/gottsnack/"
          external
          size="lg"
          className="pl-2"
          chevron
        >
          <Image
            className="rounded-full"
            src="/patreon.png"
            alt=""
            width={44}
            height={44}
          />
          Gott snack Patreon
        </Button>
      </div>
    </Section>
  );
};

export default SupportUs;
