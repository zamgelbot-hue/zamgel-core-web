import { motion } from "motion/react";

export function ParticleBackground() {
  // Generate random particles
  const particles = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 10,
    // Higher probability of orange particles for energetic feel
    isOrange: Math.random() > 0.5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle Animated Grid */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "linear-gradient(to bottom, white 10%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to bottom, white 10%, transparent 80%)"
        }}
        animate={{
          backgroundPosition: ["0px 0px", "0px 60px"]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Cinematic Fog Atmosphere & Lighting Gradients */}
      <motion.div 
        animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[20%] w-[1200px] h-[800px] bg-zam-orange/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" 
      />
      
      <motion.div 
        animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.15, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[30%] right-[-10%] w-[900px] h-[900px] bg-white/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" 
      />
      
      <motion.div 
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-[-20%] left-[-10%] w-[1000px] h-[700px] bg-zam-orange/5 rounded-full blur-[160px] pointer-events-none" 
      />

      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${
            p.isOrange 
              ? "bg-zam-orange shadow-[0_0_12px_#FFA133] mix-blend-screen" 
              : "bg-zam-silver opacity-30 shadow-[0_0_8px_#C0C0C3]"
          }`}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [`${p.y}%`, `${p.y - 15 - Math.random() * 15}%`, `${p.y}%`],
            x: [`${p.x}%`, `${p.x + 5 + Math.random() * 10}%`, `${p.x}%`],
            opacity: [0, p.isOrange ? 0.9 : 0.5, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Deep Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zam-orange/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
    </div>
  );
}
