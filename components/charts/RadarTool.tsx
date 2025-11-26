
import React, { useState, useMemo } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Download, RefreshCw } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const RadarTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [data, setData] = useState(config.data);

  const handleValueChange = (index: number, newValue: number) => {
    const newData = [...data];
    newData[index] = { ...newData[index], value: newValue };
    setData(newData);
  };

  const chartData = useMemo(() => {
    return data.map((item, index) => {
      const schemaItem = config.schema.find(s => s.key === item.factor);
      return {
        ...item,
        subject: language === 'zh' ? schemaItem?.labelZh : schemaItem?.labelEn,
        fullMark: 5
      };
    });
  }, [data, config.schema, language]);

  return (
    <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Chart Area */}
      <div className="lg:col-span-2 bg-white p-6 border-2 border-retro-border shadow-hard flex flex-col items-center relative overflow-hidden">
        
        <h3 className="text-lg font-bold text-black font-mono mb-6 uppercase border-b-2 border-retro-gray w-full text-center pb-2">
            {language === 'zh' ? config.title.zh : config.title.en}
        </h3>
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
              <PolarGrid stroke="#94a3b8" />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: '#0f172a', fontSize: 13, fontWeight: 700, fontFamily: 'monospace' }} 
              />
              <PolarRadiusAxis angle={30} domain={[0, 5]} tick={false} axisLine={false} />
              <Radar
                name="Score"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={3}
                fill="#3b82f6"
                fillOpacity={0.3}
                isAnimationActive={false}
              />
              <Tooltip 
                contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '2px solid #000', 
                    borderRadius: '0px',
                    color: '#000',
                    fontFamily: 'monospace',
                    boxShadow: '4px 4px 0 #000'
                }}
                itemStyle={{ color: '#2563eb', fontWeight: 'bold' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex gap-4 text-sm font-mono w-full justify-center">
             <button className="flex items-center gap-2 bg-retro-primary text-white px-4 py-2 border-2 border-black hover:bg-blue-700 transition-colors shadow-hard-sm active:shadow-none active:translate-y-1">
                <Download size={14} /> {t('导出 PNG', 'Export PNG')}
             </button>
             <button 
                onClick={() => setData(config.data)}
                className="flex items-center gap-2 bg-white text-black px-4 py-2 border-2 border-black hover:bg-retro-gray transition-colors shadow-hard-sm active:shadow-none active:translate-y-1"
             >
                <RefreshCw size={14} /> {t('重置', 'Reset')}
             </button>
        </div>
      </div>

      {/* Controls Area */}
      <div className="bg-retro-bg p-6 border-2 border-retro-border shadow-hard h-fit">
        <h4 className="font-bold text-black mb-4 font-mono uppercase bg-retro-secondary border-2 border-retro-border px-2 inline-block">
            {t('参数调整', 'CONFIG')}
        </h4>
        <div className="space-y-6">
          {data.map((item, index) => {
            const schemaItem = config.schema.find(s => s.key === item.factor);
            const label = language === 'zh' ? schemaItem?.labelZh : schemaItem?.labelEn;
            
            return (
              <div key={item.factor}>
                <div className="flex justify-between mb-2 font-mono text-xs">
                  <label className="font-bold text-slate-700 uppercase">{label}</label>
                  <span className="font-bold text-white bg-black px-2">{item.value}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.5"
                  value={item.value}
                  onChange={(e) => handleValueChange(index, parseFloat(e.target.value))}
                  className="w-full h-3 bg-white border-2 border-black appearance-none cursor-pointer accent-retro-primary rounded-none"
                  style={{ accentColor: '#2563eb' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
