import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { Gift, Meh, Smile, ArrowRight } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const ValuePropositionTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [data, setData] = useState(config.data);

  const updateContent = (section: string, val: string) => {
    const idx = data.findIndex(d => d.section === section);
    if (idx !== -1) {
        const newData = [...data];
        newData[idx] = { ...newData[idx], content: val };
        setData(newData);
    }
  };

  const getValue = (section: string) => data.find(d => d.section === section)?.content || '';

  return (
    <div className="p-4 md:p-8 bg-slate-100 overflow-x-auto flex justify-center min-h-[600px]">
       <div className="flex gap-8 md:gap-16 items-center min-w-[900px]">
          
          {/* Product Profile (Square) */}
          <div className="w-[400px] h-[400px] border-4 border-black bg-white shadow-hard relative flex flex-col">
             <div className="absolute top-2 left-2 font-mono font-bold bg-black text-white px-2">PRODUCT</div>
             
             {/* Top Left: Gain Creators */}
             <div className="flex-1 flex">
                 <div className="w-1/2 border-r-2 border-b-2 border-black p-4 bg-green-50">
                    <div className="text-xs font-bold uppercase mb-2 flex items-center gap-1"><Smile size={12}/> Gain Creators</div>
                    <textarea 
                        className="w-full h-full bg-transparent resize-none text-xs outline-none" 
                        placeholder="List..." 
                        value={getValue('Gain Creators')}
                        onChange={(e) => updateContent('Gain Creators', e.target.value)}
                    />
                 </div>
                 {/* Top Right is part of the triangle in real canvas, simplifying to square grid for usability */}
                 <div className="w-1/2 border-b-2 border-black p-4 bg-retro-gray flex items-center justify-center">
                    <div className="text-center">
                        <Gift size={32} className="mx-auto mb-2 text-retro-primary"/>
                        <div className="text-xs font-bold uppercase mb-2">Products & Services</div>
                        <textarea 
                            className="w-full bg-white border border-black p-1 resize-none text-xs outline-none h-20" 
                            placeholder="List..." 
                            value={getValue('Products & Services')}
                            onChange={(e) => updateContent('Products & Services', e.target.value)}
                        />
                    </div>
                 </div>
             </div>

             {/* Bottom: Pain Relievers */}
             <div className="h-1/2 p-4 bg-red-50">
                <div className="text-xs font-bold uppercase mb-2 flex items-center gap-1"><Meh size={12}/> Pain Relievers</div>
                <textarea 
                    className="w-full h-full bg-transparent resize-none text-xs outline-none" 
                    placeholder="List..." 
                    value={getValue('Pain Relievers')}
                    onChange={(e) => updateContent('Pain Relievers', e.target.value)}
                />
             </div>
          </div>

          {/* Arrow */}
          <div className="text-slate-400">
             <ArrowRight size={48} />
          </div>

          {/* Customer Profile (Circle) */}
          <div className="w-[400px] h-[400px] border-4 border-black bg-white rounded-full shadow-hard relative overflow-hidden flex flex-col">
             <div className="absolute top-6 right-12 font-mono font-bold bg-black text-white px-2 z-10">CUSTOMER</div>
             
             <div className="flex-1 flex">
                <div className="w-1/2 border-r-2 border-b-2 border-black p-8 pt-12 bg-green-50">
                     <div className="text-xs font-bold uppercase mb-2 text-center">Gains</div>
                     <textarea 
                        className="w-full h-full bg-transparent resize-none text-xs outline-none text-center" 
                        placeholder="..." 
                        value={getValue('Gains')}
                        onChange={(e) => updateContent('Gains', e.target.value)}
                    />
                </div>
                <div className="w-1/2 border-b-2 border-black p-8 pt-12 bg-red-50">
                     <div className="text-xs font-bold uppercase mb-2 text-center">Pains</div>
                     <textarea 
                        className="w-full h-full bg-transparent resize-none text-xs outline-none text-center" 
                        placeholder="..." 
                        value={getValue('Pains')}
                        onChange={(e) => updateContent('Pains', e.target.value)}
                    />
                </div>
             </div>
             
             {/* Bottom: Jobs */}
             <div className="h-1/2 p-8 bg-retro-gray flex flex-col items-center">
                 <div className="text-xs font-bold uppercase mb-2">Customer Jobs</div>
                 <textarea 
                    className="w-2/3 h-full bg-white border border-black resize-none text-xs outline-none p-2" 
                    placeholder="List jobs..." 
                    value={getValue('Customer Jobs')}
                    onChange={(e) => updateContent('Customer Jobs', e.target.value)}
                />
             </div>
          </div>

       </div>
    </div>
  );
};