// 📍 Ruta del archivo: src/components/sections/Hero.tsx

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Hexagon, MessageSquareText, Sparkles } from "lucide-react";
import { KaizenEmblem } from "../visual/KaizenEmblem";
import { ParticleBackground } from "../visual/ParticleBackground";
import { ContactModal } from "../ui/ContactModal";

export function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section
        id="inicio"
        className="relative flex items-center overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24"
      >
        <ParticleBackground />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,122,0,0.18),transparent_34%),radial-gradient(circle_at_25%_45%,rgba(255,255,255,0.045),transparent_38%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.16] pointer-events-none" />
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zam-orange/30 to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-12 px-6 md:flex-row">
          {/* Left Content */}
          <div className="mt-10 max-w-2xl flex-1 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-zam-orange/20 bg-black/35 px-3 py-1 text-xs font-bold tracking-widest text-zam-orange shadow-[0_0_28px_rgba(255,122,0,0.12)] backdrop-blur-xl"
            >
              <Hexagon className="h-3 w-3 fill-zam-orange text-zam-orange" />
              AGENCIA DIGITAL PREMIUM
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mb-7 text-5xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] md:text-6xl lg:text-[4rem]"
            >
              Construimos
              <br />
              sistemas digitales
              <br />
              modernos que
              <br />
              <span className="mt-2 block text-zam-orange text-glow-orange">
                impulsan negocios.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-11 max-w-lg text-lg font-light leading-relaxed text-zam-silver/80 md:text-xl"
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
              className="flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="/#proyectos"
                className="group relative flex min-h-[58px] items-center justify-center gap-3 overflow-hidden rounded-2xl border border-zam-orange/35 bg-black/55 px-7 py-4 text-[12px] font-black uppercase tracking-[0.22em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_32px_rgba(255,122,0,0.12)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-zam-orange/70 hover:shadow-[0_0_42px_rgba(255,122,0,0.25)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,0,0.26),transparent_40%)] opacity-80" />
                <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-zam-orange via-[#ffd0a0] to-transparent" />
                <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
                <Sparkles className="relative z-10 h-4 w-4 text-zam-orange" />
                <span className="relative z-10">Ver proyectos</span>
                <ArrowRight className="relative z-10 h-4 w-4 text-zam-orange transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="group relative flex min-h-[58px] items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/12 bg-white/[0.035] px-7 py-4 text-[12px] font-black uppercase tracking-[0.22em] text-zam-silver backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-zam-orange/45 hover:bg-zam-orange/[0.06] hover:text-white hover:shadow-[0_0_35px_rgba(255,122,0,0.16)]"
              >
                <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
                <MessageSquareText className="relative z-10 h-4 w-4 text-zam-orange" />
                <span className="relative z-10">Hablemos de tu proyecto</span>
                <ArrowRight className="relative z-10 h-4 w-4 text-zam-orange transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Right Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-1 items-center justify-center"
          >
            <div className="absolute h-[520px] w-[520px] rounded-full bg-zam-orange/10 blur-[90px]" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              className="absolute h-[470px] w-[470px] rounded-full border border-dashed border-zam-orange/18"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
              className="absolute h-[380px] w-[380px] rounded-full border border-dotted border-zam-orange/25"
            />
            <div className="absolute h-[300px] w-[300px] rounded-full border border-white/5 bg-black/20 shadow-[inset_0_0_80px_rgba(255,122,0,0.08)] backdrop-blur-sm" />
            <div className="absolute left-1/2 top-1/2 h-[1px] w-[560px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-zam-orange/20 to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-[560px] w-[1px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-zam-orange/14 to-transparent" />

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 drop-shadow-[0_0_55px_rgba(255,122,0,0.46)]"
            >
              <KaizenEmblem />
            </motion.div>

            <motion.div
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[8%] top-[26%] rounded border border-zam-orange/35 bg-black/55 px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-zam-orange shadow-[0_0_20px_rgba(255,122,0,0.18)]"
            >
              SYS.ONLINE
            </motion.div>

            <div className="absolute bottom-[20%] left-[10%] rounded border border-white/10 bg-black/50 px-3 py-1 text-[10px] tracking-[0.14em] text-zam-silver/60">
              KZN-CORE // v2.4.0
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
