// 📍 Ruta del archivo: src/components/layout/Footer.tsx

import { useState } from "react";
import { Hexagon, Instagram, Mail } from "lucide-react";
import { motion } from "motion/react";
import { LegalModal } from "../ui/LegalModal";

export function Footer() {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | null>(
    null,
  );

  return (
    <>
      <footer className="relative border-t border-white/5 bg-zam-bg/50 backdrop-blur-xl mt-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-zam-orange/30 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zam-orange/20 bg-zam-orange/5">
                <img
                  src="/branding/kaizen-official-outline.png"
                  alt="Zamgel Core"
                  className="h-5 w-5 object-contain"
                />
              </div>

              <div className="font-heading text-xl font-bold tracking-[0.15em]">
                <span className="text-zam-silver">ZAMGEL</span>{" "}
                <span className="text-zam-orange text-glow-orange">CORE</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-[12px] uppercase tracking-[0.18em]">
              <button
                onClick={() => setLegalModal("privacy")}
                className="text-zinc-500 transition-colors hover:text-zam-orange"
              >
                Privacidad
              </button>

              <button
                onClick={() => setLegalModal("terms")}
                className="text-zinc-500 transition-colors hover:text-zam-orange"
              >
                Términos
              </button>

              <a
                href="mailto:contacto@zamgelcore.com"
                className="flex items-center gap-2 text-zinc-500 transition-colors hover:text-zam-orange"
              >
                <Mail className="h-3.5 w-3.5" />
                Contacto
              </a>

              <a
                href="https://instagram.com/zamgelcore"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-500 transition-colors hover:text-zam-orange"
              >
                <Instagram className="h-3.5 w-3.5" />
                Instagram
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-5 border-t border-white/5 pt-8 text-xs text-zinc-600 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Zamgel Core. Todos los derechos
              reservados.
            </p>

            <div className="flex items-center gap-2 uppercase tracking-[0.2em]">
              <span>SYS.STATUS</span>
              <span className="h-2.5 w-2.5 rounded-full bg-zam-orange shadow-[0_0_10px_#FF7A00]" />
              <span className="text-zam-orange">Online</span>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </>
  );
}
