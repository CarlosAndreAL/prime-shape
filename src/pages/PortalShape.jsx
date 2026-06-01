import { motion } from "framer-motion";
import {
  Flame,
  Dumbbell,
  Crown,
  PlayCircle,
  Lock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";

export default function PortalShape() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(163,255,18,0.28),transparent_35%),linear-gradient(180deg,#050403_0%,#000_55%,#050403_100%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:42px_42px]" />

      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-10">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#a3ff12]/30 bg-[#a3ff12]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#a3ff12]">
              <Sparkles size={13} />
              SHAPE PRIME PREMIUM
            </div>

            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
              ESCOLHA SUA
              <span className="block text-[#a3ff12]">
                JORNADA
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
              Agora você faz parte do Shape Prime. Escolha o protocolo que deseja seguir e desbloqueie sua evolução.
            </p>
          </div>

          <div className="rounded-[30px] border border-[#a3ff12]/20 bg-[#a3ff12]/10 p-6 backdrop-blur-xl">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#a3ff12]">
              STATUS DA CONTA
            </p>

            <h3 className="mt-3 text-3xl font-black">
              PREMIUM
            </h3>

            <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
              <CheckCircle2 size={18} className="text-[#a3ff12]" />
              Acesso vitalício liberado
            </div>
          </div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mt-10 overflow-hidden rounded-[40px] border border-[#a3ff12]/20 bg-[radial-gradient(circle_at_right,rgba(163,255,18,0.18),transparent_35%),linear-gradient(135deg,#0b0907,#000)] p-8 md:p-12"
        >
          <div className="absolute right-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[#a3ff12]/20 blur-[100px]" />

          <div className="relative z-10 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#a3ff12]/25 bg-[#a3ff12]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#a3ff12]">
              <Crown size={13} />
              EXPERIÊNCIA PREMIUM
            </div>

            <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-6xl">
              O PRIMEIRO PASSO
              <span className="block text-[#a3ff12]">
                PARA O SHAPE.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
              Dentro da plataforma você terá protocolos completos de cutting e bulking, organização por módulos, vídeos de execução, dietas, treinos e acompanhamento da evolução.
            </p>

            <button className="mt-8 flex h-[58px] items-center gap-3 rounded-2xl bg-[#a3ff12] px-7 text-sm font-black uppercase tracking-[0.12em] text-black shadow-[0_0_55px_rgba(163,255,18,0.35)] transition hover:scale-[1.03]">
              Começar agora
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.section>

        <section className="mt-16">
          <div className="mb-7 flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#a3ff12]">
                Protocolos
              </p>

              <h2 className="mt-2 text-3xl font-black uppercase md:text-5xl">
                Escolha sua série
              </h2>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white/45 md:flex">
              <Star size={14} className="text-[#a3ff12]" />
              Experiência cinematográfica
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <SerieCard
              icon={Flame}
              titulo="CUTTING"
              subtitulo="Definição extrema"
              descricao="A série completa para secar, definir e construir um shape mais estético."
              imagem="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop"
              episodios={[
                "Introdução ao cutting",
                "Estratégia de dieta",
                "Treino para definição",
                "Execução correta",
                "Cardio inteligente",
              ]}
              cor="from-red-500/20"
            />

            <SerieCard
              icon={Dumbbell}
              titulo="BULKING"
              subtitulo="Ganho de massa"
              descricao="A série completa para crescer com qualidade e construir massa muscular."
              imagem="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop"
              episodios={[
                "Introdução ao bulking",
                "Estratégia de dieta",
                "Treino hipertrofia",
                "Execução correta",
                "Progressão de carga",
              ]}
              cor="from-[#a3ff12]/20"
            />
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-7">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#a3ff12]">
              Dentro da plataforma
            </p>

            <h2 className="mt-2 text-3xl font-black uppercase md:text-5xl">
              O que você vai desbloquear
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            <MiniCard titulo="Treinos premium" />
            <MiniCard titulo="Dietas completas" />
            <MiniCard titulo="Vídeos de execução" />
            <MiniCard titulo="Progresso do aluno" />
            <MiniCard titulo="Grupo exclusivo" />
            <MiniCard titulo="Método Charles" />
            <MiniCard titulo="Protocolos completos" />
            <MiniCard titulo="Acesso vitalício" />
          </div>
        </section>
      </section>
    </main>
  );
}

function SerieCard({
  icon: Icon,
  titulo,
  subtitulo,
  descricao,
  imagem,
  episodios,
  cor,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[38px] border border-white/10 bg-[#090909]"
    >
      <div className="relative h-[520px]">
        <img
          src={imagem}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className={`absolute inset-0 bg-gradient-to-t ${cor} via-black/20 to-black/90`} />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/70" />

        <div className="relative z-10 flex h-full flex-col justify-end p-7">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-[#a3ff12] text-black shadow-[0_0_50px_rgba(163,255,18,0.45)]">
            <Icon size={30} />
          </div>

          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#a3ff12]">
            Série exclusiva
          </p>

          <h3 className="mt-3 text-5xl font-black uppercase leading-none tracking-[-0.06em]">
            {titulo}
          </h3>

          <p className="mt-2 text-lg font-bold uppercase text-white/70">
            {subtitulo}
          </p>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/65">
            {descricao}
          </p>

          <div className="mt-7 space-y-2">
            {episodios.map((episodio) => (
              <div
                key={episodio}
                className="flex items-center gap-2 text-sm text-white/75"
              >
                <PlayCircle size={16} className="text-[#a3ff12]" />
                {episodio}
              </div>
            ))}
          </div>

          <button className="mt-8 flex h-[58px] items-center justify-center gap-3 rounded-2xl bg-[#a3ff12] text-sm font-black uppercase tracking-[0.14em] text-black shadow-[0_0_60px_rgba(163,255,18,0.35)] transition hover:scale-[1.02]">
            Assistir série
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function MiniCard({ titulo }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a3ff12]/10 text-[#a3ff12]">
        <Lock size={24} />
      </div>

      <h3 className="mt-5 text-lg font-black uppercase leading-tight">
        {titulo}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-white/55">
        Conteúdo premium liberado dentro da plataforma Shape Prime.
      </p>
    </motion.div>
  );
}