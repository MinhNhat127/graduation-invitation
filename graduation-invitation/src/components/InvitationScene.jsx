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
      
      {/* Falling golden/white particles with sparkle */}
      {Array.from({ length: 10 }).map((_, i) => {
        const isGold = i % 2 === 0;
        return (
          <span
            key={`fall-${i}`}
            className={`absolute top-0 rounded-full ${
              isGold ? "bg-[#D4AF6A]" : "bg-[#ffffff]"
            }`}
            style={{
              left: `${5 + i * 10}%`,
              width: 2.5 + (i % 3),
              height: 2.5 + (i % 3),
              opacity: isGold ? 0.45 : 0.3,
              animation: `drift-down ${8 + (i % 4)}s linear ${i * 0.7}s infinite, sparkle 2s ease-in-out ${i * 0.3}s infinite`,
            }}
          />
        );
      })}

      {/* Ambient glowing orb in the center */}
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-[#D4AF6A]/5 to-[#1C3A66]/25 blur-[80px] sm:blur-[110px] pointer-events-none z-0"
        style={{
          transform: "translate(-50%, -50%)",
          animation: "pulse-slow 12s ease-in-out infinite",
        }}
      />

      {/* Glowing 4-pointed stars in the background */}
      {[
        { top: "12%", left: "8%", delay: "0.2s", scale: 0.55 },
        { top: "22%", left: "88%", delay: "1.4s", scale: 0.75 },
        { top: "68%", left: "12%", delay: "2.8s", scale: 0.65 },
        { top: "78%", left: "82%", delay: "0.8s", scale: 0.5 },
        { top: "15%", left: "72%", delay: "1.9s", scale: 0.85 },
      ].map((star, idx) => (
        <svg
          key={`star-${idx}`}
          className="absolute pointer-events-none animate-sparkle"
          style={{
            top: star.top,
            left: star.left,
            width: 22,
            height: 22,
            fill: "#D4AF6A",
            opacity: 0,
            animationDelay: star.delay,
            transform: `scale(${star.scale})`,
          }}
          viewBox="0 0 24 24"
        >
          <path d="M12,2 L14.5,9.5 L22,12 L14.5,14.5 L12,22 L9.5,14.5 L2,12 L9.5,9.5 Z" />
        </svg>
      ))}

      {showConfetti && <Confetti />}

      <div className="relative flex w-full items-center justify-center">
        <Envelope stage={stage} onOpen={handleOpen} />
        {stage === "open" && (
          <InvitationCard visible />
        )}
      </div>
    </div>
  );
}

export default InvitationScene;
