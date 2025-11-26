import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { Download, Plus, Trash2 } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

const ROLES = ['R', 'A', 'C', 'I', ''];
const ROLE_COLORS: Record<string, string> = {
  'R': 'bg-red-100 text-red-800 border-red-300',
  'A': 'bg-orange-100 text-orange-800 border-orange-300',
  'C': 'bg-blue-100 text-blue-800 border-blue-300',
  'I': 'bg-green-100 text-green-800 border-green-300',
  '': 'bg-white border-slate-200'
};

export const RaciTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [rows, setRows] = useState(config.data);

  // Helper to get next role
  const nextRole = (current: string) => {
    const idx = ROLES.indexOf(current);
    return ROLES[(idx + 1) % ROLES.length];
  };

  const handleCellClick = (rowIndex: number, key: string) => {
    const newRows = [...rows];
    const currentVal = newRows[rowIndex][key];
    newRows[rowIndex] = { ...newRows[rowIndex], [key]: nextRole(currentVal) };
    setRows(newRows);
  };

  const addRow = () => {
    const newRow: any = { task: 'New Task' };
    config.schema.forEach(col => {
      if (col.key !== 'task') newRow[col.key] = '';
    });
    setRows([...rows, newRow]);
  };

  const deleteRow = (index: number) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const updateTaskName = (index: number, name: string) => {
    const newRows = [...rows];
    newRows[index] = { ...newRows[index], task: name };
    setRows(newRows);
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

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6 p-4 bg-retro-bg border-2 border-retro-border">
        <div className="flex items-center gap-2"><span className="w-6 h-6 flex items-center justify-center font-bold font-mono text-xs bg-red-100 text-red-800 border border-red-300 rounded">R</span> <span className="text-xs font-bold text-slate-600">Responsible</span></div>
        <div className="flex items-center gap-2"><span className="w-6 h-6 flex items-center justify-center font-bold font-mono text-xs bg-orange-100 text-orange-800 border border-orange-300 rounded">A</span> <span className="text-xs font-bold text-slate-600">Accountable</span></div>
        <div className="flex items-center gap-2"><span className="w-6 h-6 flex items-center justify-center font-bold font-mono text-xs bg-blue-100 text-blue-800 border border-blue-300 rounded">C</span> <span className="text-xs font-bold text-slate-600">Consulted</span></div>
        <div className="flex items-center gap-2"><span className="w-6 h-6 flex items-center justify-center font-bold font-mono text-xs bg-green-100 text-green-800 border border-green-300 rounded">I</span> <span className="text-xs font-bold text-slate-600">Informed</span></div>
      </div>

      <div className="overflow-x-auto border-2 border-retro-border">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="text-xs text-slate-700 uppercase bg-retro-gray font-mono">
            <tr>
              {config.schema.map(col => (
                <th key={col.key} className="px-4 py-3 font-bold border-b-2 border-r-2 border-retro-border last:border-r-0">
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
                  <td key={col.key} className="px-4 py-2 border-r-2 border-b border-retro-border last:border-r-0 border-b-slate-200">
                    {col.key === 'task' ? (
                      <input 
                        type="text" 
                        value={row.task} 
                        onChange={(e) => updateTaskName(rIndex, e.target.value)}
                        className="w-full bg-transparent border-none focus:ring-0 font-sans font-medium text-slate-900"
                      />
                    ) : (
                      <div 
                        onClick={() => handleCellClick(rIndex, col.key)}
                        className={`
                            w-8 h-8 flex items-center justify-center font-bold font-mono cursor-pointer select-none border transition-all hover:scale-105 rounded
                            ${ROLE_COLORS[row[col.key]] || 'border-slate-200 hover:border-slate-400 bg-white'}
                        `}
                      >
                        {row[col.key]}
                      </div>
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
        <Plus size={16} /> {t('添加任务行', 'ADD_ROW')}
      </button>
    </div>
  );
};