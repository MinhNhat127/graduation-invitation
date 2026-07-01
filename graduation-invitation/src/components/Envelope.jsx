import { Mail } from "lucide-react";

import WaxSeal from "./WaxSeal";

function Envelope({ stage, onOpen }) {
  const opening = stage !== "closed";

  return (
    <button
      onClick={onOpen}
      disabled={opening}
      className={[
        "relative w-full border-none bg-transparent p-0",
        "h-[260px] max-w-[460px]",
        "md:h-[320px] md:max-w-[560px]",
        "lg:h-[360px] lg:max-w-[640px]",
        opening ? "cursor-default" : "cursor-pointer",
        "transition-all duration-500 ease-out",
        stage === "open"
          ? "pointer-events-none scale-95 opacity-0 delay-300"
          : "scale-100 opacity-100",
      ].join(" ")}
    >
      {/* Envelope body */}
      <div className="absolute inset-0 rounded-3xl border border-[#D4AF6A]/40 bg-gradient-to-br from-[#F1E6C8] to-[#FBF6EA] shadow-[0_24px_60px_rgba(10,24,48,0.55)]" />

      {/* Lower pocket */}
      <div className="absolute inset-x-0 bottom-0 h-[62%] rounded-b-3xl bg-gradient-to-b from-transparent to-[#D4AF6A]/10" />

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
      <div className="absolute left-1/2 top-[45%] z-20 -translate-x-1/2 -translate-y-1/2 scale-125">
        <WaxSeal breaking={opening} />
      </div>

      {!opening && (
        <div className="absolute inset-x-0 bottom-10 text-center">
          <p className="font-display text-l font-bold tracking-[0.08em] text-[#0A1830] md:text-2xl">
            THIỆP MỜI
          </p>

          <p className="font-script mt-1 text-[16px] italic text-[#A9822F] sm:text-[20px]">
          Lễ đăng xuất account trường
        </p>

          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-[#565B6E] sm:text-[15px]">
            <Mail size={14} />
            Nhấn để mở
          </p>
        </div>
      )}
    </button>
  );
}

export default Envelope;