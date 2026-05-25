// 📍 Ruta del archivo: src/pages/Planes.tsx

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Crown,
  Gauge,
  Globe,
  LayoutDashboard,
  MonitorSmartphone,
  QrCode,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ParticleBackground } from "../components/visual/ParticleBackground";
import { ContactModal } from "../components/ui/ContactModal";

const starterPlans = [
  {
    name: "Web Inicial",
    price: "$199",
    tag: "Presencia básica",
    icon: Globe,
    description:
      "Para negocios que solo necesitan una página sencilla, moderna y lista para recibir clientes desde internet.",
    includes: [
      "Landing page básica",
      "Diseño responsive",
      "Botón de WhatsApp",
      "Redes sociales",
      "Información del negocio",
      "Optimización móvil básica",
    ],
  },
  {
    name: "Web Profesional",
    price: "$299",
    tag: "Página profesional",
    icon: MonitorSmartphone,
    featured: true,
    description:
      "Para negocios que quieren verse más profesionales con una página mejor estructurada y lista para promocionarse.",
    includes: [
      "Página profesional",
      "Más secciones",
      "Formulario de contacto",
      "Google Maps",
      "WhatsApp integrado",
      "SEO básico",
      "Animaciones ligeras",
    ],
  },
  {
    name: "Web Interactiva",
    price: "$499",
    tag: "Personalizada",
    icon: Sparkles,
    description:
      "Para marcas que quieren una experiencia más visual, interactiva y personalizada para destacar mejor.",
    includes: [
      "Diseño personalizado",
      "Secciones interactivas",
      "Galerías premium",
      "Perfiles o tarjetas dinámicas",
      "Animaciones avanzadas",
      "Experiencia visual más premium",
    ],
  },
];

