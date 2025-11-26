
import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { CheckCircle2, XCircle, HelpCircle, User, Timer } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const UsabilityTestTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [data, setData] = useState(config.data);

  // Schema: Users are Rows, Tasks are Columns? Or Tasks are Rows?
  // Let's assume Data items are Users, and each User has results for multiple tasks.
  // Actually, config.data usually flat list. Let's restructure visually.
  // We'll treat data as "Tasks" and we can add columns for "User 1", "User 2", etc.
  
  // To make it simple and robust with existing data structure:
  // Data = [{ task: 'Task 1', u1: 'pass', u2: 'fail', u3: 'pass', time: '45s' }, ...]
  
  const [users, setUsers] = useState(['User 1', 'User 2', 'User 3']);

  const toggleResult = (taskIndex: number, userKey: string) => {
    const newData = [...data];
    const current = newData[taskIndex][userKey];
    newData[taskIndex][userKey] = current === 'pass' ? 'fail' : current === 'fail' ? 'struggle' : 'pass';
    setData(newData);
  };

  const getIcon = (status: string) => {
    switch (status) {
        case 'pass': return <CheckCircle2 className="text-green-500" size={20} />;
        case 'fail': return <XCircle className="text-red-500" size={20} />;
        case 'struggle': return <HelpCircle className="text-amber-500" size={20} />;
        default: return <div className="w-5 h-5 rounded-full border-2 border-slate-200"></div>;
    }
  };

  const calculateSuccessRate = (task: any) => {
      let pass = 0;
      users.forEach(u => {
          if (task[u.toLowerCase().replace(' ', '')] === 'pass') pass++;
      });
      return Math.round((pass / users.length) * 100);
  };

  return (
    <div className="bg-white p-6 border-2 border-retro-border shadow-hard max-w-6xl mx-auto overflow-hidden">
        <div className="flex justify-between items-center mb-6 border-b-2 border-black pb-4">
            <div>
                <h3 className="text-xl font-bold font-mono uppercase">{t('可用性测试仪表盘', 'Usability Lab Dashboard')}</h3>
                <p className="text-xs text-slate-500 font-mono mt-1">SESSION_ID: #UT-2024-BETA</p>
            </div>
            <div className="flex items-center gap-4 text-sm font-bold">
                <div className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-500"/> Success</div>
                <div className="flex items-center gap-1"><HelpCircle size={14} className="text-amber-500"/> Struggle</div>
                <div className="flex items-center gap-1"><XCircle size={14} className="text-red-500"/> Fail</div>
            </div>
        </div>

        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="p-4 border-b-2 border-black w-1/3 min-w-[200px] bg-slate-50">Task Scenario</th>
                        {users.map(u => (
                            <th key={u} className="p-4 border-b-2 border-black text-center min-w-[80px]">
                                <div className="flex flex-col items-center">
                                    <User size={16} className="mb-1 text-slate-400"/>
                                    <span className="text-xs font-bold uppercase">{u}</span>
                                </div>
                            </th>
                        ))}
                        <th className="p-4 border-b-2 border-black text-center w-[100px] bg-slate-50">Avg Time</th>
                        <th className="p-4 border-b-2 border-black text-center w-[100px] bg-slate-50">Success %</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, idx) => {
                        const successRate = calculateSuccessRate(row);
                        return (
                            <tr key={idx} className="group hover:bg-blue-50/30 transition-colors border-b border-slate-100">
                                <td className="p-4 border-r border-slate-200">
                                    <div className="font-bold text-sm mb-1">{row.task}</div>
                                    <div className="text-xs text-slate-500">{row.desc}</div>
                                </td>
                                {users.map(u => {
                                    const key = u.toLowerCase().replace(' ', '');
                                    return (
                                        <td 
                                            key={u} 
                                            className="p-4 text-center border-r border-slate-200 cursor-pointer hover:bg-slate-100"
                                            onClick={() => toggleResult(idx, key)}
                                        >
                                            <div className="flex justify-center">
                                                {getIcon(row[key])}
                                            </div>
                                        </td>
                                    );
                                })}
                                <td className="p-4 text-center border-r border-slate-200 font-mono text-xs">
                                    <div className="flex items-center justify-center gap-1 text-slate-600">
                                        <Timer size={12}/> {row.time}
                                    </div>
                                </td>
                                <td className="p-4 text-center font-bold">
                                    <div className={`
                                        text-xs px-2 py-1 rounded border
                                        ${successRate >= 80 ? 'bg-green-100 text-green-800 border-green-200' : 
                                          successRate >= 50 ? 'bg-amber-100 text-amber-800 border-amber-200' : 
                                          'bg-red-100 text-red-800 border-red-200'}
                                    `}>
                                        {successRate}%
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800 flex items-start gap-3">
            <HelpCircle className="shrink-0 mt-0.5" size={18} />
            <div>
                <strong>Analysis:</strong> Users struggled most with Task 2. The drop-down menu was not noticeable. Task 1 had 100% success rate but high time-on-task, suggesting inefficient flow.
            </div>
        </div>
    </div>
  );
};
