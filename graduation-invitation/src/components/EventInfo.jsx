import { CalendarDays, Clock3, MapPinned } from "lucide-react";

import invitation from "../data/invitation";

function EventRow({ icon, label, sub }) {
  return (
    <div className="flex items-start gap-3 sm:gap-3.5">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[#D4AF6A]/40 bg-gradient-to-br from-[#F1E6C8] to-[#D4AF6A]/10 text-[#A9822F] sm:h-10 sm:w-10">
        {icon}
      </div>
      <div className="pt-1">
        <p className="text-[14px] font-semibold text-[#25293A] sm:text-[15px]">{label}</p>
        {sub && (
          <p className="mt-0.5 text-[12px] text-[#565B6E] sm:text-[13px]">{sub}</p>
        )}
      </div>
    </div>
  );
}

function EventInfo() {
  return (
    <div className="flex flex-col gap-4 sm:gap-[18px]">
      <EventRow icon={<CalendarDays size={17} />} label={invitation.date} />
      <EventRow icon={<Clock3 size={17} />} label={invitation.time} />
      <EventRow
        icon={<MapPinned size={17} />}
        label={invitation.location}
        sub={invitation.address}
      />
    </div>
  );
}

export default EventInfo;
