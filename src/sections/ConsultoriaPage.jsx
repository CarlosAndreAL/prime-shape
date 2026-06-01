import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardCheck,
  MessageCircle,
  Target,
  CheckCircle2,
  Lock,
  Sparkles,
  Flame,
  ShieldCheck,
  Zap,
  Crown,
  Dumbbell,
} from "lucide-react";

import antesImg from "../assets/charles-antes.jpg";
import depoisImg from "../assets/charles-depois.jpg";

const WHATSAPP_LINK =
  "https://wa.me/5521985871262?text=Ol%C3%A1%2C%20vim%20pela%20consultoria%20personalizada%20da%20Prime%20Shape.%20Quero%20saber%20como%20funciona.";

const benefits = [
  {
    icon: ClipboardCheck,
    title: "PLANO 100% PERSONALIZADO",
    text: "Treino e dieta ajustados para sua rotina, objetivo, nível e evolução real.",
  },
  {
    icon: MessageCircle,
    title: "ACOMPANHAMENTO PRÓXIMO",
    text: "Suporte para corrigir, ajustar e manter você no caminho certo.",
  },
  {
    icon: ShieldCheck,
    title: "EVOLUÇÃO COM MÉTODO",
    text: "Estratégia clara para sair da tentativa e finalmente ter direção.",
  },
  {
    icon: Target,
    title: "FOCO TOTAL EM VOCÊ",
    text: "Nada genérico. Tudo pensado para seu corpo, sua rotina e sua meta.",
  },
];

const bullets = [
  "Você treina, se esforça, mas sente que não evolui como deveria.",
  "Você já tentou dieta, treino pronto e vídeos da internet, mas não manteve constância.",
  "Você quer perder gordura, ganhar massa e se sentir mais confiante.",
  "Você precisa de direção, cobrança e um plano feito para a sua realidade.",
];

const steps = [
  "Análise do seu objetivo e rotina",
  "Plano de treino personalizado",
  "Estratégia alimentar adaptada",
  "Ajustes durante sua evolução",
];

