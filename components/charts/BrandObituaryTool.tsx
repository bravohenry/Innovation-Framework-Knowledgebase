import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { Newspaper, Calendar, Globe } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const BrandObituaryTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [data, setData] = useState(config.data[0]);

  const updateField = (field: string, value: string) => {
    setData({ ...data, [field]: value });
  };

  return (
    <div className="bg-slate-200 p-4 md:p-8 min-h-[600px] flex justify-center font-serif">
      <div className="bg-[#fdfbf7] w-full max-w-3xl shadow-[0_0_15px_rgba(0,0,0,0.2)] p-8 md:p-12 relative border-t-8 border-black">
        
        {/* Newspaper Header */}
        <div className="border-b-4 border-black pb-4 mb-8 text-center">
            <div className="flex justify-between items-center border-b border-black pb-2 mb-2 text-xs font-sans font-bold uppercase tracking-widest text-slate-500">
                <span>VOL. XCIX No. 1</span>
                <span>{t('未来时报', 'THE FUTURE TIMES')}</span>
                <span>$1.00</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none mb-4">
                {t('特别报道', 'SPECIAL REPORT')}
            </h1>
            <div className="flex justify-center gap-4 text-sm font-sans font-bold text-slate-600">
                <div className="flex items-center gap-1"><Globe size={14}/> GLOBAL EDITION</div>
                <div className="flex items-center gap-1">
                    <Calendar size={14}/> 
                    <input 
                        type="date" 
                        value={data.date} 
                        onChange={(e) => updateField('date', e.target.value)}
                        className="bg-transparent border-b border-dotted border-slate-400 focus:border-black outline-none font-mono"
                    />
                </div>
            </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
            <div className="text-center">
                <textarea 
                    className="w-full text-center text-3xl md:text-4xl font-bold bg-transparent border-none outline-none resize-none leading-tight placeholder-slate-300"
                    placeholder="Headline: Company X Changes World..."
                    value={data.headline}
                    onChange={(e) => updateField('headline', e.target.value)}
                    rows={2}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-justify leading-relaxed text-slate-800">
                <div className="first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-2">
                    <p className="mb-4 font-bold text-sm uppercase text-slate-400 font-sans border-b">Legacy & Achievement</p>
                    <textarea 
                        className="w-full h-48 bg-transparent border-none outline-none resize-none"
                        placeholder="Write the success story..."
                        value={data.achievement}
                        onChange={(e) => updateField('achievement', e.target.value)}
                    />
                </div>
                <div>
                     <p className="mb-4 font-bold text-sm uppercase text-slate-400 font-sans border-b">Who Misses Us?</p>
                     <textarea 
                        className="w-full h-48 bg-transparent border-none outline-none resize-none"
                        placeholder="Who would mourn if we disappeared?..."
                        value={data.missedBy}
                        onChange={(e) => updateField('missedBy', e.target.value)}
                    />
                </div>
            </div>
        </div>

        <div className="mt-12 pt-4 border-t-2 border-black text-center text-xs font-sans text-slate-400 uppercase">
            Start with the end in mind.
        </div>

      </div>
    </div>
  );
};