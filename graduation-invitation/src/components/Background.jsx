function Background() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-100">
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-3xl" />
    </div>
  );
}

export default Background;