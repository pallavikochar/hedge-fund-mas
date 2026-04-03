# 🏦 Nexus Capital — Multi-Agent Hedge Fund Command Center

**FIN 580 | University of Illinois at Urbana-Champaign | Spring 2026**

A multi-agent system (MAS) simulation where six AI agents — each modeled after a distinct hedge fund archetype — debate, trade, and stress-test portfolios in real time.

## 🎯 Live Dashboard

> **[View Live Dashboard →](https://pallavikochar.github.io/hedge-fund-mas/)**

## 🏗️ Architecture

| Agent | Archetype | Real-World Model |
|---|---|---|
| 🟢 Tiger Global | Equity Long/Short | Chase Coleman |
| 🔵 Bridgewater | Global Macro | Ray Dalio |
| 🔴 Elliott Mgmt | Event-Driven / Activist | Paul Singer |
| 🟣 Renaissance Tech | Quantitative | Jim Simons† / Peter Brown |
| 🟡 Millennium Mgmt | Relative Value | Israel Englander |
| 🟠 Oaktree Capital | Distressed Debt | Howard Marks |

## 📊 Features

- **Agent Cards** — Real-time 13F holdings, strategy DNA, and conviction levels
- **Debate Engine** — Keyword-driven adversarial debates between agents
- **Mirror Pod (Crisis Simulation)** — $120 Oil / 5.2% Yield shock scenario with positioning memos
- **Agentic 13F** — Cross-agent consensus analysis: Crowded Longs, Divergent Alpha, and 5 high-conviction trades
- **Strategy DNA Radar** — Interactive spider chart scoring 6 funds across 5 axes (Leverage, Tech, Inflation, Turnover, Activism)
- **Simulation Evaluation** — Fidelity scoring (0-100), adversarial logic analysis, and executive summary

## 🚀 Run Locally

```bash
# Clone the repo
git clone https://github.com/pallavikochar/hedge-fund-mas.git
cd hedge-fund-mas

# Serve locally (any static file server works)
python3 -m http.server 8765

# Open http://localhost:8765
```

## 📁 Project Structure

```
hedge-fund-mas/
├── index.html          # Main dashboard structure
├── index.css           # Design system (premium dark theme)
├── app.js              # Core MAS: agent personas, debate engine, UI
├── mirror-pod.js       # Crisis scenario engine + positioning memos
├── mirror-pod.css      # Crisis section styles
├── agentic-13f.js      # Cross-agent position analysis
├── agentic-13f.css     # 13F section styles
├── radar-chart.js      # Spider chart + scoring matrix
├── radar-chart.css     # Radar section styles
├── evaluation.js       # Fidelity scoring + adversarial analysis
├── evaluation.css      # Evaluation section styles
└── README.md
```

## 🧪 Simulation Scenario

> **Catalyst:** Geopolitical shock → Oil $120/bbl, 10Y Yield 5.2%, S&P -4%

Each agent produces a **Positioning Memo** (Buy/Sell/Hedge) and defends it in an adversarial debate. The system synthesizes consensus into an **Agentic 13F** portfolio.

**Simulation Verdict:** ✅ *FRONT-RAN INSTITUTIONAL CONSENSUS SUCCESSFULLY*
**Average Fidelity:** 87/100 (Grade: A)

## ⚠️ Disclaimer

This project is for **academic purposes only** (FIN 580 coursework). It does not constitute investment advice. All 13F data sourced from SEC EDGAR filings (Q4 2025). Crisis scenarios and agent positioning are simulated.

---

*Built with the Antigravity platform | April 2026*
