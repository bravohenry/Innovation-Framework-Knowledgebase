
import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight, Settings, Activity, Search, Wrench, GitCommit } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const IterationCycleTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [phases, setPhases] = useState(config.data);
  const [activePhase, setActivePhase] = useState(0);

  const updatePhase = (index: number, field: string, val: string) => {
    const newPhases = [...phases];
    newPhases[index] = { ...newPhases[index], [field]: val };
    setPhases(newPhases);
  };

  const getIcon = (phase: string) => {
      switch(phase) {
          case 'Build': return <Wrench size={24}/>;
          case 'Measure': return <Activity size={24}/>;
          case 'Learn': return <Search size={24}/>;
          default: return <Settings size={24}/>;
      }
  };

  return (
    <div className="bg-slate-50 p-6 md:p-12 min-h-[600px] flex flex-col items-center justify-center">
       
       {/* Cycle Visualizer */}
       <div className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Central Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-300 -z-10 transform -translate-y-1/2"></div>

          {phases.map((phase, idx) => (
             <div key={idx} className="relative group">
                 {/* Card */}
                 <div 
                    onClick={() => setActivePhase(idx)}
                    className={`
                        bg-white border-2 p-6 transition-all cursor-pointer relative z-10 min-h-[200px] flex flex-col
                        ${idx === activePhase 
                            ? 'border-black shadow-[8px_8px_0_0_#000] scale-105' 
                            : 'border-slate-300 shadow-sm hover:border-slate-400 hover:shadow-md'}
                    `}
                 >
                     <div className={`
                        w-12 h-12 rounded-full border-2 border-black flex items-center justify-center mb-4
                        ${idx === activePhase ? 'bg-retro-secondary' : 'bg-white'}
                     `}>
                        {getIcon(phase.phase)}
                     </div>
                     
                     <h3 className="font-black text-xl uppercase mb-2 font-mono">{phase.phase}</h3>
                     
                     <div className="flex-1 space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Key Activity</label>
                        <textarea 
                            value={phase.activity}
                            onChange={(e) => updatePhase(idx, 'activity', e.target.value)}
                            className="w-full text-sm font-medium resize-none outline-none border-b border-dashed border-slate-300 focus:border-black bg-transparent"
                            rows={3}
                        />
                     </div>
                 </div>

                 {/* Connector Arrow (Mobile) */}
                 {idx < phases.length - 1 && (
                     <div className="md:hidden flex justify-center py-4 text-slate-400">
                         <ArrowRight className="rotate-90" />
                     </div>
                 )}
             </div>
          ))}
       </div>

       {/* Iteration Log (Bottom) */}
       <div className="w-full max-w-4xl mt-12 bg-white border-2 border-black p-6 shadow-hard">
           <div className="flex items-center gap-2 mb-4 border-b-2 border-slate-100 pb-2">
               <GitCommit className="text-retro-primary" />
               <h4 className="font-bold font-mono uppercase">Version Changelog</h4>
           </div>
           <div className="space-y-4">
               <div className="flex gap-4 items-start">
                   <div className="bg-black text-white text-xs font-bold px-2 py-1 font-mono rounded">v1.0</div>
                   <div className="text-sm text-slate-600">Initial MVP launch. Focus on core booking flow.</div>
               </div>
               <div className="flex gap-4 items-start">
                   <div className="bg-retro-primary text-white text-xs font-bold px-2 py-1 font-mono rounded">v1.1</div>
                   <div className="text-sm text-slate-600">
                       <span className="font-bold text-black">Fix:</span> Simplified login based on <span className="italic">Measure</span> phase data showing 40% drop-off.
                   </div>
               </div>
               <div className="flex gap-4 items-start opacity-50">
                   <div className="border border-slate-300 text-slate-400 text-xs font-bold px-2 py-1 font-mono rounded">v1.2</div>
                   <div className="text-sm text-slate-400 italic">Planned: Add social sharing...</div>
               </div>
           </div>
       </div>

    </div>
  );
};
