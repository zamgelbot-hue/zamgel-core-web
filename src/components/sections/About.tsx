// 📍 Ruta del archivo: src/components/sections/About.tsx

import { motion } from "motion/react";

export function About() {
  return (
    <section
      id="nosotros"
      className="relative py-32 px-6 border-t border-white/5"
    >
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-zam-orange/20 bg-zam-orange/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-zam-orange" />

            <span className="text-sm tracking-[0.2em] uppercase text-zam-orange">
              Nosotros
            </span>
          </div>

          <h2 className="font-heading text-5xl lg:text-6xl text-white leading-[1.05] max-w-2xl">
            Tecnología moderna con enfoque realista.
          </h2>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-zinc-300 text-lg leading-relaxed">
            Zamgel Core es un estudio digital enfocado en construir experiencias
            modernas, herramientas funcionales y sistemas prácticos para
            negocios reales.
          </p>
          <p className="text-zinc-500 leading-relaxed">
            Nuestro enfoque combina diseño visual premium, organización,
            automatización y desarrollo web moderno utilizando tecnologías
            actuales como React, Next.js, Tailwind y Supabase.
          </p>
          <p className="text-zinc-500 leading-relaxed">
            Creemos en crecer paso a paso, construir con transparencia y
            desarrollar soluciones honestas que realmente aporten valor.
          </p>

          {/* Premium Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-8">
            {[
              {
                title: "Diseño moderno",
                desc: "Interfaces limpias, futuristas y enfocadas en experiencia visual.",
              },
              {
                title: "Sistemas funcionales",
                desc: "Herramientas reales para negocios, organización y automatización.",
              },
              {
                title: "Mejora continua",
                desc: "Construcción progresiva con evolución constante y transparente.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-6 hover:border-zam-orange/30 transition-all duration-500"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(255,122,0,0.12),transparent_70%)]" />

                {/* Top Line */}
                <div className="relative z-10 w-12 h-px bg-zam-orange mb-6" />

                <div className="relative z-10">
                  <h3 className="text-white font-heading text-xl mb-4">
                    {item.title}
                  </h3>

                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
