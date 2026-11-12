import type { ReactNode } from "react";

const Card = ({
  className = "",
  padded = true,
  children,
}: {
  className?: string;
  padded?: boolean;
  children: ReactNode;
}) => (
  <div
    className={`rounded-3xl bg-paper-2 shadow-card ${padded ? "p-5 md:p-6" : ""} ${className}`}
  >
    {children}
  </div>
);

export default Card;
