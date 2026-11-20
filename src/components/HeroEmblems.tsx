import React from "react";

export function ServicesHeroVisual() {
  return (
    <div
      className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[430px] h-[260px] sm:h-[320px] lg:h-[380px] flex items-center justify-center select-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 420 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Fine architectural guide circles — plain canvas, no box */}
        <circle
          cx="210"
          cy="190"
          r="146"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.25"
          strokeDasharray="5 7"
        />
        <circle
          cx="210"
          cy="190"
          r="102"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />

        {/* Primary Software Engineering Terminal / Code Emblem (Center-Left) */}
        <path
          d="M78 118C78 109.163 85.1634 102 94 102H254C262.837 102 270 109.163 270 118V234C270 242.837 262.837 250 254 250H94C85.1634 250 78 242.837 78 234V118Z"
          stroke="#FFFFFF"
          strokeWidth="2.5"
        />
        <line
          x1="78"
          y1="138"
          x2="270"
          y2="138"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.75"
        />
        <circle cx="100" cy="120" r="3.5" fill="#f80d05" />
        <circle cx="114" cy="120" r="3.5" fill="rgba(255,255,255,0.55)" />
        <circle cx="128" cy="120" r="3.5" fill="rgba(255,255,255,0.3)" />

        {/* Crisp code brackets inside code emblem */}
        <path
          d="M142 174L118 194L142 214"
          stroke="#f80d05"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M206 174L230 194L206 214"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="184"
          y1="166"
          x2="164"
          y2="222"
          stroke="#CBD5E1"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Overlapping Executive Strategy & Grant Pen Nib / Briefcase Emblem (Right) */}
        <path
          d="M292 84L344 136L310 228L258 210L240 158L292 84Z"
          fill="#0C1E36"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <line
          x1="292"
          y1="84"
          x2="279"
          y2="162"
          stroke="#f80d05"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="277" cy="168" r="6" stroke="#f80d05" strokeWidth="2.5" />

        {/* Architectural Growth & Precision Document Fold (Bottom Right) */}
        <path
          d="M224 232H344C350.627 232 356 237.373 356 244V306C356 312.627 350.627 318 344 318H224C217.373 318 212 312.627 212 306V244C212 237.373 217.373 232 224 232Z"
          fill="#0C1E36"
          stroke="#CBD5E1"
          strokeWidth="2.5"
        />
        <path
          d="M236 292L266 266L290 282L332 250"
          stroke="#f80d05"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M316 250H332V266"
          stroke="#f80d05"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function AtsHeroVisual() {
  return (
    <div
      className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[430px] h-[260px] sm:h-[320px] lg:h-[380px] flex items-center justify-center select-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 420 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Subtle editorial arc guides */}
        <circle
          cx="210"
          cy="190"
          r="148"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1.25"
          strokeDasharray="6 6"
        />

        {/* Executive CV Document Silhouette */}
        <path
          d="M112 66C112 57.1634 119.163 50 128 50H252L302 100V312C302 320.837 294.837 328 286 328H128C119.163 328 112 320.837 112 312V66Z"
          stroke="#FFFFFF"
          strokeWidth="2.75"
          strokeLinejoin="round"
        />
        <path
          d="M252 50V86C252 93.732 258.268 100 266 100H302"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="2.25"
          strokeLinejoin="round"
        />

        {/* CV Header & Structured Bullet Lines */}
        <circle cx="152" cy="108" r="18" stroke="#f80d05" strokeWidth="2.5" />
        <line
          x1="184"
          y1="100"
          x2="246"
          y2="100"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line
          x1="184"
          y1="116"
          x2="232"
          y2="116"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <line
          x1="138"
          y1="158"
          x2="274"
          y2="158"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="138"
          y1="182"
          x2="256"
          y2="182"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2.25"
          strokeLinecap="round"
        />
        <line
          x1="138"
          y1="206"
          x2="240"
          y2="206"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2.25"
          strokeLinecap="round"
        />
        <line
          x1="138"
          y1="242"
          x2="212"
          y2="242"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="138"
          y1="266"
          x2="202"
          y2="266"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2.25"
          strokeLinecap="round"
        />

        {/* Optical Audit Magnifier & Checkmark Verification Seal */}
        <circle
          cx="266"
          cy="228"
          r="52"
          fill="#0C1E36"
          stroke="#f80d05"
          strokeWidth="4"
        />
        <path
          d="M244 228L259 243L290 212"
          stroke="#FFFFFF"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="304"
          y1="266"
          x2="344"
          y2="306"
          stroke="#f80d05"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function ContactHeroVisual() {
  return (
    <div
      className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[430px] h-[260px] sm:h-[320px] lg:h-[380px] flex items-center justify-center select-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 420 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Connection Orbit Ring */}
        <circle
          cx="210"
          cy="190"
          r="142"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1.25"
          strokeDasharray="4 6"
        />

        {/* Crisp Direct Dispatch Envelope */}
        <path
          d="M78 134C78 124.059 86.0589 116 96 116H272C281.941 116 290 124.059 290 134V248C290 257.941 281.941 266 272 266H96C86.0589 266 78 257.941 78 248V134Z"
          stroke="#FFFFFF"
          strokeWidth="2.75"
        />
        <path
          d="M84 126L184 202L284 126"
          stroke="#f80d05"
          strokeWidth="3.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Overlapping Kisumu / East Africa Location Pin Emblem */}
        <path
          d="M306 74C281.699 74 262 93.6995 262 118C262 151 306 196 306 196C306 196 350 151 350 118C350 93.6995 330.301 74 306 74Z"
          fill="#0C1E36"
          stroke="#FFFFFF"
          strokeWidth="2.75"
          strokeLinejoin="round"
        />
        <circle cx="306" cy="118" r="14" stroke="#f80d05" strokeWidth="3" />

        {/* Direct Voice / WhatsApp Dispatch Bubble Emblem (Bottom Right) */}
        <path
          d="M254 226H340C349.941 226 358 234.059 358 244V286C358 295.941 349.941 304 340 304H292L262 326V304H254C244.059 304 236 295.941 236 286V244C236 234.059 244.059 226 254 226Z"
          fill="#0C1E36"
          stroke="#CBD5E1"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle cx="277" cy="265" r="4" fill="#f80d05" />
        <circle cx="297" cy="265" r="4" fill="#FFFFFF" />
        <circle cx="317" cy="265" r="4" fill="#CBD5E1" />
      </svg>
    </div>
  );
}
