// ============================================
// MIRROR POD — Crisis Scenario Engine
// ============================================

const CRISIS_SCENARIO = {
  title: 'GEOPOLITICAL SHOCK — OIL SPIKE',
  subtitle: 'Mirror Pod Emergency Session',
  timestamp: new Date().toISOString(),
  catalysts: [
    { label: 'CRUDE OIL', value: '$120.00', change: '+38%', direction: 'up' },
    { label: 'US 10Y YIELD', value: '5.20%', change: '+82bp', direction: 'up' },
    { label: 'S&P 500', value: '5,608.22', change: '-4.00%', direction: 'down' },
    { label: 'VIX', value: '34.70', change: '+89%', direction: 'up' },
    { label: 'DXY (DOLLAR)', value: '107.40', change: '+3.5%', direction: 'up' },
    { label: 'GOLD', value: '$3,380', change: '+8.2%', direction: 'up' },
  ],
  briefing: `A geopolitical shock in the Middle East has disrupted 22% of global oil transit. Crude has surged to $120/barrel. The bond market is in freefall — US 10-Year yields have spiked to 5.2% as inflation expectations re-anchor higher. The S&P 500 is down 4% intraday, led by long-duration growth equities. The VIX has exploded above 34. All agents are called to an emergency Mirror Pod session.`,
};

