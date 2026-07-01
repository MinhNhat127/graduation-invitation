function Confetti() {
  const pieces = Array.from({ length: 16 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((_, i) => {
        const left = 4 + ((i * 61) % 92);
        const delay = (i % 8) * 0.04;
        const duration = 0.65 + (i % 4) * 0.08;
        const size = 10 + (i % 4) * 3;
        const isGold = i % 2 === 0;

        return (
          <span
            key={i}
            className={`absolute top-[-10px] opacity-0 ${
              isGold ? "rounded-full bg-[#D4AF6A]" : "rounded-[1px] bg-[#FBF6EA]"
            }`}
            style={{
              left: `${left}%`,
              width: size,
              height: isGold ? size : size * 2.4,
              animation: `confetti-fall ${duration}s ease-in ${delay}s forwards`,
            }}
          />
        );
      })}
    </div>
  );
}

export default Confetti;
