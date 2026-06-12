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
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Trophy,
  Tv,
  Utensils,
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

const santielHighlights = [
  "Landing premium enfocada en conversión",
  "Catálogo, planes, compatibilidad y soporte comercial",
  "Portal de clientes con acceso privado",
  "Panel super admin para gestionar usuarios",
  "Sistema de planes, demos, vencimientos y bloqueos",
  "Base preparada para ecosistema web + apps",
];

const txsHighlights = [
  "Portal público premium para academia y eventos",
  "Dashboard administrativo con métricas operativas",
  "Control de alumnos, grupos, pagos y membresías",
  "Seguimiento de asistencia, evaluaciones y reportes",
  "Gestión de vencimientos y próximos pagos",
  "Base preparada para TXS Social y módulos futuros",
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

function BrowserDots({ label }: { label: string }) {
  return (
    <div className="mb-3 flex items-center gap-2 px-2">
      <span className="h-3 w-3 rounded-full bg-red-500" />
      <span className="h-3 w-3 rounded-full bg-yellow-500" />
      <span className="h-3 w-3 rounded-full bg-green-500" />
      <span className="ml-3 truncate text-xs text-zinc-500">{label}</span>
    </div>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
      <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </p>
      <p className="mt-2 text-sm font-black text-white">{value}</p>
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs text-zinc-400">
      {children}
    </span>
  );
}

function PrimaryProjectButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-3 rounded-full border border-zam-orange/30 bg-zam-orange/10 px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-zam-orange transition hover:bg-zam-orange hover:text-black hover:shadow-[0_0_32px_rgba(255,122,0,0.25)]"
    >
      Ver proyecto
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

function PlansButton() {
  return (
    <a
      href="/#planes"
      className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:bg-zam-orange"
    >
      Ver planes
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function HighlightsList({ items }: { items: string[] }) {
  return (
    <div className="mt-7 space-y-3 lg:mt-8">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-zinc-500">
        Qué resolvimos
      </p>

      {items.map((item) => (
        <div key={item} className="flex gap-3 text-sm text-zinc-300">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-zam-orange" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function MobileImageCard({
  label,
  src,
  alt,
  className = "aspect-[16/10]",
  objectClassName = "object-cover object-top",
}: {
  label: string;
  src: string;
  alt: string;
  className?: string;
  objectClassName?: string;
}) {
  return (
    <div className="rounded-[1.35rem] border border-white/10 bg-[#070707] p-2 shadow-[0_0_35px_rgba(255,122,0,0.10)]">
      <p className="mb-2 px-1 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500">
        {label}
      </p>
      <div
        className={`overflow-hidden rounded-[1rem] border border-white/5 ${className}`}
      >
        <img
          src={src}
          alt={alt}
          className={`h-full w-full ${objectClassName}`}
        />
      </div>
    </div>
  );
}

function MobileStackShowcase({
  domain,
  primarySrc,
  primaryAlt,
  secondaryLabel,
  secondarySrc,
  secondaryAlt,
  mobileLabel,
  mobileSrc,
  mobileAlt,
}: {
  domain: string;
  primarySrc: string;
  primaryAlt: string;
  secondaryLabel: string;
  secondarySrc: string;
  secondaryAlt: string;
  mobileLabel: string;
  mobileSrc: string;
  mobileAlt: string;
}) {
  return (
    <div className="mt-8 space-y-3 lg:hidden">
      <div className="rounded-[1.55rem] border border-white/10 bg-[#070707] p-3 shadow-2xl">
        <BrowserDots label={domain} />
        <img
          src={primarySrc}
          alt={primaryAlt}
          className="w-full rounded-[1.15rem] border border-white/5 object-cover object-top"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <MobileImageCard
          label={secondaryLabel}
          src={secondarySrc}
          alt={secondaryAlt}
          className="aspect-[4/3]"
        />
        <MobileImageCard
          label={mobileLabel}
          src={mobileSrc}
          alt={mobileAlt}
          className="aspect-[4/3]"
        />
      </div>
    </div>
  );
}

function DesktopShowcase({
  domain,
  primarySrc,
  primaryAlt,
  secondaryLabel,
  secondaryBadge,
  secondaryIcon,
  secondarySrc,
  secondaryAlt,
  mobileSrc,
  mobileAlt,
  accent = "orange",
}: {
  domain: string;
  primarySrc: string;
  primaryAlt: string;
  secondaryLabel: string;
  secondaryBadge: string;
  secondaryIcon: React.ReactNode;
  secondarySrc: string;
  secondaryAlt: string;
  mobileSrc: string;
  mobileAlt: string;
  accent?: "orange" | "cyan" | "yellow";
}) {
  const accentClasses = {
    orange: {
      border: "md:border-zam-orange/20",
      shadow: "md:shadow-[0_0_45px_rgba(255,122,0,0.18)]",
      text: "text-zam-orange",
      badge: "bg-zam-orange text-black",
      phoneShadow: "shadow-[0_0_60px_rgba(255,90,0,0.22)]",
    },
    cyan: {
      border: "md:border-cyan-400/20",
      shadow: "md:shadow-[0_0_45px_rgba(34,211,238,0.12)]",
      text: "text-cyan-300",
      badge: "bg-cyan-300 text-black",
      phoneShadow: "shadow-[0_0_60px_rgba(34,211,238,0.15)]",
    },
    yellow: {
      border: "md:border-yellow-400/20",
      shadow: "md:shadow-[0_0_45px_rgba(250,204,21,0.14)]",
      text: "text-yellow-400",
      badge: "bg-yellow-400 text-black",
      phoneShadow: "shadow-[0_0_60px_rgba(250,204,21,0.18)]",
    },
  }[accent];

  return (
    <div className="relative hidden lg:block lg:min-h-[40rem]">
      <div className="absolute -left-6 top-4 hidden h-40 w-40 rounded-full bg-zam-orange/15 blur-3xl md:block" />
      <div className="absolute right-8 top-10 hidden h-52 w-52 rounded-full bg-white/10 blur-3xl md:block" />

      <div className="relative mx-auto max-w-4xl rounded-[1.7rem] border border-white/10 bg-[#070707] p-3 shadow-2xl">
        <BrowserDots label={domain} />
        <img
          src={primarySrc}
          alt={primaryAlt}
          className="w-full rounded-[1.25rem] border border-white/5 object-cover"
        />
      </div>

      <div
        className={`absolute bottom-4 left-8 w-[52%] max-w-[34rem] rounded-[1.25rem] border bg-black/75 p-3 backdrop-blur-xl ${accentClasses.border} ${accentClasses.shadow}`}
      >
        <div className="mb-3 flex items-center justify-between">
          <div
            className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] ${accentClasses.text}`}
          >
            {secondaryIcon}
            {secondaryLabel}
          </div>
          <span
            className={`rounded-full px-2 py-1 text-[10px] font-black ${accentClasses.badge}`}
          >
            {secondaryBadge}
          </span>
        </div>
        <img
          src={secondarySrc}
          alt={secondaryAlt}
          className="rounded-xl border border-white/5 object-cover"
        />
      </div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-7, 7, -7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute bottom-6 right-8 block w-[15rem] overflow-hidden rounded-[1.8rem] border border-white/10 bg-black p-2 ${accentClasses.phoneShadow}`}
      >
        <img
          src={mobileSrc}
          alt={mobileAlt}
          className="rounded-[1.35rem] object-cover"
        />
      </motion.div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden border-t border-white/5 px-4 py-20 sm:px-6 lg:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,0,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] opacity-50" />

      <div className="relative mx-auto max-w-[90rem]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mb-10 grid gap-6 lg:mb-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-end"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zam-orange/20 bg-zam-orange/5 px-4 py-2 sm:px-5">
              <Sparkles className="h-4 w-4 text-zam-orange" />
              <span className="text-xs uppercase tracking-[0.2em] text-zam-orange sm:text-sm">
                Casos reales
              </span>
            </div>

            <h2 className="max-w-4xl font-heading text-3xl leading-[1.06] text-white sm:text-4xl lg:text-6xl">
              Proyectos que convierten una idea en un sistema real.
            </h2>
          </div>

          <p className="max-w-3xl text-sm leading-7 text-zinc-400 sm:text-lg lg:ml-auto">
            Zamgel Core no solo diseña páginas bonitas. Construimos presencia
            digital, paneles, herramientas internas y plataformas que ayudan a
            negocios reales a operar mejor.
          </p>
        </motion.div>

        {/* VELÁZQUEZ FOOD TRUCK */}
        <motion.article
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="group relative mb-7 overflow-hidden rounded-[1.7rem] border border-zam-orange/25 bg-black/55 p-5 shadow-[0_0_70px_rgba(255,90,0,0.12)] backdrop-blur-xl md:p-8 lg:mb-8 lg:rounded-[2.2rem] lg:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,60,0,0.22),transparent_34%),radial-gradient(circle_at_82%_35%,rgba(255,122,0,0.18),transparent_30%)]" />
          <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-zam-orange/20 blur-3xl transition duration-700 group-hover:bg-zam-orange/30" />
          <div className="absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-red-600/15 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-10">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zam-orange/25 bg-zam-orange/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-zam-orange sm:text-xs">
                <Utensils className="h-4 w-4" />
                Caso destacado
              </div>

              <h3 className="font-heading text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
                Velázquez Food Truck
              </h3>

              <p className="mt-5 text-sm leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                Sistema web moderno para un food truck real en Houston:
                presencia digital, menú, ubicación, experiencia móvil y una base
                operativa con POS para tomar órdenes.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:mt-7">
                <StatPill label="Enfoque" value="Ventas + operación" />
                <StatPill label="Cliente" value="Negocio local" />
                <StatPill label="Sistema" value="Web + POS" />
              </div>

              <HighlightsList items={velasquezHighlights} />

              <div className="mt-7 flex flex-wrap gap-2 lg:mt-8">
                {[
                  "React",
                  "Supabase",
                  "POS",
                  "Menú digital",
                  "QR",
                  "Mobile UX",
                ].map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-9">
                <PrimaryProjectButton href="https://velasquezfoodtruck.com" />
                <PlansButton />
              </div>

              <MobileStackShowcase
                domain="velasquezfoodtruck.com"
                primarySrc="/showcase/velasquez/vft_home.png"
                primaryAlt="Velázquez Food Truck landing page"
                secondaryLabel="POS interno"
                secondarySrc="/showcase/velasquez/vft_pos.png"
                secondaryAlt="Velázquez POS interno"
                mobileLabel="Móvil"
                mobileSrc="/showcase/velasquez/movil_home.jpeg"
                mobileAlt="Velázquez móvil"
              />
            </div>

            <DesktopShowcase
              domain="velasquezfoodtruck.com"
              primarySrc="/showcase/velasquez/vft_home.png"
              primaryAlt="Velázquez Food Truck landing page"
              secondaryLabel="POS interno"
              secondaryBadge="Live"
              secondaryIcon={<ShoppingCart className="h-4 w-4" />}
              secondarySrc="/showcase/velasquez/vft_pos.png"
              secondaryAlt="Velázquez POS interno"
              mobileSrc="/showcase/velasquez/movil_home.jpeg"
              mobileAlt="Velázquez móvil"
              accent="orange"
            />
          </div>
        </motion.article>

        {/* LA MESA FAMILIAR */}
        <motion.article
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="group relative mb-7 overflow-hidden rounded-[1.7rem] border border-orange-400/20 bg-black/55 p-5 shadow-[0_0_70px_rgba(255,122,0,0.10)] backdrop-blur-xl md:p-8 lg:mb-8 lg:rounded-[2.2rem] lg:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,122,0,0.18),transparent_34%),radial-gradient(circle_at_78%_35%,rgba(138,92,246,0.16),transparent_30%),radial-gradient(circle_at_55%_80%,rgba(34,211,238,0.10),transparent_34%)]" />
          <div className="absolute -right-28 top-20 h-80 w-80 rounded-full bg-purple-600/15 blur-3xl transition duration-700 group-hover:bg-purple-500/20" />
          <div className="absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-zam-orange/15 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.14fr_0.86fr] lg:items-center lg:gap-10">
            <div className="order-2 lg:order-1">
              <DesktopShowcase
                domain="lamesafamiliar.net"
                primarySrc="/showcase/lamesa/lamesa_salas.png"
                primaryAlt="La Mesa Familiar sala multijugador"
                secondaryLabel="Perfil + progreso"
                secondaryBadge="Stats"
                secondaryIcon={<Trophy className="h-4 w-4" />}
                secondarySrc="/showcase/lamesa/lamesa_perfil.png"
                secondaryAlt="La Mesa Familiar perfil y progreso"
                mobileSrc="/showcase/lamesa/loteria_game.jpeg"
                mobileAlt="La Mesa Familiar Lotería móvil"
                accent="cyan"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zam-orange/25 bg-zam-orange/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-zam-orange sm:text-xs">
                <Gamepad2 className="h-4 w-4" />
                Plataforma propia
              </div>

              <h3 className="font-heading text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
                La Mesa Familiar
              </h3>

              <p className="mt-5 text-sm leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                Plataforma web de juegos de mesa digitales para familias y
                amigos, con salas online, perfiles, rankings, recompensas,
                cosméticos y sincronización en tiempo real.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:mt-7">
                <StatPill label="Tipo" value="SaaS / Gaming" />
                <StatPill label="Modo" value="Multiplayer" />
                <StatPill label="Core" value="Realtime" />
              </div>

              <HighlightsList items={lmfHighlights} />

              <div className="mt-7 flex flex-wrap gap-2 lg:mt-8">
                {[
                  "Next.js",
                  "Supabase",
                  "Realtime",
                  "Auth",
                  "Gaming",
                  "Profiles",
                ].map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-9">
                <PrimaryProjectButton href="https://lamesafamiliar.net" />
                <PlansButton />
              </div>

              <MobileStackShowcase
                domain="lamesafamiliar.net"
                primarySrc="/showcase/lamesa/lamesa_salas.png"
                primaryAlt="La Mesa Familiar sala multijugador"
                secondaryLabel="Perfil"
                secondarySrc="/showcase/lamesa/lamesa_perfil.png"
                secondaryAlt="La Mesa Familiar perfil y progreso"
                mobileLabel="Juego móvil"
                mobileSrc="/showcase/lamesa/loteria_game.jpeg"
                mobileAlt="La Mesa Familiar Lotería móvil"
              />
            </div>
          </div>
        </motion.article>

        {/* SANTIEL TV */}
        <motion.article
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="group relative mb-7 overflow-hidden rounded-[1.7rem] border border-yellow-400/20 bg-black/55 p-5 shadow-[0_0_70px_rgba(250,204,21,0.08)] backdrop-blur-xl md:p-8 lg:mb-8 lg:rounded-[2.2rem] lg:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.18),transparent_34%),radial-gradient(circle_at_80%_35%,rgba(255,122,0,0.12),transparent_30%),radial-gradient(circle_at_60%_85%,rgba(255,255,255,0.05),transparent_34%)]" />
          <div className="absolute -right-28 top-16 h-80 w-80 rounded-full bg-yellow-500/15 blur-3xl transition duration-700 group-hover:bg-yellow-400/20" />
          <div className="absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-zam-orange/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-10">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-yellow-400 sm:text-xs">
                <Tv className="h-4 w-4" />
                Landing + portal
              </div>

              <h3 className="font-heading text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
                Santiel TV
              </h3>

              <p className="mt-5 text-sm leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                Landing page premium para publicitar un negocio de streaming
                digital, con portal de clientes, panel administrativo y
                estructura comercial enfocada en conversión.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:mt-7">
                <StatPill label="Objetivo" value="Conversión" />
                <StatPill label="Sistema" value="Portal + Admin" />
                <StatPill label="Marca" value="Premium" />
              </div>

              <HighlightsList items={santielHighlights} />

              <div className="mt-7 flex flex-wrap gap-2 lg:mt-8">
                {[
                  "React",
                  "Netlify",
                  "Supabase",
                  "Admin",
                  "Portal",
                  "Landing",
                ].map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-9">
                <PrimaryProjectButton href="https://santieltv.com" />
                <PlansButton />
              </div>

              <MobileStackShowcase
                domain="santieltv.com"
                primarySrc="/showcase/santiel/santiel_home.png"
                primaryAlt="Santiel TV landing page"
                secondaryLabel="Admin"
                secondarySrc="/showcase/santiel/santiel_paneladmin.png"
                secondaryAlt="Santiel TV panel admin"
                mobileLabel="Planes"
                mobileSrc="/showcase/santiel/movil_planes.jpeg"
                mobileAlt="Santiel TV planes móvil"
              />
            </div>

            <DesktopShowcase
              domain="santieltv.com"
              primarySrc="/showcase/santiel/santiel_home.png"
              primaryAlt="Santiel TV landing page"
              secondaryLabel="Panel admin"
              secondaryBadge="Control"
              secondaryIcon={<LayoutDashboard className="h-4 w-4" />}
              secondarySrc="/showcase/santiel/santiel_paneladmin.png"
              secondaryAlt="Santiel TV panel admin"
              mobileSrc="/showcase/santiel/movil_planes.jpeg"
              mobileAlt="Santiel TV planes móvil"
              accent="yellow"
            />
          </div>
        </motion.article>

        {/* TXS HUB */}
        <motion.article
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="group relative mb-10 overflow-hidden rounded-[1.7rem] border border-yellow-300/20 bg-black/55 p-5 shadow-[0_0_70px_rgba(234,179,8,0.08)] backdrop-blur-xl md:p-8 lg:rounded-[2.2rem] lg:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(234,179,8,0.18),transparent_34%),radial-gradient(circle_at_82%_36%,rgba(255,255,255,0.07),transparent_30%),radial-gradient(circle_at_58%_84%,rgba(250,204,21,0.08),transparent_34%)]" />
          <div className="absolute -right-28 top-16 h-80 w-80 rounded-full bg-yellow-500/15 blur-3xl transition duration-700 group-hover:bg-yellow-400/20" />
          <div className="absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-zam-orange/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.14fr_0.86fr] lg:items-center lg:gap-10">
            <div className="order-2 lg:order-1">
              <DesktopShowcase
                domain="txshub.com"
                primarySrc="/showcase/txs/txs_home.png"
                primaryAlt="TXS Hub portal público"
                secondaryLabel="Dashboard admin"
                secondaryBadge="ERP"
                secondaryIcon={<LayoutDashboard className="h-4 w-4" />}
                secondarySrc="/showcase/txs/txs_admin.png"
                secondaryAlt="TXS Hub dashboard administrativo"
                mobileSrc="/showcase/txs/txs_mobile.png"
                mobileAlt="TXS Hub móvil"
                accent="yellow"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-yellow-400 sm:text-xs">
                <Trophy className="h-4 w-4" />
                Academia + ERP
              </div>

              <h3 className="font-heading text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
                TXS Hub
              </h3>

              <p className="mt-5 text-sm leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                Plataforma integral para academia de baile y eventos con portal
                público, panel administrativo, control de alumnos, pagos,
                asistencia y gestión operativa en tiempo real.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:mt-7">
                <StatPill label="Objetivo" value="Academia digital" />
                <StatPill label="Sistema" value="Portal + Admin" />
                <StatPill label="Sector" value="Educación" />
              </div>

              <HighlightsList items={txsHighlights} />

              <div className="mt-7 flex flex-wrap gap-2 lg:mt-8">
                {[
                  "React",
                  "Supabase",
                  "ERP",
                  "Dashboard",
                  "Academia",
                  "Eventos",
                ].map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-9">
                <PrimaryProjectButton href="https://txshub.com" />
                <PlansButton />
              </div>

              <MobileStackShowcase
                domain="txshub.com"
                primarySrc="/showcase/txs/txs_home.png"
                primaryAlt="TXS Hub portal público"
                secondaryLabel="Admin"
                secondarySrc="/showcase/txs/txs_admin.png"
                secondaryAlt="TXS Hub dashboard administrativo"
                mobileLabel="Móvil"
                mobileSrc="/showcase/txs/txs_mobile.png"
                mobileAlt="TXS Hub móvil"
              />
            </div>
          </div>
        </motion.article>

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
