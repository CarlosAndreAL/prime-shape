import { motion } from "framer-motion";
import {
  Crown,
  Flame,
  Dumbbell,
  ArrowRight,
  ShieldCheck,
 Sparkles,
  ClipboardList,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function MetodoShapePortal() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_30%),linear-gradient(180deg,#050403_0%,#000_55%,#050403_100%)]" />

      <div className="pointer-events-none fixed inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:40px_40px]" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-5 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#d4af37]">
            <Crown size={14} />
            Plataforma premium Shape Prime
          </div>

          <h1 className="text-6xl font-black uppercase leading-[0.86] tracking-[-0.08em] md:text-8xl">
            SHAPE PRIME
          </h1>

          <p className="mt-5 text-2xl font-black uppercase text-[#d4af37]">
            Plataforma de transformação física
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-white/65 md:text-base">
            Escolha seu protocolo e tenha acesso completo às dietas,
            treinos, execuções e estratégias premium.
          </p>
        </motion.div> 

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <PortalCard
            titulo="CUTTING"
            subtitulo="Definição muscular"
            descricao="Dietas e protocolos completos para secar gordura mantendo massa muscular."
            imagem="/cuttingfoto.png"
            icon={Flame}
            onClick={() => navigate("/cutting")}
          />

          <PortalCard
            titulo="BULKING"
            subtitulo="Hipertrofia muscular"
            descricao="Dietas e métodos para ganho de massa, força e volume muscular."
            imagem="/bulkingfoto.png"
            icon={Dumbbell}
            onClick={() => navigate("/bulking")}
          />

          <PortalCard
            titulo="TREINO CHARLES"
            subtitulo="Método oficial"
            descricao="Treinos completos e estratégias do método Charles para evolução máxima."
            imagem="/treinosfoto.png"
            icon={Crown}
            onClick={() => navigate("/treino-charles")}
          />

          <PortalCard
            titulo="TREINOS"
            subtitulo="Do iniciante ao avançado"
            descricao="Treinos masculinos e femininos organizados por nível de evolução."
            imagem="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1400&auto=format&fit=crop"
            icon={ClipboardList}
            onClick={() => navigate("/treinos")}
          />
        </div>
      </section>
    </main>
  );
}

function PortalCard({
  titulo,
  subtitulo,
  descricao,
  imagem,
  icon: Icon,
  onClick,
}) {
  return (
    <motion.button
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-[38px] border border-[#d4af37]/20 bg-black text-left shadow-[0_0_90px_rgba(212,175,55,0.12)]"
    >
      <div className="relative h-[620px] overflow-hidden">
        <img
          src={imagem}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/55" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.20),transparent_50%)]" />

        <div className="relative z-10 flex h-full flex-col justify-between p-8">
          <div className="flex items-center justify-between">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#d4af37] text-black shadow-[0_0_50px_rgba(212,175,55,0.5)]">
              <Icon size={30} />
            </div>

            <span className="rounded-full border border-[#d4af37]/30 bg-black/50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#d4af37]">
              Premium
            </span>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d4af37]">
              {subtitulo}
            </p>

            <h2 className="mt-3 text-6xl font-black uppercase leading-[0.9]">
              {titulo}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70">
              {descricao}
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-[#d4af37]/25 bg-[#d4af37]/10 px-5 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#d4af37]">
              Entrar agora
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function InfoCard({ icon: Icon, titulo, valor }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5">
      <Icon className="text-[#d4af37]" size={30} />

      <p className="mt-4 text-3xl font-black">{valor}</p>

      <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-white/45">
        {titulo}
      </p>
    </div>
  );
}