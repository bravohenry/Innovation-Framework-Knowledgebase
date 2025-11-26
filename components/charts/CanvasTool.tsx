import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { Save, Printer, Stamp } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const CanvasTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [data, setData] = useState(config.data);

  const updateField = (index: number, value: string) => {
    const newData = [...data];
    newData[index] = { ...newData[index], content: value };
    setData(newData);
  };

  const updateValidation = (index: number, value: string) => {
    const newData = [...data];
    newData[index] = { ...newData[index], validation: value };
    setData(newData);
  };

  return (
    <div className="bg-slate-200 p-4 md:p-8 overflow-x-auto">
      {/* A4 Paper Effect */}
      <div className="bg-[#fffdf0] max-w-4xl mx-auto min-h-[1000px] shadow-[rgba(0,0,0,0.2)_10px_10px_20px] p-8 md:p-12 relative border border-slate-300">
        
        {/* Header / Watermark */}
        <div className="flex justify-between items-end border-b-4 border-black pb-4 mb-8">
            <div>
                <h1 className="text-4xl font-black uppercase font-mono tracking-tight text-black">
                    {language === 'zh' ? '商业机会声明' : 'Opportunity Statement'}
                </h1>
                <p className="font-mono text-sm mt-1">DOC_ID: #BOS-2024-001 // CONFIDENTIAL</p>
            </div>
            <div className="hidden md:block">
                 <div className="border-4 border-red-700 text-red-700 font-bold px-4 py-1 uppercase -rotate-12 opacity-80 text-xl font-mono">
                    DRAFT
                 </div>
            </div>
        </div>

        {/* Content Form */}
        <div className="space-y-8 font-serif">
            {data.map((item, index) => {
                // Determine label based on current language, fallback if needed
                const schemaItem = config.schema.find(s => s.options?.includes(item.section)); // This logic assumes 'section' in data matches 'options' in schema. 
                // Wait, the data structure in frameworks.ts has 'section' as a string value. 
                // Let's just display the item.section as the title for simplicity, or we can improve the schema linkage.
                
                return (
                    <div key={index} className="relative group">
                        <div className="flex items-center justify-between mb-2">
                             <h3 className="text-lg font-bold bg-black text-white px-2 py-0.5 font-mono uppercase inline-block">
                                {item.section}
                             </h3>
                             <select 
                                value={item.validation}
                                onChange={(e) => updateValidation(index, e.target.value)}
                                className={`
                                    text-xs font-bold border-2 px-2 py-1 outline-none uppercase font-mono cursor-pointer
                                    ${item.validation === 'Validated' ? 'bg-green-100 text-green-800 border-green-600' : 
                                      item.validation === 'Invalid' ? 'bg-red-100 text-red-800 border-red-600' : 
                                      'bg-slate-100 text-slate-600 border-slate-400'}
                                `}
                             >
                                <option value="Assumption">Assumption (Guess)</option>
                                <option value="Validated">Validated (Fact)</option>
                                <option value="Invalid">Invalid (Discard)</option>
                             </select>
                        </div>
                        
                        <div className="relative">
                            <textarea
                                value={item.content}
                                onChange={(e) => updateField(index, e.target.value)}
                                placeholder="Type here..."
                                className="w-full bg-transparent border-b-2 border-dotted border-slate-300 focus:border-black outline-none resize-none text-lg leading-relaxed p-2 font-sans transition-colors focus:bg-white/50"
                                rows={3}
                            />
                        </div>
                    </div>
                );
            })}
        </div>

        {/* Footer Signatures */}
        <div className="mt-16 pt-8 border-t-2 border-black grid grid-cols-2 gap-12">
            <div>
                <p className="font-mono text-xs uppercase mb-8">Prepared By:</p>
                <div className="border-b border-black h-8"></div>
            </div>
            <div>
                <p className="font-mono text-xs uppercase mb-8">Approved By:</p>
                <div className="border-b border-black h-8"></div>
            </div>
        </div>

      </div>
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-2 print:hidden">
         <button className="p-3 bg-retro-primary text-white border-2 border-black shadow-hard hover:translate-y-1 hover:shadow-hard-sm transition-all rounded-full" title="Save">
            <Save />
         </button>
         <button className="p-3 bg-white text-black border-2 border-black shadow-hard hover:translate-y-1 hover:shadow-hard-sm transition-all rounded-full" title="Print" onClick={() => window.print()}>
            <Printer />
         </button>
      </div>
    </div>
  );
};