// ============================================
// NEXUS CAPITAL — Multi-Agent Hedge Fund System
// ============================================

const AGENTS = {
  tiger: {
    id: 'tiger', name: 'Tiger Global', icon: 'TG', archetype: 'Equity Long/Short',
    vibe: 'The Tech-Savvy Stock Picker',
    firm: 'Tiger Global Management',
    founder: 'Chase Coleman',
    color: '#00e676',
    persona: `Aggressive, tech-obsessed PM focused on 'Year 2030' growth. Ignores short-term volatility entirely. Believes technology adoption curves are the only alpha. Speaks with conviction about secular winners. Dismisses value traps and "old economy" plays.`,
    holdings: [
      { ticker: 'GOOGL', name: 'Alphabet', weight: '11.20%' },
      { ticker: 'MSFT', name: 'Microsoft', weight: '8.92%' },
      { ticker: 'AMZN', name: 'Amazon', weight: '7.78%' },
      { ticker: 'NVDA', name: 'NVIDIA', weight: '6.91%' },
      { ticker: 'SE', name: 'Sea Limited', weight: '6.62%' }
    ],
    metrics: { ytd: '+22.4%', sharpe: '1.87', positions: 54 },
    tags: ['Growth', 'Tech', 'Low Leverage'],
    leverage: 'Low', sector: 'Technology', factor: 'Growth',
    outlook: 'AI infrastructure is a generational opportunity. We see GOOGL and NVDA as 2030 compounders. Short-term drawdowns are noise — adoption curves are accelerating.',
    debateStyle: {
      openings: [
        "Look, the only question that matters is: what does the world look like in 2030?",
        "Let me cut through the noise here — this is a secular technology shift.",
        "You're all overthinking this. Follow the adoption curve.",
      ],
      bullishPhrases: [
        "This is a generational compounder. The TAM expansion alone justifies the multiple.",
        "We've done the bottoms-up work — revenue growth is accelerating, not decelerating.",
        "Short-term vol is just a buying opportunity. We're adding on weakness.",
        "The market is mispricing the durability of this growth. This isn't cyclical — it's structural.",
      ],
      bearishPhrases: [
        "We trimmed here — not because the thesis is broken, but because position sizing discipline matters.",
        "The growth story is intact but the valuation got ahead of fundamentals. We'll re-enter lower.",
        "Capital allocation to this name has decelerated — we see better risk/reward elsewhere in tech.",
      ],
      disagreements: [
        "With all due respect, your 'margin of safety' approach would have missed every 10-bagger of the last decade.",
        "Hedging this trade is just leaking alpha. If you believe in the thesis, size it up.",
        "Statistical anomalies? We don't trade patterns — we invest in businesses that are reshaping civilization.",
        "That's a backward-looking framework. The companies I own are building the future.",
      ]
    }
  },

  bridgewater: {
    id: 'bridgewater', name: 'Bridgewater', icon: 'BW', archetype: 'Global Macro',
    vibe: 'The Economic Historian',
    firm: 'Bridgewater Associates',
    founder: 'Ray Dalio',
    color: '#448aff',
    persona: `Systematic macro PM obsessed with debt cycles, inflation, and the 'changing world order.' Uses gold and commodities as a defensive anchor. Speaks in frameworks and historical analogies. References the 1930s, 1970s, and the Long-Term Debt Cycle constantly.`,
    holdings: [
      { ticker: 'SPY', name: 'S&P 500 ETF', weight: '11.1%' },
      { ticker: 'IVV', name: 'iShares S&P 500', weight: '10.4%' },
      { ticker: 'NVDA', name: 'NVIDIA', weight: '2.63%' },
      { ticker: 'LRCX', name: 'Lam Research', weight: '~2.0%' },
      { ticker: 'CRM', name: 'Salesforce', weight: '~1.8%' }
    ],
    metrics: { ytd: '+14.8%', sharpe: '2.15', positions: 1040 },
    tags: ['Macro', 'Index-Heavy', 'Market Neutral'],
    leverage: 'Moderate', sector: 'Broad / Index', factor: 'Market Neutral',
    outlook: 'We are in the late stages of the Long-Term Debt Cycle. AI capex will boost GDP but inflation is structurally higher — 2% is now a floor. Capital wars and modern mercantilism are reshaping global flows.',
    debateStyle: {
      openings: [
        "Let me provide the macro context here, because without it, this conversation is meaningless.",
        "If you study history — and I mean really study it — the parallels are unmistakable.",
        "The machine is telling us something. Let me walk through the framework.",
      ],
      bullishPhrases: [
        "The productivity gains from AI will add 1-2% to GDP growth through 2028. That's not priced in.",
        "Our systematic framework shows this asset class has positive expected return with manageable risk.",
        "The diversification benefit here is significant — low correlation to our existing book.",
        "History shows that in periods of technological revolution, the winners compound for decades.",
      ],
      bearishPhrases: [
        "We're in a classic bubble formation. The parallels to 1999 and 1929 are concerning.",
        "The long end of the curve is dangerous in 2026. Structural inflation is being ignored.",
        "Capital wars are an underappreciated tail risk. Foreign confidence in US Treasuries is eroding.",
        "Gold is the only true hedge here — fiat currencies are all racing to the bottom.",
      ],
      disagreements: [
        "You're ignoring the macro regime we're in. Individual stock picking doesn't matter when the tide turns.",
        "That activist approach ignores systemic risk — you can't unlock value in a debt crisis.",
        "Your quantitative models are curve-fit to a regime that's ending. The paradigm is shifting.",
        "Leverage without understanding the debt cycle is how fortunes are destroyed.",
      ]
    }
  },

  elliott: {
    id: 'elliott', name: 'Elliott Mgmt', icon: 'EM', archetype: 'Event-Driven',
    vibe: 'The Corporate Gladiator',
    firm: 'Elliott Management',
    founder: 'Paul Singer',
    color: '#ff5252',
    persona: `Aggressive activist PM looking for 'lazy boards' and conglomerate discounts to unlock. Confrontational and direct. Believes most management teams are incompetent capital allocators. Loves hostile proxy fights and strategic reviews.`,
    holdings: [
      { ticker: 'TFPM', name: 'Triple Flag Precious', weight: '19.7%' },
      { ticker: 'PSX', name: 'Phillips 66', weight: '11.0%' },
      { ticker: 'SU', name: 'Suncor Energy', weight: '10.3%' },
      { ticker: 'LUV', name: 'Southwest Airlines', weight: '9.4%' },
      { ticker: 'XLP', name: 'Consumer Staples (Puts)', weight: '6.9%' }
    ],
    metrics: { ytd: '+16.2%', sharpe: '1.94', positions: 34 },
    tags: ['Activist', 'Energy', 'Value', 'High Leverage'],
    leverage: 'High', sector: 'Energy / Materials', factor: 'Value',
    outlook: 'The talent war in hedge funds is exaggerated. The next bear market will expose who actually has skill. We are raising dry powder — dislocations are forming. Synopsys is a $1B+ activist bet on AI chip complexity.',
    debateStyle: {
      openings: [
        "Let me tell you what's actually wrong with this company — it starts at the board level.",
        "The conglomerate discount here is unconscionable. Shareholders deserve better.",
        "This management team is asleep at the wheel, and we intend to wake them up.",
      ],
      bullishPhrases: [
        "There's a 40% upside if they spin off the division and buy back stock. It's that simple.",
        "We've sent the letter. The board has 60 days to respond before we go public.",
        "The asset value is being obscured by operational incompetence. Strip it out and the math works.",
        "This is a classic sum-of-the-parts story. The market is giving you the parts for free.",
      ],
      bearishPhrases: [
        "Management destroyed value with that acquisition — classic empire building. We're going activist.",
        "The next bear market will be a bloodbath for over-levered managers. We're building our war chest.",
        "We're buying puts on consumer staples — the sector is overearning and management knows it.",
        "The risk here isn't the asset — it's the governance. And governance is terrible.",
      ],
      disagreements: [
        "Your 'buy and hold forever' approach just means you're subsidizing bad management teams.",
        "Market neutral? That's another way of saying you have no conviction.",
        "You can't just model your way through a governance crisis. This requires engagement.",
        "Patience is a virtue unless you're being patient with a board that's stealing from shareholders.",
      ]
    }
  },

  rentech: {
    id: 'rentech', name: 'Renaissance Tech', icon: 'RT', archetype: 'Quantitative',
    vibe: 'The Mad Scientist',
    firm: 'Renaissance Technologies',
    founder: 'Jim Simons (†) / Peter Brown',
    color: '#e040fb',
    persona: `Cold, mathematical PM who ignores 'stories' entirely. Only reacts to statistical anomalies and price-volume data. Speaks in probabilities, not opinions. Treats every position as a data point, not a thesis. Has zero emotional attachment to any holding.`,
    holdings: [
      { ticker: 'PLTR', name: 'Palantir', weight: '2.43%' },
      { ticker: 'UTHR', name: 'United Therapeutics', weight: '1.44%' },
      { ticker: 'MU', name: 'Micron Technology', weight: '1.33%' },
      { ticker: 'KGC', name: 'Kinross Gold', weight: '~1.2%' },
      { ticker: 'VRSN', name: 'Verisign', weight: '~1.1%' }
    ],
    metrics: { ytd: '+11.3%', sharpe: '3.24', positions: 3000 },
    tags: ['Systematic', 'Market Neutral', 'High Leverage'],
    leverage: 'High', sector: 'Ultra-Diversified', factor: 'Market Neutral',
    outlook: 'No comment on macro. Our models detected early 2026 volatility from crowded quant trades. The Medallion Fund continues to operate within expected parameters. We do not make predictions — we measure probabilities.',
    debateStyle: {
      openings: [
        "I'll dispense with the narratives. Here's what the data shows.",
        "Your thesis is irrelevant. The only question is: what does the signal say?",
        "Stories don't generate alpha. Statistical edge does. Let me show you the numbers.",
      ],
      bullishPhrases: [
        "The signal is positive with 2.3 standard deviations of confidence. Position sizing is mechanical.",
        "Price-volume dynamics indicate accumulation. We're long with a 72-hour expected holding period.",
        "The mean-reversion signal triggered at 3.1 sigma. Expected return: +1.4% with 0.6% vol.",
        "Our models have a 63% hit rate on this pattern. Kelly criterion says we size it at 2.8% of NAV.",
      ],
      bearishPhrases: [
        "The momentum decay function has turned negative. We're flat — no directional bias.",
        "Correlation clustering is elevated. Crowded trade risk exceeds our threshold. We're reducing.",
        "The alpha signal decayed below our minimum threshold 48 hours ago. Position closed.",
        "Regime detection indicates a transition state. All directional exposures minimized.",
      ],
      disagreements: [
        "Your fundamental analysis is just storytelling with a spreadsheet. Show me the backtest.",
        "Conviction-based sizing is just a polite term for reckless concentration risk.",
        "The market doesn't care about your thesis. It cares about flows, positioning, and entropy.",
        "I don't have 'views.' I have signals. And my signals don't argue — they execute.",
      ]
    }
  },

  millennium: {
    id: 'millennium', name: 'Millennium Mgmt', icon: 'MM', archetype: 'Relative Value',
    vibe: 'The Arbitrage Machine',
    firm: 'Millennium Management',
    founder: 'Israel Englander',
    color: '#ffd740',
    persona: `Extreme market-neutral PM. If a trade isn't hedged, you don't want it. Zero loyalty to any stock — every position exists only as part of a paired trade. Obsessed with drawdown control. Runs 330+ pods and uses internal 'kill switches.'`,
    holdings: [
      { ticker: 'IVV', name: 'iShares S&P 500', weight: '4.2%' },
      { ticker: 'WMT', name: 'Walmart', weight: '1.9%' },
      { ticker: 'IBIT', name: 'Bitcoin Trust ETF', weight: '0.72%' },
      { ticker: 'NSC', name: 'Norfolk Southern', weight: '0.50%' },
      { ticker: 'BSX', name: 'Boston Scientific', weight: '0.48%' }
    ],
    metrics: { ytd: '+8.7%', sharpe: '2.89', positions: 5950 },
    tags: ['Multi-Strat', 'Market Neutral', 'High Leverage'],
    leverage: 'High', sector: 'Diversified', factor: 'Market Neutral',
    outlook: 'Launching the Millennium Opportunities Fund for private markets. 330+ pods operating with strict kill switches. January 2026: +1.4%. Capital stability through callable capital models. Positioning for manufacturing/logistics rebound.',
    debateStyle: {
      openings: [
        "What's the hedge? If you can't tell me the hedge, this isn't a trade.",
        "Every dollar of risk has to be accounted for. Walk me through the pair.",
        "I need to see the beta-neutral construction before I commit a single dollar.",
      ],
      bullishPhrases: [
        "The spread is attractive — long X, short the sector ETF. Net beta: 0.02.",
        "This is a pure relative value play. We don't care about direction, only convergence.",
        "The pair trade has a 14-day expected convergence window. Risk/reward: 3.2:1.",
        "We're adding this to Pod 247's book. Stop-loss at 1.5% pod drawdown.",
      ],
      bearishPhrases: [
        "The spread blew out. Kill switch activated — pod is flat within 24 hours.",
        "Correlation breakdown across our merger arb book. Reducing gross exposure by 15%.",
        "That's a directional bet disguised as relative value. We pass.",
        "The crowding risk is too high. When everyone owns the same arb, it's not an arb.",
      ],
      disagreements: [
        "Unhedged? That's not investing, that's gambling. I need to see both legs.",
        "Your concentrated position is one earnings miss away from a 20% drawdown. How do you sleep?",
        "We run 5,950 positions precisely so no single name can hurt us. That's risk management.",
        "Stock loyalty is a psychological bias, not a strategy. Cut losers, scale winners, hedge everything.",
      ]
    }
  },

  oaktree: {
    id: 'oaktree', name: 'Oaktree Capital', icon: 'OC', archetype: 'Distressed Debt',
    vibe: 'The Turnaround Specialist',
    firm: 'Oaktree Capital Management',
    founder: 'Howard Marks',
    color: '#ff9100',
    persona: `Patient, contrarian PM focused on 'margin of safety.' Loves bad news because it makes debt cheap. Buys when others are panicking. Deeply skeptical of consensus optimism. Quotes Warren Buffett and Benjamin Graham frequently.`,
    holdings: [
      { ticker: 'EXE', name: 'Expand Energy', weight: 'Top' },
      { ticker: 'TRMD', name: 'TORM plc', weight: 'Top 5' },
      { ticker: 'AU', name: 'AngloGold Ashanti', weight: 'Top 5' },
      { ticker: 'GTX', name: 'Garrett Motion', weight: 'Top 5' },
      { ticker: 'INDV', name: 'Indivior PLC', weight: 'Top 5' }
    ],
    metrics: { ytd: '+9.6%', sharpe: '1.72', positions: 40 },
    tags: ['Distressed', 'Value', 'Credit', 'Low Leverage'],
    leverage: 'Low-Moderate', sector: 'Energy / Mining', factor: 'Value',
    outlook: 'The tide is going out — private credit showing structural weaknesses. Ready for shakiness in 2026. FOMO shifting to risk aversion. Published "AI Hurtles Ahead" memo questioning AI valuations. Excess returns require buying at unfair prices.',
    debateStyle: {
      openings: [
        "The most important thing is understanding where we are in the cycle. And right now, we're late.",
        "I'd rather be too early than too late. The best investments are made when others are running scared.",
        "Let me share something Howard wrote last month — it's relevant to everything we're discussing.",
      ],
      bullishPhrases: [
        "The debt is trading at 60 cents on the dollar. If recovery is anywhere above 75, we make money.",
        "Everyone's running from this sector. That's precisely when you should be running toward it.",
        "The margin of safety here is enormous — we're buying assets below replacement cost.",
        "Distress creates opportunity. The direct lending market is showing cracks, and we're ready.",
      ],
      bearishPhrases: [
        "This AI exuberance reminds me of every bubble I've studied. Prices aren't appropriate for the risk.",
        "When FOMO dominates, safety margins evaporate. We're seeing that now across growth equities.",
        "The private credit market has indigestion. Defaults are coming — it's just a matter of when.",
        "Buying consensus favorites at peak multiples isn't investing — it's speculation.",
      ],
      disagreements: [
        "Your growth thesis assumes perfection. What happens when growth decelerates? You have zero margin of safety.",
        "Hedging is fine, but it doesn't replace the discipline of buying cheap assets. You can't arbitrage your way to wisdom.",
        "The quantitative approach misses something fundamental: assets have intrinsic value independent of price patterns.",
        "You're confusing momentum with investment merit. The market can stay irrational, but eventually gravity wins.",
      ]
    }
  }
};

