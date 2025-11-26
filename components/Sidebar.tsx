import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getChapters } from '../data/frameworks';
import { BookOpen, X, Folder, FileText, Home } from 'lucide-react';
import { Framework } from '../types';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  frameworks: Framework[];
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const { language, t } = useLanguage();
  const chapters = getChapters(language);

  return (
    <aside 
      className={`
        fixed lg:static inset-y-0 left-0 z-30
        w-72 bg-retro-surface border-r-2 border-retro-border transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-0 lg:border-none lg:overflow-hidden'}
      `}
    >
      <div className="flex flex-col h-full">
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-between px-4 border-b-2 border-retro-border bg-retro-gray shrink-0">
          <div className="flex items-center space-x-2 text-black font-bold text-xl font-mono tracking-tighter">
            <div className="bg-retro-primary border-2 border-retro-border p-1 shadow-hard-sm text-white">
                <BookOpen size={20} />
            </div>
            <span>DMGT_OS v2.0</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="lg:hidden p-1 border-2 border-retro-border bg-retro-accent text-white hover:bg-red-600 shadow-hard-sm active:translate-y-1 active:shadow-none transition-all"
          >
            <X size={16} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-6 bg-retro-surface">
          
          {/* Home Link */}
          <NavLink
             to="/"
             className={({ isActive }) => `
               flex items-center px-3 py-2 text-sm font-bold border-2 transition-all duration-75 font-mono uppercase mb-6
               ${isActive 
                 ? 'bg-black text-white border-black shadow-hard-sm' 
                 : 'bg-white text-black border-black hover:bg-retro-bg'}
             `}
          >
            <Home size={16} className="mr-2" />
            {t('概览 / 首页', 'Overview / Home')}
          </NavLink>

          {chapters.map((chapter) => (
            <div key={chapter.id}>
              {/* Chapter Header as Link */}
              <NavLink 
                to={`/chapter/${chapter.id}`}
                className={({ isActive }) => `
                  flex items-center justify-between w-full px-2 text-xs font-bold border-2 py-1 mb-3 uppercase font-mono transition-all
                  ${isActive ? 'bg-retro-secondary text-black border-black' : 'bg-retro-gray text-black border-retro-border hover:border-black'}
                `}
              >
                 <div className="flex items-center gap-2">
                    <Folder size={14} className="text-black" />
                    {language === 'zh' ? chapter.title : chapter.titleEn}
                 </div>
              </NavLink>
              
              <ul className="space-y-1 pl-1 border-l-2 border-dotted border-slate-300 ml-2">
                {chapter.frameworks.map((fw) => (
                  <li key={fw.slug} className="pl-2">
                    <NavLink
                      to={`/framework/${fw.slug}`}
                      className={({ isActive }) => `
                        flex items-center px-2 py-2 text-xs font-bold border-2 transition-all duration-75 font-sans
                        ${isActive 
                          ? 'bg-white text-retro-primary border-retro-primary shadow-hard-sm translate-x-1' 
                          : 'bg-transparent text-slate-600 border-transparent hover:border-slate-300 hover:bg-white hover:text-black'}
                      `}
                    >
                      {({ isActive }) => (
                        <>
                          <FileText size={14} className={`mr-2 shrink-0 ${isActive ? 'text-retro-primary' : 'text-slate-400'}`} />
                          <span className="truncate">{language === 'zh' ? fw.title : fw.titleEn}</span>
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        
        {/* Footer */}
        <div className="p-4 border-t-2 border-retro-border bg-retro-gray shrink-0">
          <div className="text-xs font-mono text-slate-500 text-center border-2 border-dashed border-slate-400 p-2 bg-white">
            Created by<br/>
            <a href="https://bravohenry.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-retro-primary">Zihan Huang</a>
          </div>
        </div>
      </div>
    </aside>
  );
};