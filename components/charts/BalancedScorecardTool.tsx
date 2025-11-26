
import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { DollarSign, Users, RefreshCw, BookOpen } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const BalancedScorecardTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [data, setData] = useState(config.data);

  const updateItem = (perspective: string, index: number, field: string, val: string) => {
      // Find the group index
      const groupIdx = data.findIndex(d => d.perspective === perspective);
      const newData = [...data];
      const items = [...newData[groupIdx].items];
      items[index] = { ...items[index], [field]: val };
      newData[groupIdx] = { ...newData[groupIdx], items };
      setData(newData);
  };

  const perspectives = [
      { key: 'Financial', icon: DollarSign, color: 'bg-green-100 border-green-500 text-green-800' },
      { key: 'Customer', icon: Users, color: 'bg-blue-100 border-blue-500 text-blue-800' },
      { key: 'Internal Process', icon: RefreshCw, color: 'bg-amber-100 border-amber-500 text-amber-800' },
      { key: 'Learning & Growth', icon: BookOpen, color: 'bg-purple-100 border-purple-500 text-purple-800' },
  ];

  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-[600px] flex items-center justify-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            
            {/* Central Circle (Decorative) */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-black rounded-full items-center justify-center text-white font-bold font-mono z-10 border-4 border-white shadow-lg text-center text-xs">
                VISION & STRATEGY
            </div>

            {perspectives.map((p) => {
                const groupData = data.find(d => d.perspective === p.key);
                return (
                    <div key={p.key} className={`border-t-4 ${p.color.split(' ')[1]} bg-white shadow-hard p-6 relative min-h-[250px]`}>
                        <div className="flex items-center gap-2 mb-4">
                            <div className={`p-2 rounded-full ${p.color.split(' ')[0]} ${p.color.split(' ')[2]}`}>
                                <p.icon size={20} />
                            </div>
                            <h3 className="font-bold uppercase font-mono text-lg">{p.key}</h3>
                        </div>

                        <div className="space-y-4">
                             {groupData?.items?.map((item: any, idx: number) => (
                                 <div key={idx} className="flex gap-4 items-center">
                                     <div className="flex-1">
                                         <label className="text-[10px] font-bold text-slate-400 uppercase">Objective</label>
                                         <input 
                                            value={item.objective}
                                            onChange={(e) => updateItem(p.key, idx, 'objective', e.target.value)}
                                            className="w-full text-sm font-bold border-b border-slate-200 outline-none focus:border-black"
                                         />
                                     </div>
                                     <div className="w-24">
                                         <label className="text-[10px] font-bold text-slate-400 uppercase">Target</label>
                                         <input 
                                            value={item.target}
                                            onChange={(e) => updateItem(p.key, idx, 'target', e.target.value)}
                                            className="w-full text-sm font-mono text-slate-600 border-b border-slate-200 outline-none focus:border-black"
                                         />
                                     </div>
                                 </div>
                             ))}
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  );
};
