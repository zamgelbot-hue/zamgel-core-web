// 📍 Ruta del archivo: src/components/ui/ContactModal.tsx

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, ArrowLeft, Check } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const options = [
  "Quiero una página web",
  "Necesito un sistema para mi negocio",
  "Quiero mejorar mi servicio digital",
  "Necesito automatización o panel administrativo",
  "Quiero orientación sobre mi proyecto",
];

const dynamicQuestions: Record<string, string[]> = {
  "Quiero una página web": [
    "¿Ya tienes dominio o nombre para tu sitio?",
    "¿Tienes logo, colores o identidad visual?",
    "¿Qué secciones necesitas? Ej: inicio, servicios, menú, contacto.",
  ],
  "Necesito un sistema para mi negocio": [
    "¿Qué proceso quieres controlar o mejorar?",
    "¿Necesitas manejar inventario, pedidos, clientes o reportes?",
    "¿Quiénes usarían el sistema? Ej: dueño, empleados, clientes.",
  ],
  "Quiero mejorar mi servicio digital": [
    "¿Ya tienes página, sistema o plataforma funcionando?",
    "¿Qué problema principal quieres resolver?",
    "¿Qué te gustaría mejorar primero?",
  ],
  "Necesito automatización o panel administrativo": [
    "¿Qué tareas haces manualmente hoy?",
    "¿Qué información necesitas administrar?",
    "¿Necesitas usuarios, permisos o reportes?",
  ],
  "Quiero orientación sobre mi proyecto": [
    "¿Cuál es la idea principal?",
    "¿En qué etapa está el proyecto?",
    "¿Qué te gustaría lograr primero?",
  ],
};

export function ContactModal({ isOpen, onClose }: Props) {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState("");

  const handleClose = () => {
    setStep(1);
    setSelected("");
    onClose();
  };

  const questions = selected ? dynamicQuestions[selected] : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-[90]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          >
            <div className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0B0B0D]/95 backdrop-blur-2xl p-8 md:p-10 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,122,0,0.14),transparent_60%)] pointer-events-none" />

              <button
                onClick={handleClose}
                className="absolute top-5 right-5 w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-400 hover:text-white transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-1 flex-1 rounded-full bg-zam-orange" />
                  <div
                    className={`h-1 flex-1 rounded-full ${
                      step === 2 ? "bg-zam-orange" : "bg-white/10"
                    }`}
                  />
                </div>

                {step === 1 && (
                  <>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zam-orange/20 bg-zam-orange/5 mb-6">
                      <div className="w-2 h-2 rounded-full bg-zam-orange" />
                      <span className="text-xs tracking-[0.2em] uppercase text-zam-orange">
                        Paso 1 de 2
                      </span>
                    </div>

                    <h2 className="font-heading text-4xl text-white leading-[1.05] mb-5">
                      ¿Qué estás buscando construir?
                    </h2>

                    <p className="text-zinc-400 leading-relaxed mb-8">
                      Selecciona la opción que mejor se acerque a lo que
                      necesitas.
                    </p>

                    <div className="space-y-4 mb-8">
                      {options.map((option) => {
                        const isActive = selected === option;

                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setSelected(option)}
                            className={`w-full text-left rounded-2xl border px-6 py-5 transition-all duration-300 flex items-center justify-between gap-4 ${
                              isActive
                                ? "border-zam-orange/50 bg-zam-orange/[0.08] text-white"
                                : "border-white/5 bg-white/[0.03] text-zinc-300 hover:border-zam-orange/30 hover:bg-zam-orange/[0.04]"
                            }`}
                          >
                            <span>{option}</span>

                            {isActive && (
                              <Check className="w-5 h-5 text-zam-orange" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      type="button"
                      disabled={!selected}
                      onClick={() => setStep(2)}
                      className="w-full rounded-2xl bg-zam-orange px-8 py-5 text-black font-bold tracking-[0.16em] uppercase disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(255,122,0,0.3)] transition-all duration-300"
                    >
                      Continuar
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zam-orange/20 bg-zam-orange/5 mb-6">
                      <div className="w-2 h-2 rounded-full bg-zam-orange" />
                      <span className="text-xs tracking-[0.2em] uppercase text-zam-orange">
                        Paso 2 de 2
                      </span>
                    </div>

                    <h2 className="font-heading text-4xl text-white leading-[1.05] mb-5">
                      Cuéntanos sobre tu proyecto.
                    </h2>

                    <p className="text-zinc-400 leading-relaxed mb-8">
                      Responde estos datos y revisaremos tu solicitud para darte
                      una orientación inicial.
                    </p>

                    <div className="mb-6 rounded-2xl border border-zam-orange/20 bg-zam-orange/[0.05] px-5 py-4 text-sm text-zam-orange">
                      Solicitud: {selected}
                    </div>

                    <div className="space-y-4">
                      <input
                        placeholder="Tu nombre"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none focus:border-zam-orange/50"
                      />

                      <input
                        placeholder="Negocio o marca"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none focus:border-zam-orange/50"
                      />

                      <input
                        placeholder="Correo o teléfono"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none focus:border-zam-orange/50"
                      />

                      {questions.map((question) => (
                        <textarea
                          key={question}
                          placeholder={question}
                          rows={2}
                          className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none resize-none focus:border-zam-orange/50"
                        />
                      ))}

                      <textarea
                        placeholder="Detalles extra que quieras agregar"
                        rows={3}
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none resize-none focus:border-zam-orange/50"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="rounded-2xl border border-white/10 px-6 py-4 text-zinc-300 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Volver
                      </button>

                      <button
                        type="button"
                        className="flex-1 rounded-2xl bg-zam-orange px-8 py-4 text-black font-bold tracking-[0.16em] uppercase hover:shadow-[0_0_30px_rgba(255,122,0,0.3)] transition-all duration-300"
                      >
                        Enviar a ventas@zamgelcore.com
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
