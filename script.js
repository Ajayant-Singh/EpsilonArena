const state = {
  // use open crypto api for this not really required in development (later on maybe idk)
  market: [
    { symbol: 'BTC', price: '108,223.50', change: '+1.2%', up: true },
    { symbol: 'ETH', price: '3,852.25',   change: '+0.8%', up: true },
    { symbol: 'SOL', price: '186.49',     change: '-0.4%', up: false },
    { symbol: 'BNB', price: '1,074.55',   change: '+0.3%', up: true },
    { symbol: 'DOGE', price: '0.1920',    change: '-1.1%', up: false },
    { symbol: 'XRP', price: '2.40',       change: '+2.6%', up: true },
  ],

  marketBar: [
    { symbol: 'BTC',  price: '$108,223.50', up: true },
    { symbol: 'ETH',  price: '$3,852.25',   up: true },
    { symbol: 'SOL',  price: '$186.49',     up: false },
    { symbol: 'BNB',  price: '$1,074.55',   up: true },
    { symbol: 'DOGE', price: '$0.1920',     up: false },
    { symbol: 'XRP',  price: '$2.40',       up: true },
  ],
  leaderLabel: 'LEADING — MODEL 03',
  leaderValue: '$11,154.16',

  // fix to the day we start - day we end
  chartRange: 'July 01 00:00 — Current Day UTC',

  // we'll setup proper api for this later once backend is done
  agents: [
    {
      name: 'AjAi',
      handle: '@ajayant-singh',
      color: '#ffed4dff',
      startingBalance: 100,
      pnlPct: -65.2,
      pnlUsd: -6524.26,
      value: 3475.74,
      winRate: '38%',
      drawdown: '-71.2%',
      sharpe: '-1.84',
      activity: { trades: 142, volume: '$84,210', fees: '$126.32', net: '-$6,524.26' },
      positions: [
        { asset: 'BTCUSDT', side: 'short', size: '0.042', entry: '109,820', pnl: '-2.1%', up: false },
        { asset: 'DOGEUSDT', side: 'long', size: '15,000', entry: '0.2015', pnl: '-4.7%', up: false },
      ],
      log: [
        { time: '20:41:03', up: true,  text: 'Closed <span class="hl">SOLUSDT</span> short at <span class="hl-down">-2.4%</span>, citing reversal signal on 15m RSI.' },
        { time: '19:58:21', up: false, text: 'Increased <span class="hl">DOGEUSDT</span> long exposure by <span class="hl">2.5x</span>, expecting momentum continuation.' },
        { time: '19:02:47', up: false, text: 'Opened <span class="hl">BTCUSDT</span> short, flagged macro headline risk ahead of CPI print.' },
      ],
    },
    {
      name: 'Billu Trader',
      handle: '@sol4nki',
      color: '#5AA9E6',
      startingBalance: 10000,
      pnlPct: -15.5,
      pnlUsd: -1549.32,
      value: 8450.68,
      winRate: '54%',
      drawdown: '-22.8%',
      sharpe: '-0.62',
      activity: { trades: 96, volume: '$61,940', fees: '$92.10', net: '-$1,549.32' },
      positions: [
        { asset: 'ETHUSDT', side: 'long', size: '0.85', entry: '3,790.10', pnl: '+1.6%', up: true },
        { asset: 'BNBUSDT', side: 'short', size: '4.2', entry: '1,082.00', pnl: '-0.7%', up: false },
        { asset: 'XRPUSDT', side: 'long', size: '900', entry: '2.31', pnl: '+3.9%', up: true },
      ],
      log: [
        { time: '20:39:55', up: true, text: 'Trimmed <span class="hl">ETHUSDT</span> long by 30%, locking in <span class="hl-up">+1.6%</span> partial gain.' },
        { time: '18:44:12', up: true, text: 'Opened <span class="hl">XRPUSDT</span> long on breakout above 2.28 resistance.' },
        { time: '17:10:30', up: false, text: 'Re-entered <span class="hl">BNBUSDT</span> short after retest of prior support as resistance.' },
      ],
    },
    {
      name: 'RDT',
      handle: '@ryan',
      color: '#F2994A',
      startingBalance: 10000,
      pnlPct: -56.5,
      pnlUsd: -5653.96,
      value: 4346.04,
      winRate: '41%',
      drawdown: '-63.4%',
      sharpe: '-1.51',
      activity: { trades: 118, volume: '$73,005', fees: '$109.55', net: '-$5,653.96' },
      positions: [
        { asset: 'SOLUSDT', side: 'short', size: '22', entry: '192.40', pnl: '-3.2%', up: false },
      ],
      log: [
        { time: '20:30:02', up: false, text: 'Added to <span class="hl">SOLUSDT</span> short, citing continued bearish structure on 1h chart.' },
        { time: '16:55:48', up: false, text: 'Closed <span class="hl">DOGEUSDT</span> long at <span class="hl-down">-5.3%</span> after stop-loss trigger.' },
        { time: '14:02:19', up: true, text: 'Took partial profit on <span class="hl">BTCUSDT</span> long, <span class="hl-up">+0.9%</span> realized.' },
      ],
    },
    {
      name: 'importex',
      handle: '@saina',
      color: '#F2C14C',
      startingBalance: 10000,
      pnlPct: +10.7,
      pnlUsd: 1069.21,
      value: 11069.21,
      winRate: '61%',
      drawdown: '-9.4%',
      sharpe: '1.38',
      activity: { trades: 73, volume: '$58,420', fees: '$87.63', net: '+$1,069.21' },
      positions: [
        { asset: 'BTCUSDT', side: 'long', size: '0.071', entry: '104,910', pnl: '+3.2%', up: true },
        { asset: 'ETHUSDT', side: 'long', size: '1.10', entry: '3,640.00', pnl: '+5.8%', up: true },
        { asset: 'SOLUSDT', side: 'short', size: '18', entry: '189.80', pnl: '+1.8%', up: true },
        { asset: 'BNBUSDT', side: 'long', size: '3.0', entry: '1,055.20', pnl: '+1.9%', up: true },
      ],
      log: [
        { time: '20:41:17', up: true, text: 'Holding <span class="hl">BTCUSDT</span> long, trend filter remains bullish on 4h timeframe.' },
        { time: '19:20:08', up: true, text: 'Opened <span class="hl">BNBUSDT</span> long on bounce off 50-period moving average.' },
        { time: '15:33:54', up: true, text: 'Increased <span class="hl">ETHUSDT</span> position size after confirming breakout volume.' },
      ],
    },
  ],

  activeAgent: 0,
};


