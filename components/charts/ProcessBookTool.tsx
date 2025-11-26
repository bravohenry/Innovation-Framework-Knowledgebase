import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { BookOpen, Camera, Mic, FileText, Plus, Trash2 } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const ProcessBookTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [entries, setEntries] = useState(config.data);

  const updateEntry = (index: number, field: string, val: string) => {
    const newEntries = [...entries];
    newEntries[index] = { ...newEntries[index], [field]: val };
    setEntries(newEntries);
  };

  const addEntry = () => {
      setEntries([...entries, { phase: 'New Phase', date: 'Date', content: '', type: 'Design' }]);
  };

  const deleteEntry = (index: number) => {
      const newEntries = [...entries];
      newEntries.splice(index, 1);
      setEntries(newEntries);
  };

  const getTypeIcon = (type: string) => {
      switch(type) {
          case 'Research': return <Mic size={16} />;
          case 'Design': return <Camera size={16} />;
          case 'Decision': return <FileText size={16} />;
          default: return <BookOpen size={16} />;
      }
  };

  return (
    <div className="bg-white p-6 md:p-10 min-h-[600px] border-2 border-retro-border shadow-hard">
        <div className="flex justify-between items-center mb-10 border-b-2 border-black pb-4">
            <h3 className="text-xl font-bold font-mono uppercase">Project Artifacts</h3>
            <button onClick={addEntry} className="bg-black text-white px-4 py-2 text-xs font-bold font-mono uppercase flex items-center gap-2 hover:bg-slate-800">
                <Plus size={14} /> Add Milestone
            </button>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 space-y-8 pb-8">
            {entries.map((entry, idx) => (
                <div key={idx} className="relative pl-8 group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-black rounded-full flex items-center justify-center group-hover:bg-retro-secondary transition-colors">
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-slate-50 border border-slate-200 p-4 rounded hover:shadow-md transition-shadow relative">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                                <div className="bg-white border border-slate-300 p-1.5 rounded text-slate-600">
                                    {getTypeIcon(entry.type)}
                                </div>
                                <div>
                                    <input 
                                        value={entry.phase}
                                        onChange={(e) => updateEntry(idx, 'phase', e.target.value)}
                                        className="font-bold text-sm bg-transparent outline-none w-32"
                                    />
                                    <input 
                                        value={entry.date}
                                        onChange={(e) => updateEntry(idx, 'date', e.target.value)}
                                        className="block text-xs font-mono text-slate-400 bg-transparent outline-none"
                                    />
                                </div>
                            </div>
                            <select 
                                value={entry.type}
                                onChange={(e) => updateEntry(idx, 'type', e.target.value)}
                                className="text-xs font-bold uppercase bg-white border border-slate-300 px-2 py-1 rounded outline-none"
                            >
                                <option>Research</option>
                                <option>Design</option>
                                <option>Decision</option>
                            </select>
                        </div>
                        
                        <textarea 
                            value={entry.content}
                            onChange={(e) => updateEntry(idx, 'content', e.target.value)}
                            className="w-full text-sm text-slate-700 bg-transparent outline-none resize-none font-medium"
                            rows={3}
                            placeholder="What happened? What did we learn?"
                        />

                        {/* Artifact Placeholder */}
                        <div className="mt-3 h-24 bg-white border-2 border-dashed border-slate-300 rounded flex items-center justify-center text-slate-400 text-xs font-mono uppercase cursor-pointer hover:bg-slate-50 hover:border-retro-primary hover:text-retro-primary transition-colors">
                            [ Upload Image/File ]
                        </div>

                        <button 
                             onClick={() => deleteEntry(idx)}
                             className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition-opacity"
                        >
                            <Trash2 size={14}/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};