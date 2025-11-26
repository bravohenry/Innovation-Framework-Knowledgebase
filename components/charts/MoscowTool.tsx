import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { Plus, X } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

const CATEGORIES = [
    { key: 'Must Have', color: 'bg-green-100 border-green-500', title: 'Must Have (Crucial)' },
    { key: 'Should Have', color: 'bg-blue-100 border-blue-500', title: 'Should Have (Important)' },
    { key: 'Could Have', color: 'bg-yellow-100 border-yellow-500', title: 'Could Have (Desirable)' },
    { key: 'Won\'t Have', color: 'bg-red-100 border-red-500', title: 'Won\'t Have (Later)' }
];

export const MoscowTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [items, setItems] = useState(config.data);

  const addItem = (category: string) => {
      setItems([...items, { text: 'New Item', category }]);
  };

  const updateItem = (index: number, val: string) => {
      const newItems = [...items];
      newItems[index].text = val;
      setItems(newItems);
  };

  const deleteItem = (index: number) => {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
  };

  return (
    <div className="bg-slate-50 p-6 overflow-x-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-w-[800px]">
            {CATEGORIES.map(cat => (
                <div key={cat.key} className={`border-t-4 ${cat.color.split(' ')[1]} bg-white shadow-hard border-2 border-black flex flex-col h-[500px]`}>
                    <div className={`p-3 font-bold font-mono text-sm uppercase border-b-2 border-black ${cat.color.split(' ')[0]}`}>
                        {cat.title}
                    </div>
                    <div className="flex-1 p-3 space-y-2 overflow-y-auto">
                        {items.map((item, idx) => {
                            if (item.category !== cat.key) return null;
                            return (
                                <div key={idx} className="flex gap-2 group animate-in slide-in-from-bottom-2 duration-200">
                                    <textarea 
                                        value={item.text}
                                        onChange={(e) => updateItem(idx, e.target.value)}
                                        className="w-full resize-none border-b border-dotted border-slate-300 focus:border-black outline-none bg-transparent text-sm min-h-[2em]"
                                        rows={Math.ceil(item.text.length / 30)}
                                    />
                                    <button 
                                        onClick={() => deleteItem(idx)}
                                        className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <X size={14}/>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                    <button 
                        onClick={() => addItem(cat.key)}
                        className="p-3 text-center text-xs font-bold text-slate-500 hover:bg-slate-100 border-t-2 border-black transition-colors flex items-center justify-center gap-2"
                    >
                        <Plus size={14} /> Add Item
                    </button>
                </div>
            ))}
        </div>
    </div>
  );
};