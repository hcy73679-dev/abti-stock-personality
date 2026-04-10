/**
 * ABTI 大A人格测试 - 核心数据文件
 * 设计风格：复古报纸 + 现代金融混搭
 * 
 * 人格维度（参考MBTI框架，字母重新设计）：
 * B/S - Bull(多头) vs. Short(空头) - 对市场的基本态度
 * R/P - Research(研究型) vs. Panic(情绪型) - 决策方式
 * H/C - Hold(持有型) vs. Chase(追涨型) - 操作风格
 * W/L - Win(赢家心态) vs. Loss(亏损接受度) - 风险承受
 * 
 * 16种组合类型：BRHW, BRHL, BRCW, BRCL, BPHW, BPHL, BPCW, BPCL,
 *              SRHW, SRHL, SRCW, SRCL, SPHW, SPHL, SPCW, SPCL
 */

export type PersonalityDimension = 'B' | 'S' | 'R' | 'P' | 'H' | 'C' | 'W' | 'L';

export interface PersonalityType {
  code: string;
  name: string;
  englishName: string;
  emoji: string;
  tagline: string;
  description: string;
  investingStyle: string;
  strengths: string[];
  weaknesses: string[];
  famousQuote: string;
  stockAdvice: string;
  compatibleWith: string;
  incompatibleWith: string;
  color: string;
}

export interface Question {
  id: number;
  text: string;
  scenario: string;
  options: {
    A: { text: string; dimensions: PersonalityDimension[] };
    B: { text: string; dimensions: PersonalityDimension[] };
  };
}

