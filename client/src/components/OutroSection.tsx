export function OutroSection() {
  return (
    <section className="snap-section h-screen bg-neutral-900 text-white flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-3xl space-y-8">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Thanks for exploring Colombia with me.
        </h2>
        <button
          onClick={() => {
            const topSection = typeof document !== "undefined" ? document.getElementById("top") : null;
            topSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-6 py-3 rounded-full border border-white/30 text-white/90 hover:text-white hover:border-white transition-colors duration-200"
        >
          Back to top
        </button>
      </div>
    </section>
  );
}
