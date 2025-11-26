import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getChapters } from '../data/frameworks';
import { ArrowRight, FolderOpen, Layers } from 'lucide-react';

export const ChapterView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  
  const chapters = getChapters(language);
  const chapter = chapters.find(c => c.id === id);

  if (!chapter) {
    return <Navigate to="/" />;
  }

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="bg-retro-surface border-2 border-retro-border p-6 md:p-10 shadow-hard relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <FolderOpen size={120} />
        </div>
        <div className="relative z-10">
          <span className="bg-black text-white text-xs font-bold px-2 py-1 font-mono uppercase mb-4 inline-block">
            CHAPTER_{chapter.id}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">
            {language === 'zh' ? chapter.title : chapter.titleEn}
          </h1>
          <p className="text-lg text-slate-600 font-sans max-w-2xl">
            {t(
              `本章节包含 ${chapter.frameworks.length} 个核心方法论，旨在帮助您在这一阶段实现突破。`,
              `This chapter contains ${chapter.frameworks.length} core methodologies designed to help you breakthrough in this stage.`
            )}
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapter.frameworks.map((fw, index) => (
          <Link 
            key={fw.slug} 
            to={`/framework/${fw.slug}`}
            className="group bg-white border-2 border-retro-border hover:shadow-hard transition-all relative block h-full flex flex-col"
          >
            <div className="flex items-center justify-between border-b-2 border-retro-border bg-retro-gray px-4 py-2">
                <span className="text-xs font-bold text-slate-700 font-mono">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1} // {fw.slug.substring(0, 10).toUpperCase()}...
                </span>
                {fw.interactive && (
                   <Layers size={14} className="text-retro-primary" />
                )}
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-retro-primary transition-colors font-mono leading-tight">
                {language === 'zh' ? fw.title : fw.titleEn}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans mb-4 flex-1">
                {language === 'zh' ? fw.summary : fw.summaryEn}
                </p>
                <div className="flex items-center text-xs font-bold text-black mt-auto group-hover:translate-x-2 transition-transform">
                   {t('开始使用', 'OPEN FRAMEWORK')} <ArrowRight size={14} className="ml-2"/>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};