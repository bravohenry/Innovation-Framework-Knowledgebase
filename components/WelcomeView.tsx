import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { frameworks } from '../data/frameworks';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Target, Disc, Zap } from 'lucide-react';

export const WelcomeView: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="space-y-12 py-8">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-4xl mx-auto py-10 relative">
        <div className="inline-flex items-center justify-center p-4 bg-retro-surface border-2 border-retro-border shadow-hard mb-4">
            <Zap className="text-black fill-retro-secondary w-10 h-10" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-black tracking-tight uppercase leading-none">
          {t('创新方法论知识库', 'Innovation Framework Knowledgebase')}
        </h1>
        <p className="text-lg md:text-xl text-slate-600 font-sans max-w-2xl mx-auto leading-relaxed border-2 border-transparent bg-white/50 p-4">
          {t(
            'DMGT Toolkit 是一个为您提供创新、战略与执行框架的一站式工具箱。',
            'DMGT Toolkit is your one-stop shop for innovation, strategy, and execution frameworks.'
          )}
        </p>
      </div>

      {/* Stats / Features - Swiss Style Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Activity, bg: 'bg-retro-primary', text: 'text-white', title: t('实战验证', 'Battle Tested'), desc: t('源自顶级咨询公司实战经验。', 'Top-tier consulting firm lineage.') },
          { icon: Target, bg: 'bg-retro-secondary', text: 'text-black', title: t('交互体验', 'Interactive'), desc: t('内置雷达图与表格工具。', 'Built-in radar charts & tables.') },
          { icon: Disc, bg: 'bg-retro-surface', text: 'text-black', title: t('双语支持', 'Bilingual'), desc: t('中英一键切换，对齐认知。', 'Switch between EN/ZH instantly.') }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 border-2 border-retro-border shadow-hard hover:shadow-hard-hover hover:-translate-y-1 transition-all">
            <div className={`w-12 h-12 ${item.bg} border-2 border-retro-border flex items-center justify-center mb-4 shadow-hard-sm`}>
              <item.icon className={item.text} size={24} />
            </div>
            <h3 className="font-bold text-xl text-black mb-2 uppercase font-mono">{item.title}</h3>
            <p className="text-sm text-slate-600 font-sans">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Frameworks */}
      <div>
        <div className="flex items-center gap-4 mb-8">
            <h2 className="text-xl font-black bg-black text-white px-4 py-2 inline-block uppercase font-mono shadow-hard-sm">
                {t('推荐框架', 'Featured Frameworks')}
            </h2>
            <div className="h-0.5 flex-1 bg-black"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworks.map((fw) => (
            <Link 
              key={fw.slug} 
              to={`/framework/${fw.slug}`}
              className="group bg-white border-2 border-retro-border hover:shadow-hard transition-all relative block h-full"
            >
              <div className="flex items-center justify-between border-b-2 border-retro-border bg-retro-gray px-4 py-2">
                  <span className="text-xs font-bold text-slate-700 font-mono">
                      CH_{fw.chapter}
                  </span>
                  <ArrowRight className="text-black group-hover:translate-x-1 transition-transform" size={16}/>
              </div>
              <div className="p-5">
                  <h3 className="text-lg font-bold text-black mb-3 group-hover:text-retro-primary transition-colors font-mono">
                  {language === 'zh' ? fw.title : fw.titleEn}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed font-sans">
                  {language === 'zh' ? fw.summary : fw.summaryEn}
                  </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};