
import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface LandingPageProps {
  onEnter: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 1000); // Wait for the exit animation
  };

  return (
    <div 
      className={`
        fixed inset-0 z-50 bg-[#fafafa] text-[#111] overflow-hidden cursor-default
        transition-transform duration-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)]
        ${isExiting ? '-translate-y-full' : 'translate-y-0'}
      `}
    >
      {/* Background Grid - Extremely subtle */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
             backgroundSize: '100px 100px'
           }} 
      />

      {/* Main Layout Container */}
      <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12">
        
        {/* Top Section: Brand & Meta */}
        <div className={`flex justify-between items-start border-b border-black/10 pb-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="font-sans text-xs md:text-sm font-medium tracking-widest uppercase">
            DMGT_OS <span className="text-gray-400 mx-2">//</span> v2.0
          </div>
          <div className="hidden md:flex gap-8 font-sans text-xs font-medium tracking-widest uppercase text-gray-400">
            <span>Strategy</span>
            <span>Design</span>
            <span>Execution</span>
          </div>
          <div className="font-sans text-xs md:text-sm font-medium tracking-widest uppercase text-right">
            [ EST. 2024 ]
          </div>
        </div>

        {/* Center Section: Massive Typography */}
        <div className="flex-1 flex flex-col justify-center relative z-10">
          <div className="flex flex-col gap-0 md:gap-2 mix-blend-darken">
            {['DESIGN', 'METHODOLOGY', 'GROWTH'].map((word, index) => (
              <div key={word} className="overflow-hidden">
                <h1 
                  className={`
                    text-[12vw] md:text-[9vw] leading-[0.85] font-bold tracking-tighter text-black
                    transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${mounted ? 'translate-y-0' : 'translate-y-full'}
                  `}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {word}<span className="text-retro-primary">.</span>
                </h1>
              </div>
            ))}
          </div>

          <div 
            className={`
              mt-8 md:mt-12 max-w-lg transition-all duration-1000 delay-500
              ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            <p className="font-serif text-lg md:text-2xl text-gray-500 leading-relaxed italic">
              "Innovation is not magic; it is a discipline."
            </p>
          </div>
        </div>

        {/* Bottom Section: Action & Info */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-t border-black/10 pt-6">
          
          {/* Manifesto / Description */}
          <div className={`hidden md:block max-w-sm transition-all duration-1000 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
             <p className="text-xs font-sans text-gray-400 leading-relaxed uppercase tracking-wider">
                A toolkit for the builders, the dreamers, and the pragmatists navigating the unknown.
             </p>
          </div>

          {/* Enter Button */}
          <div className="w-full md:w-auto">
            <button 
              onClick={handleEnter}
              className={`
                group w-full md:w-auto flex items-center justify-between gap-12 bg-black text-white px-8 py-6 
                hover:bg-retro-primary transition-colors duration-500 ease-out
                ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 transition-all duration-1000 delay-700'}
              `}
            >
              <span className="font-mono text-sm tracking-widest uppercase">Initialize System</span>
              <div className="relative overflow-hidden w-6 h-6">
                 <ArrowRight className="absolute inset-0 transform group-hover:translate-x-full transition-transform duration-300" />
                 <ArrowRight className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