const POSITIONING_MEMOS = [
  {
    agentId: 'tiger',
    action: 'HEDGE',
    actionLabel: '🛡️ HEDGE — Protect the Core',
    conviction: 72,
    urgency: 'HIGH',
    memo: {
      situation: `Our portfolio is down ~6.8% today. The top 5 — GOOGL, MSFT, AMZN, NVDA, SE — are all long-duration equities getting crushed by the discount rate spike. A 10Y at 5.2% mechanically compresses the present value of future cash flows. This is the exact scenario our critics warned about.`,
      response: `But let's be disciplined. <strong>We are NOT selling our core positions.</strong> These are 2030 compounders. The businesses haven't changed — the discount rate has. Here's our three-part defense:`,
      actions: [
        { type: 'HEDGE', detail: '<strong>Buy SPX 5400 Puts (30-day):</strong> Spending 45bp of NAV on downside insurance. If S&P falls another 6%, these pay 3:1.' },
        { type: 'HEDGE', detail: '<strong>Collar our NVDA position:</strong> Buy $105 puts / sell $140 calls (June expiry). This caps upside but floors our loss at -8%.' },
        { type: 'SELL', detail: '<strong>Trim SE and lower-conviction names by 15%:</strong> Raise cash to deploy into the top 3 if they fall further. This is NOT capitulation — it\'s position sizing discipline.' },
        { type: 'HOLD', detail: '<strong>GOOGL, MSFT, AMZN — HOLD:</strong> These companies generate $200B+ combined FCF. At 5.2% rates, they\'re still cheap on a 2030 DCF. We\'re adding on further weakness.' },
      ],
      bottomLine: `The thesis hasn't changed. The price has. We protect with options, not by selling future winners at trough multiples. History shows: tech leaders recover from rate shocks in 6-12 months. We'll be positioned to capture that.`,
    }
  },
  {
    agentId: 'bridgewater',
    action: 'BUY',
    actionLabel: '📈 BUY — Inflation Assets / Rotate Defensive',
    conviction: 91,
    urgency: 'CRITICAL',
    memo: {
      situation: `<strong>This confirms our Inflation Spiral thesis.</strong> We've been warning since Q4 2025 that the "resting heart rate" of inflation is structurally higher — 2% is a floor, not a ceiling. Today's oil shock is the catalyst that forces the market to reprice this reality.`,
      response: `The parallels to the 1970s are now unmistakable. In 1973, the oil embargo sent CPI from 6% to 12% in 18 months. We are not predicting a repeat, but the <strong>regime signature is identical:</strong> commodity supply shock → wages lag → central bank behind the curve → real rates go negative → gold and real assets outperform.`,
      actions: [
        { type: 'BUY', detail: '<strong>Increase GLD allocation by 300bp:</strong> Gold is the ultimate hedge against fiat debasement. With real rates turning negative, gold targets $3,800.' },
        { type: 'BUY', detail: '<strong>Add TIPS (Treasury Inflation-Protected Securities):</strong> Breakevens are still underpricing 3-year inflation expectations. We\'re buying 5Y TIPS aggressively.' },
        { type: 'SELL', detail: '<strong>Reduce long-duration equity exposure by 20%:</strong> Cut SPY/IVV overweight. At 5.2% yields, the equity risk premium is near zero.' },
        { type: 'BUY', detail: '<strong>Add commodity producers:</strong> Initiate positions in XOM, CVX, and diversified commodity ETFs. Supply constraints are structural, not transitory.' },
        { type: 'HEDGE', detail: '<strong>Short the long end of the curve:</strong> TLT puts. If yields go to 5.5%, long-duration bonds lose another 8%. The market is still in denial.' },
      ],
      bottomLine: `We wrote in January 2026 that this year would be "dangerous for interest rates." Today proves it. The changing world order demands a fundamentally different portfolio — one anchored in real assets, not financial assets. Our All-Weather framework was built for exactly this moment.`,
    }
  },
  {
    agentId: 'elliott',
    action: 'BUY',
    actionLabel: '🗡️ BUY — Activist Opportunities in the Wreckage',
    conviction: 85,
    urgency: 'HIGH',
    memo: {
      situation: `Chaos is a ladder. When the S&P drops 4% in a day, lazy boards panic and make terrible decisions — fire sales, defensive mergers, poison pills. That's when we move.`,
      response: `Our dry powder — which Singer has been building all year — is now being deployed. We've identified <strong>three immediate targets</strong> where the sell-off has created activist entry points:`,
      actions: [
        { type: 'BUY', detail: '<strong>Southwest Airlines (LUV) — ADD 200bp:</strong> Fuel costs are a headwind, but this board was already incompetent. Jet fuel hedging was inadequate. We\'re pushing for a CEO change and fleet rationalization. The stock is pricing in bankruptcy — it\'s worth 2x from here on an asset basis.' },
        { type: 'BUY', detail: '<strong>Phillips 66 (PSX) — ADD 150bp:</strong> The refining margin expansion from $120 oil is massive. Management is sandbagging guidance. We\'re demanding a special dividend and accelerated buyback. Refinery assets alone justify today\'s price.' },
        { type: 'BUY', detail: '<strong>New: Initiate in Delta Air Lines (DAL) at $34:</strong> Overshoot. Trading at 4x earnings. We\'ll agitate for cost structure reform and non-core asset sales. The Boeing delays are actually creating scarcity value for existing fleets.' },
        { type: 'HEDGE', detail: '<strong>XLP Puts — MAINTAIN:</strong> Consumer staples will get crushed when input costs filter through. Our puts are printing.' },
      ],
      bottomLine: `While others are selling indiscriminately, we're buying specific names where we can force change. The oil spike creates both portfolio winners (PSX, energy) and governance targets (airlines with bad hedging). This is our Super Bowl.`,
    }
  },
  {
    agentId: 'rentech',
    action: 'HEDGE',
    actionLabel: '🔬 HEDGE — Regime Transition Detected',
    conviction: 67,
    urgency: 'MODERATE',
    memo: {
      situation: `Regime detection model has triggered a Level 3 transition signal — the highest since February 2020. Cross-asset correlation has spiked to 0.87, indicating contagion risk. Our standard factor models are producing unstable estimates.`,
      response: `The models are not designed to "react to news." They react to data. Here is what the data shows:`,
      actions: [
        { type: 'HEDGE', detail: '<strong>Reduce net exposure to ±0.5% of NAV:</strong> Standard protocol during regime transitions. All directional signals suspended until vol-adjusted correlation returns below 0.60.' },
        { type: 'SELL', detail: '<strong>Close all momentum longs in Technology:</strong> Momentum decay function turned negative at 14:22 EST. Expected holding period of existing positions has collapsed from 72 hours to <8 hours. Alpha signal: null.' },
        { type: 'BUY', detail: '<strong>Mean-reversion signals active on 47 names:</strong> VIX spike created 3.2σ+ dislocations in 47 mid-cap names. These are high-probability, short-duration trades (expected convergence: 3-5 days). Position sizing: 0.08% NAV each.' },
        { type: 'HOLD', detail: '<strong>Medallion Fund internal models: Operating within expected parameters.</strong> The internal fund uses non-public signals with different time horizons. No changes required. Institutional funds (RIEF, RIDA) are the ones reducing.' },
      ],
      bottomLine: `We do not have "views" on oil or geopolitics. We have signals. Currently, 73% of our signals are in "suspend" mode, 18% are mean-reversion, and 9% are momentum-decay shorts. The machine will re-engage when statistical edge re-emerges. Estimated re-engagement: 48-96 hours.`,
    }
  },
  {
    agentId: 'millennium',
    action: 'HEDGE',
    actionLabel: '⚖️ HEDGE — Market-Neutral Defense Protocol',
    conviction: 88,
    urgency: 'CRITICAL',
    memo: {
      situation: `Gross exposure across 330+ pods: $412B. Net exposure pre-shock: 0.3% long. Current drawdown: -0.7% (within tolerance). <strong>No kill switches triggered yet, but 14 pods are at 80% of their stop-loss threshold.</strong>`,
      response: `Our entire edge is that we DON'T take directional risk. Here's how we stay market-neutral during a 4% drawdown:`,
      actions: [
        { type: 'HEDGE', detail: '<strong>Index Hedges — INCREASE by $8B notional:</strong> Added SPX futures shorts at 5,610, IWM puts at $192, QQQ puts at $435. Net beta across all pods: -0.02 (within our ±0.05 target). Cost: 12bp of NAV.' },
        { type: 'HEDGE', detail: '<strong>Cross-Asset Pairs — REBALANCE:</strong> Existing pairs are stressed. Long XOM/Short XLE spread has blown out. Pod 127 is manually tightening the hedge ratio from 0.92 to 1.05 to account for beta drift in energy names.' },
        { type: 'HEDGE', detail: '<strong>Rates Overlay — INITIATED:</strong> Added 2Y/10Y steepener ($2.3B notional) to offset duration drag from our equity book. If the curve steepens further, this generates +15bp of alpha.' },
        { type: 'SELL', detail: '<strong>Kill Switch Prep — 14 pods on watch:</strong> If any pod hits -3% drawdown, capital is pulled within 24 hours. Current worst pod: -2.4% (Merger Arb, Pod 312 — deal spread blowout in the airline sector).' },
        { type: 'BUY', detail: '<strong>Volatility Arb — BUY:</strong> VIX term structure is in steep backwardation. Selling 45-day VIX futures, buying 7-day. Expected profit: 180bp annualized if VIX normalizes within 2 weeks.' },
      ],
      bottomLine: `We don't fight the market. We arbitrage its dislocations. Our portfolio is designed to make money whether oil goes to $150 or back to $80. The key metric is NOT direction — it's spread convergence. And right now, spreads are widening, which means opportunity is expanding. Net exposure: -0.02%. Exactly where we want it.`,
    }
  },
  {
    agentId: 'oaktree',
    action: 'BUY',
    actionLabel: '💰 BUY — Distressed Pipeline Activated',
    conviction: 94,
    urgency: 'HIGH',
    memo: {
      situation: `This is the moment Howard has been writing about for 18 months. The tide is going out. Private credit borrowers with floating-rate debt are about to get margin-called. At 5.2% base rates, leveraged companies paying SOFR + 500bp are now servicing debt at 10.2%. Many cannot survive 6 months at these levels.`,
      response: `<strong>We love bad news because it makes debt cheap.</strong> Our distressed opportunity pipeline just went from "monitoring" to "active deployment."`,
      actions: [
        { type: 'BUY', detail: '<strong>Distressed Energy Debt — DEPLOY $2B:</strong> Midstream companies with solid assets but over-leveraged balance sheets are seeing their bonds drop to 65-70 cents. Recovery value: 85-95 cents. This is the fattest pitch we\'ve seen since 2020.' },
        { type: 'BUY', detail: '<strong>Airline Secured Debt — MONITORING:</strong> If DAL/UAL/LUV bonds drop below 80 cents, we\'re buyers. Aircraft collateral provides a hard floor. The equity may be impaired; the debt is money-good at these levels.' },
        { type: 'BUY', detail: '<strong>Private Credit Secondaries — ACTIVE:</strong> Forced sellers in the direct lending market are emerging. A $400M CLO tranche traded yesterday at 88 cents — we bid 85 and will own it by Friday. The underlying assets are performing; the seller has a liquidity problem.' },
        { type: 'HOLD', detail: '<strong>Existing Equity Holdings (EXE, TRMD, AU) — HOLD:</strong> Expand Energy benefits directly from $120 oil. TORM benefits from tanker rate spikes. AngloGold benefits from gold at $3,380. Our equity book is an accidental hedge.' },
      ],
      bottomLine: `As Howard wrote: "The best investments are made when others are running scared." Right now, the market is running scared. We are walking in the other direction with $8B in dry powder. The margin of safety at these prices is enormous. In 18 months, we'll look back at today as the day the vintage of the decade was born.`,
    }
  }
];

