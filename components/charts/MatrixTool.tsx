
import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { Download, RefreshCw, Plus, X } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const MatrixTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  // Initialize data: assume 4 quadrants for SWOT/sSWOT
  const [quadrants, setQuadrants] = useState(config.data || []);

  const addItem = (quadrantKey: string) => {
    // Find the quadrant index
    const index = quadrants.findIndex(q => q.key === quadrantKey);
    if (index === -1) return;

    const newQuadrants = [...quadrants];
    const items = newQuadrants[index].items || [];
    newQuadrants[index] = { ...newQuadrants[index], items: [...items, ''] };
    setQuadrants(newQuadrants);
  };

  const updateItem = (quadrantKey: string, itemIndex: number, val: string) => {
    const index = quadrants.findIndex(q => q.key === quadrantKey);
    const newQuadrants = [...quadrants];
    const items = [...newQuadrants[index].items];
    items[itemIndex] = val;
    newQuadrants[index] = { ...newQuadrants[index], items };
    setQuadrants(newQuadrants);
  };

  const removeItem = (quadrantKey: string, itemIndex: number) => {
    const index = quadrants.findIndex(q => q.key === quadrantKey);
    const newQuadrants = [...quadrants];
    const items = [...newQuadrants[index].items];
    items.splice(itemIndex, 1);
    newQuadrants[index] = { ...newQuadrants[index], items };
    setQuadrants(newQuadrants);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-black font-mono uppercase bg-retro-bg border-2 border-retro-border px-3 py-1 shadow-hard-sm">
            {language === 'zh' ? config.title.zh : config.title.en}
        </h3>
        <div className="flex gap-2">
            <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-retro-primary border-2 border-retro-border hover:bg-blue-700 shadow-hard-sm active:shadow-none active:translate-y-0.5 transition-all">
                <Download size={16} /> {t('导出 PNG', 'EXPORT PNG')}
            </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {config.schema.map((schemaItem) => {
           const dataItem = quadrants.find(q => q.key === schemaItem.key) || { items: [] };
           return (
             <div key={schemaItem.key} className="bg-white border-2 border-retro-border shadow-hard flex flex-col h-full min-h-[300px]">
                <div className="bg-retro-gray border-b-2 border-retro-border p-3 flex justify-between items-center">
                    <h4 className="font-bold font-mono text-sm uppercase">
                        {language === 'zh' ? schemaItem.labelZh : schemaItem.labelEn}
                    </h4>
                    <button 
                        onClick={() => addItem(schemaItem.key)}
                        className="p-1 bg-white border-2 border-retro-border hover:bg-retro-secondary shadow-hard-sm active:translate-y-0.5 active:shadow-none transition-all"
                    >
                        <Plus size={14} />
                    </button>
                </div>
                <div className="p-4 space-y-2 flex-1 overflow-y-auto max-h-[400px]">
                    {dataItem.items && dataItem.items.map((item: string, idx: number) => (
                        <div key={idx} className="flex gap-2 group">
                            <span className="font-mono font-bold text-slate-400 mt-1">{idx + 1}.</span>
                            <textarea
                                value={item}
                                onChange={(e) => updateItem(schemaItem.key, idx, e.target.value)}
                                className="flex-1 resize-none border-b-2 border-dotted border-slate-300 focus:border-black outline-none bg-transparent text-sm font-sans min-h-[1.5em] leading-relaxed"
                                rows={Math.max(1, Math.ceil(item.length / 40))}
                                placeholder="..."
                            />
                            <button 
                                onClick={() => removeItem(schemaItem.key, idx)}
                                className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-600 transition-opacity"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    ))}
                    {(!dataItem.items || dataItem.items.length === 0) && (
                        <div className="text-slate-400 text-xs font-mono italic text-center mt-10">
                            {t('点击 + 添加条目', 'Click + to add items')}
                        </div>
                    )}
                </div>
             </div>
           );
        })}
      </div>
    </div>
  );
};
