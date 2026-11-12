import type { ReactNode } from "react";
import Heading from "./Heading";

type Tone = "paper" | "tinted" | "dark";

const tones: Record<Tone, string> = {
  paper: "",
  tinted: "bg-paper-2",
  dark: "bg-ink text-paper",
};

export const Container = ({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <div className={`mx-auto w-full max-w-6xl px-4 md:px-8 ${className}`}>
    {children}
  </div>
);

export const Eyebrow = ({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${className}`}>
    {children}
  </p>
);

const Section = ({
  id,
  tone = "paper",
  eyebrow,
  title,
  titleAs = "h2",
  lead,
  align = "center",
  className = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  eyebrow?: string;
  title?: string;
  titleAs?: "h1" | "h2";
  lead?: ReactNode;
  align?: "center" | "left";
  className?: string;
  children?: ReactNode;
}) => {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const eyebrowColor = tone === "dark" ? "text-accent" : "text-primary";
  const leadColor = tone === "dark" ? "text-paper/80" : "text-ink-muted";

  return (
    <section id={id} className={`py-14 md:py-20 ${tones[tone]} ${className}`}>
      <Container>
        {(eyebrow || title || lead) && (
          <div className={`flex flex-col gap-3 mb-8 md:mb-12 ${alignClass}`}>
            {eyebrow && <Eyebrow className={eyebrowColor}>{eyebrow}</Eyebrow>}
            {title && (
              <Heading level={titleAs === "h1" ? 1 : 2} as={titleAs}>
                {title}
              </Heading>
            )}
            {lead && (
              <div className={`max-w-3xl text-base md:text-lg leading-relaxed ${leadColor}`}>
                {lead}
              </div>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;
