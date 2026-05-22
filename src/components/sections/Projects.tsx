// 📍 Ruta del archivo: src/components/sections/Projects.tsx

import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Bot,
  CheckCircle2,
  Gamepad2,
  Globe,
  LayoutDashboard,
  MonitorPlay,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Trophy,
  Users,
  Utensils,
  Zap,
} from "lucide-react";

const velasquezHighlights = [
  "Landing premium con presencia digital real",
  "Menú digital optimizado para móvil",
  "Ubicación, llamadas y WhatsApp integrados",
  "Base para pedidos y experiencia tipo app",
  "POS interno para tomar órdenes y operar mejor",
  "Panel administrativo preparado para crecer",
];

const lmfHighlights = [
  "Plataforma web con salas multijugador",
  "Configuración de juegos, variantes y tipo de sala",
  "Perfiles, niveles, puntos, ranking y progreso",
  "Cosméticos, avatares y experiencia gamificada",
  "Juegos familiares sincronizados en tiempo real",
  "Arquitectura preparada para agregar más juegos",
];

const compactProjects = [
  {
    icon: MonitorPlay,
    name: "Santiel TV",
    url: "https://santieltv.com",
    type: "Landing + portal",
    status: "Sistema comercial",
    description:
      "Landing page premium para publicitar un negocio de streaming digital, con portal de clientes, panel administrativo y estructura comercial enfocada en conversión.",
    solved: [
      "Landing moderna para promocionar servicios",
      "Portal de clientes con acceso privado",
      "Panel administrativo para usuarios",
      "Branding visual premium",
      "Base para ecosistema web + apps",
    ],
    metrics: [
      { label: "Objetivo", value: "Conversión" },
      { label: "Sistema", value: "Portal + Admin" },
      { label: "Marca", value: "Premium" },
    ],
    tags: ["React", "Netlify", "Supabase", "Admin", "Landing"],
    accent: "from-yellow-500/20 via-orange-500/10 to-transparent",
  },
];

const capabilities = [
  {
    icon: Globe,
    title: "Presencia digital real",
    text: "Páginas modernas que explican qué vende tu negocio, cómo contactarte y por qué confiar en ti.",
  },
  {
    icon: LayoutDashboard,
    title: "Paneles administrativos",
    text: "Herramientas privadas para controlar productos, clientes, pedidos, contenido y operación.",
  },
  {
    icon: ShoppingCart,
    title: "POS y pedidos",
    text: "Bases para tomar órdenes, gestionar productos y preparar el negocio para vender mejor.",
  },
  {
    icon: BarChart3,
    title: "Datos y estadísticas",
    text: "Información útil para entender ventas, actividad, clientes y crecimiento del sistema.",
  },
  {
    icon: Bot,
    title: "Automatización e IA",
    text: "Procesos inteligentes para ahorrar tiempo, responder mejor y reducir trabajo manual.",
  },
  {
    icon: ShieldCheck,
    title: "Escalabilidad",
    text: "Sistemas pensados para empezar simple y crecer con más módulos, usuarios y funciones.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Analizamos el negocio",
    text: "Entendemos qué vendes, cómo trabajas y qué problema real debe resolver el sistema.",
  },
  {
    step: "02",
    title: "Diseñamos la solución",
    text: "Definimos estructura, pantallas, experiencia del cliente y herramientas internas.",
  },
  {
    step: "03",
    title: "Construimos el sistema",
    text: "Desarrollamos la página, paneles, funciones, base de datos e integraciones necesarias.",
  },
  {
    step: "04",
    title: "Lanzamos y mejoramos",
    text: "Publicamos, revisamos, corregimos detalles y dejamos la base lista para seguir creciendo.",
  },
];

