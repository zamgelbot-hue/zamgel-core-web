// 📍 Ruta del archivo: src/components/sections/HowWeWork.tsx

import { motion } from "motion/react";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Analizamos tu negocio",
    text: "Entendemos qué vendes, cómo trabajas y qué problema real debe resolver la página o sistema.",
    icon: Search,
  },
  {
    step: "02",
    title: "Diseñamos la experiencia",
    text: "Creamos una estructura clara, moderna y enfocada en que tus clientes entiendan y confíen.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Desarrollamos la solución",
    text: "Construimos la página, panel, sistema o herramienta con tecnología moderna y escalable.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Lanzamos y optimizamos",
    text: "Publicamos, revisamos detalles y dejamos la base lista para seguir creciendo.",
    icon: Rocket,
  },
];

export function HowWeWork() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 px-6 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,122,0,0.12),transparent_45%)]" />

      <div className="relative mx-auto max-w-[90rem]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zam-orange/20 bg-zam-orange/5 px-5 py-2">
            <div className="h-2 w-2 rounded-full bg-zam-orange" />
            <span className="text-sm uppercase tracking-[0.2em] text-zam-orange">
              Cómo trabajamos
            </span>
          </div>

          <h2 className="font-heading text-4xl leading-tight text-white md:text-6xl">
            Un proceso claro para construir soluciones reales.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            No se trata solo de hacer algo bonito. Cada proyecto se construye
            con intención, estructura y una base lista para crecer.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-zam-orange/35"
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,122,0,0.14),transparent_65%)]" />

                <div className="relative">
                  <div className="mb-8 flex items-center justify-between">
                    <p className="font-heading text-5xl text-zam-orange/55">
                      {item.step}
                    </p>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zam-orange/20 bg-zam-orange/10">
                      <Icon className="h-7 w-7 text-zam-orange" />
                    </div>
                  </div>

                  <h3 className="font-heading text-2xl text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-400">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
