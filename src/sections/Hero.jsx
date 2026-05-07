export default function Hero() {
  const isMobile = window.innerWidth <= 768;

  return (
    <section
      style={{
        ...styles.section,
        minHeight: isMobile ? "auto" : "100vh",
        padding: isMobile ? "120px 20px 80px" : "0px",
      }}
    >
      <div style={styles.bgGlow} />
      <div style={styles.noise} />

      <div
        style={{
          ...styles.content,
          gridTemplateColumns: isMobile ? "1fr" : "0.95fr 1.05fr",
          gap: isMobile ? "60px" : "40px",
          padding: isMobile ? "0px" : "80px 40px",
        }}
      >
        <div
          style={{
            ...styles.left,
            maxWidth: "100%",
            textAlign: isMobile ? "center" : "left",
            alignItems: isMobile ? "center" : "flex-start",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={styles.badge}>
            ⚡ PRIME SHAPE • CHARLES_BIKER
          </div>

          <h1
            style={{
              ...styles.title,
              fontSize: isMobile ? "58px" : "72px",
              lineHeight: isMobile ? "0.95" : "0.92",
              letterSpacing: isMobile ? "-3px" : "-4px",
            }}
          >
            Construa o físico dos seus sonhos e chegue no seu{" "}
            <span style={styles.gold}>prime.</span>
          </h1>

          <p
            style={{
              ...styles.subtitle,
              fontSize: isMobile ? "17px" : "19px",
              maxWidth: isMobile ? "100%" : "560px",
            }}
          >
            Treino pronto. Dieta pronta. Acompanhamento premium
            para você executar, evoluir e conquistar um shape de
            respeito.
          </p>

          <button
            style={{
              ...styles.button,
              width: isMobile ? "100%" : "auto",
              justifyContent: "center",
            }}
          >
            <span style={styles.buttonText}>
              COMEÇAR AGORA →
            </span>

            <span style={styles.shine} />
          </button>
        </div>

        <div
          style={{
            ...styles.right,
            height: isMobile ? "420px" : "720px",
          }}
        >
          <div
            style={{
              ...styles.energy1,
              width: isMobile ? "420px" : "680px",
              height: isMobile ? "420px" : "680px",
            }}
          />

          <div
            style={{
              ...styles.energy2,
              width: isMobile ? "300px" : "520px",
              height: isMobile ? "300px" : "520px",
            }}
          />

          <div
            style={{
              ...styles.imageCard,
              width: isMobile ? "100%" : "620px",
              height: isMobile ? "420px" : "620px",
              borderRadius: isMobile ? "26px" : "34px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1571019613914-85f342c6a11e?q=80&w=1200&auto=format&fit=crop"
              alt=""
              style={styles.image}
            />

            <div style={styles.imageOverlay} />
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    background: "#030303",
    color: "#fff",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
  },

  bgGlow: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 72% 45%, rgba(212,175,55,0.32), transparent 32%), radial-gradient(circle at 15% 50%, rgba(212,175,55,0.18), transparent 35%), linear-gradient(90deg, #000 0%, #080604 50%, #000 100%)",
  },

  noise: {
    position: "absolute",
    inset: 0,
    opacity: 0.12,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
    backgroundSize: "70px 70px",
  },

  content: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "1320px",
    margin: "0 auto",
    display: "grid",
    alignItems: "center",
  },

  left: {},

  badge: {
    display: "inline-block",
    marginBottom: "28px",
    padding: "9px 16px",
    borderRadius: "999px",
    border: "1px solid rgba(212,175,55,0.35)",
    background: "rgba(212,175,55,0.12)",
    color: "#d4af37",
    fontSize: "13px",
    fontWeight: 800,
    letterSpacing: "1px",
  },

  title: {
    margin: 0,
    fontWeight: 1000,
  },

  gold: {
    color: "#d4af37",
  },

  subtitle: {
    marginTop: "34px",
    color: "#c8c8c8",
    lineHeight: "1.6",
  },

  button: {
    position: "relative",
    overflow: "hidden",
    marginTop: "46px",
    border: "none",
    cursor: "pointer",
    padding: "22px 46px",
    borderRadius: "18px",
    background:
      "linear-gradient(135deg, #f7d774, #d4af37, #8f6d12)",
    color: "#000",
    fontSize: "17px",
    fontWeight: 1000,
    display: "flex",
    alignItems: "center",
    boxShadow:
      "0 0 20px rgba(212,175,55,0.55), 0 0 70px rgba(212,175,55,0.22)",
  },

  buttonText: {
    position: "relative",
    zIndex: 2,
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

  right: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  energy1: {
    position: "absolute",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(212,175,55,0.28), transparent 62%)",
    filter: "blur(20px)",
  },

  energy2: {
    position: "absolute",
    border: "2px solid rgba(212,175,55,0.25)",
    transform: "rotate(-12deg)",
    borderRadius: "40px",
    boxShadow: "0 0 90px rgba(212,175,55,0.2)",
  },

  imageCard: {
    position: "relative",
    overflow: "hidden",
    border: "1px solid rgba(212,175,55,0.35)",
    boxShadow:
      "0 0 60px rgba(212,175,55,0.18), inset 0 0 80px rgba(0,0,0,0.8)",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "contrast(1.15) saturate(1.05) brightness(0.78)",
  },

  imageOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(0,0,0,0.35), transparent 45%), linear-gradient(0deg, rgba(0,0,0,0.85), transparent 45%)",
  },
};