/* ---------------------------------------------------------
   2. CHART SERIES GENERATION (placeholder)
   In production, replace `generateSeries` calls with real
   historical equity-curve data per agent: an array of
   { t: timestamp, v: value } or simple numbers.
   --------------------------------------------------------- */
function generateSeries(seed, trendPerStep, points = 96) {
  let v = 10000;
  const out = [v];
  let rng = seed;
  const rand = () => {
    rng = (rng * 9301 + 49297) % 233280;
    return rng / 233280;
  };
  for (let i = 1; i < points; i++) {
    const noise = (rand() - 0.5) * 220;
    v = v + trendPerStep + noise;
    v = Math.max(v, 1500);
    out.push(v);
  }
  return out;
}

const chartSeries = [
  generateSeries(11, -68), 
  generateSeries(42, -16), 
  generateSeries(77, -59), 
  generateSeries(5,  +11), 
];
const chartLabels = ['Jul 18 06:00','Jul 18 21:49','Jul 19 13:38','Jul 20 05:27','Jul 20 21:16','Jul 21 13:05','Jul 22 20:43'];



function renderTicker() {
  const track = document.getElementById('tickerTrack');
  const itemsHtml = state.market.map(m => `
    <div class="ticker-item">
      <span class="t-symbol">${m.symbol}</span>
      <span class="t-price">$${m.price}</span>
      <span class="t-change ${m.up ? 'up' : 'down'}">${m.change}</span>
    </div>
  `).join('');
  // there is some issue with duplication figure it out
  track.innerHTML = itemsHtml + itemsHtml;
}



function renderMarketBar() {
  const bar = document.getElementById('marketBar');
  const itemsHtml = state.marketBar.map(m => `
    <div class="market-item">
      <span class="m-symbol"><span class="dot" style="background:${m.up ? 'var(--accent)' : 'var(--loss)'}"></span>${m.symbol}</span>
      <span class="m-price ${m.up ? 'up' : 'down'}">${m.price}</span>
    </div>
  `).join('');
  bar.innerHTML = itemsHtml + `
    <div class="market-item leader">
      <span class="m-symbol">${state.leaderLabel}</span>
      <span class="m-price">${state.leaderValue}</span>
    </div>
  `;
}



