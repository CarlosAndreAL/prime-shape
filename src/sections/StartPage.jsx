import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Crown,
  Dumbbell,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function StartPage({ onConsultoria, onMetodo }) {
  const [loading, setLoading] = useState("");

  function entrarConsultoria() {
    setLoading("consultoria");
    setTimeout(() => onConsultoria(), 900);
  }

  function entrarMetodo() {
    setLoading("metodo");
    setTimeout(() => onMetodo(), 900);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <style>{`
        @keyframes shineSmooth {
          0% { transform: translateX(-160%) skewX(-18deg); }
          100% { transform: translateX(260%) skewX(-18deg); }
        }

        .shine-smooth {
          animation: shineSmooth 3.6s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(212,175,55,0.28),transparent_34%),radial-gradient(circle_at_50%_80%,rgba(212,175,55,0.10),transparent_38%),linear-gradient(180deg,#050402_0%,#000_55%,#050402_100%)]" />
        <div className="absolute left-1/2 top-[-130px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#d4af37]/25 blur-[110px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_38%,rgba(0,0,0,0.88)_100%)]" />
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-[760px] flex-col items-center px-5 pb-12 pt-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: -25, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75 }}
          className="mb-8"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-[24px] bg-gradient-to-br from-[#fff0a6] via-[#d4af37] to-[#7c5a0c] text-3xl font-black text-black shadow-[0_0_60px_rgba(212,175,55,0.45)]"
          >
            PS
          </motion.div>

          <h2 className="text-xl font-black tracking-[0.3em]">
            PRIME <span className="text-[#d4af37]">SHAPE</span>
          </h2>

          <p className="mt-2 text-[10px] font-black tracking-[0.42em] text-[#d4af37]">
            CHARLES_BIKER
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[48px] font-black leading-[0.88] tracking-[-0.07em] sm:text-7xl"
        >
          ESCOLHA SUA
          <span className="block bg-gradient-to-r from-[#fff0a6] via-[#d4af37] to-[#8f6d12] bg-clip-text text-transparent">
            JORNADA
          </span>
        </motion.h1>

      

        <div className="mt-10 flex w-full flex-col gap-5">
          <motion.button
            whileTap={{ scale: 0.985 }}
            onClick={entrarConsultoria}
            className="relative w-full overflow-hidden rounded-[32px] border border-[#d4af37]/45 bg-gradient-to-br from-zinc-950 via-black to-[#171105] p-5 text-left shadow-[0_0_90px_rgba(212,175,55,0.16)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(212,175,55,0.32),transparent_36%)]" />
            <div className="shine-smooth absolute top-0 h-full w-[38%] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm" />

            <div className="relative z-10 grid grid-cols-[58px_1fr_50px] items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/40 bg-[#d4af37]/15 text-[#d4af37]">
                <Crown size={30} />
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2 text-[9px] font-black tracking-[0.22em] text-[#d4af37]">
                  <Sparkles size={13} />
                  ACESSO PRINCIPAL
                </div>

                <h3 className="text-[27px] font-black leading-[0.9] tracking-[-0.055em]">
                  CONSULTORIA
                  <span className="block bg-gradient-to-r from-[#fff0a6] via-[#d4af37] to-[#a67c11] bg-clip-text text-transparent">
                    PERSONALIZADA
                  </span>
                </h3>

                <p className="mt-4 text-[14px] leading-relaxed text-white/68">
                  Acompanhamento individual com Charles, estratégia direta e
                  plano adaptado para acelerar seus resultados.
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d4af37]/70 bg-[#d4af37]/10 text-[#d4af37]">
                <ArrowRight size={25} />
              </div>
            </div>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.985 }}
            onClick={entrarMetodo}
            className="relative w-full overflow-hidden rounded-[32px] border border-[#d4af37]/45 bg-gradient-to-br from-zinc-950 via-black to-[#171105] p-5 text-left shadow-[0_0_90px_rgba(212,175,55,0.16)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(212,175,55,0.28),transparent_36%)]" />
            <div className="shine-smooth absolute top-0 h-full w-[38%] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm" />

            <div className="absolute right-5 top-5 rounded-full border border-[#d4af37]/35 bg-[#d4af37]/10 px-3 py-1 text-[9px] font-black tracking-[0.18em] text-[#d4af37]">
              LIBERADO
            </div>

            <div className="relative z-10 grid grid-cols-[58px_1fr_50px] items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/40 bg-[#d4af37]/15 text-[#d4af37]">
                <Dumbbell size={30} />
              </div>

              <div>
                <div className="mb-3 flex items-center gap-2 text-[9px] font-black tracking-[0.22em] text-[#d4af37]">
                  <ShieldCheck size={13} />
                  ACESSO VITALÍCIO
                </div>

                <h3 className="text-[27px] font-black leading-[0.9] tracking-[-0.055em]">
                  MÉTODO DO
                  <span className="block text-[#d4af37]">SHAPE</span>
                </h3>

                <p className="mt-4 text-[14px] leading-relaxed text-white/68">
                  Protocolo definição, protocolo ganho de massa, dietas, treinos,
                  vídeos de execução e grupo exclusivo por R$ 99,90.
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d4af37]/70 bg-[#d4af37]/10 text-[#d4af37]">
                <ArrowRight size={25} />
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
                {loading === "metodo"
                  ? "Preparando método do shape"
                  : "Preparando consultoria"}
              </motion.p>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}