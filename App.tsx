import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { FrameworkView } from './components/FrameworkView';
import { WelcomeView } from './components/WelcomeView';
import { ChapterView } from './components/ChapterView';
import { LanguageProvider } from './contexts/LanguageContext';
import { frameworks } from './data/frameworks';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  // Close sidebar on mobile route change
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Init

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  }, [location]);

  return (
    <div className="flex h-screen overflow-hidden relative">
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
        frameworks={frameworks}
      />
      
      <div className="flex-1 flex flex-col h-full overflow-hidden relative transition-all duration-300">
        <Header 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
          isSidebarOpen={sidebarOpen}
        />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 scroll-smooth bg-retro-bg">
          <div className="max-w-7xl mx-auto h-full pb-10">
            <Routes>
              <Route path="/" element={<WelcomeView />} />
              <Route path="/chapter/:id" element={<ChapterView />} />
              <Route path="/framework/:slug" element={<FrameworkView />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
      </div>
      
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden backdrop-blur-[2px]"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Layout />
      </HashRouter>
    </LanguageProvider>
  );
}