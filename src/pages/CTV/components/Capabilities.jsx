import { useEffect, useRef } from 'react';

const CAPS = [
  {
    number: '01 —',
    title: 'Invalid Traffic Detection',
    desc: 'We identify bot activity, spoofed inventory, and non-human traffic patterns across CTV supply paths — before they distort your campaign data.',
  },
  {
    number: '02 —',
    title: 'Campaign Delivery Analysis',
    desc: 'Granular examination of where, when, and how your ads actually delivered — reconciled against what was reported.',
  },
  {
    number: '03 —',
    title: 'Signal & Data Quality',
    desc: 'Assessment of the data signals flowing through your measurement stack — identifying gaps, drift, and degradation before they compound.',
  },
  {
    number: '04 —',
    title: 'Decision-Grade Reporting',
    desc: 'Structured analysis reports built for media leads, CFOs, and platform teams — clear findings, clear recommendations, no ambiguity.',
  },
];

const CELLS = 48;

function IVTPanel() {
  const gridRef = useRef(null);

  useEffect(() => {
    function make() {
      if (!gridRef.current) return;
      gridRef.current.innerHTML = '';
      for (let i = 0; i < CELLS; i++) {
        const c = document.createElement('div');
        const r = Math.random();
        c.className = 'ivt-cell ' + (r < 0.65 ? 'valid' : r < 0.82 ? 'scanning' : 'invalid');
        gridRef.current.appendChild(c);
      }
    }
    make();
    const timer = setInterval(() => {
      if (!gridRef.current) return;
      const cells = gridRef.current.querySelectorAll('.ivt-cell');
      const i = Math.floor(Math.random() * cells.length);
      const r = Math.random();
      cells[i].className = 'ivt-cell ' + (r < 0.65 ? 'valid' : r < 0.82 ? 'scanning' : 'invalid');
    }, 120);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cap-panel active" id="panel-0">
      <div className="panel-label">// TRAFFIC CLASSIFICATION — LIVE SCAN</div>
      <div className="ivt-grid" ref={gridRef} />
    </div>
  );
}

function DeliveryPanel() {
  const rows = [
    { label: 'IMPRESSIONS', pct: 88, color: 'linear-gradient(to right,rgba(42,255,157,0.4),rgba(42,255,157,0.7))' },
    { label: 'COMPLETION', pct: 73, color: 'linear-gradient(to right,rgba(56,182,255,0.4),rgba(56,182,255,0.7))' },
    { label: 'VERIFIED', pct: 61, color: 'linear-gradient(to right,rgba(42,255,157,0.4),rgba(42,255,157,0.7))' },
    { label: 'DISCREPANCY', pct: 27, color: 'linear-gradient(to right,rgba(255,80,80,0.4),rgba(255,80,80,0.6))', negative: true },
  ];
  return (
    <div className="cap-panel" id="panel-1">
      <div className="panel-label">// DELIVERY RECONCILIATION</div>
      <div className="delivery-rows">
        {rows.map(r => (
          <div key={r.label} className="delivery-row">
            <span className="delivery-label">{r.label}</span>
            <div className="delivery-bar-bg">
              <div className="delivery-bar-fill" style={{ width: `${r.pct}%`, background: r.color }} />
            </div>
            <span className="delivery-val" style={r.negative ? { color: 'rgba(255,80,80,0.8)' } : {}}>
              {r.negative ? `−${r.pct}%` : `${r.pct}%`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SignalPanel() {
  const signals = [
    { icon: '✓', bg: 'rgba(42,255,157,0.1)', name: 'Device fingerprint consistency', status: 'VERIFIED — no drift detected', color: 'var(--accent-g)' },
    { icon: '⚠', bg: 'rgba(255,180,50,0.1)', name: 'IP geo-match rate', status: 'DEGRADED — 14% mismatch', color: 'rgba(255,180,50,0.9)' },
    { icon: '✕', bg: 'rgba(255,80,80,0.1)', name: 'Timestamp sequence integrity', status: 'ANOMALY — non-linear events', color: 'rgba(255,80,80,0.8)' },
    { icon: '✓', bg: 'rgba(42,255,157,0.1)', name: 'Frequency cap enforcement', status: 'VERIFIED', color: 'var(--accent-g)' },
  ];
  return (
    <div className="cap-panel" id="panel-2">
      <div className="panel-label">// SIGNAL INTEGRITY AUDIT</div>
      <div className="signal-quality">
        {signals.map(s => (
          <div key={s.name} className="sq-row">
            <div className="sq-icon" style={{ background: s.bg }}>{s.icon}</div>
            <div className="sq-content">
              <div className="sq-name">{s.name}</div>
              <div className="sq-status" style={{ color: s.color }}>{s.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DecisionPanel() {
  const steps = [
    { tag: 'FINDING', tagColor: 'var(--accent-g)', label: '24.3% of measured impressions flagged as IVT', badgeBg: 'rgba(255,80,80,0.1)', badgeColor: 'rgba(255,80,80,0.8)', badge: 'HIGH RISK' },
    { tag: 'IMPACT', tagColor: 'rgba(56,182,255,0.8)', label: 'Effective CPM inflated by est. $4.20', badgeBg: 'rgba(255,180,50,0.1)', badgeColor: 'rgba(255,180,50,0.8)', badge: 'MATERIAL' },
    { tag: 'ACTION', tagColor: 'var(--accent-g)', label: 'Recommend excluding 3 SSP paths from next flight', badgeBg: 'rgba(42,255,157,0.1)', badgeColor: 'var(--accent-g)', badge: 'CLEAR' },
  ];
  return (
    <div className="cap-panel" id="panel-3">
      <div className="panel-label">// ANALYSIS OUTPUT — SUMMARY</div>
      <div className="decision-flow">
        {steps.map(s => (
          <div key={s.tag} className="df-step">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: s.tagColor }}>{s.tag}</span>
            <span className="df-label">{s.label}</span>
            <span className="df-badge" style={{ background: s.badgeBg, color: s.badgeColor }}>{s.badge}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const panels = [IVTPanel, DeliveryPanel, SignalPanel, DecisionPanel];

export default function Capabilities() {
  const wrapperRef = useRef(null);
  const activeRef = useRef(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    function update(progress) {
      const idx = Math.min(Math.floor(progress * 4), 3);
      if (idx === activeRef.current) return;
      activeRef.current = idx;
      document.querySelectorAll('.cap-item').forEach((el, i) => el.classList.toggle('active', i === idx));
      document.querySelectorAll('.cap-panel').forEach((el, i) => el.classList.toggle('active', i === idx));
    }

    function onScroll() {
      const rect = wrapper.getBoundingClientRect();
      const total = wrapper.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      if (scrolled >= 0 && scrolled <= total) update(scrolled / total);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    update(0);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div id="capabilities-wrapper" ref={wrapperRef}>
      <div id="capabilities-sticky">
        <div className="cap-layout">
          <div className="cap-nav">
            {CAPS.map((c, i) => (
              <div key={i} className={`cap-item${i === 0 ? ' active' : ''}`} data-cap={i}>
                <div className="cap-number">{c.number}</div>
                <div className="cap-title">{c.title}</div>
                <div className="cap-desc">{c.desc}</div>
              </div>
            ))}
          </div>
          <div className="cap-visual">
            {panels.map((Panel, i) => <Panel key={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
