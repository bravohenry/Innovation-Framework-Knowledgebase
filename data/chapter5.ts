

import { Framework } from '../types';

export const chapter5Frameworks: Framework[] = [
  // 1. Brand Obituary
  {
    slug: 'brand-obituary',
    chapter: '5',
    chapterOrder: 1,
    title: '品牌悼词 (终局思维)',
    titleEn: 'Brand Obituary',
    summary: '通过撰写未来的“悼词”或“成功新闻稿”，倒推里程碑与战略路径。',
    summaryEn: 'Writing a future "Obituary" or "Press Release" to reverse-engineer milestones and strategic paths.',
    tags: ['战略', '愿景'],
    tagsEn: ['Strategy', 'Vision'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>品牌悼词（有时也称为“亚马逊新闻稿”法）是一种<strong>以终为始</strong>的思维练习。它要求团队跳到未来（比如 5 年后），假设产品取得了巨大成功（或彻底消亡），并以第三人称视角回顾这段历史。它不是悲观的诅咒，而是对终极价值的极端拷问。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <ul>
        <li><strong>清晰的北极星</strong>：在陷入细节开发之前，先明确“成功”到底长什么样。</li>
        <li><strong>检验不可替代性</strong>：如果你的品牌明天消失了，世界会因此失去什么吗？如果答案是“没什么”，说明你的价值主张不够犀利。</li>
        <li><strong>倒推路径</strong>：一旦确定了终局，中间的里程碑（Milestones）自然浮现。</li>
      </ul>

      <h3>3. HOW (执行步骤)</h3>
      <ol>
        <li><strong>设定时间点</strong>：假设现在是 2030 年。</li>
        <li><strong>撰写标题</strong>：用一句话概括最大的成就。<em>（例：Acme Inc. 彻底终结了纸质发票时代）</em></li>
        <li><strong>描述世界的变化</strong>：因为我们的存在，人们的生活发生了什么具体改变？</li>
        <li><strong>描述遗憾 (如果是悼词)</strong>：如果你写的是失败悼词，分析“它是如何一步步走向平庸的”——这有助于进行<strong>事前验尸 (Pre-mortem)</strong>，识别潜在风险。</li>
      </ol>
      
      <h3>4. CASE (Amazon Prime)</h3>
      <p>在开发 Prime 之前，贝佐斯团队先写了发布会的新闻稿。稿中描述了“用户只需支付固定年费，即可享受无限次免费两日达”。团队发现这个愿景极具吸引力，尽管当时物流成本极高，但为了实现这个“终局”，他们倒推出必须建立自营物流体系的战略路径。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>The Brand Obituary (or Amazon's "Working Backwards" Press Release) is a <strong>Begin with the End in Mind</strong> exercise. It asks the team to jump to the future (e.g., 5 years later), assume massive success (or death), and narrate history backwards. It asks: "If we died tomorrow, who would care?"</p>
      
      <h3>2. WHY (Value)</h3>
      <ul>
        <li><strong>Crystal Clear Vision</strong>: Define what "Success" looks like before writing code.</li>
        <li><strong>Irreplaceability Check</strong>: If your brand disappeared, would the world lose anything? If "No," your value prop is weak.</li>
        <li><strong>Reverse Engineering</strong>: Once the destination is set, the milestones become obvious.</li>
      </ul>

      <h3>3. HOW (Steps)</h3>
      <ol>
        <li><strong>Set the Date</strong>: Assume it is 2030.</li>
        <li><strong>Write the Headline</strong>: One sentence summarizing the legacy. <em>(Ex: Acme Inc. ended the era of paper invoices.)</em></li>
        <li><strong>Describe the Change</strong>: How is life different because we existed?</li>
        <li><strong>Pre-Mortem</strong>: If writing a failure obituary, analyze "How did we become mediocre?" to spot risks early.</li>
      </ol>
      
      <h3>4. CASE (Amazon Prime)</h3>
      <p>Before coding Prime, the team wrote the launch press release. It described "Unlimited 2-day shipping for a flat fee." The vision was so compelling that despite high costs, they reverse-engineered the strategy (building own logistics) to make that story true.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'brand-obituary',
      title: { zh: '未来头条生成器', en: 'Future Headline Generator' },
      schema: [],
      data: [
        { headline: 'Company X Revolutionizes Remote Work', date: '2030-01-01', achievement: 'Enabled 1 billion people to work from anywhere.', missedBy: 'Commuters who loved traffic jams.' }
      ]
    }
  },

  // 2. Pitch Deck
  {
    slug: 'pitch-deck',
    chapter: '5',
    chapterOrder: 2,
    title: '路演故事板',
    titleEn: 'Pitch Deck Storyboard',
    summary: '提炼核心故事、结构清晰、数据可视，用于外部沟通与筹资。',
    summaryEn: 'Structured narrative builder for external communication and fundraising, focusing on clarity and data.',
    tags: ['融资', '沟通'],
    tagsEn: ['Fundraising', 'Communication'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>Pitch Deck 不仅仅是 PPT，它是商业逻辑的叙事载体。无论面向投资人（VC）还是内部高管，一个好的 Pitch Deck 必须在 10-15 张幻灯片内回答所有核心问题。它不是功能的堆砌，而是“痛苦与解药”的故事。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <ul>
        <li><strong>注意力经济</strong>：听众通常只有 20 分钟的注意力。</li>
        <li><strong>逻辑检视</strong>：如果你不能用一句话讲清楚“市场规模”或“商业模式”，说明你自己也没想清楚。</li>
      </ul>

      <h3>3. HOW (标准结构 - Guy Kawasaki 10/20/30法则)</h3>
      <ol>
        <li><strong>Problem (问题)</strong>：这个世界哪里坏了？（痛点）</li>
        <li><strong>Solution (方案)</strong>：我们如何修补它？（价值主张）</li>
        <li><strong>Underlying Magic (秘密武器)</strong>：技术壁垒或独特配方。</li>
        <li><strong>Business Model (商业模式)</strong>：谁付钱？怎么付？</li>
        <li><strong>Go-to-Market (市场策略)</strong>：如何获取客户？</li>
        <li><strong>Competition (竞争)</strong>：为什么是我们赢？</li>
        <li><strong>Team (团队)</strong>：为什么是这群人？</li>
        <li><strong>Traction (牵引力/数据)</strong>：目前的成绩单。</li>
        <li><strong>Ask (诉求)</strong>：我们要多少钱？怎么花？</li>
      </ol>
      
      <h3>4. PRO TIP (叙事弧线)</h3>
      <p>不要一上来就讲产品。<strong>先卖“焦虑”，再卖“希望”。</strong><br><em>“如果现在不解决这个问题，后果很严重（焦虑）……但别担心，我们有解药（希望）。”</em></p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>A Pitch Deck is not just slides; it is the narrative vehicle of your business logic. Whether for VCs or Executives, it must answer all core questions in 10-15 slides. It's a story of "Pain and Cure," not a feature list.</p>
      
      <h3>2. WHY (Value)</h3>
      <ul>
        <li><strong>Attention Economy</strong>: You usually have 20 minutes max.</li>
        <li><strong>Logic Check</strong>: If you can't explain your "Business Model" in one sentence, you haven't figured it out yet.</li>
      </ul>

      <h3>3. HOW (Standard Structure - Kawasaki Rule)</h3>
      <ol>
        <li><strong>Problem</strong>: What is broken? (The Villain)</li>
        <li><strong>Solution</strong>: How do we fix it? (The Hero)</li>
        <li><strong>Underlying Magic</strong>: Tech or Secret Sauce.</li>
        <li><strong>Business Model</strong>: How do we make money?</li>
        <li><strong>GTM</strong>: How do we find customers?</li>
        <li><strong>Competition</strong>: Why us?</li>
        <li><strong>Team</strong>: Why this crew?</li>
        <li><strong>Traction</strong>: Proof of concept.</li>
        <li><strong>Ask</strong>: What do we need?</li>
      </ol>
      
      <h3>4. PRO TIP (Narrative Arc)</h3>
      <p>Don't start with the product. <strong>Sell the Fear, then sell the Hope.</strong><br><em>"If we don't fix this, bad things happen... But wait, we have the solution."</em></p>
    `,
    diagrams: [],
    interactive: {
      type: 'pitch-deck',
      title: { zh: 'Pitch 结构梳理', en: 'Pitch Deck Outliner' },
      schema: [],
      data: [
        { slide: '1. The Hook (Problem)', keyPoints: 'Identify the Villain. Show the pain.' },
        { slide: '2. The Solution', keyPoints: 'Introduce the Hero. Simple & visual.' },
        { slide: '3. Market Size', keyPoints: 'TAM/SAM/SOM. Is it big enough?' },
        { slide: '4. Business Model', keyPoints: 'Unit economics. How we make money.' },
        { slide: '5. Traction', keyPoints: 'Growth metrics. Prove it works.' }
      ]
    }
  },

  // 3. Vision Video
  {
    slug: 'vision-video',
    chapter: '5',
    chapterOrder: 3,
    title: '愿景视频 (分镜脚本)',
    titleEn: 'Vision Video / Storyboard',
    summary: '以脚本与分镜把未来愿景具象化，提升传播力与共鸣。',
    summaryEn: 'Visualizing the future vision via scripts and storyboards to enhance communication and resonance.',
    tags: ['叙事', '设计'],
    tagsEn: ['Storytelling', 'Design'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>愿景视频（Vision Video）是一种高保真的叙事工具，用于展示“未来的一天”。它不展示具体的技术实现，而是展示产品融入生活后的理想状态。从 Apple 的 "Knowledge Navigator" 到 Google Glass 的概念视频，都是经典案例。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <ul>
        <li><strong>激发情感</strong>：文字是理性的，视频是感性的。它能绕过观众的防御机制，直接触达情感中枢。</li>
        <li><strong>统一目标</strong>：为研发团队提供一个具象的奋斗目标（北极星），避免在细节中迷失。</li>
      </ul>

      <h3>3. HOW (分镜脚本)</h3>
      <ol>
        <li><strong>角色设定</strong>：主角是谁？（对应 Persona）</li>
        <li><strong>冲突引入</strong>：主角遇到了什么麻烦？</li>
        <li><strong>产品介入</strong>：产品如何以“魔法”般的方式出现？</li>
        <li><strong>高潮/解决</strong>：问题解决后的愉悦感。</li>
        <li><strong>关键画面 (Keyframe)</strong>：不需要画出每一帧，只需画出 3-6 个关键时刻。</li>
      </ol>
      
      <h3>4. CASE (Dropbox)</h3>
      <p>Dropbox 在产品还没开发完时，创始人 Drew Houston 制作了一个简单的演示视频（MVP），在这个视频中他假装在使用产品，并在视频里藏了一些极客笑话。这个视频在 Digg 上爆火，一夜之间等待列表从 5,000 人涨到了 75,000 人。这是<strong>用视频验证需求</strong>的经典案例。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>A Vision Video is a high-fidelity storytelling tool showing "A Day in the Future." It focuses on the ideal state of life with the product, not technical specs. Classic examples include Apple's "Knowledge Navigator."</p>
      
      <h3>2. WHY (Value)</h3>
      <ul>
        <li><strong>Emotional Resonance</strong>: Text is rational; video is emotional. It bypasses defense mechanisms.</li>
        <li><strong>Concrete North Star</strong>: Provides a visual target for the R&D team, preventing "feature drift."</li>
      </ul>

      <h3>3. HOW (Storyboarding)</h3>
      <ol>
        <li><strong>Character</strong>: Who is the hero? (Matches Persona)</li>
        <li><strong>Conflict</strong>: What is the struggle?</li>
        <li><strong>Intervention</strong>: How does the product appear like "magic"?</li>
        <li><strong>Resolution</strong>: The relief/joy after solving the problem.</li>
        <li><strong>Keyframes</strong>: Draw only the 3-6 critical moments.</li>
      </ol>
      
      <h3>4. CASE (Dropbox)</h3>
      <p>Before the product was ready, founder Drew Houston made a simple demo video (MVP) where he narrated the usage and hid geeky jokes. The video went viral on Digg, jumping the waitlist from 5k to 75k overnight. A classic case of <strong>validating demand via video</strong>.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'vision-video',
      title: { zh: '分镜脚本', en: 'Storyboard Script' },
      schema: [],
      data: [
        { scene: 1, visual: 'Wide shot: Hero is stuck in traffic, looking stressed.', audio: 'SFX: Honking. V.O.: "We all know this feeling..."' },
        { scene: 2, visual: 'Close up: Phone notification pops up with "Smart Route Found".', audio: 'SFX: Ding! V.O.: "But what if the city talked to you?"' },
        { scene: 3, visual: 'Hero smiles, car turns onto empty side street.', audio: 'Music: Upbeat shifts. V.O.: "Arrive happy."' }
      ]
    }
  },

  // 4. Executive Summary
  {
    slug: 'executive-summary',
    chapter: '5',
    chapterOrder: 4,
    title: '执行摘要 (决策一页纸)',
    titleEn: 'Executive Summary',
    summary: '面向管理层的结论与关键指标，支持快速决策。',
    summaryEn: 'One-pager with conclusions and key metrics for executives to support rapid decision making.',
    tags: ['汇报', '决策'],
    tagsEn: ['Reporting', 'Decision Making'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>执行摘要（Executive Summary）是商业文档中被阅读次数最多的部分（有时是唯一被阅读的部分）。它不是“目录”，而是<strong>“浓缩的结论”</strong>。它的目的是让繁忙的决策者在 2 分钟内掌握要点并做出 Yes/No 的决定。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <ul>
        <li><strong>BLUF 原则 (Bottom Line Up Front)</strong>：结论先行。高管没有时间像读侦探小说一样去寻找答案。</li>
        <li><strong>资源解锁</strong>：好的摘要能直接解锁预算和人力。</li>
      </ul>

      <h3>3. HOW (结构)</h3>
      <ul>
        <li><strong>背景 (Context)</strong>：我们为什么在这里？（1-2句）</li>
        <li><strong>建议 (Recommendation)</strong>：我想做什么？（核心）</li>
        <li><strong>理由 (Rationale)</strong>：为什么是这个建议？（3个关键数据支持）</li>
        <li><strong>风险与缓解 (Risk)</strong>：有什么坑？我们怎么填？</li>
        <li><strong>下一步 (Next Steps)</strong>：需要老板批什么？（钱？人？签字？）</li>
      </ul>
      
      <h3>4. PRO TIP (避坑指南)</h3>
      <p><strong>不要复制粘贴！</strong> 很多人的摘要就是把正文各段的第一句拼起来，这是错误的。摘要必须重写，要站在“CEO 视角”——如果不看正文，单看这一页，我能做决定吗？</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>The Executive Summary is the most read part of any business doc (sometimes the ONLY part). It is not a "Table of Contents" but a <strong>"Distilled Conclusion."</strong> Its goal: enable a busy decision-maker to say Yes/No in 2 minutes.</p>
      
      <h3>2. WHY (Value)</h3>
      <ul>
        <li><strong>BLUF (Bottom Line Up Front)</strong>: Executives don't have time for mystery novels. Give the answer first.</li>
        <li><strong>Resource Unlocking</strong>: A good summary unlocks budget and headcount.</li>
      </ul>

      <h3>3. HOW (Structure)</h3>
      <ul>
        <li><strong>Context</strong>: Why are we here? (1-2 sentences)</li>
        <li><strong>Recommendation</strong>: What do I propose? (The Core)</li>
        <li><strong>Rationale</strong>: Why? (3 data points)</li>
        <li><strong>Risk</strong>: What could go wrong? How do we mitigate?</li>
        <li><strong>Next Steps</strong>: What do I need from you? (Budget? Sign-off?)</li>
      </ul>
      
      <h3>4. PRO TIP (Pitfall)</h3>
      <p><strong>Do not copy-paste!</strong> Don't just stitch together the first sentences of each chapter. Rewrite it from the "CEO perspective"—if I only read this page, can I make a decision?</p>
    `,
    diagrams: [],
    interactive: {
      type: 'exec-summary',
      title: { zh: '决策仪表盘', en: 'Decision One-Pager' },
      schema: [],
      data: [
        { section: 'Recommendation', content: 'Launch MVP in Q3 focusing on Mobile Market.' },
        { section: 'Key Metric 1', content: 'ROI: 150%' },
        { section: 'Key Metric 2', content: 'CAC: <$10' },
        { section: 'Top Risk', content: 'Competitor X might lower prices.' },
        { section: 'Ask', content: '$500k Budget Approval' }
      ]
    }
  },

  // 5. Process Book
  {
    slug: 'process-book',
    chapter: '5',
    chapterOrder: 5,
    title: '过程手册 (复盘资产)',
    titleEn: 'Process Book',
    summary: '系统记录研究与设计演进，形成可复盘的项目资产。',
    summaryEn: 'Systematically documenting research and design evolution to create reusable project assets.',
    tags: ['文档', '知识管理'],
    tagsEn: ['Documentation', 'Knowledge Management'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>Process Book 是项目的“成长日记”。它不仅记录最终结果（The Outcome），更重要的是记录过程（The Process）——那些被废弃的方案、那些草图、那些用户访谈的原始录音。它是设计团队的知识资产。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <ul>
        <li><strong>证明价值</strong>：向客户或老板展示，“这个 Logo 虽然简单，但它是从 100 个草图中演化来的”，体现专业度。</li>
        <li><strong>知识复用</strong>：新人入职或开启类似项目时，不需要从零开始。</li>
        <li><strong>复盘依据</strong>：项目结束后，回看过程，分析哪里做得好，哪里走了弯路。</li>
      </ul>

      <h3>3. HOW (包含内容)</h3>
      <ul>
        <li><strong>探索阶段</strong>：竞品截图、用户访谈照片、便利贴墙。</li>
        <li><strong>定义阶段</strong>：早期的 Persona 版本、被推翻的架构图。</li>
        <li><strong>迭代阶段</strong>：Lo-Fi 到 Hi-Fi 的演变动图（GIF）。</li>
        <li><strong>决策点</strong>：为什么我们选择了蓝色而不是红色？（记录决策依据，防止扯皮）。</li>
      </ul>
      
      <h3>4. PRO TIP (作为作品集)</h3>
      <p>对于设计师而言，Process Book 就是最好的作品集（Portfolio）。面试官不关心你画图有多好看，关心的是你<strong>解决问题的思路</strong>。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>A Process Book is the project's "Diary." It documents not just the Outcome, but the Process—discarded drafts, sketches, raw interview audio. It is the team's intellectual asset.</p>
      
      <h3>2. WHY (Value)</h3>
      <ul>
        <li><strong>Prove Value</strong>: Shows clients/bosses, "This simple logo evolved from 100 sketches," demonstrating professionalism.</li>
        <li><strong>Reusability</strong>: New hires don't start from zero on similar projects.</li>
        <li><strong>Retrospective</strong>: Analyze the journey to learn from mistakes.</li>
      </ul>

      <h3>3. HOW (Contents)</h3>
      <ul>
        <li><strong>Discovery</strong>: Competitor screenshots, interview photos, sticky-note walls.</li>
        <li><strong>Define</strong>: Early Persona drafts, rejected architectures.</li>
        <li><strong>Iteration</strong>: Evolution GIFs (Lo-Fi to Hi-Fi).</li>
        <li><strong>Decision Points</strong>: Why did we choose Blue over Red? (Log rationale to prevent future disputes).</li>
      </ul>
      
      <h3>4. PRO TIP (Portfolio)</h3>
      <p>For designers, the Process Book is the ultimate Portfolio. Interviewers don't care how pretty your UI is; they care about <strong>how you solve problems</strong>.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'process-book',
      title: { zh: '项目演进时间轴', en: 'Project Evolution Timeline' },
      schema: [],
      data: [
        { phase: 'Discovery', date: 'Week 1', content: 'Interviewed 10 users. Key finding: Speed is priority.', type: 'Research' },
        { phase: 'Ideation', date: 'Week 2', content: 'Sketching session. 3 concepts generated. Concept A selected.', type: 'Design' },
        { phase: 'Validation', date: 'Week 4', content: 'Usability Test failed. Pivoted flow.', type: 'Decision' }
      ]
    }
  }
];