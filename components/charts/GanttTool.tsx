import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { Plus, Trash2, Calendar } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const GanttTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [rows, setRows] = useState(config.data);

  // Helper to calculate bar position
  // Simplified: Mapping dates to % for demo purposes since we don't have a full date engine here
  // We assume the timeline is roughly Oct 1 to Oct 15 based on sample data.
  // In a real app, this would need `date-fns` or similar.
  const getPosition = (start: string, end: string) => {
      // Mock logic: Day 1 = Oct 1. total 15 days width.
      const s = parseInt(start.split('-')[2]) || 1;
      const e = parseInt(end.split('-')[2]) || 1;
      const left = ((s - 1) / 15) * 100;
      const width = Math.max(((e - s + 1) / 15) * 100, 5); // Min 5% width
      return { left: `${left}%`, width: `${width}%` };
  };

  const updateRow = (index: number, field: string, val: any) => {
    const newRows = [...rows];
    newRows[index] = { ...newRows[index], [field]: val };
    setRows(newRows);
  };

  const addRow = () => {
      setRows([...rows, { task: 'New Task', owner: 'Owner', start: '2023-10-11', end: '2023-10-12', status: 'Planned', progress: 0 }]);
  };

  const deleteRow = (index: number) => {
      const newRows = [...rows];
      newRows.splice(index, 1);
      setRows(newRows);
  };

  return (
    <div className="bg-white border-2 border-retro-border shadow-hard p-4 md:p-6 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold font-mono uppercase bg-retro-bg border-2 border-retro-border px-3 py-1">
                {language === 'zh' ? config.title.zh : config.title.en}
            </h3>
        </div>

        {/* Timeline Header */}
        <div className="flex border-b-2 border-retro-border mb-4 pb-2">
            <div className="w-1/3 min-w-[200px] font-bold font-mono text-xs text-slate-500 uppercase">Task Detail</div>
            <div className="flex-1 relative h-6">
                <div className="absolute left-0 text-xs font-mono text-slate-400">Day 1</div>
                <div className="absolute left-1/2 text-xs font-mono text-slate-400">Day 7</div>
                <div className="absolute right-0 text-xs font-mono text-slate-400">Day 15</div>
                {/* Grid lines */}
                <div className="absolute inset-0 flex justify-between px-2 opacity-10 pointer-events-none">
                    {[...Array(15)].map((_, i) => <div key={i} className="w-px h-full bg-black"></div>)}
                </div>
            </div>
        </div>

        <div className="space-y-3">
            {rows.map((row, index) => {
                const { left, width } = getPosition(row.start, row.end);
                return (
                    <div key={index} className="flex flex-col md:flex-row gap-4 group hover:bg-slate-50 p-2 rounded transition-colors">
                        {/* Task Info Inputs */}
                        <div className="w-full md:w-1/3 min-w-[200px] space-y-2">
                            <input 
                                value={row.task}
                                onChange={(e) => updateRow(index, 'task', e.target.value)}
                                className="w-full font-bold text-sm bg-transparent border-b border-transparent focus:border-black outline-none"
                            />
                            <div className="flex gap-2 text-xs">
                                <input 
                                    value={row.start}
                                    onChange={(e) => updateRow(index, 'start', e.target.value)}
                                    className="w-20 bg-slate-100 px-1 border border-slate-200"
                                />
                                <span>to</span>
                                <input 
                                    value={row.end}
                                    onChange={(e) => updateRow(index, 'end', e.target.value)}
                                    className="w-20 bg-slate-100 px-1 border border-slate-200"
                                />
                            </div>
                        </div>

                        {/* Visual Bar */}
                        <div className="flex-1 relative h-10 bg-retro-bg border border-slate-200 rounded my-auto">
                            <div 
                                className={`
                                    absolute top-2 bottom-2 rounded cursor-pointer shadow-sm group-hover:shadow-md transition-all flex items-center overflow-hidden
                                    ${row.status === 'Done' ? 'bg-emerald-400 border-emerald-600' : 
                                      row.status === 'In Progress' ? 'bg-retro-secondary border-yellow-600' : 'bg-retro-primary border-blue-800'}
                                    border
                                `}
                                style={{ left, width }}
                            >
                                {/* Progress Fill */}
                                <div className="h-full bg-black/10" style={{ width: `${row.progress}%` }}></div>
                                <span className="ml-2 text-[10px] font-bold text-black/50 whitespace-nowrap">{row.progress}%</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <button onClick={() => deleteRow(index)} className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-600 self-center">
                            <Trash2 size={16} />
                        </button>
                    </div>
                );
            })}
        </div>
        
        <button 
            onClick={addRow}
            className="mt-6 flex items-center gap-2 text-xs font-bold font-mono text-slate-500 border border-dashed border-slate-400 px-3 py-2 hover:bg-white hover:text-black hover:border-black w-full justify-center transition-all"
        >
            <Plus size={14} /> Add Task
        </button>
    </div>
  );
};