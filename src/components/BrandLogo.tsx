import React from "react";

interface BrandLogoProps {
  variant?: "header" | "footer";
  onClick?: () => void;
}

export default function BrandLogo({ variant = "header", onClick }: BrandLogoProps) {
  const isFooter = variant === "footer";

  return (
    <div
      onClick={onClick}
      className={`flex items-center cursor-pointer group select-none ${
        onClick ? "hover:opacity-95 transition-opacity" : ""
      }`}
      id="brand-main-logo"
    >
      {/* Brand Typography Only */}
      <div>
        <span
          className={`block text-base tracking-[0.18em] font-extrabold uppercase leading-tight font-sans ${
            isFooter
              ? "text-white group-hover:text-red-400 transition-colors"
              : "text-[#0C1E36] group-hover:text-[#f80d05] transition-colors"
          }`}
        >
          Okello Odhiambo
        </span>
        <span
          className={`block text-[10px] tracking-[0.22em] uppercase font-mono font-bold leading-none mt-1 ${
            isFooter ? "text-red-400" : "text-[#f80d05]"
          }`}
        >
          Software &amp; House Ventures
        </span>
      </div>
    </div>
  );
}
