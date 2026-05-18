// 📍 Ruta del archivo: src/components/sections/StatsBar.tsx

import { motion } from "motion/react";
import { Rocket, Users, Code2, Shield, Globe } from "lucide-react";

const stats = [
  {
    icon: Rocket,
    value: "4",
    label: "Proyectos reales",
  },
  {
    icon: Users,
    value: "3",
    label: "Clientes activos",
  },
  {
    icon: Code2,
    value: "Web Apps",
    label: "Sistemas modernos",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Compromiso real",
  },
  {
    icon: Globe,
    value: "Houston",
    label: "Base principal",
  },
];

export function StatsBar() {
  return (
    <section className="relative border-y border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,0,0.05),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                }}
                viewport={{ once: true }}
                className="group relative flex flex-col items-center justify-center text-center"
              >
                <div className="absolute inset-0 rounded-3xl bg-zam-orange/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

                <div className="relative z-10 flex flex-col items-center">
                  <Icon className="w-5 h-5 text-zam-orange mb-4" />

                  <div className="font-heading text-4xl text-white mb-2">
                    {stat.value}
                  </div>

                  <div className="text-sm tracking-[0.12em] uppercase text-zinc-500">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
