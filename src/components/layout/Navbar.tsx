// 📍 Ruta del archivo: src/components/layout/Navbar.tsx

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ContactModal } from "../ui/ContactModal";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/35 backdrop-blur-2xl">
        <div className="max-w-[90rem] mx-auto px-6 h-24 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-4 cursor-pointer group"
          >
            {/* ZC Logo */}
            <div className="w-11 h-11 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-zam-orange/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <img
                src="/branding/zc-logo.png"
                alt="Zamgel Core Logo"
                className="relative z-10 w-full h-full object-contain scale-110 drop-shadow-[0_0_10px_rgba(255,122,0,0.45)] group-hover:drop-shadow-[0_0_16px_rgba(255,122,0,0.75)] transition-all duration-500"
              />
            </div>

            <div className="font-heading text-xl lg:text-2xl font-bold tracking-[0.12em] text-white mt-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zam-silver transition-all duration-500">
              <span className="text-zam-silver group-hover:text-white transition-colors duration-500">
                ZAMGEL
              </span>{" "}
              <span className="text-zam-orange text-glow-orange">CORE</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-14">
            <ul className="flex items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  className="relative flex flex-col items-center group"
                >
                  <a
                    href={link.href}
                    className={`text-[13px] font-sans font-medium tracking-widest transition-colors duration-300 py-2 ${
                      i === 0
                        ? "text-zam-orange drop-shadow-[0_0_8px_rgba(255,122,0,0.5)]"
                        : "text-zam-silver hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>

                  <div
                    className={`absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-zam-orange shadow-[0_0_8px_#FF7A00] transition-all duration-300 ${
                      i === 0
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-50 group-hover:opacity-50 group-hover:scale-100"
                    }`}
                  />
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.6,
                ease: "easeOut",
              }}
            >
              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="group relative flex items-center gap-3 px-7 py-2.5 bg-white/[0.03] border border-white/10 text-white font-sans text-[11px] font-bold tracking-[0.2em] rounded-full hover:bg-white/[0.08] hover:border-zam-orange/50 transition-all duration-500 overflow-hidden hover:shadow-[0_0_20px_rgba(255,122,0,0.2)]"
              >
                {/* Shine */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

                <span className="relative z-10">HABLEMOS</span>

                <ArrowUpRight className="relative z-10 w-3.5 h-3.5 text-zam-orange group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-white/5 bg-black/95 backdrop-blur-2xl"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-zinc-300 hover:text-zam-orange transition-colors duration-300 tracking-[0.15em] uppercase text-sm"
                  >
                    {link.label}
                  </a>
                ))}

                <button
                  onClick={() => {
                    setIsContactOpen(true);
                    setIsOpen(false);
                  }}
                  className="mt-4 rounded-2xl border border-zam-orange/20 bg-zam-orange/10 py-4 text-sm tracking-[0.15em] uppercase text-zam-orange"
                >
                  Hablemos
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
