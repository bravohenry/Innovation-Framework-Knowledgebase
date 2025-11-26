
import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { Download, Plus, Trash2 } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const TableTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [rows, setRows] = useState(config.data || []);

  const addRow = () => {
    const newRow: any = {};
    config.schema.forEach(col => {
      newRow[col.key] = '';
    });
    setRows([...rows, newRow]);
  };

  const deleteRow = (index: number) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const updateCell = (index: number, key: string, value: any) => {
    const newRows = [...rows];
    newRows[index] = { ...newRows[index], [key]: value };
    setRows(newRows);
  };

  // Helper for Status Badges
  const getBadgeStyle = (value: string) => {
    if (!value) return '';
    const v = String(value).toLowerCase();
    
    if (['high', 'critical', 'blocked', 'threat', 'stopped'].some(k => v.includes(k))) {
      return 'bg-red-100 text-red-700 border-red-200';
    }
    if (['medium', 'in progress', 'warning', 'delayed'].some(k => v.includes(k))) {
      return 'bg-amber-100 text-amber-700 border-amber-200';
    }
    if (['low', 'done', 'opportunity', 'completed', 'on track', 'green'].some(k => v.includes(k))) {
      return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    }
    if (['planned', 'not started', 'draft'].some(k => v.includes(k))) {
      return 'bg-slate-100 text-slate-600 border-slate-200';
    }
    return 'bg-white text-slate-900 border-slate-200';
  };

  return (
    <div className="bg-white p-6 border-2 border-retro-border shadow-hard overflow-hidden max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-black font-mono uppercase bg-retro-bg border-2 border-retro-border px-3 py-1 shadow-hard-sm">
            {language === 'zh' ? config.title.zh : config.title.en}
        </h3>
        <div className="flex gap-2">
            <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-retro-primary border-2 border-retro-border hover:bg-blue-700 shadow-hard-sm active:shadow-none active:translate-y-0.5 transition-all">
                <Download size={16} /> {t('导出 CSV', 'EXPORT.CSV')}
            </button>
        </div>
      </div>

      <div className="overflow-x-auto border-2 border-retro-border">
        <table className="w-full text-sm text-left border-collapse min-w-[600px]">
          <thead className="text-xs text-slate-700 uppercase bg-retro-gray font-mono">
            <tr>
              {config.schema.map(col => (
                <th key={col.key} className="px-4 py-3 font-bold border-b-2 border-r-2 border-retro-border last:border-r-0 whitespace-nowrap">
                  {language === 'zh' ? col.labelZh : col.labelEn}
                </th>
              ))}
              <th className="w-10 border-b-2 border-retro-border"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rIndex) => (
              <tr key={rIndex} className="hover:bg-blue-50 transition-colors group">
                {config.schema.map(col => (
                  <td key={col.key} className="px-4 py-2 border-r-2 border-b border-retro-border last:border-r-0 border-b-slate-200 align-middle">
                    
                    {/* Render logic based on column type or key */}
                    {col.key === 'progress' || col.type === 'progress' ? (
                       <div className="flex items-center gap-2 min-w-[120px]">
                         <input 
                            type="range" 
                            min="0" max="100" 
                            value={row[col.key] || 0}
                            onChange={(e) => updateCell(rIndex, col.key, e.target.value)}
                            className="w-16 h-2 bg-slate-200 rounded-none appearance-none cursor-pointer accent-retro-primary"
                         />
                         <span className="font-mono text-xs w-8 text-right">{row[col.key]}%</span>
                       </div>
                    ) : col.type === 'select' ? (
                       <div className={`relative flex items-center border ${getBadgeStyle(row[col.key])} px-1`}>
                           <select
                             value={row[col.key] || ''}
                             onChange={(e) => updateCell(rIndex, col.key, e.target.value)}
                             className={`w-full bg-transparent border-none py-1 font-bold text-xs focus:ring-0 outline-none appearance-none cursor-pointer pr-4`}
                           >
                               <option value="">-</option>
                               {col.options?.map(opt => (
                                   <option key={opt} value={opt}>{opt}</option>
                               ))}
                           </select>
                           <div className="absolute right-1 pointer-events-none text-current opacity-50">▼</div>
                       </div>
                    ) : (
                      <textarea
                        value={row[col.key] || ''} 
                        onChange={(e) => updateCell(rIndex, col.key, e.target.value)}
                        className="w-full bg-transparent border-none focus:ring-0 font-sans text-slate-900 resize-none min-h-[2.5em] text-sm leading-normal p-1 focus:bg-white focus:outline-dashed focus:outline-1 focus:outline-slate-400"
                        rows={1}
                        placeholder="..."
                      />
                    )}
                  </td>
                ))}
                <td className="px-2 text-right border-b border-slate-200 bg-slate-50">
                    <button 
                        onClick={() => deleteRow(rIndex)}
                        className="text-slate-400 hover:text-red-600 transition-colors"
                    >
                        <Trash2 size={16} />
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button 
        onClick={addRow}
        className="mt-4 flex items-center gap-2 text-sm font-bold font-mono text-black bg-retro-secondary border-2 border-retro-border px-4 py-2 hover:bg-yellow-300 shadow-hard-sm active:shadow-none active:translate-y-0.5 transition-all w-full justify-center"
      >
        <Plus size={16} /> {t('添加行', 'ADD_ROW')}
      </button>
    </div>
  );
};
