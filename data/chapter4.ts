
import { Framework } from '../types';

export const chapter4Frameworks: Framework[] = [
  // 1. Think Aloud Protocol
  {
    slug: 'think-aloud-protocol',
    chapter: '4',
    chapterOrder: 1,
    title: '发声思考法',
    titleEn: 'Think Aloud Protocol',
    summary: '设计任务场景，让用户边做边说，即时暴露认知负荷与误解。',
    summaryEn: 'Asking users to verbalize their thoughts while performing tasks to reveal cognitive load and misconceptions.',
    tags: ['用户测试', '定性研究'],
    tagsEn: ['User Testing', 'Qualitative Research'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>发声思考法（Think Aloud）是可用性测试皇冠上的明珠。它利用了心理学原理，要求用户在操作产品时，实时口述他们的思维过程、感受和疑问。研究人员可以直接“听到”用户的认知摩擦，而不仅仅是“看到”操作错误。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <p>它能揭示<strong>“为什么”</strong>用户会犯错。例如，用户没有点击按钮，是因为没看见（视觉问题）？还是因为文案没看懂（理解问题）？还是担心点击后会扣费（信任问题）？只有通过“听”，才能区分这些原因。</p>

      <h3>3. HOW (执行步骤)</h3>
      <ol>
        <li><strong>任务设计</strong>：准备 3-5 个具体的场景化任务。
          <br><em>坏任务：“测试一下搜索功能。”</em>
          <br><em>好任务：“假设你想给 5 岁的侄子买一个 50 美元以下的乐高积木，请找到合适的商品并放入购物车。”</em></li>
        <li><strong>用户招募</strong>：根据尼尔森定律，<strong>5 名用户</strong>足以发现 85% 的严重可用性问题。不需要大规模统计。</li>
        <li><strong>测试引导</strong>：在测试开始前明确指示：“请把你看到的、想到的、感觉到的，任何东西都大声说出来。把它当作自言自语。如果我不说话，说明我在认真听。”</li>
      </ol>
      
      <h3>4. CASE (电商优惠券)</h3>
      <p>在测试中，用户停在结账页的“优惠券代码”输入框前迟疑了。他自言自语道：<em>“哎，我没有优惠券。是不是网上有？我去谷歌搜一下。”</em></p>
      <p><strong>洞察</strong>：显眼的优惠券入口会导致用户跳出网站去搜索代码，增加了放弃购买的风险（Cart Abandonment）。<br><strong>优化</strong>：将输入框折叠为一个不起眼的链接“有优惠券吗？”，只让真正持有代码的用户点击。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>Think Aloud is the crown jewel of usability testing. It asks users to verbalize their stream of consciousness while using the product. Researchers can "hear" cognitive friction, not just "see" errors.</p>
      
      <h3>2. WHY (Value)</h3>
      <p>It reveals <strong>WHY</strong> users fail. Did they not click because they didn't see it (Visual)? Didn't understand it (Cognitive)? Or feared clicking it (Trust)? Only by listening can you differentiate.</p>

      <h3>3. HOW (Execution)</h3>
      <ol>
        <li><strong>Task Design</strong>: 3-5 specific scenarios.
          <br><em>Bad: "Test search."</em>
          <br><em>Good: "Find a Lego set under $50 for your 5-year-old nephew and add to cart."</em></li>
        <li><strong>Recruit</strong>: <strong>5 users</strong> reveal 85% of usability issues (Nielsen's Law). No need for large samples.</li>
        <li><strong>Facilitation</strong>: Instruct: "Please speak whatever you are looking at, thinking, doing, or feeling. If I am silent, I am listening."</li>
      </ol>
      
      <h3>4. CASE (Coupon Field)</h3>
      <p>A user pauses at the "Coupon Code" field. He says: <em>"Hmm, I don't have a code. Is there one online? I should Google it."</em></p>
      <p><strong>Insight</strong>: Prominent coupon fields drive users away to search engines, increasing cart abandonment.<br><strong>Fix</strong>: Hide the field behind a subtle "Have a promo code?" link.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'think-aloud',
      title: { zh: '发声思考记录器', en: 'Think Aloud Protocol Recorder' },
      schema: [],
      data: [
        { task: 'Find a Coffee Maker', scenario: 'You want a machine under $100 with a timer.', observations: [] },
        { task: 'Checkout', scenario: 'Purchase as a guest user.', observations: [] }
      ]
    }
  },

  // 2. Usability Testing
  {
    slug: 'usability-testing',
    chapter: '4',
    chapterOrder: 2,
    title: '可用性测试',
    titleEn: 'Usability Testing',
    summary: '以典型用户完成真实任务，主持与观察，记录阻碍与完成率。',
    summaryEn: 'Observing representative users completing real tasks to measure effectiveness, efficiency, and satisfaction.',
    tags: ['用户测试', '量化评估'],
    tagsEn: ['User Testing', 'Quantitative Evaluation'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>如果说“发声思考”偏向定性，那么标准化的“可用性测试”则引入了定量指标（能否完成、用时多久）。它用于建立产品的体验基线（Baseline），以便在迭代中对比提升。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <p>它回答了：“我的产品到底好不好用？” 它消除了关于“易用性”的内部争论，用数据说话。</p>

      <h3>3. HOW (核心指标)</h3>
      <ul>
        <li><strong>任务完成率 (Success Rate)</strong>：用户是否独立完成了任务？
          <ul>
            <li><strong>成功 (Pass)</strong>：顺利完成。</li>
            <li><strong>勉强成功 (Struggle)</strong>：在提示下完成或绕了弯路。</li>
            <li><strong>失败 (Fail)</strong>：放弃或得出错误结果。</li>
          </ul>
        </li>
        <li><strong>任务用时 (Time on Task)</strong>：效率如何？</li>
        <li><strong>错误率 (Error Rate)</strong>：误触次数。</li>
      </ul>
      
      <h3>4. PRO TIP (主持技巧)</h3>
      <p><strong>不要引导用户！</strong> 当用户问“我该点哪里”时，不要回答。反问：“你觉得应该点哪里？”测试的是产品，不是用户的智商，也不是主持人的教学能力。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>While Think Aloud is qualitative, standard Usability Testing introduces quantitative metrics. It establishes a usability baseline to measure improvement over time.</p>
      
      <h3>2. WHY (Value)</h3>
      <p>It answers: "Is my product actually usable?" It ends internal debates with data.</p>

      <h3>3. HOW (Key Metrics)</h3>
      <ul>
        <li><strong>Success Rate</strong>: Did they finish?
          <ul>
            <li><strong>Pass</strong>: Smooth completion.</li>
            <li><strong>Struggle</strong>: Completed with help or difficulty.</li>
            <li><strong>Fail</strong>: Gave up or wrong result.</li>
          </ul>
        </li>
        <li><strong>Time on Task</strong>: Efficiency.</li>
        <li><strong>Error Rate</strong>: Number of misclicks.</li>
      </ul>
      
      <h3>4. PRO TIP (Facilitation)</h3>
      <p><strong>Do not lead the user!</strong> If they ask "Where do I click?", do not answer. Ask back "Where do you think you should click?" You are testing the product, not teaching the user.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'usability-test',
      title: { zh: '可用性测试记分板', en: 'Usability Test Scorecard' },
      schema: [],
      data: [
        { task: 'Sign Up', desc: 'Create a new account', u1: 'pass', u2: 'pass', u3: 'pass', time: '45s' },
        { task: 'Filter Results', desc: 'Find red shoes size 10', u1: 'fail', u2: 'struggle', u3: 'fail', time: '120s' },
        { task: 'Checkout', desc: 'Complete payment', u1: 'pass', u2: 'struggle', u3: 'pass', time: '90s' }
      ]
    }
  },

  // 3. Iterative Design
  {
    slug: 'iterative-design',
    chapter: '4',
    chapterOrder: 3,
    title: '迭代设计闭环',
    titleEn: 'Iterative Design',
    summary: '基于发现的问题做小步快跑迭代：构建→测试→分析→修正的闭环。',
    summaryEn: 'Small, rapid cycles of improvement: Build -> Test -> Analyze -> Refine.',
    tags: ['敏捷', '持续改进'],
    tagsEn: ['Agile', 'Continuous Improvement'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>迭代设计的哲学是承认<strong>“我们在第一次尝试时很可能是错的”</strong>。不要试图憋大招，而是通过快速的循环，不断逼近最优解。这是现代产品开发（Agile/Lean）的基石。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <ul>
        <li><strong>降低风险</strong>：早发现错误，修改成本越低。</li>
        <li><strong>适应变化</strong>：在开发过程中响应市场和用户的反馈。</li>
      </ul>

      <h3>3. HOW (闭环步骤)</h3>
      <ol>
        <li><strong>构建 (Build)</strong>：基于当前的假设，制作一个原型或版本。</li>
        <li><strong>衡量 (Measure)</strong>：投入测试（可用性测试、A/B 测试）。</li>
        <li><strong>学习 (Learn)</strong>：分析数据。哪些假设被验证了？哪些被证伪了？</li>
        <li><strong>修正 (Refine)</strong>：基于学习结果，修改设计，进入下一个循环。</li>
      </ol>
      
      <h3>4. PRO TIP (速度至上)</h3>
      <p><strong>缩短周期</strong>。一个迭代周期越短，风险越低。如果一个月迭代一次，你一年只有12次修正机会；如果一周一次，你有52次。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>The philosophy of Iterative Design admits that <strong>"we are likely wrong the first time."</strong> Instead of aiming for perfection, use rapid cycles to converge on the best solution.</p>
      
      <h3>2. WHY (Value)</h3>
      <ul>
        <li><strong>Risk Reduction</strong>: The earlier you find a bug, the cheaper it is to fix.</li>
        <li><strong>Adaptability</strong>: Respond to user feedback during development.</li>
      </ul>

      <h3>3. HOW (The Cycle)</h3>
      <ol>
        <li><strong>Build</strong>: Create a prototype based on current hypotheses.</li>
        <li><strong>Measure</strong>: Test it.</li>
        <li><strong>Learn</strong>: Analyze. What worked? What failed?</li>
        <li><strong>Refine</strong>: Fix it and restart the cycle.</li>
      </ol>
      
      <h3>4. PRO TIP (Speed)</h3>
      <p><strong>Shorten the cycle</strong>. Monthly iterations = 12 chances to improve per year. Weekly = 52 chances. Speed is strategy.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'iteration-cycle',
      title: { zh: '迭代循环追踪', en: 'Iteration Cycle Tracker' },
      schema: [],
      data: [
          { phase: 'Build', activity: 'Draft High-Fidelity Prototype v1.0' },
          { phase: 'Measure', activity: 'Run Usability Test with 5 users' },
          { phase: 'Learn', activity: 'Identified nav confusion (Severity 1)' },
          { phase: 'Fix', activity: 'Redesign Nav Bar -> v1.1' }
      ]
    }
  },

  // 4. A/B Testing
  {
    slug: 'ab-testing',
    chapter: '4',
    chapterOrder: 4,
    title: 'A/B 测试',
    titleEn: 'A/B Testing',
    summary: '明确假设与指标，设计对照与实验组，计算样本量并上线验证因果。',
    summaryEn: 'Split testing to validate causality by comparing control vs experimental groups against a metric.',
    tags: ['数据驱动', '因果推断'],
    tagsEn: ['Data Driven', 'Causality'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>A/B 测试（分桶测试）是验证因果关系的金标准。它将用户随机分为两组，唯一的区别是一个变量（如按钮颜色），从而科学地证明该变量是否导致了数据的变化。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <ul>
        <li><strong>数据决策</strong>：当团队对设计方案争执不下时，不要靠职位高低决定（HiPPO），要靠数据决定。</li>
        <li><strong>量化影响</strong>：精确计算改动带来了多少百分比的提升。</li>
      </ul>

      <h3>3. HOW (执行步骤)</h3>
      <ol>
        <li><strong>提出假设</strong>：
          <p>“如果我把[变量]从 A 改为 B，那么[指标]会提升 X%，因为[理由]。”</p>
        </li>
        <li><strong>确定样本量</strong>：
          <p>计算需要多少流量才能达到<strong>统计显著性 (Statistical Significance)</strong>。样本太少会导致结果不可信。</p>
        </li>
        <li><strong>随机分流</strong>：
          <p>将用户随机分为对照组（Control）和实验组（Variant）。</p>
        </li>
        <li><strong>分析结果</strong>：
          <p>关注 P 值（p-value）。通常 P < 0.05 意味着结果是可信的。</p>
        </li>
      </ol>
      
      <h3>4. PRO TIP (避坑指南)</h3>
      <p><strong>一次只测一个变量</strong>。如果你同时改了颜色、文案和布局，你永远不知道是哪个因素导致了数据的变化，也无法复用这个经验。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>A/B Testing is the gold standard for proving causality. It splits users randomly into two groups differing by only one variable to scientifically prove impact.</p>
      
      <h3>2. WHY (Value)</h3>
      <ul>
        <li><strong>Data-Driven</strong>: Don't let the HiPPO (Highest Paid Person's Opinion) decide design debates. Let the data decide.</li>
        <li><strong>Quantification</strong>: Measure exactly how much impact a change had.</li>
      </ul>

      <h3>3. HOW (Steps)</h3>
      <ol>
        <li><strong>Hypothesis</strong>:
          <p>"If we change [Variable] to B, [Metric] will rise by X%, because [Reason]."</p>
        </li>
        <li><strong>Sample Size</strong>:
          <p>Calculate traffic needed for <strong>Statistical Significance</strong>. Too little data = noise.</p>
        </li>
        <li><strong>Split Traffic</strong>:
          <p>Randomly assign users to Control and Variant.</p>
        </li>
        <li><strong>Analyze</strong>:
          <p>Check P-value. P < 0.05 usually means the result is real.</p>
        </li>
      </ol>
      
      <h3>4. PRO TIP (Pitfall)</h3>
      <p><strong>One variable at a time</strong>. If you change color, copy, and layout simultaneously, you won't know what worked, and you can't learn from it.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'ab-test',
      title: { zh: '实验设计卡', en: 'Experiment Design Card' },
      schema: [],
      data: [{
          variable: 'CTA Color',
          metric: 'Click Rate',
          reason: 'it increases contrast',
          baseline: 2.5,
          effect: 20,
          variantName: 'Red Button'
      }]
    }
  },

  // 5. Balanced Scorecard
  {
    slug: 'balanced-scorecard',
    chapter: '4',
    chapterOrder: 5,
    title: '平衡计分卡',
    titleEn: 'Balanced Scorecard',
    summary: '从财务、客户、流程、学习四视角设定成功指标与目标值，连接迭代与业务绩效。',
    summaryEn: 'Setting metrics from Financial, Customer, Process, and Learning perspectives to link iterations to business strategy.',
    tags: ['绩效管理', '战略执行'],
    tagsEn: ['Performance', 'Strategy Execution'],
    htmlContent: `
      <h3>1. WHAT (核心定义)</h3>
      <p>平衡计分卡（BSC）不仅仅是一个绩效考核工具，它是一个战略执行系统。它纠正了只关注“财务指标”的短视行为，提供了一个全景驾驶舱，迫使组织从四个相互关联的维度审视健康度。</p>
      
      <h3>2. WHY (核心价值)</h3>
      <p>它揭示了因果关系：只有<strong>员工成长了（学习维度）</strong>，才能<strong>优化流程（流程维度）</strong>；只有流程卓越，才能让<strong>客户满意（客户维度）</strong>；只有客户满意，才能最终实现<strong>股东回报（财务维度）</strong>。</p>

      <h3>3. HOW (四个维度)</h3>
      <ol>
        <li><strong>财务 (Financial)</strong>：为了让股东满意，我们必须达成什么财务目标？<em>（例：营收增长、利润率）</em></li>
        <li><strong>客户 (Customer)</strong>：为了达成财务目标，我们要给客户提供什么价值？<em>（例：NPS、复购率）</em></li>
        <li><strong>内部流程 (Internal Process)</strong>：为了让客户满意，我们必须在哪些流程上卓越？<em>（例：交付速度、良品率）</em></li>
        <li><strong>学习与成长 (Learning & Growth)</strong>：为了维持流程卓越，我们的人才和基建如何进步？<em>（例：员工满意度、技术架构升级）</em></li>
      </ol>
      
      <h3>4. PRO TIP (诊断)</h3>
      <p>如果财务指标（滞后指标）不好，不要只盯着财务报表看。往回溯源：是不是客户不满意？为什么不满意？是因为流程太慢？为什么慢？是因为员工缺乏培训？根因往往在底部。</p>
    `,
    htmlContentEn: `
      <h3>1. WHAT (Definition)</h3>
      <p>The Balanced Scorecard (BSC) is a strategic execution system. It corrects the myopia of focusing only on financial metrics, providing a holistic cockpit view of organizational health.</p>
      
      <h3>2. WHY (Value)</h3>
      <p>It links causality: <strong>Employee Growth</strong> leads to <strong>Better Processes</strong>, which leads to <strong>Happy Customers</strong>, which finally results in <strong>Financial Success</strong>.</p>

      <h3>3. HOW (Four Perspectives)</h3>
      <ol>
        <li><strong>Financial</strong>: To satisfy shareholders, what financial goals must we hit? <em>(Rev, Margin)</em></li>
        <li><strong>Customer</strong>: To hit financial goals, what value must we deliver? <em>(NPS, Retention)</em></li>
        <li><strong>Internal Process</strong>: To satisfy customers, at which processes must we excel? <em>(Speed, Quality)</em></li>
        <li><strong>Learning & Growth</strong>: To sustain excellence, how must our people and systems improve? <em>(Skills, Tech Debt)</em></li>
      </ol>
      
      <h3>4. PRO TIP (Diagnosis)</h3>
      <p>If financial metrics (lagging) are down, look upstream. Is it low customer satisfaction? Due to slow processes? Due to lack of training? The root cause is often at the bottom.</p>
    `,
    diagrams: [],
    interactive: {
      type: 'balanced-scorecard',
      title: { zh: '战略计分卡', en: 'Strategic Scorecard' },
      schema: [],
      data: [
          { perspective: 'Financial', items: [{ objective: 'Increase Revenue', target: '+20%' }, { objective: 'Reduce Cost', target: '-5%' }] },
          { perspective: 'Customer', items: [{ objective: 'Improve NPS', target: '> 50' }, { objective: 'Reduce Churn', target: '< 3%' }] },
          { perspective: 'Internal Process', items: [{ objective: 'Faster Release Cycle', target: '2 weeks' }] },
          { perspective: 'Learning & Growth', items: [{ objective: 'Team Training', target: '100% Certified' }] }
      ]
    }
  }
];