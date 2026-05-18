import { motion } from "motion/react";
import {
  Globe,
  LayoutDashboard,
  Boxes,
  Workflow,
  Database,
  PenTool,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Páginas Web Modernas",
    description:
      "Landing pages y sitios modernos optimizados para negocios, marcas y presencia digital.",
  },
  {
    icon: LayoutDashboard,
    title: "Paneles Administrativos",
    description:
      "Dashboards y herramientas internas para administrar clientes, pedidos, productos o información.",
  },
  {
    icon: Boxes,
    title: "Sistemas Personalizados",
    description:
      "Soluciones adaptadas a las necesidades reales de cada negocio y flujo de trabajo.",
  },
  {
    icon: Workflow,
    title: "Automatización Básica",
    description:
      "Procesos digitales simples para ahorrar tiempo y mejorar organización.",
  },
  {
    icon: Database,
    title: "Inventarios y Gestión",
    description:
      "Control de productos, pedidos, estados y operaciones desde una plataforma central.",
  },
  {
    icon: PenTool,
    title: "Diseño y Branding",
    description:
      "Interfaces modernas, branding digital y experiencia visual enfocada en impacto profesional.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-32 px-6 border-t border-white/5"
    >
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-zam-orange/20 bg-zam-orange/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-zam-orange" />
            <span className="text-sm tracking-[0.2em] text-zam-orange uppercase">
              Servicios
            </span>
          </div>

          <h2 className="font-heading text-5xl lg:text-6xl text-white max-w-4xl leading-[1.05]">
            Soluciones digitales enfocadas en resultados reales.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 hover:border-zam-orange/30 transition-all duration-500"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(255,122,0,0.12),transparent_70%)]" />

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl border border-zam-orange/20 bg-zam-orange/10 flex items-center justify-center mb-8">
                  <Icon className="w-8 h-8 text-zam-orange" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-heading text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
