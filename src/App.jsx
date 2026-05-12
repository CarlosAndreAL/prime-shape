import { useState } from "react";
import StartPage from "./sections/StartPage";
import ConsultoriaPage from "./sections/ConsultoriaPage";
import MetodoShape from "./sections/MetodoShape";

export default function App() {
  const [page, setPage] = useState("start");

  if (page === "start") {
    return (
      <StartPage
        onConsultoria={() => setPage("consultoria")}
        onMetodo={() => setPage("metodo")}
      />
    );
  }

  return (
    <div className="relative bg-black">
      <button
        type="button"
        onClick={() => setPage("start")}
        className="fixed left-4 top-4 z-[9999] rounded-full border border-lime-300/40 bg-black/70 px-4 py-3 text-xs font-black uppercase tracking-widest text-lime-300 shadow-[0_0_35px_rgba(212,175,55,0.25)] backdrop-blur-xl"
      >
        ← Voltar
      </button>

      {page === "consultoria" && <ConsultoriaPage />}
      {page === "metodo" && <MetodoShape />}
    </div>
  );
}