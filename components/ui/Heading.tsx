import type { ReactNode } from "react";

type Level = 1 | 2 | 3;

const styles: Record<Level, string> = {
  1: "font-display font-bold tracking-tight text-4xl md:text-6xl leading-[1.05]",
  2: "font-display font-bold tracking-tight text-3xl md:text-5xl leading-[1.08]",
  3: "font-display font-semibold tracking-tight text-xl md:text-2xl leading-snug",
};

const Heading = ({
  level,
  as,
  className = "",
  children,
}: {
  level: Level;
  /** Render as a different element than the visual level implies */
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  children: ReactNode;
}) => {
  const Tag = as ?? (`h${level}` as "h1" | "h2" | "h3");
  return <Tag className={`${styles[level]} ${className}`}>{children}</Tag>;
};

export default Heading;