// --- ELLIOTT vs TIGER CONFRONTATION ---
const CONFRONTATION = {
  title: 'FORCED CONFRONTATION: Elliott vs Tiger',
  subtitle: 'Paul Singer challenges Chase Coleman on downside protection',
  exchanges: [
    {
      agentId: 'elliott',
      name: 'Elliott Management',
      text: `Coleman, I've read your memo. "The thesis hasn't changed, the price has." That's what every growth fund manager says right before they blow up. You're sitting on $29 billion in concentrated tech longs — <strong>GOOGL, MSFT, AMZN, NVDA</strong> — and your downside "protection" is spending 45 basis points on SPX puts? That's not a hedge. That's a rounding error.`,
      stance: 'CHALLENGE',
    },
    {
      agentId: 'elliott',
      name: 'Elliott Management',
      text: `Let me do the math your team apparently hasn't. At 5.2% yields, a 30x P/E stock should re-rate to 22x — that's a <strong>27% compression</strong> in fair value. Your NVDA collar has a floor at -8%? The stock could fall 25% before this is over. Your "collar" is a band-aid on a gunshot wound. You've left your LPs exposed to catastrophic loss because you're too emotionally attached to your "2030 compounder" narrative.`,
      stance: 'AGGRESSIVE',
    },
    {
      agentId: 'tiger',
      name: 'Tiger Global',
      text: `Paul, with all due respect, your entire fund is built on buying broken companies and bullying boards into selling them for parts. You don't understand what it means to own a business for the long term. GOOGL generates $95B in free cash flow. MSFT is the operating system for enterprise AI. These are not "narratives" — they're monopolies printing money.`,
      stance: 'DEFENSIVE',
    },
    {
      agentId: 'tiger',
      name: 'Tiger Global',
      text: `And yes, I'm spending 45bp on protection, not 300bp, because <strong>over-hedging is how you leak alpha over a full cycle.</strong> Every dollar spent on puts is a dollar that doesn't compound. Our LPs don't pay us 2-and-20 to run a market-neutral book — they pay us to identify generational winners and hold them through volatility. That's exactly what we're doing.`,
      stance: 'CONVICTION',
    },
    {
      agentId: 'elliott',
      name: 'Elliott Management',
      text: `"Hold through volatility." That's a nice way of saying "watch your LPs lose 30% while I wait to be proven right." You know who else said that? ARK Invest in 2021. Masa Son at SoftBank. Every growth investor who confused a bull market for genius. <strong>Your Sharpe ratio is 1.87 — mine is 1.94 with HALF the drawdown.</strong> That tells me I'm managing risk better than you are.`,
      stance: 'DATA',
    },
    {
      agentId: 'tiger',
      name: 'Tiger Global',
      text: `You're comparing a 54-position tech portfolio to a 34-position activist book with 19.7% in a gold miner. Of course your drawdown is lower right now — you're accidentally long the inflation trade. If oil reverses next month, your Phillips 66 and Suncor positions evaporate. Your "alpha" is just a macro bet wearing an activist costume.`,
      stance: 'COUNTERATTACK',
    },
    {
      agentId: 'elliott',
      name: 'Elliott Management',
      text: `At least my macro bet has a catalyst attached to it. I'm not just owning assets and hoping — I'm in the boardroom, forcing change, creating value. <strong>What's your catalyst, Coleman? "The future"?</strong> That's not an investment thesis. That's a religion. And today, at 5.2% yields, the congregation is heading for the exits.`,
      stance: 'FINAL',
    },
  ]
};

