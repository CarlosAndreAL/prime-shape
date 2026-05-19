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
  ArrowRight,
  Book,
} from "lucide-react";

export default function MetodoShape() {
  return (
    <section className="relative overflow-hidden bg-[#0F1115] px-4 py-16 text-[#F5F5F5] sm:px-6 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.22),transparent_28%),radial-gradient(circle_at_20%_70%,rgba(245,158,11,0.10),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.04),transparent_28%),linear-gradient(180deg,#0F1115_0%,#090A0D_55%,#0F1115_100%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.12)]">
            <Sparkles size={13} />
            Método Oficial Shape Prime
          </div>

          <h1 className="mx-auto max-w-5xl text-[2.7rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-[#F5F5F5] sm:text-6xl md:text-8xl">
            O físico que você quer
            <span className="block text-[#D4AF37]">não vem da sorte.</span>
          </h1>

          <h2 className="mt-5 text-xl font-black uppercase text-[#F5F5F5] sm:text-3xl md:text-4xl">
            Vem do método certo.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-[#A0A7B4] md:text-lg">
            Treinos, dietas, protocolos e estratégias organizadas para acelerar
            sua evolução física com uma estrutura criada por quem vive isso na
            prática.
          </p>

          <button
            onClick={() => (window.location.href = "/cadastro-metodo")}
            className="mt-8 inline-flex w-full max-w-[340px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-[#F59E0B] px-6 py-4 text-sm font-black uppercase text-black shadow-[0_0_55px_rgba(212,175,55,0.35)] transition hover:scale-[1.03] hover:shadow-[0_0_65px_rgba(245,158,11,0.42)] sm:w-auto sm:px-10"
          >
            Quero ter acesso
            <ArrowRight size={20} />
          </button>

          <p className="mt-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#A0A7B4]">
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
          <div className="mx-auto max-w-[390px] overflow-hidden rounded-[28px] border border-[#D4AF37]/25 bg-black shadow-[0_0_130px_rgba(212,175,55,0.20)] md:max-w-[430px] md:rounded-[38px]">
            <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
              <video
                src={charlesVideo}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <p className="mt-4 text-center text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37] md:text-xs">
            Entenda como funciona a estrutura completa do Shape Prime
          </p>
        </motion.div>

        <section className="mx-auto mt-14 max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D4AF37]">
            O que você vai receber
          </p>

          <h3 className="mt-4 text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] md:text-6xl">
            Seu objetivo define o protocolo.
            <span className="block text-[#D4AF37]">
              O método mostra o caminho.
            </span>
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-[#A0A7B4] md:text-lg">
            Tudo organizado dentro de uma plataforma premium: dietas, treinos,
            protocolos, execuções, estratégias e acesso exclusivo para acelerar
            sua evolução física.
          </p>
        </section>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <CardMetodo
            icon={Flame}
            titulo="Cutting"
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
            titulo="Bulking"
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

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => (window.location.href = "/cadastro-metodo")}
            className="inline-flex w-full max-w-[340px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-[#F59E0B] px-6 py-4 text-sm font-black uppercase text-black shadow-[0_0_55px_rgba(212,175,55,0.30)] transition hover:scale-[1.03] hover:shadow-[0_0_65px_rgba(245,158,11,0.38)]"
          >
            Quero ter acesso
            <ArrowRight size={20} />
          </button>
        </div>

        <section className="mt-16">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D4AF37]">
              RESULTADOS REAIS
            </p>

            <h3 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-7xl">
              Evolução
              <span className="block text-[#D4AF37]">Charles</span>
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#A0A7B4]">
              Resultado construído com estratégia, constância e o método certo.
            </p>
          </div>

          <div className="mx-auto mt-8 w-full max-w-[1050px] overflow-hidden rounded-[26px] border border-[#D4AF37]/20 bg-[#161A22]/80 p-2 shadow-[0_0_80px_rgba(212,175,55,0.10)] md:p-3">
            <img
              src="/evolucao-charles.jpg"
              alt="Evolução Charles"
              className="w-full rounded-[20px] object-contain"
            />
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => (window.location.href = "/cadastro-metodo")}
              className="inline-flex w-full max-w-[340px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-[#F59E0B] px-6 py-4 text-sm font-black uppercase text-black shadow-[0_0_55px_rgba(212,175,55,0.30)] transition hover:scale-[1.03] hover:shadow-[0_0_65px_rgba(245,158,11,0.38)]"
            >
              Quero ter acesso
              <ArrowRight size={20} />
            </button>
          </div>
        </section>

        <section className="mt-16">
          <Titulo
            tag="O que vai ter dentro"
            titulo="Tudo organizado em um único lugar"
            texto="Da alimentação ao treino. Da execução ao protocolo. Tudo separado de forma simples, premium e fácil de acessar."
          />

          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            <Feature icon={Crown} title="Painel exclusivo do aluno" />
            <Feature icon={Book} title="Protocolo do Charles" />
            <Feature icon={Utensils} title="Dietas Cutting" />
            <Feature icon={Utensils} title="Dietas Bulking" />
            <Feature icon={Dumbbell} title="Treino do Charles" />
            <Feature
              icon={ShieldCheck}
              title="Iniciante, intermediário e avançado"
            />
            <Feature icon={PlayCircle} title="Vídeos de execução correta" />
            <Feature icon={Users} title="Grupo exclusivo" />
            <Feature icon={Zap} title="Sugestão de suplementos" />
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

        <section className="mt-20">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D4AF37]">
              PERGUNTAS FREQUENTES
            </p>

            <h3 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-[#F5F5F5] md:text-7xl">
              Tire suas
              <span className="block text-[#D4AF37]">dúvidas</span>
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#A0A7B4]">
              Tudo o que você precisa saber antes de começar.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-4">
            <FaqItem
              pergunta="Preciso de academia para fazer o protocolo?"
              resposta="Não obrigatoriamente. Você pode adaptar os treinos conforme sua realidade e os equipamentos que possui."
            />

            <FaqItem
              pergunta="Funciona para quem nunca treinou?"
              resposta="Sim. O Shape Prime possui estratégias para iniciantes, intermediários e avançados."
            />

            <FaqItem
              pergunta="Vou receber dieta e treino juntos?"
              resposta="Sim. Você terá acesso aos protocolos completos de treino, alimentação e estratégias de evolução física."
            />

            <FaqItem
              pergunta="Em quanto tempo começo a ver resultados?"
              resposta="Os resultados dependem da sua constância, mas muitos alunos percebem evolução nas primeiras semanas."
            />

            <FaqItem
              pergunta="O acesso é vitalício mesmo?"
              resposta="Sim. Você paga apenas uma vez e recebe acesso vitalício ao conteúdo e futuras atualizações."
            />

            <FaqItem
              pergunta="O valor é mensal?"
              resposta="Não. O pagamento é único. Você paga uma vez e mantém o acesso ao conteúdo."
            />

            <FaqItem
              pergunta="E se eu não gostar do conteúdo?"
              resposta="Você terá suporte para entender a plataforma e aplicar corretamente o método."
            />
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => (window.location.href = "/cadastro-metodo")}
              className="inline-flex w-full max-w-[340px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-[#F59E0B] px-6 py-4 text-sm font-black uppercase text-black shadow-[0_0_60px_rgba(212,175,55,0.35)] transition hover:scale-[1.03] hover:shadow-[0_0_65px_rgba(245,158,11,0.40)]"
            >
              Quero ter acesso
              <ArrowRight size={20} />
            </button>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mx-auto mt-20 max-w-[430px] rounded-[34px] border border-[#D4AF37]/35 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 pb-8 pt-16 text-center shadow-[0_0_120px_rgba(212,175,55,0.22)]"
        >
          <div className="absolute left-1/2 top-0 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] via-[#D4AF37] to-[#F59E0B] text-black shadow-[0_0_60px_rgba(212,175,55,0.65)]">
            <Crown size={42} />
          </div>

          <div className="mx-auto inline-flex rounded-xl border border-[#D4AF37]/30 bg-black/40 px-6 py-2">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#D4AF37]">
              Método Premium
            </p>
          </div>

          <div className="mt-7 flex items-center justify-center gap-3 text-[#A0A7B4]">
            <span className="text-sm font-bold uppercase">De:</span>
            <span className="relative text-2xl font-black">
              R$ 159,90
              <span className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 rotate-[-6deg] bg-red-500" />
            </span>
          </div>

          <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-[#A0A7B4]">
            Por apenas:
          </p>

          <div className="mt-2 flex items-end justify-center gap-2">
            <span className="mb-3 text-3xl font-black text-[#D4AF37]">
              R$
            </span>
            <span className="text-7xl font-black leading-none tracking-[-0.08em] text-[#F5F5F5] md:text-8xl">
              79,90
            </span>
          </div>

          <div className="mx-auto mt-6 max-w-[260px] rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-[#F59E0B] px-5 py-3 text-xl font-black uppercase text-black shadow-[0_0_45px_rgba(212,175,55,0.35)]">
            50% OFF
          </div>

          <p className="mt-6 text-xl font-black uppercase tracking-[0.2em] text-[#D4AF37]">
            Acesso vitalício
          </p>

          <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-[#A0A7B4]">
            Pagamento único com acesso imediato à plataforma, protocolos,
            treinos, dietas e futuras atualizações do Shape Prime.
          </p>

          <button
            onClick={() => (window.location.href = "/cadastro-metodo")}
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#D4AF37] to-[#F59E0B] px-6 py-4 text-sm font-black uppercase text-black shadow-[0_0_60px_rgba(212,175,55,0.35)] transition hover:scale-[1.03] hover:shadow-[0_0_65px_rgba(245,158,11,0.40)]"
          >
            <Target size={21} />
            Quero ter acesso
            <ArrowRight size={21} />
          </button>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-[#A0A7B4]">
            <ShieldCheck size={16} />
            Pagamento único • acesso imediato • acesso vitalício
          </div>
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-2 text-[#D4AF37]">
          <Lock size={18} />
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] md:text-sm">
            Plataforma premium Shape Prime
          </p>
        </div>
      </div>
    </section>
  );
}

function Titulo({ tag, titulo, texto }) {
  return (
    <div className="text-center">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D4AF37]">
        {tag}
      </p>

      <h3 className="mt-3 text-3xl font-black uppercase leading-none text-[#F5F5F5] md:text-5xl">
        {titulo}
      </h3>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#A0A7B4]">
        {texto}
      </p>
    </div>
  );
}

function CardMetodo({ icon: Icon, titulo, subtitulo, descricao, itens }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      className="rounded-[26px] border border-[#D4AF37]/18 bg-[#161A22]/90 p-5 shadow-[0_0_60px_rgba(212,175,55,0.07)] backdrop-blur md:p-7"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37] text-black">
        <Icon size={27} />
      </div>

      <h3 className="mt-5 text-3xl font-black uppercase leading-none tracking-[-0.04em] text-[#D4AF37] md:text-5xl">
        {titulo}
      </h3>

      <h4 className="mt-3 text-xl font-black uppercase text-[#F5F5F5] md:text-2xl">
        {subtitulo}
      </h4>

      <p className="mt-4 text-sm leading-relaxed text-[#A0A7B4] md:text-base">
        {descricao}
      </p>

      <div className="my-5 h-px w-full bg-white/10" />

      <div className="space-y-3">
        {itens.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 text-sm text-[#F5F5F5]/80"
          >
            <CheckCircle2
              size={17}
              className="mt-0.5 min-w-[17px] text-[#D4AF37]"
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
    <div className="flex min-h-[84px] items-center gap-4 rounded-[22px] border border-white/10 bg-[#161A22] p-4 transition hover:border-[#D4AF37]/30 hover:bg-[#1B2029]">
      <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/12 text-[#D4AF37]">
        <Icon size={21} />
      </div>

      <p className="text-sm font-black uppercase tracking-[0.1em] text-[#F5F5F5]">
        {title}
      </p>
    </div>
  );
}

function MiniCard({ numero, titulo, texto }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[#161A22] p-5">
      <p className="text-3xl font-black text-[#D4AF37]">{numero}</p>
      <h4 className="mt-3 text-lg font-black uppercase text-[#F5F5F5]">
        {titulo}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-[#A0A7B4]">{texto}</p>
    </div>
  );
}

function FaqItem({ pergunta, resposta }) {
  return (
    <details className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#161A22]/90 transition hover:border-[#D4AF37]/30">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left text-base font-black text-[#F5F5F5] marker:hidden md:px-6 md:text-lg">
        {pergunta}

        <div className="flex h-9 w-9 min-w-9 items-center justify-center rounded-full bg-[#D4AF37]/10 text-xl font-black text-[#D4AF37] transition group-open:rotate-45">
          +
        </div>
      </summary>

      <div className="border-t border-white/10 px-5 py-5 md:px-6">
        <p className="text-sm leading-relaxed text-[#A0A7B4] md:text-base">
          {resposta}
        </p>
      </div>
    </details>
  );
}