export default function ConsultoriaPage({ onVoltar }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <style>{`
        @keyframes shineSmooth {
          0% { transform: translateX(-160%) skewX(-18deg); }
          100% { transform: translateX(260%) skewX(-18deg); }
        }

        @keyframes floatSoft {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .shine-smooth {
          animation: shineSmooth 3.8s linear infinite;
          will-change: transform;
        }

        .float-soft {
          animation: floatSoft 4s ease-in-out infinite;
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(163,255,18,0.26),transparent_30%),radial-gradient(circle_at_18%_45%,rgba(163,255,18,0.11),transparent_35%),radial-gradient(circle_at_85%_70%,rgba(163,255,18,0.13),transparent_35%),linear-gradient(180deg,#050403_0%,#000_55%,#050403_100%)]" />
        <div className="absolute left-1/2 top-[-180px] h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-[#a3ff12]/20 blur-[130px]" />
        <div className="absolute -left-44 top-[38%] h-[420px] w-[420px] rounded-full bg-[#a3ff12]/10 blur-[125px]" />
        <div className="absolute -right-44 top-[58%] h-[460px] w-[460px] rounded-full bg-[#a3ff12]/10 blur-[135px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.93)_100%)]" />
      </div>

      {onVoltar && (
        <button
          onClick={onVoltar}
          className="fixed left-5 top-5 z-50 rounded-full border border-[#a3ff12]/35 bg-black/75 px-5 py-3 text-xs font-black uppercase tracking-[0.24em] text-[#a3ff12] backdrop-blur-xl"
        >
          ← Voltar
        </button>
      )}

      <section className="relative z-10 px-5 pb-14 pt-14">
        <div className="mx-auto max-w-[580px]">
          <motion.div
            initial={{ opacity: 0, y: -35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 flex flex-col items-center text-center"
          >
            

            <h2 className="mt-5 text-[24px] font-black uppercase tracking-[0.25em]">
              CONSULTORIA
            </h2>

            <p className="mt-1 text-[11px] font-black tracking-[0.45em] text-[#a3ff12]">
              PERSONALIZADA
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="text-center"
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#a3ff12]/30 bg-[#a3ff12]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#a3ff12]">
              <Zap size={14} />
              Resultado com direção
            </p>

            <h1 className="text-[48px] font-black uppercase leading-[0.86] tracking-[-0.08em] sm:text-[72px]">
              Pare de tentar
              <span className="block bg-gradient-to-r from-[#efffc2] via-[#a3ff12] to-[#4fd000] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(163,255,18,0.35)]">
                sozinho
              </span>
              comece com método
            </h1>

            <p className="mx-auto mt-7 max-w-[470px] text-[17px] leading-relaxed text-white/72">
              Consultoria premium para quem quer transformar o corpo com treino,
              alimentação, estratégia e acompanhamento de verdade.
            </p>
          </motion.div>

          <BeforeAfterMobile />

          <CtaButton
            href={WHATSAPP_LINK}
            text1="Quero minha"
            text2="transformação"
            compact
          />
        </div>
      </section>

      <section className="relative z-10 border-t border-white/10 px-5 py-14">
        <div className="mx-auto max-w-[580px]">
          <SectionTitle icon={Flame} title="O problema não é você" />

          <div className="mt-10 overflow-hidden rounded-[34px] border border-[#a3ff12]/20 bg-white/[0.035] p-7 shadow-[0_0_90px_rgba(163,255,18,0.09)]">
            <h2 className="text-[34px] font-black uppercase leading-[0.92] tracking-[-0.05em]">
              O que faltava era
              <span className="block text-[#a3ff12]">direção.</span>
            </h2>

            <p className="mt-5 text-[16px] leading-relaxed text-white/70">
              Resultado não vem só de esforço. Vem de estrutura, constância,
              ajuste e um plano que realmente encaixa na sua rotina.
            </p>

            <div className="mt-7 space-y-4">
              {bullets.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2
                    className="mt-1 min-w-5 text-[#a3ff12]"
                    size={21}
                  />
                  <p className="text-[15px] leading-relaxed text-white/75">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/10 px-5 py-14">
        <div className="mx-auto max-w-[580px]">
          <SectionTitle icon={Sparkles} title="O que você vai ter" />

          <div className="mt-10 grid grid-cols-2 gap-4">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: index * 0.06 }}
                  className="relative overflow-hidden rounded-[28px] border border-[#a3ff12]/20 bg-white/[0.035] p-5 shadow-[0_0_60px_rgba(163,255,18,0.07)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(163,255,18,0.16),transparent_60%)]" />
                  <Icon size={36} className="relative z-10 text-[#a3ff12]" />

                  <h3 className="relative z-10 mt-5 text-[13px] font-black uppercase leading-tight text-[#a3ff12]">
                    {item.title}
                  </h3>

                  <p className="relative z-10 mt-3 text-xs leading-relaxed text-white/65">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/10 px-5 py-14">
        <div className="mx-auto max-w-[580px]">
          <SectionTitle icon={ShieldCheck} title="Como funciona" />

          <div className="mt-10 space-y-4">
            {steps.map((item, index) => (
              <div
                key={item}
                className="relative overflow-hidden rounded-[26px] border border-[#a3ff12]/18 bg-white/[0.035] p-5"
              >
                <div className="absolute right-4 top-3 text-[46px] font-black leading-none text-white/[0.04]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-2xl border border-[#a3ff12]/30 bg-[#a3ff12]/10 text-[#a3ff12]">
                    <Crown size={24} />
                  </div>

                  <p className="text-[16px] font-bold leading-relaxed text-white/80">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <CtaButton
            href={WHATSAPP_LINK}
            text1="Quero começar"
            text2="com método"
            compact
          />
        </div>
      </section>

      <section className="relative z-10 border-t border-white/10 px-5 py-14">
        <div className="mx-auto max-w-[580px]">
          <SectionTitle icon={Dumbbell} title="Pra quem é" />

          <div className="mt-10 rounded-[34px] border border-[#a3ff12]/20 bg-[radial-gradient(circle_at_top,rgba(163,255,18,0.16),transparent_48%),rgba(255,255,255,0.035)] p-7">
            <h2 className="text-[32px] font-black uppercase leading-[0.95] tracking-[-0.04em]">
              Essa consultoria é para quem quer parar de improvisar.
            </h2>

            <p className="mt-5 text-[16px] leading-relaxed text-white/68">
              Aqui você não recebe uma receita pronta. Você recebe uma direção
              baseada no seu objetivo, no seu corpo e no que você consegue
              executar.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/10 px-5 py-14">
        <div className="relative mx-auto max-w-[580px] overflow-hidden rounded-[36px] border border-[#a3ff12]/25 bg-[radial-gradient(circle_at_top,rgba(163,255,18,0.24),transparent_45%),rgba(255,255,255,0.035)] p-8 shadow-[0_0_90px_rgba(163,255,18,0.12)]">
          <div className="shine-smooth absolute top-0 h-full w-[35%] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />

          <h2 className="relative z-10 text-center text-[42px] font-black uppercase leading-[0.92] tracking-[-0.05em]">
            Chegou
            <span className="block text-[#a3ff12]">a sua vez</span>
          </h2>

          <p className="relative z-10 mx-auto mt-5 max-w-[420px] text-center text-[15px] leading-relaxed text-white/68">
            Comece agora sua transformação física e desbloqueie sua melhor
            versão.
          </p>

          <CtaButton
            href={WHATSAPP_LINK}
            text1="Quero começar agora"
            text2="minha transformação"
            compact
          />

          <div className="relative z-10 mt-5 flex items-center justify-center gap-2 text-xs text-white/45">
            <Lock size={14} />
            Pagamento seguro • Privacidade garantida
          </div>
        </div>
      </section>
    </main>
  );
}

function CtaButton({ text1, text2, compact = false, href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileTap={{ scale: 0.97 }}
      className={`relative flex w-full items-center justify-between overflow-hidden rounded-[28px] bg-gradient-to-r from-[#efffc2] via-[#a3ff12] to-[#54d800] px-7 text-black shadow-[0_0_90px_rgba(163,255,18,0.35)] ${
        compact ? "mt-8 py-5" : "mt-9 py-6"
      }`}
    >
      <div className="shine-smooth absolute top-0 h-full w-[35%] bg-gradient-to-r from-transparent via-white/45 to-transparent blur-sm" />

      <div className="relative z-10 text-left">
        <p className="text-sm font-black uppercase tracking-[0.22em]">
          {text1}
        </p>

        <h3 className="text-[24px] font-black uppercase leading-none">
          {text2}
        </h3>
      </div>

      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-black text-[#a3ff12]">
        <ArrowRight size={30} />
      </div>
    </motion.a>
  );
}

function SectionTitle({ icon: Icon, title }) {
  return (
    <div className="text-center">
      <div className="mb-4 flex items-center justify-center gap-4">
        <span className="h-px w-10 bg-[#a3ff12]" />

        <div className="flex items-center gap-2 text-[#a3ff12]">
          <Icon size={18} />
          <p className="text-xs font-black uppercase tracking-[0.25em]">
            {title}
          </p>
        </div>

        <span className="h-px w-10 bg-[#a3ff12]" />
      </div>
    </div>
  );
}

function BeforeAfterMobile() {
  const boxRef = useRef(null);
  const lineRef = useRef(null);
  const clipRef = useRef(null);

  function move(e) {
    const box = boxRef.current;
    if (!box) return;

    const rect = box.getBoundingClientRect();
    const clientX = e.clientX ?? e.touches?.[0]?.clientX;
    const x = clientX - rect.left;
    const percent = Math.max(8, Math.min(92, (x / rect.width) * 100));

    requestAnimationFrame(() => {
      if (lineRef.current) lineRef.current.style.left = `${percent}%`;
      if (clipRef.current) clipRef.current.style.width = `${percent}%`;
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="relative mt-12"
    >
      <div
        ref={boxRef}
        onPointerMove={move}
        onPointerDown={move}
        className="relative h-[520px] w-full touch-none overflow-hidden rounded-[36px] border border-[#a3ff12]/35 bg-black shadow-[0_0_120px_rgba(163,255,18,0.18)] sm:h-[640px]"
      >
        <img
          src={depoisImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />

        <div ref={clipRef} className="absolute inset-0 w-1/2 overflow-hidden">
          <img
            src={antesImg}
            alt=""
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        <div
          ref={lineRef}
          className="absolute left-1/2 top-0 z-20 h-full w-[4px] -translate-x-1/2 bg-[#a3ff12] shadow-[0_0_40px_rgba(163,255,18,1)]"
        >
          <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-black bg-[#a3ff12] text-3xl font-black text-black shadow-[0_0_45px_rgba(163,255,18,0.9)]">
            ↔
          </div>
        </div>

        <div className="absolute left-4 top-4 z-30 rounded-xl bg-black/85 px-4 py-2 text-xs font-black tracking-[0.2em] backdrop-blur-xl">
          ANTES
        </div>

        <div className="absolute right-4 top-4 z-30 rounded-xl border border-[#a3ff12]/40 bg-black/85 px-4 py-2 text-xs font-black tracking-[0.2em] backdrop-blur-xl">
          RESULTADO
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(0,0,0,0.78))]" />
      </div>
    </motion.div>
  );
}