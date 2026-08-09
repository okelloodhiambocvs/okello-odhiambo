import React, { useRef, useState } from "react";
import { ServiceItem } from "../types";
import { Terminal, HeartHandshake, BadgeCheck, ExternalLink } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
  key?: string | number;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [shineStyle, setShineStyle] = useState<React.CSSProperties>({
    opacity: 0,
    pointerEvents: "none",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Fetch mouse coordinates helper
    const xVal = e.clientX - rect.left; // 0 to card width
    const yVal = e.clientY - rect.top;  // 0 to card height

    // Normalize coordinates from -0.5 to 0.5
    const xNorm = (xVal / width) - 0.5;
    const yNorm = (yVal / height) - 0.5;

    // Apply strict subtle elegant threshold (max 6 degrees tilt to keep UI highly premium and functional)
    const maxTilt = 6;
    const tiltY = xNorm * maxTilt;
    const tiltX = -yNorm * maxTilt;

    // Set 3D transform style on parent card
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.015, 1.015, 1.015)`,
      transition: "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s, box-shadow 0.3s",
      borderColor: "#f80d05",
      boxShadow: "0 20px 40px rgba(12, 30, 54, 0.08)",
      zIndex: 10,
    });

    // Dynamic spotlight shine overlay based on coordinates
    const shineX = (xVal / width) * 100;
    const shineY = (yVal / height) * 100;
    setShineStyle({
      background: `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(248, 13, 5, 0.08) 0%, rgba(255, 255, 255, 0) 70%)`,
      opacity: 1,
      pointerEvents: "none",
    });
  };

  const handleMouseLeave = () => {
    // Reset to base state smoothly
    setTiltStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s, box-shadow 0.3s",
    });

    // Fade out light beam reflection
    setShineStyle({
      opacity: 0,
      transition: "opacity 0.5s ease-out",
      pointerEvents: "none",
    });
  };

  const isTech = service.category === "tech";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between transition-all relative group shadow-sm will-change-transform overflow-hidden cursor-default"
      id={service.id}
    >
      {/* 3D Reflection Shine Beam Container */}
      <div 
        className="absolute inset-0 z-0 select-none" 
        style={shineStyle} 
      />

      {/* Card Content Header (Z-index 10 for interaction and correct depth layered stack) */}
      <div className="z-10 relative">
        <h3 className="font-serif text-xl font-bold text-[#0C1E36] mb-3 mt-1 group-hover:text-[#f80d05] transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm tracking-wide leading-relaxed mb-6 font-sans">
          {service.description}
        </p>

        <div className="bg-slate-50 border border-slate-150 rounded-xl p-4 mb-6 transition-colors duration-300 group-hover:bg-slate-50/50">
          <span className="block text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-2 font-bold">
            Strategic Deliverables
          </span>
          <ul className="space-y-2">
            {service.features.map((feature, fIdx) => (
              <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600 font-sans">
                <BadgeCheck className="w-3.5 h-3.5 text-[#f80d05] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card CTA Footer (Z-index 10) */}
      <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between gap-2.5 z-10 relative">
        <div>
          <span className="block text-[9px] font-mono tracking-widest text-[#f80d05] uppercase font-bold">
            Investment Estimate
          </span>
          <span className="text-[#0C1E36] font-mono font-bold text-xs uppercase tracking-wide">
            {service.price}
          </span>
        </div>

        <a
          href={service.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-2.5 rounded text-[11px] font-mono font-bold tracking-wider uppercase bg-[#0C1E36] hover:bg-[#f80d05] text-white transition-all duration-300 whitespace-nowrap cursor-pointer shadow-sm group-hover:shadow"
        >
          Order Service <ExternalLink className="w-3 h-3 text-red-200" />
        </a>
      </div>
    </div>
  );
}
