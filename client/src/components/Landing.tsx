import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Destination {
  id: string;
  title: string;
}

interface LandingProps {
  destinations: Destination[];
  videoSrc: string;
}

export function Landing({ destinations, videoSrc }: LandingProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="snap-section relative flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        
        {/* Headline */}
        <div className="lg:pr-12">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]"
          >
            My top 5 <br />
            favorite <br />
            Colombian <br />
            cities
          </motion.h1>
        </div>

        {/* Interactive List */}
        <div className="flex flex-col justify-center space-y-2">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => scrollToSection(dest.id)}
            >
              <div className="flex items-baseline border-b border-white/20 py-4 group-hover:border-white/60 transition-colors duration-300">
                <span className="text-sm font-mono text-white/60 mr-6 w-8">0{index + 1}</span>
                <div className="flex-1 flex items-center justify-between">
                  <span 
                    className={`text-3xl md:text-4xl font-medium text-white transition-transform duration-500 ${
                      hoveredIndex === index ? "translate-x-4" : ""
                    }`}
                  >
                    {dest.title}
                  </span>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0, 
                      x: hoveredIndex === index ? 0 : -10 
                    }}
                  >
                    <ArrowRight className="text-white w-6 h-6" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