// ============================================
// DEBATE ENGINE
// ============================================
class DebateEngine {
  constructor(agents) {
    this.agents = agents;
    this.isRunning = false;
    this.messages = [];
  }

  generateResponse(agentId, topic, previousMessages) {
    const agent = this.agents[agentId];
    const style = agent.debateStyle;
    const isFirst = previousMessages.length === 0 || !previousMessages.some(m => m.agentId === agentId);
    let text, stance;

    if (isFirst) {
      text = this._pick(style.openings) + ' ';
    } else {
      text = '';
    }

    // Determine stance based on persona + topic keywords
    const topicLower = topic.toLowerCase();
    const isBullishTopic = this._topicSentiment(agentId, topicLower);

    if (isBullishTopic > 0) {
      text += this._pick(style.bullishPhrases);
      stance = 'BULLISH';
    } else if (isBullishTopic < 0) {
      text += this._pick(style.bearishPhrases);
      stance = 'BEARISH';
    } else {
      text += Math.random() > 0.5 ? this._pick(style.bullishPhrases) : this._pick(style.bearishPhrases);
      stance = Math.random() > 0.5 ? 'BULLISH' : 'BEARISH';
    }

    // Add disagreement if responding to another agent
    if (previousMessages.length > 0 && Math.random() > 0.35) {
      const lastMsg = previousMessages[previousMessages.length - 1];
      if (lastMsg.agentId !== agentId) {
        text += ' ' + this._pick(style.disagreements);
      }
    }

    return { agentId, text, stance, timestamp: new Date() };
  }

