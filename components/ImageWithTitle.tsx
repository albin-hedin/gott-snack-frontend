import type { JSX } from "react";
import Image from "next/image";

const frame =
  "relative w-[165px] h-[220px] md:w-[195px] md:h-[260px] overflow-hidden rounded-[2rem] bg-paper-2 shadow-card ring-4 ring-paper";

const ImageWithTitle = ({
  title,
  picUrl,
  alt,
  onClick,
  sizes = "(min-width: 768px) 195px, 165px",
}: {
  title?: string;
  picUrl: string;
  alt?: string;
  onClick?: () => void;
  sizes?: string;
}): JSX.Element => {
  const altText = alt ?? title ?? "";

  const image = (
    <Image
      src={picUrl}
      alt={altText}
      fill
      sizes={sizes}
      className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
    />
  );

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {title && (
        <p className="font-display text-lg font-semibold tracking-tight md:text-xl">
          {title}
        </p>
      )}
      {onClick ? (
        <button
          type="button"
          aria-label={title ? `Läs mer om ${title}` : undefined}
          onClick={onClick}
          className={`group ${frame} transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-accent`}
        >
          {image}
        </button>
      ) : (
        <div className={frame}>{image}</div>
      )}
    </div>
  );
};

export default ImageWithTitle;
