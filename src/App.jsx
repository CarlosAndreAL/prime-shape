import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import StartPage from "./sections/StartPage";
import MetodoShape from "./sections/MetodoShape";
import ConsultoriaPage from "./sections/ConsultoriaPage";

import MetodoShapePortal from "./pages/MetodoShapePortal";
import SerieBulking from "./pages/SerieBulking";
import SerieCutting from "./pages/SerieCutting";
import TreinosShape from "./pages/TreinosShape";
import TreinoCharles from "./pages/TreinoCharles";

function HomePage() {
  const navigate = useNavigate();

  return (
    <StartPage
      onMetodo={() => navigate("/metodo")}
      onConsultoria={() => navigate("/consultoria")}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/metodo" element={<MetodoShape />} />
        <Route path="/consultoria" element={<ConsultoriaPage />} />

        <Route path="/portal-aluno" element={<MetodoShapePortal />} />

        <Route path="/bulking" element={<SerieBulking />} />
        <Route path="/cutting" element={<SerieCutting />} />
        <Route path="/treinos" element={<TreinosShape />} />
        <Route path="/treino-charles" element={<TreinoCharles />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}