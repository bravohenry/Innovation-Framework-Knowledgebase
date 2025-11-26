
import { Framework } from '../types';

export const chapter1Frameworks: Framework[] = [
  // 1. North Star Framework
  {
    slug: 'north-star-framework',
    chapter: '1',
    chapterOrder: 1,
    title: '北极星指标框架',
    titleEn: 'The North Star Framework',
    summary: '确定单一的关键指标以对齐团队目标，驱动长期的可持续增长与用户价值。',
    summaryEn: 'Identifies a single key metric to align team goals and drive long-term sustainable growth and user value.',
    tags: ['战略对齐', '增长', '指标'],
    tagsEn: ['Alignment', 'Growth', 'Metrics'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>北极星指标（North Star Metric, NSM）是能够最好地捕捉产品核心价值及其对客户交付情况的单一指标。它不仅是一个数字，更是产品战略的量化表达。它必须满足三个硬性条件：反映用户价值、反映商业成功、具有先导性。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <ul>
        <li><strong>聚焦 (Focus)</strong>：防止团队迷失在成百上千的仪表盘数据中，提供唯一的“真理”。</li>
        <li><strong>对齐 (Alignment)</strong>：打破部门孤岛（市场看拉新、产品看留存、销售看营收），将所有人统一在同一个长期目标下。</li>
        <li><strong>客户中心 (Customer Centricity)</strong>：区别于“营收”等虚荣指标，NSM 强迫团队关注用户是否真正获得了价值。</li>
      </ul>

      <h3>3. WHEN & WHO (适用场景与角色)</h3>
      <ul>
        <li><strong>时机</strong>：产品达到 PMF（产品市场契合）之后，进入增长扩张期时。早期初创公司更应关注生存（现金流）或验证（留存）。</li>
        <li><strong>角色</strong>：由 CEO 或 CPO 发起，数据团队负责定义与测量，全员负责执行。</li>
      </ul>
      
      <h3>4. HOW (执行步骤)</h3>
      <ol>
        <li><strong>识别价值时刻 (Aha Moment)</strong>：用户在什么时刻真正体验到了产品的核心价值？
          <p><em>例如：对于 Zoom，不是下载软件，而是成功完成一次会议。</em></p>
        </li>
        <li><strong>筛选候选指标</strong>：列出 3-5 个备选。
          <ul>
            <li>它是否反映了用户的活跃程度？</li>
            <li>它是否与长期留存正相关？</li>
            <li>全公司是否容易理解？</li>
          </ul>
        </li>
        <li><strong>构建输入指标体系 (Input Metrics)</strong>：北极星指标通常是滞后指标（Lagging）。将其拆解为 4 个维度的先行指标（Leading）：
          <ul>
            <li><strong>广度 (Breadth)</strong>：有多少用户在使用？</li>
            <li><strong>深度 (Depth)</strong>：参与程度如何？</li>
            <li><strong>频率 (Frequency)</strong>：使用频次如何？</li>
            <li><strong>效率 (Efficiency)</strong>：完成任务有多快？</li>
          </ul>
        </li>
      </ol>
      
      <h3>5. CASE (案例：Netflix)</h3>
      <p>Netflix 的北极星指标并非“订阅用户数”，而是<strong>“总观看时长” (Time Spent Streaming)</strong>。</p>
      <ul>
        <li><strong>逻辑</strong>：如果用户花更多时间看视频，说明他们喜欢这里的内容（价值交付），他们下个月续费的概率就更高（商业成功）。</li>
        <li><strong>输入指标</strong>：为了提升观看时长，他们优化推荐算法（提升深度）、增加原创剧集（提升广度）。</li>
      </ul>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>The North Star Metric (NSM) is the single metric that best captures the core value your product delivers to its customers. It is not just a number, but a quantified expression of product strategy. It serves as a bridge between user value and business results.</p>
      
      <h3>2. WHY (Value)</h3>
      <ul>
        <li><strong>Focus</strong>: Prevents the team from getting lost in hundreds of dashboard metrics by providing a single source of truth.</li>
        <li><strong>Alignment</strong>: Breaks down silos (Marketing chases leads, Product chases retention) and aligns everyone under one long-term goal.</li>
        <li><strong>Customer Centricity</strong>: Unlike vanity metrics like "Revenue," NSM forces the team to focus on whether users are actually getting value.</li>
      </ul>

      <h3>3. WHEN & WHO (Context)</h3>
      <ul>
        <li><strong>When</strong>: After PMF (Product-Market Fit), during the growth/scaling phase. Early startups should focus on survival (cash) or validation (retention).</li>
        <li><strong>Who</strong>: Initiated by CEO/CPO, defined/measured by Data teams, executed by everyone.</li>
      </ul>
      
      <h3>4. HOW (Execution)</h3>
      <ol>
        <li><strong>Identify the Aha Moment</strong>: When does the user truly extract value?
          <p><em>Example: For Zoom, it's not downloading the app, but completing a meeting.</em></p>
        </li>
        <li><strong>Select Candidates</strong>: List 3-5 metrics.
          <ul>
            <li>Does it reflect activity?</li>
            <li>Is it a leading indicator of retention?</li>
            <li>Is it simple to understand?</li>
          </ul>
        </li>
        <li><strong>Build Input Metrics Tree</strong>: NSM is often lagging. Break it down into actionable input metrics:
          <ul>
            <li><strong>Breadth</strong>: Number of active users.</li>
            <li><strong>Depth</strong>: Level of engagement.</li>
            <li><strong>Frequency</strong>: How often they return.</li>
            <li><strong>Efficiency</strong>: Speed of task completion.</li>
          </ul>
        </li>
      </ol>
      
      <h3>5. CASE (Netflix)</h3>
      <p>Netflix's NSM is not "Subscriber Count" but <strong>"Time Spent Streaming"</strong>.</p>
      <ul>
        <li><strong>Logic</strong>: If users spend time watching, they are getting value, which predicts retention and future revenue.</li>
        <li><strong>Inputs</strong>: Better recommendation algorithms (Depth), Original content (Breadth).</li>
      </ul>
    `,
    diagrams: [],
    interactive: {
      type: 'tree',
      title: { zh: '指标逻辑树 (Logic Tree)', en: 'Metric Logic Tree' },
      schema: [
        { key: 'type', labelZh: '指标类型', labelEn: 'Type', type: 'select', options: ['North Star', 'Breadth (广度)', 'Depth (深度)', 'Frequency (频率)', 'Efficiency (效率)'] },
        { key: 'name', labelZh: '指标名称', labelEn: 'Metric Name', type: 'text' },
        { key: 'hypothesis', labelZh: '因果假设 (Why?)', labelEn: 'Hypothesis', type: 'text' },
        { key: 'status', labelZh: '当前表现', labelEn: 'Status', type: 'select', options: ['On Track', 'Warning', 'Critical'] }
      ],
      data: [
        { type: 'North Star', name: 'Total Time Spent Listening', hypothesis: 'Time spent = Value Received', status: 'On Track' },
        { type: 'Breadth (广度)', name: '# of Active Listeners', hypothesis: 'More users = More scale', status: 'Warning' },
        { type: 'Depth (深度)', name: 'Avg Hours per User', hypothesis: 'Longer sessions = Better content', status: 'On Track' },
        { type: 'Frequency (频率)', name: 'Sessions per Week', hypothesis: 'Habit formation', status: 'Critical' }
      ]
    }
  },
  // 2. Business Opportunity Statement
  {
    slug: 'business-opportunity-statement',
    chapter: '1',
    chapterOrder: 2,
    title: '商业机会声明',
    titleEn: 'Business Opportunity Statement',
    summary: '一页纸定义目标用户、痛点、解决方案及其带来的核心价值，用于立项前的快速对齐。',
    summaryEn: 'A one-pager defining target users, pain points, solutions, and core value for rapid alignment before project initiation.',
    tags: ['立项', '价值定义', '沟通'],
    tagsEn: ['Initiation', 'Value Definition', 'Communication'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>商业机会声明（Business Opportunity Statement）是项目启动前的“宪章”。它强迫发起人在投入任何资源之前，用最简洁的语言理清商业逻辑。它不是长达 50 页的商业计划书（BP），而是核心假设的提炼。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <ul>
        <li><strong>降本增效</strong>：在写第一行代码前，先验证逻辑是否通顺，避免构建没人要的产品。</li>
        <li><strong>快速沟通</strong>：作为“电梯演讲”的文字版，帮助团队在 1 分钟内向利益相关者解释清楚“我们在做什么”。</li>
        <li><strong>统一认知</strong>：确保所有成员对目标用户和核心价值有统一认知，防止后期需求蔓延。</li>
      </ul>

      <h3>3. WHEN & WHO (适用场景与角色)</h3>
      <ul>
        <li><strong>时机</strong>：新产品立项、内部创业孵化、或重大功能更新前。</li>
        <li><strong>角色</strong>：产品经理或业务负责人起草，需获得投资人（Sponsor）或高层批准。</li>
      </ul>
      
      <h3>4. HOW (执行步骤)</h3>
      <ol>
        <li><strong>定义目标用户 (Who)</strong>：
          <p>尽可能具体。避免“所有人”，聚焦于“早期采用者”。<br><em>坏例子：所有手机用户。<br>好例子：在一线城市工作、通勤时间超过1小时且喜欢阅读的白领。</em></p>
        </li>
        <li><strong>描述痛点 (Pain)</strong>：
          <p>用户现在的体验有什么问题？有什么未被满足的需求？<br><em>关键句式：目前，他们在 [场景] 下遇到 [问题]，导致 [负面后果]。</em></p>
        </li>
        <li><strong>提出解决方案 (What)</strong>：
          <p>我们的产品是什么？它如何解决上述痛点？<br><em>关键句式：我们的产品是 [名称]，它通过 [核心功能] 来解决该问题。</em></p>
        </li>
        <li><strong>阐述核心优势 (Why Us)</strong>：
          <p>相比竞品或替代方案，我们好在哪里？（更快？更便宜？更方便？）</p>
        </li>
      </ol>
      
      <h3>5. CASE (Uber 早期概念)</h3>
      <ul>
        <li><strong>Who</strong>：旧金山的科技从业者与高端商务人士。</li>
        <li><strong>Pain</strong>：在恶劣天气或高峰期很难打到出租车，支付繁琐，体验不可控。</li>
        <li><strong>Solution</strong>：一个一键叫车的 App，提供高端黑色轿车服务，自动信用卡扣款。</li>
        <li><strong>Value</strong>：像拥有私人司机一样的确定性与尊贵感，零摩擦的支付体验。</li>
      </ul>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>The Business Opportunity Statement is the "charter" before a project launches. It forces initiators to clarify the business logic concisely before investing resources. It is not a 50-page Business Plan, but a distillation of core hypotheses.</p>
      
      <h3>2. WHY (Value)</h3>
      <ul>
        <li><strong>Efficiency</strong>: Validates logic before writing code, preventing building products nobody wants.</li>
        <li><strong>Communication</strong>: Acts as a written "Elevator Pitch" to explain "what we are doing" to stakeholders in under 1 minute.</li>
        <li><strong>Alignment</strong>: Ensures everyone agrees on the target user and core value, preventing scope creep later.</li>
      </ul>

      <h3>3. WHEN & WHO (Context)</h3>
      <ul>
        <li><strong>When</strong>: Before project initiation, internal incubation, or major feature updates.</li>
        <li><strong>Who</strong>: Drafted by PM or Business Owner; approved by Sponsors or Executives.</li>
      </ul>
      
      <h3>4. HOW (Execution)</h3>
      <ol>
        <li><strong>Define Target User (Who)</strong>:
          <p>Be specific. Avoid "everyone." Focus on early adopters.<br><em>Bad: All phone users.<br>Good: White-collar workers in Tier-1 cities with >1hr commute who love reading.</em></p>
        </li>
        <li><strong>Describe Pain (Pain)</strong>:
          <p>What is broken in their current experience?<br><em>Formula: Currently, they struggle with [Problem] in [Context], leading to [Consequence].</em></p>
        </li>
        <li><strong>Propose Solution (What)</strong>:
          <p>What is the product? How does it solve the pain?<br><em>Formula: Our product is [Name], which solves this via [Core Feature].</em></p>
        </li>
        <li><strong>Key Advantage (Why Us)</strong>:
          <p>Why are we better than the alternative? (Faster? Cheaper? Better UX?)</p>
        </li>
      </ol>
      
      <h3>5. CASE (Uber Early Concept)</h3>
      <ul>
        <li><strong>Who</strong>: Tech professionals and executives in San Francisco.</li>
        <li><strong>Pain</strong>: Impossible to hail cabs in bad weather/rush hour; payment is slow; service is rude.</li>
        <li><strong>Solution</strong>: A one-tap app to summon a black car with automatic payment.</li>
        <li><strong>Value</strong>: The certainty and prestige of a private driver with zero-friction payment.</li>
      </ul>
    `,
    diagrams: [],
    interactive: {
      type: 'canvas',
      title: { zh: '机会画布', en: 'Opportunity Canvas' },
      schema: [
        { key: 'section', labelZh: '板块', labelEn: 'Section', type: 'select', options: ['1. Target Audience (Who)', '2. Problem (Pain)', '3. Solution (What)', '4. Key Benefit (Why Us)', '5. Success Metrics'] },
        { key: 'content', labelZh: '详细描述 (Draft)', labelEn: 'Description', type: 'text' },
        { key: 'validation', labelZh: '验证状态', labelEn: 'Validation', type: 'select', options: ['Assumption', 'Validated', 'Invalid'] }
      ],
      data: [
        { section: '1. Target Audience (Who)', content: '', validation: 'Assumption' },
        { section: '2. Problem (Pain)', content: '', validation: 'Assumption' },
        { section: '3. Solution (What)', content: '', validation: 'Assumption' },
        { section: '4. Key Benefit (Why Us)', content: '', validation: 'Assumption' },
        { section: '5. Success Metrics', content: '', validation: 'Assumption' }
      ]
    }
  },
  // 3. PESTLE Analysis
  {
    slug: 'pestle-analysis',
    chapter: '1',
    chapterOrder: 3,
    title: 'PESTLE 分析',
    titleEn: 'PESTLE Analysis',
    summary: '分析政治、经济、社会、技术、法律和环境六大宏观因素对业务的潜在影响。',
    summaryEn: 'Analyzes Political, Economic, Social, Technological, Legal, and Environmental factors affecting the business.',
    tags: ['宏观环境', '风险分析'],
    tagsEn: ['Macro Environment', 'Risk Analysis'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>PESTLE 是一种环境扫描（Environmental Scanning）工具。企业往往过度关注竞争对手（微观环境），而忽视了可能颠覆整个行业的宏观力量。PESTLE 帮助我们识别这些不可控的外部变量。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <ul>
        <li><strong>避险</strong>：识别监管、法律或环境层面的潜在杀手级风险（Kill Risks）。</li>
        <li><strong>借势</strong>：发现新技术或社会文化变迁带来的新机会（例如：老龄化带来的银发经济）。</li>
        <li><strong>战略输入</strong>：为 SWOT 分析中的“机会 (O)”和“威胁 (T)”提供输入。</li>
      </ul>

      <h3>3. WHEN & WHO (适用场景与角色)</h3>
      <ul>
        <li><strong>时机</strong>：年度战略规划、进入新市场（出海）、或启动大型转型项目时。</li>
        <li><strong>角色</strong>：战略部门、高管团队、市场研究人员。</li>
      </ul>

      <h3>4. HOW (六大维度)</h3>
      <ul>
        <li><strong>P (Political)</strong>：政府政策、贸易限制、政治稳定性。<em>（例：新能源补贴退坡）</em></li>
        <li><strong>E (Economic)</strong>：经济增长、汇率、利率、通胀率。<em>（例：加息导致融资成本上升）</em></li>
        <li><strong>S (Social)</strong>：人口结构、文化趋势、生活方式。<em>（例：Z世代更注重悦己消费）</em></li>
        <li><strong>T (Technological)</strong>：新技术突破、技术迭代速度。<em>（例：生成式 AI 的爆发）</em></li>
        <li><strong>L (Legal)</strong>：反垄断法、数据隐私法、劳动法。<em>（例：GDPR 对数据业务的限制）</em></li>
        <li><strong>E (Environmental)</strong>：碳排放目标、气候变化风险。<em>（例：ESG 合规要求）</em></li>
      </ul>
      
      <h3>5. PRO TIP (避坑指南)</h3>
      <p>不要为了填空而填空。重点不是填满 6 个格子，而是找到那个可能“杀死”你或让你“起飞”的关键变量。如果某个维度不相关，可以直接跳过。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>PESTLE is an environmental scanning tool. Companies often focus too much on competitors (micro-environment) and ignore macro forces that can disrupt entire industries. PESTLE helps identify these uncontrollable external variables.</p>
      
      <h3>2. WHY (Value)</h3>
      <ul>
        <li><strong>Risk Mitigation</strong>: Identify potential "Kill Risks" in regulation, law, or environment.</li>
        <li><strong>Opportunity Spotting</strong>: Discover new chances arising from tech or social shifts (e.g., The Silver Economy due to aging).</li>
        <li><strong>Strategic Input</strong>: Feeds into the "Opportunities" and "Threats" of SWOT analysis.</li>
      </ul>

      <h3>3. WHEN & WHO (Context)</h3>
      <ul>
        <li><strong>When</strong>: Annual strategic planning, entering new markets (Go-Global), or major transformations.</li>
        <li><strong>Who</strong>: Strategy Dept, Executives, Market Researchers.</li>
      </ul>

      <h3>4. HOW (The 6 Dimensions)</h3>
      <ul>
        <li><strong>Political</strong>: Government policy, trade restrictions, stability. <em>(e.g., EV subsidies)</em></li>
        <li><strong>Economic</strong>: Growth rates, inflation, interest rates. <em>(e.g., Rising cost of capital)</em></li>
        <li><strong>Social</strong>: Demographics, lifestyle trends. <em>(e.g., Gen Z consumption habits)</em></li>
        <li><strong>Technological</strong>: Disruptive tech, automation. <em>(e.g., Generative AI boom)</em></li>
        <li><strong>Legal</strong>: Antitrust, data privacy (GDPR), labor laws.</li>
        <li><strong>Environmental</strong>: Carbon targets, climate risks. <em>(e.g., ESG compliance)</em></li>
      </ul>
      
      <h3>5. PRO TIP (Best Practice)</h3>
      <p>Don't just fill in the boxes. The goal is to find the "Game Changer" variables. If a dimension is irrelevant, skip it. Focus on what matters.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'table',
      title: { zh: '风险与影响登记册', en: 'Risk & Impact Registry' },
      schema: [
        { key: 'factor', labelZh: '宏观维度', labelEn: 'Dimension', type: 'select', options: ['Political', 'Economic', 'Social', 'Technological', 'Legal', 'Environmental'] },
        { key: 'observation', labelZh: '具体事件', labelEn: 'Event/Trend', type: 'text' },
        { key: 'type', labelZh: '类型', labelEn: 'Type', type: 'select', options: ['Opportunity', 'Threat'] },
        { key: 'urgency', labelZh: '紧迫性', labelEn: 'Urgency', type: 'select', options: ['High', 'Medium', 'Low'] },
        { key: 'action', labelZh: '应对策略', labelEn: 'Action', type: 'text' }
      ],
      data: [
        { factor: 'Technological', observation: 'Rise of AI coding assistants', type: 'Opportunity', urgency: 'High', action: 'Adopt early to boost efficiency' },
        { factor: 'Legal', observation: 'New Data Privacy Act', type: 'Threat', urgency: 'Medium', action: 'Audit current data practices' }
      ]
    }
  }
];