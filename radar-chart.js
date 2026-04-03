// ============================================
// STRATEGY DNA RADAR — Spider Chart Engine
// Scoring derived from Mirror Pod simulation
// ============================================

const RADAR_SCORES = {
  axes: ['Leverage', 'Tech Exposure', 'Inflation Sensitivity', 'Portfolio Turnover', 'Activism'],
  funds: {
    tiger: {
      scores: [3, 10, 2, 2, 1],
      rationale: [
        'Low leverage — concentrated equity L/S, no derivatives overlay',
        'All-in: GOOGL 11.2%, MSFT 8.9%, AMZN 7.8%, NVDA 6.9%, SE 6.6%',
        'Victim, not beneficiary — growth equities crushed by rate spikes',
        'Buy-and-hold "2030 compounders" — 54 positions, multi-year horizons',
        'Zero activism — pure stock picker, no governance engagement',
      ]
    },
    bridgewater: {
      scores: [5, 4, 10, 4, 1],
      rationale: [
        'Moderate leverage — risk parity framework, systematic rebalancing',
        'Indirect: SPY/IVV (broad index), some NVDA 2.6%, LRCX, CRM',
        'Maximum: GLD +300bp, TIPS, XOM/CVX, TLT shorts — entire thesis is inflation',
        'Systematic rebalancing across 1,040 positions — moderate turnover',
        'Zero activism — macro overlay, no company-level engagement',
      ]
    },
    elliott: {
      scores: [8, 1, 7, 3, 10],
      rationale: [
        'High leverage — concentrated activist stakes with options overlay',
        'Zero tech: TFPM (gold), PSX (refining), SU (oil), LUV (airlines)',
        'High: energy plays PSX/SU benefit from oil spike, TFPM from gold rally',
        'Patient activist — 34 positions held 1-3 years to force change',
        'Maximum: 13D filings, proxy fights, board challenges, "Corporate Gladiator"',
      ]
    },
    rentech: {
      scores: [9, 5, 3, 10, 1],
      rationale: [
        'Very high leverage — 3,000+ positions, systematic gross exposure',
        'Moderate: PLTR 2.4%, MU 1.3%, VRSN 1.1% — diversified across all sectors',
        'Negligible: market-neutral, "we don\'t have views on oil or geopolitics"',
        'Maximum: 72-hour avg holding period, 47 mean-reversion trades in a single day',
        'Zero: "Stories don\'t generate alpha. Statistical edge does."',
      ]
    },
    millennium: {
      scores: [9, 3, 4, 9, 1],
      rationale: [
        'Very high: $412B gross exposure across 330+ pods, 5,950 positions',
        'Low: IVV 4.2%, WMT 1.9%, IBIT 0.7% — directionally agnostic',
        'Moderate: rates overlays and steepeners, but strictly hedged',
        'Very high: constant rebalancing, kill switches, pod-level stop-losses',
        'Zero: "If a trade isn\'t hedged, you don\'t want it" — pure relative value',
      ]
    },
    oaktree: {
      scores: [3, 1, 8, 2, 4],
      rationale: [
        'Low-moderate — patient capital, $8B dry powder, low margin usage',
        'Zero: EXE (energy), TRMD (tankers), AU (gold), GTX, INDV — no tech',
        'High: EXE benefits from $120 oil, AU from $3,380 gold, distressed debt from rate spikes',
        'Very low: 40 positions, "buy when others panic, hold for recovery"',
        'Moderate: engages in restructuring/workout negotiations, not hostile activism',
      ]
    }
  }
};

// ============================================
// RADAR CHART — Canvas Renderer
// ============================================
class RadarChart {
  constructor(canvasId, containerId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.container = document.getElementById(containerId);
    this.selectedFunds = ['tiger', 'bridgewater', 'elliott', 'rentech', 'millennium', 'oaktree'];
    this.hoveredFund = null;
    this.animationProgress = 0;
    this.animationId = null;

    this.colors = {
      tiger: { fill: 'rgba(0,230,118,0.12)', stroke: '#00e676' },
      bridgewater: { fill: 'rgba(68,138,255,0.12)', stroke: '#448aff' },
      elliott: { fill: 'rgba(255,82,82,0.12)', stroke: '#ff5252' },
      rentech: { fill: 'rgba(224,64,251,0.12)', stroke: '#e040fb' },
      millennium: { fill: 'rgba(255,215,64,0.12)', stroke: '#ffd740' },
      oaktree: { fill: 'rgba(255,145,0,0.12)', stroke: '#ff9100' },
    };

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.canvas.addEventListener('mousemove', (e) => this.handleHover(e));
    this.canvas.addEventListener('mouseleave', () => { this.hoveredFund = null; this.draw(); });
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    const size = Math.min(rect.width - 48, 520);
    this.size = size;
    this.canvas.width = size * 2;
    this.canvas.height = size * 2;
    this.canvas.style.width = size + 'px';
    this.canvas.style.height = size + 'px';
    this.ctx.scale(2, 2);
    this.cx = size / 2;
    this.cy = size / 2;
    this.radius = size / 2 - 60;
    this.draw();
  }

