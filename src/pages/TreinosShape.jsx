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
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(163,255,18,0.22),transparent_35%),linear-gradient(180deg,#050403_0%,#000_55%,#050403_100%)]" />

      <div className="pointer-events-none fixed inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:42px_42px]" />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#a3ff12]/30 bg-[#a3ff12]/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#a3ff12]">
            <Crown size={14} />
            Treinos premium Shape Prime
          </div>

          <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] md:text-8xl">
            TREINOS
          </h1>

          <p className="mt-5 text-2xl font-black uppercase text-[#a3ff12]">
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
  const [grupoAtivo, setGrupoAtivo] = useState(card.treinos[0]);
  const [treinoAberto, setTreinoAberto] = useState(card.treinos[0].itens[0]);
  const [diaAberto, setDiaAberto] = useState(card.treinos[0].itens[0].dias[0]);

  const selecionarGrupo = (grupo) => {
    setGrupoAtivo(grupo);
    setTreinoAberto(grupo.itens[0]);
    setDiaAberto(grupo.itens[0].dias[0]);
  };

  const selecionarTreino = (treino) => {
    setTreinoAberto(treino);
    setDiaAberto(treino.dias[0]);
  };

  const totalExercicios = diaAberto.exercicios.length;

  return (
    <div className="space-y-8">
      <div className="rounded-[36px] border border-[#a3ff12]/25 bg-gradient-to-br from-[#a3ff12]/15 via-black/70 to-black p-5 shadow-[0_0_80px_rgba(163,255,18,0.12)] md:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#a3ff12]">
              Plataforma de treino
            </p>

            <h3 className="mt-2 text-4xl font-black uppercase md:text-6xl">
              Escolha seu plano
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
              Selecione o público, o nível e o dia da semana para visualizar o treino de forma rápida e organizada.
            </p>
          </div>

          <div className="rounded-2xl border border-[#a3ff12]/25 bg-black/40 px-5 py-4 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
              Dia selecionado
            </p>
            <p className="mt-1 text-xl font-black uppercase text-[#a3ff12]">
              {diaAberto.dia}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {card.treinos.map((grupo) => (
            <button
              key={grupo.grupo}
              onClick={() => selecionarGrupo(grupo)}
              className={`rounded-2xl border px-5 py-4 text-left text-sm font-black uppercase tracking-[0.12em] transition ${
                grupoAtivo.grupo === grupo.grupo
                  ? "border-[#a3ff12] bg-[#a3ff12] text-black shadow-[0_0_40px_rgba(163,255,18,0.35)]"
                  : "border-white/10 bg-black/40 text-white/60 hover:border-[#a3ff12]/40"
              }`}
            >
              {grupo.grupo}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {grupoAtivo.itens.map((treino) => (
            <button
              key={treino.nome}
              onClick={() => selecionarTreino(treino)}
              className={`rounded-2xl border px-5 py-4 text-left text-xs font-black uppercase transition ${
                treinoAberto.nome === treino.nome
                  ? "border-[#a3ff12] bg-[#a3ff12]/15 text-[#a3ff12]"
                  : "border-white/10 bg-black/35 text-white/55 hover:border-[#a3ff12]/40"
              }`}
            >
              {treino.nome}
            </button>
          ))}
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {treinoAberto.dias.map((dia) => (
            <button
              key={dia.dia}
              onClick={() => setDiaAberto(dia)}
              className={`shrink-0 rounded-2xl border px-5 py-3 text-xs font-black uppercase transition ${
                diaAberto.dia === dia.dia
                  ? "border-[#a3ff12] bg-[#a3ff12] text-black"
                  : "border-white/10 bg-black/40 text-white/60"
              }`}
            >
              {dia.dia.replace("-feira", "")}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_70px_rgba(0,0,0,0.5)] md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#a3ff12]">
              {diaAberto.grupo}
            </p>

            <h3 className="mt-2 text-4xl font-black uppercase md:text-6xl">
              {diaAberto.dia}
            </h3>

            <p className="mt-3 text-sm text-white/55">
              {treinoAberto.nome} • {totalExercicios} exercícios no treino
            </p>
          </div>

          <div className="rounded-2xl border border-[#a3ff12]/25 bg-[#a3ff12]/10 px-5 py-4">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#a3ff12]">
              Resumo
            </p>
            <p className="mt-1 text-2xl font-black text-white">
              {totalExercicios} exercícios
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-3">
          {diaAberto.exercicios.map((exercicio, index) => (
            <div
              key={`${diaAberto.dia}-${index}`}
              className="group rounded-2xl border border-white/10 bg-black/35 p-4 transition hover:border-[#a3ff12]/40 hover:bg-[#a3ff12]/5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 min-w-11 items-center justify-center rounded-2xl bg-[#a3ff12] text-sm font-black text-black shadow-[0_0_30px_rgba(163,255,18,0.35)]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-black uppercase text-white md:text-lg">
                    {exercicio.nome}
                  </h4>

                  <div className="mt-2 flex flex-wrap gap-2 text-[11px] font-bold uppercase text-white/55">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                      {exercicio.series} séries
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                      {exercicio.reps} reps
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                      descanso {exercicio.descanso} min
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[26px] border border-[#a3ff12]/25 bg-[#a3ff12]/10 p-5">
          <p className="text-sm font-bold leading-relaxed text-[#ddff8a]">
            ⚡ Execute com controle, respeite o descanso e tente evoluir carga ou repetição com boa técnica.
          </p>
        </div>
      </div>
    </div>
  );
}

function Resumo({ icon: Icon, titulo, valor }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 text-left">
      <Icon className="text-[#a3ff12]" size={28} />

      <p className="mt-4 text-3xl font-black">{valor}</p>

      <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-white/45">
        {titulo}
      </p>
    </div>
  );
}