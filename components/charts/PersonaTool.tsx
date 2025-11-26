import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { User, Heart, Frown, Target, Cpu } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const PersonaTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [data, setData] = useState(config.data);

  const getSectionIcon = (section: string) => {
    if (section.includes('Goals')) return <Target size={16} />;
    if (section.includes('Frustrations')) return <Frown size={16} />;
    if (section.includes('Tech')) return <Cpu size={16} />;
    if (section.includes('Bio')) return <User size={16} />;
    return <Heart size={16} />;
  };

  const updateContent = (index: number, val: string) => {
    const newData = [...data];
    newData[index].content = val;
    setData(newData);
  };
  
  const updateImplication = (index: number, val: string) => {
    const newData = [...data];
    newData[index].implication = val;
    setData(newData);
  };

  const nameSection = data.find(d => d.section.includes('Name'));
  const otherSections = data.filter(d => !d.section.includes('Name'));

  return (
    <div className="bg-slate-100 p-6 md:p-10 min-h-[600px] flex items-center justify-center">
      <div className="bg-white max-w-3xl w-full border-2 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col md:flex-row overflow-hidden rounded-xl">
        
        {/* Left Sidebar (Photo & Identity) */}
        <div className="md:w-1/3 bg-retro-primary p-6 flex flex-col items-center text-center border-b-2 md:border-b-0 md:border-r-2 border-black relative overflow-hidden">
            <div className="w-full aspect-square bg-slate-200 border-2 border-black mb-4 flex items-center justify-center relative shadow-hard-sm">
                <User size={64} className="text-slate-400" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent pointer-events-none"></div>
            </div>
            
            <input 
                value={nameSection?.content || "Name"}
                onChange={(e) => {
                    const idx = data.findIndex(d => d.section.includes('Name'));
                    if (idx !== -1) updateContent(idx, e.target.value);
                }}
                className="bg-transparent border-b-2 border-white/30 text-white font-black text-xl text-center w-full focus:outline-none focus:border-white mb-2"
            />
            
            <div className="mt-auto w-full bg-black/20 p-2 rounded text-white text-xs font-mono">
                <div className="flex justify-between mb-1">
                    <span>AGE</span>
                    <span>32</span>
                </div>
                <div className="flex justify-between">
                    <span>LOC</span>
                    <span>NY</span>
                </div>
            </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 p-6 md:p-8 bg-white">
            <div className="space-y-6">
                {otherSections.map((item, index) => {
                    const realIndex = data.indexOf(item);
                    return (
                        <div key={index} className="group">
                            <div className="flex items-center gap-2 mb-1 text-retro-primary font-bold font-mono text-xs uppercase tracking-wider">
                                {getSectionIcon(item.section)}
                                {item.section}
                            </div>
                            <textarea 
                                value={item.content}
                                onChange={(e) => updateContent(realIndex, e.target.value)}
                                className="w-full text-sm font-sans resize-none outline-none border-l-2 border-transparent focus:border-retro-primary pl-2 transition-all bg-slate-50 p-2 rounded"
                                rows={2}
                            />
                            {item.implication && item.implication !== '-' && (
                                <div className="mt-2 flex items-start gap-2 bg-yellow-50 p-2 border border-yellow-200 rounded text-xs text-slate-600">
                                    <span className="font-bold text-yellow-600">💡 Insight:</span>
                                    <input 
                                        value={item.implication}
                                        onChange={(e) => updateImplication(realIndex, e.target.value)}
                                        className="bg-transparent w-full outline-none"
                                    />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </div>
  );
};