  _topicSentiment(agentId, topic) {
    const bullish = { tiger: ['ai','tech','growth','nvidia','cloud','software','saas'],
      bridgewater: ['gold','commodities','inflation hedge','diversif','macro'],
      elliott: ['spinoff','activist','governance','undervalue','breakup','proxy'],
      rentech: ['anomaly','signal','pattern','mean reversion','momentum'],
      millennium: ['spread','pair','arbitrage','convergence','relative value'],
      oaktree: ['distressed','cheap','crisis','default','credit','recession','bad news'] };
    const bearish = { tiger: ['value trap','dividend','old economy','recession'],
      bridgewater: ['bubble','debt crisis','treasur','rate hike','inflation'],
      elliott: ['good governance','passive','index','buy and hold'],
      rentech: ['narrative','story','thesis','fundamental'],
      millennium: ['unhedged','concentrated','directional','conviction'],
      oaktree: ['expensive','bubble','fomo','growth at any price','overvalued'] };

    let score = 0;
    (bullish[agentId] || []).forEach(k => { if (topic.includes(k)) score++; });
    (bearish[agentId] || []).forEach(k => { if (topic.includes(k)) score--; });
    return score;
  }

  _pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  async runDebate(topic, container, statusEl) {
    if (this.isRunning) return;
    this.isRunning = true;
    this.messages = [];
    container.innerHTML = '';
    statusEl.textContent = 'AGENTS DELIBERATING...';

    const order = ['tiger','bridgewater','elliott','rentech','millennium','oaktree'];
    // Shuffle for variety
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }

