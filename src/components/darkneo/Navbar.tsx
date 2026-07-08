"use client";

import { Terminal, Rocket, Check, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full relative">
      {/* Dark Nav */}
      <nav className="w-full bg-[var(--color-obsidian)] border-b-2 border-[var(--color-sand)] px-4 py-4 flex items-center justify-between z-40 relative">
        
        {/* Left Side: Logo + Desktop Form */}
        <div className="flex items-center gap-8">
          
          {/* Logo */}
          <div className="flex items-center gap-1 md:gap-1.5 z-50 select-none">
            <img src="/64.png" alt="64" className="h-8 md:h-11 w-auto pointer-events-none select-none object-contain" draggable="false" />
            <span className="font-sans text-xl md:text-3xl font-bold tracking-tight text-[#DCC0A6] relative top-[1px] md:top-[2px]">Labs</span>
          </div>

          {/* Desktop Waitlist Form */}
          <div className="hidden xl:flex items-center">
            {isSubmitted ? (
              <div className="flex flex-col gap-0.5 text-left">
                <div className="flex items-center gap-2 text-[var(--color-burnt-orange)] font-bold text-sm">
                  <Check className="w-4 h-4" />
                  <span>You're on the list.</span>
                </div>
                <p className="text-xs text-[var(--color-sand)] opacity-70">
                  We'll let you know when we launch new products or open new partnerships.
                </p>
              </div>
            ) : (
              <form 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  setIsSubmitted(true); 
                }} 
                className="flex items-center gap-2"
              >
                <input 
                  type="email" 
                  required
                  placeholder="Join waitlist - Enter your email!" 
                  className="w-72 bg-[var(--color-obsidian)] border-2 border-[var(--color-sand)] rounded-none px-3 py-1.5 text-sm font-sans text-[var(--color-sand)] placeholder:text-[var(--color-sand)] placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-burnt-orange)] neo-shadow-hover transition-all"
                />
                <button 
                  type="submit" 
                  className="bg-[var(--color-burnt-orange)] text-[var(--color-obsidian)] border-2 border-[var(--color-sand)] rounded-none px-4 py-1.5 font-bold text-sm neo-shadow-sand hover:neo-shadow-sand active:shadow-none active:translate-y-1 transition-all"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Side: Desktop Nav Buttons & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          {/* Desktop Navigation Buttons */}
          <div className="hidden xl:flex items-center gap-4 p-2">
            <button className="flex items-center justify-center gap-2 bg-[var(--color-obsidian)] text-[var(--color-sand)] border-2 border-[var(--color-sand)] rounded-none px-3 py-1.5 text-xs font-bold neo-shadow hover:neo-shadow-hover active:shadow-none active:translate-y-1 transition-all whitespace-nowrap">
              <Terminal className="w-4 h-4" />
              What We Build
            </button>
            <button className="flex items-center justify-center gap-2 bg-[var(--color-sand)] text-[var(--color-obsidian)] border-2 border-[var(--color-sand)] rounded-none px-4 py-1.5 text-xs font-bold neo-shadow hover:neo-shadow-hover active:shadow-none active:translate-y-1 transition-all whitespace-nowrap">
              <Rocket className="w-4 h-4" />
              Work With Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden flex items-center justify-center p-2 text-[var(--color-sand)] hover:text-[var(--color-burnt-orange)] transition-colors z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[var(--color-obsidian)] border-b-2 border-[var(--color-sand)] flex flex-col items-center gap-6 p-6 z-30 animate-in slide-in-from-top-4 fade-in duration-200">
          
          {/* Mobile Waitlist Form */}
          <div className="w-full flex flex-col justify-center items-center">
            {isSubmitted ? (
              <div className="flex flex-col gap-1 items-center text-center">
                <div className="flex items-center gap-2 text-[var(--color-burnt-orange)] font-bold text-sm">
                  <Check className="w-4 h-4" />
                  <span>You're on the list.</span>
                </div>
                <p className="text-xs text-[var(--color-sand)] opacity-70">
                  We'll let you know when we launch new products or open new partnerships.
                </p>
              </div>
            ) : (
              <form 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  setIsSubmitted(true); 
                }} 
                className="flex flex-col gap-3 w-full max-w-sm"
              >
                <input 
                  type="email" 
                  required
                  placeholder="Join waitlist - Enter your email!" 
                  className="w-full bg-[var(--color-obsidian)] border-2 border-[var(--color-sand)] rounded-none px-4 py-3 text-base font-sans text-[var(--color-sand)] placeholder:text-[var(--color-sand)] placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--color-burnt-orange)] transition-all text-center"
                />
                <button 
                  type="submit" 
                  className="w-full bg-[var(--color-burnt-orange)] text-[var(--color-obsidian)] border-2 border-[var(--color-sand)] rounded-none px-4 py-3 font-bold text-base neo-shadow-sand hover:neo-shadow-sand active:shadow-none active:translate-y-1 transition-all"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>

          <div className="w-full h-px bg-[var(--color-sand)] opacity-20"></div>

          {/* Mobile Navigation Buttons */}
          <div className="flex flex-col items-center gap-4 w-full max-w-sm pb-2">
            <button className="w-full flex items-center justify-center gap-2 bg-[var(--color-obsidian)] text-[var(--color-sand)] border-2 border-[var(--color-sand)] rounded-none px-3 py-3 text-sm font-bold neo-shadow hover:neo-shadow-hover active:shadow-none active:translate-y-1 transition-all whitespace-nowrap">
              <Terminal className="w-5 h-5" />
              What We Build
            </button>
            <button className="w-full flex items-center justify-center gap-2 bg-[var(--color-sand)] text-[var(--color-obsidian)] border-2 border-[var(--color-sand)] rounded-none px-4 py-3 text-sm font-bold neo-shadow hover:neo-shadow-hover active:shadow-none active:translate-y-1 transition-all whitespace-nowrap">
              <Rocket className="w-5 h-5" />
              Work With Us
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
