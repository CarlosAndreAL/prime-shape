import { useState } from "react";
import { motion } from "framer-motion";
import { Crown, Target, CalendarDays, Flame, Dumbbell } from "lucide-react";

const treinoCharles = [
  {
  dia: "Segunda-feira",
  grupo: "Push • Peito + Ombro frontal + Tríceps",
  exercicios: [
    {
      nome: "Supino reto com barra",
      series: 3,
      reps: 8,
      descanso: 3,
    },
    {
      nome: "Supino inclinado halteres",
      series: 3,
      reps: 8,
      descanso: 3,
    },
    {
      nome: "Crucifixo reto",
      series: 3,
      reps: 10,
      descanso: 3,
    },
    {
      nome: "Voado peitoral",
      series: 3,
      reps: 10,
      descanso: 3,
    },
    {
      nome: "Desenvolvimento militar",
      series: 3,
      reps: 10,
      descanso: 2,
    },
    {
      nome: "Elevação frontal halteres",
      series: 3,
      reps: 10,
      descanso: 2,
    },
    {
      nome: "Tríceps corda",
      series: 3,
      reps: 10,
      descanso: 2,
    },
    {
      nome: "Tríceps testa",
      series: 3,
      reps: 10,
      descanso: 2,
    },
    {
      nome: "Francês com barra",
      series: 3,
      reps: 10,
      descanso: 2,
    },
  ],
},
  {
    dia: "Terça-feira",
    grupo: "Pull • Costas + Bíceps",
    exercicios: [
      { nome: "Barra fixa", series: 3, reps: 6, descanso: 3 },
      { nome: "Remada curvada barra", series: 3, reps: 8, descanso: 3 },
      { nome: "Puxada frente pegada média", series: 3, reps: 8, descanso: 3 },
      { nome: "Remada unilateral halter", series: 3, reps: 8, descanso: 3 },
      { nome: "Pullover com polia", series: 3, reps: 10, descanso: 2 },
      { nome: "Rosca direta barra", series: 3, reps: 10, descanso: 2 },
      { nome: "Rosca alternada", series: 3, reps: 10, descanso: 2 },
      { nome: "Rosca martelo drop", series: 3, reps: 10, descanso: 2 },
    ],
  },
  {
    dia: "Quarta-feira",
    grupo: "Perna • Full destroyer",
    exercicios: [
      { nome: "Agachamento livre", series: 3, reps: 8, descanso: 4 },
      { nome: "Leg press", series: 3, reps: 8, descanso: 4 },
      { nome: "Cadeira extensora", series: 3, reps: 10, descanso: 3 },
      { nome: "Passada 3x ida e volta", series: 3, reps: 10, descanso: 3 },
      { nome: "Stiff", series: 3, reps: 8, descanso: 4 },
      { nome: "Mesa flexora", series: 3, reps: 8, descanso: 4 },
      { nome: "Cadeira flexora + curtinha", series: 3, reps: 10, descanso: 3 },
      { nome: "Panturrilha em pé", series: 2, reps: 20, descanso: 2 },
      { nome: "Panturrilha sentado", series: 2, reps: 15, descanso: 2 },
    ],
  },
  {
    dia: "Quinta-feira",
    grupo: "Peito + Costas • Bi-set destruidor",
    exercicios: [
      { nome: "Supino reto", series: 3, reps: 8, descanso: 3 },
      { nome: "Supino inclinado", series: 3, reps: 8, descanso: 3 },
      { nome: "Crucifixo", series: 3, reps: 10, descanso: 2 },
      { nome: "Crossover polia", series: 3, reps: 10, descanso: 2 },
      { nome: "Crucifixo articulado na máquina", series: 3, reps: 10, descanso: 2 },
      { nome: "Remada unilateral na máquina", series: 3, reps: 8, descanso: 3 },
      { nome: "Puxador fechado + aberto", series: 3, reps: 8, descanso: 3 },
      { nome: "Pulldown com carga", series: 3, reps: 10, descanso: 2 },
      { nome: "Serrote", series: 3, reps: 10, descanso: 2 },
    ],
  },
  {
    dia: "Sexta-feira",
    grupo: "Braços completos",
    exercicios: [
      { nome: "Rosca direta + Tríceps corda", series: 3, reps: 10, descanso: 2 },
      { nome: "Rosca alternada + Tríceps francês", series: 3, reps: 10, descanso: 2 },
      { nome: "Rosca 21 + Tríceps banco", series: 3, reps: 10, descanso: 2 },
      { nome: "Rosca martelo corda", series: 3, reps: 10, descanso: 2 },
      { nome: "Tríceps na polia com barra", series: 3, reps: 10, descanso: 2 },
    ],
  },
  {
    dia: "Sábado",
    grupo: "Ombros + Trapézio + Abdômen",
    exercicios: [
      { nome: "Desenvolvimento Arnold", series: 3, reps: 10, descanso: 2 },
      { nome: "Elevação lateral", series: 3, reps: 10, descanso: 2 },
      { nome: "Crucifixo inverso", series: 3, reps: 10, descanso: 2 },
      { nome: "Encolhimento com barra", series: 3, reps: 10, descanso: 2 },
      { nome: "Elevação frontal cabo", series: 3, reps: 10, descanso: 2 },
      { nome: "Abdominal com carga no cross", series: 4, reps: 15, descanso: 2 },
    ],
  },
];

export default function TreinoCharles() {
  const [diaAberto, setDiaAberto] = useState(treinoCharles[0]);

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
            Método oficial Shape Prime
          </div>

          <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] md:text-8xl">
            TREINO CHARLES
          </h1>

          <p className="mt-5 text-2xl font-black uppercase text-[#d4af37]">
            Protocolo semanal avançado
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
            Treino organizado por dia, com foco em intensidade, volume e execução pesada.
          </p>

          <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
            <Resumo icon={CalendarDays} titulo="Dias" valor="06" />
            <Resumo icon={Dumbbell} titulo="Método" valor="Charles" />
            <Resumo icon={Flame} titulo="Objetivo" valor="Alta intensidade" />
          </div>
        </motion.div>

        <div className="mt-14 rounded-[34px] border border-[#d4af37]/20 bg-[#d4af37]/10 p-6">
          <Target className="text-[#d4af37]" size={30} />

          <h2 className="mt-4 text-3xl font-black uppercase">
            Escolha o dia do treino
          </h2>

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {treinoCharles.map((dia) => (
              <button
                key={dia.dia}
                onClick={() => setDiaAberto(dia)}
                className={`rounded-2xl border px-5 py-4 text-left text-sm font-black uppercase transition ${
                  diaAberto.dia === dia.dia
                    ? "border-[#d4af37] bg-[#d4af37] text-black"
                    : "border-white/10 bg-black/30 text-white/70"
                }`}
              >
                {dia.dia}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[34px] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d4af37]">
            {diaAberto.grupo}
          </p>

          <h3 className="mt-2 text-4xl font-black uppercase">
            {diaAberto.dia}
          </h3>

          <div className="mt-8 grid gap-3">
            {diaAberto.exercicios.map((exercicio, index) => (
              <div
                key={`${diaAberto.dia}-${index}`}
                className="rounded-2xl border border-white/10 bg-black/30 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 min-w-10 items-center justify-center rounded-xl bg-[#d4af37] text-xs font-black text-black">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h4 className="font-black uppercase text-white">
                      {exercicio.nome}
                    </h4>

                    <p className="mt-1 text-sm text-white/60">
                      {exercicio.series} séries • {exercicio.reps} repetições • descanso{" "}
                      {exercicio.descanso} min
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
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