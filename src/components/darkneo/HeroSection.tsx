import { Rocket, Zap, Laptop } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full border-b-2 border-[var(--color-sand)] min-h-[calc(100vh-80px)] lg:min-h-0 py-20 md:py-32 relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* 🚀 Rocket Sticker */}
      <div className="absolute top-32 left-4 md:left-auto md:top-20 md:right-[15%] z-20 rotate-12 hover:-rotate-6 transition-transform duration-500 cursor-pointer">
        <div className="bg-[var(--color-burnt-orange)] text-[var(--color-sand)] p-2 md:p-4 rounded-full border-[3px] md:border-4 border-[var(--color-sand)] shadow-[0_4px_8px_rgba(0,0,0,0.6)] md:shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
          <Rocket className="w-6 h-6 md:w-10 md:h-10" fill="currentColor" />
        </div>
      </div>

      {/* ⚡ Zap Sticker */}
      <div className="absolute bottom-24 left-[5%] md:left-[15%] z-20 -rotate-12 hover:rotate-12 transition-transform duration-500 cursor-pointer hidden md:block">
        <div className="bg-[var(--color-sand)] text-[var(--color-obsidian)] p-4 rounded-lg border-4 border-[var(--color-sand)] shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
          <Zap className="w-12 h-12" fill="currentColor" />
        </div>
      </div>

      {/* 💻 Laptop Sticker */}
      <div className="absolute bottom-40 right-4 md:bottom-20 md:right-[25%] z-20 rotate-6 hover:-rotate-12 transition-transform duration-500 cursor-pointer">
        <div className="bg-[var(--color-obsidian)] text-[var(--color-sand)] p-2 md:p-4 rounded-xl border-[3px] md:border-4 border-[var(--color-sand)] shadow-[0_4px_8px_rgba(0,0,0,0.6)] md:shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
          <Laptop className="w-6 h-6 md:w-10 md:h-10" />
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto text-center px-4 relative z-10 flex flex-col items-center">
        
        <h1 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-sand)] mb-4 leading-tight">
          Products we believe in.
        </h1>
        
        {/* The chunky orange text with outline/shadow */}
        <h2 className="font-sans text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-none hero-title">
          Software we're proud to build.
        </h2>

        <p className="font-sans text-lg md:text-xl text-[var(--color-sand)] max-w-2xl font-medium leading-relaxed opacity-90">
          Some ideas become products.<br/>
          Some products become businesses.<br/><br/>
          We're building both.
        </p>

      </div>
    </section>
  );
}
