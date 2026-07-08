"use client";

import { MessageSquare, Link, Globe, X } from "lucide-react";
import { useState } from "react";

export default function StickyChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-4">
      
      {/* The Popup Menu */}
      {isOpen && (
        <div className="bg-[var(--color-obsidian)] border-2 border-[var(--color-sand)] p-4 flex flex-col gap-2 neo-shadow animate-in slide-in-from-bottom-2 fade-in duration-200">
          <a 
            href="https://linkedin.com/company/64labs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2 hover:bg-[var(--color-sand)] hover:text-[var(--color-obsidian)] text-[var(--color-sand)] transition-colors font-mono text-sm font-bold border-2 border-transparent hover:border-[var(--color-obsidian)]"
          >
            <Link className="w-4 h-4" />
            LinkedIn
          </a>
          <a 
            href="https://instagram.com/64labs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2 hover:bg-[var(--color-sand)] hover:text-[var(--color-obsidian)] text-[var(--color-sand)] transition-colors font-mono text-sm font-bold border-2 border-transparent hover:border-[var(--color-obsidian)]"
          >
            <Globe className="w-4 h-4" />
            Instagram
          </a>
        </div>
      )}

      {/* The Square Sticky Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[var(--color-obsidian)] border-2 border-[var(--color-sand)] flex items-center justify-center neo-shadow hover:neo-shadow-hover active:shadow-none active:translate-y-1 transition-all"
        aria-label="Toggle chat menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[var(--color-sand)]" />
        ) : (
          <MessageSquare className="w-6 h-6 text-[var(--color-sand)]" />
        )}
      </button>

    </div>
  );
}
