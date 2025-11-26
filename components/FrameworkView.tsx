import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { frameworks } from '../data/frameworks';
import { useLanguage } from '../contexts/LanguageContext';
import { Layers, BookOpen, Share2, Minimize, Maximize, X } from 'lucide-react';
import { InteractiveTools } from './InteractiveTools';

export const FrameworkView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'guide' | 'interactive'>('guide');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const framework = frameworks.find((f) => f.slug === slug);

  if (!framework) {
    return <Navigate to="/" />;
  }

  const tags = language === 'zh' ? framework.tags : framework.tagsEn;

  return (
    <div className="bg-white border-2 border-retro-border shadow-hard flex flex-col h-full overflow-hidden relative">
      {/* Window Title Bar - Classic Blue */}
      <div className="bg-retro-primary p-2 flex items-center justify-between border-b-2 border-retro-border shrink-0">
         <div className="flex items-center gap-2">
            <span className="text-white font-bold font-mono text-sm px-2">
                {language === 'zh' ? framework.title : framework.titleEn}
            </span>
         </div>
         <div className="flex gap-1">
            <button className="w-5 h-5 bg-retro-gray border border-white shadow-[1px_1px_0_0_rgba(0,0,0,0.5)] flex items-center justify-center active:border-retro-border active:shadow-none">
                <Minimize size={10} className="text-black"/>
            </button>
            <button 
                onClick={() => {
                    if (activeTab === 'interactive' && framework.interactive) {
                        setIsFullscreen(true);
                    } else if (framework.interactive) {
                        setActiveTab('interactive');
                        setIsFullscreen(true);
                    }
                }}
                className="w-5 h-5 bg-retro-gray border border-white shadow-[1px_1px_0_0_rgba(0,0,0,0.5)] flex items-center justify-center active:border-retro-border active:shadow-none"
            >
                <Maximize size={10} className="text-black"/>
            </button>
            <button className="w-5 h-5 bg-retro-gray border border-white shadow-[1px_1px_0_0_rgba(0,0,0,0.5)] flex items-center justify-center active:border-retro-border active:shadow-none">
                <X size={10} className="text-black"/>
            </button>
         </div>
      </div>

      {/* Header Banner */}
      <div className="bg-retro-bg border-b-2 border-retro-border p-6 md:p-8 shrink-0">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-black text-white text-xs font-bold px-2 py-1 font-mono uppercase">
                CH_{framework.chapter}
              </span>
              {tags.map(tag => (
                <span key={tag} className="text-xs text-slate-700 border border-slate-300 px-2 py-1 bg-white font-mono">
                  #{tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-black text-black mb-3 uppercase tracking-tight leading-none">
              {language === 'zh' ? framework.title : framework.titleEn}
            </h1>
            <p className="text-slate-700 text-lg font-sans max-w-3xl border-l-4 border-retro-secondary pl-4 py-1 leading-relaxed">
              {language === 'zh' ? framework.summary : framework.summaryEn}
            </p>
          </div>
          <div className="flex gap-2">
             <button className="p-2 border-2 border-retro-border bg-white shadow-hard-sm hover:shadow-none hover:translate-y-0.5 active:bg-slate-200 transition-all text-slate-700" title={t('分享', 'Share')}>
                 <Share2 size={20} />
             </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b-2 border-retro-border px-4 bg-retro-gray pt-4 gap-2 justify-between items-end shrink-0">
        <div className="flex gap-2">
            <button
            onClick={() => setActiveTab('guide')}
            className={`
                flex items-center gap-2 px-6 py-2 text-sm font-bold border-t-2 border-x-2 border-retro-border transition-all mb-[-2px] rounded-t-sm
                ${activeTab === 'guide' 
                ? 'bg-white text-black z-10 pb-3' 
                : 'bg-slate-300 text-slate-600 hover:bg-slate-200'}
            `}
            >
            <BookOpen size={16} />
            {t('指南', 'Guide')}
            </button>
            {framework.interactive && (
            <button
                onClick={() => setActiveTab('interactive')}
                className={`
                flex items-center gap-2 px-6 py-2 text-sm font-bold border-t-2 border-x-2 border-retro-border transition-all mb-[-2px] rounded-t-sm
                ${activeTab === 'interactive' 
                ? 'bg-white text-black z-10 pb-3' 
                : 'bg-slate-300 text-slate-600 hover:bg-slate-200'}
                `}
            >
                <Layers size={16} />
                {t('交互工具', 'Interactive Tool')}
            </button>
            )}
        </div>

        {/* Fullscreen Button */}
        {activeTab === 'interactive' && framework.interactive && (
            <button
                onClick={() => setIsFullscreen(true)}
                className="mb-2 flex items-center gap-2 px-3 py-1 text-xs font-bold border-2 border-black bg-white hover:bg-retro-secondary shadow-hard-sm active:translate-y-0.5 active:shadow-none transition-all"
            >
                <Maximize size={14} />
                <span className="hidden md:inline">{t('全屏模式', 'FULLSCREEN')}</span>
            </button>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8 flex-1 bg-white overflow-y-auto">
        {activeTab === 'guide' && (
          <article className="prose prose-slate max-w-4xl mx-auto prose-headings:font-bold prose-headings:font-mono prose-a:text-retro-primary prose-img:border-2 prose-img:border-black prose-img:shadow-hard">
             <div dangerouslySetInnerHTML={{ __html: language === 'zh' ? framework.htmlContent : framework.htmlContentEn }} />
          </article>
        )}

        {/* 
            We render the Interactive Tool inside a div that can be toggled to fixed position.
            This preserves component state (user inputs) when toggling fullscreen.
        */}
        {activeTab === 'interactive' && framework.interactive && (
            <div className={isFullscreen ? "fixed inset-0 z-50 bg-retro-bg flex flex-col animate-in fade-in duration-200" : "h-full"}>
                
                {/* Fullscreen Header */}
                {isFullscreen && (
                    <div className="bg-retro-primary p-3 flex items-center justify-between border-b-2 border-black shrink-0 shadow-lg">
                        <div className="flex items-center gap-3 text-white">
                            <Layers size={20} />
                            <h2 className="font-bold font-mono text-lg uppercase tracking-tight">
                                {language === 'zh' ? framework.title : framework.titleEn} - {t('交互工具', 'Interactive Tool')}
                            </h2>
                        </div>
                        <button 
                            onClick={() => setIsFullscreen(false)}
                            className="flex items-center gap-2 px-4 py-1 bg-white text-black font-bold font-mono border-2 border-black hover:bg-red-500 hover:text-white transition-colors shadow-hard-sm active:translate-y-0.5 active:shadow-none"
                        >
                            <X size={16} />
                            {t('关闭全屏', 'EXIT FULLSCREEN')}
                        </button>
                    </div>
                )}

                <div className={isFullscreen ? "flex-1 overflow-auto p-4 md:p-8 flex justify-center" : ""}>
                    <div className={isFullscreen ? "w-full min-h-full max-w-[1600px] bg-white border-2 border-retro-border shadow-hard p-4 md:p-8" : ""}>
                        <InteractiveTools config={framework.interactive} />
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};