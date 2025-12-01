import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  videoSrc: string;
  index: number;
}

export function Section({ id, title, subtitle, description, videoSrc }: SectionProps) {
  return (
    <section id={id} className="snap-section relative flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {subtitle && (
            <h3 className="text-xl md:text-2xl font-light tracking-widest text-white/80 mb-4 uppercase">
              {subtitle}
            </h3>
          )}
          <h2 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            {title}
          </h2>
          <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
