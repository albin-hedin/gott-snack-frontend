import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/60 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-paper shadow-card hover:bg-primary-deep hover:-translate-y-0.5",
  secondary:
    "bg-ink/5 text-ink ring-1 ring-ink/10 hover:bg-ink/10 hover:-translate-y-0.5",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
  dark: "bg-ink text-paper shadow-card hover:bg-ink/85 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-7 py-4 text-lg",
};

export const Chevron = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m9 6 6 6-6 6" />
  </svg>
);

type Common = {
  variant?: Variant;
  size?: Size;
  chevron?: boolean;
  className?: string;
  children: ReactNode;
};

type LinkProps = Common & {
  href: string;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type NativeProps = Common & {
  href?: undefined;
  external?: undefined;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export type ButtonProps = LinkProps | NativeProps;

const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    size = "md",
    chevron,
    className = "",
    children,
    href,
    external,
    ...rest
  } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {children}
      {chevron && <Chevron className={size === "sm" ? "w-4 h-4" : "w-5 h-5"} />}
    </>
  );

  if (href !== undefined) {
    const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...anchorRest}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {content}
      </Link>
    );
  }

  const { type, ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type ?? "button"} className={classes} {...buttonRest}>
      {content}
    </button>
  );
};

export default Button;
