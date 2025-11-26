
import { Framework } from '../types';

export const chapter3Frameworks: Framework[] = [
  // 1. Competitive Analysis Matrix
  {
    slug: 'competitive-analysis-matrix',
    chapter: '3',
    chapterOrder: 1,
    title: '竞品分析矩阵',
    titleEn: 'Competitive Analysis Matrix',
    summary: '多维度对比关键竞品，量化评分找出机会点与差异化优势。',
    summaryEn: 'Multi-dimensional comparison of key competitors, quantifying scores to identify opportunities and differentiation.',
    tags: ['竞品分析', '市场研究'],
    tagsEn: ['Competitor Analysis', 'Market Research'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>竞品分析矩阵是一个结构化的表格工具，用于横向对比自身产品与竞争对手在关键维度上的表现。它不是为了“抄袭”，而是为了“定位”——找出市场的空白点（Gap）或过度拥挤的红海。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <ul>
        <li><strong>知彼</strong>：了解对手的底牌（功能、定价、战略）。</li>
        <li><strong>知己</strong>：客观评估自身的优劣势。</li>
        <li><strong>决策支持</strong>：决定是采取“跟随策略”（补齐短板）还是“差异化策略”（人无我有）。</li>
      </ul>

      <h3>3. HOW (执行步骤)</h3>
      <ul>
        <li><strong>选择竞品</strong>：包含直接竞品（解决同样问题的同类产品）和间接竞品（解决同样问题的不同替代方案）。</li>
        <li><strong>定义维度</strong>：
          <ul>
             <li><strong>功能 (Features)</strong>：核心功能有无。</li>
             <li><strong>体验 (UX)</strong>：易用性、视觉设计（建议量化评分）。</li>
             <li><strong>商业 (Business)</strong>：定价策略、付费模式。</li>
          </ul>
        </li>
        <li><strong>量化评分 (Scoring)</strong>：
          <p>不要只写“有/无”。尝试给每个维度打分（1-5分）。<br><em>分析结论：如果竞品在功能上都是5分，但在易用性上只有2分，那就是你的切入机会。</em></p>
        </li>
      </ul>
      
      <h3>4. PRO TIP (动态视角)</h3>
      <p>不要只看“现在”。试着在矩阵中增加一列“预测未来”——基于他们的招聘信息或最新动态，猜测他们下一步会做什么。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>A Competitor Analysis Matrix is a structured tool to benchmark your product against rivals across key dimensions. It is not about copying; it is about positioning—identifying market gaps and red oceans.</p>
      
      <h3>2. WHY (Value)</h3>
      <ul>
        <li><strong>Know Them</strong>: Understand rival capabilities, pricing, and strategy.</li>
        <li><strong>Know Yourself</strong>: Objectively assess your strengths and weaknesses.</li>
        <li><strong>Decision Support</strong>: Decide whether to "Follow" (catch up) or "Differentiate" (innovate).</li>
      </ul>

      <h3>3. HOW (Steps)</h3>
      <ul>
        <li><strong>Select Competitors</strong>: Include Direct competitors (same solution) and Indirect competitors (different solution, same problem).</li>
        <li><strong>Define Dimensions</strong>:
          <ul>
             <li><strong>Features</strong>: Capabilities.</li>
             <li><strong>UX</strong>: Usability, Visuals (Quantify this).</li>
             <li><strong>Business</strong>: Pricing, Model.</li>
          </ul>
        </li>
        <li><strong>Scoring</strong>:
          <p>Avoid simple Boolean (Yes/No). Use a scale (1-5).<br><em>Insight: If competitors score 5 on Features but 2 on UX, that is your opportunity.</em></p>
        </li>
      </ul>
      
      <h3>4. PRO TIP (Dynamic View)</h3>
      <p>Don't just look at "Now." Add a column for "Predicted Future"—guess their next move based on hiring or recent updates.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'table',
      title: { zh: '竞品评分表', en: 'Competitor Scoring' },
      schema: [
        { key: 'dimension', labelZh: '比较维度', labelEn: 'Dimension', type: 'text' },
        { key: 'scoreUs', labelZh: '我们 (Score)', labelEn: 'Us (Score)', type: 'select', options: ['1','2','3','4','5'] },
        { key: 'comp1', labelZh: '竞品 A', labelEn: 'Competitor A', type: 'select', options: ['1','2','3','4','5'] },
        { key: 'comp2', labelZh: '竞品 B', labelEn: 'Competitor B', type: 'select', options: ['1','2','3','4','5'] },
        { key: 'note', labelZh: '备注', labelEn: 'Note', type: 'text' }
      ],
      data: [
        { dimension: 'Price', scoreUs: '5', comp1: '3', comp2: '4', note: 'We are cheapest.' },
        { dimension: 'UX/UI', scoreUs: '4', comp1: '5', comp2: '2', note: 'Comp A is very polished.' }
      ]
    }
  },

  // 2. Strategy Canvas
  {
    slug: 'strategy-canvas',
    chapter: '3',
    chapterOrder: 2,
    title: '战略画布',
    titleEn: 'Strategy Canvas',
    summary: '可视化行业关键因素与价值曲线，定位差异化路径。',
    summaryEn: 'Visualizes industry key factors and value curves to identify differentiation paths.',
    tags: ['蓝海战略', '差异化'],
    tagsEn: ['Blue Ocean', 'Differentiation'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>战略画布是《蓝海战略》的核心诊断工具。它将竞争因素可视化为折线图（价值曲线）。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <p>如果你的曲线与竞争对手高度重合，说明你陷入了同质化竞争（红海）。战略画布的目标是帮助你画出一条与众不同的曲线，实现<strong>价值创新</strong>。</p>

      <h3>3. HOW (绘制步骤)</h3>
      <ol>
        <li><strong>横轴：竞争元素</strong>。列出行业中所有玩家都在争夺的要素（如：价格、速度、服务、门店数量）。</li>
        <li><strong>纵轴：投入水平</strong>。0代表完全不提供，High代表投入极高。</li>
        <li><strong>绘制竞品曲线</strong>。画出主要对手的现状。</li>
        <li><strong>绘制你的曲线</strong>。你的曲线不应该只是竞品的“更好版本”（所有点都更高），而应该有高有低，形成错位竞争。</li>
      </ol>
      
      <h3>4. CASE (西南航空)</h3>
      <p>西南航空剔除了传统航空的“餐饮”和“选座”（低投入），但在“价格”和“班次频率”上做到了极致（高价值）。这条曲线与传统全服务航空公司截然不同，创造了低成本航空的蓝海。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>The Strategy Canvas is the central diagnostic tool of Blue Ocean Strategy. It visualizes the current state of play via value curves.</p>
      
      <h3>2. WHY (Value)</h3>
      <p>If your value curve mirrors competitors, you are in a Red Ocean. The goal is to draw a divergent curve to achieve <strong>Value Innovation</strong>.</p>

      <h3>3. HOW (Steps)</h3>
      <ol>
        <li><strong>X-Axis: Factors</strong>. List what the industry competes on (Price, Speed, Service, etc.).</li>
        <li><strong>Y-Axis: Level</strong>. From 0 (Not offered) to High.</li>
        <li><strong>Plot Competitors</strong>. Draw their current curves.</li>
        <li><strong>Plot Yours</strong>. Your curve shouldn't just be a "better version" of theirs (higher on all points). It must diverge.</li>
      </ol>
      
      <h3>4. CASE (Southwest Airlines)</h3>
      <p>Southwest eliminated "Meals" and "Seating Choice" (Low), but maximized "Price" and "Frequency" (High). This distinctive curve created the budget airline Blue Ocean.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'strategy-canvas',
      title: { zh: '价值曲线对比', en: 'Value Curve Comparison' },
      schema: [],
      data: [
        { factor: 'Price', us: 8, competitor: 5 },
        { factor: 'Support', us: 9, competitor: 3 },
        { factor: 'Features', us: 5, competitor: 9 },
        { factor: 'Ease of Use', us: 9, competitor: 4 }
      ]
    }
  },

  // 3. Feature Comparison
  {
    slug: 'feature-comparison',
    chapter: '3',
    chapterOrder: 3,
    title: '功能对比表',
    titleEn: 'Feature Comparison',
    summary: '列出核心功能，逐项比较实现并标注强弱，用于战术层面的对齐。',
    summaryEn: 'Lists core features and compares implementation details to align on tactical capabilities.',
    tags: ['功能定义', '竞品分析'],
    tagsEn: ['Feature Definition', 'Competitor Analysis'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>相比于战略画布的宏观视角，功能对比表更侧重于微观的战术执行。它是一份详细的清单，列出了为了支撑战略，我们具体需要做哪些功能。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <p>它帮助团队明确每一个功能的开发标准：是只需要“有”（及格），还是需要“优”（卓越）。这直接决定了研发资源的分配。</p>

      <h3>3. HOW (三种状态)</h3>
      <ul>
        <li><strong>Parity (人有我有)</strong>：基础功能，如果不做就是短板，但做了也不是卖点（如：登录注册）。<strong>策略：使用现成组件，快速完成。</strong></li>
        <li><strong>Advantage (人有我优)</strong>：在性能、体验上优于对手。<strong>策略：投入核心资源优化。</strong></li>
        <li><strong>Differentiation (人无我有)</strong>：独特的杀手级功能。<strong>策略：这是护城河，需全力以赴。</strong></li>
      </ul>
      
      <h3>4. PRO TIP (避坑指南)</h3>
      <p>不要试图在所有功能上都战胜对手，那会导致资源分散且产品臃肿。<strong>策略性放弃</strong>某些非核心功能（甚至不做），是为了集中资源在差异化功能上打赢。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>More granular than the Strategy Canvas, this tool focuses on tactical execution. It is a detailed checklist of features required to support the strategy.</p>
      
      <h3>2. WHY (Value)</h3>
      <p>It defines the standard for each feature: do we need "Parity" (Good enough) or "Excellence"? This dictates resource allocation.</p>

      <h3>3. HOW (Three States)</h3>
      <ul>
        <li><strong>Parity</strong>: Must-haves. Absence is a dealbreaker, but presence doesn't win deals (e.g., Login). <strong>Strategy: Do it fast, use libraries.</strong></li>
        <li><strong>Advantage</strong>: Better performance or UX than rivals. <strong>Strategy: Invest core resources.</strong></li>
        <li><strong>Differentiation</strong>: Unique features rivals don't offer. <strong>Strategy: This is the moat. All in.</strong></li>
      </ul>
      
      <h3>4. PRO TIP (Pitfalls)</h3>
      <p>Do not try to beat competitors on every single feature. That leads to feature bloat. <strong>Strategically underperform</strong> on non-core features to focus on winning attributes.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'table',
      title: { zh: '功能清单', en: 'Feature List' },
      schema: [
        { key: 'feature', labelZh: '功能点', labelEn: 'Feature', type: 'text' },
        { key: 'necessity', labelZh: '必要性', labelEn: 'Necessity', type: 'select', options: ['Must', 'Nice to have'] },
        { key: 'status', labelZh: '状态', labelEn: 'Status', type: 'select', options: ['Parity', 'Advantage', 'Gap'] },
        { key: 'comment', labelZh: '备注', labelEn: 'Comment', type: 'text' }
      ],
      data: [
        { feature: 'Social Login', necessity: 'Must', status: 'Parity', comment: 'Standard requirement' },
        { feature: 'AI Recommendations', necessity: 'Nice to have', status: 'Advantage', comment: 'Our killer feature' }
      ]
    }
  },

  // 4. Value Proposition Canvas
  {
    slug: 'value-proposition-canvas',
    chapter: '3',
    chapterOrder: 4,
    title: '价值主张画布',
    titleEn: 'Value Proposition Canvas',
    summary: '画像目标客群，对齐痛点/收益与产品服务，确保产品与市场契合（PMF）。',
    summaryEn: 'Aligns customer pains/gains with product pain relievers/gain creators to ensure Product-Market Fit.',
    tags: ['PMF', '价值定义'],
    tagsEn: ['PMF', 'Value Definition'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>它是商业模式画布（BMC）的插件，像放大镜一样深入研究“客户细分”和“价值主张”这两个核心模块。目的是实现 <strong>Problem-Solution Fit（问题-方案匹配）</strong>。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <p>很多产品失败的原因是“自嗨”——开发了很酷的功能，但并没有解决用户的实际问题。VPC 强迫你一一对应，验证每一个功能存在的理由。</p>

      <h3>3. HOW (左右匹配)</h3>
      <ul>
        <li><strong>右侧（客户概况）</strong>：
          <ul>
             <li><strong>Customer Jobs</strong>：用户想完成什么任务？</li>
             <li><strong>Pains</strong>：过程中的烦恼、风险和障碍。</li>
             <li><strong>Gains</strong>：预期的收益和惊喜。</li>
          </ul>
        </li>
        <li><strong>左侧（价值图）</strong>：
          <ul>
             <li><strong>Products</strong>：我们提供什么？</li>
             <li><strong>Pain Relievers (止痛药)</strong>：我们如何减轻用户的痛苦？</li>
             <li><strong>Gain Creators (维他命)</strong>：我们如何创造收益？</li>
          </ul>
        </li>
      </ul>
      
      <h3>4. CHECK (匹配检验)</h3>
      <p>成功的关键在于“连线”。你的每一个功能（左侧）是否直接对应了用户的某一个痛点或收益（右侧）？如果没有对应，那就是废功能。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>A plug-in to the Business Model Canvas, acting like a zoom lens on the "Customer Segment" and "Value Proposition" blocks. The goal is <strong>Problem-Solution Fit</strong>.</p>
      
      <h3>2. WHY (Value)</h3>
      <p>Products fail when they build cool features that solve no actual problems. VPC forces you to map every feature to a user need.</p>

      <h3>3. HOW (Mapping)</h3>
      <ul>
        <li><strong>Right (Customer Profile)</strong>:
          <ul>
             <li><strong>Jobs</strong>: What are they trying to do?</li>
             <li><strong>Pains</strong>: Annoyances and risks.</li>
             <li><strong>Gains</strong>: Benefits and surprises.</li>
          </ul>
        </li>
        <li><strong>Left (Value Map)</strong>:
          <ul>
             <li><strong>Products</strong>: What are we building?</li>
             <li><strong>Pain Relievers</strong>: How do we kill their pains?</li>
             <li><strong>Gain Creators</strong>: How do we create gains?</li>
          </ul>
        </li>
      </ul>
      
      <h3>4. CHECK (The Fit)</h3>
      <p>Success happens when you draw lines connecting the two sides. Does every feature (Left) address a specific Pain or Gain (Right)? If not, it's waste.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'value-proposition',
      title: { zh: '价值主张设计', en: 'Value Proposition Design' },
      schema: [],
      data: [
        { section: 'Customer Jobs', content: 'Commute to work' },
        { section: 'Pains', content: 'Traffic jams, Unpredictable delays' },
        { section: 'Gains', content: 'Arrive on time, Relax during ride' },
        { section: 'Products & Services', content: 'Ride-sharing App' },
        { section: 'Pain Relievers', content: 'Real-time routing, Guaranteed arrival' },
        { section: 'Gain Creators', content: 'Comfortable seats, Wi-Fi' }
      ]
    }
  },

  // 5. Business Model Canvas (BMC)
  {
    slug: 'business-model-canvas',
    chapter: '3',
    chapterOrder: 5,
    title: '商业模式画布',
    titleEn: 'Business Model Canvas',
    summary: '九宫格梳理客户、价值、渠道、关系、收入与成本，全景展示商业逻辑。',
    summaryEn: '9-block grid outlining customers, value, channels, relationships, revenue, and costs to visualize the entire business logic.',
    tags: ['商业模式', '战略'],
    tagsEn: ['Business Model', 'Strategy'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>BMC 是描述商业模式的通用语言。它在一张纸上展示了企业如何<strong>创造价值</strong>（右侧）、<strong>传递价值</strong>（中间）和<strong>获取价值</strong>（底部）。它将前台（市场）与后台（运营）连接起来。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <p>它让复杂的商业逻辑可视化、结构化。无论是初创企业寻找方向，还是大企业进行转型，BMC 都是检视商业健康度的最佳工具。</p>

      <h3>3. HOW (九大模块)</h3>
      <ol>
        <li><strong>客户细分 (CS)</strong>：我们在为谁服务？</li>
        <li><strong>价值主张 (VP)</strong>：我们解决什么问题？</li>
        <li><strong>渠道通路 (CH)</strong>：如何触达客户？</li>
        <li><strong>客户关系 (CR)</strong>：如何留住客户？</li>
        <li><strong>收入来源 (RS)</strong>：钱从哪里来？</li>
        <li><strong>核心资源 (KR)</strong>：我们需要什么资产？</li>
        <li><strong>关键业务 (KA)</strong>：我们需要做什么？</li>
        <li><strong>重要合作 (KP)</strong>：谁是我们的盟友？</li>
        <li><strong>成本结构 (CS)</strong>：钱花在哪里？</li>
      </ol>
      
      <h3>4. PRO TIP (叙事流)</h3>
      <p>好的 BMC 应该能讲出一个流畅的故事。例如：“我们利用[核心资源]，通过[关键业务]，为[客户细分]提供了[价值主张]，通过[渠道]交付，获得了[收入]，并控制了[成本]。”</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>The BMC is the shared language for business models. It visualizes how an organization <strong>creates</strong> (Right), <strong>delivers</strong> (Middle), and <strong>captures</strong> (Bottom) value.</p>
      
      <h3>2. WHY (Value)</h3>
      <p>It makes complex business logic visual and structured. Useful for startups finding direction or corporations managing transformation.</p>

      <h3>3. HOW (9 Blocks)</h3>
      <ol>
        <li><strong>Customer Segments</strong>: Who are we serving?</li>
        <li><strong>Value Propositions</strong>: What problem do we solve?</li>
        <li><strong>Channels</strong>: How do we reach them?</li>
        <li><strong>Relationships</strong>: How do we keep them?</li>
        <li><strong>Revenue Streams</strong>: Where does the money come from?</li>
        <li><strong>Key Resources</strong>: What assets do we need?</li>
        <li><strong>Key Activities</strong>: What must we do?</li>
        <li><strong>Key Partners</strong>: Who helps us?</li>
        <li><strong>Cost Structure</strong>: Where does the money go?</li>
      </ol>
      
      <h3>4. PRO TIP (Narrative)</h3>
      <p>A good BMC tells a story: "We use [Resources] to perform [Activities], creating [Value] for [Customers], delivered via [Channels], generating [Revenue] while managing [Costs]."</p>
    `,
    diagrams: [],
    interactive: {
      type: 'bmc',
      title: { zh: '商业模式画布', en: 'Business Model Canvas' },
      schema: [],
      data: [
        { section: 'Key Partners', content: 'Suppliers, Regulators' },
        { section: 'Key Activities', content: 'Platform dev, Marketing' },
        { section: 'Key Resources', content: 'Algorithms, User Data' },
        { section: 'Value Propositions', content: 'Cheapest ride in town' },
        { section: 'Customer Relationships', content: 'Automated, Self-service' },
        { section: 'Channels', content: 'App Store, Social Media' },
        { section: 'Customer Segments', content: 'Urban Commuters' },
        { section: 'Cost Structure', content: 'Server costs, CAC' },
        { section: 'Revenue Streams', content: 'Commission fee' }
      ]
    }
  },

  // 6. Blue Ocean Strategy (ERRC)
  {
    slug: 'blue-ocean-errc',
    chapter: '3',
    chapterOrder: 6,
    title: '蓝海战略 (ERRC)',
    titleEn: 'Blue Ocean (ERRC Grid)',
    summary: '通过“剔除、减少、增加、创造”四步动作，重构价值要素与成本结构，开创无人争抢的市场。',
    summaryEn: 'Reconstruct value and cost structures via Eliminate-Reduce-Raise-Create actions to unlock new market space.',
    tags: ['创新', '战略'],
    tagsEn: ['Innovation', 'Strategy'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>大多数企业被困在“成本”与“价值”的权衡中：要么高价高质，要么低价低质。蓝海战略通过<strong>价值创新 (Value Innovation)</strong> 打破这一权衡，通过重构要素，实现同时追求差异化和低成本。</p>
      
      <h3>2. HOW (四步动作框架 ERRC)</h3>
      <ul>
        <li><strong>剔除 (Eliminate)</strong>：行业中理所当然，但其实对用户无价值的因素。<em>（目的：大幅降低成本）</em></li>
        <li><strong>减少 (Reduce)</strong>：被过度服务的因素。<em>（目的：降低成本）</em></li>
        <li><strong>增加 (Raise)</strong>：行业未满足的关键妥协点。<em>（目的：提升价值）</em></li>
        <li><strong>创造 (Create)</strong>：行业从未提供过的全新价值。<em>（目的：创造新需求）</em></li>
      </ul>
      
      <h3>3. CASE (太阳马戏团)</h3>
      <ul>
        <li><strong>剔除</strong>：明星演员、动物表演（昂贵且受争议）。</li>
        <li><strong>减少</strong>：多场地同时演出带来的惊险感。</li>
        <li><strong>增加</strong>：独特的帐篷体验。</li>
        <li><strong>创造</strong>：引入戏剧叙事、艺术舞蹈。</li>
        <li><strong>结果</strong>：不仅降低了成本，还创造了全新的“艺术马戏”品类，票价看齐百老汇。</li>
      </ul>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>Most companies are trapped in the value-cost trade-off. Blue Ocean Strategy breaks this via <strong>Value Innovation</strong>, pursuing differentiation and low cost simultaneously by reconstructing market elements.</p>
      
      <h3>2. HOW (ERRC Framework)</h3>
      <ul>
        <li><strong>Eliminate</strong>: Factors the industry takes for granted but have no value. <em>(Cut cost)</em></li>
        <li><strong>Reduce</strong>: Factors served well below industry standard. <em>(Cut cost)</em></li>
        <li><strong>Raise</strong>: Factors served well above industry standard. <em>(Add value)</em></li>
        <li><strong>Create</strong>: Factors never offered before. <em>(Create demand)</em></li>
      </ul>
      
      <h3>3. CASE (Cirque du Soleil)</h3>
      <ul>
        <li><strong>Eliminate</strong>: Star performers, Animals (Expensive).</li>
        <li><strong>Reduce</strong>: Thrill/Danger elements.</li>
        <li><strong>Raise</strong>: Unique venue tent.</li>
        <li><strong>Create</strong>: Artistic narrative, theatre mix.</li>
        <li><strong>Result</strong>: Lowered cost structure while creating a new premium category.</li>
      </ul>
    `,
    diagrams: [],
    interactive: {
      type: 'matrix',
      title: { zh: 'ERRC 坐标格', en: 'ERRC Grid' },
      schema: [
        { key: 'eliminate', labelZh: '剔除 (Eliminate)', labelEn: 'Eliminate' },
        { key: 'reduce', labelZh: '减少 (Reduce)', labelEn: 'Reduce' },
        { key: 'raise', labelZh: '增加 (Raise)', labelEn: 'Raise' },
        { key: 'create', labelZh: '创造 (Create)', labelEn: 'Create' }
      ],
      data: [
        { key: 'eliminate', items: ['Physical stores', 'Paperwork'] },
        { key: 'reduce', items: ['Customer service agents'] },
        { key: 'raise', items: ['Mobile convenience', 'Speed'] },
        { key: 'create', items: ['AI personalization'] }
      ]
    }
  },

  // 7. Beachhead Strategy
  {
    slug: 'beachhead-strategy',
    chapter: '3',
    chapterOrder: 7,
    title: '滩头阵地战略',
    titleEn: 'Beachhead Strategy',
    summary: '选择可进入且规模合适的首个细分市场集中突破，再图扩张。',
    summaryEn: 'Selecting a specific, accessible, and winnable market segment to dominate before expanding elsewhere.',
    tags: ['市场进入', 'GTM'],
    tagsEn: ['Go-to-Market', 'GTM'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>滩头阵地战略源自诺曼底登陆。对于资源有限的初创企业，最危险的战略就是“漫射”——试图同时满足所有人的需求。你必须集中所有优势兵力拿下一个小的、明确的细分市场，站稳脚跟后再向腹地推进。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <ul>
        <li><strong>生存</strong>：小市场更容易形成垄断优势，产生正向现金流。</li>
        <li><strong>效率</strong>：营销信息更精准，获客成本（CAC）更低。</li>
        <li><strong>口碑</strong>：在小圈子里更容易引爆口碑效应。</li>
      </ul>

      <h3>3. HOW (选择标准)</h3>
      <ul>
        <li><strong>客户有钱且有痛</strong>：他们迫切需要解决问题，且有预算。</li>
        <li><strong>可触达</strong>：你可以通过销售渠道找到他们。</li>
        <li><strong>竞争小</strong>：巨头看不上或做不好。</li>
        <li><strong>可扩展性（保龄球效应）</strong>：拿下这个市场后，是否有助于推倒下一个市场？</li>
      </ul>
      
      <h3>4. CASE (Facebook)</h3>
      <p>Facebook 并没有一开始就开放给全世界。它的滩头阵地是<strong>哈佛大学</strong>。拿下哈佛后，扩展到常春藤联盟，然后是所有大学，最后才是公众。如果一开始就面向所有人，它可能早就死于服务器崩溃或社区氛围稀释。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>Derived from the Normandy landings. For startups with limited resources, the most dangerous strategy is "spray and pray." You must focus all energy on winning a small, specific "Beachhead" market first before expanding.</p>
      
      <h3>2. WHY (Value)</h3>
      <ul>
        <li><strong>Survival</strong>: Easier to dominate a small market and generate cash flow.</li>
        <li><strong>Efficiency</strong>: More targeted marketing lowers CAC.</li>
        <li><strong>Word of Mouth</strong>: Easier to create buzz in a small circle.</li>
      </ul>

      <h3>3. HOW (Selection Criteria)</h3>
      <ul>
        <li><strong>Pain & Budget</strong>: Customers are desperate and have money.</li>
        <li><strong>Accessible</strong>: You can actually reach them.</li>
        <li><strong>Low Competition</strong>: Giants ignore it.</li>
        <li><strong>Scalability (Bowling Pin)</strong>: Does winning this market help knock down the next one?</li>
      </ul>
      
      <h3>4. CASE (Facebook)</h3>
      <p>Facebook didn't launch to the world. Its beachhead was <strong>Harvard</strong>. Then Ivy League. Then all colleges. Finally, the public. Launching globally day one would have killed it.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'canvas',
      title: { zh: '滩头市场定义', en: 'Beachhead Definition' },
      schema: [
        { key: 'section', labelZh: '维度', labelEn: 'Dimension', type: 'select', options: ['Customer', 'Problem', 'Reason to Buy', 'Competition'] },
        { key: 'content', labelZh: '描述', labelEn: 'Description', type: 'text' },
        { key: 'validation', labelZh: '匹配度', labelEn: 'Fit', type: 'select', options: ['Perfect', 'Good', 'Risky'] }
      ],
      data: [
        { section: 'Customer', content: 'Local Universities', validation: 'Perfect' },
        { section: 'Problem', content: 'Need cheap textbooks', validation: 'Good' }
      ]
    }
  },

  // 8. Value vs Effort Matrix
  {
    slug: 'value-vs-effort',
    chapter: '3',
    chapterOrder: 8,
    title: '价值/投入矩阵',
    titleEn: 'Value vs. Effort Matrix',
    summary: '基于价值与投入优先级排序，聚焦高杠杆事项（Quick Wins）。',
    summaryEn: 'Prioritizing features based on Value vs. Effort to identify Quick Wins and avoid Money Pits.',
    tags: ['优先级', '规划'],
    tagsEn: ['Prioritization', 'Planning'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>资源永远是稀缺的。我们不能做所有事情，所以必须排优先级。这个矩阵是最简单有效的战术排序工具，帮助团队避免陷入“低价值高投入”的陷阱。</p>
      
      <h3>2. HOW (四个象限)</h3>
      <ul>
        <li><strong>Quick Wins (高价值/低投入)</strong>：立刻做！这是提升士气和业绩的最佳途径。</li>
        <li><strong>Major Projects (高价值/高投入)</strong>：战略重点。需要详细规划，按部就班推进。</li>
        <li><strong>Fill-ins (低价值/低投入)</strong>：填缝任务。在主力开发疲惫时作为调剂，或交给新人练手。</li>
        <li><strong>Thankless Tasks (低价值/高投入)</strong>：无底洞。坚决砍掉或无限期延后。</li>
      </ul>
      
      <h3>3. PRO TIP (避坑指南)</h3>
      <p>团队往往高估价值，低估投入。建议：<strong>价值由产品经理打分，投入由工程师打分</strong>，然后共同在矩阵上落子，达成共识。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>Resources are always scarce. This matrix is the simplest tactical prioritization tool to avoid "Money Pits" (Low Value, High Effort).</p>
      
      <h3>2. HOW (Four Quadrants)</h3>
      <ul>
        <li><strong>Quick Wins (High Value/Low Effort)</strong>: Do now! Boosts morale and results.</li>
        <li><strong>Major Projects (High Value/High Effort)</strong>: Strategic bets. Plan carefully.</li>
        <li><strong>Fill-ins (Low Value/Low Effort)</strong>: Fillers. Do when idle or for training.</li>
        <li><strong>Thankless Tasks (Low Value/High Effort)</strong>: Money Pits. Kill or postpone indefinitely.</li>
      </ul>
      
      <h3>3. PRO TIP (Best Practice)</h3>
      <p>Teams tend to overestimate Value and underestimate Effort. Have <strong>PMs score Value and Engineers score Effort independently</strong>, then plot together.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'priority-matrix',
      title: { zh: '优先级矩阵', en: 'Priority Matrix' },
      schema: [],
      data: [
        { name: 'Feature A', x: 2, y: 8 }, // Quick Win
        { name: 'Feature B', x: 8, y: 9 }, // Major Project
        { name: 'Feature C', x: 8, y: 2 }  // Thankless
      ]
    }
  },

  // 9. Kano Model
  {
    slug: 'kano-model',
    chapter: '3',
    chapterOrder: 9,
    title: 'Kano 模型',
    titleEn: 'Kano Model',
    summary: '将特性分为基础/绩效/魅力/无差异，校准满意度驱动因素。',
    summaryEn: 'Classifies features into Basic, Performance, and Excitement categories to understand satisfaction drivers.',
    tags: ['需求分类', '满意度'],
    tagsEn: ['Requirements', 'Satisfaction'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>Kano 模型指出，并非所有功能的增加都能线性的提升满意度。它将需求分为三类，每类的资源投入策略都不同。</p>
      
      <h3>2. HOW (分类与策略)</h3>
      <ul>
        <li><strong>必备属性 (Must-be)</strong>：门槛功能。如果没有，用户会极度不满；如果有，用户觉得理所当然。<em>（例：手机能打电话）</em>。<strong>策略：做到及格即可，不要过度投入。</strong></li>
        <li><strong>期望属性 (Performance)</strong>：线性功能。做得越好，用户越满意。<em>（例：电池续航、网速）</em>。<strong>策略：这就是竞争力，要重点投入。</strong></li>
        <li><strong>魅力属性 (Delighters)</strong>：惊喜功能。如果没有，用户无所谓；如果有，用户会尖叫。<em>（例：海底捞的美甲服务）</em>。<strong>策略：做一点点就能四两拨千斤。</strong></li>
      </ul>
      
      <h3>3. PRO TIP (动态演变)</h3>
      <p>魅力属性会随着时间变成期望属性，最后变成必备属性。比如 2007 年多点触控是魅力属性，现在是必备属性。创新不能停。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>Kano Model reveals that satisfaction doesn't always scale linearly with features. It classifies requirements to guide investment strategy.</p>
      
      <h3>2. HOW (Categories & Strategy)</h3>
      <ul>
        <li><strong>Must-be</strong>: Prerequisites. Disappointed if absent, neutral if present. <em>(Ex: Phone making calls)</em>. <strong>Strategy: Meet the baseline; don't over-invest.</strong></li>
        <li><strong>Performance</strong>: Linear. The more the better. <em>(Ex: Battery life)</em>. <strong>Strategy: Invest here to compete.</strong></li>
        <li><strong>Delighters</strong>: Unexpected. Neutral if absent, happy if present. <em>(Ex: Free gift)</em>. <strong>Strategy: Small investment, huge return.</strong></li>
      </ul>
      
      <h3>3. PRO TIP (Decay of Delight)</h3>
      <p>Delighters become Performance and eventually Must-be features over time. (e.g., Touchscreens were magic in 2007, now mandatory). Innovation must persist.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'table',
      title: { zh: '需求分类表', en: 'Requirement Classification' },
      schema: [
        { key: 'feature', labelZh: '功能', labelEn: 'Feature', type: 'text' },
        { key: 'category', labelZh: 'Kano 分类', labelEn: 'Category', type: 'select', options: ['Must-be', 'Performance', 'Delighter', 'Indifferent'] },
        { key: 'impact', labelZh: '满意度影响', labelEn: 'Impact', type: 'select', options: ['High', 'Med', 'Low'] }
      ],
      data: [
        { feature: 'Login', category: 'Must-be', impact: 'High' },
        { feature: 'Voice Control', category: 'Delighter', impact: 'Med' }
      ]
    }
  },

  // 10. MoSCoW Method
  {
    slug: 'moscow-method',
    chapter: '3',
    chapterOrder: 10,
    title: 'MoSCoW 法则',
    titleEn: 'MoSCoW Method',
    summary: 'Must/Should/Could/Won’t 四层优先，形成团队共识。',
    summaryEn: 'Prioritizing requirements into Must, Should, Could, and Won\'t have.',
    tags: ['优先级', '敏捷'],
    tagsEn: ['Prioritization', 'Agile'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>在固定时间盒（Timebox）的敏捷开发中，时间是固定的，质量是不可妥协的，那么<strong>范围（Scope）是唯一可变的变量</strong>。MoSCoW 帮助团队在项目开始前就达成共识：如果时间不够，我们保什么？砍什么？</p>
      
      <h3>2. HOW (分类定义)</h3>
      <ul>
        <li><strong>Must Have (必须有)</strong>：如果不交付，产品就不可用或不合法。这是 MVP 的骨架。</li>
        <li><strong>Should Have (应该有)</strong>：很重要，但如果时间紧迫，可以通过变通方法（Workaround）暂时解决。</li>
        <li><strong>Could Have (可以有)</strong>：锦上添花。只有在 Must 和 Should 都做完且还有时间时才做。</li>
        <li><strong>Won't Have (本次不做)</strong>：明确界定“不做什么”，防止范围蔓延（Scope Creep）。</li>
      </ul>
      
      <h3>3. PRO TIP (60/20/20法则)</h3>
      <p>健康的迭代规划中，Must Have 不应超过总工作量的 60%。如果全是 Must，项目将失去应对风险的缓冲空间（Buffer）。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>In Agile fixed-timeboxes, time is fixed, quality is non-negotiable. Therefore, <strong>Scope is the variable</strong>. MoSCoW aligns the team on what gets protected and what gets cut if time runs out.</p>
      
      <h3>2. HOW (Categories)</h3>
      <ul>
        <li><strong>Must Have</strong>: Non-negotiable. Without this, the launch is illegal or useless. This is the MVP.</li>
        <li><strong>Should Have</strong>: Important, but can be worked around or delayed if necessary.</li>
        <li><strong>Could Have</strong>: Nice to have. First to be cut.</li>
        <li><strong>Won't Have</strong>: Explicitly out of scope for this release. Prevents scope creep.</li>
      </ul>
      
      <h3>3. PRO TIP (60/20/20 Rule)</h3>
      <p>Must Haves should not exceed 60% of total effort. If everything is a Must, the project has no buffer against risk.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'moscow',
      title: { zh: 'MoSCoW 列表', en: 'MoSCoW List' },
      schema: [],
      data: [
        { text: 'User Registration', category: 'Must Have' },
        { text: 'Forgot Password', category: 'Should Have' },
        { text: 'Dark Mode', category: 'Could Have' }
      ]
    }
  },

  // 11. Low-Fidelity Prototype
  {
    slug: 'low-fidelity-prototype',
    chapter: '3',
    chapterOrder: 11,
    title: '低保真原型',
    titleEn: 'Low-Fidelity Prototype',
    summary: '低成本草图/线框验证关键假设与任务流程，避免过早陷入细节。',
    summaryEn: 'Low-cost sketches/wireframes to validate hypotheses and flows without getting bogged down in details.',
    tags: ['原型', '验证'],
    tagsEn: ['Prototyping', 'Validation'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>低保真原型（Lo-Fi）通常是手绘草图或黑白线框图。它的核心精神是<strong>“快速失败，廉价失败”</strong>。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <ul>
        <li><strong>聚焦逻辑</strong>：因为看起来粗糙，用户和利益相关者会专注于“流程对不对”，而不是“按钮颜色好不好看”。</li>
        <li><strong>诚实反馈</strong>：用户面对精致的高保真图时，往往只敢说“真漂亮”，而面对草图则更敢于批评。</li>
        <li><strong>低成本试错</strong>：几分钟就能画好，扔掉也不心疼。</li>
      </ul>

      <h3>3. WHEN (时机)</h3>
      <p>头脑风暴阶段、需求沟通阶段、早期的概念测试（验证 Problem-Solution Fit）。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>Low-Fi prototypes are sketches or wireframes. The philosophy is <strong>"Fail Fast, Fail Cheap."</strong></p>
      
      <h3>2. WHY (Value)</h3>
      <ul>
        <li><strong>Focus on Logic</strong>: Because it looks rough, users focus on "Is the flow right?" rather than "Is the button pretty?"</li>
        <li><strong>Honest Feedback</strong>: Users are critical of sketches but tend to just praise polished UI.</li>
        <li><strong>Low Cost</strong>: Disposable. Done in minutes.</li>
      </ul>

      <h3>3. WHEN (Context)</h3>
      <p>Brainstorming, alignment, and early concept testing (Problem-Solution Fit).</p>
    `,
    diagrams: [],
    interactive: {
      type: 'canvas',
      title: { zh: '原型反馈记录', en: 'Prototype Feedback Log' },
      schema: [
        { key: 'section', labelZh: '页面/流程', labelEn: 'Page/Flow', type: 'text', options: ['Home', 'Detail', 'Checkout'] },
        { key: 'content', labelZh: '用户反馈', labelEn: 'Feedback', type: 'text' },
        { key: 'validation', labelZh: '类型', labelEn: 'Type', type: 'select', options: ['Concept Issue', 'Missing Feature', 'Confusing'] }
      ],
      data: [
        { section: 'Home', content: 'User didn\'t know where to click start', validation: 'Confusing' }
      ]
    }
  },

  // 12. High-Fidelity Prototype
  {
    slug: 'high-fidelity-prototype',
    chapter: '3',
    chapterOrder: 12,
    title: '高保真原型',
    titleEn: 'High-Fidelity Prototype',
    summary: '高保真交互与视觉细化，用可用性测试收敛设计。',
    summaryEn: 'Interactive and visual refinement close to the final product, used for detailed usability testing.',
    tags: ['原型', 'UI/UX'],
    tagsEn: ['Prototyping', 'UI/UX'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>高保真原型（Hi-Fi）在视觉、交互动效和内容上都非常接近最终产品。它通常是不可点击的图片或高度仿真的可交互 Demo（如 Figma）。</p>
      
      <h3>2. WHEN (适用场景)</h3>
      <ul>
        <li><strong>可用性测试</strong>：测试具体的交互细节（如：点击热区是否够大、文案是否易懂、操作时长）。</li>
        <li><strong>向高层汇报</strong>：展示最终效果，争取资源。</li>
        <li><strong>开发交付</strong>：作为开发的视觉标准（Spec）。</li>
      </ul>
      
      <h3>3. PRO TIP (避坑指南)</h3>
      <p>不要过早进入高保真阶段。如果你还在验证“用户是否需要这个功能”，做高保真是浪费时间。<strong>Lo-Fi 验证“做正确的事”，Hi-Fi 验证“把事做正确”。</strong></p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>Hi-Fi prototypes look and behave like the final product. They are pixel-perfect and often interactive (e.g., Figma prototypes).</p>
      
      <h3>2. WHEN (Context)</h3>
      <ul>
        <li><strong>Usability Testing</strong>: Testing specific interactions (e.g., tap targets, copy, timing).</li>
        <li><strong>Stakeholder Demo</strong>: Selling the vision.</li>
        <li><strong>Dev Handoff</strong>: The visual spec.</li>
      </ul>
      
      <h3>3. PRO TIP (Pitfall)</h3>
      <p>Don't start Hi-Fi too early. If you are still validating "Do they want this?", Hi-Fi is waste. <strong>Lo-Fi validates "Doing the right thing"; Hi-Fi validates "Doing the thing right."</strong></p>
    `,
    diagrams: [],
    interactive: {
        type: 'table',
        title: { zh: '设计验收清单', en: 'Design QA Checklist' },
        schema: [
            { key: 'item', labelZh: '检查项', labelEn: 'Item', type: 'text' },
            { key: 'status', labelZh: '状态', labelEn: 'Status', type: 'select', options: ['Pass', 'Fail', 'Fixing'] },
            { key: 'note', labelZh: '备注', labelEn: 'Note', type: 'text' }
        ],
        data: [
            { item: 'Consistent Colors', status: 'Pass', note: '-' },
            { item: 'Touch Targets > 44px', status: 'Fail', note: 'Back button too small' }
        ]
    }
  }
];