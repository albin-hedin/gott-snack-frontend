import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./ui/Button";
import { Container } from "./ui/Section";

const navItems = [
  { href: "/", label: "Hem" },
  { href: "/festival", label: "Festival" },
  { href: "/guests", label: "Gäster vi minns" },
];

export const Wordmark = ({ className = "" }: { className?: string }) => (
  <span
    className={`font-display font-extrabold tracking-tight uppercase text-primary ${className}`}
  >
    Gott snack
  </span>
);

const SiteHeader = () => {
  const { pathname } = useRouter();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3">
        <Link
          href="/"
          aria-label="Gott snack – startsida"
          className="flex items-center"
        >
          <Wordmark className="text-2xl leading-none" />
        </Link>

        <nav
          aria-label="Huvudmeny"
          className="order-last w-full md:order-none md:w-auto"
        >
          <ul className="-mx-3 flex items-center gap-1 md:mx-0">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-block rounded-full px-3 py-1.5 text-sm font-semibold transition-colors md:text-base ${
                      active
                        ? "bg-ink text-paper"
                        : "text-ink/75 hover:bg-ink/5 hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Button href="/#lyssna" size="sm">
          <span aria-hidden="true" className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-paper opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-paper" />
          </span>
          Lyssna
        </Button>
      </Container>
    </header>
  );
};

export default SiteHeader;
