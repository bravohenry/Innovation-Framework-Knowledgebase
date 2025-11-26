
import { Framework } from '../types';

export const chapter2Frameworks: Framework[] = [
  // 1. User Persona
  {
    slug: 'user-persona',
    chapter: '2',
    chapterOrder: 1,
    title: '用户画像',
    titleEn: 'User Persona',
    summary: '基于真实数据构建的半虚构角色，帮助团队对目标用户形成共识与同理心。',
    summaryEn: 'Semi-fictional characters based on real data, helping teams build consensus and empathy for target users.',
    tags: ['用户研究', '同理心', '设计'],
    tagsEn: ['User Research', 'Empathy', 'Design'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>用户画像（Persona）是将定性（访谈）和定量（数据）研究结果综合成一个具体的人物原型。它是设计决策的基石——当我们说“用户喜欢这个功能”时，我们指的不是“所有人”，而是“Alex”这个画像。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <ul>
        <li><strong>唤起同理心</strong>：数字是冰冷的，人是鲜活的。画像让开发者能感受到用户的痛苦和快乐。</li>
        <li><strong>聚焦优先级</strong>：你无法让所有人满意。画像帮助团队明确谁是“核心用户”，从而进行取舍。</li>
        <li><strong>统一语言</strong>：避免团队成员心中对“用户”的想象不一致（例如：我想的是小白，你想的是专家）。</li>
      </ul>

      <h3>3. WHEN & WHO (适用场景与角色)</h3>
      <ul>
        <li><strong>时机</strong>：产品发现初期，或进入新市场时。</li>
        <li><strong>角色</strong>：用户研究员 (UXR)、设计师、产品经理。</li>
      </ul>

      <h3>4. HOW (构建步骤)</h3>
      <ol>
        <li><strong>数据收集</strong>：通过用户访谈、问卷或行为数据分析，收集真实素材。</li>
        <li><strong>寻找模式</strong>：将相似的用户行为、动机聚类，识别出典型群体。</li>
        <li><strong>角色塑造</strong>：为每个群体创建一个代表性人物，赋予其名字、照片和性格。</li>
        <li><strong>丰富细节</strong>：
          <ul>
             <li><strong>目标 (Goals)</strong>：他们使用产品的终极目的是什么？</li>
             <li><strong>痛点 (Frustrations)</strong>：目前阻碍他们达成目标的问题是什么？</li>
             <li><strong>场景 (Context)</strong>：他们在哪里使用？熟练程度如何？</li>
          </ul>
        </li>
      </ol>
      
      <h3>5. PRO TIP (避坑指南)</h3>
      <ul>
        <li><strong>不要凭空捏造</strong>：画像必须基于真实数据，而非团队的臆想。</li>
        <li><strong>不要只写人口统计学</strong>：“35岁男性”不具备指导意义，重要的是他的动机、焦虑和心智模型。</li>
      </ul>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>A User Persona is a semi-fictional character that synthesizes qualitative and quantitative research. It serves as an anchor for design decisions—when we say "The user needs this," we refer to a specific persona like "Alex," not a generic everyone.</p>
      
      <h3>2. WHY (Value)</h3>
      <ul>
        <li><strong>Empathy</strong>: Data is cold; people are warm. Personas help devs feel the user's pain and joy.</li>
        <li><strong>Focus</strong>: You can't please everyone. Personas define the "Primary User" to guide trade-offs.</li>
        <li><strong>Common Language</strong>: Prevents team members from imagining different users (e.g., I imagine a novice, you imagine an expert).</li>
      </ul>

      <h3>3. WHEN & WHO (Context)</h3>
      <ul>
        <li><strong>When</strong>: Early discovery phase, or entering a new market.</li>
        <li><strong>Who</strong>: UX Researchers, Designers, Product Managers.</li>
      </ul>

      <h3>4. HOW (Steps)</h3>
      <ol>
        <li><strong>Data Collection</strong>: Gather inputs via interviews, surveys, or analytics.</li>
        <li><strong>Pattern Recognition</strong>: Cluster similar behaviors and motivations into groups.</li>
        <li><strong>Drafting</strong>: Create a representative character for each cluster. Give them a name and photo.</li>
        <li><strong>Details</strong>:
          <ul>
             <li><strong>Goals</strong>: What is their ultimate objective?</li>
             <li><strong>Frustrations</strong>: What blocks them?</li>
             <li><strong>Context</strong>: Where are they? How tech-savvy are they?</li>
          </ul>
        </li>
      </ol>
      
      <h3>5. PRO TIP (Pitfalls)</h3>
      <ul>
        <li><strong>No Fiction</strong>: Personas must be based on data, not guesses.</li>
        <li><strong>Beyond Demographics</strong>: "Male, 35" is useless. Focus on motivations, anxieties, and mental models.</li>
      </ul>
    `,
    diagrams: [],
    interactive: {
        type: 'persona',
        title: { zh: '用户画像卡片', en: 'Persona Card' },
        schema: [],
        data: [
          { section: 'Name & Role', content: 'Alex, Marketing Manager', implication: '-' },
          { section: 'Bio', content: '32 years old, tech-savvy, works in a fast-paced agency. Stressed about deadlines.', implication: '-' },
          { section: 'Goals', content: 'Launch campaigns faster; Prove ROI to clients.', implication: 'Need automated reporting features.' },
          { section: 'Frustrations', content: 'Manual data entry; Disconnected tools.', implication: 'Integration is a must-have.' },
          { section: 'Tech Proficiency', content: 'High (iPhone, Mac, SaaS power user)', implication: 'Expects polished UI.' }
        ]
    }
  },

  // 2. Empathy Map
  {
    slug: 'empathy-map',
    chapter: '2',
    chapterOrder: 2,
    title: '移情图',
    titleEn: 'Empathy Map',
    summary: '通过“看、听、思、感”四个维度，深入剖析用户在特定场景下的内心世界。',
    summaryEn: 'Visualizing user attitude and behavior across Says, Thinks, Does, and Feels dimensions.',
    tags: ['用户研究', '同理心'],
    tagsEn: ['User Research', 'Empathy'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>移情图（Empathy Map）是一种将用户研究笔记可视化的工具。它帮助团队从关注“用户做了什么”深入到“用户为什么这么做”，用于捕捉用户显性行为背后的隐性动机。</p>

      <h3>2. WHY (核心价值)</h3>
      <p>它可以揭示用户言行不一的矛盾点。例如，用户说“我很注重隐私”，但在行动上却“点击了全部同意”。这些矛盾点往往是深刻洞察的来源，是产品创新的机会。</p>

      <h3>3. WHEN (适用场景)</h3>
      <p>通常在用户访谈之后使用，用于整理笔记并提取洞察。也可以在画像构建之前，作为画像的输入素材。</p>
      
      <h3>4. HOW (四个象限)</h3>
      <ul>
        <li><strong>Says (说)</strong>：用户在访谈中直接说出的原话。
          <br><em>例：“这太贵了。”“我不信任这个品牌。”</em>
        </li>
        <li><strong>Does (做)</strong>：观察到的物理行为。
          <br><em>例：反复点击刷新按钮；在购买前去比价网站查询。</em>
        </li>
        <li><strong>Thinks (想)</strong>：用户没有说出口的内心独白（通常是顾虑）。
          <br><em>例：“如果我买错了，老板会怪我吗？”“这个流程看起来好复杂。”</em>
        </li>
        <li><strong>Feels (感)</strong>：用户的情绪状态。
          <br><em>例：焦虑、不耐烦、兴奋、困惑。</em>
        </li>
      </ul>
      
      <h3>5. CASE (电商支付)</h3>
      <p>用户在支付时说“这个流程很顺畅”，但行动上“鼠标在提交按钮上悬停了5秒”，心里想“如果我想退款怎么办？”，感觉“不安全”。基于此洞察，我们在按钮旁增加了“30天无理由退款”的微文案，转化率提升了 15%。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>The Empathy Map is a tool for visualizing user research notes. It helps teams move from observing "what users do" to understanding "why they do it," capturing latent motivations behind explicit behaviors.</p>

      <h3>2. WHY (Value)</h3>
      <p>It reveals contradictions. For example, a user Says "I value privacy" but Does "Click Accept All." These gaps are often the source of deep insights and innovation opportunities.</p>

      <h3>3. WHEN (Context)</h3>
      <p>Typically used after user interviews to synthesize notes. Can also be used before Persona creation as raw material.</p>
      
      <h3>4. HOW (Four Quadrants)</h3>
      <ul>
        <li><strong>Says</strong>: Direct quotes from the user.
          <br><em>Ex: "This is too expensive." "I don't trust this brand."</em>
        </li>
        <li><strong>Does</strong>: Observed physical actions.
          <br><em>Ex: Refreshing the page repeatedly; Checking comparison sites.</em>
        </li>
        <li><strong>Thinks</strong>: Unspoken thoughts (often fears or doubts).
          <br><em>Ex: "If I mess this up, will my boss blame me?"</em>
        </li>
        <li><strong>Feels</strong>: Emotional state.
          <br><em>Ex: Anxious, Impatient, Excited, Confused.</em>
        </li>
      </ul>
      
      <h3>5. CASE (E-commerce Checkout)</h3>
      <p>A user Says "It's smooth," but Does "Hover over the submit button for 5s," Thinks "What if I need a refund?", and Feels "Insecure." Insight: We added "30-Day Money Back" micro-copy near the button, boosting conversion by 15%.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'matrix',
      title: { zh: '移情图', en: 'Empathy Map' },
      schema: [
        { key: 'says', labelZh: 'Says (说)', labelEn: 'Says' },
        { key: 'thinks', labelZh: 'Thinks (想)', labelEn: 'Thinks' },
        { key: 'does', labelZh: 'Does (做)', labelEn: 'Does' },
        { key: 'feels', labelZh: 'Feels (感)', labelEn: 'Feels' }
      ],
      data: [
        { key: 'says', items: ['"Is this secure?"', '"I need this fast."'] },
        { key: 'thinks', items: ['Hope I don\'t make a mistake.', 'Why is this form so long?'] },
        { key: 'does', items: ['Checks reviews first.', 'Abandons cart at shipping cost.'] },
        { key: 'feels', items: ['Skeptical', 'In a rush'] }
      ]
    }
  },

  // 3. Customer Journey Map
  {
    slug: 'customer-journey-map',
    chapter: '2',
    chapterOrder: 3,
    title: '用户体验地图',
    titleEn: 'Customer Journey Map',
    summary: '可视化用户与产品互动的全过程，识别情绪低谷与改进机会。',
    summaryEn: 'Visualizes the end-to-end user journey to identify emotional lows and opportunities for improvement.',
    tags: ['体验设计', '流程优化'],
    tagsEn: ['UX Design', 'Process Optimization'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>用户体验地图（Customer Journey Map, CJM）以时间为轴，讲述用户如何与你的产品或服务互动的故事。它打破了部门孤岛，强迫团队从用户视角（全链路）而非系统视角（功能点）审视流程。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <ul>
        <li><strong>全局视角</strong>：发现跨渠道的断层（例如：App里买的东西，去门店退货却查不到订单）。</li>
        <li><strong>情绪管理</strong>：识别用户的“情绪低谷”和“峰值体验”。</li>
        <li><strong>机会发现</strong>：将痛点转化为具体的优化项目。</li>
      </ul>

      <h3>3. WHEN & WHO (适用场景与角色)</h3>
      <ul>
        <li><strong>时机</strong>：产品优化期，或设计服务蓝图前。</li>
        <li><strong>角色</strong>：服务设计师、产品经理、运营人员。</li>
      </ul>

      <h3>4. HOW (绘制步骤)</h3>
      <ol>
        <li><strong>界定范围</strong>：是画“端到端”的全链路地图，还是聚焦“退款流程”的微观地图？</li>
        <li><strong>绘制骨架</strong>：列出阶段 (Stages) 和用户行为 (Actions)。</li>
        <li><strong>接触点 (Touchpoints)</strong>：标出用户在哪些渠道与我们互动？（官网、App、客服电话）。</li>
        <li><strong>情绪曲线 (Emotional Curve)</strong>：基于调研，描绘情绪的高低起伏。</li>
        <li><strong>峰终定律 (Peak-End Rule)</strong>：找出体验的最高点（峰）和结束时的体验（终），优先优化这两个时刻，因为它们决定了用户的记忆。</li>
      </ol>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>A Customer Journey Map (CJM) tells the story of a user's interaction with your brand over time. It breaks down silos by forcing the team to view the process from the user's perspective (end-to-end), not the system's (feature-based).</p>
      
      <h3>2. WHY (Value)</h3>
      <ul>
        <li><strong>Holistic View</strong>: Spot disconnects across channels (e.g., Bought in App, but Store can't find the order).</li>
        <li><strong>Emotion Management</strong>: Identify emotional lows and highs.</li>
        <li><strong>Opportunity</strong>: Convert pain points into specific improvement projects.</li>
      </ul>

      <h3>3. WHEN & WHO (Context)</h3>
      <ul>
        <li><strong>When</strong>: Optimization phase, or before Service Blueprinting.</li>
        <li><strong>Who</strong>: Service Designers, PMs, Ops.</li>
      </ul>

      <h3>4. HOW (Steps)</h3>
      <ol>
        <li><strong>Scope</strong>: End-to-end journey or a specific flow (e.g., Refund Process)?</li>
        <li><strong>Skeleton</strong>: Map out Stages and Actions.</li>
        <li><strong>Touchpoints</strong>: Where does the interaction happen? (Web, App, Call Center).</li>
        <li><strong>Emotional Curve</strong>: Plot the emotional highs and lows.</li>
        <li><strong>Peak-End Rule</strong>: Identify the "Peak" and "End". Prioritize these moments as they define the user's memory.</li>
      </ol>
    `,
    diagrams: [],
    interactive: {
      type: 'table',
      title: { zh: '体验地图', en: 'Journey Map' },
      schema: [
        { key: 'stage', labelZh: '阶段', labelEn: 'Stage', type: 'text' },
        { key: 'doing', labelZh: '行为 (Doing)', labelEn: 'Doing', type: 'text' },
        { key: 'feeling', labelZh: '情绪 (Feeling)', labelEn: 'Feeling', type: 'select', options: ['Happy', 'Neutral', 'Frustrated'] },
        { key: 'pain', labelZh: '痛点 (Pain)', labelEn: 'Pain Point', type: 'text' },
        { key: 'opp', labelZh: '机会 (Opportunity)', labelEn: 'Opportunity', type: 'text' }
      ],
      data: [
        { stage: 'Awareness', doing: 'See ad on Instagram', feeling: 'Neutral', pain: 'Ad is vague', opp: 'Clarify value prop' },
        { stage: 'Consideration', doing: 'Visit landing page', feeling: 'Happy', pain: '-', opp: 'Add testimonials' },
        { stage: 'Purchase', doing: 'Checkout', feeling: 'Frustrated', pain: 'Card declined error unclear', opp: 'Better error messages' }
      ]
    }
  },
  
  // 4. Jobs To Be Done
  {
    slug: 'jobs-to-be-done',
    chapter: '2',
    chapterOrder: 4,
    title: '待办任务 (JTBD)',
    titleEn: 'Jobs To Be Done',
    summary: '关注用户“雇佣”产品来完成什么任务，而非用户本身的属性。',
    summaryEn: 'Focuses on what users "hire" a product to achieve, rather than user demographics.',
    tags: ['需求分析', '创新'],
    tagsEn: ['Requirements', 'Innovation'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>JTBD 理论认为：用户并不想要你的产品，他们想要的是产品带来的结果。<strong>“用户不是想买四分之一英寸的钻头，他们是想要四分之一英寸的墙洞。”</strong> 它将视角从“人”（用户画像）转移到了“因果关系”（任务）。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <ul>
        <li><strong>解释因果</strong>：用户画像告诉你“谁”买了，JTBD 告诉你“为什么”买。</li>
        <li><strong>发现竞品</strong>：你的竞品可能不是同行。比如，Netflix 的竞品不是 HBO，而是“睡眠”或“玩游戏”（因为它们的 Job 都是“消磨时间”）。</li>
        <li><strong>驱动创新</strong>：只要能更好、更快地完成这个 Job，形式不限。</li>
      </ul>

      <h3>3. HOW (Job Story 格式)</h3>
      <p>用 Job Story 代替传统的 User Story，可以更精准地描述需求：</p>
      <div style="background:#f1f5f9; padding:15px; border-left:4px solid #000; font-family:monospace;">
        当 [情境 Situation] 发生时，<br>
        我想要 [动机 Motivation/Action]，<br>
        以便于 [预期结果 Expected Outcome]。
      </div>
      <p><em>例：<strong>当</strong>我在早高峰挤地铁时，<strong>我想要</strong>单手阅读短新闻，<strong>以便于</strong>在到达公司前感到自己掌握了天下大事。</em></p>
      
      <h3>4. PRO TIP (三个层次)</h3>
      <ul>
        <li><strong>功能任务</strong>：完成具体的事务（如：割草）。</li>
        <li><strong>情感任务</strong>：感觉如何（如：感觉自己是个好园丁）。</li>
        <li><strong>社交任务</strong>：别人怎么看（如：邻居觉得我的草坪很整洁）。</li>
      </ul>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>JTBD theory states: Customers don't buy products; they "hire" them to do a job. <strong>"People don't want a quarter-inch drill, they want a quarter-inch hole."</strong> It shifts focus from "People" (Persona) to "Causality" (Job).</p>
      
      <h3>2. WHY (Value)</h3>
      <ul>
        <li><strong>Causality</strong>: Personas tell you "Who" bought; JTBD tells you "Why."</li>
        <li><strong>Competitor Reframing</strong>: Your rival might not be a similar product. Netflix competes with "Sleep" or "Gaming" (Job: Kill time).</li>
        <li><strong>Innovation</strong>: Enables you to solve the Job in a completely new way.</li>
      </ul>

      <h3>3. HOW (Job Story Format)</h3>
      <p>Replace User Stories with Job Stories for better precision:</p>
      <div style="background:#f1f5f9; padding:15px; border-left:4px solid #000; font-family:monospace;">
        When [Situation],<br>
        I want to [Motivation],<br>
        So I can [Expected Outcome].
      </div>
      <p><em>Ex: <strong>When</strong> I'm commuting on a crowded train, <strong>I want to</strong> read news with one hand, <strong>So I can</strong> feel productive before work.</em></p>
      
      <h3>4. PRO TIP (Three Levels)</h3>
      <ul>
        <li><strong>Functional</strong>: The task itself (e.g., Cut the grass).</li>
        <li><strong>Emotional</strong>: How I feel (e.g., Feel like a capable gardener).</li>
        <li><strong>Social</strong>: How I look (e.g., Neighbors see a tidy lawn).</li>
      </ul>
    `,
    diagrams: [],
    interactive: {
      type: 'canvas',
      title: { zh: 'Job Story 构建器', en: 'Job Story Builder' },
      schema: [
        { key: 'section', labelZh: '部分', labelEn: 'Part', type: 'select', options: ['When (Situation)', 'I want to (Motivation)', 'So I can (Outcome)'] },
        { key: 'content', labelZh: '描述', labelEn: 'Description', type: 'text' },
        { key: 'validation', labelZh: '重要性', labelEn: 'Importance', type: 'select', options: ['High', 'Med', 'Low'] }
      ],
      data: [
        { section: 'When (Situation)', content: 'I am commuting to work on a crowded train', validation: 'High' },
        { section: 'I want to (Motivation)', content: 'Listen to short, informative news updates', validation: 'High' },
        { section: 'So I can (Outcome)', content: 'Feel productive and informed before arriving', validation: 'High' }
      ]
    }
  },

  // 5. Stakeholder Map
  {
    slug: 'stakeholder-map',
    chapter: '2',
    chapterOrder: 5,
    title: '利益相关者地图',
    titleEn: 'Stakeholder Map',
    summary: '根据权力和利益维度分析项目相关方，制定沟通策略。',
    summaryEn: 'Analyzes project stakeholders based on Power and Interest to determine communication strategies.',
    tags: ['项目管理', '沟通'],
    tagsEn: ['Project Management', 'Communication'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>在复杂的 B2B 项目或大型产品开发中，成功的关键往往不在技术，而在人。利益相关者地图帮助我们识别谁是盟友、谁是阻力，以及该花多少时间在谁身上。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <ul>
        <li><strong>防雷</strong>：避免在项目后期突然跳出一个被忽视的高管否决整个方案。</li>
        <li><strong>资源分配</strong>：将有限的沟通精力集中在关键人物身上。</li>
      </ul>

      <h3>3. WHEN (时机)</h3>
      <p>项目启动阶段（Kick-off）必须做，且在项目进行中需动态更新。</p>
      
      <h3>4. HOW (权力/利益矩阵)</h3>
      <p>我们将干系人放入四个象限，采取不同的策略：</p>
      <ul>
        <li><strong>高权力/高利益 (重点管理)</strong>：这是关键决策者（如：赞助商、大客户）。必须充分沟通，确保满意。</li>
        <li><strong>高权力/低利益 (令其满意)</strong>：他们不关心细节，但有权否决（如：财务、法务）。不要用琐事打扰他们，但在关键节点必须合规。</li>
        <li><strong>低权力/高利益 (随时告知)</strong>：他们很关心项目，但没有决策权（如：最终用户、基层员工）。通过周报、演示保持信息透明，利用他们的热情作为群众基础。</li>
        <li><strong>低权力/低利益 (最低关注)</strong>：监控即可。</li>
      </ul>
      
      <h3>5. PRO TIP (动态性)</h3>
      <p><strong>动态调整</strong>：随着项目进展，干系人的位置会变化。例如，项目上线前，运维部门的“权力”会突然变大，需要从“随时告知”升级为“重点管理”。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>In complex B2B projects, success often depends on people, not tech. The Stakeholder Map helps identify allies and blockers, and allocates communication effort effectively.</p>
      
      <h3>2. WHY (Value)</h3>
      <ul>
        <li><strong>Risk Prevention</strong>: Avoids the scenario where an ignored executive vetoes the project at the last minute.</li>
        <li><strong>Efficiency</strong>: Focuses limited communication bandwidth on key players.</li>
      </ul>

      <h3>3. WHEN (Context)</h3>
      <p>Must be done at Project Kick-off and updated dynamically.</p>
      
      <h3>4. HOW (Power/Interest Matrix)</h3>
      <p>Map stakeholders into four quadrants:</p>
      <ul>
        <li><strong>High Power/High Interest (Manage Closely)</strong>: Key decision makers (e.g., Sponsors). Engage fully and satisfy them.</li>
        <li><strong>High Power/Low Interest (Keep Satisfied)</strong>: Have veto power but don't care about details (e.g., Legal, Finance). Ensure compliance without spamming them.</li>
        <li><strong>Low Power/High Interest (Keep Informed)</strong>: Care deeply but lack power (e.g., End users). Keep them updated to leverage their support.</li>
        <li><strong>Low Power/Low Interest (Monitor)</strong>: Minimum effort required.</li>
      </ul>
      
      <h3>5. PRO TIP (Dynamics)</h3>
      <p><strong>Dynamic Updates</strong>: Positions change. For example, the Ops team's "Power" spikes right before launch, requiring a shift in strategy.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'matrix',
      title: { zh: '权力/利益矩阵', en: 'Power/Interest Matrix' },
      schema: [
        { key: 'q1', labelZh: '高权力/高利益 (重点管理)', labelEn: 'High Power/High Interest (Manage Closely)' },
        { key: 'q2', labelZh: '高权力/低利益 (令其满意)', labelEn: 'High Power/Low Interest (Keep Satisfied)' },
        { key: 'q3', labelZh: '低权力/高利益 (随时告知)', labelEn: 'Low Power/High Interest (Keep Informed)' },
        { key: 'q4', labelZh: '低权力/低利益 (最低关注)', labelEn: 'Low Power/Low Interest (Monitor)' }
      ],
      data: [
        { key: 'q1', items: ['Sponsor', 'Product Manager'] },
        { key: 'q2', items: ['Finance Dept', 'Compliance'] },
        { key: 'q3', items: ['Users', 'QA Team'] },
        { key: 'q4', items: ['Public'] }
      ]
    }
  }
];