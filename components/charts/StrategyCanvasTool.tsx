import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Props {
  config: InteractiveConfig;
}

export const StrategyCanvasTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [data, setData] = useState(config.data);

  const handleScoreChange = (index: number, key: string, val: number) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [key]: val };
    setData(newData);
  };

  return (
    <div className="bg-white p-6 border-2 border-retro-border shadow-hard flex flex-col gap-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center border-b-2 border-retro-border pb-4">
        <h3 className="text-xl font-bold font-mono uppercase">
          {language === 'zh' ? config.title.zh : config.title.en}
        </h3>
        <div className="text-xs font-mono bg-retro-secondary px-2 py-1 border border-black">
           STRATEGY CANVAS VISUALIZER
        </div>
      </div>

      {/* Chart */}
      <div className="h-[400px] w-full bg-slate-50 border border-slate-200 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
                dataKey="factor" 
                tick={{ fontSize: 12, fontWeight: 'bold' }} 
                padding={{ left: 20, right: 20 }}
            />
            <YAxis domain={[0, 10]} />
            <Tooltip 
                contentStyle={{ border: '2px solid black', borderRadius: 0, boxShadow: '4px 4px 0 black' }}
            />
            <Legend wrapperStyle={{ fontFamily: 'monospace', paddingTop: '10px' }}/>
            <Line type="monotone" dataKey="us" name={t('我们 (Us)', 'Our Product')} stroke="#2563eb" strokeWidth={3} activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="competitor" name={t('竞品 (Competitor)', 'Competitor')} stroke="#f43f5e" strokeWidth={2} strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-retro-bg p-4 border-2 border-retro-border">
         {data.map((item, idx) => (
             <div key={idx} className="bg-white p-3 border border-slate-300 shadow-sm">
                 <div className="font-bold text-sm mb-2 font-mono truncate" title={item.factor}>{item.factor}</div>
                 <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="w-16 text-xs text-retro-primary font-bold">Us</span>
                        <input 
                            type="range" min="0" max="10" step="1"
                            value={item.us}
                            onChange={(e) => handleScoreChange(idx, 'us', parseInt(e.target.value))}
                            className="flex-1 h-2 bg-blue-100 rounded-none appearance-none cursor-pointer accent-retro-primary"
                        />
                        <span className="w-6 text-xs font-mono">{item.us}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-16 text-xs text-retro-accent font-bold">Comp</span>
                        <input 
                            type="range" min="0" max="10" step="1"
                            value={item.competitor}
                            onChange={(e) => handleScoreChange(idx, 'competitor', parseInt(e.target.value))}
                            className="flex-1 h-2 bg-red-100 rounded-none appearance-none cursor-pointer accent-retro-accent"
                        />
                         <span className="w-6 text-xs font-mono">{item.competitor}</span>
                    </div>
                 </div>
             </div>
         ))}
      </div>
    </div>
  );
};