    for (const agentId of order) {
      // Show typing indicator
      const typing = document.createElement('div');
      typing.className = 'typing-indicator';
      typing.innerHTML = `<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div><span class="typing-label">${this.agents[agentId].name} is analyzing...</span>`;
      container.appendChild(typing);
      container.scrollTop = container.scrollHeight;

      await this._delay(1200 + Math.random() * 1800);
      container.removeChild(typing);

      const response = this.generateResponse(agentId, topic, this.messages);
      this.messages.push(response);
      this._renderMessage(response, container);
      container.scrollTop = container.scrollHeight;
    }

    // Second round — rebuttals
    statusEl.textContent = 'REBUTTAL ROUND...';
    const rebuttals = order.slice().sort(() => Math.random() - 0.5).slice(0, 3);
    for (const agentId of rebuttals) {
      const typing = document.createElement('div');
      typing.className = 'typing-indicator';
      typing.innerHTML = `<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div><span class="typing-label">${this.agents[agentId].name} is responding...</span>`;
      container.appendChild(typing);
      container.scrollTop = container.scrollHeight;

      await this._delay(1000 + Math.random() * 1500);
      container.removeChild(typing);

      const response = this.generateResponse(agentId, topic, this.messages);
      this.messages.push(response);
      this._renderMessage(response, container);
      container.scrollTop = container.scrollHeight;
    }

