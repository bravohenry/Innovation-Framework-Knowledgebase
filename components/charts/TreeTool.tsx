import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { Download, RefreshCw, Star } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const TreeTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [nodes, setNodes] = useState(config.data);

  // Group nodes by type for display
  const rootNode = nodes.find(n => n.type === 'North Star') || nodes[0];
  const inputNodes = nodes.filter(n => n.type !== 'North Star');

  const handleUpdate = (index: number, field: string, value: string) => {
    const newNodes = [...nodes];
    newNodes[index] = { ...newNodes[index], [field]: value };
    setNodes(newNodes);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Track': return 'bg-emerald-100 border-emerald-500 text-emerald-800';
      case 'Warning': return 'bg-amber-100 border-amber-500 text-amber-800';
      case 'Critical': return 'bg-red-100 border-red-500 text-red-800';
      default: return 'bg-white border-black text-black';
    }
  };

  return (
    <div className="w-full overflow-x-auto p-8 bg-retro-bg border-2 border-retro-border shadow-hard min-h-[600px] flex flex-col items-center">
        
      {/* Title */}
      <h3 className="text-xl font-bold font-mono uppercase border-b-4 border-black mb-12">
        {language === 'zh' ? config.title.zh : config.title.en}
      </h3>

      {/* Tree Visualization */}
      <div className="flex flex-col items-center gap-12 w-full max-w-4xl">
        
        {/* ROOT: North Star */}
        <div className="relative group z-10">
          <div className={`
             w-80 p-4 border-4 border-black shadow-[8px_8px_0_0_#000] bg-white transition-all
             flex flex-col items-center text-center
          `}>
             <div className="absolute -top-5 bg-retro-secondary border-2 border-black p-2 rounded-full shadow-hard-sm">
                <Star className="fill-black" size={20} />
             </div>
             <div className="mt-2 text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">North Star Metric</div>
             <input 
                value={rootNode.name}
                onChange={(e) => handleUpdate(nodes.indexOf(rootNode), 'name', e.target.value)}
                className="w-full text-center font-bold text-lg mt-1 border-b-2 border-transparent focus:border-black outline-none bg-transparent"
             />
             <div className="w-full mt-3 pt-3 border-t-2 border-dashed border-slate-300">
                <label className="text-xs font-bold text-slate-400 block mb-1">Status</label>
                <select 
                    value={rootNode.status}
                    onChange={(e) => handleUpdate(nodes.indexOf(rootNode), 'status', e.target.value)}
                    className={`w-full text-xs font-bold border-2 p-1 ${getStatusColor(rootNode.status)}`}
                >
                    <option>On Track</option>
                    <option>Warning</option>
                    <option>Critical</option>
                </select>
             </div>
          </div>
          
          {/* Connector Line Vertical */}
          <div className="absolute left-1/2 top-full h-12 w-1 bg-black -translate-x-1/2"></div>
        </div>

        {/* Connector Horizontal Bar */}
        <div className="relative w-[90%] border-t-4 border-black h-8 -mt-4">
             {/* Small vertical ticks for inputs */}
        </div>

        {/* Input Metrics Row */}
        <div className="flex justify-between w-full gap-4 -mt-10">
           {inputNodes.map((node, i) => {
               const realIndex = nodes.indexOf(node);
               return (
                <div key={i} className="flex-1 flex flex-col items-center relative">
                    <div className="h-6 w-1 bg-black mb-0"></div>
                    <div className="w-full bg-white border-2 border-black shadow-hard-sm p-3 flex flex-col h-full hover:-translate-y-1 transition-transform">
                        <div className="text-xs font-mono font-bold bg-black text-white px-1 inline-block self-start mb-2">
                            {node.type}
                        </div>
                        <textarea 
                            value={node.name}
                            onChange={(e) => handleUpdate(realIndex, 'name', e.target.value)}
                            className="w-full font-bold text-sm resize-none outline-none border-b border-transparent focus:border-black bg-transparent flex-1 mb-2"
                            rows={2}
                        />
                        <div className="bg-slate-50 p-2 border border-slate-200 text-xs text-slate-600 italic">
                           " <input 
                                value={node.hypothesis} 
                                onChange={(e) => handleUpdate(realIndex, 'hypothesis', e.target.value)}
                                className="bg-transparent w-full outline-none"
                            /> "
                        </div>
                        <div className="mt-2 pt-2 border-t border-slate-100">
                             <div className={`h-2 w-full ${node.status === 'On Track' ? 'bg-emerald-500' : node.status === 'Warning' ? 'bg-amber-500' : 'bg-red-500'}`}></div>
                        </div>
                    </div>
                </div>
               );
           })}
        </div>
      </div>
    </div>
  );
};