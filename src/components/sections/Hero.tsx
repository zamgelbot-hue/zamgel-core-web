// 📍 Ruta del archivo: src/components/sections/Hero.tsx

import { motion } from "motion/react";
import { ArrowRight, Hexagon } from "lucide-react";
import { KaizenEmblem } from "../visual/KaizenEmblem";
import { ParticleBackground } from "../visual/ParticleBackground";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-center pt-28 pb-20 overflow-hidden"
    >
      <ParticleBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 max-w-2xl mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zam-surface/50 border border-zam-orange/20 text-zam-orange text-xs font-sans tracking-widest mb-8"
          >
            <Hexagon className="w-3 h-3 fill-zam-orange text-zam-orange" />
            AGENCIA DIGITAL PREMIUM
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.05] mb-7 text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          >
            Construimos
            <br />
            sistemas digitales
            <br />
            modernos que
            <br />
            <span className="text-zam-orange text-glow-orange block mt-2">
              impulsan negocios.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-zam-silver/80 mb-12 leading-relaxed font-light max-w-lg"
          >
            Desarrollamos plataformas, aplicaciones y experiencias digitales
            escalables, rápidas y seguras.
            <br />
            Del concepto al sistema completo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a
              href="/#proyectos"
              className="relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-b from-[#FFA133] to-[#FF5A00] text-black font-sans font-bold tracking-[0.15em] text-[13px] rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,122,0,0.4)] group"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-white/50" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              <span className="relative z-10 drop-shadow-sm">
                VER PROYECTOS
              </span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/#contacto"
              className="relative flex items-center justify-center gap-3 px-8 py-4 bg-white/[0.02] border border-white/10 backdrop-blur-md text-white font-sans font-semibold tracking-[0.15em] text-[13px] rounded-full overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:scale-[1.02] group"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              <span className="relative z-10">HABLEMOS DE TU PROYECTO</span>
              <ArrowRight className="relative z-10 w-4 h-4 text-zam-silver group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <KaizenEmblem />
        </div>
      </div>
    </section>
  );
}
