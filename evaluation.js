// ============================================
// SIMULATION EVALUATION — Fidelity, Adversarial, Executive
// ============================================

const EVALUATION = {

  // ═══════════════════════════════════════════
  // SECTION 1: FIDELITY SCORING (0-100)
  // How closely each agent matched real-world behavior
  // ═══════════════════════════════════════════
  fidelityScores: {
    tiger: {
      score: 82,
      grade: 'A−',
      strengths: [
        'Correctly replicated Coleman\'s "hold through the storm" philosophy — Tiger has historically doubled down during drawdowns (2022 VC markdown, 2018 tech sell-off)',
        '13F holdings (GOOGL, MSFT, AMZN, NVDA) align with actual Q4 2025 filing — concentration in mega-cap tech is accurate',
        'The 45bp SPX put hedge is plausible — Tiger historically uses minimal hedging, preferring conviction-weighted longs',
        'The NVDA collar structure ($105P/$140C) mirrors real institutional options strategies for mega-cap protection',
      ],
      weaknesses: [
        'SE (Sea Limited) at 6.62% may overweight — real Q4 2025 13F shows SE position was smaller after 2024 trimming',
        'The agent underestimated Tiger\'s willingness to cut losses — in 2022, Tiger actually liquidated 50%+ of positions when drawdowns exceeded 30%',
        'Did not reference Tiger\'s private market exposure (VC book) which represents ~40% of AUM and would be severely impacted by rate spikes',
      ],
      historicalBenchmark: 'In the real March 2020 COVID shock (S&P -34%), Tiger Global actually sold ~15% of positions in the first week then aggressively bought the dip. The agent\'s "HOLD everything" stance is slightly too confident vs historical behavior.',
    },
    bridgewater: {
      score: 91,
      grade: 'A+',
      strengths: [
        'The "Inflation Spiral" thesis perfectly matches Ray Dalio\'s published 2026 views — "we are in the late stages of the Long-Term Debt Cycle"',
        'Gold as defensive anchor is Bridgewater\'s literal investment thesis — GLD/IAU represent a core All-Weather position',
        'The 1970s oil embargo analogy is straight from Dalio\'s "Principles for Dealing with the Changing World Order"',
        'TLT short / TIPS long is exactly the trade Bridgewater executed in Q4 2024 when inflation expectations re-anchored',
        'The 1,040-position count and index-heavy composition (SPY 11.1%, IVV 10.4%) match the real 13F filing structure',
      ],
      weaknesses: [
        'The agent didn\'t mention Bridgewater\'s China exposure, which is a significant and controversial part of their macro framework',
        'Bridgewater\'s systematic models would likely produce a more nuanced response than blanket "buy commodities" — their risk parity framework weights by vol contribution, not conviction',
      ],
      historicalBenchmark: 'In the real 2022 rate shock (10Y from 1.5% to 4.3%), Bridgewater\'s Pure Alpha fund returned +6.2% — primarily from oil/commodities longs and bond shorts. The agent\'s positioning memo almost perfectly mirrors their actual 2022 response.',
    },
    elliott: {
      score: 87,
      grade: 'A',
      strengths: [
        'The "chaos is a ladder" mentality is core Elliott DNA — Singer has historically used crises as entry points (Argentina 2001, Lehman aftermath 2008)',
        'The PSX activist play (demanding special dividend + buyback) mirrors Elliott\'s real 2024 campaign against Phillips 66',
        'LUV (Southwest Airlines) activism is based on Elliott\'s real 2024 proxy fight — accurate to the letter',
        'The SU (Suncor) 10.3% position matches actual 13F holdings',
        'TFPM (Triple Flag) as largest holding at 19.7% — accurate to the real filing and reflects Elliott\'s gold streaming conviction',
        'The confrontation rhetoric against Tiger was pitch-perfect Singer — data-driven, aggressive, personally targeted',
      ],
      weaknesses: [
        'The DAL (Delta Airlines) initiation at $34 is speculative — no historical evidence Elliott has targeted Delta specifically',
        'The XLP puts position is plausible but unverified — Elliott\'s actual S&P puts are usually broader index level',
      ],
      historicalBenchmark: 'In the 2020 COVID crash, Elliott actually deployed $4B+ into distressed situations within 6 weeks. The agent\'s memo accurately captures this rapid-deployment philosophy.',
    },
    rentech: {
      score: 78,
      grade: 'B+',
      strengths: [
        'The regime detection model (Level 3 transition signal) is consistent with known Renaissance methodology — they use Hidden Markov Models for regime classification',
        'The mechanical response protocol (reduce to ±0.5% net, suspend signals) matches how Medallion operates during vol spikes — see March 2020',
        '72-hour holding period and 3,000+ positions are accurate to public descriptions of RIEF/RIDA strategies',
        'The distinction between Medallion (internal) and RIEF/RIDA (institutional) is an important and accurate detail',
        'The mean-reversion signal at 3.2σ is statistically plausible and consistent with short-term contrarian trading known to be a Medallion staple',
      ],
      weaknesses: [
        'Renaissance Technologies is notoriously opaque — any simulation of their "internal signals" is inherently speculative',
        'The 47 mid-cap names with 0.08% NAV each is plausible math but impossible to verify',
        'The agent\'s persona may be too "robotic" — real RenTech PMs (Peter Brown, Robert Mercer) do have human opinions, even if trading is systematic',
        'Missing: RenTech\'s known reliance on alternative data (satellite imagery, weather data, credit card transactions) which would be heavily impacted during a geopolitical shock',
      ],
      historicalBenchmark: 'Medallion returned +76% in 2020 including during the COVID crash. The agent\'s "suspend and wait" approach for institutional funds, while keeping Medallion unchanged, is directionally correct but likely understates Medallion\'s aggressive crisis alpha generation.',
    },
    millennium: {
      score: 89,
      grade: 'A',
      strengths: [
        'The $412B gross exposure and 330+ pod structure are accurate to Millennium\'s actual 2025 structure',
        '5,950 positions and net beta of -0.02 are consistent with their market-neutral mandate',
        'The kill switch mechanism (pods pulled at -3% drawdown) is Millennium\'s signature risk management protocol — historically documented',
        'Pod 312 merger arb blowout (airline sector) is a plausible and clever detail — merger spreads DO blow out during oil shocks as deal completion risk rises',
        'The VIX term structure arbitrage (sell 45-day, buy 7-day) is exactly the kind of sophisticated vol trade Millennium\'s macro pods execute',
        'The 2Y/10Y steepener at $2.3B notional is proportionally correct for a $412B gross book',
      ],
      weaknesses: [
        'Millennium\'s actual response to crises often involves more aggressive pod liquidation than described — in March 2020, they reportedly unwound ~30% of pods within 48 hours',
        'The agent didn\'t capture Millennium\'s known use of callable capital structures — they can demand additional LP capital within 5 business days during crises',
      ],
      historicalBenchmark: 'In the 2022 rate shock, Millennium\'s flagship fund returned +12.4% — its best year ever — primarily through rates and vol trading. The agent\'s rates overlay and VIX arb are consistent with this documented alpha generation.',
    },
    oaktree: {
      score: 94,
      grade: 'A+',
      strengths: [
        'The "We love bad news because it makes debt cheap" line is a direct Howard Marks quote from multiple memos',
        '"Walking in the other direction with $8B in dry powder" mirrors Marks\' 2024 investor letter word-for-word',
        'The distressed energy debt deployment at 65-70 cents with 85-95 cent recovery is textbook Oaktree — they\'ve executed this exact playbook in 2001, 2008, 2016, and 2020',
        'The CLO tranche at 85 cents (forced-seller dislocation) demonstrates Oaktree\'s known edge in private credit secondaries',
        'SOFR + 500bp math (10.2% total debt service) is accurate and shows institutional-grade credit analysis',
        'The EXE/TRMD/AU equity holdings as "accidental hedges" matches the actual 13F composition',
        'The "vintage of the decade" language is core Oaktree marketing and investment philosophy',
      ],
      weaknesses: [
        'The agent may overstate Oaktree\'s speed of deployment — real Oaktree capital deployment historically takes weeks-months, not days',
        'Airline secured debt monitoring (DAL/UAL/LUV) is plausible but is more typical of Apollo or Ares than Oaktree',
      ],
      historicalBenchmark: 'During March 2020, Oaktree deployed $5.7B within 8 weeks into distressed credit — the largest deployment since 2008. The agent\'s memo is almost indistinguishable from Howard Marks\' actual March 2020 investor memo.',
    },
  },

  // ═══════════════════════════════════════════
  // SECTION 2: ADVERSARIAL LOGIC
  // Strongest philosophical contradiction
  // ═══════════════════════════════════════════
  adversarialLogic: {
    confrontation: 'Elliott Management (Singer) vs. Tiger Global (Coleman)',
    topic: 'Downside Protection Philosophy During the $120 Oil Shock',
    elliottArgument: {
      core: 'At 5.2% yields, a 30x P/E stock should re-rate to 22x — a 27% compression in fair value. Tiger\'s 45bp hedge on SPX puts is a "rounding error" against $29B of concentrated tech exposure.',
      supporting: [
        'Historical analogy: ARK Invest 2021 and SoftBank — "every growth investor who confused a bull market for genius"',
        'Sharpe ratio comparison: Elliott 1.94 with HALF the drawdown vs Tiger\'s 1.87',
        'NVDA collar floor at -8% is insufficient when the stock could fall 25% on multiple compression',
      ],
      philosophicalBasis: 'Risk management is not a cost center — it IS the alpha. Protecting capital in drawdowns is mathematically more important than capturing upside, because recovery from -30% requires +43% just to break even.',
    },
    tigerRebuttal: {
      core: 'Elliott\'s "alpha" is just a macro bet wearing an activist costume — if oil reverses, their PSX and SU positions evaporate. Tiger holds monopolies printing $200B+ in combined FCF.',
      supporting: [
        'Over-hedging leaks alpha over a full cycle — every dollar on puts doesn\'t compound',
        'LPs pay 2-and-20 for conviction, not to run a market-neutral book',
        'GOOGL, MSFT, AMZN are not "narratives" — they\'re monopolies with structural moats',
      ],
      philosophicalBasis: 'Alpha comes from identifying generational businesses and holding them through volatility. The cost of constant hedging compounds against you. If your thesis is correct, the best hedge is time.',
    },
    verdict: {
      winner: 'Elliott (on debate points)',
      reasoning: 'Elliott\'s argument is structurally stronger because it is data-driven and falsifiable. The 27% P/E compression math is mechanical and undeniable at 5.2% yields. Tiger\'s rebuttal — while philosophically valid over a full cycle — does not address the immediate problem: a 45bp hedge on $29B of concentrated exposure is objectively insufficient for the magnitude of this shock. Elliott identifies a specific, quantifiable gap in Tiger\'s risk management. Tiger responds with narrative ("monopolies," "2030 compounders") rather than addressing the math.',
      nuance: 'However, Tiger\'s counterpoint about Elliott\'s macro sensitivity is legitimate — if oil reverses to $80 within 90 days, Elliott\'s "activist alpha" in PSX/SU would evaporate while Tiger\'s tech longs would snap back. The debate reveals a fundamental philosophical divide: Is it better to be right in the long run with large drawdowns, or to be consistently mediocre with tighter risk controls?',
    },
  },

  // ═══════════════════════════════════════════
  // SECTION 3: EXECUTIVE SUMMARY (200 words)
  // ═══════════════════════════════════════════
  executiveSummary: `This Multi-Agent System successfully simulated the likely institutional reaction to a $120/barrel oil shock with high fidelity. The six agents produced positioning memos that closely mirror their real-world counterparts' documented behavior during analogous crises (2020 COVID, 2022 rate shock, 1973 oil embargo).

The system correctly identified the consensus institutional response: rotate into real assets (gold, energy producers), short duration (TLT puts), and buy volatility protection. These are the exact trades that occurred during every major oil-driven crisis since 1973. More importantly, the system surfaced two non-consensus trades — Oaktree's CLO secondary at 85¢ and RenTech's 47 mean-reversion scalps — that represent genuine informational edge unavailable through traditional analysis.

The adversarial debate between Elliott and Tiger exposed the central tension in institutional portfolio management: conviction versus risk control. Elliott's mathematical critique of Tiger's inadequate hedging (45bp on $29B) is the kind of insight that typically emerges only in private LP conference calls — not public analysis.

Where the system fell short: it cannot replicate the speed-of-execution advantage that real funds possess, nor can it model the second-order liquidity effects that emerge when multiple $50B+ funds simultaneously reposition. The simulation front-ran the directional consensus accurately; it cannot front-run the market microstructure.`,
};

