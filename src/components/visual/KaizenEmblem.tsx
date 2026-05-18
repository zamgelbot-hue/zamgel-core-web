// 📍 Ruta del archivo: src/components/KaizenEmblem.tsx

export function KaizenEmblem() {
  return (
    <div className="relative w-[360px] h-[360px] md:w-[650px] md:h-[650px] flex items-center justify-center">
      <div className="absolute inset-[10%] rounded-full bg-zam-orange/10 blur-[90px]" />

      <div
        className="absolute inset-[12%] rounded-full border border-zam-orange/20 animate-spin"
        style={{ borderStyle: "dashed", animationDuration: "90s" }}
      />

      <div
        className="absolute inset-[22%] rounded-full border border-zam-orange/25 animate-spin"
        style={{
          borderStyle: "dashed",
          animationDuration: "130s",
          animationDirection: "reverse",
        }}
      />

      <img
        src="/branding/kaizen-official-outline.png"
        alt="Kaizen"
        className="relative z-10 w-[72%] h-[72%] object-contain drop-shadow-[0_0_32px_rgba(255,122,0,0.45)]"
      />

      <div className="absolute top-[20%] right-[7%] border border-zam-orange/40 px-3 py-1.5 rounded-sm text-[10px] font-mono text-zam-orange bg-zam-surface/70 backdrop-blur-md">
        SYS.ONLINE
      </div>

      <div className="absolute bottom-[22%] left-[10%] border border-white/10 px-3 py-1.5 rounded-sm text-[9px] font-mono text-zam-silver/70 bg-zam-surface/60 backdrop-blur-md">
        KZN-CORE // v2.4.0
      </div>
    </div>
  );
}
