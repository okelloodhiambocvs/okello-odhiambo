import React from "react";

interface BrandLogoProps {
  variant?: "header" | "footer";
  onClick?: () => void;
}

export default function BrandLogo({ variant = "header", onClick }: BrandLogoProps) {
  const isFooter = variant === "footer";

  const content = (
    <div className="text-left">
      <span
        className={`block text-sm sm:text-base tracking-[0.18em] font-extrabold uppercase leading-tight font-sans whitespace-nowrap ${
          isFooter
            ? "text-white group-hover:text-[#f80d05] transition-colors"
            : "text-white group-hover:text-[#f80d05] transition-colors"
        }`}
      >
        Okello Odhiambo
      </span>
      <span
        className="block text-[10px] tracking-[0.2em] uppercase font-mono font-bold leading-none mt-1 whitespace-nowrap text-[#f80d05]"
      >
        Software &amp; House Ventures
      </span>
    </div>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="flex items-center cursor-pointer group select-none hover:opacity-95 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f80d05] rounded-sm shrink-0"
        id="brand-main-logo"
        aria-label="Okello Odhiambo — Return to top"
      >
        {content}
      </button>
    );
  }

  return (
    <div className="flex items-center select-none shrink-0" id="brand-main-logo">
      {content}
    </div>
  );
}
