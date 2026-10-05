
import { useState } from "react";
import API_URL from "../config/api";

export default function TrocaSenhaInicial({ token, email, senhaAtual }) {
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");
  const [erro, setErro] = useState("");
  const [salvando, setSalvando] = useState(false);

  async function salvar(evento) {
    evento.preventDefault();
    setErro("");
    if (senha.length < 6 || new TextEncoder().encode(senha).length > 72)
      return setErro("Escolha uma senha com pelo menos 6 caracteres e até 72 bytes.");
    if (senha === "123456") return setErro("Escolha uma senha diferente da inicial.");
    if (senha !== confirmacao) return setErro("As senhas precisam ser iguais.");
    setSalvando(true);
    try {
      const resposta = await fetch(API_URL + "/auth/alterar-senha", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
        body: JSON.stringify({ senhaAtual, novaSenha: senha })
      });
      const dados = await resposta.json();
      if (!resposta.ok || !dados.ok) throw new Error(dados.message || "Não foi possível salvar.");
      const acesso = await fetch(API_URL + "/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
      });
      const conta = await acesso.json();
      if (!acesso.ok || !conta.ok || conta.precisaTrocarSenha) {
        localStorage.removeItem("prime_shape_token");
        window.location.href = "/#/login-metodo";
        return;
      }
      localStorage.setItem("prime_shape_token", conta.token);
      localStorage.setItem("prime_shape_usuario", JSON.stringify(conta.usuario));
      window.location.href = "/#/portal-aluno";
    } catch (e) {
      setErro(e.message || "Falha de conexão. Tente novamente.");
    } finally {
      setSalvando(false);
    }
  }

  return (
    <section className="min-h-screen bg-black px-6 py-16 text-white">
      <form onSubmit={salvar} className="mx-auto max-w-xl rounded-[40px] border border-[#a3ff12]/20 bg-[#050505] p-8 md:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#a3ff12]">Shape Prime</p>
        <h1 className="mt-5 text-3xl font-black uppercase">Escolha sua senha</h1>
        <p className="mt-4 text-white/60">Para concluir seu primeiro acesso, crie uma senha pessoal.</p>
        <label className="mt-8 block font-bold text-[#a3ff12]" htmlFor="nova-senha">Nova senha</label>
        <input id="nova-senha" type="password" autoComplete="new-password" required minLength={6}
          value={senha} onChange={e => setSenha(e.target.value)}
          className="mt-3 w-full rounded-2xl border border-white/15 bg-white/5 p-4 text-white" />
        <label className="mt-6 block font-bold text-[#a3ff12]" htmlFor="confirmar-senha">Confirme a nova senha</label>
        <input id="confirmar-senha" type="password" autoComplete="new-password" required minLength={6}
          value={confirmacao} onChange={e => setConfirmacao(e.target.value)}
          className="mt-3 w-full rounded-2xl border border-white/15 bg-white/5 p-4 text-white" />
        {erro && <p role="alert" className="mt-5 text-red-400">{erro}</p>}
        <button disabled={salvando} className="mt-8 w-full rounded-3xl bg-[#a3ff12] p-4 font-black text-black disabled:opacity-50">
          {salvando ? "SALVANDO..." : "SALVAR E ENTRAR"}
        </button>
      </form>
    </section>
  );
}
