import { Mail } from "lucide-react";

import WaxSeal from "./WaxSeal";
import invitation from "../data/invitation";

function Envelope({ stage, onOpen }) {
  const opening = stage !== "closed";

  return (
    <button
      onClick={onOpen}
      disabled={opening}
      className={[
        "relative w-full border-none bg-transparent p-0",
        "mx-auto",

        "h-[220px] max-w-[340px]",

        "sm:h-[260px] sm:max-w-[420px]",

        "md:h-[300px] md:max-w-[500px]",

        "lg:h-[340px] lg:max-w-[600px]",
        opening ? "cursor-default" : "cursor-pointer",
        "transition-all duration-500 ease-out",
        stage === "open"
          ? "pointer-events-none scale-95 opacity-0 delay-300"
          : "scale-100 opacity-100",
      ].join(" ")}
    >
      {/* Envelope body */}
      <div className="absolute inset-0 rounded-2xl border border-[#D4AF6A]/40 bg-gradient-to-br from-[#F1E6C8] to-[#FBF6EA] shadow-[0_12px_30px_rgba(10,24,48,0.45)] sm:rounded-3xl sm:shadow-[0_24px_60px_rgba(10,24,48,0.55)]" />

      {/* Lower pocket */}
      <div className="absolute inset-x-0 bottom-0 h-[62%] rounded-b-2xl bg-gradient-to-b from-transparent to-[#D4AF6A]/10 sm:rounded-b-3xl" />

      {/* Flap */}
      <div
        className="absolute inset-x-0 top-0 z-10 h-[62%] origin-top [transform-style:preserve-3d]"
        style={{
          transform: opening ? "rotateX(-150deg)" : "rotateX(0deg)",
          transition: "transform 0.85s cubic-bezier(.6,0,.35,1)",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 640 220"
          preserveAspectRatio="none"
          className="block"
        >
          <polygon
            points="0,0 640,0 320,190"
            fill="url(#flapGrad)"
            stroke="#D4AF6A"
            strokeWidth="1"
          />

          <defs>
            <linearGradient id="flapGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FBF6EA" />
              <stop offset="100%" stopColor="#F1E6C8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Wax seal */}
      <div className="absolute left-1/2 top-[45%] z-20 -translate-x-1/2 -translate-y-1/2 scale-100 xs:scale-100 md:scale-110 lg:scale-125">
        <WaxSeal breaking={opening} />
      </div>

      {!opening && (
        <div className="absolute inset-x-0 bottom-4 px-3 text-center xs:bottom-5 sm:bottom-7 md:bottom-10">
          <p className="font-display text-sm font-bold leading-tight tracking-[0.06em] text-[#0A1830] xs:text-base sm:text-xl md:text-2xl">
            THIỆP MỜI
          </p>

          <p className="font-script mt-0.5 text-[13px] italic leading-tight text-[#A9822F] xs:text-[14px] sm:text-[18px]">
            Lễ đăng xuất account trường
          </p>

          <p className="mt-1 text-[11px] font-semibold text-[#0A1830] opacity-80 xs:text-xs">
            Chủ thiệp: {invitation.host}
          </p>

          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[#565B6E] xs:mt-4 sm:mt-6 sm:text-sm md:gap-2 md:text-[15px]">
            <Mail className="h-3.5 w-3.5 md:h-4 md:w-4" />
            Nhấn để mở
          </p>
        </div>
      )}
    </button>
  );
}

export default Envelope;