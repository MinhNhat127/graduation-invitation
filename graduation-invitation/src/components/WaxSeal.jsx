import { GraduationCap } from "lucide-react";

function WaxSeal({ breaking }) {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16">
      {breaking && (
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, #F0DDA8 0%, transparent 70%)",
            animation: "light-burst 0.7s ease-out forwards",
          }}
        />
      )}

      <div
        className={[
          "flex h-full w-full items-center justify-center rounded-full",
          "bg-[radial-gradient(circle_at_32%_28%,#F0DDA8,#D4AF6A_45%,#A9822F_100%)]",
          "shadow-[0_4px_10px_rgba(0,0,0,0.35),inset_0_2px_3px_rgba(255,255,255,0.4)]",
          "transition-all duration-500 ease-out",
          breaking ? "scale-30 rotate-[35deg] opacity-0" : "scale-100 rotate-0 opacity-100",
        ].join(" ")}
        style={!breaking ? { animation: "crest-pulse 2.8s ease-in-out infinite" } : undefined}
      >
        <GraduationCap
          size={22}
          className="text-[#0A1830] sm:h-6 sm:w-6"
          strokeWidth={1.8}
        />
      </div>
    </div>
  );
}

export default WaxSeal;
