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
} from "lucide-react";

export default function MetodoShape() {
  const whatsapp =
    "https://wa.me/5521985871262?text=Ol%C3%A1%2C%20quero%20entrar%20no%20M%C3%A9todo%20do%20Shape%20por%20R%2499%2C90.";

  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.24),transparent_35%),radial-gradient(circle_at_15%_70%,rgba(212,175,55,0.10),transparent_32%),linear-gradient(180deg,#050403_0%,#000_55%,#050403_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#d4af37]">
            <Sparkles size={14} />
            Método Oficial Prime Shape
          </div>

          <h2 className="text-5xl font-black uppercase leading-none md:text-7xl">
            MÉTODO DO
            <span className="block text-[#d4af37]">SHAPE</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/60">
            O protocolo completo criado pelo Charles para quem quer definir,
            ganhar massa e evoluir com treino, dieta, execução correta e painel
            exclusivo online.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[38px] border border-[#d4af37]/25 bg-black shadow-[0_0_120px_rgba(212,175,55,0.18)]">
  <div className="relative aspect-video w-full bg-black">
    <video
      src={charlesVideo}
      controls
      autoPlay
      muted
      loop
      playsInline
      className="h-full w-full object-contain"
    />
  </div>
</div>

          <p className="mt-4 text-center text-xs font-black uppercase tracking-[0.24em] text-[#d4af37]">
            Assista ao Charles explicando como funciona o método
          </p>
        </motion.div>

        <section className="mx-auto mt-14 max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#d4af37]">
            ACESSO VITALÍCIO
          </p>

          <h3 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] md:text-6xl">
            Definição ou ganho de massa:
            <span className="block text-[#d4af37]">
              você escolhe o caminho.
            </span>
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/65">
            Dentro da plataforma você vai ter dois protocolos principais:
            Protocolo Definição e Protocolo Ganho de Massa. Além disso, recebe
            dietas, treinos por nível, vídeos de execução, grupo exclusivo,
            sugestões de suplementos e painel do aluno.
          </p>
        </section>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <CardMetodo
            icon={Flame}
            titulo="PROTOCOLO DEFINIÇÃO"
            descricao="Cutting completo para secar, definir e melhorar o visual do shape com estratégia."
            itens={[
              "Dietas de cutting",
              "Treinos para definição",
              "Execução correta dos exercícios",
              "Estratégia para perder gordura",
            ]}
          />

          <CardMetodo
            icon={Dumbbell}
            titulo="PROTOCOLO GANHO DE MASSA"
            descricao="Bulking estruturado para crescer com qualidade, ganhar volume e construir força."
            itens={[
              "Dietas de bulking",
              "Treinos para hipertrofia",
              "Divisão por nível",
              "Sugestão de suplementos",
            ]}
          />
        </div>

        <section className="mt-20">
          <Titulo
            tag="O QUE VAI TER DENTRO"
            titulo="Uma plataforma completa"
            texto="Não é só uma dieta ou um treino jogado. É um painel online com tudo organizado para o aluno seguir."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Feature icon={Utensils} title="Dietas Cutting" />
            <Feature icon={Utensils} title="Dietas Bulking" />
            <Feature icon={Dumbbell} title="Treino do Charles" />
            <Feature icon={ShieldCheck} title="Iniciante, intermediário e avançado" />
            <Feature icon={PlayCircle} title="Vídeos de execução correta" />
            <Feature icon={Users} title="Grupo exclusivo" />
            <Feature icon={Zap} title="Sugestão de suplementos" />
            <Feature icon={Crown} title="Painel exclusivo do aluno" />
            <Feature icon={Gift} title="Acesso vitalício" />
          </div>
        </section>

        <section className="mt-20 grid gap-5 md:grid-cols-3">
          <MiniCard
            numero="01"
            titulo="Escolha seu objetivo"
            texto="Definição ou ganho de massa. O método te mostra o caminho certo."
          />
          <MiniCard
            numero="02"
            titulo="Siga o protocolo"
            texto="Treino, dieta, execução e rotina organizados dentro da plataforma."
          />
          <MiniCard
            numero="03"
            titulo="Evolua com direção"
            texto="Você para de treinar no escuro e começa a seguir uma estratégia."
          />
        </section>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[40px] border border-[#d4af37]/20 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.20),transparent_45%),rgba(255,255,255,0.03)] p-8 text-center shadow-[0_0_110px_rgba(212,175,55,0.16)] md:p-10"
        >
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#d4af37] text-black shadow-[0_0_60px_rgba(212,175,55,0.5)]">
            <Crown size={42} />
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.3em] text-[#d4af37]">
            Oferta de lançamento
          </p>

          <h3 className="mt-4 text-5xl font-black leading-none">R$ 99,90</h3>

          <p className="mt-3 text-xl font-bold uppercase tracking-[0.18em] text-[#d4af37]">
            ACESSO VITALÍCIO
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
            Pagamento único. Acesso ao Método do Shape, protocolos completos,
            painel exclusivo e futuras atualizações.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-3xl bg-gradient-to-r from-[#fff0a6] via-[#d4af37] to-[#8f6d12] px-10 py-5 text-lg font-black uppercase text-black shadow-[0_0_60px_rgba(212,175,55,0.35)] transition hover:scale-105"
          >
            <Target size={22} />
            QUERO ENTRAR AGORA
            <ArrowRight size={22} />
          </a>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/40">
            <ShieldCheck size={16} />
            Pagamento único • acesso imediato • acesso vitalício
          </div>
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-2 text-[#d4af37]">
          <Lock size={18} />
          <p className="text-center text-sm font-bold uppercase tracking-[0.18em]">
            Plataforma premium Prime Shape
          </p>
        </div>
      </div>
    </section>
  );
}

function Titulo({ tag, titulo, texto }) {
  return (
    <div className="text-center">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d4af37]">
        {tag}
      </p>

      <h3 className="mt-3 text-4xl font-black uppercase leading-none md:text-5xl">
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
      whileHover={{ y: -6 }}
      className="rounded-[34px] border border-[#d4af37]/15 bg-white/[0.03] p-8 shadow-[0_0_70px_rgba(212,175,55,0.06)]"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#d4af37] text-black">
        <Icon size={30} />
      </div>

      <h3 className="mt-6 text-3xl font-black uppercase">{titulo}</h3>

      <p className="mt-4 text-lg leading-relaxed text-white/60">
        {descricao}
      </p>

      <div className="mt-6 space-y-3">
        {itens.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm text-white/70">
            <CheckCircle2 size={18} className="text-[#d4af37]" />
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Feature({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37]">
        <Icon size={22} />
      </div>

      <p className="font-bold uppercase tracking-[0.08em]">{title}</p>
    </div>
  );
}

function MiniCard({ numero, titulo, texto }) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
      <p className="text-4xl font-black text-[#d4af37]">{numero}</p>
      <h4 className="mt-4 text-xl font-black uppercase">{titulo}</h4>
      <p className="mt-3 text-sm leading-relaxed text-white/55">{texto}</p>
    </div>
  );
}