// ============================================
// MIRROR POD RENDERER
// ============================================
function initMirrorPod() {
  const section = document.createElement('section');
  section.className = 'mirror-pod-section';
  section.id = 'mirror-pod-section';

  section.innerHTML = `
    <div class="section-label">
      <span class="label-icon" style="color: var(--negative)">◆</span>
      <span>MIRROR POD — EMERGENCY SESSION</span>
      <div class="label-line" style="background: rgba(255,82,82,0.3)"></div>
    </div>

    <!-- Crisis Banner -->
    <div class="crisis-banner" id="crisis-banner">
      <div class="crisis-alert-bar">
        <div class="crisis-pulse"></div>
        <span class="crisis-alert-text">⚠ MARKET ALERT — GEOPOLITICAL SHOCK — ALL AGENTS CALLED TO MIRROR POD</span>
        <div class="crisis-pulse"></div>
      </div>
      <div class="crisis-header">
        <div class="crisis-title-block">
          <h2 class="crisis-title">${CRISIS_SCENARIO.title}</h2>
          <p class="crisis-subtitle">${CRISIS_SCENARIO.subtitle}</p>
        </div>
      </div>
      <div class="crisis-indicators">
        ${CRISIS_SCENARIO.catalysts.map(c => `
          <div class="crisis-indicator ${c.direction}">
            <span class="ci-label">${c.label}</span>
            <span class="ci-value">${c.value}</span>
            <span class="ci-change ${c.direction === 'up' ? (c.label === 'S&P 500' ? '' : '') : ''}">${c.change}</span>
          </div>
        `).join('')}
      </div>
      <div class="crisis-briefing">
        <div class="briefing-label">SITUATION BRIEFING</div>
        <p>${CRISIS_SCENARIO.briefing}</p>
      </div>
    </div>

    <!-- Positioning Memos -->
    <div class="memos-grid" id="memos-grid"></div>

    <!-- Confrontation -->
    <div class="confrontation-section" id="confrontation-section">
      <div class="confrontation-header">
        <div class="confrontation-badge">⚔️ FORCED CONFRONTATION</div>
        <h3>${CONFRONTATION.title}</h3>
        <p>${CONFRONTATION.subtitle}</p>
      </div>
      <div class="confrontation-messages" id="confrontation-messages"></div>
    </div>
  `;

  // Insert before debate section
  const debateSection = document.getElementById('debate-section');
  if (debateSection) {
    debateSection.parentNode.insertBefore(section, debateSection);
  } else {
    document.getElementById('main-content').appendChild(section);
  }

  // Render memos
  renderMemos();
  // Render confrontation with animation
  setTimeout(renderConfrontation, 500);
}

