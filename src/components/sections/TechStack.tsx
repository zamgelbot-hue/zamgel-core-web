// 📍 Ruta del archivo: src/components/sections/TechStack.tsx

import { motion } from "motion/react";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiNodedotjs,
  SiGreensock,
  SiDocker,
} from "react-icons/si";

const techs = [
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-full h-full" />,
  },
  {
    name: "React",
    icon: <SiReact className="w-full h-full" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-full h-full" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="w-full h-full" />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="w-full h-full" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-full h-full" />,
  },
  {
    name: "GSAP",
    icon: <SiGreensock className="w-full h-full" />,
  },
  {
    name: "Docker",
    icon: <SiDocker className="w-full h-full" />,
  },
];

export function TechStack() {
  return (
    <div
      id="tecnologias"
      className="relative z-10 w-full py-28 bg-transparent overflow-hidden mt-8"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-zam-orange/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Badge */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-zam-orange/20 bg-zam-orange/[0.03] text-zam-orange text-[12px] tracking-[0.25em] uppercase font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-zam-orange shadow-[0_0_10px_#FF7A00]" />
            Tecnologías
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-heading text-white leading-[1.1] max-w-4xl mb-6">
          Tecnologías modernas para construir
          <span className="text-zam-orange text-glow-orange">
            {" "}
            sistemas escalables.
          </span>
        </h2>

        {/* Description */}
        <p className="text-zinc-500 max-w-2xl text-lg leading-relaxed mb-20">
          Utilizamos herramientas modernas enfocadas en rendimiento, diseño
          premium y experiencias fluidas para aplicaciones reales.
        </p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center mb-16"
        >
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative px-6 bg-zam-bg text-zinc-600 text-xs tracking-[0.25em] uppercase">
            Powered by Zamgel Core
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] hover:border-zam-orange/30 transition-all duration-500 p-8 flex flex-col items-center justify-center gap-6"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(255,122,0,0.12),transparent_70%)]" />

              {/* Icon Container */}
              <div className="relative w-16 h-16 rounded-xl flex items-center justify-center bg-black/40 border border-white/5 text-zam-silver/50 grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-[0.2] group-hover:text-white group-hover:border-zam-orange/40 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(255,122,0,0.25)]">
                <div className="absolute inset-0 rounded-xl bg-zam-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative w-8 h-8 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  {tech.icon}
                </div>
              </div>

              {/* Label */}
              <div className="relative z-10 text-sm tracking-[0.18em] uppercase text-zinc-500 group-hover:text-zam-silver transition-colors duration-500">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