const plans = [
  {
    name: "Impulso Core",
    before: "$1200",
    offer: "$600",
    tag: "Presencia comercial",
    icon: Store,
    glow: "from-zinc-300/10 via-zam-orange/10 to-transparent",
    description:
      "Para negocios que necesitan una presencia profesional más completa, menú digital, QR y una base sólida para empezar bien.",
    simpleFor:
      "Perfecto para food trucks, negocios pequeños, emprendimientos, servicios locales o negocios que todavía no tienen una presencia digital profesional.",
    includes: [
      "Landing page profesional",
      "Menú digital",
      "Código QR",
      "WhatsApp integrado",
      "Galería de imágenes",
      "Diseño responsive",
      "Hosting en Vercel",
      "Dominio personalizado",
      "Branding básico",
      "Optimización móvil",
    ],
    explanation: [
      {
        icon: Globe,
        title: "Página profesional",
        text: "Una página moderna donde el cliente puede conocer tu negocio, ver tus servicios, horarios, ubicación, fotos y formas de contacto.",
      },
      {
        icon: QrCode,
        title: "Código QR",
        text: "Puedes poner el QR en tarjetas, stickers, mesas, ventanas o redes sociales. El cliente lo escanea y abre tu página o menú.",
      },
      {
        icon: MonitorSmartphone,
        title: "Diseño para celular",
        text: "La mayoría de clientes entra desde el teléfono. Por eso todo queda ajustado para verse bien y cargar rápido en móvil.",
      },
      {
        icon: Sparkles,
        title: "Branding básico",
        text: "Colores, estilo, textos e imagen visual ordenada para que el negocio se vea más serio y confiable.",
      },
    ],
  },
  {
    name: "Negocio Core",
    before: "$2500",
    offer: "$1200",
    tag: "Más vendido",
    icon: LayoutDashboard,
    featured: true,
    glow: "from-zam-orange/30 via-zam-orange/10 to-transparent",
    description:
      "Para negocios que ya venden y necesitan controlar productos, pedidos, clientes y operaciones desde un panel privado.",
    simpleFor:
      "Ideal para food trucks, restaurantes, tiendas, negocios con menú, negocios que reciben pedidos o que quieren empezar a organizar ventas.",
    includes: [
      "Todo lo de Impulso Core",
      "Panel administrativo",
      "Sistema POS",
      "Gestión de productos",
      "Control de pedidos",
      "Inventario básico",
      "Estadísticas",
      "Gestión de clientes",
      "Promociones",
      "Sistema escalable",
      "Dashboard moderno",
    ],
    explanation: [
      {
        icon: LayoutDashboard,
        title: "Panel administrativo",
        text: "Una zona privada para el dueño o encargado. Desde ahí puede modificar productos, precios, imágenes, promociones y datos del negocio.",
      },
      {
        icon: ShoppingCart,
        title: "Sistema POS",
        text: "Sirve para tomar pedidos, calcular totales y manejar ventas de forma más ordenada, sin depender tanto de papel o procesos manuales.",
      },
      {
        icon: Store,
        title: "Productos y menú",
        text: "Puedes agregar, editar, activar o desactivar productos. También ayuda cuando algo se agota o cambia de precio.",
      },
      {
        icon: BarChart3,
        title: "Estadísticas básicas",
        text: "Te ayuda a ver información importante como ventas, actividad, productos populares o comportamiento general del negocio.",
      },
    ],
  },
  {
    name: "Élite Core",
    before: "$3500",
    offer: "$1800",
    tag: "Sistema completo",
    icon: Crown,
    glow: "from-yellow-500/20 via-zam-orange/10 to-transparent",
    description:
      "Para negocios que quieren una plataforma más personalizada, con automatización, IA, pagos, roles, lealtad y herramientas avanzadas.",
    simpleFor:
      "Pensado para negocios que quieren crecer, profesionalizar su operación, manejar empleados, clientes frecuentes y procesos más avanzados.",
    includes: [
      "Todo lo de Negocio Core",
      "Sistema totalmente personalizado",
      "Loyalty / recompensas",
      "Kaizen AI / chatbot IA",
      "Automatizaciones",
      "Multiusuarios",
      "Roles/admins",
      "Analytics avanzados",
      "Integración de pagos",
      "Soporte prioritario",
      "Escalabilidad empresarial",
      "Branding premium",
      "Diseño ultra personalizado",
    ],
    explanation: [
      {
        icon: BrainCircuit,
        title: "Kaizen AI / chatbot IA",
        text: "Un asistente inteligente que puede ayudar a responder preguntas, orientar clientes o automatizar partes de la atención.",
      },
      {
        icon: WalletCards,
        title: "Pagos integrados",
        text: "Preparación para conectar pagos con tarjeta o métodos digitales, dependiendo de las necesidades del negocio.",
      },
      {
        icon: Users,
        title: "Usuarios y roles",
        text: "Puedes separar permisos. Por ejemplo: dueño, administrador, empleado o cajero, cada uno con acceso diferente.",
      },
      {
        icon: Zap,
        title: "Automatizaciones",
        text: "Procesos que reducen trabajo manual, como notificaciones, reportes, respuestas, seguimiento de clientes o tareas repetitivas.",
      },
    ],
  },
];

const advantages = [
  "Sistemas modernos y reales",
  "Casos funcionales reales",
  "Diseño premium",
  "Automatización",
  "Soporte cercano",
  "Actualizaciones",
  "Optimización móvil",
  "Experiencia moderna para clientes",
];

const realProjects = [
  {
    title: "Velázquez Food Truck",
    url: "https://velasquezfoodtruck.com",
    label: "Food truck / sistema comercial",
    description:
      "Proyecto enfocado en modernizar la operación de un food truck real. Se trabajó una presencia web profesional, menú digital, QR, diseño responsive, integración con redes, panel administrativo, productos, POS y una base lista para seguir creciendo con inventario, lealtad y automatizaciones.",
  },
  {
    title: "La Mesa Familiar",
    url: "https://lamesafamiliar.net",
    label: "Plataforma web multijugador",
    description:
      "Plataforma de juegos de mesa digitales con salas online, perfiles, cuentas, rankings, recompensas, personalización, juegos en tiempo real y experiencia familiar desde celular o computadora.",
  },
  {
    title: "Santiel TV",
    url: "https://santieltv.com",
    label: "Landing page / sistema de clientes",
    description:
      "Página tipo landing page para publicitar un negocio de streaming digital, con diseño premium, enfoque comercial, soporte, planes, compatibilidad, sistema de clientes y base administrativa.",
  },
];

