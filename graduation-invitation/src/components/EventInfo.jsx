import { CalendarDays, Clock3, MapPinned } from "lucide-react";

import invitation from "../data/invitation";

function EventRow({ icon, label, sub }) {
  return (
    <div className="flex items-start gap-3 sm:gap-3.5">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[#D4AF6A]/40 bg-gradient-to-br from-[#F1E6C8] to-[#D4AF6A]/10 text-[#A9822F] sm:h-10 sm:w-10">
        {icon}
      </div>
      <div className="pt-0.5 sm:pt-1">
        <div className="text-[13px] font-semibold text-[#25293A] xs:text-[13.5px] sm:text-[15px] leading-tight sm:leading-normal">{label}</div>
        {sub && (
          <div className="mt-1 text-[11.5px] text-[#565B6E] xs:text-[12px] sm:text-[13px] leading-tight sm:leading-normal">{sub}</div>
        )}
      </div>
    </div>
  );
}

function EventInfo() {
  const locationParts = invitation.location.split(", ");
  const addressParts = invitation.address.split(", ");

  const responsiveLocation = (
    <span>
      {locationParts[0]}
      <span className="hidden sm:inline">, </span>
      <br className="sm:hidden" />
      {locationParts[1]}
    </span>
  );

  const responsiveAddress = (
    <span>
      {addressParts[0]}
      <span className="hidden sm:inline">, </span>
      <br className="sm:hidden" />
      {addressParts[1]}
      {addressParts[2] && `, ${addressParts[2]}`}
    </span>
  );

  return (
    <div className="flex flex-col gap-4 sm:gap-[18px]">
      <EventRow icon={<CalendarDays size={17} />} label={invitation.date} />
      <EventRow icon={<Clock3 size={17} />} label={invitation.time} />
      <EventRow
        icon={<MapPinned size={17} />}
        label={responsiveLocation}
        sub={responsiveAddress}
      />
    </div>
  );
}

export default EventInfo;
