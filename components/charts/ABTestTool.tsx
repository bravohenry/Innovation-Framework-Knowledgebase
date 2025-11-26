
import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { Beaker, ArrowRight, BarChart2, Calculator } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const ABTestTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [data, setData] = useState(config.data[0]); // Assume single object for A/B config

  const updateField = (field: string, val: string | number) => {
      setData({ ...data, [field]: val });
  };

  const calculateSample = () => {
      // Dummy calculation for demo visual
      return Math.round((16 * Math.pow(Number(data.baseline) / 100 * (1 - Number(data.baseline) / 100), 2)) / Math.pow(0.05, 2)) * 100 + 1000;
  };

  return (
    <div className="p-4 md:p-8 bg-slate-100 min-h-[600px] flex justify-center">
        <div className="w-full max-w-4xl bg-white border-4 border-black shadow-[12px_12px_0_0_rgba(37,99,235,1)] p-6 md:p-10 relative">
            
            {/* Header */}
            <div className="flex justify-between items-start mb-8 border-b-4 border-black pb-4">
                <div>
                    <h1 className="text-3xl font-black uppercase font-mono">Experiment Design</h1>
                    <div className="flex gap-2 mt-2">
                        <span className="bg-retro-primary text-white px-2 text-xs font-bold font-mono">ID: EXP-001</span>
                        <span className="bg-slate-200 text-slate-600 px-2 text-xs font-bold font-mono">STATUS: DRAFT</span>
                    </div>
                </div>
                <Beaker size={48} className="text-black" />
            </div>

            {/* Hypothesis Section */}
            <div className="mb-8">
                <label className="block text-sm font-bold uppercase font-mono mb-2 text-slate-500">Hypothesis</label>
                <div className="text-lg md:text-xl font-serif font-medium leading-relaxed bg-yellow-50 p-4 border-l-4 border-yellow-400 italic">
                    "If we <input 
                        className="bg-transparent border-b border-black outline-none font-bold text-black placeholder-slate-400 w-32 md:w-64"
                        placeholder="change variable"
                        value={data.variable}
                        onChange={(e) => updateField('variable', e.target.value)}
                    />, 
                    then <input 
                        className="bg-transparent border-b border-black outline-none font-bold text-black placeholder-slate-400 w-32 md:w-48"
                        placeholder="metric"
                        value={data.metric}
                        onChange={(e) => updateField('metric', e.target.value)}
                    /> will increase, because users will <input 
                        className="bg-transparent border-b border-black outline-none font-bold text-black placeholder-slate-400 w-full md:w-auto"
                        placeholder="reasoning..."
                        value={data.reason}
                        onChange={(e) => updateField('reason', e.target.value)}
                    />."
                </div>
            </div>

            {/* Variants Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Control */}
                <div className="border-2 border-slate-200 p-6 bg-slate-50">
                    <div className="text-xs font-bold text-slate-400 uppercase mb-2 tracking-widest">Control (A)</div>
                    <div className="font-bold text-xl mb-4">Current Version</div>
                    <div className="h-32 bg-white border border-slate-300 flex items-center justify-center text-slate-300 font-mono">
                        [ Screenshot A ]
                    </div>
                </div>

                {/* Variant */}
                <div className="border-2 border-retro-primary p-6 bg-blue-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-retro-primary text-white text-xs font-bold px-2 py-1">TEST</div>
                    <div className="text-xs font-bold text-retro-primary uppercase mb-2 tracking-widest">Variant (B)</div>
                    <div className="font-bold text-xl mb-4">
                        <input 
                            value={data.variantName || 'New Design'} 
                            onChange={(e) => updateField('variantName', e.target.value)}
                            className="bg-transparent outline-none w-full" 
                        />
                    </div>
                    <div className="h-32 bg-white border border-retro-primary border-dashed flex items-center justify-center text-retro-primary font-mono">
                         [ Screenshot B ]
                    </div>
                </div>
            </div>

            {/* Calculator */}
            <div className="bg-black text-white p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                 <div className="flex items-center gap-4">
                     <Calculator size={24} />
                     <div>
                         <div className="text-xs font-bold text-slate-400 uppercase">Est. Baseline Conv.</div>
                         <div className="flex items-baseline gap-1">
                             <input 
                                type="number" 
                                value={data.baseline}
                                onChange={(e) => updateField('baseline', e.target.value)}
                                className="bg-transparent border-b border-white outline-none w-16 text-center font-mono font-bold text-lg"
                             />
                             <span>%</span>
                         </div>
                     </div>
                     <div className="text-slate-500"><ArrowRight /></div>
                     <div>
                         <div className="text-xs font-bold text-slate-400 uppercase">Min Detectable Effect</div>
                         <div className="flex items-baseline gap-1">
                             <input 
                                type="number" 
                                value={data.effect}
                                onChange={(e) => updateField('effect', e.target.value)}
                                className="bg-transparent border-b border-white outline-none w-16 text-center font-mono font-bold text-lg"
                             />
                             <span>%</span>
                         </div>
                     </div>
                 </div>

                 <div className="text-right">
                     <div className="text-xs font-bold text-slate-400 uppercase">Required Sample Size</div>
                     <div className="text-2xl font-mono font-bold text-retro-secondary">
                         ~{calculateSample().toLocaleString()} <span className="text-sm text-slate-400">users</span>
                     </div>
                 </div>
            </div>
        </div>
    </div>
  );
};
