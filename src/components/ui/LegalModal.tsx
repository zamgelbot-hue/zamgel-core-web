// 📍 Ruta del archivo: src/components/ui/LegalModal.tsx

import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface LegalModalProps {
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

const content = {
  privacy: {
    title: "Política de Privacidad",
    text: [
      "Zamgel Core recopila únicamente la información necesaria para responder solicitudes de contacto, cotizaciones o seguimiento de proyectos.",
      "La información puede incluir nombre, correo, teléfono, nombre del negocio y detalles del proyecto.",
      "No vendemos ni compartimos información personal con terceros sin autorización.",
      "Los datos enviados por formularios se utilizan únicamente para comunicación, soporte y evaluación del proyecto solicitado.",
    ],
  },
  terms: {
    title: "Términos de Uso",
    text: [
      "El contenido de este sitio es informativo y representa los servicios, proyectos y capacidades actuales de Zamgel Core.",
      "Las cotizaciones, tiempos de entrega y alcances se definen de forma individual según cada proyecto.",
      "Zamgel Core trabaja con transparencia, comunicación directa y entregas progresivas según el acuerdo realizado con cada cliente.",
      "El uso de este sitio no crea una relación contractual hasta que exista una propuesta o acuerdo confirmado por ambas partes.",
    ],
  },
};

export function LegalModal({ type, onClose }: LegalModalProps) {
  const data = type ? content[type] : null;

  return (
    <AnimatePresence>
      {data && (
        <>
          <motion.div
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center px-6"
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
          >
            <div className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0B0B0D]/95 p-8 md:p-10 backdrop-blur-2xl">
              <button
                onClick={onClose}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <h2 className="mb-6 font-heading text-3xl text-white">
                {data.title}
              </h2>

              <div className="space-y-4 text-sm leading-relaxed text-zinc-400">
                {data.text.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
