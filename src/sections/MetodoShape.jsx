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
    <section className="relative overflow-hidden bg-black px-4 py-14 text-white md:px-6 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.20),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(212,175,55,0.08),transparent_35%),linear-gradient(180deg,#050403_0%,#000_55%,#050403_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl rounded-[34px] border border-[#d4af37]/20 bg-black/35 px-5 py-8 text-center shadow-[0_0_90px_rgba(212,175,55,0.12)] backdrop-blur-xl md:px-10 md:py-12"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-[8px] font-black uppercase tracking-[0.16em] text-[#d4af37] md:text-[11px]">
            <Sparkles size={13} />
            Método Oficial Shape Prime
          </div>

          <h1 className="mx-auto max-w-4xl text-[34px] font-black uppercase leading-[0.93] tracking-[-0.045em] text-white sm:text-5xl md:text-8xl">
            Saia do físico comum
            <span className="block text-[#d4af37]">
              construa um shape
            </span>
            <span className="block text-white">
              que chama atenção.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-relaxed text-white/65 md:mt-7 md:text-lg">
            Treinos, dietas e protocolos prontos para você parar de perder tempo
            e finalmente evoluir de verdade.
          </p>

          <button
            onClick={() => (window.location.href = "/cadastro-metodo")}
            className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-[#fff0a6] via-[#d4af37] to-[#8f6d12] px-5 py-4 text-[11px] font-black uppercase tracking-[0.12em] text-black shadow-[0_0_45px_rgba(212,175,55,0.35)] transition hover:scale-[1.03] md:w-auto md:px-10 md:py-5 md:text-sm"
          >
            QUERO BOTAR O SHAPE
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
          <div className="overflow-hidden rounded-[32px] border border-[#d4af37]/25 bg-black shadow-[0_0_120px_rgba(212,175,55,0.18)]">
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

          <p className="mt-4 text-center text-[10px] font-black uppercase tracking-[0.16em] text-[#d4af37] md:text-xs">
            Entenda como funciona a estrutura completa do Shape Prime
          </p>
        </motion.div>

        <section className="mx-auto mt-14 max-w-5xl md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[34px] border border-[#d4af37]/20 bg-black/70 p-6 shadow-[0_0_120px_rgba(212,175,55,0.10)] backdrop-blur-xl md:rounded-[44px] md:p-10"          >
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_45%)]" />           

            <div className="relative z-10 grid gap-7 md:grid-cols-[1fr_0.9fr] md:items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#d4af37] md:text-xs">
                  EVOLUÇÃO CHARLES
                </p>

                <h2 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-6xl">
                  Eu não nasci com shape.
                  <span className="block text-[#d4af37]">
                    Eu construí isso.
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-white/65 md:text-lg">
                  Depois de errar treino, alimentação e estratégia, eu organizei
                  tudo em um método que realmente funciona.
                </p>

                <div className="mt-6 rounded-3xl border border-[#d4af37]/20 bg-black/30 p-5">
                  <p className="text-xl font-black uppercase leading-tight text-white md:text-3xl">
                    Se funcionou pra mim,
                    <span className="block text-[#d4af37]">
                      pode funcionar pra você.
                    </span>
                  </p>
                </div>
              </div>

             <div className="relative flex items-center justify-center">
  <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(212,175,55,0.16),transparent_70%)] blur-3xl" />

  <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d4af37]/20 bg-black/70 p-4 shadow-[0_0_80px_rgba(212,175,55,0.12)]">
    
    <div className="absolute left-6 top-4 z-20 rounded-full border border-white/10 bg-black/70 px-4 py-1 text-xs font-black uppercase tracking-[0.22em] text-white backdrop-blur-xl">
      Antes
    </div>

    

    <img
      src="/evolucao-charles.jpg"
      alt="Evolução Charles"
      className="relative z-10 w-full rounded-[2rem] object-cover"
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
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[30px] border border-[#d4af37]/20 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_45%),rgba(255,255,255,0.03)] p-5 text-center shadow-[0_0_100px_rgba(212,175,55,0.16)] md:mt-20 md:rounded-[40px] md:p-10"
    >
      <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#d4af37] md:text-xs">
        Oferta especial
      </p>

      <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-black uppercase leading-[0.95] md:text-5xl">
        Quanto vale ter um shape
        <span className="block text-[#d4af37]">
          que você tenha orgulho?
        </span>
      </h2>

      <div className="mx-auto mt-5 max-w-xl rounded-[24px] border border-white/10 bg-black/35 p-4 text-left">
        <p className="text-[9px] font-black uppercase tracking-[0.16em] text-white/45">
          Você poderia gastar facilmente:
        </p>

        <div className="mt-3 grid gap-2 text-xs font-bold text-white/70 md:text-sm">
          <p>❌ R$200+ em consultoria</p>
          <p>❌ R$150 em treino</p>
          <p>❌ R$100+ em dieta</p>
        </div>
      </div>

      <p className="mt-5 text-[9px] font-black uppercase tracking-[0.18em] text-white/45 md:text-xs">
        Mas hoje você entra no Shape Prime por apenas:
      </p>

      <h3 className="mt-2 text-5xl font-black leading-none text-[#d4af37] md:text-7xl">
        R$ 79,90
      </h3>

      <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white md:text-lg">
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
        className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-[#fff0a6] via-[#d4af37] to-[#8f6d12] px-5 py-4 text-[11px] font-black uppercase tracking-[0.12em] text-black shadow-[0_0_45px_rgba(212,175,55,0.35)] transition hover:scale-[1.03] md:w-auto md:px-10 md:py-5 md:text-base"
      >
        <Target size={19} />
        QUERO COMEÇAR MINHA EVOLUÇÃO
        <ArrowRight size={19} />
      </button>

      <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-white/40 md:text-sm">
        <ShieldCheck size={14} />
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
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 p-3 text-xs font-bold text-white/75 md:p-4 md:text-sm">
      <CheckCircle2 size={16} className="min-w-[16px] text-[#d4af37]" />
      {texto}
    </div>
  );
}