  getPoint(axisIndex, value, radius) {
    const angle = (Math.PI * 2 * axisIndex / 5) - Math.PI / 2;
    const r = (value / 10) * (radius || this.radius);
    return { x: this.cx + r * Math.cos(angle), y: this.cy + r * Math.sin(angle) };
  }

  draw() {
    const ctx = this.ctx;
    const { cx, cy, radius, size } = this;
    ctx.clearRect(0, 0, size, size);

    // --- Grid rings ---
    for (let ring = 1; ring <= 5; ring++) {
      const r = (ring / 5) * radius;
      ctx.beginPath();
      for (let i = 0; i <= 5; i++) {
        const pt = this.getPoint(i % 5, ring * 2, radius);
        if (i === 0) ctx.moveTo(pt.x, pt.y); else ctx.lineTo(pt.x, pt.y);
      }
      ctx.closePath();
      ctx.strokeStyle = ring === 5 ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)';
      ctx.lineWidth = ring === 5 ? 1 : 0.5;
      ctx.stroke();

      // Ring labels (right side)
      if (ring < 5) {
        ctx.fillStyle = 'rgba(255,255,255,0.15)';
        ctx.font = '9px JetBrains Mono';
        ctx.fillText(ring * 2, cx + r + 4, cy - 2);
      }
    }

    // --- Axis lines + labels ---
    const axes = RADAR_SCORES.axes;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (let i = 0; i < 5; i++) {
      const edgePt = this.getPoint(i, 10, radius);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(edgePt.x, edgePt.y);
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Label
      const labelPt = this.getPoint(i, 10, radius + 28);
      ctx.fillStyle = '#8a92a6';
      ctx.font = '600 10px Inter';
      ctx.fillText(axes[i], labelPt.x, labelPt.y);
    }

    // --- Fund polygons ---
    const progress = this.animationProgress;
    this.selectedFunds.forEach(fundId => {
      const data = RADAR_SCORES.funds[fundId];
      const color = this.colors[fundId];
      const isHovered = this.hoveredFund === fundId;

      ctx.beginPath();
      for (let i = 0; i <= 5; i++) {
        const val = data.scores[i % 5] * progress;
        const pt = this.getPoint(i % 5, val, radius);
        if (i === 0) ctx.moveTo(pt.x, pt.y); else ctx.lineTo(pt.x, pt.y);
      }
      ctx.closePath();

      // Fill
      ctx.fillStyle = isHovered ? color.fill.replace('0.12', '0.25') : color.fill;
      ctx.fill();

      // Stroke
      ctx.strokeStyle = color.stroke;
      ctx.lineWidth = isHovered ? 2.5 : 1.5;
      ctx.globalAlpha = isHovered ? 1 : 0.7;
      ctx.stroke();
      ctx.globalAlpha = 1;

      // Data points
      if (progress >= 1) {
        for (let i = 0; i < 5; i++) {
          const pt = this.getPoint(i, data.scores[i], radius);
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, isHovered ? 4 : 3, 0, Math.PI * 2);
          ctx.fillStyle = color.stroke;
          ctx.fill();

          // Value label on hover
          if (isHovered) {
            ctx.fillStyle = '#fff';
            ctx.font = '700 10px JetBrains Mono';
            const angle = (Math.PI * 2 * i / 5) - Math.PI / 2;
            const offsetX = Math.cos(angle) * 14;
            const offsetY = Math.sin(angle) * 14;
            ctx.fillText(data.scores[i], pt.x + offsetX, pt.y + offsetY);
          }
        }
      }
    });
  }

  handleHover(e) {
    const rect = this.canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    // Check which fund polygon the mouse is closest to
    let closest = null;
    let minDist = Infinity;

    this.selectedFunds.forEach(fundId => {
      const data = RADAR_SCORES.funds[fundId];
      let totalDist = 0;
      for (let i = 0; i < 5; i++) {
        const pt = this.getPoint(i, data.scores[i], this.radius);
        totalDist += Math.hypot(pt.x - mx, pt.y - my);
      }
      const avg = totalDist / 5;
      if (avg < minDist) { minDist = avg; closest = fundId; }
    });

    if (minDist < this.radius * 1.2) {
      this.hoveredFund = closest;
    } else {
      this.hoveredFund = null;
    }
    this.draw();
  }

  animate() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    this.animationProgress = 0;
    const start = performance.now();
    const duration = 1200;

    const step = (now) => {
      const elapsed = now - start;
      this.animationProgress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      this.animationProgress = 1 - Math.pow(1 - this.animationProgress, 3);
      this.draw();
      if (this.animationProgress < 1) {
        this.animationId = requestAnimationFrame(step);
      }
    };
    this.animationId = requestAnimationFrame(step);
  }

  toggleFund(fundId) {
    const idx = this.selectedFunds.indexOf(fundId);
    if (idx >= 0) {
      if (this.selectedFunds.length <= 1) return; // Keep at least 1
      this.selectedFunds.splice(idx, 1);
    } else {
      this.selectedFunds.push(fundId);
    }
    this.draw();
  }
}

