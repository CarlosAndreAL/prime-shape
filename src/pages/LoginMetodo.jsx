import { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import API_URL from "../config/api";


export default function LoginMetodo() {
  const [form, setForm] = useState({ email: "", senha: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function entrar() {
    const resposta = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      alert(dados.message || "Erro ao entrar.");
      return;
    }

    localStorage.setItem("prime_shape_token", dados.token);
    localStorage.setItem("prime_shape_usuario", JSON.stringify(dados.usuario));

    window.location.href = "/#/portal-aluno";
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-6 py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-2xl rounded-[40px] border border-[#d4af37]/20 bg-[#050505]/90 p-10 shadow-[0_0_80px_rgba(212,175,55,0.08)] backdrop-blur-xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d4af37]">
            SHAPE PRIME
          </p>

          <h1 className="mt-4 text-5xl font-black uppercase leading-none">
            ENTRAR
          </h1>

          <p className="mt-5 text-lg text-white/60">
            Acesse sua conta para entrar no portal do aluno.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              Email
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <Mail size={20} className="text-[#d4af37]" />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Digite seu email"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
              Senha
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <Lock size={20} className="text-[#d4af37]" />

              <input
                type="password"
                name="senha"
                value={form.senha}
                onChange={handleChange}
                placeholder="Digite sua senha"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          <button
            onClick={entrar}
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-[#fff0a6] via-[#d4af37] to-[#8f6d12] px-8 py-5 text-lg font-black uppercase text-black transition hover:scale-[1.02]"
          >
            ENTRAR NO PORTAL
            <ArrowRight size={22} />
          </button>

          <button
          onClick={() => (window.location.href = "/#/login-metodo")}
            className="w-full text-sm font-bold uppercase tracking-[0.18em] text-white/45 transition hover:text-[#d4af37]"
          >
          Acesso liberado após a compra
          </button>
        </div>
      </div>
    </section>
  );
}