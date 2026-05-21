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

export default function StartPage({ onConsultoria, onMetodo }) {
  const [loading, setLoading] = useState("");

  function entrarMetodo() {
    setLoading("metodo");
    setTimeout(() => onMetodo(), 700);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <style>{`
        @keyframes shineSmooth {
          0% { transform: translateX(-160%) skewX(-18deg); }
          100% { transform: translateX(260%) skewX(-18deg); }
        }

        .shine-smooth {
          animation: shineSmooth 3.8s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(212,175,55,0.24),transparent_34%),radial-gradient(circle_at_50%_80%,rgba(212,175,55,0.08),transparent_38%),linear-gradient(180deg,#050402_0%,#000_55%,#050402_100%)]" />
        <div className="absolute left-1/2 top-[-130px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-[#d4af37]/20 blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_38%,rgba(0,0,0,0.88)_100%)]" />
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[720px] flex-col items-center px-5 pb-10 pt-10 text-center md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: -22, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-7"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-[22px] bg-gradient-to-br from-[#fff0a6] via-[#d4af37] to-[#7c5a0c] text-2xl font-black text-black shadow-[0_0_50px_rgba(212,175,55,0.42)] md:h-20 md:w-20 md:text-3xl"
          >
            PS
          </motion.div>

          <h2 className="text-lg font-black tracking-[0.28em] md:text-xl">
            PRIME <span className="text-[#d4af37]">SHAPE</span>
          </h2>

          <p className="mt-2 text-[9px] font-black tracking-[0.38em] text-[#d4af37] md:text-[10px]">
            CHARLES_BIKER
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="text-[38px] font-black leading-[0.88] tracking-[-0.06em] sm:text-6xl md:text-7xl"
        >
          ESCOLHA SUA
          <span className="block bg-gradient-to-r from-[#fff0a6] via-[#d4af37] to-[#8f6d12] bg-clip-text text-transparent">
            JORNADA
          </span>
        </motion.h1>

        <div className="mt-8 flex w-full flex-col gap-4 md:mt-10">
          <motion.button
            whileTap={{ scale: 0.985 }}
            onClick={entrarMetodo}
            className="relative w-full overflow-hidden rounded-[28px] border border-[#d4af37]/45 bg-gradient-to-br from-zinc-950 via-black to-[#171105] p-4 text-left shadow-[0_0_75px_rgba(212,175,55,0.14)] md:rounded-[32px] md:p-5"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(212,175,55,0.25),transparent_36%)]" />
            <div className="shine-smooth absolute top-0 h-full w-[38%] bg-gradient-to-r from-transparent via-white/16 to-transparent blur-sm" />

            <div className="absolute right-4 top-4 rounded-full border border-[#d4af37]/35 bg-[#d4af37]/10 px-3 py-1 text-[8px] font-black tracking-[0.16em] text-[#d4af37] md:right-5 md:top-5 md:text-[9px]">
              LIBERADO
            </div>

            <div className="relative z-10 grid grid-cols-[50px_1fr_44px] items-center gap-3 md:grid-cols-[58px_1fr_50px] md:gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4af37]/40 bg-[#d4af37]/15 text-[#d4af37] md:h-14 md:w-14">
                <Dumbbell size={26} />
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2 text-[8px] font-black tracking-[0.2em] text-[#d4af37] md:mb-3 md:text-[9px]">
                  <ShieldCheck size={12} />
                  ACESSO VITALÍCIO
                </div>

                <h3 className="text-[24px] font-black leading-[0.9] tracking-[-0.05em] md:text-[27px]">
                  MÉTODO DO
                  <span className="block text-[#d4af37]">SHAPE</span>
                </h3>

                <p className="mt-3 text-[13px] leading-relaxed text-white/68 md:mt-4 md:text-[14px]">
                  Protocolos, dietas, treinos, vídeos de execução e grupo
                  exclusivo por R$ 79,90.
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#d4af37]/70 bg-[#d4af37]/10 text-[#d4af37] md:h-12 md:w-12">
                <ArrowRight size={23} />
              </div>
            </div>
          </motion.button>

          <motion.button
            whileTap={{ scale: 1 }}
            onClick={() => {}}
            className="relative w-full cursor-not-allowed overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-zinc-950 via-black to-[#100d08] p-4 text-left opacity-75 shadow-[0_0_55px_rgba(212,175,55,0.08)] md:rounded-[32px] md:p-5"
          >
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(212,175,55,0.16),transparent_36%)]" />

            <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[8px] font-black tracking-[0.16em] text-white/45 md:right-5 md:top-5 md:text-[9px]">
              EM BREVE
            </div>

            <div className="relative z-10 grid grid-cols-[50px_1fr_44px] items-center gap-3 md:grid-cols-[58px_1fr_50px] md:gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#d4af37] md:h-14 md:w-14">
                <Crown size={26} />
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2 text-[8px] font-black tracking-[0.2em] text-[#d4af37] md:mb-3 md:text-[9px]">
                  <Sparkles size={12} />
                  ACESSO BLOQUEADO
                </div>

                <h3 className="text-[24px] font-black leading-[0.9] tracking-[-0.05em] text-white/80 md:text-[27px]">
                  CONSULTORIA
                  <span className="block bg-gradient-to-r from-[#fff0a6] via-[#d4af37] to-[#a67c11] bg-clip-text text-transparent">
                    PERSONALIZADA
                  </span>
                </h3>

                <p className="mt-3 text-[13px] leading-relaxed text-white/45 md:mt-4 md:text-[14px]">
                  Acompanhamento individual com Charles, estratégia direta e
                  plano adaptado. Disponível em breve.
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/10 bg-white/5 text-white/45 md:h-12 md:w-12">
                <Lock size={22} />
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
                className="h-20 w-20 rounded-full border-4 border-[#d4af37]/20 border-t-[#d4af37] md:h-24 md:w-24"
              />

              <motion.p
                animate={{ opacity: [0.45, 1, 0.45] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="mt-7 text-xs font-black uppercase tracking-[0.35em] text-[#d4af37] md:tracking-[0.45em]"
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