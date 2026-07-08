
export default function FooterBanner() {
  return (
    <div className="w-full flex flex-col">
      {/* The Burnt Orange CTA Block */}
      <section className="w-full bg-[var(--color-burnt-orange)] border-b-2 border-[var(--color-sand)] py-24 px-4 flex flex-col items-center text-center">
        <h2 className="font-mono text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-obsidian)] mb-4">
          Have something worth building?
        </h2>
        <p className="font-sans text-[var(--color-obsidian)] font-medium text-lg max-w-2xl">
          Whether you're starting from an idea or scaling an existing product, we'd love to build it with you.
        </p>
        
        <button className="mt-8 bg-[var(--color-obsidian)] text-[var(--color-sand)] border-2 border-[var(--color-obsidian)] px-8 py-3 font-bold font-mono text-sm uppercase tracking-widest neo-shadow-sand hover:neo-shadow-sand active:shadow-none active:translate-y-1 transition-all">
          Start a Conversation
        </button>
      </section>

      {/* The Engineered Footer */}
      <footer className="w-full bg-[var(--color-obsidian)] pt-16 pb-8 px-4 md:px-8 flex flex-col border-t-2 border-[var(--color-sand)]">
        <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* Left: Build Status */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
            <div className="flex items-center justify-center md:justify-start gap-3 font-mono text-[var(--color-burnt-orange)] text-sm font-bold uppercase tracking-widest">
              <div className="w-2.5 h-2.5 bg-[var(--color-burnt-orange)] animate-pulse shadow-[0_0_8px_var(--color-burnt-orange)] border border-[var(--color-sand)]"></div>
              System Status: Building In Public
            </div>
            <p className="font-sans text-[var(--color-sand)] opacity-80 max-w-sm text-sm leading-relaxed font-medium">
              We are currently architecting the foundations of 
              <span className="inline-flex items-center gap-0.5 mx-1 select-none">
                <span className="font-serif italic font-black text-base text-[var(--color-burnt-orange)]">64</span>
                <span className="font-sans font-bold text-sm text-[#DCC0A6]">Labs</span>
              </span>
              . What you see is a live deployment of our early iterations. Every pixel and line of code is being engineered in real-time.
            </p>
          </div>

          {/* Right: Grid of links */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2 font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--color-sand)] opacity-80 font-bold">
            <span className="text-[var(--color-burnt-orange)] mb-2">Capabilities</span>
            <a href="#" className="hover:text-[var(--color-burnt-orange)] transition-colors">Build Products</a>
            <a href="#" className="hover:text-[var(--color-burnt-orange)] transition-colors">Partner With Teams</a>
            <a href="#" className="hover:text-[var(--color-burnt-orange)] transition-colors">Grow Together</a>
          </div>

        </div>

        {/* Bottom: Copyright & Details */}
        <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center justify-center border-t-2 border-[var(--color-sand)] pt-6 font-mono text-[10px] text-[var(--color-sand)] opacity-60 uppercase tracking-widest gap-4">
          <span className="flex items-center gap-2 select-none">
            © {new Date().getFullYear()} 
            <span className="flex items-center gap-0.5">
              <span className="font-serif italic font-black text-sm text-[var(--color-burnt-orange)] normal-case">64</span>
              <span className="font-sans font-bold text-xs text-[#DCC0A6] normal-case tracking-normal">Labs</span>
            </span>
          </span>
        </div>
      </footer>
    </div>
  );
}
