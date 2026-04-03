// ============================================
// AGENTIC 13F — Cross-Agent Position Analysis
// War Room Transcript Intelligence
// ============================================

const ANALYSIS_DATA = {

  // ══════════════════════════════════════════
  // SECTION 1: CROWDED LONGS
  // Assets/sectors where 3+ agents agree
  // ══════════════════════════════════════════
  crowdedLongs: [
    {
      asset: 'GOLD / GLD / AU / TFPM',
      sector: 'Precious Metals',
      agentCount: 4,
      agents: [
        { id: 'bridgewater', action: 'BUY', detail: 'GLD +300bp — "ultimate hedge against fiat debasement, targets $3,800"', conviction: 91 },
        { id: 'elliott', action: 'HOLD', detail: 'TFPM at 19.7% of portfolio — largest single holding, gold streaming royalty', conviction: 85 },
        { id: 'oaktree', action: 'HOLD', detail: 'AU (AngloGold Ashanti) — "accidental hedge, benefits from gold at $3,380"', conviction: 94 },
        { id: 'rentech', action: 'HOLD', detail: 'KGC (Kinross Gold) — ~1.2% position, systematic hold', conviction: 67 },
      ],
      dissenters: [
        { id: 'tiger', stance: '🔴 BEARISH', note: 'Zero gold allocation — "old economy, doesn\'t compound"' },
        { id: 'millennium', stance: '🟡 NEUTRAL', note: 'No directional gold view — would only trade paired' },
      ],
      crowdingRisk: 'MODERATE',
      thesis: 'Post-shock gold at $3,380 (+8.2%). Four agents hold gold-linked assets. Bridgewater is the most aggressive buyer (+300bp), while Elliott and Oaktree hold gold miners as structural positions. Strong consensus that real rates going negative favors precious metals.',
    },
    {
      asset: 'ENERGY PRODUCERS — XOM, CVX, PSX, SU, EXE',
      sector: 'Energy / Oil & Gas',
      agentCount: 3,
      agents: [
        { id: 'bridgewater', action: 'BUY', detail: 'Initiate XOM, CVX, commodity ETFs — "supply constraints are structural"', conviction: 91 },
        { id: 'elliott', action: 'BUY', detail: 'PSX +150bp (activist, demand special dividend), SU 10.3% existing', conviction: 85 },
        { id: 'oaktree', action: 'HOLD', detail: 'EXE (Expand Energy) — "benefits directly from $120 oil"', conviction: 94 },
      ],
      dissenters: [
        { id: 'tiger', stance: '🔴 BEARISH', note: '"Old economy" — zero energy exposure' },
        { id: 'rentech', stance: '🟡 NEUTRAL', note: 'No directional energy view — signals suspended' },
        { id: 'millennium', stance: '🟡 NEUTRAL', note: 'Long XOM / Short XLE pair — directionally net zero' },
      ],
      crowdingRisk: 'LOW',
      thesis: 'At $120/barrel, energy producers are printing money. Bridgewater sees structural supply constraints (not transitory). Elliott sees activist value in PSX and SU. Oaktree\'s EXE is a direct beneficiary. Notably, Millennium is long energy names but only as hedged pairs — NOT directional.',
    },
    {
      asset: 'VOLATILITY PROTECTION — SPX Puts, VIX, QQQ Puts',
      sector: 'Derivatives / Hedging',
      agentCount: 3,
      agents: [
        { id: 'tiger', action: 'BUY', detail: 'SPX 5400 puts (30-day, 45bp NAV) + NVDA collar ($105P/$140C)', conviction: 72 },
        { id: 'millennium', action: 'BUY', detail: '$8B index hedges (SPX futures, IWM $192P, QQQ $435P) + VIX backwardation arb', conviction: 88 },
        { id: 'rentech', action: 'HEDGE', detail: 'Net exposure ±0.5% — "all directional signals suspended"', conviction: 67 },
      ],
      dissenters: [
        { id: 'bridgewater', stance: '🟡 IMPLICIT', note: 'TLT puts serve similar purpose — bearish bonds, not explicit vol buyer' },
        { id: 'elliott', stance: '🟢 OPPOSES', note: '"Chaos is a ladder" — buying equities, not protection' },
        { id: 'oaktree', stance: '🟢 OPPOSES', note: '"Walking in the other direction" — buying distressed, not hedging' },
      ],
      crowdingRisk: 'HIGH',
      thesis: 'Three agents are explicitly buying downside protection. VIX at 34.70 makes protection expensive. Millennium is the most sophisticated — running a VIX term structure arb (sell 45-day, buy 7-day). Tiger\'s 45bp spend is notably thin relative to their exposure. RenTech is mechanically reducing, not actively buying vol.',
    },
    {
      asset: 'SHORT DURATION / TLT — Interest Rate Bearishness',
      sector: 'Fixed Income',
      agentCount: 3,
      agents: [
        { id: 'bridgewater', action: 'SHORT', detail: 'TLT puts — "if yields go to 5.5%, long-duration bonds lose another 8%"', conviction: 91 },
        { id: 'millennium', action: 'TRADE', detail: '2Y/10Y steepener ($2.3B notional) — betting on curve steepening', conviction: 88 },
        { id: 'rentech', action: 'SELL', detail: 'Closed all momentum longs — duration exposure eliminated', conviction: 67 },
      ],
      dissenters: [
        { id: 'oaktree', stance: '🟢 CONTRARIAN', note: 'Buying fixed income (distressed energy debt) — opposite side of the trade' },
      ],
      crowdingRisk: 'MODERATE',
      thesis: 'Three agents are explicitly positioned for higher rates. Bridgewater is most aggressive — calling for 5.5% on the 10Y. Millennium is playing the curve shape, not just direction. Oaktree is the notable contrarian — buying distressed debt at 65-70 cents because they see recovery value despite high rates.',
    },
  ],

  // ══════════════════════════════════════════
  // SECTION 2: DIVERGENT ALPHA
  // Unique trades only one agent identified
  // ══════════════════════════════════════════
  divergentAlpha: [
    {
      agent: 'oaktree',
      trade: 'Private Credit Secondaries — CLO Tranche at 85¢',
      uniqueness: 'SOLE IDENTIFIER',
      detail: 'A $400M CLO tranche traded at 88 cents. Oaktree bid 85 and expects to own it by Friday. The underlying assets are performing — the seller has a liquidity problem, not a credit problem. This is a forced-seller dislocation that no other agent identified.',
      expectedReturn: '+18-25% (recovery to par over 12-18 months)',
      whyNoOneElseSaw: [
        'Tiger doesn\'t trade credit markets — equity-only shop',
        'Bridgewater is selling fixed income broadly, not buying distressed tranches',
        'Elliott focuses on public equity activism, not CLO secondaries',
        'RenTech doesn\'t trade illiquid OTC instruments — no price-volume data',
        'Millennium would need a perfect hedge — CLO tranches are too illiquid to pair',
      ],
      edgeType: 'INFORMATION + ACCESS',
      riskProfile: 'Illiquidity risk (mark-to-market volatility), but credit fundamentals are sound. Requires specialized workout capability and legal infrastructure that only Oaktree/distressed shops possess.',
    },
    {
      agent: 'rentech',
      trade: '47 Mean-Reversion Trades on 3.2σ+ Mid-Cap Dislocations',
      uniqueness: 'SOLE IDENTIFIER',
      detail: 'The VIX spike to 34.70 created statistical dislocations of 3.2+ standard deviations in 47 mid-cap names. RenTech is running high-probability, short-duration trades (3-5 day expected convergence) at 0.08% NAV each — a total of ~3.76% of NAV deployed across 47 micro-positions.',
      expectedReturn: '+1.4% per trade avg (63% hit rate), ~+2.1% portfolio-level over 5 days',
      whyNoOneElseSaw: [
        'No other agent has the statistical infrastructure to detect 3.2σ dislocations in real-time',
        'Tiger/Elliott/Oaktree think in "stories" — they literally cannot see pattern-based alpha',
        'Bridgewater operates at macro level — individual mid-cap signals are below their resolution',
        'Millennium could theoretically find these, but their pod structure doesn\'t allow cross-pod systematic signals',
      ],
      edgeType: 'COMPUTATIONAL + SPEED',
      riskProfile: 'Low per-trade risk (0.08% NAV per position). Primary risk is correlation — if all 47 names are driven by the same factor, the diversification benefit collapses. RenTech\'s regime detection model mitigates this.',
    },
  ],

  // ══════════════════════════════════════════
  // SECTION 3: AGENTIC 13F
  // 5 High-Conviction Consensus Trades (30-day)
  // ══════════════════════════════════════════
  agentic13F: [
    {
      rank: 1,
      ticker: 'GLD',
      name: 'SPDR Gold Trust',
      direction: 'OVERWEIGHT',
      targetWeight: '8-12% of Portfolio',
      horizon: '30-day hold, reassess at $3,800',
      consensusScore: 92,
      supportingAgents: ['bridgewater', 'elliott', 'oaktree', 'rentech'],
      againstAgents: ['tiger'],
      thesis: 'Strongest cross-agent consensus. Gold benefits from: (1) negative real rates at 5.2% nominal with inflation re-anchoring higher, (2) geopolitical safe-haven flows, (3) central bank buying acceleration. Four agents hold gold-linked assets. Bridgewater targets $3,800. This is the "no-brainer" of the pod.',
      entry: '$3,380 (current post-shock)',
      target: '$3,800 (Bridgewater estimate)',
      stopLoss: '$3,180 (-6%)',
      riskReward: '2.1:1',
    },
    {
      rank: 2,
      ticker: 'XOM / CVX',
      name: 'Energy Majors Basket',
      direction: 'OVERWEIGHT',
      targetWeight: '5-8% of Portfolio',
      horizon: '30-day hold, trim if Oil < $105',
      consensusScore: 86,
      supportingAgents: ['bridgewater', 'elliott', 'oaktree'],
      againstAgents: ['tiger'],
      thesis: 'Three agents are actively long energy. $120 oil creates massive FCF expansion — XOM/CVX are generating ~$15B+ quarterly at these prices. Elliott\'s PSX play adds refining margin thesis. Oaktree\'s EXE is a direct beneficiary. Supply constraints are described as "structural, not transitory" by Bridgewater.',
      entry: 'Current levels (post-shock)',
      target: '+15-20% (FCF yield expansion)',
      stopLoss: 'Oil < $100/barrel',
      riskReward: '1.8:1',
    },
    {
      rank: 3,
      ticker: 'TLT Puts / Short Duration',
      name: 'Short Long-Dated Treasuries',
      direction: 'SHORT',
      targetWeight: '3-5% of Portfolio (notional)',
      horizon: '30-day, roll if yields > 5.5%',
      consensusScore: 83,
      supportingAgents: ['bridgewater', 'millennium', 'rentech'],
      againstAgents: ['oaktree'],
      thesis: 'Bridgewater sees yields going to 5.5% ("the market is still in denial"). Millennium is playing the 2Y/10Y steepener. RenTech has eliminated all duration exposure. The inflation spiral thesis suggests the Fed is behind the curve. Biggest risk: a flight-to-quality reversal if the geopolitical situation escalates to wartime levels.',
      entry: '10Y at 5.20% (current)',
      target: '10Y at 5.50% (+30bp = ~8% TLT decline)',
      stopLoss: '10Y < 4.80% (flight to quality)',
      riskReward: '2.4:1',
    },
    {
      rank: 4,
      ticker: 'PSX',
      name: 'Phillips 66 (Activist + Refining)',
      direction: 'OVERWEIGHT',
      targetWeight: '3-4% of Portfolio',
      horizon: '30-90 days (catalyst-driven)',
      consensusScore: 78,
      supportingAgents: ['elliott', 'bridgewater', 'oaktree'],
      againstAgents: [],
      thesis: 'The only name with convergent support from THREE different strategy archetypes: Elliott (activist — demanding special dividend + buyback), Bridgewater (commodity producer beneficiary), and Oaktree (energy sector long). At $120 oil, refining margins explode. Elliott\'s 13D filing creates a hard catalyst for value unlock. This is the closest thing to a "free trade" in the pod.',
      entry: 'Current (post-shock dip)',
      target: '+20-25% (special dividend + re-rate)',
      stopLoss: '-10% from entry',
      riskReward: '2.5:1',
    },
    {
      rank: 5,
      ticker: 'VIX Calendar Spread',
      name: 'Long 7-Day VIX / Short 45-Day VIX',
      direction: 'RELATIVE VALUE',
      targetWeight: '1-2% of Portfolio',
      horizon: '14-21 days (VIX normalization)',
      consensusScore: 71,
      supportingAgents: ['millennium', 'tiger', 'rentech'],
      againstAgents: [],
      thesis: 'VIX term structure is in steep backwardation (front > back). Three agents are buying vol protection, but Millennium identified the highest-alpha expression: selling expensive 45-day VIX futures while buying cheap 7-day. Expected 180bp annualized if VIX normalizes within 2 weeks. This trade profits from the resolution of uncertainty, regardless of market direction.',
      entry: 'VIX at 34.70 (steep backwardation)',
      target: '+180bp annualized (VIX normalization to 20-25)',
      stopLoss: 'VIX > 45 (escalation beyond current scenario)',
      riskReward: '3.2:1',
    },
  ],
};