function renderMemos() {
  const grid = document.getElementById('memos-grid');
  POSITIONING_MEMOS.forEach((memo, idx) => {
    const agent = AGENTS[memo.agentId];
    const card = document.createElement('div');
    card.className = 'memo-card';
    card.dataset.agent = memo.agentId;
    card.style.animationDelay = `${idx * 0.1}s`;

    const actionClass = memo.action === 'BUY' ? 'action-buy' : memo.action === 'SELL' ? 'action-sell' : 'action-hedge';

    card.innerHTML = `
      <div class="memo-top-bar ${actionClass}">
        <div class="memo-agent-id">
          <span class="memo-avatar">${agent.icon}</span>
          <div>
            <div class="memo-agent-name">${agent.name}</div>
            <div class="memo-archetype">${agent.archetype}</div>
          </div>
        </div>
        <div class="memo-action-badge ${actionClass}">${memo.actionLabel}</div>
      </div>

      <div class="memo-body">
        <div class="memo-meta-row">
          <div class="memo-meta"><span class="meta-label">CONVICTION</span><div class="conviction-bar"><div class="conviction-fill" style="width:${memo.conviction}%; background: ${agent.color}"></div></div><span class="meta-val">${memo.conviction}%</span></div>
          <div class="memo-meta"><span class="meta-label">URGENCY</span><span class="meta-val urgency-${memo.urgency.toLowerCase()}">${memo.urgency}</span></div>
        </div>

        <div class="memo-section">
          <div class="memo-section-title">SITUATION ASSESSMENT</div>
          <p>${memo.memo.situation}</p>
        </div>

        <div class="memo-section">
          <div class="memo-section-title">RESPONSE</div>
          <p>${memo.memo.response}</p>
        </div>

        <div class="memo-actions">
          ${memo.memo.actions.map(a => `
            <div class="memo-action-item">
              <span class="action-type-tag ${a.type.toLowerCase()}">${a.type}</span>
              <span class="action-detail">${a.detail}</span>
            </div>
          `).join('')}
        </div>

        <div class="memo-bottom-line">
          <div class="bl-label">BOTTOM LINE</div>
          <p>${memo.memo.bottomLine}</p>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderConfrontation() {
  const container = document.getElementById('confrontation-messages');
  CONFRONTATION.exchanges.forEach((ex, idx) => {
    const agent = AGENTS[ex.agentId];
    const msg = document.createElement('div');
    msg.className = 'confrontation-msg';
    msg.dataset.agent = ex.agentId;
    msg.style.animationDelay = `${idx * 0.15}s`;

    const stanceColors = {
      'CHALLENGE': '#ff5252', 'AGGRESSIVE': '#ff1744', 'DEFENSIVE': '#00e676',
      'CONVICTION': '#00c853', 'DATA': '#ff5252', 'COUNTERATTACK': '#00e676', 'FINAL': '#ff1744'
    };

    msg.innerHTML = `
      <div class="conf-avatar" style="background: rgba(${ex.agentId === 'elliott' ? '255,82,82' : '0,230,118'},0.12); color: ${agent.color}">${agent.icon}</div>
      <div class="conf-content">
        <div class="conf-header">
          <span class="conf-name" style="color: ${agent.color}">${ex.name}</span>
          <span class="conf-stance" style="background: ${stanceColors[ex.stance]}22; color: ${stanceColors[ex.stance]}; border: 1px solid ${stanceColors[ex.stance]}44">${ex.stance}</span>
        </div>
        <div class="conf-text">${ex.text}</div>
      </div>
    `;
    container.appendChild(msg);
  });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(initMirrorPod, 200));
} else {
  setTimeout(initMirrorPod, 200);
}
