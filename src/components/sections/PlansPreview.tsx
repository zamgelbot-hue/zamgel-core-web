// 📍 Ruta del archivo: src/components/sections/PlansPreview.tsx

import { motion } from "motion/react";
import {
  ArrowRight,
  Crown,
  LayoutDashboard,
  Sparkles,
  Store,
} from "lucide-react";

const previewPlans = [
  {
    name: "Básico",
    price: "$600 USD",
    before: "$1200 USD",
    description:
      "Página profesional, menú digital, QR, WhatsApp y presencia moderna para empezar bien.",
    icon: Store,
  },
  {
    name: "Avanzado",
    price: "$1200 USD",
    before: "$2500 USD",
    description:
      "Todo lo básico más panel administrativo, POS, productos, pedidos, inventario y dashboard.",
    icon: LayoutDashboard,
    featured: true,
  },
  {
    name: "Premium",
    price: "$1800+ USD",
    before: "$3500+ USD",
    description:
      "Sistema personalizado con loyalty, Kaizen AI, automatizaciones, pagos y escalabilidad.",
    icon: Crown,
  },
];

export function PlansPreview() {
  return (
    <section
      id="planes"
      className="relative px-6 py-28 overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,0,0.12),transparent_60%)] pointer-events-none" />

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
              Paquetes para modernizar
              <span className="block text-zam-orange text-glow-orange">
                tu negocio paso a paso.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zam-silver/70">
              Desde una página profesional hasta sistemas completos con POS,
              inventario, lealtad, automatización e inteligencia artificial.
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

        <div className="grid gap-5 lg:grid-cols-3">
          {previewPlans.map((plan, index) => {
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
                    Pack {plan.name}
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

        <p className="mt-6 text-center text-xs uppercase tracking-[0.18em] text-zam-silver/45">
          Todos los precios están expresados en USD.
        </p>
      </div>
    </section>
  );
}
