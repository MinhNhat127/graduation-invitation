import {
  CalendarDays,
  Clock3,
  MapPinned
} from "lucide-react";

import invitation from "../data/invitation";

function EventInfo() {
  return (
    <div className="space-y-5">

      <div className="flex gap-3">
        <CalendarDays />
        <span>{invitation.date}</span>
      </div>

      <div className="flex gap-3">
        <Clock3 />
        <span>{invitation.time}</span>
      </div>

      <div className="flex gap-3">
        <MapPinned />
        <div>
          <p>{invitation.location}</p>
          <p className="text-sm text-gray-500">
            {invitation.address}
          </p>
        </div>
      </div>

    </div>
  );
}

export default EventInfo;