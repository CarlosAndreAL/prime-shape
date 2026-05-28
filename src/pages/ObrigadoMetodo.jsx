import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Mail, User } from "lucide-react";
import API_URL from "../config/api";

export default function ObrigadoMetodo() {
  const [form, setForm] = useState({ nome: "", email: "" });
  const [status, setStatus] = useState({ tipo: "", mensagem: "" });
  const [carregando, setCarregando] = useState(false);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function liberarAcesso(event) {
    event.preventDefault();

    if (!form.email.trim()) {
      setStatus({ tipo: "erro", mensagem: "Digite o email usado na compra." });
      return;
    }

    setCarregando(true);
    setStatus({ tipo: "", mensagem: "" });

    try {
      const resposta = await fetch(`${API_URL}/auth/liberar-acesso`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: form.nome.trim(),
          email: form.email.trim(),
        }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.message || "Erro ao liberar acesso.");
      }

      setStatus({
        tipo: "sucesso",
        mensagem: "Acesso enviado! Confira seu email.",
      });
    } catch (error) {
      setStatus({
        tipo: "erro",
        mensagem: error.message || "Erro ao liberar acesso.",
      });
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020202] px-5 py-10 text-white sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_28%)]" />

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-5xl items-center justify-center">
        <div className="grid w-full gap-8 rounded-[32px] border border-[#d4af37]/20 bg-[#050505]/92 p-6 shadow-[0_0_90px_rgba(212,175,55,0.1)] backdrop-blur-xl md:grid-cols-[1.05fr_0.95fr] md:p-10">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d4af37]">
              SHAPE PRIME
            </p>

            <h1 className="mt-5 text-4xl font-black uppercase leading-[0.98] text-white sm:text-5xl lg:text-6xl">
              Obrigado pela compra
            </h1>

            <p className="mt-7 text-xl font-bold leading-relaxed text-white">
              Parabéns, você está a um passo de acessar o Shape Prime.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-white/62 sm:text-lg">
              Digite o mesmo email usado na compra para receber seu acesso no
              portal do aluno.
            </p>

            <div className="mt-8 grid gap-3 text-sm font-bold uppercase tracking-[0.18em] text-white/45 sm:grid-cols-3">
              <span className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                Portal
              </span>
              <span className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                Metodo
              </span>
              <span className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                Acesso
              </span>
            </div>
          </div>

         <form
  onSubmit={liberarAcesso}
  noValidate
            className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 sm:p-7"
          >
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-[#d4af37]">
                  Nome opcional
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-5 py-4">
                  <User size={19} className="shrink-0 text-[#d4af37]" />
                  <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full bg-transparent text-white outline-none placeholder:text-white/32"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-[#d4af37]">
                  Email da compra
                </label>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-5 py-4">
                  <Mail size={19} className="shrink-0 text-[#d4af37]" />
                  <input
  type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="voce@email.com"
                    className="w-full bg-transparent text-white outline-none placeholder:text-white/32"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={carregando}
                className="flex min-h-[58px] w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#fff0a6] via-[#d4af37] to-[#8f6d12] px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {carregando ? (
                  <Loader2 size={21} className="animate-spin" />
                ) : (
                  <>
                    Receber acesso
                    <ArrowRight size={20} />
                  </>
                )}
              </button>

              {status.mensagem && (
                <div
                  className={`rounded-2xl border px-5 py-4 text-sm font-bold ${
                    status.tipo === "sucesso"
                      ? "border-[#d4af37]/35 bg-[#d4af37]/10 text-[#f4d66d]"
                      : "border-red-400/30 bg-red-500/10 text-red-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {status.tipo === "sucesso" && (
                      <CheckCircle2 size={20} className="shrink-0" />
                    )}
                    <span>{status.mensagem}</span>
                  </div>
                </div>
              )}

              {status.tipo === "sucesso" && (
                <a
                  href="/#/login-metodo"
                  className="flex min-h-[54px] w-full items-center justify-center gap-3 rounded-2xl border border-[#d4af37]/35 bg-[#d4af37]/10 px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#f4d66d] transition hover:bg-[#d4af37]/15"
                >
                  Entrar no portal
                  <ArrowRight size={19} />
                </a>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