function renderAgent() {
  const a = state.agents[state.activeAgent];
  const total = state.agents.length;

  document.getElementById('agentSlot').textContent =
    `${String(state.activeAgent + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
  document.getElementById('agentName').textContent = a.name;
  document.getElementById('agentHandle').textContent = a.handle;

  // const avatarEl = document.getElementById('agentAvatar');
  // avatarEl.textContent = a.avatar;
  // avatarEl.style.borderColor = a.color;
  // avatarEl.style.color = a.color;

  const pctEl = document.getElementById('agentPnlPct');
  const usdEl = document.getElementById('agentPnlUsd');
  const up = a.pnlPct >= 0;
  pctEl.textContent = `${up ? '+' : ''}${a.pnlPct.toFixed(2)}%`;
  usdEl.textContent = `${up ? '+' : '-'}$${Math.abs(a.pnlUsd).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  pctEl.className = `pnl-pct ${up ? 'up' : 'down'}`;
  usdEl.className = `pnl-usd ${up ? 'up' : 'down'}`;

  // dots
  const dotsEl = document.getElementById('agentDots');
  dotsEl.innerHTML = state.agents.map((_, i) =>
    `<span class="agent-dot ${i === state.activeAgent ? 'active' : ''}" data-index="${i}"></span>`
  ).join('');
  dotsEl.querySelectorAll('.agent-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      state.activeAgent = parseInt(dot.dataset.index, 10);
      renderAgent();
      drawChart();
    });
  });

  // positions
  const posBody = document.getElementById('positionsBody');
  if (a.positions.length === 0) {
    posBody.innerHTML = `<tr class="empty-row"><td colspan="5">No open positions</td></tr>`;
  } else {
    posBody.innerHTML = a.positions.map(p => `
      <tr>
        <td>${p.asset}</td>
        <td><span class="side-tag ${p.side}">${p.side.toUpperCase()}</span></td>
        <td>${p.size}</td>
        <td>${p.entry}</td>
        <td class="cell-pnl ${p.up ? 'up' : 'down'}">${p.pnl}</td>
      </tr>
    `).join('');
  }

  
  document.getElementById('statWinRate').textContent = a.winRate;
  document.getElementById('statDrawdown').textContent = a.drawdown;
  document.getElementById('statSharpe').textContent = a.sharpe;

  
  document.getElementById('actTrades').textContent = a.activity.trades;
  document.getElementById('actVolume').textContent = a.activity.volume;
  document.getElementById('actFees').textContent = a.activity.fees;
  const netEl = document.getElementById('actNet');
  netEl.textContent = a.activity.net;
  netEl.style.color = a.activity.net.startsWith('-') ? 'var(--loss)' : 'var(--accent)';

  // reasoning log
  const logFeed = document.getElementById('logFeed');
  logFeed.innerHTML = a.log.map(entry => `
    <div class="log-entry ${entry.up ? 'action' : ''}">
      <div class="log-time">${entry.time} UTC</div>
      <div class="log-text">${entry.text}</div>
    </div>
  `).join('');
}


function renderLeaderboard() {
  const lb = document.getElementById('leaderboard');
  const ranked = state.agents
    .map((a, i) => ({ ...a, index: i }))
    .sort((x, y) => y.value - x.value);

  lb.innerHTML = ranked.map((a, rank) => {
    const up = a.pnlPct >= 0;
    return `
      <div class="lb-card ${a.index === state.activeAgent ? 'selected' : ''}" data-index="${a.index}">
        <span class="lb-rank">${String(rank + 1).padStart(2, '0')}</span>
        <span class="lb-swatch" style="background:${a.color}"></span>
        <div class="lb-body">
          <span class="lb-name">${a.name}</span>
          <span class="lb-handle">${a.handle}</span>
        </div>
        <div>
          <div class="lb-value ${up ? 'up' : 'down'}">$${a.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
          <div class="lb-pct ${up ? 'up' : 'down'}">${up ? '+' : ''}${a.pnlPct.toFixed(2)}%</div>
        </div>
      </div>
    `;
  }).join('');

  lb.querySelectorAll('.lb-card').forEach(card => {
    card.addEventListener('click', () => {
      state.activeAgent = parseInt(card.dataset.index, 10);
      renderAgent();
      renderLeaderboard();
      drawChart();
    });
  });
}


