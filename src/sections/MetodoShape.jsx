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

export default function MetodoShape() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 text-white md:px-6 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.24),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(212,175,55,0.08),transparent_35%),linear-gradient(180deg,#050403_0%,#000_55%,#050403_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-[#d4af37] md:text-[11px]">
            <Sparkles size={13} />
            Método Oficial Shape Prime
          </div>

          <h1 className="mx-auto max-w-6xl text-[38px] font-black uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-8xl">
            Saia do físico comum
            <span className="block text-[#d4af37]">
              e construa um shape que chama atenção.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/60 md:mt-8 md:text-lg">
            Treinos, dietas e protocolos prontos para você parar de perder tempo
            e finalmente evoluir de verdade.
          </p>

          <button
            onClick={() => (window.location.href = "/cadastro-metodo")}
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-[#fff0a6] via-[#d4af37] to-[#8f6d12] px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-black shadow-[0_0_45px_rgba(212,175,55,0.35)] transition hover:scale-[1.03] md:w-auto md:px-10 md:py-5 md:text-sm"
          >
            QUERO COMEÇAR MEU SHAPE
            <ArrowRight size={20} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-sm md:mt-16"
        >
          <div className="overflow-hidden rounded-[34px] border border-[#d4af37]/25 bg-black shadow-[0_0_120px_rgba(212,175,55,0.18)]">
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

          <p className="mt-4 text-center text-[10px] font-black uppercase tracking-[0.18em] text-[#d4af37] md:text-xs">
            Entenda como funciona a estrutura completa do Shape Prime
          </p>
        </motion.div>

        <section className="mx-auto mt-16 max-w-4xl text-center md:mt-20">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d4af37] md:text-sm">
            EVOLUÇÃO CHARLES
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
            Eu não nasci com shape.
            <span className="block text-[#d4af37]">Eu construí isso.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-white/65 md:text-lg">
            Depois de errar treino, alimentação e estratégia, eu organizei tudo
            em um método direto, simples de seguir e pensado para quem quer
            evoluir de verdade.
          </p>
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
            <Feature icon={Dumbbell} title="Meu protocolo pessoal de treino" />
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
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d4af37] md:text-sm">
            COMEÇA AGORA
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black uppercase leading-[0.95] md:text-6xl">
            Seu shape não vai mudar
            <span className="block text-[#d4af37]">
              fazendo a mesma coisa.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60 md:text-lg">
            Pare de recomeçar toda segunda-feira e comece a seguir uma estrutura
            de verdade.
          </p>

          <button
            onClick={() => (window.location.href = "/cadastro-metodo")}
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-[#fff0a6] via-[#d4af37] to-[#8f6d12] px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-black shadow-[0_0_45px_rgba(212,175,55,0.35)] transition hover:scale-[1.03] md:w-auto md:px-10 md:py-5 md:text-sm"
          >
            QUERO ACESSAR O SHAPE PRIME
            <ArrowRight size={20} />
          </button>
        </section>

        <div className="mt-10 flex items-center justify-center gap-2 text-[#d4af37]">
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
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mt-14 overflow-hidden rounded-[34px] border border-[#d4af37]/20 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.20),transparent_45%),rgba(255,255,255,0.03)] p-5 text-center shadow-[0_0_130px_rgba(212,175,55,0.18)] md:mt-20 md:rounded-[40px] md:p-12"
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-[#d4af37] text-black shadow-[0_0_50px_rgba(212,175,55,0.45)] md:h-24 md:w-24 md:rounded-full">
        <Crown size={32} />
      </div>

      <p className="mt-6 text-[10px] font-black uppercase tracking-[0.24em] text-[#d4af37] md:mt-8 md:text-sm">
        Oferta especial
      </p>

      <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
        Quanto vale ter um shape
        <span className="block text-[#d4af37]">
          que você tenha orgulho?
        </span>
      </h2>

      <div className="mx-auto mt-6 max-w-2xl rounded-[26px] border border-white/10 bg-black/35 p-5 text-left md:mt-8 md:p-6">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45 md:text-sm">
          Você poderia gastar facilmente:
        </p>

        <div className="mt-4 grid gap-2 text-sm font-bold text-white/70 md:mt-5">
          <p>❌ R$200+ em consultoria</p>
          <p>❌ R$150 em treino</p>
          <p>❌ R$100+ em dieta</p>
        </div>
      </div>

      <p className="mt-6 text-[10px] font-black uppercase tracking-[0.22em] text-white/45 md:mt-8 md:text-sm">
        Mas hoje você entra no Shape Prime por apenas:
      </p>

      <h3 className="mt-3 text-5xl font-black leading-none text-[#d4af37] md:mt-4 md:text-7xl">
        R$ 79,90
      </h3>

      <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-white md:text-xl">
        pagamento único • acesso vitalício
      </p>

      <div className="mx-auto mt-6 grid max-w-3xl gap-3 text-left md:mt-8 md:grid-cols-2">
        <OfertaItem texto="Acesso vitalício" />
        <OfertaItem texto="Atualizações futuras" />
        <OfertaItem texto="Treinos completos" />
        <OfertaItem texto="Dietas organizadas" />
        <OfertaItem texto="Protocolos premium" />
        <OfertaItem texto="Grupo exclusivo" />
      </div>

      <button
        onClick={() => (window.location.href = "/cadastro-metodo")}
        className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-[#fff0a6] via-[#d4af37] to-[#8f6d12] px-6 py-4 text-xs font-black uppercase tracking-[0.13em] text-black shadow-[0_0_45px_rgba(212,175,55,0.35)] transition hover:scale-[1.03] md:mt-10 md:w-auto md:px-10 md:py-5 md:text-lg"
      >
        <Target size={20} />
        QUERO COMEÇAR MINHA EVOLUÇÃO
        <ArrowRight size={20} />
      </button>

      <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/40 md:text-sm">
        <ShieldCheck size={16} />
        Pagamento único • acesso imediato • acesso vitalício
      </div>
    </motion.div>
  );
}

function Titulo({ tag, titulo, texto }) {
  return (
    <div className="text-center">
      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#d4af37] md:text-xs">
        {tag}
      </p>

      <h3 className="mt-3 text-3xl font-black uppercase leading-[0.95] md:text-5xl">
        {titulo}
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/55">
        {texto}
      </p>
    </div>
  );
}

function CardMetodo({ icon: Icon, titulo, descricao, itens }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      className="rounded-[30px] border border-[#d4af37]/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 shadow-[0_0_60px_rgba(212,175,55,0.06)] md:rounded-[34px] md:p-8"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37] text-black md:h-16 md:w-16 md:rounded-3xl">
        <Icon size={28} />
      </div>

      <h3 className="mt-6 text-3xl font-black uppercase md:text-4xl">
        {titulo}
      </h3>

      <p className="mt-4 text-base leading-relaxed text-white/60 md:text-lg">
        {descricao}
      </p>

      <div className="mt-6 space-y-3">
        {itens.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 text-sm text-white/70 md:text-base"
          >
            <CheckCircle2 size={18} className="min-w-[18px] text-[#d4af37]" />
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Feature({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#d4af37]/30 hover:bg-[#d4af37]/10 md:p-5">
      <div className="flex h-11 w-11 min-w-11 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37] md:h-12 md:w-12">
        <Icon size={21} />
      </div>

      <p className="text-sm font-bold uppercase tracking-[0.06em] md:text-base md:tracking-[0.08em]">
        {title}
      </p>
    </div>
  );
}

function MiniCard({ numero, titulo, texto }) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 md:rounded-[30px] md:p-6">
      <p className="text-3xl font-black text-[#d4af37] md:text-4xl">
        {numero}
      </p>

      <h4 className="mt-4 text-lg font-black uppercase md:text-xl">
        {titulo}
      </h4>

      <p className="mt-3 text-sm leading-relaxed text-white/55">
        {texto}
      </p>
    </div>
  );
}

function Faq({ pergunta, resposta }) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 md:rounded-[30px] md:p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 min-w-11 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37] md:h-12 md:w-12">
          <HelpCircle size={21} />
        </div>

        <div>
          <h4 className="text-base font-black uppercase md:text-lg">
            {pergunta}
          </h4>

          <p className="mt-3 text-sm leading-relaxed text-white/60">
            {resposta}
          </p>
        </div>
      </div>
    </div>
  );
}

function OfertaItem({ texto }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm font-bold text-white/75">
      <CheckCircle2 size={18} className="min-w-[18px] text-[#d4af37]" />
      {texto}
    </div>
  );
}