import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { Key, Users, Truck, Heart, DollarSign, Package, Activity, Layers, Tag } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const BMCTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [data, setData] = useState(config.data);

  const updateContent = (sectionName: string, val: string) => {
    const idx = data.findIndex(d => d.section === sectionName);
    if (idx !== -1) {
        const newData = [...data];
        newData[idx] = { ...newData[idx], content: val };
        setData(newData);
    }
  };

  const getValue = (sectionName: string) => data.find(d => d.section === sectionName)?.content || '';

  const Box = ({ section, icon: Icon, className }: { section: string, icon: any, className: string }) => (
    <div className={`border-2 border-black bg-white p-3 flex flex-col group relative ${className}`}>
        <div className="flex items-center gap-2 mb-2 text-slate-500 group-focus-within:text-retro-primary transition-colors">
            <Icon size={16} />
            <span className="text-xs font-bold font-mono uppercase">{section}</span>
        </div>
        <textarea 
            className="flex-1 w-full resize-none outline-none text-xs md:text-sm font-sans bg-transparent border-t border-dotted border-transparent focus:border-slate-300 p-1 leading-relaxed"
            placeholder="..."
            value={getValue(section)}
            onChange={(e) => updateContent(section, e.target.value)}
        />
    </div>
  );

  return (
    <div className="bg-slate-100 p-2 md:p-6 overflow-x-auto">
        <div className="min-w-[1000px] max-w-6xl mx-auto border-2 border-black shadow-hard bg-white">
            {/* Header */}
            <div className="p-4 border-b-2 border-black bg-retro-gray flex justify-between items-center">
                <h3 className="font-bold font-mono text-xl uppercase">Business Model Canvas</h3>
                <div className="text-xs font-mono text-slate-500">Designed by Strategyzer</div>
            </div>

            {/* Grid Layout: 5 Columns */}
            <div className="grid grid-cols-5 min-h-[600px] divide-x-2 divide-black">
                
                {/* Col 1: Key Partners */}
                <div className="col-span-1">
                    <Box section="Key Partners" icon={Users} className="h-full border-none" />
                </div>

                {/* Col 2: Activities & Resources */}
                <div className="col-span-1 flex flex-col divide-y-2 divide-black">
                    <Box section="Key Activities" icon={Activity} className="h-1/2 border-none" />
                    <Box section="Key Resources" icon={Layers} className="h-1/2 border-none" />
                </div>

                {/* Col 3: Value Propositions (Center) */}
                <div className="col-span-1">
                    <Box section="Value Propositions" icon={Package} className="h-full border-none bg-yellow-50" />
                </div>

                {/* Col 4: Relationships & Channels */}
                <div className="col-span-1 flex flex-col divide-y-2 divide-black">
                    <Box section="Customer Relationships" icon={Heart} className="h-1/2 border-none" />
                    <Box section="Channels" icon={Truck} className="h-1/2 border-none" />
                </div>

                {/* Col 5: Customer Segments */}
                <div className="col-span-1">
                    <Box section="Customer Segments" icon={Tag} className="h-full border-none" />
                </div>
            </div>

            {/* Bottom Row: Cost & Revenue */}
            <div className="grid grid-cols-2 divide-x-2 divide-black border-t-2 border-black h-[200px]">
                <Box section="Cost Structure" icon={DollarSign} className="border-none bg-red-50" />
                <Box section="Revenue Streams" icon={DollarSign} className="border-none bg-green-50" />
            </div>
        </div>
    </div>
  );
};