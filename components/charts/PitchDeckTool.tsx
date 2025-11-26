import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { Presentation, GripVertical, Plus, Trash2 } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const PitchDeckTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [slides, setSlides] = useState(config.data);

  const updateSlide = (index: number, field: string, val: string) => {
    const newSlides = [...slides];
    newSlides[index] = { ...newSlides[index], [field]: val };
    setSlides(newSlides);
  };

  const addSlide = () => {
      setSlides([...slides, { slide: 'New Slide', keyPoints: '' }]);
  };

  const deleteSlide = (index: number) => {
      const newSlides = [...slides];
      newSlides.splice(index, 1);
      setSlides(newSlides);
  };

  return (
    <div className="bg-slate-50 p-6 md:p-10 min-h-[600px]">
        <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold font-mono uppercase flex items-center gap-2">
                <Presentation className="text-retro-primary"/> {t('故事线梳理', 'Pitch Narrative Arc')}
            </h3>
            <div className="text-xs font-mono text-slate-500 bg-white px-2 py-1 border border-slate-300">
                TARGET: 10 SLIDES MAX
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {slides.map((s, idx) => (
                <div key={idx} className="bg-white border-2 border-black shadow-hard group hover:-translate-y-1 transition-transform relative">
                    {/* Slide Header */}
                    <div className="bg-black text-white p-2 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-retro-secondary">#{idx + 1}</span>
                            <input 
                                value={s.slide}
                                onChange={(e) => updateSlide(idx, 'slide', e.target.value)}
                                className="bg-transparent border-none outline-none font-bold text-sm w-full focus:bg-white/20 px-1"
                            />
                        </div>
                        <GripVertical size={14} className="text-slate-500 cursor-move" />
                    </div>

                    {/* Slide Content */}
                    <div className="p-4 h-40">
                        <textarea 
                            value={s.keyPoints}
                            onChange={(e) => updateSlide(idx, 'keyPoints', e.target.value)}
                            className="w-full h-full bg-slate-50 border border-slate-200 p-2 text-sm resize-none outline-none focus:border-retro-primary"
                            placeholder="Key bullet points..."
                        />
                    </div>

                    {/* Delete Action */}
                    <button 
                        onClick={() => deleteSlide(idx)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                    >
                        <Trash2 size={12} />
                    </button>
                </div>
            ))}

            {/* Add Button */}
            <button 
                onClick={addSlide}
                className="border-2 border-dashed border-slate-300 flex flex-col items-center justify-center h-[220px] hover:bg-white hover:border-retro-primary hover:text-retro-primary transition-colors text-slate-400"
            >
                <Plus size={32} />
                <span className="font-mono font-bold text-sm mt-2">{t('添加幻灯片', 'Add Slide')}</span>
            </button>
        </div>
    </div>
  );
};