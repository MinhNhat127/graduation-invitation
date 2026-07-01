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
    "px-6 pb-8 pt-11 shadow-[0_24px_60px_rgba(10,24,48,0.55)]",
    "sm:max-w-[500px] lg:max-w-[560px] sm:px-[30px] sm:pb-9 sm:pt-11",
    !visible && "opacity-0",
  ]
        .filter(Boolean)
        .join(" ")}
      style={visible ? { animation: "float-up 0.75s cubic-bezier(.2,.7,.3,1) forwards" } : undefined}
    >
      <Tassel />

      {/* inner hairline border */}
      <div className="pointer-events-none absolute inset-[10px] rounded-[14px] border border-[#D4AF6A]/40" />

      <div className="mb-6 text-center sm:mb-[26px]">
        <div className="mb-3.5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF6A] to-[#A9822F] shadow-[0_6px_14px_rgba(169,130,47,0.4)] sm:h-[46px] sm:w-[46px]">
          <GraduationCap size={22} className="text-[#0A1830] sm:h-6 sm:w-6" strokeWidth={1.8} />
        </div>
        <h1 className="font-display text-[26px] font-extrabold tracking-[0.04em] text-[#0A1830] sm:text-[30px]">
          THIỆP MỜI
        </h1>
        <p className="font-script mt-1 text-[16px] italic text-[#A9822F] sm:text-[18px]">
          Lễ đăng xuất account trường
        </p>
      </div>

      <p className="font-script text-center text-[15px] leading-[1.7] text-[#25293A] sm:text-[17px]">
       Sau bao năm cày deadline, cuối cùng cũng tới ngày bấm nút "Log Out".</p>
       <p className="font-script mb-6 text-center text-[15px] leading-[1.7] text-[#25293A] sm:mb-6 sm:text-[17px]">
       Hi vọng mọi người có thể có mặt để chứng kiến khoảnh khắc này và chụp với mình vài tấm hình nhé!
      Được gặp mặt mọi người là điều ý nghĩa lớn nhất với mình (hoặc ko)

      </p>

      <div className="mb-6 flex items-center justify-center gap-2.5">
        <span className="h-px flex-1 bg-[#A9822F]/35" />
        <span className="h-[7px] w-[7px] rotate-45 bg-[#D4AF6A]" />
        <span className="h-px flex-1 bg-[#A9822F]/35" />
      </div>

      <div className="mb-7 sm:mb-[30px]">
        <EventInfo />
      </div>

      <a
        href={invitation.maps}
        target="_blank"
        rel="noreferrer"
        className={[
          "group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl",
          "border border-[#D4AF6A]/30 bg-gradient-to-br from-[#122A4E] to-[#0A1830]",
          "px-5 py-3 text-[13px] font-semibold tracking-wide text-[#F0DDA8] sm:text-[14px]",
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
  );
}

export default InvitationCard;
