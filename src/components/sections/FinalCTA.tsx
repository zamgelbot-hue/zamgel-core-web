// 📍 Ruta del archivo: src/components/sections/FinalCTA.tsx

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ContactModal } from "../ui/ContactModal";

export function FinalCTA() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section className="relative py-36 px-6 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,0,0.12),transparent_65%)] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-zam-orange/20 bg-zam-orange/5 mb-8">
              <div className="w-2 h-2 rounded-full bg-zam-orange" />
              <span className="text-sm tracking-[0.2em] uppercase text-zam-orange">
                Zamgel Core
              </span>
            </div>

            <h2 className="font-heading text-5xl lg:text-7xl text-white leading-[1.02] mb-8">
              Construyamos algo
              <span className="block text-zam-orange text-glow-orange">
                moderno y funcional.
              </span>
            </h2>

            <p className="max-w-3xl mx-auto text-zinc-400 text-lg leading-relaxed mb-12">
              Si tienes una idea, negocio o proyecto digital que quieras
              mejorar, podemos ayudarte a construir una solución moderna,
              organizada y escalable paso a paso.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="group relative overflow-hidden rounded-2xl bg-zam-orange px-10 py-5 text-black font-semibold tracking-[0.15em] uppercase transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,122,0,0.35)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Hablemos
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </button>

              <a
                href="#proyectos"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] px-10 py-5 text-white tracking-[0.15em] uppercase transition-all duration-500 hover:border-zam-orange/40 hover:bg-zam-orange/[0.04]"
              >
                Ver proyectos
              </a>
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
