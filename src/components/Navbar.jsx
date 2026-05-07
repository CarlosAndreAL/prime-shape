import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-yellow-500/10 bg-black/30"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <div>
          <h1 className="text-2xl font-black tracking-widest">
            PRIME
            <span className="text-gold"> SHAPE</span>
          </h1>

          <span className="text-[11px] tracking-[5px] text-zinc-500 uppercase">
            elite training
          </span>
        </div>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-zinc-300">

          <a href="#" className="hover:text-yellow-400 transition-all">
            Início
          </a>

          <a href="#" className="hover:text-yellow-400 transition-all">
            Módulos
          </a>

          <a href="#" className="hover:text-yellow-400 transition-all">
            Resultados
          </a>

          <a href="#" className="hover:text-yellow-400 transition-all">
            Mentoria
          </a>

        </nav>

        {/* BOTÃO */}
        <button className="bg-gold text-black px-6 py-3 rounded-2xl font-bold gold-glow hover:scale-105 transition-all duration-300">
          COMEÇAR
        </button>

      </div>
    </motion.header>
  );
}