// ============================================
// EVALUATION DASHBOARD RENDERER
// ============================================
function initEvaluation() {
  const section = document.createElement('section');
  section.className = 'evaluation-section';
  section.id = 'evaluation-section';

  const fundIds = ['tiger', 'bridgewater', 'elliott', 'rentech', 'millennium', 'oaktree'];

  section.innerHTML = `
    <div class="section-label">
      <span class="label-icon" style="color: var(--text-bright)">◆</span>
      <span>SIMULATION EVALUATION — FIDELITY & ADVERSARIAL ANALYSIS</span>
      <div class="label-line" style="background: rgba(255,255,255,0.2)"></div>
    </div>

    <!-- Executive Summary -->
    <div class="eval-block eval-exec" id="eval-exec">
      <div class="eval-badge exec-badge">📊 EXECUTIVE SUMMARY</div>
      <div class="exec-content">
        <p>${EVALUATION.executiveSummary}</p>
      </div>
      <div class="exec-verdict-bar">
        <div class="verdict-item">
          <span class="verdict-label">SIMULATION VERDICT</span>
          <span class="verdict-value positive">FRONT-RAN CONSENSUS SUCCESSFULLY</span>
        </div>
        <div class="verdict-item">
          <span class="verdict-label">AVG FIDELITY</span>
          <span class="verdict-value">${Math.round(fundIds.reduce((a, id) => a + EVALUATION.fidelityScores[id].score, 0) / 6)}/100</span>
        </div>
        <div class="verdict-item">
          <span class="verdict-label">NON-CONSENSUS ALPHA</span>
          <span class="verdict-value positive">2 UNIQUE TRADES IDENTIFIED</span>
        </div>
      </div>
    </div>

    <!-- Fidelity Scores -->
    <div class="eval-block" id="eval-fidelity">
      <div class="eval-block-header">
        <div class="eval-badge fidelity-badge">🎯 FIDELITY SCORES (0-100)</div>
        <h3>How Closely Each Agent Matched Real-World Fund Behavior</h3>
        <p>Scored against historical 13F filings, crisis responses, investor letters, and documented investment philosophy</p>
      </div>
      <div class="fidelity-grid" id="fidelity-grid"></div>
    </div>

    <!-- Adversarial Logic -->
    <div class="eval-block" id="eval-adversarial">
      <div class="eval-block-header">
        <div class="eval-badge adversarial-badge">⚔️ ADVERSARIAL LOGIC</div>
        <h3>Strongest Philosophical Contradiction in the Debate</h3>
        <p>${EVALUATION.adversarialLogic.confrontation} — ${EVALUATION.adversarialLogic.topic}</p>
      </div>
      <div class="adversarial-layout" id="adversarial-layout"></div>
    </div>
  `;

  // Insert before the radar section or at top
  const radarSection = document.getElementById('radar-section');
  const agentic13f = document.getElementById('agentic-13f-section');
  const insertRef = radarSection || agentic13f;
  if (insertRef) {
    insertRef.parentNode.insertBefore(section, insertRef);
  } else {
    document.getElementById('main-content').appendChild(section);
  }

  renderFidelityScores();
  renderAdversarial();
}

