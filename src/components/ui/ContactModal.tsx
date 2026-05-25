// 📍 Ruta del archivo: src/components/contact/ContactModal.tsx

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useEffect, useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [selectedNeed, setSelectedNeed] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedNeed) {
      alert("Selecciona qué necesitas antes de enviar la solicitud.");
      return;
    }

    const formData = new FormData(e.currentTarget);

    const message = `
🚀 Nueva solicitud Zamgel Core

🧩 Necesidad:
${selectedNeed || "No seleccionada"}

👤 Nombre:
${formData.get("name")}

🏢 Negocio:
${formData.get("business")}

📞 Contacto:
${formData.get("contact")}

⚙️ Proceso a mejorar:
${formData.get("process")}

📦 Inventario / pedidos / clientes:
${formData.get("operations")}

👥 Usuarios del sistema:
${formData.get("users")}

📝 Detalles extra:
${formData.get("details")}
  `.trim();

    const encodedMessage = encodeURIComponent(message);

    window.location.href = `mailto:contacto@zamgelcore.com?subject=Nueva%20solicitud%20Zamgel%20Core&body=${encodedMessage}`;
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md px-4 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* BACKDROP */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* MODAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.25 }}
          className="
            relative
            z-10
            w-full
            max-w-2xl
            max-h-[90vh]
            overflow-y-auto
            rounded-[32px]
            border
            border-orange-500/20
            bg-[#070707]
            shadow-[0_0_80px_rgba(255,115,0,0.18)]
          "
        >
          {/* GLOW */}
          <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(255,115,0,0.16),transparent_55%)] pointer-events-none" />

          {/* HEADER */}
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/5 bg-black/70 px-6 py-5 backdrop-blur-xl">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.28em] text-orange-400">
                PASO 1 DE 2
              </p>

              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-orange-500 to-orange-300" />
              </div>

              <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
                Cuéntanos sobre tu proyecto.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
                Responde estos datos y revisaremos tu solicitud para darte una
                orientación inicial.
              </p>
            </div>

            <button
              onClick={onClose}
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full border border-white/10
                bg-white/5 text-zinc-300
                transition-all duration-300
                hover:border-orange-500/40
                hover:bg-orange-500/10
                hover:text-orange-400
              "
            >
              <X size={18} />
            </button>
          </div>

          {/* CONTENT */}
          <div className="relative px-6 py-6 md:px-8 md:py-8">
            <div className="mb-8">
              <p className="mb-2 text-xs uppercase tracking-[0.28em] text-orange-400">
                PASO 1 DE 2
              </p>

              <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-orange-500 to-orange-300" />
              </div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">
                ¿Qué necesitas?
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Página web",
                  "Sistema administrativo",
                  "POS / Ventas",
                  "Inventario",
                  "Automatización",
                  "IA / Kaizen",
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSelectedNeed(item)}
                    className={`
            group relative overflow-hidden rounded-2xl
            border px-5 py-5 text-left
            transition-all duration-300
            ${
              selectedNeed === item
                ? "border-orange-500 bg-orange-500/[0.08] shadow-[0_0_35px_rgba(255,115,0,0.18)]"
                : "border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-orange-500/40 hover:bg-orange-500/[0.06] hover:shadow-[0_0_35px_rgba(255,115,0,0.16)]"
            }
          `}
                  >
                    <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,115,0,0.12),transparent_60%)]" />

                    <div className="relative">
                      <p className="font-semibold text-white">{item}</p>

                      <p className="mt-2 text-sm text-zinc-500">
                        Solución personalizada para tu negocio.
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input name="name" placeholder="Tu nombre" required />
              <Input name="business" placeholder="Negocio o marca" required />
              <Input name="contact" placeholder="Correo o teléfono" required />

              <Textarea
                name="process"
                placeholder="¿Qué proceso quieres controlar o mejorar?"
                required
              />

              <Textarea
                name="operations"
                placeholder="¿Necesitas manejar inventario, pedidos, clientes o reportes?"
              />

              <Textarea
                name="users"
                placeholder="¿Quiénes usarían el sistema? Ej: dueño, empleados, clientes."
              />

              <Textarea
                name="details"
                placeholder="Detalles extra que quieras agregar"
              />

              <button
                type="submit"
                className="
                  mt-4 flex w-full items-center justify-center gap-3
                  rounded-2xl bg-orange-500 px-6 py-4
                  text-sm font-bold uppercase tracking-[0.2em]
                  text-black transition-all duration-300
                  hover:scale-[1.01]
                  hover:bg-orange-400
                  hover:shadow-[0_0_40px_rgba(255,115,0,0.45)]
                "
              >
                Enviar solicitud
                <Send size={16} />
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Input({
  placeholder,
  name,
  required = false,
}: {
  placeholder: string;
  name: string;
  required?: boolean;
}) {
  return (
    <input
      name={name}
      required={required}
      placeholder={placeholder}
      className="
        w-full rounded-2xl border border-white/10
        bg-white/[0.03]
        px-5 py-4
        text-white placeholder:text-zinc-500
        outline-none transition-all duration-300
        focus:border-orange-500/40
        focus:bg-orange-500/[0.03]
        focus:ring-2 focus:ring-orange-500/10
      "
    />
  );
}

function Textarea({
  placeholder,
  name,
  required = false,
}: {
  placeholder: string;
  name: string;
  required?: boolean;
}) {
  return (
    <textarea
      name={name}
      required={required}
      rows={4}
      placeholder={placeholder}
      className="
        w-full resize-none rounded-2xl
        border border-white/10
        bg-white/[0.03]
        px-5 py-4
        text-white placeholder:text-zinc-500
        outline-none transition-all duration-300
        focus:border-orange-500/40
        focus:bg-orange-500/[0.03]
        focus:ring-2 focus:ring-orange-500/10
      "
    />
  );
}
