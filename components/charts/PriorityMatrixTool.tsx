import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Label } from 'recharts';
import { Plus, Trash2 } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const PriorityMatrixTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [data, setData] = useState(config.data);

  const updateItem = (index: number, field: string, value: any) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    setData(newData);
  };

  const addItem = () => {
    setData([...data, { name: 'New Feature', x: 5, y: 5 }]);
  };

  const deleteItem = (index: number) => {
     const newData = [...data];
     newData.splice(index, 1);
     setData(newData);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
      {/* Chart */}
      <div className="flex-1 bg-white p-4 border-2 border-retro-border shadow-hard h-[500px] relative">
         <h4 className="absolute top-2 left-2 text-xs font-bold bg-retro-secondary px-2 border border-black">Value vs. Effort</h4>
         <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="Effort" unit="" domain={[0, 10]} label={{ value: 'Effort (Cost/Time)', position: 'insideBottom', offset: -10 }} />
              <YAxis type="number" dataKey="y" name="Value" unit="" domain={[0, 10]} label={{ value: 'Value (Impact)', angle: -90, position: 'insideLeft' }} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <ReferenceLine x={5} stroke="black" strokeDasharray="3 3" />
              <ReferenceLine y={5} stroke="black" strokeDasharray="3 3" />
              {/* Quadrant Labels */}
              <Label value="Quick Wins" position="insideTopLeft" offset={10} />
              <Scatter name="Features" data={data} fill="#2563eb" shape="circle" />
            </ScatterChart>
         </ResponsiveContainer>
         {/* Custom quadrant labels overlay */}
         <div className="absolute top-10 left-10 text-xs font-bold text-green-600 bg-white/80 px-1 pointer-events-none">Quick Wins (High Value, Low Effort)</div>
         <div className="absolute top-10 right-10 text-xs font-bold text-blue-600 bg-white/80 px-1 pointer-events-none">Major Projects (High Value, High Effort)</div>
         <div className="absolute bottom-10 left-10 text-xs font-bold text-slate-500 bg-white/80 px-1 pointer-events-none">Fill-ins (Low Value, Low Effort)</div>
         <div className="absolute bottom-10 right-10 text-xs font-bold text-red-600 bg-white/80 px-1 pointer-events-none">Thankless Tasks (Low Value, High Effort)</div>
      </div>

      {/* Editor */}
      <div className="w-full lg:w-1/3 bg-retro-bg border-2 border-retro-border p-4 flex flex-col h-[500px]">
          <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold font-mono">ITEMS</h3>
              <button onClick={addItem} className="p-1 bg-retro-primary text-white border-2 border-black shadow-hard-sm active:translate-y-0.5 active:shadow-none"><Plus size={16}/></button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-2 pr-2">
              {data.map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-300 p-2 text-sm shadow-sm group">
                      <div className="flex justify-between mb-2">
                        <input 
                            value={item.name} 
                            onChange={(e) => updateItem(idx, 'name', e.target.value)}
                            className="font-bold w-full outline-none bg-transparent border-b border-transparent focus:border-slate-300"
                        />
                        <button onClick={() => deleteItem(idx)} className="text-slate-300 hover:text-red-500"><Trash2 size={14}/></button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                          <div>
                              <label className="text-[10px] text-slate-500 uppercase font-bold">Effort (X)</label>
                              <input 
                                type="number" min="0" max="10" 
                                value={item.x} 
                                onChange={(e) => updateItem(idx, 'x', Number(e.target.value))}
                                className="w-full border border-slate-200 p-1"
                              />
                          </div>
                          <div>
                              <label className="text-[10px] text-slate-500 uppercase font-bold">Value (Y)</label>
                              <input 
                                type="number" min="0" max="10" 
                                value={item.y} 
                                onChange={(e) => updateItem(idx, 'y', Number(e.target.value))}
                                className="w-full border border-slate-200 p-1"
                              />
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};