// 📍 Ruta del archivo: src/components/sections/Projects.tsx

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Gamepad2,
  MonitorPlay,
  Utensils,
  Cpu,
} from "lucide-react";

const projects = [
  {
    icon: Utensils,
    name: "Velazquez Food Truck",
    type: "Web + pedidos + panel",
    description:
      "Sitio digital para restaurante móvil con menú, pedidos, seguimiento de orden y herramientas administrativas.",
    tags: ["React", "Supabase", "Pedidos", "POS"],
  },
  {
    icon: Gamepad2,
    name: "La Mesa Familiar",
    type: "Plataforma multiplayer",
    description:
      "Aplicación web de juegos familiares online con salas, perfiles, ranking, cosméticos y sincronización en tiempo real.",
    tags: ["Next.js", "Supabase", "Realtime", "Gaming"],
  },
  {
    icon: MonitorPlay,
    name: "Santiel TV",
    type: "Portal + admin + Roku",
    description:
      "Ecosistema digital con landing, portal de clientes, panel administrativo y pruebas de app para Roku.",
    tags: ["React", "Netlify", "Supabase", "Roku"],
  },
  {
    icon: Cpu,
    name: "Zamgel Core",
    type: "Marca tecnológica",
    description:
      "Identidad y landing principal para presentar servicios digitales, proyectos y evolución del estudio.",
    tags: ["Branding", "Vite", "React", "UI"],
  },
];

export function Projects() {
  return (
    <section
      id="proyectos"
      className="relative py-32 px-6 border-t border-white/5"
    >
      <div className="max-w-[90rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-zam-orange/20 bg-zam-orange/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-zam-orange" />
            <span className="text-sm tracking-[0.2em] text-zam-orange uppercase">
              Proyectos
            </span>
          </div>

          <h2 className="font-heading text-4xl lg:text-6xl text-white max-w-4xl leading-[1.06]">
            Experiencia construida con proyectos reales.
          </h2>

          <p className="mt-6 max-w-3xl text-zinc-400 text-lg leading-relaxed">
            Estos proyectos representan el camino actual de Zamgel Core:
            soluciones prácticas, diseño moderno y sistemas que crecen paso a
            paso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.025] p-8 hover:border-zam-orange/35 transition-all duration-500"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(255,122,0,0.16),transparent_55%)]" />

                <div className="relative z-10 flex items-start justify-between gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl border border-zam-orange/20 bg-zam-orange/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-zam-orange" />
                  </div>

                  <ArrowUpRight className="w-6 h-6 text-zinc-600 group-hover:text-zam-orange transition-colors duration-300" />
                </div>

                <div className="relative z-10">
                  <p className="text-zam-orange text-sm tracking-[0.18em] uppercase mb-3">
                    {project.type}
                  </p>

                  <h3 className="font-heading text-2xl lg:text-3xl text-white mb-4">
                    {project.name}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed mb-7">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-white/10 bg-black/30 text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
