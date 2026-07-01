import {
  GraduationCap,
  Map
} from "lucide-react";

import invitation from "../data/invitation";
import EventInfo from "./EventInfo";

function InvitationCard() {
  return (
    <div className="w-[420px] rounded-3xl bg-white p-10 shadow-2xl">

      <div className="mb-8 flex items-center gap-3">
        <GraduationCap size={36} />

        <div>
          <h1 className="text-3xl font-bold">
            THIỆP MỜI
          </h1>

          <p className="text-gray-500">
            Lễ tốt nghiệp
          </p>
        </div>
      </div>

      <p className="leading-8 text-gray-700">
        Sau những năm tháng học tập và trưởng thành,
        mình đã hoàn thành hành trình đại học.
        Sự hiện diện của bạn sẽ là niềm vui và
        là món quà ý nghĩa trong ngày đặc biệt này.
      </p>

      <div className="my-8 border-t" />

      <EventInfo />

      <a
        href={invitation.maps}
        target="_blank"
        rel="noreferrer"
        className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-white transition hover:bg-gray-800"
      >
        <Map size={18} />
        Xem trên Google Maps
      </a>

    </div>
  );
}

export default InvitationCard;