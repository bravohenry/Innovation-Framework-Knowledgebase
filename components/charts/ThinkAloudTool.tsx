
import React, { useState } from 'react';
import { InteractiveConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { Mic, Play, Square, MessageSquare, AlertCircle, Clock } from 'lucide-react';

interface Props {
  config: InteractiveConfig;
}

export const ThinkAloudTool: React.FC<Props> = ({ config }) => {
  const { language, t } = useLanguage();
  const [tasks, setTasks] = useState(config.data);
  const [activeTaskIndex, setActiveTaskIndex] = useState(0);

  const addObservation = (index: number, text: string, type: 'quote' | 'issue') => {
    const newTasks = [...tasks];
    const obs = newTasks[index].observations || [];
    newTasks[index].observations = [...obs, { text, type, timestamp: new Date().toLocaleTimeString() }];
    setTasks(newTasks);
  };

  const currentTask = tasks[activeTaskIndex];

  return (
    <div className="bg-slate-100 p-4 md:p-8 min-h-[600px]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left: Task Script */}
        <div className="md:col-span-1 bg-white border-2 border-black shadow-hard flex flex-col h-[600px]">
           <div className="bg-black text-white p-4 flex items-center gap-2">
              <Mic size={20} className="animate-pulse text-red-500" />
              <h3 className="font-mono font-bold uppercase">{t('测试脚本', 'Test Script')}</h3>
           </div>
           
           <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {tasks.map((task, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveTaskIndex(idx)}
                    className={`
                        p-4 border-2 cursor-pointer transition-all
                        ${idx === activeTaskIndex ? 'border-retro-primary bg-blue-50 shadow-hard-sm' : 'border-slate-200 hover:border-slate-400'}
                    `}
                  >
                     <div className="text-xs font-bold font-mono text-slate-500 mb-1">TASK {idx + 1}</div>
                     <div className="font-bold text-sm mb-2">{task.task}</div>
                     <div className="text-xs text-slate-600 italic">" {task.scenario} "</div>
                  </div>
              ))}
           </div>
        </div>

        {/* Right: Observation Log */}
        <div className="md:col-span-2 bg-retro-bg border-2 border-black shadow-hard flex flex-col h-[600px]">
           <div className="bg-white border-b-2 border-black p-4 flex justify-between items-center">
              <div>
                  <div className="text-xs font-mono font-bold text-retro-primary uppercase">Recording Observations for</div>
                  <h2 className="font-bold text-lg">{currentTask?.task}</h2>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono bg-black text-white px-2 py-1 rounded">
                  <Clock size={12} /> REC 00:00:00
              </div>
           </div>

           <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white/50">
               {(!currentTask?.observations || currentTask.observations.length === 0) && (
                   <div className="text-center text-slate-400 mt-20 italic font-mono">
                       {t('暂无观察记录...', 'No observations recorded yet...')}
                   </div>
               )}
               {currentTask?.observations?.map((obs: any, i: number) => (
                   <div key={i} className={`flex gap-3 animate-in slide-in-from-bottom-2 duration-300 ${obs.type === 'issue' ? 'text-red-700' : 'text-blue-700'}`}>
                       <div className="mt-1 shrink-0">
                           {obs.type === 'issue' ? <AlertCircle size={16} /> : <MessageSquare size={16} />}
                       </div>
                       <div className="bg-white border border-slate-200 p-2 rounded shadow-sm w-full">
                           <div className="text-[10px] font-mono text-slate-400 mb-1">{obs.timestamp}</div>
                           <div className="text-sm font-medium">{obs.text}</div>
                       </div>
                   </div>
               ))}
           </div>

           <div className="p-4 bg-white border-t-2 border-black">
               <div className="flex gap-2">
                   <input 
                      id="obsInput"
                      className="flex-1 border-2 border-slate-300 p-2 text-sm outline-none focus:border-black transition-colors"
                      placeholder={t('输入用户的原话或行为...', 'Type user quote or behavior...')}
                      onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                              addObservation(activeTaskIndex, e.currentTarget.value, 'quote');
                              e.currentTarget.value = '';
                          }
                      }}
                   />
                   <button 
                      onClick={() => {
                          const input = document.getElementById('obsInput') as HTMLInputElement;
                          if (input.value) {
                              addObservation(activeTaskIndex, input.value, 'issue');
                              input.value = '';
                          }
                      }}
                      className="bg-red-100 text-red-700 border-2 border-red-300 px-3 py-2 font-bold text-xs uppercase hover:bg-red-200"
                   >
                       Flag Issue
                   </button>
                   <button 
                      onClick={() => {
                          const input = document.getElementById('obsInput') as HTMLInputElement;
                          if (input.value) {
                              addObservation(activeTaskIndex, input.value, 'quote');
                              input.value = '';
                          }
                      }}
                      className="bg-blue-100 text-blue-700 border-2 border-blue-300 px-3 py-2 font-bold text-xs uppercase hover:bg-blue-200"
                   >
                       Log Quote
                   </button>
               </div>
           </div>
        </div>
      </div>
    </div>
  );
};
