import React from "react";
import { SafeImage } from "./FounderGallery";
import servicesHeroCutout from "../assets/images/services_silver_cutout.png";
import atsCvHeroCutout from "../assets/images/ats_cv_cutout_clean.png";
import contactOfficeHeroCutout from "../assets/images/contact_office_cutout.png";

function HeroVisualCutout({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative w-full max-w-[460px] lg:max-w-[540px] h-[290px] sm:h-[360px] lg:h-[420px] flex items-center justify-center select-none">
      <SafeImage
        primarySrc={src}
        fallbackSrc={src}
        alt={alt}
        className="w-full h-full object-contain object-center drop-shadow-[0_18px_36px_rgba(0,0,0,0.4)]"
      />
    </div>
  );
}

export function ServicesHeroVisual() {
  return (
    <HeroVisualCutout
      src={servicesHeroCutout}
      alt="Silver software engineering laptop alongside bound corporate prospectus, crimson portfolio, and brass fountain pen"
    />
  );
}

export function AtsHeroVisual() {
  return (
    <HeroVisualCutout
      src={atsCvHeroCutout}
      alt="Executive CV and curriculum vitae resume pages fanned inside a navy and crimson folder with glasses and fountain pen"
    />
  );
}

export function ContactHeroVisual() {
  return (
    <HeroVisualCutout
      src={contactOfficeHeroCutout}
      alt="Executive walnut and brass office desk with modern corporate desk telephone, smartphone, open leather folio, and brass banker lamp"
    />
  );
}
