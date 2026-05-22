import { motion } from "framer-motion";
import charlesVideo from "../assets/videos/charles-vsl.mp4";
import {
  Flame,
  Dumbbell,
  Crown,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Target,
  Lock,
  PlayCircle,
  Users,
  Utensils,
  Zap,
  Gift,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

const COLORS = {
  bg: "#0F1115",
  text: "#F5F5F5",
  muted: "#A0A7B4",
  gold: "#D4AF37",
  amber: "#F59E0B",
};

export default function MetodoShape() {
  return (
    <section className="relative overflow-hidden bg-[#0F1115] px-4 py-12 text-[#F5F5F5] md:px-6 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.11),transparent_34%),radial-gradient(circle_at_bottom,rgba(245,158,11,0.06),transparent_42%),linear-gradient(180deg,#0F1115_0%,#090B0F_55%,#0F1115_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl rounded-[34px] border border-white/10 bg-[#0B0D11]/90 px-5 py-8 text-center shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:px-10 md:py-12"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-4 py-2 text-[8px] font-black uppercase tracking-[0.16em] text-[#D4AF37] md:text-[11px]">
            <Sparkles size={13} />
            Método Premium
          </div>

          <h1 className="mx-auto max-w-[320px] font-black uppercase leading-[0.92] tracking-[-0.05em] sm:max-w-3xl md:max-w-5xl">
            <span className="block text-[2.2rem] text-[#F5F5F5] sm:text-6xl md:text-8xl">
              SAIA DO FÍSICO
            </span>

            <span className="block text-[2.2rem] text-[#F5F5F5] sm:text-6xl md:text-8xl">
              COMUM
            </span>

            <span className="mt-1 block bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] bg-clip-text text-[2.15rem] text-transparent sm:text-6xl md:text-8xl">
              CONSTRUA SEU
            </span>

            <span className="block bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] bg-clip-text text-[2.15rem] text-transparent sm:text-6xl md:text-8xl">
              SHAPE
            </span>

            <span className="mt-1 block text-[2rem] text-[#F5F5F5] sm:text-6xl md:text-8xl">
              DE RESPEITO.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-relaxed text-[#A0A7B4] md:mt-7 md:text-lg">
            Treinos, dietas e protocolos prontos para você parar de perder tempo
            e finalmente evoluir de verdade.
          </p>

          <button
            onClick={() => (window.location.href = "/cadastro-metodo")}
            className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-[#D4AF37] px-5 py-4 text-[11px] font-black uppercase tracking-[0.12em] text-black shadow-[0_0_45px_rgba(212,175,55,0.28)] transition hover:scale-[1.03] hover:bg-[#F59E0B] md:w-auto md:px-10 md:py-5 md:text-sm"
          >
            COMEÇAR AGORA
            <ArrowRight size={20} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-10 max-w-[340px] md:mt-16"
        >
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#090B0F] shadow-[0_0_70px_rgba(0,0,0,0.55)]">
            <div className="relative aspect-[9/16] w-full bg-black">
              <video
                src={charlesVideo}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <p className="mt-4 text-center text-[10px] font-black uppercase tracking-[0.16em] text-[#D4AF37] md:text-xs">
            Entenda como funciona a estrutura completa do Shape Prime
          </p>
        </motion.div>

        <section className="mx-auto mt-14 max-w-5xl md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#0B0D11]/90 p-6 shadow-[0_0_80px_rgba(0,0,0,0.55)] backdrop-blur-xl md:rounded-[44px] md:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_45%)]" />

            <div className="relative z-10 grid gap-7 md:grid-cols-[1fr_0.9fr] md:items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#D4AF37] md:text-xs">
                  RESULTADOS REAIS
                </p>

                <h2 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">
                  Eu não nasci com shape.
                  <span className="block text-[#D4AF37]">
                    Eu construí isso.
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-[#A0A7B4] md:text-lg">
                  Depois de errar treino, alimentação e estratégia, eu organizei
                  tudo em um método que realmente funciona.
                </p>

                <div className="mt-6 rounded-3xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">
                  <p className="text-xl font-black uppercase leading-tight text-[#F5F5F5] md:text-3xl">
                    Se funcionou pra mim,
                    <span className="block text-[#D4AF37]">
                      pode funcionar pra você.
                    </span>
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(212,175,55,0.10),transparent_70%)] blur-3xl" />

                <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#0F1115] p-3 shadow-[0_0_80px_rgba(0,0,0,0.55)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.06),transparent_55%)]" />

                  <div className="absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-black/70 px-4 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#F5F5F5] backdrop-blur-xl">
                    Antes
                  </div>

                  <div className="absolute bottom-5 right-5 z-20 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#D4AF37] backdrop-blur-xl">
                    Depois
                  </div>

                  <img
                    src="/evolucao-charles.jpg"
                    alt="Evolução Charles"
                    className="relative z-10 w-full rounded-[2rem] object-cover brightness-[0.97] contrast-[1.04]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2">
          <CardMetodo
            icon={Flame}
            titulo="QUER SECAR?"
            descricao="Um protocolo completo para perder gordura sem ficar perdido no processo."
            itens={[
              "Dieta organizada",
              "Estratégia de definição",
              "Treinos estruturados",
              "Preservação de massa muscular",
              "Meu Protocolo Pessoal",
            ]}
          />

          <CardMetodo
            icon={Dumbbell}
            titulo="QUER GANHAR MASSA?"
            descricao="Um plano estruturado para ganhar volume com estratégia e sem virar falso grande."
            itens={[
              "Plano alimentar para crescer",
              "Treinos para hipertrofia",
              "Estratégia de progressão",
              "Organização por nível",
              "Meu Protocolo Pessoal",
            ]}
          />
        </div>

        <OfertaPrincipal />

        <section className="mt-16 md:mt-20">
          <Titulo
            tag="DENTRO DA PLATAFORMA"
            titulo="Você não precisa mais ficar perdido"
            texto="O Shape Prime organiza treino, dieta e estratégia em um único lugar para você simplesmente seguir e evoluir."
          />

          <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3">
            <Feature icon={Utensils} title="Dietas prontas para secar sem passar fome" />
            <Feature icon={Utensils} title="Plano alimentar para ganhar massa com estratégia" />
            <Feature icon={Dumbbell} title="Meu protocolo pessoal" />
            <Feature icon={ShieldCheck} title="Treinos adaptados ao seu nível" />
            <Feature icon={PlayCircle} title="Aprenda a executar os exercícios sem errar" />
            <Feature icon={Users} title="Grupo exclusivo de alunos" />
            <Feature icon={Zap} title="Estratégias para acelerar sua evolução" />
            <Feature icon={Crown} title="Área premium organizada" />
            <Feature icon={Gift} title="Acesso vitalício e atualizações futuras" />
          </div>
        </section>

        <section className="mt-16 grid gap-4 md:mt-20 md:grid-cols-3">
          <MiniCard
            numero="01"
            titulo="Pare de treinar no achismo"
            texto="Você vai seguir um plano estruturado, sem precisar ficar trocando treino ou copiando influencer."
          />

          <MiniCard
            numero="02"
            titulo="Tudo organizado pra você"
            texto="Dieta, treino, execução e estratégia em um só lugar."
          />

          <MiniCard
            numero="03"
            titulo="Evolua com consistência"
            texto="Quando você segue uma estrutura, o resultado deixa de ser sorte."
          />
        </section>

        <section className="mt-16 md:mt-20">
          <Titulo
            tag="DÚVIDAS FREQUENTES"
            titulo="Antes de começar"
            texto="As principais dúvidas de quem quer entrar no Shape Prime."
          />

          <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2">
            <Faq
              pergunta="E se eu nunca treinei?"
              resposta="O Shape Prime possui estrutura para iniciantes, intermediários e avançados."
            />

            <Faq
              pergunta="Tenho pouco tempo. Funciona?"
              resposta="Sim. O importante é consistência e estratégia, não passar horas na academia."
            />

            <Faq
              pergunta="Preciso seguir dieta 100%?"
              resposta="Não. O objetivo é te ensinar consistência, não perfeição impossível."
            />

            <Faq
              pergunta="Em quanto tempo vejo resultado?"
              resposta="Muitas pessoas já percebem mudança nas primeiras semanas, mas tudo depende da sua constância."
            />
          </div>
        </section>

        <section className="mt-16 text-center md:mt-20">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D4AF37] md:text-sm">
            COMEÇA AGORA
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black uppercase leading-[0.95] text-[#F5F5F5] md:text-6xl">
            Seu shape não vai mudar
            <span className="block text-[#D4AF37]">
              fazendo a mesma coisa.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#A0A7B4] md:text-lg">
            Pare de recomeçar toda segunda-feira e comece a seguir uma estrutura
            de verdade.
          </p>

          <button
            onClick={() => (window.location.href = "/cadastro-metodo")}
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-[#D4AF37] px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-black shadow-[0_0_45px_rgba(212,175,55,0.28)] transition hover:scale-[1.03] hover:bg-[#F59E0B] md:w-auto md:px-10 md:py-5 md:text-sm"
          >
            COMEÇAR AGORA
            <ArrowRight size={20} />
          </button>
        </section>

        <div className="mt-10 flex items-center justify-center gap-2 text-[#D4AF37]">
          <Lock size={18} />
          <p className="text-center text-xs font-bold uppercase tracking-[0.16em] md:text-sm">
            Plataforma premium Shape Prime
          </p>
        </div>
      </div>
    </section>
  );
}

function OfertaPrincipal() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[30px] border border-white/10 bg-[#0B0D11]/90 p-5 text-center shadow-[0_0_80px_rgba(0,0,0,0.55)] md:mt-20 md:rounded-[40px] md:p-10"
    >
      <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#D4AF37] md:text-xs">
        Método Premium
      </p>

      <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-black uppercase leading-[0.95] text-[#F5F5F5] md:text-5xl">
        Quanto vale ter um shape
        <span className="block text-[#D4AF37]">
          que você tenha orgulho?
        </span>
      </h2>

      <div className="mx-auto mt-5 max-w-xl rounded-[24px] border border-white/10 bg-[#0F1115] p-4 text-left">
        <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#A0A7B4]">
          Você poderia gastar facilmente:
        </p>

        <div className="mt-3 grid gap-2 text-xs font-bold text-[#A0A7B4] md:text-sm">
          <p>❌ R$200+ em consultoria</p>
          <p>❌ R$150 em treino</p>
          <p>❌ R$100+ em dieta</p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center">
  <div className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-red-400 md:text-xs">
    🔥 50% OFF HOJE
  </div>
</div>

<p className="mt-5 text-[9px] font-black uppercase tracking-[0.18em] text-[#A0A7B4] md:text-xs">
  De <span className="line-through opacity-70">R$ 159,90</span> por apenas:
</p>

<div className="mt-3 flex flex-col items-center">
  <div className="rounded-[30px] border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-6 py-5 shadow-[0_0_45px_rgba(212,175,55,0.12)] md:px-10">
    <h3 className="text-5xl font-black leading-none text-[#D4AF37] md:text-7xl">
      R$ 79,90
    </h3>

    <p className="mt-3 text-[11px] font-black uppercase tracking-[0.18em] text-[#F5F5F5] md:text-sm">
      PAGAMENTO ÚNICO • ACESSO VITALÍCIO
    </p>
  </div>
</div>
      <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#F5F5F5] md:text-lg">
        pagamento único • acesso vitalício
      </p>

      <div className="mx-auto mt-5 grid max-w-2xl gap-2 text-left md:grid-cols-2">
        <OfertaItem texto="Acesso vitalício" />
        <OfertaItem texto="Atualizações futuras" />
        <OfertaItem texto="Treinos completos" />
        <OfertaItem texto="Dietas organizadas" />
        <OfertaItem texto="Protocolos premium" />
        <OfertaItem texto="Grupo exclusivo" />
      </div>

      <button
        onClick={() => (window.location.href = "/cadastro-metodo")}
        className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-[#D4AF37] px-5 py-4 text-[11px] font-black uppercase tracking-[0.12em] text-black shadow-[0_0_45px_rgba(212,175,55,0.28)] transition hover:scale-[1.03] hover:bg-[#F59E0B] md:w-auto md:px-10 md:py-5 md:text-base"
      >
        <Target size={19} />
        QUERO COMEÇAR MINHA EVOLUÇÃO
        <ArrowRight size={19} />
      </button>

      <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#A0A7B4] md:text-sm">
        <ShieldCheck size={14} />
        Pagamento único • acesso imediato • acesso vitalício
      </div>
    </motion.div>
  );
}

function Titulo({ tag, titulo, texto }) {
  return (
    <div className="text-center">
      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#D4AF37] md:text-xs">
        {tag}
      </p>

      <h3 className="mt-3 text-3xl font-black uppercase leading-[0.95] text-[#F5F5F5] md:text-5xl">
        {titulo}
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#A0A7B4]">
        {texto}
      </p>
    </div>
  );
}

function CardMetodo({ icon: Icon, titulo, descricao, itens }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      className="rounded-[30px] border border-white/10 bg-[#0B0D11]/90 p-6 shadow-[0_0_70px_rgba(0,0,0,0.35)] transition hover:border-[#D4AF37]/30 md:rounded-[34px] md:p-8"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37] text-black md:h-16 md:w-16 md:rounded-3xl">
        <Icon size={28} />
      </div>

      <h3 className="mt-6 text-3xl font-black uppercase text-[#F5F5F5] md:text-4xl">
        {titulo}
      </h3>

      <p className="mt-4 text-base leading-relaxed text-[#A0A7B4] md:text-lg">
        {descricao}
      </p>

      <div className="mt-6 space-y-3">
        {itens.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm text-[#A0A7B4] md:text-base">
            <CheckCircle2 size={18} className="min-w-[18px] text-[#D4AF37]" />
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Feature({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0B0D11]/90 p-4 transition hover:border-[#D4AF37]/30 hover:bg-[#11141A] md:p-5">
      <div className="flex h-11 w-11 min-w-11 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] md:h-12 md:w-12">
        <Icon size={21} />
      </div>

      <p className="text-sm font-bold uppercase tracking-[0.06em] text-[#F5F5F5] md:text-base md:tracking-[0.08em]">
        {title}
      </p>
    </div>
  );
}

function MiniCard({ numero, titulo, texto }) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-[#0B0D11]/90 p-5 md:rounded-[30px] md:p-6">
      <p className="text-3xl font-black text-[#D4AF37] md:text-4xl">
        {numero}
      </p>

      <h4 className="mt-4 text-lg font-black uppercase text-[#F5F5F5] md:text-xl">
        {titulo}
      </h4>

      <p className="mt-3 text-sm leading-relaxed text-[#A0A7B4]">
        {texto}
      </p>
    </div>
  );
}

function Faq({ pergunta, resposta }) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-[#0B0D11]/90 p-5 md:rounded-[30px] md:p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 min-w-11 items-center justify-center rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] md:h-12 md:w-12">
          <HelpCircle size={21} />
        </div>

        <div>
          <h4 className="text-base font-black uppercase text-[#F5F5F5] md:text-lg">
            {pergunta}
          </h4>

          <p className="mt-3 text-sm leading-relaxed text-[#A0A7B4]">
            {resposta}
          </p>
        </div>
      </div>
    </div>
  );
}

function OfertaItem({ texto }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0F1115] p-3 text-xs font-bold text-[#A0A7B4] md:p-4 md:text-sm">
      <CheckCircle2 size={16} className="min-w-[16px] text-[#D4AF37]" />
      {texto}
    </div>
  );
}