// ============================================
// RADAR SECTION RENDERER
// ============================================
function initRadarSection() {
  const section = document.createElement('section');
  section.className = 'radar-section';
  section.id = 'radar-section';

  const fundIds = ['tiger', 'bridgewater', 'elliott', 'rentech', 'millennium', 'oaktree'];

  section.innerHTML = `
    <div class="section-label">
      <span class="label-icon" style="color: var(--rentech-primary)">◆</span>
      <span>STRATEGY DNA — RADAR ANALYSIS</span>
      <div class="label-line" style="background: rgba(224,64,251,0.3)"></div>
    </div>

    <div class="radar-layout">
      <!-- Left: Chart -->
      <div class="radar-chart-panel">
        <div class="radar-chart-header">
          <h3>Multi-Axis Strategy Comparison</h3>
          <p>Hover over the chart to inspect individual fund profiles. Toggle funds below.</p>
        </div>
        <div class="radar-toggles" id="radar-toggles">
          ${fundIds.map(id => {
            const agent = AGENTS[id];
            return `<button class="radar-toggle active" data-fund="${id}" style="--agent-color: ${agent.color}">
              <span class="rt-dot"></span>
              <span class="rt-label">${agent.icon}</span>
            </button>`;
          }).join('')}
        </div>
        <div class="radar-canvas-wrap">
          <canvas id="radar-canvas"></canvas>
        </div>
      </div>

      <!-- Right: Score Table -->
      <div class="radar-table-panel">
        <div class="radar-table-header">
          <h3>Scoring Matrix</h3>
          <p>Derived from 13F filings, crisis memos, and debate analysis</p>
        </div>
        <div class="score-table-wrap">
          <table class="score-table" id="score-table">
            <thead>
              <tr>
                <th class="st-axis-header">AXIS</th>
                ${fundIds.map(id => `<th class="st-fund-header" style="color: ${AGENTS[id].color}">${AGENTS[id].icon}</th>`).join('')}
              </tr>
            </thead>
            <tbody id="score-table-body">
            </tbody>
          </table>
        </div>
        <div class="score-export" id="score-export">
          <button class="export-btn" id="export-csv-btn">📄 Export CSV</button>
          <button class="export-btn" id="export-json-btn">📋 Copy JSON</button>
        </div>
      </div>
    </div>

    <!-- Rationale Cards -->
    <div class="rationale-section">
      <div class="rationale-header">
        <h4>Scoring Rationale — Click to Expand</h4>
      </div>
      <div class="rationale-grid" id="rationale-grid"></div>
    </div>
  `;

  // Insert after Agentic 13F, before debate section
  const agentic13f = document.getElementById('agentic-13f-section');
  const debateSection = document.getElementById('debate-section');
  const insertRef = debateSection || (agentic13f ? agentic13f.nextSibling : null);
  if (insertRef) {
    insertRef.parentNode.insertBefore(section, insertRef);
  } else {
    document.getElementById('main-content').appendChild(section);
  }

  // --- Render Score Table ---
  const tbody = document.getElementById('score-table-body');
  RADAR_SCORES.axes.forEach((axis, axIdx) => {
    const row = document.createElement('tr');
    const scores = fundIds.map(id => RADAR_SCORES.funds[id].scores[axIdx]);
    const maxScore = Math.max(...scores);

    row.innerHTML = `
      <td class="st-axis-name">${axis}</td>
      ${fundIds.map((id, fIdx) => {
        const score = scores[fIdx];
        const isMax = score === maxScore;
        const heatClass = score >= 8 ? 'heat-high' : score >= 5 ? 'heat-med' : 'heat-low';
        return `<td class="st-score ${heatClass} ${isMax ? 'st-max' : ''}">${score}</td>`;
      }).join('')}
    `;
    tbody.appendChild(row);
  });

  // Total row
  const totalRow = document.createElement('tr');
  totalRow.className = 'st-total-row';
  const totals = fundIds.map(id => RADAR_SCORES.funds[id].scores.reduce((a, b) => a + b, 0));
  const maxTotal = Math.max(...totals);
  totalRow.innerHTML = `
    <td class="st-axis-name st-total-label">TOTAL</td>
    ${totals.map((t, i) => `<td class="st-score st-total ${t === maxTotal ? 'st-max' : ''}">${t}</td>`).join('')}
  `;
  tbody.appendChild(totalRow);

  // --- Render Rationale Cards ---
  const rationaleGrid = document.getElementById('rationale-grid');
  fundIds.forEach(id => {
    const agent = AGENTS[id];
    const data = RADAR_SCORES.funds[id];
    const card = document.createElement('div');
    card.className = 'rationale-card collapsed';
    card.dataset.agent = id;
    card.innerHTML = `
      <div class="rationale-card-header" onclick="this.parentElement.classList.toggle('collapsed')">
        <div class="rc-agent">
          <span class="rc-avatar" style="color: ${agent.color}">${agent.icon}</span>
          <span class="rc-name">${agent.name}</span>
          <span class="rc-total">${data.scores.reduce((a, b) => a + b, 0)}/50</span>
        </div>
        <div class="rc-chevron">▾</div>
      </div>
      <div class="rationale-card-body">
        ${RADAR_SCORES.axes.map((axis, i) => `
          <div class="rc-row">
            <div class="rc-axis">${axis}</div>
            <div class="rc-score-badge" style="background: ${agent.color}15; color: ${agent.color}; border-color: ${agent.color}33">${data.scores[i]}/10</div>
            <div class="rc-rationale">${data.rationale[i]}</div>
          </div>
        `).join('')}
      </div>
    `;
    rationaleGrid.appendChild(card);
  });

  // --- Initialize Radar Chart ---
  const radar = new RadarChart('radar-canvas', 'radar-toggles');
  setTimeout(() => radar.animate(), 300);

  // --- Toggle Buttons ---
  document.querySelectorAll('.radar-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const fundId = btn.dataset.fund;
      btn.classList.toggle('active');
      radar.toggleFund(fundId);
    });
  });

  // --- Export CSV ---
  document.getElementById('export-csv-btn').addEventListener('click', () => {
    let csv = 'Axis,' + fundIds.map(id => AGENTS[id].name).join(',') + '\n';
    RADAR_SCORES.axes.forEach((axis, i) => {
      csv += axis + ',' + fundIds.map(id => RADAR_SCORES.funds[id].scores[i]).join(',') + '\n';
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'strategy_dna_radar_scores.csv';
    a.click();
    URL.revokeObjectURL(url);
  });

  // --- Export JSON ---
  document.getElementById('export-json-btn').addEventListener('click', () => {
    const exportData = {
      chartType: 'radar',
      labels: RADAR_SCORES.axes,
      datasets: fundIds.map(id => ({
        label: AGENTS[id].name,
        data: RADAR_SCORES.funds[id].scores,
        borderColor: radar.colors[id].stroke,
        backgroundColor: radar.colors[id].fill,
      }))
    };
    navigator.clipboard.writeText(JSON.stringify(exportData, null, 2));
    const btn = document.getElementById('export-json-btn');
    btn.textContent = '✅ Copied!';
    setTimeout(() => btn.textContent = '📋 Copy JSON', 2000);
  });
}

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(initRadarSection, 600));
} else {
  setTimeout(initRadarSection, 600);
}
