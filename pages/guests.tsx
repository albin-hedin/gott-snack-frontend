import Head from "next/head";
import ImageWithTitle from "@/components/ImageWithTitle";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import guestQuotes from "../guestQuotes.json";
import type { GuestQuote } from "@/types/guestQuote";

const hiddenPicUrls = ["/portraits/JESPER-kopia-1097x1536.jpg", "/portraits/question.jpg"];

const nameOverrides: Record<string, string> = {
  "/portraits/konstab.jpg": "KonstAB",
};

const uniqueGuests: GuestQuote[] = [
  ...new Map(guestQuotes.map((quote) => [quote.picUrl, quote])).values(),
]
  .filter((quote) => !hiddenPicUrls.includes(quote.picUrl))
  .map((quote) => ({ ...quote, name: nameOverrides[quote.picUrl] ?? quote.name }));

const Guests = () => {
  return (
    <>
      <Head>
        <title>Gäster vi minns | Gott snack</title>
        <meta
          name="description"
          key="description"
          content="Gäster och citat vi minns från Gott snack."
        />
        <meta property="og:title" key="og:title" content="Gäster vi minns | Gott snack" />
      </Head>
      <div id="top"></div>
      <Section eyebrow="Citat" title="Gäster vi minns" titleAs="h1">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {uniqueGuests.map((quote) => (
            <li key={quote.picUrl} className="flex">
              <Card className="flex w-full flex-col items-center gap-4 text-center">
                <ImageWithTitle picUrl={quote.picUrl} alt={quote.name} />
                <h2 className="font-display text-xl font-bold tracking-tight md:text-2xl">
                  {quote.name}
                </h2>
                <blockquote className="text-base italic leading-relaxed text-ink-muted md:text-lg">
                  {quote.text}
                </blockquote>
              </Card>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};

export default Guests;