export function Projects() {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden border-t border-white/5 px-6 py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,0,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] opacity-50" />

      <div className="relative mx-auto max-w-[90rem]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zam-orange/20 bg-zam-orange/5 px-5 py-2">
              <Sparkles className="h-4 w-4 text-zam-orange" />
              <span className="text-sm uppercase tracking-[0.2em] text-zam-orange">
                Casos reales
              </span>
            </div>

            <h2 className="max-w-4xl font-heading text-4xl leading-[1.06] text-white lg:text-6xl">
              Proyectos que convierten una idea en un sistema real.
            </h2>
          </div>

          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400 lg:ml-auto">
            Zamgel Core no solo diseña páginas bonitas. Construimos presencia
            digital, paneles, herramientas internas y plataformas que ayudan a
            negocios reales a operar mejor.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="group relative mb-10 overflow-hidden rounded-[2.2rem] border border-zam-orange/25 bg-black/55 p-5 shadow-[0_0_70px_rgba(255,90,0,0.12)] backdrop-blur-xl md:p-8 lg:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,60,0,0.22),transparent_34%),radial-gradient(circle_at_82%_35%,rgba(255,122,0,0.18),transparent_30%)]" />
          <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-zam-orange/20 blur-3xl transition duration-700 group-hover:bg-zam-orange/30" />
          <div className="absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-red-600/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zam-orange/25 bg-zam-orange/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-zam-orange">
                <Utensils className="h-4 w-4" />
                Caso destacado
              </div>

              <h3 className="font-heading text-4xl leading-tight text-white md:text-5xl">
                Velázquez Food Truck
              </h3>

              <p className="mt-5 text-lg leading-8 text-zinc-300">
                Sistema web moderno para un food truck real en Houston:
                presencia digital, menú, ubicación, experiencia móvil y una
                base operativa con POS para tomar órdenes.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Enfoque", value: "Ventas + operación" },
                  { label: "Cliente", value: "Negocio local" },
                  { label: "Sistema", value: "Web + POS" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-black/35 p-4"
                  >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-black text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-zinc-500">
                  Qué resolvimos
                </p>

                {velasquezHighlights.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-zam-orange" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "React",
                  "Supabase",
                  "POS",
                  "Menú digital",
                  "QR",
                  "Mobile UX",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://velasquezfoodtruck.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-zam-orange/40 bg-zam-orange/10 px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-zam-orange transition hover:bg-zam-orange hover:text-black hover:shadow-[0_0_34px_rgba(255,122,0,0.3)]"
                >
                  Ver proyecto
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="/#planes"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:bg-zam-orange"
                >
                  Ver planes
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="relative min-h-[34rem] lg:min-h-[39rem]">
              <div className="absolute -left-6 top-4 hidden h-40 w-40 rounded-full bg-red-600/20 blur-3xl md:block" />
              <div className="absolute right-8 top-10 h-52 w-52 rounded-full bg-zam-orange/20 blur-3xl" />

              <div className="relative mx-auto max-w-4xl rounded-[1.7rem] border border-white/10 bg-[#070707] p-3 shadow-2xl">
                <div className="mb-3 flex items-center gap-2 px-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-xs text-zinc-500">
                    velasquezfoodtruck.com
                  </span>
                </div>

                <img
                  src="/showcase/velasquez/vft_home.png"
                  alt="Velázquez Food Truck landing page"
                  className="h-full w-full rounded-[1.25rem] border border-white/5 object-cover"
                />
              </div>

              <div className="absolute bottom-4 left-2 max-w-[30rem] rounded-[1.25rem] border border-zam-orange/20 bg-black/75 p-3 shadow-[0_0_45px_rgba(255,122,0,0.18)] backdrop-blur-xl md:left-8 md:w-[45%]">
                <div className="mb-3 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-zam-orange">
                    <ShoppingCart className="h-4 w-4" />
                    POS interno
                  </div>
                  <span className="rounded-full bg-zam-orange px-2 py-1 text-[10px] font-black text-black">
                    Live
                  </span>
                </div>
                <img
                  src="/showcase/velasquez/vft_pos.png"
                  alt="Velázquez POS interno"
                  className="rounded-xl border border-white/5 object-cover"
                />
              </div>

              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-7, 7, -7] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-2 right-2 w-[11rem] overflow-hidden rounded-[1.8rem] border border-white/10 bg-black p-2 shadow-[0_0_60px_rgba(255,90,0,0.22)] md:bottom-6 md:right-8 md:w-[13rem] lg:w-[15rem]"
              >
                <img
                  src="/showcase/velasquez/movil_home.jpeg"
                  alt="Velázquez móvil"
                  className="rounded-[1.35rem] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="group relative mb-10 overflow-hidden rounded-[2.2rem] border border-orange-400/20 bg-black/55 p-5 shadow-[0_0_70px_rgba(255,122,0,0.10)] backdrop-blur-xl md:p-8 lg:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,122,0,0.18),transparent_34%),radial-gradient(circle_at_78%_35%,rgba(138,92,246,0.16),transparent_30%),radial-gradient(circle_at_55%_80%,rgba(34,211,238,0.10),transparent_34%)]" />
          <div className="absolute -right-28 top-20 h-80 w-80 rounded-full bg-purple-600/15 blur-3xl transition duration-700 group-hover:bg-purple-500/20" />
          <div className="absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-zam-orange/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.14fr_0.86fr] lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="relative min-h-[34rem] lg:min-h-[40rem]">
                <div className="relative mx-auto max-w-4xl rounded-[1.7rem] border border-white/10 bg-[#070707] p-3 shadow-2xl">
                  <div className="mb-3 flex items-center gap-2 px-2">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="ml-3 text-xs text-zinc-500">
                      lamesafamiliar.net
                    </span>
                  </div>

                  <img
                    src="/showcase/lamesa/lamesa_salas.png"
                    alt="La Mesa Familiar sala multijugador"
                    className="h-full w-full rounded-[1.25rem] border border-white/5 object-cover"
                  />
                </div>

                <div className="absolute bottom-3 left-2 max-w-[31rem] rounded-[1.25rem] border border-cyan-400/20 bg-black/75 p-3 shadow-[0_0_45px_rgba(34,211,238,0.12)] backdrop-blur-xl md:left-7 md:w-[47%]">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                      <Trophy className="h-4 w-4" />
                      Perfil + progreso
                    </div>
                    <span className="rounded-full bg-cyan-300 px-2 py-1 text-[10px] font-black text-black">
                      Stats
                    </span>
                  </div>
                  <img
                    src="/showcase/lamesa/lamesa_perfil.png"
                    alt="La Mesa Familiar perfil y progreso"
                    className="rounded-xl border border-white/5 object-cover"
                  />
                </div>

                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-7, 7, -7] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-0 right-2 w-[11rem] overflow-hidden rounded-[1.8rem] border border-white/10 bg-black p-2 shadow-[0_0_60px_rgba(255,122,0,0.18)] md:bottom-6 md:right-8 md:w-[13rem] lg:w-[15rem]"
                >
                  <img
                    src="/showcase/lamesa/loteria_game.jpeg"
                    alt="La Mesa Familiar Lotería móvil"
                    className="rounded-[1.35rem] object-cover"
                  />
                </motion.div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zam-orange/25 bg-zam-orange/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-zam-orange">
                <Gamepad2 className="h-4 w-4" />
                Plataforma propia
              </div>

              <h3 className="font-heading text-4xl leading-tight text-white md:text-5xl">
                La Mesa Familiar
              </h3>

              <p className="mt-5 text-lg leading-8 text-zinc-300">
                Plataforma web de juegos de mesa digitales para familias y
                amigos, con salas online, perfiles, rankings, recompensas,
                cosméticos y sincronización en tiempo real.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Tipo", value: "SaaS / Gaming" },
                  { label: "Modo", value: "Multiplayer" },
                  { label: "Core", value: "Realtime" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-black/35 p-4"
                  >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-black text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-zinc-500">
                  Qué resolvimos
                </p>

                {lmfHighlights.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-zam-orange" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "Supabase",
                  "Realtime",
                  "Auth",
                  "Gaming",
                  "Profiles",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://lamesafamiliar.net"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-zam-orange/40 bg-zam-orange/10 px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-zam-orange transition hover:bg-zam-orange hover:text-black hover:shadow-[0_0_34px_rgba(255,122,0,0.3)]"
                >
                  Ver proyecto
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="/#planes"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:bg-zam-orange"
                >
                  Ver planes
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="grid gap-6 lg:grid-cols-1">
          {compactProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/45 p-8 transition-all duration-500 hover:border-zam-orange/35 hover:shadow-[0_0_55px_rgba(255,122,0,0.12)]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-zam-orange/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                  <div>
                    <div className="mb-7 flex items-center justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-zam-orange/25 bg-zam-orange/10">
                        <Icon className="h-7 w-7 text-zam-orange" />
                      </div>

                      <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black text-zinc-300">
                        {project.status}
                      </span>
                    </div>

                    <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zam-orange">
                      {project.type}
                    </p>

                    <h3 className="mb-5 font-heading text-3xl text-white md:text-4xl">
                      {project.name}
                    </h3>

                    <p className="text-base leading-8 text-zinc-400">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="mb-7 grid gap-3 sm:grid-cols-3">
                      {project.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-white/10 bg-black/30 p-4"
                        >
                          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                            {metric.label}
                          </p>
                          <p className="mt-2 text-sm font-black text-white">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mb-7 space-y-3">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                        Qué resolvimos
                      </p>
                      {project.solved.map((item) => (
                        <div
                          key={item}
                          className="flex gap-3 text-sm text-zinc-300"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-zam-orange" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-8 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-zam-orange/30 bg-zam-orange/10 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-zam-orange transition hover:bg-zam-orange hover:text-black hover:shadow-[0_0_32px_rgba(255,122,0,0.25)]"
                    >
                      Ver proyecto
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 md:p-10"
        >
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zam-orange/20 bg-zam-orange/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-zam-orange">
                <BadgeCheck className="h-4 w-4" />
                Capacidades
              </div>
              <h3 className="font-heading text-3xl text-white md:text-4xl">
                Lo que estos proyectos demuestran
              </h3>
            </div>

            <a
              href="/#planes"
              className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:bg-zam-orange"
            >
              Ver planes
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-black/35 p-5 transition hover:border-zam-orange/30"
                >
                  <Icon className="mb-4 h-6 w-6 text-zam-orange" />
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mt-10 rounded-[2rem] border border-zam-orange/20 bg-[linear-gradient(135deg,rgba(255,122,0,0.12),rgba(255,255,255,0.025))] p-7 md:p-10"
        >
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-zam-orange">
              Proceso de trabajo
            </p>
            <h3 className="font-heading text-3xl text-white md:text-4xl">
              De la idea al sistema completo.
            </h3>
            <p className="mt-4 text-zinc-400">
              Trabajamos por etapas para que el cliente entienda qué se está
              construyendo y para que cada módulo tenga un objetivo real.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-6"
              >
                <p className="mb-6 font-heading text-4xl text-zam-orange/60">
                  {item.step}
                </p>
                <h4 className="font-black text-white">{item.title}</h4>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
