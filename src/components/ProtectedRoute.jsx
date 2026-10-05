
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import API_URL from "../config/api";

export default function ProtectedRoute({ children }) {
  const [estado, setEstado] = useState("carregando");
  useEffect(() => {
    let ativo = true;
    const token = localStorage.getItem("prime_shape_token");
    if (!token) { setEstado("login"); return; }
    fetch(API_URL + "/auth/me", { headers: { Authorization: "Bearer " + token } })
      .then(async resposta => {
        const dados = await resposta.json();
        if (!ativo) return;
        if (!resposta.ok || !dados.usuario?.acessoLiberado || dados.precisaTrocarSenha) {
          localStorage.removeItem("prime_shape_token");
          localStorage.removeItem("prime_shape_usuario");
          setEstado("login");
        } else setEstado("liberado");
      })
      .catch(() => { if (ativo) setEstado("erro"); });
    return () => { ativo = false; };
  }, []);
  if (estado === "login") return <Navigate to="/login-metodo" replace />;
  if (estado === "erro") return <div className="min-h-screen bg-black p-10 text-white">Falha de conexão. <button onClick={() => window.location.reload()}>Tentar novamente</button></div>;
  if (estado !== "liberado") return <div className="min-h-screen bg-black p-10 text-white">Verificando seu acesso...</div>;
  return children;
}