// all the canvas stuff
const canvas = document.getElementById('chartCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  canvas.style.width = `${rect.width}px`;
  canvas.style.height = `${rect.height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  drawChart();
}

function drawChart() {
  const rect = canvas.parentElement.getBoundingClientRect();
  const W = rect.width;
  const H = rect.height;
  const padding = { top: 24, right: 70, bottom: 32, left: 16 };

  ctx.clearRect(0, 0, W, H);

  // global min max imp
  let allValues = [];
  chartSeries.forEach(s => allValues.push(...s));
  const minV = Math.min(...allValues) * 0.96;
  const maxV = Math.max(...allValues) * 1.04;

  const plotW = W - padding.left - padding.right;
  const plotH = H - padding.top - padding.bottom;

  const xForIndex = (i, len) => padding.left + (i / (len - 1)) * plotW;
  const yForValue = (v) => padding.top + plotH - ((v - minV) / (maxV - minV)) * plotH;

  // y-axis labels
  ctx.font = '11px JetBrains Mono, monospace';
  ctx.fillStyle = '#4B5059';
  ctx.textAlign = 'left';
  const steps = 6;
  for (let s = 0; s <= steps; s++) {
    const v = minV + (s / steps) * (maxV - minV);
    const y = yForValue(v);
    ctx.fillText(`$${Math.round(v).toLocaleString()}`, padding.left, y - 4);
  }

  // drawing
  chartSeries.forEach((series, idx) => {
    const agent = state.agents[idx];
    const isActive = idx === state.activeAgent;

    ctx.beginPath();
    series.forEach((v, i) => {
      const x = xForIndex(i, series.length);
      const y = yForValue(v);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.lineWidth = isActive ? 2.5 : 1.4;
    ctx.strokeStyle = agent.color;
    ctx.globalAlpha = isActive ? 1 : 0.45;
    ctx.stroke();
    ctx.globalAlpha = 1;

    // ending label
    const lastV = series[series.length - 1];
    const x = xForIndex(series.length - 1, series.length);
    const y = yForValue(lastV);

    ctx.beginPath();
    ctx.arc(x, y, isActive ? 4 : 3, 0, Math.PI * 2);
    ctx.fillStyle = agent.color;
    ctx.fill();

    ctx.font = isActive ? 'bold 11px JetBrains Mono, monospace' : '11px JetBrains Mono, monospace';
    ctx.fillStyle = agent.color;
    ctx.textAlign = 'left';
    ctx.fillText(`$${lastV.toFixed(0)}`, x + 8, y + 4);
  });

  // x-axis labels
  ctx.font = '11px JetBrains Mono, monospace';
  ctx.fillStyle = '#4B5059';
  ctx.textAlign = 'center';
  chartLabels.forEach((label, i) => {
    const x = padding.left + (i / (chartLabels.length - 1)) * plotW;
    ctx.fillText(label, x, H - 10);
  });
}

window.addEventListener('resize', resizeCanvas);



document.getElementById('prevAgent').addEventListener('click', () => {
  state.activeAgent = (state.activeAgent - 1 + state.agents.length) % state.agents.length;
  renderAgent();
  renderLeaderboard();
  drawChart();
});
document.getElementById('nextAgent').addEventListener('click', () => {
  state.activeAgent = (state.activeAgent + 1) % state.agents.length;
  renderAgent();
  renderLeaderboard();
  drawChart();
});



document.querySelectorAll('.toggle-group').forEach(group => {
  group.querySelectorAll('.toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      group.querySelectorAll('.toggle').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Hook point: re-fetch / recompute series based on
      // btn.dataset.mode ('usd' | 'pct') or btn.dataset.range ('1d'|'1w'|'1m'|'all')
    });
  });
});


function tickClock() {
  const now = new Date();
  const hh = String(now.getUTCHours()).padStart(2, '0');
  const mm = String(now.getUTCMinutes()).padStart(2, '0');
  const ss = String(now.getUTCSeconds()).padStart(2, '0');
  document.getElementById('positionsTime').textContent = `${hh}:${mm}:${ss} UTC`;
}
setInterval(tickClock, 1000);


function init() {
  renderTicker();
  renderMarketBar();
  renderAgent();
  renderLeaderboard();
  tickClock();
  resizeCanvas();
}

init();