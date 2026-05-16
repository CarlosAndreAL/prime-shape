import { BrowserRouter, Routes, Route } from "react-router-dom";

import MetodoShapePortal from "./pages/MetodoShapePortal";
import SerieBulking from "./pages/SerieBulking";
import SerieCutting from "./pages/SerieCutting";
import TreinosShape from "./pages/TreinosShape";
import TreinoCharles from "./pages/TreinoCharles";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/treino-charles" element={<TreinoCharles />} />

        <Route path="/treinos" element={<TreinosShape />} />


        <Route path="/" element={<MetodoShapePortal />} />

        <Route path="/bulking" element={<SerieBulking />} />

        <Route path="/cutting" element={<SerieCutting />} />
      </Routes>
    </BrowserRouter>
  );
}