// ============================================
// AGENTIC 13F DASHBOARD RENDERER
// ============================================
function initAgentic13F() {
  const section = document.createElement('section');
  section.className = 'agentic-13f-section';
  section.id = 'agentic-13f-section';

  section.innerHTML = `
    <div class="section-label">
      <span class="label-icon" style="color: var(--positive)">◆</span>
      <span>AGENTIC 13F — CONSENSUS INTELLIGENCE</span>
      <div class="label-line" style="background: rgba(0,230,118,0.3)"></div>
    </div>

    <!-- Crowded Longs -->
    <div class="analysis-block" id="crowded-longs-block">
      <div class="analysis-block-header">
        <div class="analysis-badge crowded">🎯 CROWDED LONGS</div>
        <h3>Assets Where 3+ Agents Converge</h3>
        <p>Cross-referencing 13F holdings, crisis memos, and debate stances</p>
      </div>
      <div class="crowded-grid" id="crowded-grid"></div>
    </div>

    <!-- Divergent Alpha -->
    <div class="analysis-block" id="divergent-alpha-block">
      <div class="analysis-block-header">
        <div class="analysis-badge divergent">🔮 DIVERGENT ALPHA</div>
        <h3>Unique Trades No One Else Saw</h3>
        <p>Proprietary edges identified by a single agent</p>
      </div>
      <div class="divergent-grid" id="divergent-grid"></div>
    </div>

    <!-- Agentic 13F -->
    <div class="analysis-block" id="agentic-13f-block">
      <div class="analysis-block-header">
        <div class="analysis-badge consensus">📋 THE AGENTIC 13F</div>
        <h3>5 High-Conviction Consensus Trades — Next 30 Days</h3>
        <p>Weighted by agent conviction, cross-strategy alignment, and risk/reward</p>
      </div>
      <div class="thirteen-f-list" id="thirteen-f-list"></div>
    </div>
  `;

  // Insert after mirror pod / before debate section
  const debateSection = document.getElementById('debate-section');
  const mirrorPod = document.getElementById('mirror-pod-section');
  const insertPoint = debateSection || mirrorPod;
  if (insertPoint && insertPoint.nextSibling) {
    insertPoint.parentNode.insertBefore(section, debateSection);
  } else {
    document.getElementById('main-content').appendChild(section);
  }

  renderCrowdedLongs();
  renderDivergentAlpha();
  renderAgentic13F();
}

