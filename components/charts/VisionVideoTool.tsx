import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { Film, Image as ImageIcon, Music, Plus, Trash2 } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const VisionVideoTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [scenes, setScenes] = useState(config.data);

  const updateScene = (index: number, field: string, val: string) => {
    const newScenes = [...scenes];
    newScenes[index] = { ...newScenes[index], [field]: val };
    setScenes(newScenes);
  };

  const addScene = () => {
    setScenes([...scenes, { scene: scenes.length + 1, visual: '', audio: '' }]);
  };

  const deleteScene = (index: number) => {
      const newScenes = [...scenes];
      newScenes.splice(index, 1);
      setScenes(newScenes);
  };

  return (
    <div className="bg-black/90 p-6 md:p-10 min-h-[600px] overflow-x-auto">
        <div className="flex items-center gap-4 mb-8 text-white">
            <Film className="text-retro-secondary" size={32} />
            <h3 className="text-2xl font-bold font-mono uppercase tracking-widest">Storyboard Sequence</h3>
        </div>

        <div className="flex gap-8 pb-8 min-w-max">
            {scenes.map((s, idx) => (
                <div key={idx} className="w-[300px] bg-white border-4 border-slate-700 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex flex-col relative group">
                    {/* Scene Number */}
                    <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 font-mono font-bold text-xs border border-white">
                        SCENE {idx + 1}
                    </div>

                    {/* Visual Frame */}
                    <div className="h-[200px] bg-slate-100 border-b-2 border-black p-4 flex flex-col justify-center">
                        <div className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-1">
                            <ImageIcon size={12}/> Visual Action
                        </div>
                        <textarea 
                            value={s.visual}
                            onChange={(e) => updateScene(idx, 'visual', e.target.value)}
                            className="w-full h-full bg-transparent resize-none outline-none text-sm font-medium"
                            placeholder="Describe the shot..."
                        />
                    </div>

                    {/* Audio Frame */}
                    <div className="h-[120px] bg-slate-50 p-4">
                        <div className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-1">
                            <Music size={12}/> Audio / V.O.
                        </div>
                        <textarea 
                            value={s.audio}
                            onChange={(e) => updateScene(idx, 'audio', e.target.value)}
                            className="w-full h-full bg-transparent resize-none outline-none text-sm font-mono text-slate-600 italic"
                            placeholder="Dialogue or SFX..."
                        />
                    </div>
                    
                    <button 
                        onClick={() => deleteScene(idx)}
                        className="absolute -top-3 -right-3 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <Trash2 size={16}/>
                    </button>
                </div>
            ))}

            {/* Add Button */}
            <button 
                onClick={addScene}
                className="w-[100px] border-4 border-dashed border-slate-600 rounded-lg flex items-center justify-center hover:border-retro-secondary hover:text-retro-secondary transition-colors text-slate-600"
            >
                <Plus size={48} />
            </button>
        </div>
    </div>
  );
};