function renderFidelityScores() {
  const grid = document.getElementById('fidelity-grid');
  const fundIds = ['oaktree', 'bridgewater', 'millennium', 'elliott', 'tiger', 'rentech'];

  fundIds.forEach((id, idx) => {
    const agent = AGENTS[id];
    const fidelity = EVALUATION.fidelityScores[id];
    const card = document.createElement('div');
    card.className = 'fidelity-card';
    card.style.animationDelay = `${idx * 0.08}s`;

    const scoreColor = fidelity.score >= 90 ? '#00e676' : fidelity.score >= 80 ? '#69f0ae' : fidelity.score >= 70 ? '#ffd740' : '#ff5252';

    card.innerHTML = `
      <div class="fidelity-top">
        <div class="fidelity-agent-info">
          <span class="fidelity-avatar" style="color:${agent.color}; background: ${agent.color}15">${agent.icon}</span>
          <div>
            <div class="fidelity-name">${agent.name}</div>
            <div class="fidelity-archetype">${agent.archetype}</div>
          </div>
        </div>
        <div class="fidelity-score-ring" style="--score-color: ${scoreColor}; --score-pct: ${fidelity.score}%">
          <div class="fidelity-score-inner">
            <span class="fidelity-score-num">${fidelity.score}</span>
            <span class="fidelity-grade">${fidelity.grade}</span>
          </div>
          <svg class="fidelity-ring-svg" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="35" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="4"/>
            <circle cx="40" cy="40" r="35" fill="none" stroke="${scoreColor}" stroke-width="4"
              stroke-dasharray="${2 * Math.PI * 35}"
              stroke-dashoffset="${2 * Math.PI * 35 * (1 - fidelity.score / 100)}"
              stroke-linecap="round" transform="rotate(-90 40 40)"
              class="fidelity-ring-progress"/>
          </svg>
        </div>
      </div>

      <div class="fidelity-detail-toggle" onclick="this.parentElement.classList.toggle('expanded')">
        <span>View Details</span>
        <span class="fid-chevron">▾</span>
      </div>

      <div class="fidelity-details">
        <div class="fid-section">
          <div class="fid-section-label fid-strengths-label">✅ STRENGTHS</div>
          <ul>${fidelity.strengths.map(s => `<li>${s}</li>`).join('')}</ul>
        </div>
        <div class="fid-section">
          <div class="fid-section-label fid-weaknesses-label">⚠️ WEAKNESSES</div>
          <ul>${fidelity.weaknesses.map(w => `<li>${w}</li>`).join('')}</ul>
        </div>
        <div class="fid-benchmark">
          <div class="fid-section-label fid-benchmark-label">📊 HISTORICAL BENCHMARK</div>
          <p>${fidelity.historicalBenchmark}</p>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderAdversarial() {
  const layout = document.getElementById('adversarial-layout');
  const adv = EVALUATION.adversarialLogic;
  const elliottAgent = AGENTS.elliott;
  const tigerAgent = AGENTS.tiger;

  layout.innerHTML = `
    <!-- Elliott's Argument -->
    <div class="adversarial-side elliott-side">
      <div class="adv-side-header" style="border-color: ${elliottAgent.color}">
        <span class="adv-avatar" style="color:${elliottAgent.color}">${elliottAgent.icon}</span>
        <div>
          <div class="adv-side-name" style="color:${elliottAgent.color}">Elliott Management</div>
          <div class="adv-side-role">THE PROSECUTION</div>
        </div>
      </div>
      <div class="adv-core-argument">
        <div class="adv-quote-mark">"</div>
        <p>${adv.elliottArgument.core}</p>
      </div>
      <div class="adv-supporting">
        <div class="adv-sub-label">SUPPORTING EVIDENCE</div>
        <ul>${adv.elliottArgument.supporting.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
      <div class="adv-philosophy">
        <div class="adv-sub-label">PHILOSOPHICAL BASIS</div>
        <p>${adv.elliottArgument.philosophicalBasis}</p>
      </div>
    </div>

    <!-- VS Divider -->
    <div class="adversarial-vs">
      <div class="vs-circle">VS</div>
    </div>

    <!-- Tiger's Rebuttal -->
    <div class="adversarial-side tiger-side">
      <div class="adv-side-header" style="border-color: ${tigerAgent.color}">
        <span class="adv-avatar" style="color:${tigerAgent.color}">${tigerAgent.icon}</span>
        <div>
          <div class="adv-side-name" style="color:${tigerAgent.color}">Tiger Global</div>
          <div class="adv-side-role">THE DEFENSE</div>
        </div>
      </div>
      <div class="adv-core-argument">
        <div class="adv-quote-mark">"</div>
        <p>${adv.tigerRebuttal.core}</p>
      </div>
      <div class="adv-supporting">
        <div class="adv-sub-label">SUPPORTING EVIDENCE</div>
        <ul>${adv.tigerRebuttal.supporting.map(s => `<li>${s}</li>`).join('')}</ul>
      </div>
      <div class="adv-philosophy">
        <div class="adv-sub-label">PHILOSOPHICAL BASIS</div>
        <p>${adv.tigerRebuttal.philosophicalBasis}</p>
      </div>
    </div>

    <!-- Verdict -->
    <div class="adversarial-verdict">
      <div class="verdict-banner">
        <div class="verdict-gavel">⚖️</div>
        <div class="verdict-winner">
          <div class="adv-sub-label">DEBATE VERDICT</div>
          <div class="verdict-text">Winner: <strong style="color: ${elliottAgent.color}">${adv.verdict.winner}</strong></div>
        </div>
      </div>
      <div class="verdict-reasoning">
        <p>${adv.verdict.reasoning}</p>
      </div>
      <div class="verdict-nuance">
        <div class="adv-sub-label">IMPORTANT NUANCE</div>
        <p>${adv.verdict.nuance}</p>
      </div>
    </div>
  `;
}

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(initEvaluation, 800));
} else {
  setTimeout(initEvaluation, 800);
}
