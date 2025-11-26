import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { FileText, AlertTriangle, TrendingUp, CheckCircle } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const ExecSummaryTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [data, setData] = useState(config.data);

  const updateContent = (section: string, val: string) => {
    const idx = data.findIndex(d => d.section === section);
    if (idx !== -1) {
        const newData = [...data];
        newData[idx] = { ...newData[idx], content: val };
        setData(newData);
    }
  };

  const getValue = (section: string) => data.find(d => d.section === section)?.content || '';

  return (
    <div className="bg-slate-200 p-4 md:p-8 min-h-[600px] flex justify-center">
        <div className="bg-white w-full max-w-4xl border-t-8 border-retro-primary shadow-hard p-6 md:p-10">
            
            {/* Header */}
            <div className="flex justify-between items-start mb-8 border-b-2 border-slate-100 pb-4">
                <div>
                    <h1 className="text-2xl font-bold uppercase text-slate-800 tracking-tight">Executive Summary</h1>
                    <p className="text-slate-500 text-sm mt-1">For Decision Board Review</p>
                </div>
                <div className="bg-slate-100 px-3 py-1 text-xs font-mono font-bold text-slate-500 rounded">
                    BLUF: Bottom Line Up Front
                </div>
            </div>

            {/* Recommendation Block */}
            <div className="bg-blue-50 border-l-4 border-retro-primary p-6 mb-8">
                <div className="flex items-center gap-2 mb-2 text-retro-primary font-bold uppercase text-sm">
                    <CheckCircle size={16} /> Strategic Recommendation
                </div>
                <textarea 
                    value={getValue('Recommendation')}
                    onChange={(e) => updateContent('Recommendation', e.target.value)}
                    className="w-full bg-transparent text-xl md:text-2xl font-bold text-slate-900 outline-none resize-none leading-tight"
                    rows={2}
                    placeholder="We should..."
                />
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="border border-slate-200 p-4 rounded bg-white">
                    <div className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-1">
                        <TrendingUp size={12}/> Key Metric 1
                    </div>
                    <textarea 
                        value={getValue('Key Metric 1')}
                        onChange={(e) => updateContent('Key Metric 1', e.target.value)}
                        className="w-full text-3xl font-black text-slate-800 outline-none resize-none h-12"
                    />
                </div>
                <div className="border border-slate-200 p-4 rounded bg-white">
                    <div className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-1">
                        <TrendingUp size={12}/> Key Metric 2
                    </div>
                    <textarea 
                        value={getValue('Key Metric 2')}
                        onChange={(e) => updateContent('Key Metric 2', e.target.value)}
                        className="w-full text-3xl font-black text-slate-800 outline-none resize-none h-12"
                    />
                </div>
            </div>

            {/* Risk & Ask */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-50 p-4 rounded border border-red-100">
                    <div className="text-xs font-bold text-red-700 uppercase mb-2 flex items-center gap-1">
                        <AlertTriangle size={12}/> Critical Risks
                    </div>
                    <textarea 
                        value={getValue('Top Risk')}
                        onChange={(e) => updateContent('Top Risk', e.target.value)}
                        className="w-full bg-transparent text-sm text-red-900 outline-none resize-none font-medium"
                        rows={4}
                    />
                </div>
                <div className="bg-slate-800 p-4 rounded border border-slate-900 text-white">
                    <div className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center gap-1">
                        <FileText size={12}/> The Ask (Resources)
                    </div>
                    <textarea 
                        value={getValue('Ask')}
                        onChange={(e) => updateContent('Ask', e.target.value)}
                        className="w-full bg-transparent text-lg font-bold text-white outline-none resize-none"
                        rows={4}
                    />
                </div>
            </div>

        </div>
    </div>
  );
};