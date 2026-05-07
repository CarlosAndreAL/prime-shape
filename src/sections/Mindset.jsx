import { motion } from "framer-motion";

export default function Mindset() {
  return (
    <section style={styles.section}>
      <div style={styles.bg} />

      {/* LINHA DOURADA */}
      <div style={styles.topLine} />

      {/* GLOW */}
      <div style={styles.topGlow} />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false, amount: 0.25 }}
        style={styles.card}
      >
        <p style={styles.kicker}>O PROBLEMA NUNCA FOI VOCÊ</p>

        <h2 style={styles.title}>
          Você treina.
          <br />
          Você aparece.
          <br />
          <span style={styles.gold}>Você se esforça.</span>
        </h2>

        <div style={styles.textBox}>
          <p>
            E mesmo assim, olha no espelho e vê o mesmo corpo de meses atrás.
          </p>

          <p>
            Mesma camiseta. Mesmo shape. Mesma frustração.
          </p>

          <p>
            Enquanto isso você vê outros evoluindo. E começa a pensar o que
            ninguém fala em voz alta:
          </p>
        </div>

        <h3 style={styles.question}>
          “Será que o problema sou eu?”
        </h3>

        <div style={styles.textBox}>
          <p>Não é.</p>

          <p>
            Você só precisava de direção, constância e um método que realmente
            funciona.
          </p>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          style={styles.arrow}
        >
          ˅
        </motion.div>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    minHeight: "100vh",
    background: "#000",
    overflow: "hidden",
    padding: "140px 24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  bg: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.14), transparent 35%), linear-gradient(180deg, #000 0%, #050505 55%, #000 100%)",
  },

  topLine: {
    position: "absolute",
    top: 0,
    left: "50%",
    width: "82%",
    height: "2px",
    transform: "translateX(-50%)",
    background:
      "linear-gradient(90deg, transparent, #d4af37, transparent)",
    boxShadow: "0 0 35px rgba(212,175,55,0.8)",
  },

  topGlow: {
    position: "absolute",
    top: "-170px",
    left: "50%",
    width: "1100px",
    height: "360px",
    transform: "translateX(-50%)",
    borderRadius: "999px",
    background: "rgba(212,175,55,0.14)",
    filter: "blur(120px)",
  },

  card: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "1200px",
    borderRadius: "36px",
    padding: "56px 72px",
    background:
      "linear-gradient(145deg, rgba(18,18,18,0.98), rgba(2,2,2,0.98))",
    border: "1px solid rgba(212,175,55,0.22)",
    boxShadow:
      "0 0 90px rgba(212,175,55,0.10), inset 0 0 80px rgba(255,255,255,0.025)",
    textAlign: "center",
  },

  kicker: {
    marginBottom: "26px",
    color: "#d4af37",
    fontSize: "13px",
    fontWeight: 900,
    letterSpacing: "8px",
  },

  title: {
    margin: 0,
    color: "#fff",
    fontSize: "72px",
    lineHeight: "0.92",
    letterSpacing: "-4px",
    fontWeight: 1000,
  },

  gold: {
    color: "#d4af37",
    textShadow: "0 0 24px rgba(212,175,55,0.25)",
  },

  textBox: {
    maxWidth: "820px",
    margin: "42px auto 0",
    color: "rgba(255,255,255,0.78)",
    fontSize: "21px",
    lineHeight: "1.75",
  },

  question: {
    maxWidth: "820px",
    margin: "50px auto 0",
    color: "#d4af37",
    fontSize: "48px",
    lineHeight: "1.1",
    letterSpacing: "-2px",
    fontWeight: 1000,
    textShadow: "0 0 28px rgba(212,175,55,0.35)",
  },

  arrow: {
    marginTop: "50px",
    color: "#d4af37",
    fontSize: "48px",
    textShadow: "0 0 24px rgba(212,175,55,0.8)",
  },
};