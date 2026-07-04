import { GraduationCap, Map } from "lucide-react";

import invitation from "../data/invitation";
import EventInfo from "./EventInfo";
import Tassel from "./Tassel";

function InvitationCard({ visible }) {
  return (
    <div
      className={[
        "relative w-full max-w-[420px] rounded-[22px] border border-[#D4AF6A]/40",
        "bg-gradient-to-b from-[#FBF6EA] to-[#F1E6C8]",
        "px-5 pt-10 pb-7",
        "md:max-w-[560px] md:px-7 md:pt-11 md:pb-8",
        "lg:max-w-[680px] lg:px-8 lg:pb-9",
        visible ? "animate-border-glow" : "opacity-0",
      ]
        .filter(Boolean)
        .join(" ")}
      style={visible ? { animation: "float-up 0.75s cubic-bezier(.2,.7,.3,1) forwards" } : undefined}
    >
      {/* Gold sheen reflection overlay bounded inside the card */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] overflow-hidden gold-sheen z-0" />

      <Tassel />

      {/* inner hairline border */}
      <div className="pointer-events-none absolute inset-[10px] rounded-[14px] border border-[#D4AF6A]/40" />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-3.5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF6A] to-[#A9822F] shadow-[0_6px_14px_rgba(169,130,47,0.4)] sm:h-[46px] sm:w-[46px]">
          <GraduationCap size={22} className="text-[#0A1830] sm:h-6 sm:w-6" strokeWidth={1.8} />
        </div>
        <h1 className="font-display text-[26px] font-extrabold tracking-[0.04em] text-[#0A1830] sm:text-[30px] md:text-[32px]">
          THIỆP MỜI
        </h1>
        <p className="font-script mt-1 text-[21px] italic text-[#A9822F] sm:text-[25px]">
          LỄ TỐT NGHIỆP
        </p>
        <p className="font-script mt-2 text-[20px] font-medium italic text-[#0A1830] sm:text-[24px] tracking-wide drop-shadow-[0_1px_1px_rgba(212,175,106,0.3)]">
          {invitation.host}
        </p>

        {/* Avatar/Photo of the Host (Centered) */}
        <div className="mt-5 mb-5 flex justify-center sm:mt-6 sm:mb-6">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-[#D4AF6A] shadow-[0_6px_16px_rgba(169,130,47,0.35)] sm:h-38 sm:w-38 md:h-44 md:w-44">
            <img
              src="/avatar.jpg"
              alt={invitation.host}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <p className="font-script text-[14px] leading-[1.6] text-[#25293A] xs:text-[15px] sm:text-[16px] md:text-[17px]">
          Sau bao năm cống hiến thanh xuân cho code và cúp học chuyên nghiệp, cuối cùng mình cũng "lết" được tới ngày tốt nghiệp rồi =)) <br />
          Mọi người qua chụp hình chung với mình và xem mình "Log out" khỏi account trường nhé. Hi vọng được gặp mặt mọi người và nhận lời chúc cho chặng đường tiếp theo của mình này.
        </p>

        <div className="my-5 flex items-center justify-center gap-2.5 w-full">
          <span className="h-px flex-1 bg-[#A9822F]/35" />
          <span className="h-[7px] w-[7px] rotate-45 bg-[#D4AF6A]" />
          <span className="h-px flex-1 bg-[#A9822F]/35" />
        </div>

        <div className="mb-6 w-full">
          <EventInfo />
        </div>

        <a
          href={invitation.maps}
          target="_blank"
          rel="noreferrer"
          className={[
            "group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl w-full",
            "border border-[#D4AF6A]/30 bg-gradient-to-br from-[#122A4E] to-[#0A1830]",
            "px-4 py-3 text-sm font-semibold tracking-wide text-[#F0DDA8]",
            "md:px-5 md:text-[15px]",
            "shadow-[0_10px_24px_rgba(10,24,48,0.35)] transition-transform duration-200",
            "hover:-translate-y-0.5",
          ].join(" ")}
        >
          <span
            className="absolute left-0 top-0 h-full w-2/5 bg-gradient-to-r from-transparent via-[#F0DDA8]/35 to-transparent"
            style={{ animation: "shine 2.6s ease-in-out infinite" }}
          />
          <Map size={16} />
          Xem trên Google Maps
        </a>
      </div>
    </div>
  );
}

export default InvitationCard;
