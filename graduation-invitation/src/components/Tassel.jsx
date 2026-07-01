function Tassel() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-0 z-20 origin-top -translate-x-1/2 drop-shadow-[0_6px_8px_rgba(0,0,0,0.25)]"
      style={{ animation: "swing 3.4s ease-in-out infinite", top: -36 }}
    >
      <svg
        width="28"
        height="58"
        viewBox="0 0 34 70"
        fill="none"
        className="sm:h-[70px] sm:w-[34px]"
      >
        <circle cx="17" cy="6" r="5" fill="#D4AF6A" stroke="#A9822F" strokeWidth="1" />
        <line x1="17" y1="10" x2="17" y2="42" stroke="#D4AF6A" strokeWidth="2" />
        {[-9, -5.4, -1.8, 1.8, 5.4, 9].map((dx, i) => (
          <line
            key={i}
            x1="17"
            y1="42"
            x2={17 + dx}
            y2="68"
            stroke={i % 2 === 0 ? "#D4AF6A" : "#F0DDA8"}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        ))}
        <rect x="12" y="38" width="10" height="7" rx="1.5" fill="#A9822F" />
      </svg>
    </div>
  );
}

export default Tassel;
