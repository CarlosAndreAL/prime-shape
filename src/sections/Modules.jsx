import { motion } from "framer-motion";

const modules = [
  {
    title: "TREINOS PARA SECAR",
    subtitle: "Queime gordura com método",
  },
  {
    title: "HIPERTROFIA",
    subtitle: "Ganhe volume e força",
  },
  {
    title: "SUPLEMENTAÇÃO PARA SECAR",
    subtitle: "Potencialize seus resultados",
  },
  {
    title: "SUPLEMENTAÇÃO PARA CRESCER",
    subtitle: "Estratégia para evoluir",
  },
  {
    title: "O PLANO DO SUCESSO",
    subtitle: "A jornada do seu shape",
  },
  {
    title: "DIETAS PARA CRESCER",
    subtitle: "Coma certo para crescer",
  },
  {
    title: "TREINOS INICIANTES",
    subtitle: "Comece do jeito certo",
  },
  {
    title: "MENTORIA VIP",
    subtitle: "Acompanhamento premium",
  },
];

const image =
  "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?q=80&w=1000&auto=format&fit=crop";

export default function Modules() {
  return (
    <section style={styles.section}>
      <div style={styles.bg} />
      <div style={styles.neonTopLine} />
      <div style={styles.energyGlow} />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false, amount: 0.25 }}
        style={styles.header}
      >
        <div style={styles.pill}>TUDO O QUE VOCÊ PRECISA</div>

        <h2 style={styles.title}>
          Os módulos que estão
          <br />
          te esperando
        </h2>

        <p style={styles.description}>
          Um arsenal completo de treino, dieta, evolução e mentalidade para você
          parar de tentar sozinho e seguir um plano real.
        </p>
      </motion.div>

      <div style={styles.sliderMask}>
        <div style={styles.track}>
          {[...modules, ...modules].map((item, index) => (
            <motion.div
              key={index}
              style={styles.card}
              whileHover={{
                scale: 1.04,
                y: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
              }}
            >
              <img src={image} alt="" style={styles.image} />

              <div style={styles.cardDark} />
              <div style={styles.cardNeon} />
              <div style={styles.cardNoise} />

              <div style={styles.number}>
                {String((index % modules.length) + 1).padStart(2, "0")}
              </div>

              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.cardText}>{item.subtitle}</p>
              </div>

              <div style={styles.bottomLine} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const isMobile = window.innerWidth <= 768;

const styles = {
  section: {
    position: "relative",
    background: "#000",
    overflow: "hidden",
    padding: isMobile ? "90px 0 110px" : "140px 0 160px",
  },

  bg: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 50% 20%, rgba(163,255,18,0.18), transparent 42%), linear-gradient(180deg, #000 0%, #060503 50%, #000 100%)",
  },

  neonTopLine: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "84%",
    height: "2px",
    background:
      "linear-gradient(90deg, transparent, #a3ff12, transparent)",
    boxShadow:
      "0 0 25px rgba(163,255,18,0.8), 0 0 80px rgba(163,255,18,0.25)",
  },

  energyGlow: {
    position: "absolute",
    top: "-220px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "1200px",
    height: "420px",
    borderRadius: "999px",
    background: "rgba(163,255,18,0.12)",
    filter: "blur(120px)",
  },

  header: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    padding: "0 24px",
    marginBottom: isMobile ? "48px" : "80px",
  },

  pill: {
    display: "inline-block",
    marginBottom: "22px",
    padding: "10px 18px",
    borderRadius: "999px",
    background: "rgba(163,255,18,0.10)",
    border: "1px solid rgba(163,255,18,0.28)",
    color: "#a3ff12",
    fontSize: isMobile ? "11px" : "13px",
    fontWeight: 1000,
    letterSpacing: "3px",
  },

  title: {
    margin: 0,
    color: "#fff",
    fontSize: isMobile ? "42px" : "72px",
    lineHeight: "0.95",
    letterSpacing: isMobile ? "-2px" : "-4px",
    fontWeight: 1000,
    textShadow: "0 0 40px rgba(255,255,255,0.08)",
  },

  description: {
    maxWidth: "720px",
    margin: "26px auto 0",
    color: "rgba(255,255,255,0.68)",
    fontSize: isMobile ? "16px" : "20px",
    lineHeight: "1.7",
  },

  sliderMask: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    overflow: "hidden",
    WebkitMaskImage:
      "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
    maskImage:
      "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
  },

  track: {
    display: "flex",
    gap: isMobile ? "18px" : "30px",
    width: "max-content",
    paddingLeft: isMobile ? "18px" : "30px",
    animation: "modulesScroll 42s linear infinite",
    willChange: "transform",
    transform: "translate3d(0,0,0)",
  },

  card: {
    position: "relative",
    flex: "0 0 auto",
    width: isMobile ? "240px" : "330px",
    height: isMobile ? "380px" : "520px",
    borderRadius: isMobile ? "26px" : "34px",
    overflow: "hidden",
    background: "#111",
    border: "1px solid rgba(163,255,18,0.26)",
    boxShadow:
      "0 0 70px rgba(163,255,18,0.12), inset 0 0 60px rgba(0,0,0,0.8)",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "contrast(1.22) brightness(0.58) saturate(1.15)",
    transform: "scale(1.06)",
  },

  cardDark: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.96) 82%)",
  },

  cardNeon: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at top, rgba(163,255,18,0.32), transparent 45%)",
    mixBlendMode: "screen",
  },

  cardNoise: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(163,255,18,0.08), transparent 45%, rgba(255,255,255,0.05))",
  },

  number: {
    position: "absolute",
    top: isMobile ? "18px" : "24px",
    left: isMobile ? "18px" : "24px",
    color: "rgba(255,255,255,0.18)",
    fontSize: isMobile ? "42px" : "58px",
    fontWeight: 1000,
    letterSpacing: "-3px",
  },

  cardContent: {
    position: "absolute",
    left: isMobile ? "18px" : "24px",
    right: isMobile ? "18px" : "24px",
    bottom: isMobile ? "28px" : "34px",
  },

  cardTitle: {
    margin: 0,
    color: "#fff",
    fontSize: isMobile ? "25px" : "36px",
    lineHeight: "0.92",
    fontWeight: 1000,
    letterSpacing: "-1.5px",
    textShadow: "0 0 20px rgba(0,0,0,0.9)",
  },

  cardText: {
    margin: "14px 0 0",
    color: "#a3ff12",
    fontSize: isMobile ? "11px" : "13px",
    fontWeight: 1000,
    letterSpacing: "1.4px",
    textTransform: "uppercase",
  },

  bottomLine: {
    position: "absolute",
    left: "20px",
    right: "20px",
    bottom: "14px",
    height: "2px",
    background:
      "linear-gradient(90deg, transparent, rgba(163,255,18,0.9), transparent)",
    boxShadow: "0 0 18px rgba(163,255,18,0.8)",
  },
};