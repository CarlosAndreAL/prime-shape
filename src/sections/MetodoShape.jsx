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
  BadgeCheck,
} from "lucide-react";

export default function MetodoShape() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.28),transparent_28%),radial-gradient(circle_at_20%_70%,rgba(212,175,55,0.12),transparent_35%),linear-gradient(180deg,#050403_0%,#000_55%,#050403_100%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37]">
            <Sparkles size={13} />
            Método Oficial Prime Shape
          </div>

          <h1 className="mx-auto max-w-5xl text-[2.7rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl md:text-8xl">
            O físico que você quer
            <span className="block text-[#d4af37]">não vem da sorte.</span>
          </h1>

          <h2 className="mt-5 text-xl font-black uppercase text-white/90 sm:text-3xl md:text-4xl">
            Vem do método certo.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-white/65 md:text-lg">
            Treinos, dietas, protocolos e estratégias organizadas para acelerar
            sua evolução física com uma estrutura criada por quem vive isso na
            prática.
          </p>

          <button
            onClick={() => (window.location.href = "/cadastro-metodo")}
            className="mt-8 inline-flex w-full max-w-[340px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#fff0a6] via-[#d4af37] to-[#8f6d12] px-6 py-4 text-sm font-black uppercase text-black shadow-[0_0_55px_rgba(212,175,55,0.35)] transition hover:scale-[1.03] sm:w-auto sm:px-10"
          >
            Quero ter acesso
            <ArrowRight size={20} />
          </button>

          <p className="mt-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/45">
            <ShieldCheck size={15} />
            Acesso vitalício • pagamento único
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-[#d4af37]/25 bg-black shadow-[0_0_130px_rgba(212,175,55,0.22)] md:rounded-[38px]">
            <div className="relative aspect-video w-full bg-black">
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

          <p className="mt-4 text-center text-[10px] font-black uppercase tracking-[0.2em] text-[#d4af37] md:text-xs">
            Entenda como funciona a estrutura completa do Prime Shape
          </p>
        </motion.div>

        <section className="mx-auto mt-14 max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#d4af37]">
            O que você vai receber
          </p>

          <h3 className="mt-4 text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] md:text-6xl">
            Seu objetivo define o protocolo.
            <span className="block text-[#d4af37]">
              O método mostra o caminho.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-white/65 md:text-lg">
            Tudo organizado dentro de uma plataforma premium: dietas, treinos,
            protocolos, execuções, estratégias e acesso exclusivo para acelerar
            sua evolução física.
          </p>
        </section>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <CardMetodo
            icon={Flame}
            titulo="On Season"
            subtitulo="Protocolo de definição"
            descricao="Para quem quer secar, trincar e atingir um físico definido que chama atenção."
            itens={[
              "Foco em queima de gordura",
              "Planilhas de treino otimizadas",
              "Fichas de nutrição práticas",
              "Estratégia para preservar massa magra",
            ]}
          />

          <CardMetodo
            icon={Dumbbell}
            titulo="Freaky Season"
            subtitulo="Protocolo de volume"
            descricao="Para quem quer ficar denso, forte e construir um físico de respeito."
            itens={[
              "Estratégia de ganho de massa muscular",
              "Treinos de força e progressão de carga",
              "Planilhas voltadas para bulking limpo",
              "Método para crescer com controle",
            ]}
          />
        </div>

        <section className="mt-16">
          <Titulo
            tag="O que vai ter dentro"
            titulo="Tudo organizado em um único lugar"
            texto="Da alimentação ao treino. Da execução ao protocolo. Tudo separado de forma simples, premium e fácil de acessar."
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
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

        <section className="mt-16 grid gap-4 md:grid-cols-3">
          <MiniCard
            numero="01"
            titulo="Treine com direção"
            texto="Pare de montar treino aleatório e siga uma estrutura organizada."
          />
          <MiniCard
            numero="02"
            titulo="Tudo em um lugar"
            texto="Treinos, dietas e protocolos separados de forma simples e premium."
          />
          <MiniCard
            numero="03"
            titulo="Evolução constante"
            texto="Mais estratégia, mais constância e uma evolução física organizada."
          />
        </section>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-[30px] border border-[#d4af37]/20 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.20),transparent_45%),rgba(255,255,255,0.03)] p-6 text-center shadow-[0_0_150px_rgba(212,175,55,0.22)] md:rounded-[40px] md:p-10"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#d4af37] text-black shadow-[0_0_60px_rgba(212,175,55,0.5)] md:h-24 md:w-24">
            <Crown size={38} />
          </div>

          <p className="mt-7 text-xs font-black uppercase tracking-[0.24em] text-[#d4af37]">
            Acesso completo Prime Shape
          </p>

          <h3 className="mt-4 text-5xl font-black leading-none">R$ 99,90</h3>

          <p className="mt-3 text-base font-bold uppercase tracking-[0.18em] text-[#d4af37] md:text-xl">
            Acesso vitalício
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60 md:text-lg">
            Pagamento único com acesso vitalício à plataforma, protocolos,
            treinos, dietas e futuras atualizações do Prime Shape.
          </p>

          <button
            onClick={() => (window.location.href = "/cadastro-metodo")}
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#fff0a6] via-[#d4af37] to-[#8f6d12] px-6 py-4 text-sm font-black uppercase text-black shadow-[0_0_60px_rgba(212,175,55,0.35)] transition hover:scale-[1.03] md:w-auto md:px-10 md:py-5 md:text-lg"
          >
            <Target size={21} />
            Quero ter acesso
            <ArrowRight size={21} />
          </button>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/45 md:text-sm">
            <ShieldCheck size={16} />
            Pagamento único • acesso imediato • acesso vitalício
          </div>
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-2 text-[#d4af37]">
          <Lock size={18} />
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] md:text-sm">
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

      <h3 className="mt-3 text-3xl font-black uppercase leading-none md:text-5xl">
        {titulo}
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/55">
        {texto}
      </p>
    </div>
  );
}

function CardMetodo({ icon: Icon, titulo, subtitulo, descricao, itens }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      className="rounded-[26px] border border-[#d4af37]/18 bg-black/55 p-5 shadow-[0_0_60px_rgba(212,175,55,0.07)] backdrop-blur md:p-7"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d4af37] text-black">
        <Icon size={27} />
      </div>

      <h3 className="mt-5 text-3xl font-black uppercase leading-none tracking-[-0.04em] text-[#d4af37] md:text-5xl">
        {titulo}
      </h3>

      <h4 className="mt-3 text-xl font-black uppercase text-white md:text-2xl">
        {subtitulo}
      </h4>

      <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
        {descricao}
      </p>

      <div className="my-5 h-px w-full bg-white/10" />

      <div className="space-y-3">
        {itens.map((item) => (
          <div key={item} className="flex items-start gap-3 text-sm text-white/75">
            <CheckCircle2
              size={17}
              className="mt-0.5 min-w-[17px] text-[#d4af37]"
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Feature({ icon: Icon, title }) {
  return (
    <div className="flex min-h-[84px] items-center gap-4 rounded-[22px] border border-white/10 bg-white/[0.035] p-4 transition hover:border-[#d4af37]/30 hover:bg-[#d4af37]/5">
      <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-2xl bg-[#d4af37]/12 text-[#d4af37]">
        <Icon size={21} />
      </div>

      <p className="text-sm font-black uppercase tracking-[0.1em] text-white">
        {title}
      </p>
    </div>
  );
}

function MiniCard({ numero, titulo, texto }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5">
      <p className="text-3xl font-black text-[#d4af37]">{numero}</p>
      <h4 className="mt-3 text-lg font-black uppercase">{titulo}</h4>
      <p className="mt-2 text-sm leading-relaxed text-white/55">{texto}</p>
    </div>
  );
}