const businessExamples = [
  {
    icon: Store,
    title: "Food trucks y restaurantes",
    text: "Menú digital, QR, POS, productos, promociones, pedidos, inventario básico y estadísticas.",
  },
  {
    icon: Crown,
    title: "Joyerías y tiendas",
    text: "Catálogo premium, productos, clientes, promociones, panel privado, galería y presencia profesional.",
  },
  {
    icon: Gauge,
    title: "Hotelería y apartamentos",
    text: "Control de habitaciones, limpieza, disponibilidad, reportes y organización del equipo.",
  },
  {
    icon: Clock3,
    title: "Negocios con citas o servicios",
    text: "Página profesional, contacto rápido, agenda, WhatsApp, información clara y automatización.",
  },
];

export function Planes() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-zam-bg selection:bg-zam-orange selection:text-black">
      <Navbar />

      <main>
        <section className="relative overflow-hidden pt-36 pb-20">
          <ParticleBackground />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,0,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(192,192,195,0.12),transparent_35%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px] opacity-20" />

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-zam-orange/25 bg-zam-orange/10 px-4 py-2 text-xs font-bold tracking-[0.2em] text-zam-orange">
                <Sparkles className="h-4 w-4" />
                PLANES ZAMGEL CORE
              </div>

              <h1 className="font-heading text-5xl font-black leading-tight text-white md:text-7xl">
                Modernizamos{" "}
                <span className="text-zam-orange text-glow-orange">
                  negocios reales.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-zam-silver/80 md:text-xl">
                Desde páginas web accesibles hasta sistemas completos con POS,
                inventario, lealtad, automatización e IA.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#planes"
                  className="group flex items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#FFA133] to-[#FF5A00] px-8 py-4 text-sm font-black tracking-[0.16em] text-black transition hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,122,0,0.35)]"
                >
                  VER PLANES
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="#casos"
                  className="flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 text-sm font-bold tracking-[0.16em] text-white transition hover:border-zam-orange/40 hover:bg-white/[0.06]"
                >
                  VER CASOS REALES
                </a>
              </div>

              <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
                {["Páginas starter", "Web premium", "Sistemas reales"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm font-bold text-zam-silver/80 backdrop-blur-xl"
                    >
                      <CheckCircle2 className="mb-3 h-5 w-5 text-zam-orange" />
                      {item}
                    </div>
                  ),
                )}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="planes" className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-zam-orange">
                Planes starter
              </p>
              <h2 className="mt-4 font-heading text-4xl font-black text-white md:text-5xl">
                Entrada económica para comenzar online
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-zam-silver/70">
                Opciones accesibles para negocios que necesitan una página
                rápida, moderna y lista para promocionarse.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {starterPlans.map((plan, index) => {
                const Icon = plan.icon;

                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative overflow-hidden rounded-[2rem] border ${
                      plan.featured
                        ? "border-zam-orange/60 bg-zam-orange/[0.08] shadow-[0_0_45px_rgba(255,122,0,0.2)]"
                        : "border-white/10 bg-white/[0.03]"
                    } p-7 backdrop-blur-xl`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,0,0.18),transparent_38%)]" />

                    <div className="relative">
                      <div className="mb-6 flex items-center justify-between">
                        <div className="rounded-2xl border border-white/10 bg-black/35 p-3">
                          <Icon className="h-7 w-7 text-zam-orange" />
                        </div>

                        <span className="rounded-full border border-zam-orange/30 bg-zam-orange/10 px-3 py-1 text-xs font-bold text-zam-orange">
                          {plan.tag}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl font-black text-white">
                        {plan.name}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-zam-silver/70">
                        {plan.description}
                      </p>

                      <div className="mt-6">
                        <p className="text-sm text-zam-orange">Desde</p>
                        <p className="mt-1 text-4xl font-black text-white">
                          {plan.price}{" "}
                          <span className="text-base text-zam-silver/60">
                            USD
                          </span>
                        </p>
                      </div>

                      <div className="mt-8 space-y-3">
                        {plan.includes.map((item) => (
                          <div key={item} className="flex gap-3 text-sm">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-zam-orange" />
                            <span className="text-zam-silver/85">{item}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsContactOpen(true)}
                        className="mt-9 flex w-full items-center justify-center rounded-full border border-white/10 bg-white py-4 text-xs font-black tracking-[0.18em] text-black transition hover:bg-zam-orange hover:shadow-[0_0_30px_rgba(255,122,0,0.35)]"
                      >
                        SOLICITAR PLAN
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <p className="mt-8 text-center text-xs uppercase tracking-[0.25em] text-zam-silver/40">
              Los planes starter no incluyen sistemas, paneles administrativos,
              pagos, login ni backend personalizado.
            </p>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-zam-orange">
                Soluciones premium
              </p>
              <h2 className="mt-4 font-heading text-4xl font-black text-white md:text-5xl">
                Sistemas para negocios que quieren crecer
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-zam-silver/70">
                Paquetes más completos para negocios que necesitan operación,
                control, automatización y herramientas reales.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {plans.map((plan, index) => {
                const Icon = plan.icon;

                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    className={`relative overflow-hidden rounded-[2rem] border ${
                      plan.featured
                        ? "border-zam-orange/60 shadow-[0_0_55px_rgba(255,122,0,0.25)]"
                        : "border-white/10"
                    } bg-black/40 p-7 backdrop-blur-xl`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${plan.glow}`}
                    />

                    <div className="relative">
                      <div className="mb-6 flex items-center justify-between">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                          <Icon className="h-7 w-7 text-zam-orange" />
                        </div>

                        <span className="rounded-full border border-zam-orange/30 bg-zam-orange/10 px-3 py-1 text-xs font-bold text-zam-orange">
                          {plan.tag}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl font-black text-white">
                        {plan.name}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-zam-silver/70">
                        {plan.description}
                      </p>

                      <div className="mt-5">
                        <p className="text-sm text-zam-silver/40 line-through">
                          Antes: {plan.before} USD
                        </p>
                        <p className="mt-1 text-4xl font-black text-white">
                          Desde {plan.offer} USD
                        </p>
                        <p className="mt-1 text-sm text-zam-orange">
                          + mantenimiento mensual
                        </p>
                      </div>

                      <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-zam-orange">
                          Recomendado para
                        </p>
                        <p className="mt-3 text-sm leading-7 text-zam-silver/75">
                          {plan.simpleFor}
                        </p>
                      </div>

                      <div className="mt-8 space-y-3">
                        {plan.includes.map((item) => (
                          <div key={item} className="flex gap-3 text-sm">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-zam-orange" />
                            <span className="text-zam-silver/85">{item}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsContactOpen(true)}
                        className="mt-9 flex w-full items-center justify-center rounded-full border border-white/10 bg-white py-4 text-xs font-black tracking-[0.18em] text-black transition hover:bg-zam-orange hover:shadow-[0_0_30px_rgba(255,122,0,0.35)]"
                      >
                        SOLICITAR SOLUCIÓN
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <p className="mt-8 text-center text-xs uppercase tracking-[0.25em] text-zam-silver/40">
              Todos los precios están expresados en USD. El alcance final puede
              variar según necesidades del negocio.
            </p>
          </div>
        </section>

        <section id="detalles" className="px-6 py-24 scroll-mt-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-zam-orange">
                Explicado fácil
              </p>

              <h2 className="mt-4 font-heading text-4xl font-black text-white md:text-5xl">
                ¿Qué significa cada solución premium?
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-zam-silver/70">
                Esta sección está pensada para dueños de negocio que no quieren
                tecnicismos. Aquí se explica qué hace cada herramienta y por qué
                puede ayudar.
              </p>
            </div>

            <div className="space-y-8">
              {plans.map((plan) => {
                const PlanIcon = plan.icon;

                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 md:p-8"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${plan.glow} opacity-60`}
                    />

                    <div className="relative">
                      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-4">
                          <div className="rounded-2xl border border-white/10 bg-black/40 p-3">
                            <PlanIcon className="h-7 w-7 text-zam-orange" />
                          </div>

                          <div>
                            <h3 className="font-heading text-3xl font-black text-white">
                              {plan.name}
                            </h3>

                            <p className="mt-1 max-w-3xl text-zam-silver/70">
                              {plan.description}
                            </p>
                          </div>
                        </div>

                        <div className="rounded-full border border-zam-orange/30 bg-zam-orange/10 px-4 py-2 text-sm font-black text-zam-orange">
                          Desde {plan.offer}
                        </div>
                      </div>

                      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {plan.explanation.map((item) => {
                          const ItemIcon = item.icon;

                          return (
                            <div
                              key={item.title}
                              className="rounded-2xl border border-white/10 bg-black/30 p-6"
                            >
                              <ItemIcon className="mb-5 h-8 w-8 text-zam-orange" />

                              <h4 className="text-lg font-black text-white">
                                {item.title}
                              </h4>

                              <p className="mt-3 text-sm leading-7 text-zam-silver/70">
                                {item.text}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-zam-orange">
                  ¿Por qué Zamgel Core?
                </p>
                <h2 className="mt-4 font-heading text-4xl font-black text-white">
                  Tecnología real para negocios reales.
                </h2>
                <p className="mt-5 text-zam-silver/70">
                  Creamos sistemas funcionales, visuales y escalables para que
                  los negocios locales vendan mejor, trabajen mejor y se vean
                  más profesionales.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {advantages.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/30 p-5"
                  >
                    <Zap className="mb-3 h-5 w-5 text-zam-orange" />
                    <p className="font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="casos" className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-zam-orange">
                Casos reales
              </p>

              <h2 className="mt-4 font-heading text-4xl font-black text-white md:text-5xl">
                Proyectos desarrollados
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-zam-silver/70">
                Estos proyectos sirven como referencia para mostrar que Zamgel
                Core no solo vende diseños bonitos: construye sistemas reales.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {realProjects.map((project) => (
                <div
                  key={project.title}
                  className="group rounded-[2rem] border border-white/10 bg-zam-surface/40 p-7 transition hover:border-zam-orange/40 hover:shadow-[0_0_35px_rgba(255,122,0,0.16)]"
                >
                  <ShieldCheck className="mb-7 h-8 w-8 text-zam-orange" />

                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-zam-orange">
                    {project.label}
                  </p>

                  <h3 className="font-heading text-2xl font-black text-white">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-zam-silver/70">
                    {project.description}
                  </p>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-zam-orange hover:underline"
                  >
                    Visitar página
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-zam-orange">
                Aplicaciones reales
              </p>

              <h2 className="mt-4 font-heading text-4xl font-black text-white md:text-5xl">
                Sistemas para distintos negocios
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {businessExamples.map((example) => {
                const ExampleIcon = example.icon;

                return (
                  <div
                    key={example.title}
                    className="rounded-[2rem] border border-white/10 bg-black/30 p-6 transition hover:border-zam-orange/40"
                  >
                    <ExampleIcon className="mb-6 h-8 w-8 text-zam-orange" />

                    <h3 className="font-heading text-xl font-black text-white">
                      {example.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-zam-silver/70">
                      {example.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contacto" className="relative px-6 py-24 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,0,0.16),transparent_35%)]" />

          <div className="relative mx-auto max-w-4xl">
            <Bot className="mx-auto mb-5 h-11 w-11 text-zam-orange" />

            <h2 className="font-heading text-4xl font-black text-white md:text-5xl">
              Tu negocio también puede verse así.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-zam-silver/70">
              Zamgel Core crea páginas, sistemas y soluciones premium para
              negocios locales que quieren verse modernos, vender mejor y operar
              con más control.
            </p>

            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-zam-orange px-8 py-4 text-sm font-black tracking-[0.16em] text-black transition hover:scale-[1.02] hover:bg-zam-glow hover:shadow-[0_0_35px_rgba(255,122,0,0.28)]"
            >
              EMPEZAR MI PROYECTO
              <Rocket className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <div className="fixed bottom-0 left-0 z-50 h-1 w-full glow-line opacity-50 pointer-events-none" />
    </div>
  );
}
