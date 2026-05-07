import { useState } from "react";
import StartPage from "./sections/StartPage";
import ConsultoriaPage from "./sections/ConsultoriaPage";

export default function App() {
  const [page, setPage] = useState("start");

  if (page === "start") {
    return <StartPage onConsultoria={() => setPage("consultoria")} />;
  }

  return (
    <div className="relative bg-black">
      <button
        onClick={() => setPage("start")}
        className="fixed left-4 top-4 z-[9999] rounded-full border border-lime-300/40 bg-black/70 px-4 py-3 text-xs font-black tracking-widest text-lime-300 shadow-[0_0_35px_rgba(190,255,0,0.25)] backdrop-blur-xl"
      >
        ← VOLTAR
      </button>

      <ConsultoriaPage />
    </div>
  );
}