// ============================================================
// 16种ABTI人格类型
// ============================================================
export const personalityTypes: Record<string, PersonalityType> = {
  BRHW: {
    code: 'BRHW',
    name: '永动机牛人',
    englishName: 'BRHW',
    emoji: '🐂',
    tagline: '我不是在涨停，就是在去涨停的路上',
    description: '你是股市中的永动机，永远充满能量，永远看多。你用严谨的研究支撑你的乐观，每一次买入都有充分的逻辑依据。你相信价值终将回归，而且你有耐心等待那一天。散户眼中的"大神"，其实是你每晚熬夜研报的结果。',
    investingStyle: '价值投资派，深度研究后重仓持有，不轻易止损，相信时间是朋友。',
    strengths: ['研究深入，逻辑严密', '持仓稳定，不受噪音影响', '长期收益可观'],
    weaknesses: ['有时过于自信，忽视风险', '持仓周期过长，机会成本高', '偶尔陷入"价值陷阱"'],
    famousQuote: '"别人恐惧我贪婪，别人贪婪我……还是贪婪。"',
    stockAdvice: '你适合做长期价值投资，但记得设置止损线，即使是价值股也会跌穿地板。',
    compatibleWith: 'SRHL',
    incompatibleWith: 'SPCL',
    color: '#C41E3A',
  },
  BRHL: {
    code: 'BRHL',
    name: '佛系研究员',
    englishName: 'BRHL',
    emoji: '🧘',
    tagline: '亏了没关系，我还有研报',
    description: '你是股市中的学者，研究是你的乐趣，盈亏是你的副产品。你能写出10000字的行业分析，却在-30%时淡然一笑说"估值还有空间"。你对亏损有超强的心理承受能力，因为你始终相信自己的逻辑没错——只是市场还没明白过来。',
    investingStyle: '研究驱动型，重视基本面分析，对短期波动无感，长期持有但接受亏损。',
    strengths: ['心态极好，不被情绪左右', '研究能力强，知识储备丰富', '不追涨杀跌'],
    weaknesses: ['止损意识薄弱', '可能在错误的股票上坚持太久', '忽视市场情绪的重要性'],
    famousQuote: '"这只股票的基本面没有变化，只是价格变了。"',
    stockAdvice: '学会设置硬性止损，再好的研究也要配合风险管理，亏损不是美德。',
    compatibleWith: 'BRHW',
    incompatibleWith: 'BPCW',
    color: '#2E86AB',
  },
  BRCW: {
    code: 'BRCW',
    name: '涨停板猎手',
    englishName: 'BRCW',
    emoji: '🎯',
    tagline: '今天不打板，明天徒伤悲',
    description: '你是大A市场的速度选手，眼疾手快，专门猎杀涨停板。你有完整的打板逻辑，研究过无数涨停模式，对龙头股的感知如同老猎人对猎物的直觉。你追求的不是价值，而是动量——只要在对的时间出现在对的板块，就是胜利。',
    investingStyle: '动量交易派，专注短线打板，快进快出，追求高胜率和高赔率。',
    strengths: ['执行力强，决策迅速', '对市场热点敏感', '盈利效率高'],
    weaknesses: ['压力极大，容易疲劳', '一旦踩雷损失惨重', '需要全天盯盘'],
    famousQuote: '"封板了！封板了！……炸板了……"',
    stockAdvice: '打板是高风险策略，务必控制仓位，每次打板不超过总仓位的20%。',
    compatibleWith: 'SPHW',
    incompatibleWith: 'BRHL',
    color: '#E84855',
  },
  BRCL: {
    code: 'BRCL',
    name: '韭菜进化体',
    englishName: 'BRCL',
    emoji: '🌱',
    tagline: '我不是韭菜，我是在成长的韭菜',
    description: '你热爱追涨，但总是追到高点；你相信市场，但市场总是辜负你。你是大A市场的生态基石，用你的热情和资金滋养了无数机构和大户。但你从不气馁，每次亏损后都能总结出新的"交易心得"，然后在下一次用同样的方式再亏一遍。',
    investingStyle: '情绪驱动型追涨，缺乏系统性策略，亏损后反思但难以改变行为模式。',
    strengths: ['乐观积极，永不放弃', '对市场充满热情', '学习欲望强烈'],
    weaknesses: ['追涨杀跌，高买低卖', '缺乏风险意识', '容易被消息面影响'],
    famousQuote: '"这次不一样，我研究过了！"',
    stockAdvice: '先用模拟盘练习6个月，建立自己的交易系统，再用真钱入市。',
    compatibleWith: 'SRHW',
    incompatibleWith: 'BRHW',
    color: '#27AE60',
  },
  BPHW: {
    code: 'BPHW',
    name: '情绪化赌神',
    englishName: 'BPHW',
    emoji: '🎰',
    tagline: '感觉要涨！全仓！',
    description: '你是大A市场的感性派赌神，靠直觉和情绪做决策，但偏偏运气不错。你不看研报，不分析K线，只凭"感觉"下注，有时候还真的赚钱了——这让你更加相信自己的直觉。你的账户像过山车，但你享受这种刺激。',
    investingStyle: '直觉驱动型，重仓单一标的，不设止损，靠运气和胆量博取高收益。',
    strengths: ['决策果断，执行力强', '不被分析瘫痪', '有时候直觉确实准'],
    weaknesses: ['缺乏系统性策略', '风险管理几乎为零', '一次重大亏损可能毁掉所有'],
    famousQuote: '"我就是感觉这只股票要涨，说不出来为什么。"',
    stockAdvice: '请立即学习基本的风险管理，设置止损，不要让一次错误的感觉毁掉你的本金。',
    compatibleWith: 'SRHW',
    incompatibleWith: 'SRHL',
    color: '#F39C12',
  },
  BPHL: {
    code: 'BPHL',
    name: '套牢专业户',
    englishName: 'BPHL',
    emoji: '⛓️',
    tagline: '不卖就不亏，我是长期投资者',
    description: '你是大A市场最坚定的"长期投资者"——不是因为你有价值投资理念，而是因为你买的股票一直在跌，你不舍得割肉。你把套牢美化成"长期持有"，把亏损美化成"浮亏"，在心里默默等待解套的那一天。',
    investingStyle: '被动持有型，因为亏损而无法止损，长期套牢，等待解套。',
    strengths: ['持仓稳定（被迫的）', '不会频繁交易（没钱了）', '对亏损有超强耐受力'],
    weaknesses: ['缺乏止损意识', '资金长期被套，错失其他机会', '心理压力极大'],
    famousQuote: '"等它涨回来我就卖，已经等了三年了。"',
    stockAdvice: '学会接受亏损，止损是为了保存本金去寻找更好的机会，沉没成本不是理由。',
    compatibleWith: 'BRCW',
    incompatibleWith: 'SPCW',
    color: '#8E44AD',
  },
  BPCW: {
    code: 'BPCW',
    name: '消息面冲锋队',
    englishName: 'BPCW',
    emoji: '📱',
    tagline: '群里说要涨！快买！',
    description: '你是大A市场的消息驱动型选手，股票群、财经公众号、朋友圈是你的主要信息源。一旦看到"重磅消息"就立刻冲进去，不管是真是假，先买了再说。你的交易记录里充满了"消息买入，高位套牢"的故事。',
    investingStyle: '消息驱动型，依赖小道消息和社交媒体，追涨热点，缺乏独立判断。',
    strengths: ['信息获取速度快', '对热点敏感', '行动力强'],
    weaknesses: ['容易被假消息误导', '永远是消息最后一个知道的', '缺乏独立分析能力'],
    famousQuote: '"群主说这个股票有内幕，我买了十万！"',
    stockAdvice: '任何"内幕消息"都可能是陷阱，建立自己的分析框架，不要依赖他人的判断。',
    compatibleWith: 'SRHL',
    incompatibleWith: 'BRHW',
    color: '#E67E22',
  },
  BPCL: {
    code: 'BPCL',
    name: '散户之魂',
    englishName: 'BPCL',
    emoji: '👻',
    tagline: '大A养活了我的情绪',
    description: '你是大A市场的精神支柱——不是因为你赚钱，而是因为你提供了流动性、情绪和话题。你追涨杀跌，跟风消息，亏损后在股吧发帖骂庄家，然后继续买入。你是市场的灵魂，没有你，大A少了很多色彩。',
    investingStyle: '完全情绪化，无策略，跟风操作，亏损后怪市场，循环往复。',
    strengths: ['为市场提供流动性', '永远充满热情', '股吧发帖质量极高'],
    weaknesses: ['几乎所有投资决策都是错误的', '无法从亏损中学习', '情绪化严重影响判断'],
    famousQuote: '"庄家太坏了！专门骗我们散户！"',
    stockAdvice: '请认真学习投资基础知识，或者考虑购买指数基金，让专业的人帮你管理资产。',
    compatibleWith: 'BRCW',
    incompatibleWith: 'BRHW',
    color: '#95A5A6',
  },
  SRHW: {
    code: 'SRHW',
    name: '做空大师',
    englishName: 'SRHW',
    emoji: '🐻',
    tagline: '我看空，但我有逻辑',
    description: '你是市场中的逆向思维者，当所有人都在狂欢时，你在研究泡沫的边界。你有严谨的分析框架，能够识别市场的非理性繁荣，并在适当时机做空获利。你是市场的清醒者，虽然经常被人骂，但最终往往是对的。',
    investingStyle: '逆向投资派，擅长识别高估值风险，在市场过热时减仓或做空。',
    strengths: ['独立思考，不随波逐流', '风险意识强', '逆向操作往往获利丰厚'],
    weaknesses: ['可能过早做空，承受浮亏', '市场非理性时间可能超过你的资金', '容易被市场孤立'],
    famousQuote: '"这个估值完全不合理，但市场可以在不合理中运行很久。"',
    stockAdvice: '做空需要精确的时机判断，设置止损，不要与趋势为敌太久。',
    compatibleWith: 'BRHW',
    incompatibleWith: 'BPCW',
    color: '#2C3E50',
  },
  SRHL: {
    code: 'SRHL',
    name: '悲观研究员',
    englishName: 'SRHL',
    emoji: '🔍',
    tagline: '我发现了风险，但市场不听',
    description: '你是市场中最谨慎的分析师，总能找到各种风险因素。你的研报里充满了"需要关注的风险点"，你的持仓永远低于市场平均水平。你不是悲观主义者，你只是"现实主义者"——只是你的现实比市场悲观了一点点。',
    investingStyle: '防御型投资，重视风险控制，持仓保守，宁可少赚也不多亏。',
    strengths: ['风险控制能力强', '在市场下跌时损失最小', '睡眠质量最好的投资者'],
    weaknesses: ['牛市中严重跑输市场', '错失很多上涨机会', '过于悲观可能影响判断'],
    famousQuote: '"这个股票有很多风险，我觉得还是观望比较好。"',
    stockAdvice: '适当提高风险承受能力，优质资产的长期回报往往超过你的预期。',
    compatibleWith: 'BPHW',
    incompatibleWith: 'BPCL',
    color: '#1ABC9C',
  },
  SRCW: {
    code: 'SRCW',
    name: '反向指标大师',
    englishName: 'SRCW',
    emoji: '🔄',
    tagline: '我做空，然后追涨，然后做空',
    description: '你是市场中最矛盾的存在，理性上看空，行动上追涨。你能写出精彩的看空分析，但当市场真的涨起来时，你又忍不住追进去。你的账户是市场情绪的完美镜像——高位追涨，低位做空，完美的反向指标。',
    investingStyle: '矛盾型，理性分析与情绪行动严重脱节，经常做出与自己判断相反的操作。',
    strengths: ['分析能力强', '对市场情绪敏感', '自我反思能力强'],
    weaknesses: ['知行不一，执行力差', '经常在错误时机改变策略', '内心矛盾影响决策'],
    famousQuote: '"我知道这个时候不应该买，但是……就买一点点。"',
    stockAdvice: '建立严格的交易纪律，写下你的分析和计划，然后严格执行，不要被情绪左右。',
    compatibleWith: 'BRCW',
    incompatibleWith: 'BRHW',
    color: '#9B59B6',
  },
  SRCL: {
    code: 'SRCL',
    name: '末日预言家',
    englishName: 'SRCL',
    emoji: '🌋',
    tagline: '股市要崩了！我已经空仓了！',
    description: '你是大A市场的末日预言家，每年至少预测三次大崩盘。你的空仓时间占了投资生涯的80%，因为你总是觉得"现在不是好时机"。你错过了无数牛市，但你有充分的理由——"我在等更好的机会"。',
    investingStyle: '极度保守型，长期空仓等待，错失大量上涨机会，以避免亏损为最高目标。',
    strengths: ['本金保全能力极强', '在熊市中笑傲群雄', '睡眠质量最好'],
    weaknesses: ['长期跑输通货膨胀', '错失所有牛市', '机会成本极高'],
    famousQuote: '"我就知道会跌！虽然我等了五年……"',
    stockAdvice: '完全不投资也是一种风险，考虑定投指数基金，用时间平滑风险。',
    compatibleWith: 'SRHL',
    incompatibleWith: 'BPHW',
    color: '#7F8C8D',
  },
  SPHW: {
    code: 'SPHW',
    name: '空头赌徒',
    englishName: 'SPHW',
    emoji: '🎲',
    tagline: '感觉要跌！全仓做空！',
    description: '你是做空界的赌神，靠直觉和胆量做空，有时候赚得盆满钵满，有时候被逼空得倾家荡产。你不做基本面分析，不看技术图表，只凭"感觉"判断市场要跌。你的账户是一部跌宕起伏的财经小说。',
    investingStyle: '直觉做空型，重仓做空，不设止损，靠运气博取高收益。',
    strengths: ['胆识过人', '在市场恐慌时能保持冷静做空', '偶尔获得惊人回报'],
    weaknesses: ['风险极高', '被逼空时损失惨重', '缺乏系统性策略'],
    famousQuote: '"这个市场明显高估了，我要做空！（然后被逼空）"',
    stockAdvice: '做空风险远大于做多，请务必设置严格止损，控制仓位。',
    compatibleWith: 'BRCW',
    incompatibleWith: 'BPHL',
    color: '#E74C3C',
  },
  SPHL: {
    code: 'SPHL',
    name: '躺平投资者',
    englishName: 'SPHL',
    emoji: '🛋️',
    tagline: '反正都会跌，躺着等吧',
    description: '你是大A市场的哲学家，用"躺平"的方式应对市场的一切不确定性。你不追涨，不止损，不研究，只是把钱放在那里，然后看着它慢慢缩水，心如止水。你的投资哲学是：反正都会跌，不如不操作。',
    investingStyle: '完全被动型，不做任何主动决策，任由资产随市场漂流。',
    strengths: ['交易成本最低', '不会因为频繁操作而亏损', '心态最平和'],
    weaknesses: ['资产缺乏管理', '错失上涨机会', '长期可能跑输通胀'],
    famousQuote: '"买了就不看了，反正看了也没用。"',
    stockAdvice: '如果你真的不想主动管理，请选择指数基金定投，比躺平更有效。',
    compatibleWith: 'SRCL',
    incompatibleWith: 'BRCW',
    color: '#BDC3C7',
  },
  SPCW: {
    code: 'SPCW',
    name: '割肉专家',
    englishName: 'SPCW',
    emoji: '✂️',
    tagline: '跌了就割，涨了就追，完美闭环',
    description: '你是大A市场的"完美反向操作者"，总是在最低点割肉，然后在最高点追涨。你的操作记录是一部完美的反向教材——每一次止损都是底部，每一次追涨都是顶部。你为市场提供了完美的流动性。',
    investingStyle: '情绪化操作，低位恐慌割肉，高位贪婪追涨，完美的反向指标。',
    strengths: ['执行力极强（虽然方向错了）', '不会长期套牢', '为市场提供流动性'],
    weaknesses: ['永远在错误的时机操作', '高买低卖，持续亏损', '情绪主导一切决策'],
    famousQuote: '"跌了这么多，再不割就没了！（然后反弹了）"',
    stockAdvice: '在做出任何操作决定前，等待24小时，让情绪冷静下来再决策。',
    compatibleWith: 'SRHL',
    incompatibleWith: 'BRHW',
    color: '#E8D5B7',
  },
  SPCL: {
    code: 'SPCL',
    name: '佛系空仓侠',
    englishName: 'SPCL',
    emoji: '☯️',
    tagline: '不买就不亏，这是我的投资智慧',
    description: '你是大A市场的终极智者——你根本不买股票。你看着别人在市场里起起落落，自己岿然不动，手握现金，心如明镜。你的投资哲学是：最好的投资就是不投资。虽然你的钱在通胀中慢慢缩水，但你从未在股市里亏过一分钱。',
    investingStyle: '完全不参与型，以现金为王，用不参与来规避所有市场风险。',
    strengths: ['从未在股市亏损', '心态极度平和', '有充足的现金流动性'],
    weaknesses: ['资产被通胀侵蚀', '错失所有投资机会', '长期财富增值能力为零'],
    famousQuote: '"我从来不炒股，所以我从来不亏钱。"',
    stockAdvice: '适度参与市场是必要的，考虑将部分资金投入低风险的货币基金或国债。',
    compatibleWith: 'SRCL',
    incompatibleWith: 'BRHW',
    color: '#ECF0F1',
  },
};

