import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section style={styles.section}>
      <div style={styles.bg} />
      <div style={styles.light} />

      <motion.div
        initial={{ opacity: 0, y: 90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false, amount: 0.3 }}
        style={styles.content}
      >
        <h2 style={styles.title}>
          O problema nunca foi você.
          <br />
          <span>Foi o que você não tinha.</span>
        </h2>

        <p style={styles.text}>
          Você sempre foi capaz. Treino você até tentava. Dieta você começava.
          Motivação aparecia por alguns dias. Mas faltava uma estrutura clara,
          um plano organizado e alguém para te mostrar exatamente o caminho.
        </p>

        <p style={styles.text}>
          Não era falta de vontade. Era falta de direção.
          E é isso que o SHAPE PRIME vai te entregar.
        </p>

        <button style={styles.button}>
          COMEÇAR AGORA →
          <span style={styles.shine} />
        </button>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    minHeight: "85vh",
    background: "#000",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "120px 24px",
  },

  bg: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 50% 35%, rgba(212,175,55,0.20), transparent 38%), linear-gradient(180deg, #000 0%, #080704 45%, #000 100%)",
  },

  light: {
    position: "absolute",
    top: 0,
    left: "50%",
    width: "80%",
    height: "2px",
    transform: "translateX(-50%)",
    background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
    boxShadow: "0 0 45px rgba(212,175,55,0.8)",
  },

  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "980px",
    textAlign: "center",
  },

  title: {
    margin: 0,
    color: "#fff",
    fontSize: "62px",
    lineHeight: "1",
    fontWeight: 1000,
    letterSpacing: "-3px",
  },

  text: {
    maxWidth: "760px",
    margin: "28px auto 0",
    color: "rgba(255,255,255,0.78)",
    fontSize: "20px",
    lineHeight: "1.7",
  },

  button: {
    position: "relative",
    overflow: "hidden",
    marginTop: "46px",
    border: "none",
    cursor: "pointer",
    padding: "20px 44px",
    borderRadius: "14px",
    background: "linear-gradient(135deg, #f8dd78, #d4af37, #8f6d12)",
    color: "#000",
    fontSize: "16px",
    fontWeight: 1000,
    letterSpacing: "1px",
    boxShadow:
      "0 0 22px rgba(212,175,55,0.55), 0 0 70px rgba(212,175,55,0.20)",
  },

  shine: {
    position: "absolute",
    top: 0,
    left: "-120%",
    width: "45%",
    height: "100%",
    background: "rgba(255,255,255,0.55)",
    filter: "blur(10px)",
    transform: "skewX(-25deg)",
    animation: "shine 2.8s infinite",
  },
};