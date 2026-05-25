// 📍 Ruta del archivo: src/components/sections/BusinessTypes.tsx

import { motion } from "motion/react";
import {
  Scissors,
  Utensils,
  Store,
  GraduationCap,
  Gem,
  Building2,
  CalendarClock,
  MapPin,
} from "lucide-react";

const businessTypes = [
  {
    title: "Barberías y salones",
    text: "Páginas con servicios, barberos, perfiles, ubicación, WhatsApp, citas y galería de trabajos.",
    icon: Scissors,
  },
  {
    title: "Food trucks y restaurantes",
    text: "Menú digital, QR, ubicación, pedidos, promociones, POS e inventario básico.",
    icon: Utensils,
  },
  {
    title: "Tiendas y comercios",
    text: "Catálogo, productos, promociones, clientes, panel privado y presencia profesional.",
    icon: Store,
  },
  {
    title: "Academias y cursos",
    text: "Landing profesional, horarios, clases, instructores, inscripciones y comunicación con alumnos.",
    icon: GraduationCap,
  },
  {
    title: "Joyerías y marcas premium",
    text: "Catálogos elegantes, galerías, productos destacados, confianza visual y experiencia de marca.",
    icon: Gem,
  },
  {
    title: "Hoteles y apartamentos",
    text: "Disponibilidad, habitaciones, limpieza, reportes, reservaciones y organización interna.",
    icon: Building2,
  },
  {
    title: "Negocios con citas",
    text: "Servicios, agenda, horarios, contacto rápido, recordatorios y automatización básica.",
    icon: CalendarClock,
  },
  {
    title: "Negocios locales",
    text: "Presencia online, Google Maps, WhatsApp, redes sociales y una imagen más profesional.",
    icon: MapPin,
  },
];

export function BusinessTypes() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 px-6 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,122,0,0.13),transparent_42%)]" />

      <div className="relative mx-auto max-w-[90rem]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zam-orange/20 bg-zam-orange/5 px-5 py-2">
              <div className="h-2 w-2 rounded-full bg-zam-orange" />
              <span className="text-sm uppercase tracking-[0.2em] text-zam-orange">
                Soluciones por industria
              </span>
            </div>

            <h2 className="font-heading text-4xl leading-tight text-white md:text-6xl">
              Creamos sistemas para distintos tipos de negocio.
            </h2>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-zinc-400 lg:ml-auto">
            Zamgel Core puede adaptarse a negocios locales, marcas personales,
            comercios, servicios y operaciones que necesitan verse mejor y
            trabajar con más orden.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {businessTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/35 p-6 transition hover:-translate-y-1 hover:border-zam-orange/35"
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,122,0,0.13),transparent_65%)]" />

                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-zam-orange/20 bg-zam-orange/10">
                    <Icon className="h-7 w-7 text-zam-orange" />
                  </div>

                  <h3 className="font-heading text-xl text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {item.text}
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
