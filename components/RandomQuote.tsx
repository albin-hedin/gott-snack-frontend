import { useEffect, useState } from "react";
import ImageWithTitle from "./ImageWithTitle";
import guestQuotes from "../guestQuotes.json";
import Button from "./ui/Button";
import Section from "./ui/Section";
import type { GuestQuote } from "@/types/guestQuote";

const getRandomQuote = (): GuestQuote =>
  guestQuotes[Math.floor(Math.random() * guestQuotes.length)];

const RandomQuote = () => {
  const [currentQuote, setCurrentQuote] = useState<GuestQuote | null>(null);

  useEffect(() => {
    // Pick the first quote after mount so server and client markup match
    const showRandomQuote = () => setCurrentQuote(getRandomQuote());
    const initial = setTimeout(showRandomQuote, 0);
    const interval = setInterval(showRandomQuote, 5000);
    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, []);

  return (
    <Section eyebrow="Citat" title="Sagt i studion">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <div className="relative min-h-[7rem] w-full">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 select-none font-display text-[7rem] font-extrabold leading-none text-accent/40"
          >
            &ldquo;
          </span>
          <blockquote className="relative font-display text-2xl font-semibold leading-snug tracking-tight md:text-4xl">
            {currentQuote?.text}
          </blockquote>
          {currentQuote?.name && (
            <p className="relative mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink-muted md:text-base">
              {currentQuote.name}
            </p>
          )}
        </div>
        {currentQuote ? (
          <ImageWithTitle picUrl={currentQuote.picUrl} alt={currentQuote.name} />
        ) : (
          <div className="h-[220px] w-[165px] md:h-[260px] md:w-[195px]" />
        )}
        <Button href="/guests#top" variant="secondary" chevron>
          Gäster vi minns
        </Button>
      </div>
    </Section>
  );
};

export default RandomQuote;
