export default function JourneySection() {
  const steps = [
    {
      number: "1",
      title: "Build Products",
      desc: "We create AI-first products designed to solve real problems.",
    },
    {
      number: "2",
      title: "Partner With Teams",
      desc: "From MVP to production, we help founders and businesses build with confidence.",
    },
    {
      number: "3",
      title: "Grow Together",
      desc: "Long-term partnerships. Clean engineering. Products that keep evolving.",
    }
  ];

  return (
    <section className="w-full border-b-2 border-[var(--color-sand)] py-24 px-4 flex flex-col items-center">
      
      <div className="text-center mb-16">
        <h2 className="font-mono text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-sand)] mb-4">
          How We Build
        </h2>
      </div>

      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {steps.map((step, idx) => (
          <div 
            key={idx}
            className="bg-[var(--color-obsidian)] border-2 border-[var(--color-sand)] rounded-none p-8 flex flex-col gap-4 neo-shadow hover:neo-shadow-hover cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 border-2 border-[var(--color-sand)] bg-[var(--color-burnt-orange)] text-[var(--color-obsidian)] flex items-center justify-center font-mono font-bold text-sm">
                {step.number}
              </div>
              <h3 className="font-sans font-bold text-lg text-[var(--color-sand)]">
                {step.title}
              </h3>
            </div>
            
            <p className="font-sans text-[var(--color-sand)] text-sm leading-relaxed opacity-80">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
