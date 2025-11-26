import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe, Search, PanelLeftOpen, PanelLeftClose, Terminal } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { frameworks, getChapters } from '../data/frameworks';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  // Breadcrumbs logic
  const currentPath = location.pathname;
  let breadcrumb = "C:\\ROOT";
  
  if (currentPath === '/') {
      breadcrumb = "C:\\ROOT\\HOME";
  } else if (currentPath.includes('/framework/')) {
    const slug = currentPath.split('/')[2];
    const fw = frameworks.find(f => f.slug === slug);
    if (fw) {
      breadcrumb = `C:\\CH_${fw.chapter}\\${(language === 'zh' ? fw.title : fw.titleEn).toUpperCase()}`;
    }
  } else if (currentPath.includes('/chapter/')) {
    const id = currentPath.split('/')[2];
    const chapters = getChapters(language);
    const ch = chapters.find(c => c.id === id);
    if (ch) {
        breadcrumb = `C:\\CHAPTER_${id}\\${(language === 'zh' ? ch.title : ch.titleEn).toUpperCase()}`;
    }
  }

  return (
    <header className="h-16 bg-retro-surface border-b-2 border-retro-border flex items-center justify-between px-4 lg:px-6 z-20 sticky top-0">
      <div className="flex items-center space-x-4 w-full md:w-auto">
        <button 
          onClick={toggleSidebar}
          className="p-1.5 border-2 border-retro-border bg-white shadow-hard-sm hover:translate-y-0.5 hover:shadow-none transition-all active:bg-slate-100"
          aria-label="Toggle Sidebar"
        >
          {isSidebarOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
        </button>
        
        <div className="hidden md:flex items-center bg-retro-gray border-2 border-retro-border px-3 py-1.5 w-96 overflow-hidden">
          <Terminal size={14} className="text-retro-primary mr-2 shrink-0" />
          <span className="text-black font-mono text-xs truncate font-bold">{breadcrumb}</span>
          <span className="text-retro-primary animate-pulse ml-1 font-black">_</span>
        </div>
      </div>

      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="relative group">
           <div className="flex items-center bg-white border-2 border-retro-border px-2 py-1 shadow-hard-sm focus-within:shadow-none focus-within:translate-y-0.5 transition-all">
             <Search size={16} className="text-slate-400 mr-2" />
             <input 
               type="text" 
               placeholder={t('搜索...', 'SEARCH...')} 
               className="bg-transparent border-none outline-none text-xs w-24 md:w-48 placeholder-slate-400 text-black font-mono font-bold"
             />
           </div>
        </div>

        <button 
          onClick={toggleLanguage}
          className="flex items-center space-x-1 px-3 py-1 bg-retro-primary text-white border-2 border-retro-border shadow-hard-sm hover:translate-y-0.5 hover:shadow-none transition-all active:bg-blue-700"
        >
          <Globe size={16} />
          <span className="text-xs font-bold w-6 text-center font-mono">
            {language === 'zh' ? 'EN' : 'ZH'}
          </span>
        </button>
      </div>
    </header>
  );
};