    statusEl.textContent = `DEBATE COMPLETE — ${this.messages.length} RESPONSES`;
    this.isRunning = false;
  }

  _renderMessage(msg, container) {
    const agent = this.agents[msg.agentId];
    const el = document.createElement('div');
    el.className = 'debate-message';
    el.dataset.agent = msg.agentId;
    const stanceClass = msg.stance === 'BULLISH' ? 'stance-bullish' : msg.stance === 'BEARISH' ? 'stance-bearish' : 'stance-neutral';
    el.innerHTML = `
      <div class="debate-msg-avatar">${agent.icon}</div>
      <div class="debate-msg-content">
        <div class="debate-msg-name">${agent.name} <span class="debate-msg-role">— ${agent.archetype}</span></div>
        <div class="debate-msg-text">${msg.text}</div>
        <div class="debate-msg-stance ${stanceClass}">${msg.stance === 'BULLISH' ? '▲' : '▼'} ${msg.stance}</div>
      </div>`;
    container.appendChild(el);
  }

  _delay(ms) { return new Promise(r => setTimeout(r, ms)); }
}

// ============================================
// APP INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const debateEngine = new DebateEngine(AGENTS);

  // --- Clock ---
  function updateClock() {
    const now = new Date();
    document.getElementById('nav-clock').textContent = now.toLocaleTimeString('en-US', { hour12: false });
  }
  setInterval(updateClock, 1000);
  updateClock();

  // --- Market Ticker ---
  const tickers = [
    { sym: 'S&P 500', val: '5,842.31', chg: '+0.47%', pos: true },
    { sym: 'NASDAQ', val: '18,947.62', chg: '+0.83%', pos: true },
    { sym: 'DOW', val: '42,318.90', chg: '-0.12%', pos: false },
    { sym: 'BTC', val: '$87,420', chg: '+2.14%', pos: true },
    { sym: 'GOLD', val: '$3,124.50', chg: '+0.91%', pos: true },
    { sym: 'VIX', val: '18.32', chg: '-3.2%', pos: false },
    { sym: '10Y', val: '4.38%', chg: '+2bp', pos: false },
    { sym: 'DXY', val: '103.74', chg: '-0.33%', pos: true },
  ];
  document.getElementById('market-ticker').innerHTML = tickers.map(t =>
    `<span class="ticker-item">${t.sym} <strong>${t.val}</strong> <span class="ticker-${t.pos ? 'pos' : 'neg'}">${t.chg}</span></span>`
  ).join('') + tickers.map(t =>
    `<span class="ticker-item">${t.sym} <strong>${t.val}</strong> <span class="ticker-${t.pos ? 'pos' : 'neg'}">${t.chg}</span></span>`
  ).join('');

  // --- Agent Cards ---
  const grid = document.getElementById('agents-grid');
  Object.values(AGENTS).forEach(agent => {
    const card = document.createElement('div');
    card.className = 'agent-card';
    card.dataset.agent = agent.id;
    card.innerHTML = `
      <div class="agent-header">
        <div class="agent-identity">
          <div class="agent-avatar">${agent.icon}</div>
          <div><div class="agent-name">${agent.name}</div><div class="agent-archetype">${agent.archetype}</div></div>
        </div>
        <div class="agent-status-badge">ACTIVE</div>
      </div>
      <div class="agent-vibe">"${agent.vibe}"</div>
      <div class="agent-metrics">
        <div class="agent-metric"><span class="agent-metric-label">YTD</span><span class="agent-metric-value">${agent.metrics.ytd}</span></div>
        <div class="agent-metric"><span class="agent-metric-label">SHARPE</span><span class="agent-metric-value">${agent.metrics.sharpe}</span></div>
        <div class="agent-metric"><span class="agent-metric-label">POSITIONS</span><span class="agent-metric-value">${agent.metrics.positions.toLocaleString()}</span></div>
      </div>
      <div class="agent-holdings">
        <div class="agent-holdings-title">TOP HOLDINGS</div>
        ${agent.holdings.slice(0, 3).map(h => `<div class="holding-row"><span class="holding-ticker">${h.ticker}</span><span class="holding-weight">${h.weight}</span></div>`).join('')}
      </div>
      <div class="agent-tags">${agent.tags.map(t => `<span class="agent-tag">${t}</span>`).join('')}</div>`;
    card.addEventListener('click', () => openModal(agent));
    grid.appendChild(card);
  });

  // --- Activity Feed ---
  const feedActions = [
    { agent: 'tiger', text: 'Increased GOOGL position by 2.4% — "2030 compounder thesis intact"' },
    { agent: 'bridgewater', text: 'Added 450K shares of GLD — "Gold remains our defensive anchor"' },
    { agent: 'elliott', text: 'Filed 13D on Southwest Airlines — demanding board restructuring' },
    { agent: 'rentech', text: 'Signal triggered: mean-reversion on MU at 3.1σ confidence' },
    { agent: 'millennium', text: 'Pod 247 initiated pair trade: Long NSC / Short UNP' },
    { agent: 'oaktree', text: 'Monitoring private credit defaults — "ready for shakiness in Q2"' },
    { agent: 'tiger', text: 'Trimmed NVDA by 5% — "position sizing discipline, not a thesis change"' },
    { agent: 'bridgewater', text: 'Research note: "2026 is dangerous for the long end of the curve"' },
    { agent: 'elliott', text: 'Acquired $1B+ stake in Synopsys — activist play on AI chip complexity' },
    { agent: 'rentech', text: 'Exited META entirely — "alpha signal decayed below threshold"' },
    { agent: 'millennium', text: 'Kill switch activated on Pod 312 — gross exposure reduced 15%' },
    { agent: 'oaktree', text: 'Published memo: "AI Hurtles Ahead" — questioning AI asset prices' },
  ];

  const feedList = document.getElementById('activity-feed');
  const usedFeedIndices = new Set();
  function addFeedItem() {
    let idx;
    if (usedFeedIndices.size >= feedActions.length) usedFeedIndices.clear();
    do { idx = Math.floor(Math.random() * feedActions.length); } while (usedFeedIndices.has(idx));
    usedFeedIndices.add(idx);
    const action = feedActions[idx];
    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
    const item = document.createElement('div');
    item.className = 'feed-item';
    item.dataset.agent = action.agent;
    item.innerHTML = `<div class="feed-dot"></div><div class="feed-content"><span class="feed-agent">${AGENTS[action.agent].name}</span><div class="feed-text">${action.text}</div><div class="feed-time">${time}</div></div>`;
    feedList.insertBefore(item, feedList.firstChild);
    if (feedList.children.length > 15) feedList.removeChild(feedList.lastChild);
  }
  for (let i = 0; i < 6; i++) addFeedItem();
  setInterval(addFeedItem, 8000);

  // --- Consensus Matrix ---
  const assets = ['NVDA','GOOGL','GOLD','BTC','US 10Y','OIL','PRIVATE CREDIT'];
  const signals = {
    NVDA: { tiger: '🟢', bridgewater: '🟢', elliott: '🟡', rentech: '🔴', millennium: '🟡', oaktree: '🔴' },
    GOOGL: { tiger: '🟢', bridgewater: '🟢', elliott: '🟡', rentech: '🟢', millennium: '🟡', oaktree: '🟡' },
    GOLD: { tiger: '🔴', bridgewater: '🟢', elliott: '🟢', rentech: '🟡', millennium: '🟡', oaktree: '🟢' },
    BTC: { tiger: '🟡', bridgewater: '🔴', elliott: '🟡', rentech: '🟢', millennium: '🟢', oaktree: '🔴' },
    'US 10Y': { tiger: '🟡', bridgewater: '🔴', elliott: '🟡', rentech: '🟡', millennium: '🟡', oaktree: '🟢' },
    OIL: { tiger: '🔴', bridgewater: '🟡', elliott: '🟢', rentech: '🟡', millennium: '🟡', oaktree: '🟡' },
    'PRIVATE CREDIT': { tiger: '🟡', bridgewater: '🔴', elliott: '🟡', rentech: '🟡', millennium: '🟢', oaktree: '🟢' },
  };

  const consensusGrid = document.getElementById('consensus-grid');
  const agentKeys = ['tiger','bridgewater','elliott','rentech','millennium','oaktree'];
  consensusGrid.innerHTML = `
    <div class="consensus-header">
      <div class="consensus-header-cell">ASSET</div>
      ${agentKeys.map(k => `<div class="consensus-header-cell">${AGENTS[k].icon}</div>`).join('')}
    </div>
    ${assets.map(a => `<div class="consensus-row">
      <div class="consensus-asset">${a}</div>
      ${agentKeys.map(k => `<div class="consensus-cell" title="${AGENTS[k].name}: ${signals[a][k] === '🟢' ? 'Bullish' : signals[a][k] === '🔴' ? 'Bearish' : 'Neutral'}">${signals[a][k]}</div>`).join('')}
    </div>`).join('')}`;

  // --- Performance Chart ---
  const canvas = document.getElementById('performance-canvas');
  const ctx = canvas.getContext('2d');
  function drawChart() {
    const W = canvas.parentElement.clientWidth - 48;
    const H = 300;
    canvas.width = W * 2; canvas.height = H * 2;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.scale(2, 2);
    ctx.clearRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = 'rgba(255,255,255,0.04)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      const y = 30 + (i * (H - 60) / 4);
      ctx.beginPath(); ctx.moveTo(40, y); ctx.lineTo(W - 10, y); ctx.stroke();
      ctx.fillStyle = '#5a6070'; ctx.font = '10px JetBrains Mono';
      ctx.fillText(`${(20 - i * 5)}%`, 4, y + 4);
    }

    const colors = [AGENTS.tiger.color, AGENTS.bridgewater.color, AGENTS.elliott.color, AGENTS.rentech.color, AGENTS.millennium.color, AGENTS.oaktree.color];
    const names = Object.values(AGENTS).map(a => a.name);
    const points = 50;

    // Generate cumulative return lines
    const lines = colors.map((_, idx) => {
      const data = [];
      let cum = 0;
      const vol = [0.015, 0.008, 0.012, 0.006, 0.005, 0.01][idx];
      const drift = [0.004, 0.003, 0.0032, 0.0022, 0.0017, 0.002][idx];
      for (let i = 0; i < points; i++) {
        cum += drift + (Math.random() - 0.48) * vol;
        data.push(cum);
      }
      return data;
    });

    lines.forEach((data, idx) => {
      ctx.beginPath();
      ctx.strokeStyle = colors[idx];
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 0.85;
      data.forEach((v, i) => {
        const x = 40 + (i / (points - 1)) * (W - 50);
        const y = H - 30 - (v / 0.25) * (H - 60);
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      });
      ctx.stroke();
      ctx.globalAlpha = 1;
    });

    // Legend
    const legend = document.getElementById('chart-legend');
    legend.innerHTML = names.map((n, i) => `<div class="chart-legend-item"><div class="chart-legend-color" style="background:${colors[i]}"></div>${n}</div>`).join('');
  }
  drawChart();
  window.addEventListener('resize', drawChart);

  // --- Correlation Heatmap ---
  const corrData = [
    [1.00, 0.42, 0.15, 0.08, 0.12, -0.10],
    [0.42, 1.00, 0.25, 0.18, 0.35, 0.20],
    [0.15, 0.25, 1.00, -0.05, 0.10, 0.38],
    [0.08, 0.18, -0.05, 1.00, 0.30, -0.02],
    [0.12, 0.35, 0.10, 0.30, 1.00, 0.08],
    [-0.10, 0.20, 0.38, -0.02, 0.08, 1.00]
  ];
  const corrContainer = document.getElementById('correlation-container');
  const corrNames = Object.values(AGENTS).map(a => a.icon);
  function corrClass(v) {
    if (v === 1) return 'corr-self';
    if (v > 0.3) return 'corr-high-pos'; if (v > 0.1) return 'corr-med-pos';
    if (v < -0.05) return 'corr-med-neg'; if (v < -0.2) return 'corr-high-neg';
    return 'corr-low';
  }
  corrContainer.innerHTML = `<table class="correlation-table">
    <tr><th></th>${corrNames.map(n => `<th>${n}</th>`).join('')}</tr>
    ${corrData.map((row, i) => `<tr><th>${corrNames[i]}</th>${row.map((v, j) => `<td class="${corrClass(v)}">${v.toFixed(2)}</td>`).join('')}</tr>`).join('')}
  </table>`;

  // --- Modal ---
  const overlay = document.getElementById('modal-overlay');
  const modalBody = document.getElementById('modal-body');
  document.getElementById('modal-close').addEventListener('click', () => overlay.classList.remove('active'));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('active'); });

  function openModal(agent) {
    const bgVar = `var(--${agent.id}-bg)`;
    const colorVar = `var(--${agent.id}-primary)`;
    modalBody.innerHTML = `
      <div class="modal-agent-header">
        <div class="modal-avatar" style="background:${bgVar};color:${colorVar}">${agent.icon}</div>
        <div class="modal-agent-info"><h3 style="color:${colorVar}">${agent.name}</h3><p>${agent.archetype} · ${agent.firm} · Founded by ${agent.founder}</p></div>
      </div>
      <div class="modal-section"><h4>PERSONA</h4><p>${agent.persona}</p></div>
      <div class="modal-section"><h4>2026 MACRO OUTLOOK</h4><p>${agent.outlook}</p></div>
      <div class="modal-section"><h4>TOP 5 HOLDINGS (Q4 2025 13F)</h4>
        <table class="modal-holdings-table"><tr><th>TICKER</th><th>NAME</th><th>WEIGHT</th></tr>
        ${agent.holdings.map(h => `<tr><td>${h.ticker}</td><td>${h.name}</td><td>${h.weight}</td></tr>`).join('')}</table></div>
      <div class="modal-section"><h4>STRATEGY DNA</h4>
        <p><strong>Leverage:</strong> ${agent.leverage} · <strong>Sector:</strong> ${agent.sector} · <strong>Factor:</strong> ${agent.factor}</p></div>`;
    overlay.classList.add('active');
  }

  // --- Debate Section (inject into HTML) ---
  const debateHTML = `
    <section class="debate-section" id="debate-section">
      <div class="section-label"><span class="label-icon">◆</span><span>AGENT DEBATE ARENA</span><div class="label-line"></div></div>
      <div class="preset-topics">
        <button class="preset-topic" data-topic="Is NVIDIA overvalued at current levels?">NVDA Valuation</button>
        <button class="preset-topic" data-topic="Should we go long gold as an inflation hedge?">Gold as Hedge</button>
        <button class="preset-topic" data-topic="Is the AI bubble about to burst?">AI Bubble Risk</button>
        <button class="preset-topic" data-topic="Should we increase exposure to distressed private credit?">Private Credit</button>
        <button class="preset-topic" data-topic="Are US Treasuries a buy or a trap at 4.38%?">Treasuries Debate</button>
        <button class="preset-topic" data-topic="Is Bitcoin a legitimate institutional asset?">Bitcoin Allocation</button>
      </div>
      <div class="debate-controls">
        <input type="text" class="debate-topic-input" id="debate-input" placeholder="Enter a debate topic for the agents..." />
        <button class="debate-btn debate-btn-primary" id="debate-start">⚡ INITIATE DEBATE</button>
      </div>
      <div class="debate-arena">
        <div class="debate-header-bar"><div class="debate-title">Multi-Agent Deliberation</div><div class="debate-status" id="debate-status">AWAITING TOPIC</div></div>
        <div class="debate-messages" id="debate-messages"><div class="debate-empty"><div class="debate-empty-icon">⚔️</div><div class="debate-empty-text">Select a topic or enter your own</div><div class="debate-empty-sub">All 6 agents will respond in character</div></div></div>
      </div>
    </section>`;

  // Insert debate section before feed section
  const feedSection = document.getElementById('feed-section');
  feedSection.insertAdjacentHTML('beforebegin', debateHTML);

  // Wire up debate
  const debateInput = document.getElementById('debate-input');
  const debateStart = document.getElementById('debate-start');
  const debateMessages = document.getElementById('debate-messages');
  const debateStatus = document.getElementById('debate-status');

  debateStart.addEventListener('click', () => {
    const topic = debateInput.value.trim();
    if (!topic || debateEngine.isRunning) return;
    debateStart.disabled = true;
    debateEngine.runDebate(topic, debateMessages, debateStatus).then(() => { debateStart.disabled = false; });
  });

  document.querySelectorAll('.preset-topic').forEach(btn => {
    btn.addEventListener('click', () => {
      debateInput.value = btn.dataset.topic;
      debateStart.click();
    });
  });

  debateInput.addEventListener('keydown', e => { if (e.key === 'Enter') debateStart.click(); });
});
