// 📍 Ruta del archivo: src/components/sections/PlansPreview.tsx

import { motion } from "motion/react";
import {
  ArrowRight,
  Crown,
  Globe,
  LayoutDashboard,
  MonitorSmartphone,
  Sparkles,
  Store,
} from "lucide-react";

const starterPlans = [
  {
    name: "Web Inicial",
    price: "$199 USD",
    description:
      "Presencia básica online para negocios que quieren comenzar rápido con una página moderna.",
    icon: Globe,
  },
  {
    name: "Web Profesional",
    price: "$299 USD",
    description:
      "Página profesional con mejor estructura, WhatsApp, formulario, Google Maps y SEO básico.",
    icon: MonitorSmartphone,
    featured: true,
  },
  {
    name: "Web Interactiva",
    price: "$499 USD",
    description:
      "Experiencia visual más personalizada con secciones interactivas, galerías y animaciones premium.",
    icon: Sparkles,
  },
];

const premiumPlans = [
  {
    name: "Impulso Core",
    price: "$600 USD",
    before: "$1200 USD",
    description:
      "Página profesional, menú digital, QR, WhatsApp y presencia moderna para empezar bien.",
    icon: Store,
  },
  {
    name: "Negocio Core",
    price: "$1200 USD",
    before: "$2500 USD",
    description:
      "Panel administrativo, POS, productos, pedidos, inventario básico y dashboard.",
    icon: LayoutDashboard,
    featured: true,
  },
  {
    name: "Élite Core",
    price: "$1800 USD",
    before: "$3500 USD",
    description:
      "Sistema personalizado con loyalty, Kaizen AI, automatizaciones, pagos y escalabilidad.",
    icon: Crown,
  },
];

export function PlansPreview() {
  return (
    <section
      id="planes"
      className="relative overflow-hidden border-t border-white/5 px-6 py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,0,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zam-orange/20 bg-zam-orange/5 px-5 py-2">
              <Sparkles className="h-4 w-4 text-zam-orange" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-zam-orange">
                Planes Zamgel Core
              </span>
            </div>

            <h2 className="font-heading text-4xl font-black leading-tight text-white md:text-6xl">
              Desde presencia online
              <span className="block text-zam-orange text-glow-orange">
                hasta sistemas reales.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zam-silver/70">
              Opciones económicas para comenzar y soluciones premium para
              negocios que necesitan POS, inventario, automatización e IA.
            </p>
          </div>

          <a
            href="/planes"
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-zam-orange/30 bg-zam-orange/10 px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-zam-orange transition hover:bg-zam-orange hover:text-black hover:shadow-[0_0_35px_rgba(255,122,0,0.25)]"
          >
            Ver planes completos
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </motion.div>

        <div className="mb-16">
          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-zam-orange">
                Planes Starter
              </p>
              <h3 className="mt-3 font-heading text-3xl font-black text-white">
                Entrada económica para comenzar online
              </h3>
            </div>

            <p className="max-w-md text-sm text-zam-silver/55">
              Para negocios que solo necesitan una página moderna, rápida y
              lista para promocionarse.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {starterPlans.map((plan, index) => {
              const Icon = plan.icon;

              return (
                <motion.a
                  key={plan.name}
                  href="/planes#planes"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-xl transition hover:-translate-y-1 ${
                    plan.featured
                      ? "border-zam-orange/55 bg-zam-orange/[0.08] shadow-[0_0_45px_rgba(255,122,0,0.18)]"
                      : "border-white/10 bg-white/[0.03] hover:border-zam-orange/35"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-zam-orange/[0.08] opacity-70" />

                  <div className="relative">
                    <div className="mb-7 flex items-center justify-between">
                      <div className="rounded-2xl border border-white/10 bg-black/35 p-3">
                        <Icon className="h-7 w-7 text-zam-orange" />
                      </div>

                      {plan.featured && (
                        <span className="rounded-full border border-zam-orange/30 bg-zam-orange/10 px-3 py-1 text-xs font-bold text-zam-orange">
                          Recomendado
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading text-2xl font-black text-white">
                      {plan.name}
                    </h3>

                    <p className="mt-5 text-3xl font-black text-white">
                      Desde {plan.price}
                    </p>

                    <p className="mt-6 text-sm leading-7 text-zam-silver/70">
                      {plan.description}
                    </p>

                    <div className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-zam-orange">
                      Ver detalles
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        <div>
          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-zam-orange">
                Soluciones Premium
              </p>
              <h3 className="mt-3 font-heading text-3xl font-black text-white">
                Sistemas para negocios que quieren crecer
              </h3>
            </div>

            <p className="max-w-md text-sm text-zam-silver/55">
              Para negocios que necesitan operación, control, automatización y
              herramientas reales.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {premiumPlans.map((plan, index) => {
              const Icon = plan.icon;

              return (
                <motion.a
                  key={plan.name}
                  href="/planes#detalles"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-xl transition hover:-translate-y-1 ${
                    plan.featured
                      ? "border-zam-orange/55 bg-zam-orange/[0.08] shadow-[0_0_45px_rgba(255,122,0,0.18)]"
                      : "border-white/10 bg-white/[0.03] hover:border-zam-orange/35"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-zam-orange/[0.08] opacity-70" />

                  <div className="relative">
                    <div className="mb-7 flex items-center justify-between">
                      <div className="rounded-2xl border border-white/10 bg-black/35 p-3">
                        <Icon className="h-7 w-7 text-zam-orange" />
                      </div>

                      {plan.featured && (
                        <span className="rounded-full border border-zam-orange/30 bg-zam-orange/10 px-3 py-1 text-xs font-bold text-zam-orange">
                          Más vendido
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading text-2xl font-black text-white">
                      {plan.name}
                    </h3>

                    <div className="mt-5">
                      <p className="text-sm text-zam-silver/40 line-through">
                        Antes: {plan.before}
                      </p>
                      <p className="mt-1 text-3xl font-black text-white">
                        Desde {plan.price}
                      </p>
                      <p className="mt-1 text-sm text-zam-orange">
                        + mantenimiento mensual
                      </p>
                    </div>

                    <p className="mt-6 text-sm leading-7 text-zam-silver/70">
                      {plan.description}
                    </p>

                    <div className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-zam-orange">
                      Ver detalles
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-center text-xs uppercase tracking-[0.18em] text-zam-silver/45">
          Todos los precios están expresados en USD.
        </p>
      </div>
    </section>
  );
}
