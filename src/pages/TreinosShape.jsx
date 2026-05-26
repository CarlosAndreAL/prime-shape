import { useState } from "react";
import { motion } from "framer-motion";
import {
  Crown,
  Target,
  CalendarDays,
  Lock,
  Flame,
} from "lucide-react";

import {
  treinoHomemIniciante,
  treinoHomemIntermediario,
  treinoHomemAvancado,
  treinoMulherIniciante,
  treinoMulherIntermediario,
  treinoMulherAvancado,
} from "./SerieBulking";

const cardTreinos = {
  treinos: [
    {
      grupo: "Treinos Homem",
      itens: [
        { nome: "Homem Iniciante", dias: treinoHomemIniciante },
        { nome: "Homem Intermediário", dias: treinoHomemIntermediario },
        { nome: "Homem Avançado", dias: treinoHomemAvancado },
      ],
    },
    {
      grupo: "Treinos Mulher",
      itens: [
        { nome: "Mulher Iniciante", dias: treinoMulherIniciante },
        { nome: "Mulher Intermediário", dias: treinoMulherIntermediario },
        { nome: "Mulher Avançado", dias: treinoMulherAvancado },
      ],
    },
  ],
};

export default function TreinosShape() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.22),transparent_35%),linear-gradient(180deg,#050403_0%,#000_55%,#050403_100%)]" />

      <div className="pointer-events-none fixed inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:42px_42px]" />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#d4af37]">
            <Crown size={14} />
            Treinos premium Shape Prime
          </div>

          <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] md:text-8xl">
            TREINOS
          </h1>

          <p className="mt-5 text-2xl font-black uppercase text-[#d4af37]">
            Iniciante ao avançado
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
            Treinos masculinos e femininos organizados por nível para evolução
            de força, volume, definição e hipertrofia.
          </p>

          <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
          
          </div>
        </motion.div>

        <div className="mt-14">
          <TreinosLista card={cardTreinos} />
        </div>
      </section>
    </main>
  );
}

function TreinosLista({ card }) {
  const [treinoAberto, setTreinoAberto] = useState(card.treinos[0].itens[0]);

  return (
    <div>
      <div className="mb-8 rounded-[30px] border border-[#d4af37]/20 bg-[#d4af37]/10 p-6">
        <Target className="text-[#d4af37]" size={30} />

        <h3 className="mt-4 text-3xl font-black uppercase">
          Treinos Premium
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-white/60">
          Escolha entre treino masculino ou feminino, do iniciante ao avançado.
        </p>

        <div className="mt-7 grid gap-5">
          {card.treinos.map((grupo) => (
            <div key={grupo.grupo}>
              <h4 className="mb-3 text-lg font-black uppercase text-[#d4af37]">
                {grupo.grupo}
              </h4>

              <div className="grid gap-3 md:grid-cols-3">
                {grupo.itens.map((treino) => (
                  <button
                    key={treino.nome}
                    onClick={() => setTreinoAberto(treino)}
                    className={`rounded-2xl border px-5 py-4 text-left text-sm font-black uppercase transition ${
                      treinoAberto.nome === treino.nome
                        ? "border-[#d4af37] bg-[#d4af37] text-black"
                        : "border-white/10 bg-black/30 text-white/70"
                    }`}
                  >
                    {treino.nome}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3 className="mb-6 text-4xl font-black uppercase">
        {treinoAberto.nome}
      </h3>

      <div className="grid gap-5">
        {treinoAberto.dias.map((dia) => (
          <div
            key={dia.dia}
            className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d4af37]">
              {dia.grupo}
            </p>

            <h4 className="mt-2 text-3xl font-black uppercase">{dia.dia}</h4>

            <div className="mt-6 grid gap-3">
              {dia.exercicios.map((exercicio, index) => (
                <div
                  key={`${dia.dia}-${index}`}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 min-w-9 items-center justify-center rounded-xl bg-[#d4af37] text-xs font-black text-black">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h5 className="font-black uppercase text-white">
                        {exercicio.nome}
                      </h5>

                      <p className="mt-1 text-sm text-white/60">
                        {exercicio.series} séries • {exercicio.reps} repetições
                        • descanso {exercicio.descanso} min
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Resumo({ icon: Icon, titulo, valor }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 text-left">
      <Icon className="text-[#d4af37]" size={28} />

      <p className="mt-4 text-3xl font-black">{valor}</p>

      <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-white/45">
        {titulo}
      </p>
    </div>
  );
}