import axios from "axios";

export default function Checkout() {
  async function pagar() {
  try {
    const token = localStorage.getItem("prime_shape_token");

const response = await axios.post(
  "https://api.metodoshapeprime.com.br/pagamentos/criar-preferencia",
  {},
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

    window.location.href = response.data.init_point;
  } catch (error) {
    console.log("ERRO CHECKOUT:", error);
    console.log("RESPOSTA BACKEND:", error.response?.data);

    alert(
      error.response?.data?.message ||
        error.message ||
        "Erro ao iniciar pagamento"
    );
  }
}

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-xl rounded-[40px] border border-[#d4af37]/20 bg-[#0a0a0a] p-10 text-white">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d4af37]">
          Shape Prime
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase leading-none">
          Checkout Premium
        </h1>

        <p className="mt-5 text-white/65 leading-relaxed">
          Libere acesso completo ao protocolo, dietas, treinos e conteúdos premium.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase text-white/50">
                Plano
              </p>

              <h2 className="mt-2 text-3xl font-black">
                SHAPE PRIME PREMIUM
              </h2>
            </div>

            <div className="text-right">
              <p className="text-sm text-white/50">
                Valor
              </p>

              <h3 className="mt-2 text-4xl font-black text-[#d4af37]">
                R$79,90
              </h3>
            </div>
          </div>
        </div>

        <button
          onClick={pagar}
          className="mt-8 w-full rounded-3xl bg-[#d4af37] px-6 py-5 text-lg font-black uppercase text-black transition hover:scale-[1.02]"
        >
          Continuar pagamento
        </button>
      </div>
    </main>
  );
}