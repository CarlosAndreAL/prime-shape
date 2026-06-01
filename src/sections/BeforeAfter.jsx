import { motion } from "framer-motion";
import { useState } from "react";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  function updatePosition(clientX, target) {
    const rect = target.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setPosition(Math.max(8, Math.min(92, percent)));
  }

  function handleMouseMove(e) {
    updatePosition(e.clientX, e.currentTarget);
  }

  function handleTouchMove(e) {
    updatePosition(e.touches[0].clientX, e.currentTarget);
  }

  return (
    <section style={styles.section}>
      <div style={styles.bgGlow} />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.25 }}
        style={styles.container}
      >
        <div
          style={styles.compare}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop"
            alt=""
            style={styles.image}
            draggable={false}
          />

          <div style={{ ...styles.beforeWrapper, width: `${position}%` }}>
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1400&auto=format&fit=crop"
              alt=""
              style={styles.image}
              draggable={false}
            />
          </div>

          <div style={{ ...styles.sliderLine, left: `${position}%` }}>
            <div style={styles.sliderButton}>↔</div>
          </div>

          <div style={styles.beforeText}>ANTES</div>
          <div style={styles.afterText}>DEPOIS</div>
        </div>

        <div style={styles.textSide}>
          <span style={styles.badge}>SHAPE PRIME</span>

          <h2 style={styles.title}>
            Eu sei disso porque fui exatamente você.
          </h2>

          <p style={styles.text}>
            Eu já comecei motivado e parei no meio. Já olhei no espelho e achei
            que meu corpo nunca mudaria.
          </p>

          <p style={styles.text}>
            Até entender que resultado não vem só de esforço. Resultado vem de
            método, estratégia e constância.
          </p>

          <p style={styles.text}>
            Foi por isso que eu criei o SHAPE PRIME. Pra encurtar anos de erro
            em poucos meses.
          </p>

          <button style={styles.button}>QUERO MUDAR AGORA</button>
        </div>
      </motion.div>
    </section>
  );
}

const isMobile = window.innerWidth <= 768;

const styles = {
  section: {
    position: "relative",
    background: "#000",
    padding: isMobile ? "90px 18px" : "140px 40px",
    overflow: "hidden",
  },

  bgGlow: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, rgba(163,255,18,0.15), transparent 55%)",
  },

  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1350px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "560px 1fr",
    gap: isMobile ? "48px" : "80px",
    alignItems: "center",
  },

  compare: {
    position: "relative",
    width: "100%",
    height: isMobile ? "560px" : "700px",
    borderRadius: isMobile ? "28px" : "32px",
    overflow: "hidden",
    cursor: "ew-resize",
    touchAction: "none",
    userSelect: "none",
    border: "1px solid rgba(163,255,18,0.22)",
    boxShadow: "0 0 90px rgba(163,255,18,0.15)",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    userSelect: "none",
    pointerEvents: "none",
  },

  beforeWrapper: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
  },

  sliderLine: {
    position: "absolute",
    top: 0,
    transform: "translateX(-50%)",
    width: isMobile ? "4px" : "5px",
    height: "100%",
    background:
      "linear-gradient(to bottom, #efffc2, #a3ff12, #efffc2)",
    boxShadow:
      "0 0 20px #a3ff12, 0 0 50px rgba(163,255,18,0.8)",
    zIndex: 20,
  },

  sliderButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "54px" : "58px",
    height: isMobile ? "54px" : "58px",
    borderRadius: "50%",
    background: "#a3ff12",
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 1000,
    fontSize: "22px",
    boxShadow:
      "0 0 20px rgba(163,255,18,0.9), 0 0 60px rgba(163,255,18,0.4)",
  },

  beforeText: {
    position: "absolute",
    left: isMobile ? "20px" : "24px",
    bottom: isMobile ? "24px" : "24px",
    color: "#fff",
    fontSize: isMobile ? "42px" : "46px",
    fontWeight: 1000,
    zIndex: 30,
    letterSpacing: "-2px",
    textShadow: "0 0 20px rgba(0,0,0,0.9)",
  },

  afterText: {
    position: "absolute",
    right: isMobile ? "20px" : "24px",
    bottom: isMobile ? "24px" : "24px",
    color: "#fff",
    fontSize: isMobile ? "42px" : "46px",
    fontWeight: 1000,
    zIndex: 30,
    letterSpacing: "-2px",
    textShadow: "0 0 20px rgba(0,0,0,0.9)",
  },

  textSide: {
    position: "relative",
    textAlign: isMobile ? "center" : "left",
  },

  badge: {
    display: "inline-block",
    marginBottom: "18px",
    padding: "10px 18px",
    borderRadius: "999px",
    border: "1px solid rgba(163,255,18,0.3)",
    background: "rgba(163,255,18,0.08)",
    color: "#a3ff12",
    fontWeight: 700,
    fontSize: "13px",
    letterSpacing: "3px",
  },

  title: {
    margin: 0,
    color: "#fff",
    fontSize: isMobile ? "48px" : "72px",
    lineHeight: "0.95",
    fontWeight: 1000,
    letterSpacing: isMobile ? "-2px" : "-4px",
  },

  text: {
    marginTop: "24px",
    color: "rgba(255,255,255,0.75)",
    fontSize: isMobile ? "17px" : "22px",
    lineHeight: "1.75",
    maxWidth: "760px",
  },

  button: {
    width: isMobile ? "100%" : "auto",
    marginTop: "38px",
    border: "none",
    cursor: "pointer",
    padding: "20px 38px",
    borderRadius: "18px",
    background:
      "linear-gradient(135deg, #caff4f, #a3ff12, #4fd000)",
    color: "#000",
    fontWeight: 1000,
    fontSize: "15px",
    letterSpacing: "1px",
    boxShadow:
      "0 0 25px rgba(163,255,18,0.45), 0 0 70px rgba(163,255,18,0.18)",
  },
};