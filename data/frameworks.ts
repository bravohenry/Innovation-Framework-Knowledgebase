

import { Framework, Chapter } from '../types';
import { chapter1Frameworks } from './chapter1';
import { chapter2Frameworks } from './chapter2';
import { chapter3Frameworks } from './chapter3';
import { chapter4Frameworks } from './chapter4';
import { chapter5Frameworks } from './chapter5';

export const frameworks: Framework[] = [
  ...chapter1Frameworks,
  ...chapter2Frameworks,
  ...chapter3Frameworks,
  ...chapter4Frameworks,
  ...chapter5Frameworks
];

export const getChapters = (lang: string): Chapter[] => {
  const chapters: Chapter[] = [
    {
      id: '1',
      title: '发现与战略',
      titleEn: 'Discovery & Strategy',
      frameworks: []
    },
    {
      id: '2',
      title: '同理心与价值定义',
      titleEn: 'Empathy & Value Definition',
      frameworks: []
    },
    {
      id: '3',
      title: '设计与构思',
      titleEn: 'Design & Conception',
      frameworks: []
    },
    {
      id: '4',
      title: '测试与迭代',
      titleEn: 'Test & Iteration',
      frameworks: []
    },
    {
      id: '5',
      title: '发布与叙事',
      titleEn: 'Launch & Storytelling',
      frameworks: []
    }
  ];

  frameworks.forEach(fw => {
    const chapter = chapters.find(c => c.id === fw.chapter);
    if (chapter) {
      chapter.frameworks.push(fw);
    }
  });

  return chapters.map(c => ({
    ...c,
    frameworks: c.frameworks.sort((a, b) => a.chapterOrder - b.chapterOrder)
  }));
};