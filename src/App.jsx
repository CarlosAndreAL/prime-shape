import { HashRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import StartPage from "./sections/StartPage";
import MetodoShape from "./sections/MetodoShape";
import ConsultoriaPage from "./sections/ConsultoriaPage";

import MetodoShapePortal from "./pages/MetodoShapePortal";
import SerieBulking from "./pages/SerieBulking";
import SerieCutting from "./pages/SerieCutting";
import TreinosShape from "./pages/TreinosShape";
import TreinoCharles from "./pages/TreinoCharles";
import CadastroMetodo from "./pages/CadastroMetodo";
import LoginMetodo from "./pages/LoginMetodo";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./pages/Checkout";

function HomePage() {
  const navigate = useNavigate();

  const isMetodoDomain = window.location.hostname.includes(
    "metodoshapeprime.com.br"
  );

  useEffect(() => {
    if (isMetodoDomain) {
      navigate("/metodo");
    }
  }, [isMetodoDomain, navigate]);

  if (isMetodoDomain) {
    return null;
  }

  return (
    <StartPage
      onMetodo={() =>
        (window.location.href = "https://metodoshapeprime.com.br")
      }
      onConsultoria={() => navigate("/consultoria")}
    />
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/login-metodo" element={<LoginMetodo />} />

        <Route
          path="/cadastro-metodo"
          element={<CadastroMetodo />}
        />

        <Route path="/" element={<HomePage />} />

        <Route path="/metodo" element={<MetodoShape />} />

        <Route
          path="/consultoria"
          element={<ConsultoriaPage />}
        />

        <Route
          path="/portal-aluno"
          element={
            <ProtectedRoute>
              <MetodoShapePortal />
            </ProtectedRoute>
          }
        />

        <Route path="/bulking" element={<SerieBulking />} />

        <Route path="/cutting" element={<SerieCutting />} />

        <Route path="/treinos" element={<TreinosShape />} />

        <Route
          path="/treino-charles"
          element={<TreinoCharles />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </HashRouter>
  );
}