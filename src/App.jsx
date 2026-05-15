import { BrowserRouter, Routes, Route } from "react-router-dom";

import MetodoShapePortal from "./pages/MetodoShapePortal";
import SerieBulking from "./pages/SerieBulking";
import SerieCutting from "./pages/SerieCutting";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MetodoShapePortal />} />

        <Route path="/bulking" element={<SerieBulking />} />

        <Route path="/cutting" element={<SerieCutting />} />
      </Routes>
    </BrowserRouter>
  );
}