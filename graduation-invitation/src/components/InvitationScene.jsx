import { useState } from "react";

import "../styles/invitation-animations.css";
import Confetti from "./Confetti";
import Envelope from "./Envelope";
import InvitationCard from "./InvitationCard";

function InvitationScene() {
  const [stage, setStage] = useState("closed"); // closed -> opening -> open
const [showConfetti, setShowConfetti] = useState(false);

  function handleOpen() {
  if (stage !== "closed") return;

  setShowConfetti(true);
  setStage("opening");

  setTimeout(() => {
    setStage("open");
  }, 850);

  setTimeout(() => {
    setShowConfetti(false);
  }, 2000);
}

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#1C3A66_0%,#122A4E_45%,#0A1830_100%)] px-4 py-10 sm:px-6 sm:py-16">
      {/* ambient dotted texture */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(#D4AF6A22 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* drifting ambient particles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          className="absolute bottom-0 h-1 w-1 rounded-full bg-[#D4AF6A]"
          style={{
            left: `${8 + i * 9}%`,
            animation: `drift ${6 + (i % 4)}s ease-in-out ${i * 0.6}s infinite`,
          }}
        />
      ))}

      {showConfetti && <Confetti />}

      <div className="relative flex w-full items-center justify-center">
        <Envelope stage={stage} onOpen={handleOpen} />
        {stage === "open" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <InvitationCard visible />
          </div>
        )}
      </div>
    </div>
  );
}

export default InvitationScene;