// ============================================================
// 题库 - 60道题目，每次随机抽取20道
// ============================================================
export const questionBank: Question[] = [
  {
    id: 1,
    text: '早上9:25，你看到一只股票昨天涨停，今天开盘继续高开，你的第一反应是？',
    scenario: '🔔 开盘前五分钟',
    options: {
      A: { text: '立刻研究基本面，看看涨停的逻辑是否成立', dimensions: ['R'] },
      B: { text: '感觉要继续涨！先买进去再说！', dimensions: ['P', 'C'] },
    },
  },
  {
    id: 2,
    text: '你持有的股票突然无故跌停，你会怎么做？',
    scenario: '📉 突发跌停',
    options: {
      A: { text: '冷静分析原因，如果逻辑没变就继续持有', dimensions: ['B', 'H'] },
      B: { text: '不管三七二十一，先割肉再说，保住本金', dimensions: ['S', 'C'] },
    },
  },
  {
    id: 3,
    text: '股票群里有人说某只股票有"内幕消息"，你会？',
    scenario: '💬 股票群消息',
    options: {
      A: { text: '当作噪音忽略，内幕消息十有八九是陷阱', dimensions: ['R', 'S'] },
      B: { text: '先买一点试试水，万一是真的呢？', dimensions: ['P', 'B'] },
    },
  },
  {
    id: 4,
    text: '你的股票已经亏损了30%，你的感受是？',
    scenario: '📊 账户浮亏-30%',
    options: {
      A: { text: '很痛苦，但我能接受，这是投资的一部分', dimensions: ['L'] },
      B: { text: '必须想办法回本，这不能接受', dimensions: ['W'] },
    },
  },
  {
    id: 5,
    text: '市场整体大涨，你空仓在场外，你会？',
    scenario: '🚀 大盘暴涨',
    options: {
      A: { text: '保持冷静，等待更好的买入机会', dimensions: ['S', 'R'] },
      B: { text: '赶紧追进去，不能错过这波行情！', dimensions: ['B', 'C'] },
    },
  },
  {
    id: 6,
    text: '你花了一周时间研究一只股票，但买入后它开始下跌，你会？',
    scenario: '📚 研究后买入下跌',
    options: {
      A: { text: '重新检查研究逻辑，如果没问题就加仓', dimensions: ['B', 'H', 'R'] },
      B: { text: '先止损出来，研究可能有问题', dimensions: ['S', 'C'] },
    },
  },
  {
    id: 7,
    text: '你的朋友炒股赚了50%，你会？',
    scenario: '👥 朋友赚钱了',
    options: {
      A: { text: '恭喜他，但我有自己的投资节奏', dimensions: ['R', 'H'] },
      B: { text: '问他买的什么，我也想跟着买', dimensions: ['P', 'C'] },
    },
  },
  {
    id: 8,
    text: '面对一只估值很高但热度极高的股票，你会？',
    scenario: '🔥 高估值热门股',
    options: {
      A: { text: '估值太高了，不碰，等回调', dimensions: ['S', 'R'] },
      B: { text: '市场热度就是价值，先买了再说', dimensions: ['B', 'P'] },
    },
  },
  {
    id: 9,
    text: '你的股票涨了20%，你会？',
    scenario: '📈 持仓盈利20%',
    options: {
      A: { text: '继续持有，目标价还没到', dimensions: ['B', 'H'] },
      B: { text: '先落袋为安，涨了就该卖', dimensions: ['S', 'W'] },
    },
  },
  {
    id: 10,
    text: '看到一个分析师说某行业未来三年会大涨，你会？',
    scenario: '📰 分析师报告',
    options: {
      A: { text: '自己研究验证，分析师的话不能全信', dimensions: ['R'] },
      B: { text: '分析师说了算，买！', dimensions: ['P', 'B'] },
    },
  },
  {
    id: 11,
    text: '大盘连续下跌一个月，你的操作是？',
    scenario: '🌧️ 熊市持续下跌',
    options: {
      A: { text: '越跌越买，优质资产打折了', dimensions: ['B', 'H'] },
      B: { text: '先清仓观望，等市场稳定再说', dimensions: ['S', 'C'] },
    },
  },
  {
    id: 12,
    text: '你的投资组合里有一只股票已经套牢两年，你会？',
    scenario: '⏰ 套牢两年',
    options: {
      A: { text: '重新评估，如果基本面变差就果断割肉', dimensions: ['R', 'C'] },
      B: { text: '继续等，等它涨回来', dimensions: ['B', 'H', 'L'] },
    },
  },
  {
    id: 13,
    text: '你在考虑是否要加杠杆买股票，你的想法是？',
    scenario: '💰 考虑加杠杆',
    options: {
      A: { text: '绝对不用杠杆，风险太大', dimensions: ['S', 'L'] },
      B: { text: '适当加杠杆可以放大收益', dimensions: ['B', 'W'] },
    },
  },
  {
    id: 14,
    text: '你看到一只股票连续涨了10天，你的判断是？',
    scenario: '🔟 连续10天上涨',
    options: {
      A: { text: '可能要回调了，这种涨幅不可持续', dimensions: ['S', 'R'] },
      B: { text: '强势股！继续涨！买！', dimensions: ['B', 'P', 'C'] },
    },
  },
  {
    id: 15,
    text: '你的股票今天跌了5%，你会？',
    scenario: '📉 单日下跌5%',
    options: {
      A: { text: '正常波动，不用理会', dimensions: ['H', 'L'] },
      B: { text: '赶紧看看是不是有什么利空消息', dimensions: ['R', 'P'] },
    },
  },
  {
    id: 16,
    text: '你更喜欢哪种投资方式？',
    scenario: '🎯 投资风格选择',
    options: {
      A: { text: '长期持有优质公司，等待价值回归', dimensions: ['B', 'H', 'R'] },
      B: { text: '短线交易，快进快出，抓住每一波机会', dimensions: ['C', 'P'] },
    },
  },
  {
    id: 17,
    text: '你如何看待"止损"这件事？',
    scenario: '🛑 止损观念',
    options: {
      A: { text: '止损是必要的风险管理工具', dimensions: ['S', 'C', 'W'] },
      B: { text: '不卖就不亏，止损是认输', dimensions: ['B', 'H', 'L'] },
    },
  },
  {
    id: 18,
    text: '你在选股时最看重什么？',
    scenario: '🔎 选股标准',
    options: {
      A: { text: '公司基本面：盈利、现金流、竞争优势', dimensions: ['R', 'B'] },
      B: { text: '市场热度和题材概念', dimensions: ['P', 'C'] },
    },
  },
  {
    id: 19,
    text: '你的账户今年亏损了20%，你会？',
    scenario: '📊 年度亏损20%',
    options: {
      A: { text: '总结经验，调整策略，明年继续', dimensions: ['L', 'R'] },
      B: { text: '必须在年底前把亏损追回来！', dimensions: ['W', 'P'] },
    },
  },
  {
    id: 20,
    text: '你对"价值投资"的看法是？',
    scenario: '💡 投资理念',
    options: {
      A: { text: '是最可靠的长期投资方法', dimensions: ['B', 'R', 'H'] },
      B: { text: '太慢了，大A不适合价值投资', dimensions: ['S', 'P', 'C'] },
    },
  },
  {
    id: 21,
    text: '你刚买入的股票第二天就跌了8%，你会？',
    scenario: '😱 买入即跌',
    options: {
      A: { text: '检查是否有新的利空，没有的话继续持有', dimensions: ['H', 'R'] },
      B: { text: '先卖掉，等稳定了再看', dimensions: ['C', 'S'] },
    },
  },
  {
    id: 22,
    text: '你更倾向于持有多少只股票？',
    scenario: '📁 持仓分散度',
    options: {
      A: { text: '1-3只，集中持仓，研究透彻', dimensions: ['B', 'W', 'H'] },
      B: { text: '10只以上，分散风险', dimensions: ['S', 'L', 'R'] },
    },
  },
  {
    id: 23,
    text: '你如何看待"追热点"？',
    scenario: '🌡️ 热点板块',
    options: {
      A: { text: '热点过了就是陷阱，不追', dimensions: ['S', 'R'] },
      B: { text: '热点就是机会，要快准狠', dimensions: ['B', 'P', 'C'] },
    },
  },
  {
    id: 24,
    text: '你的股票涨停了，你会？',
    scenario: '🎉 持仓涨停',
    options: {
      A: { text: '继续持有，看看明天能否再涨', dimensions: ['B', 'H'] },
      B: { text: '卖掉一半，落袋为安', dimensions: ['S', 'W', 'C'] },
    },
  },
  {
    id: 25,
    text: '你对技术分析（K线图、均线等）的态度是？',
    scenario: '📈 技术分析',
    options: {
      A: { text: '有一定参考价值，但不是决策依据', dimensions: ['R', 'B'] },
      B: { text: 'K线会说话，我完全依赖技术分析', dimensions: ['P', 'C'] },
    },
  },
  {
    id: 26,
    text: '你会在什么情况下清仓？',
    scenario: '🚪 清仓时机',
    options: {
      A: { text: '当基本面发生重大变化时', dimensions: ['R', 'S'] },
      B: { text: '当我感觉市场要跌的时候', dimensions: ['P', 'S'] },
    },
  },
  {
    id: 27,
    text: '你如何看待"分批建仓"？',
    scenario: '🏗️ 建仓策略',
    options: {
      A: { text: '非常重要，可以降低成本和风险', dimensions: ['R', 'L'] },
      B: { text: '太麻烦了，看准了就全仓买入', dimensions: ['P', 'W'] },
    },
  },
  {
    id: 28,
    text: '你对"定投指数基金"的看法是？',
    scenario: '📅 指数基金定投',
    options: {
      A: { text: '适合大多数人，长期来看收益不错', dimensions: ['R', 'H'] },
      B: { text: '太无聊了，我要自己选股', dimensions: ['P', 'B', 'C'] },
    },
  },
  {
    id: 29,
    text: '你在股票下跌时的心情是？',
    scenario: '😰 下跌时的心情',
    options: {
      A: { text: '有些担心，但能保持理性', dimensions: ['L', 'R'] },
      B: { text: '极度焦虑，睡不着觉', dimensions: ['W', 'P'] },
    },
  },
  {
    id: 30,
    text: '你认为大A市场的特点是？',
    scenario: '🇨🇳 大A市场认知',
    options: {
      A: { text: '政策市，需要关注政策导向', dimensions: ['R', 'B'] },
      B: { text: '庄家市，跟着庄家走就行', dimensions: ['P', 'C'] },
    },
  },
  {
    id: 31,
    text: '你的股票连续三天跌停，你会？',
    scenario: '📉 连续三天跌停',
    options: {
      A: { text: '冷静分析，如果是系统性风险就减仓', dimensions: ['R', 'S', 'C'] },
      B: { text: '割肉！再不跑就没了！', dimensions: ['S', 'P', 'C'] },
    },
  },
  {
    id: 32,
    text: '你如何看待"市盈率"（PE）？',
    scenario: '📊 估值指标',
    options: {
      A: { text: '重要的估值参考，PE越低越安全', dimensions: ['R', 'B'] },
      B: { text: '没用，大A的PE没有参考意义', dimensions: ['P', 'C'] },
    },
  },
  {
    id: 33,
    text: '你会在牛市顶峰时做什么？',
    scenario: '🏔️ 牛市顶峰',
    options: {
      A: { text: '逐步减仓，等待下一个买入机会', dimensions: ['S', 'R', 'W'] },
      B: { text: '继续持有，牛市还没结束！', dimensions: ['B', 'H', 'P'] },
    },
  },
  {
    id: 34,
    text: '你会在熊市底部时做什么？',
    scenario: '🕳️ 熊市底部',
    options: {
      A: { text: '逐步加仓，优质资产打折了', dimensions: ['B', 'R', 'W'] },
      B: { text: '继续观望，谁知道还会不会跌', dimensions: ['S', 'L', 'P'] },
    },
  },
  {
    id: 35,
    text: '你对"量化交易"的看法是？',
    scenario: '🤖 量化交易',
    options: {
      A: { text: '有科学依据，是未来的方向', dimensions: ['R', 'B'] },
      B: { text: '机器不懂市场，还是人脑更可靠', dimensions: ['P', 'H'] },
    },
  },
  {
    id: 36,
    text: '你最担心的投资风险是？',
    scenario: '⚠️ 风险认知',
    options: {
      A: { text: '系统性风险，整个市场崩盘', dimensions: ['S', 'R', 'L'] },
      B: { text: '踏空风险，别人赚钱我没赚到', dimensions: ['B', 'P', 'W'] },
    },
  },
  {
    id: 37,
    text: '你如何对待"涨停板"？',
    scenario: '🔴 涨停板',
    options: {
      A: { text: '涨停后通常会回调，不追高', dimensions: ['S', 'R'] },
      B: { text: '涨停是强势信号，要跟进', dimensions: ['B', 'C', 'P'] },
    },
  },
  {
    id: 38,
    text: '你的投资决策主要基于？',
    scenario: '🧠 决策依据',
    options: {
      A: { text: '系统性研究和数据分析', dimensions: ['R'] },
      B: { text: '直觉和市场感觉', dimensions: ['P'] },
    },
  },
  {
    id: 39,
    text: '你如何看待"逆向投资"？',
    scenario: '🔄 逆向思维',
    options: {
      A: { text: '在别人恐惧时贪婪，是正确的策略', dimensions: ['B', 'R', 'W'] },
      B: { text: '太危险了，跟着市场走更安全', dimensions: ['P', 'C'] },
    },
  },
  {
    id: 40,
    text: '你会花多少时间研究股票？',
    scenario: '⏱️ 研究时间',
    options: {
      A: { text: '每天至少2小时，深入研究', dimensions: ['R', 'B'] },
      B: { text: '看看消息面就够了，不需要深入研究', dimensions: ['P', 'C'] },
    },
  },
  {
    id: 41,
    text: '你持有的股票公布了一份不及预期的财报，你会？',
    scenario: '📋 财报不及预期',
    options: {
      A: { text: '分析是一次性因素还是趋势性问题', dimensions: ['R', 'H'] },
      B: { text: '先卖了再说，财报差就是利空', dimensions: ['S', 'C'] },
    },
  },
  {
    id: 42,
    text: '你如何看待"分红"？',
    scenario: '💵 股票分红',
    options: {
      A: { text: '分红是公司健康的标志，很重要', dimensions: ['B', 'R', 'H'] },
      B: { text: '分红太少了，还不如股价涨', dimensions: ['P', 'C', 'W'] },
    },
  },
  {
    id: 43,
    text: '你在投资时最容易犯的错误是？',
    scenario: '🚨 常见错误',
    options: {
      A: { text: '持仓时间太长，错过了卖出时机', dimensions: ['B', 'H', 'L'] },
      B: { text: '频繁交易，手续费吃掉了利润', dimensions: ['S', 'C', 'P'] },
    },
  },
  {
    id: 44,
    text: '你如何看待"市场有效性"？',
    scenario: '🎓 市场理论',
    options: {
      A: { text: '市场大部分时间是有效的，但存在错误定价', dimensions: ['R', 'B'] },
      B: { text: '市场完全是庄家操控的，没有有效性', dimensions: ['P', 'S'] },
    },
  },
  {
    id: 45,
    text: '你的风险承受能力是？',
    scenario: '🎚️ 风险承受',
    options: {
      A: { text: '可以接受较大波动，追求长期高收益', dimensions: ['B', 'W'] },
      B: { text: '不能接受太大亏损，稳健为主', dimensions: ['S', 'L'] },
    },
  },
  {
    id: 46,
    text: '你如何看待"融资融券"？',
    scenario: '💳 融资融券',
    options: {
      A: { text: '风险极高，不碰', dimensions: ['S', 'L', 'R'] },
      B: { text: '可以放大收益，适当使用', dimensions: ['B', 'W', 'P'] },
    },
  },
  {
    id: 47,
    text: '你在买入一只股票前会？',
    scenario: '🔬 买入前准备',
    options: {
      A: { text: '研究至少一周，了解公司基本面', dimensions: ['R', 'B'] },
      B: { text: '看看K线图和消息面就行', dimensions: ['P', 'C'] },
    },
  },
  {
    id: 48,
    text: '你如何看待"行业轮动"？',
    scenario: '🔁 行业轮动',
    options: {
      A: { text: '了解轮动规律，在合适时机切换行业', dimensions: ['R', 'C'] },
      B: { text: '太复杂了，选好一个行业就坚持', dimensions: ['H', 'B'] },
    },
  },
  {
    id: 49,
    text: '你的股票今天涨了10%，明天你会？',
    scenario: '🎊 大涨之后',
    options: {
      A: { text: '继续持有，看看能否继续上涨', dimensions: ['B', 'H'] },
      B: { text: '卖出一部分，锁定利润', dimensions: ['S', 'W', 'C'] },
    },
  },
  {
    id: 50,
    text: '你如何看待"抄底"？',
    scenario: '⬇️ 抄底操作',
    options: {
      A: { text: '在有充分研究支撑的情况下可以抄底', dimensions: ['B', 'R'] },
      B: { text: '抄底是刀口舔血，太危险', dimensions: ['S', 'L'] },
    },
  },
  {
    id: 51,
    text: '你如何评价自己的投资成绩？',
    scenario: '📝 自我评估',
    options: {
      A: { text: '客观看待，承认失误，持续改进', dimensions: ['R', 'L'] },
      B: { text: '赚了是自己厉害，亏了是市场问题', dimensions: ['P', 'W'] },
    },
  },
  {
    id: 52,
    text: '你如何看待"股市黑天鹅事件"？',
    scenario: '🦢 黑天鹅事件',
    options: {
      A: { text: '要做好预案，保持一定的现金仓位', dimensions: ['S', 'R', 'L'] },
      B: { text: '黑天鹅是买入机会，要大胆抄底', dimensions: ['B', 'W', 'P'] },
    },
  },
  {
    id: 53,
    text: '你在什么情况下会加仓？',
    scenario: '➕ 加仓时机',
    options: {
      A: { text: '股价下跌但基本面没变，估值更便宜了', dimensions: ['B', 'R', 'H'] },
      B: { text: '股价上涨，确认趋势后追加', dimensions: ['C', 'P', 'W'] },
    },
  },
  {
    id: 54,
    text: '你对"价值陷阱"的看法是？',
    scenario: '🪤 价值陷阱',
    options: {
      A: { text: '要警惕，低估值不一定是好机会', dimensions: ['S', 'R'] },
      B: { text: '低估值就是机会，长期持有一定会涨', dimensions: ['B', 'H', 'P'] },
    },
  },
  {
    id: 55,
    text: '你如何看待"散户"这个标签？',
    scenario: '👤 身份认知',
    options: {
      A: { text: '散户有信息劣势，要扬长避短', dimensions: ['R', 'S'] },
      B: { text: '散户也能战胜机构，我就是例子', dimensions: ['B', 'P', 'W'] },
    },
  },
  {
    id: 56,
    text: '你如何看待"市场情绪"？',
    scenario: '😊 市场情绪',
    options: {
      A: { text: '情绪是重要的参考指标，但不是决策依据', dimensions: ['R', 'B'] },
      B: { text: '情绪就是一切，跟着情绪走', dimensions: ['P', 'C'] },
    },
  },
  {
    id: 57,
    text: '你在投资时最重视什么？',
    scenario: '⭐ 投资重点',
    options: {
      A: { text: '风险控制，先保住本金', dimensions: ['S', 'L', 'R'] },
      B: { text: '收益最大化，不冒险怎么赚钱', dimensions: ['B', 'W', 'P'] },
    },
  },
  {
    id: 58,
    text: '你如何看待"复利"？',
    scenario: '🌱 复利思维',
    options: {
      A: { text: '复利是最强大的力量，要耐心等待', dimensions: ['B', 'H', 'R'] },
      B: { text: '等复利太慢了，我要快速致富', dimensions: ['P', 'C', 'W'] },
    },
  },
  {
    id: 59,
    text: '你如何看待"市场预测"？',
    scenario: '🔮 市场预测',
    options: {
      A: { text: '市场不可预测，要做好各种情景的准备', dimensions: ['R', 'L'] },
      B: { text: '我能预测市场走势，这是我的优势', dimensions: ['P', 'W', 'B'] },
    },
  },
  {
    id: 60,
    text: '你如何看待"投资失败"？',
    scenario: '💔 面对失败',
    options: {
      A: { text: '失败是学习的机会，总结经验继续前进', dimensions: ['L', 'R'] },
      B: { text: '失败是暂时的，我一定能翻身', dimensions: ['W', 'B', 'P'] },
    },
  },
];

