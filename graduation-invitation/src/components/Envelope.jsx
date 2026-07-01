import { Mail } from "lucide-react";

function Envelope({ onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="flex flex-col items-center gap-5 rounded-3xl bg-white p-12 shadow-xl transition hover:scale-105"
    >
      <Mail size={70} strokeWidth={1.5} />

      <h1 className="text-3xl font-bold tracking-wider">
        THIỆP MỜI
      </h1>

      <p className="text-gray-500">
        Nhấn để mở
      </p>
    </button>
  );
}

export default Envelope;