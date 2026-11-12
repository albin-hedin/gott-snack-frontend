import Image from "next/image";
import Link from "next/link";
import { Wordmark } from "./SiteHeader";
import { Container } from "./ui/Section";

const socials = [
  { href: "https://www.instagram.com/gottsnackradio/?hl=en", title: "Instagram", src: "/instagram-logo.jpg" },
  { href: "https://www.patreon.com/gottsnack/", title: "Patreon", src: "/patreon.png" },
  { href: "https://gott-snack.mixlr.com/", title: "Mixlr", src: "/mixlr-logo.png" },
  { href: "https://www.youtube.com/GOTTSNACK", title: "YouTube", src: "/yt-logo.png" },
];

const Footer = () => {
  return (
    <footer className="border-t border-ink/10 py-8 md:py-10">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <Link href="/" aria-label="Gott snack – startsida">
            <Wordmark className="text-xl" />
          </Link>
          <p className="text-xs text-ink-muted md:text-sm">&copy; Bing bong AB</p>
        </div>
        <ul className="flex flex-row items-center gap-3">
          {socials.map((s) => (
            <li key={s.title}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.title}
                aria-label={`Gott snack på ${s.title}`}
                className="block overflow-hidden rounded-xl shadow-card transition-transform hover:-translate-y-0.5"
              >
                <Image src={s.src} alt="" width={40} height={40} />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