// ============================================================
// 测试逻辑
// ============================================================

/**
 * 从题库中随机抽取20道不重复的题目
 */
export function getRandomQuestions(count: number = 20): Question[] {
  const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/**
 * 根据答案计算人格类型
 */
export function calculatePersonality(answers: Record<number, 'A' | 'B'>, questions: Question[]): string {
  const scores: Record<PersonalityDimension, number> = {
    B: 0, S: 0, R: 0, P: 0, H: 0, C: 0, W: 0, L: 0,
  };

  questions.forEach((question) => {
    const answer = answers[question.id];
    if (answer) {
      const dimensions = question.options[answer].dimensions;
      dimensions.forEach((dim) => {
        scores[dim]++;
      });
    }
  });

  const dim1 = scores.B >= scores.S ? 'B' : 'S';
  const dim2 = scores.R >= scores.P ? 'R' : 'P';
  const dim3 = scores.H >= scores.C ? 'H' : 'C';
  const dim4 = scores.W >= scores.L ? 'W' : 'L';

  return `${dim1}${dim2}${dim3}${dim4}`;
}

/**
 * 获取人格类型详情
 */
export function getPersonalityType(code: string): PersonalityType {
  return personalityTypes[code] || personalityTypes['BPCL'];
}

/**
 * 保存测试结果到本地存储
 */
export function saveTestResult(result: {
  code: string;
  date: string;
  answers: Record<number, 'A' | 'B'>;
}) {
  const history = getTestHistory();
  history.unshift(result);
  // 只保留最近10次
  const trimmed = history.slice(0, 10);
  localStorage.setItem('abti_history', JSON.stringify(trimmed));
}

/**
 * 获取历史测试记录
 */
export function getTestHistory(): Array<{
  code: string;
  date: string;
  answers: Record<number, 'A' | 'B'>;
}> {
  try {
    const data = localStorage.getItem('abti_history');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}