function renderCrowdedLongs() {
  const grid = document.getElementById('crowded-grid');
  ANALYSIS_DATA.crowdedLongs.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'crowded-card';
    card.style.animationDelay = `${idx * 0.1}s`;

    const riskClass = item.crowdingRisk === 'HIGH' ? 'risk-high' : item.crowdingRisk === 'MODERATE' ? 'risk-moderate' : 'risk-low';

    card.innerHTML = `
      <div class="crowded-card-top">
        <div class="crowded-asset-name">${item.asset}</div>
        <div class="crowded-meta">
          <span class="agent-count-badge">${item.agentCount} AGENTS</span>
          <span class="crowding-risk ${riskClass}">CROWD RISK: ${item.crowdingRisk}</span>
        </div>
      </div>
      <div class="crowded-sector">${item.sector}</div>
      <div class="crowded-agents-list">
        ${item.agents.map(a => {
          const agent = AGENTS[a.id];
          const actionClass = a.action === 'BUY' ? 'act-buy' : a.action === 'SHORT' ? 'act-sell' : 'act-hold';
          return `<div class="crowded-agent-row">
            <span class="ca-avatar" style="color:${agent.color}">${agent.icon}</span>
            <span class="ca-action ${actionClass}">${a.action}</span>
            <span class="ca-detail">${a.detail}</span>
          </div>`;
        }).join('')}
      </div>
      <div class="crowded-dissenters">
        <div class="dissenter-label">DISSENTERS</div>
        ${item.dissenters.map(d => {
          const agent = AGENTS[d.id];
          return `<div class="dissenter-row">
            <span class="ca-avatar" style="color:${agent.color}">${agent.icon}</span>
            <span class="dissenter-stance">${d.stance}</span>
            <span class="dissenter-note">${d.note}</span>
          </div>`;
        }).join('')}
      </div>
      <div class="crowded-thesis">
        <div class="thesis-label">THESIS</div>
        <p>${item.thesis}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderDivergentAlpha() {
  const grid = document.getElementById('divergent-grid');
  ANALYSIS_DATA.divergentAlpha.forEach((item, idx) => {
    const agent = AGENTS[item.agent];
    const card = document.createElement('div');
    card.className = 'divergent-card';
    card.dataset.agent = item.agent;
    card.style.animationDelay = `${idx * 0.15}s`;

    card.innerHTML = `
      <div class="divergent-top" style="border-top: 3px solid ${agent.color}">
        <div class="divergent-agent-info">
          <span class="divergent-avatar" style="color:${agent.color}; background: ${agent.color}15">${agent.icon}</span>
          <div>
            <div class="divergent-agent-name" style="color:${agent.color}">${agent.name}</div>
            <div class="divergent-badge">${item.uniqueness}</div>
          </div>
        </div>
        <div class="divergent-edge-type">${item.edgeType}</div>
      </div>
      <div class="divergent-trade">
        <h4>${item.trade}</h4>
        <p>${item.detail}</p>
      </div>
      <div class="divergent-metrics">
        <div class="div-metric">
          <span class="div-metric-label">EXPECTED RETURN</span>
          <span class="div-metric-value positive">${item.expectedReturn}</span>
        </div>
      </div>
      <div class="divergent-why">
        <div class="why-label">WHY NO ONE ELSE SAW THIS</div>
        <ul>${item.whyNoOneElseSaw.map(w => `<li>${w}</li>`).join('')}</ul>
      </div>
      <div class="divergent-risk">
        <div class="why-label">RISK PROFILE</div>
        <p>${item.riskProfile}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderAgentic13F() {
  const list = document.getElementById('thirteen-f-list');
  ANALYSIS_DATA.agentic13F.forEach((trade, idx) => {
    const card = document.createElement('div');
    card.className = 'thirteenf-card';
    card.style.animationDelay = `${idx * 0.1}s`;

    const dirClass = trade.direction === 'OVERWEIGHT' ? 'dir-long' : trade.direction === 'SHORT' ? 'dir-short' : 'dir-rv';

    card.innerHTML = `
      <div class="tf-rank">#${trade.rank}</div>
      <div class="tf-body">
        <div class="tf-header">
          <div class="tf-ticker-block">
            <span class="tf-ticker">${trade.ticker}</span>
            <span class="tf-name">${trade.name}</span>
          </div>
          <div class="tf-direction ${dirClass}">${trade.direction}</div>
        </div>

        <div class="tf-consensus-bar-container">
          <div class="tf-consensus-label">CONSENSUS SCORE</div>
          <div class="tf-consensus-bar">
            <div class="tf-consensus-fill" style="width:${trade.consensusScore}%"></div>
          </div>
          <span class="tf-consensus-value">${trade.consensusScore}/100</span>
        </div>

        <div class="tf-agents-row">
          <div class="tf-support">
            <span class="tf-agents-label">SUPPORTING</span>
            <div class="tf-agent-pills">
              ${trade.supportingAgents.map(id => `<span class="tf-agent-pill" style="color:${AGENTS[id].color}; border-color:${AGENTS[id].color}33; background:${AGENTS[id].color}11">${AGENTS[id].icon}</span>`).join('')}
            </div>
          </div>
          ${trade.againstAgents.length > 0 ? `<div class="tf-against">
            <span class="tf-agents-label">AGAINST</span>
            <div class="tf-agent-pills">
              ${trade.againstAgents.map(id => `<span class="tf-agent-pill against-pill" style="color:${AGENTS[id].color}">${AGENTS[id].icon}</span>`).join('')}
            </div>
          </div>` : ''}
        </div>

        <div class="tf-thesis"><p>${trade.thesis}</p></div>

        <div class="tf-trade-params">
          <div class="tf-param"><span class="tp-label">ENTRY</span><span class="tp-value">${trade.entry}</span></div>
          <div class="tf-param"><span class="tp-label">TARGET</span><span class="tp-value positive">${trade.target}</span></div>
          <div class="tf-param"><span class="tp-label">STOP</span><span class="tp-value negative">${trade.stopLoss}</span></div>
          <div class="tf-param"><span class="tp-label">R:R</span><span class="tp-value">${trade.riskReward}</span></div>
          <div class="tf-param"><span class="tp-label">WEIGHT</span><span class="tp-value">${trade.targetWeight}</span></div>
          <div class="tf-param"><span class="tp-label">HORIZON</span><span class="tp-value">${trade.horizon}</span></div>
        </div>
      </div>
    `;
    list.appendChild(card);
  });
}

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(initAgentic13F, 400));
} else {
  setTimeout(initAgentic13F, 400);
}
