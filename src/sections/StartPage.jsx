import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Crown,
  Dumbbell,
  Sparkles,
  ShieldCheck,
  Lock,
} from "lucide-react";

export default function StartPage({ onMetodo }) {
  const [loading, setLoading] = useState("");

  function entrarMetodo() {
    setLoading("metodo");
    setTimeout(() => onMetodo(), 800);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <style>{`
        @keyframes shineSmooth {
          0% { transform: translateX(-180%) skewX(-18deg); }
          100% { transform: translateX(280%) skewX(-18deg); }
        }

        @keyframes goldPulse {
          0%, 100% { opacity: .55; transform: scale(1); }
          50% { opacity: .9; transform: scale(1.08); }
        }

        .shine-smooth {
          animation: shineSmooth 3.2s linear infinite;
          will-change: transform;
        }

        .gold-pulse {
          animation: goldPulse 4s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgba(255,240,166,0.24),transparent_25%),radial-gradient(circle_at_50%_22%,rgba(212,175,55,0.20),transparent_35%),radial-gradient(circle_at_50%_88%,rgba(212,175,55,0.12),transparent_38%),linear-gradient(180deg,#050402_0%,#000_55%,#050402_100%)]" />
        <div className="gold-pulse absolute left-1/2 top-[-160px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#d4af37]/20 blur-[120px]" />
        <div className="absolute left-[-180px] top-1/3 h-[420px] w-[420px] rounded-full bg-[#d4af37]/10 blur-[130px]" />
        <div className="absolute right-[-180px] top-1/4 h-[420px] w-[420px] rounded-full bg-white/5 blur-[140px]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_38%,rgba(0,0,0,0.90)_100%)]" />
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[860px] flex-col items-center justify-center px-5 py-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -24, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75 }}
          className="mb-7 md:mb-9"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mb-4 flex h-18 w-18 items-center justify-center rounded-[24px] bg-gradient-to-br from-[#fff7c8] via-[#d4af37] to-[#6f5008] text-2xl font-black text-black shadow-[0_0_80px_rgba(212,175,55,0.55)] md:h-24 md:w-24 md:rounded-[30px] md:text-4xl"
          >
            PS
          </motion.div>

          <h2 className="text-lg font-black tracking-[0.36em] md:text-2xl">
            PRIME <span className="text-[#d4af37]">SHAPE</span>
          </h2>

          <p className="mt-2 text-[9px] font-black tracking-[0.44em] text-[#d4af37] md:text-[11px]">
            CHARLES_BIKER
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[40px] font-black leading-[0.86] tracking-[-0.07em] sm:text-6xl md:text-8xl"
        >
          ESCOLHA SUA
          <span className="block bg-gradient-to-r from-[#fff7c8] via-[#d4af37] to-[#8f6d12] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(212,175,55,0.20)]">
            JORNADA
          </span>
        </motion.h1>

        <div className="mt-9 flex w-full max-w-[760px] flex-col gap-5 md:mt-12">
          <motion.button
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.985 }}
            onClick={entrarMetodo}
            className="group relative w-full overflow-hidden rounded-[34px] border border-[#d4af37]/55 bg-gradient-to-br from-zinc-950 via-black to-[#171105] p-5 text-left shadow-[0_0_110px_rgba(212,175,55,0.22)] md:p-7"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_16%,rgba(255,240,166,0.26),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(212,175,55,0.18),transparent_36%)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] via-transparent to-[#d4af37]/10" />
            <div className="shine-smooth absolute top-0 h-full w-[38%] bg-gradient-to-r from-transparent via-white/25 to-transparent blur-sm" />

            <div className="absolute right-5 top-5 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-4 py-1.5 text-[9px] font-black tracking-[0.2em] text-[#d4af37]">
              LIBERADO
            </div>

            <div className="relative z-10 grid grid-cols-[54px_1fr_48px] items-center gap-4 md:grid-cols-[72px_1fr_64px] md:gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/45 bg-[#d4af37]/15 text-[#d4af37] shadow-[0_0_35px_rgba(212,175,55,0.22)] md:h-18 md:w-18 md:rounded-3xl">
                <Dumbbell size={30} />
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2 text-[9px] font-black tracking-[0.24em] text-[#d4af37]">
                  <ShieldCheck size={13} />
                  ACESSO VITALÍCIO
                </div>

                <h3 className="text-[26px] font-black leading-[0.9] tracking-[-0.055em] md:text-4xl">
                  MÉTODO DO
                  <span className="block text-[#d4af37]">SHAPE</span>
                </h3>

                <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-white/68 md:mt-4 md:text-base">
                  Protocolos, dietas, treinos, vídeos de execução e grupo
                  exclusivo com acesso VITALICIO.
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d4af37]/70 bg-[#d4af37]/10 text-[#d4af37] shadow-[0_0_35px_rgba(212,175,55,0.22)] transition group-hover:scale-110 md:h-16 md:w-16">
                <ArrowRight size={28} />
              </div>
            </div>
          </motion.button>

          <motion.button
            whileTap={{ scale: 1 }}
            onClick={() => {}}
            className="relative w-full cursor-not-allowed overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-zinc-950 via-black to-[#100d08] p-5 text-left opacity-80 shadow-[0_0_70px_rgba(212,175,55,0.08)] md:p-7"
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_16%,rgba(212,175,55,0.15),transparent_30%)]" />

            <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[9px] font-black tracking-[0.2em] text-white/45">
              EM BREVE
            </div>

            <div className="relative z-10 grid grid-cols-[54px_1fr_48px] items-center gap-4 md:grid-cols-[72px_1fr_64px] md:gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#d4af37] md:h-18 md:w-18 md:rounded-3xl">
                <Crown size={30} />
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2 text-[9px] font-black tracking-[0.24em] text-[#d4af37]">
                  <Sparkles size={13} />
                  ACESSO BLOQUEADO
                </div>

                <h3 className="text-[26px] font-black leading-[0.9] tracking-[-0.055em] text-white/80 md:text-4xl">
                  CONSULTORIA
                  <span className="block bg-gradient-to-r from-[#fff7c8] via-[#d4af37] to-[#a67c11] bg-clip-text text-transparent">
                    PERSONALIZADA
                  </span>
                </h3>

                <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-white/45 md:mt-4 md:text-base">
                  Acompanhamento individual com Charles, estratégia direta e
                  plano adaptado. Disponível em breve.
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/10 bg-white/5 text-white/45 md:h-16 md:w-16">
                <Lock size={25} />
              </div>
            </div>
          </motion.button>
        </div>

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.28),transparent_38%)]" />

            <div className="relative flex flex-col items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="h-24 w-24 rounded-full border-4 border-[#d4af37]/20 border-t-[#d4af37]"
              />

              <motion.p
                animate={{ opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="mt-7 text-xs font-black uppercase tracking-[0.45em] text-[#d4af37]"
              >
                Preparando método do shape
              </motion.p>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}