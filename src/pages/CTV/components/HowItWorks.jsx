import { useEffect, useRef } from 'react';

const STEPS = [
  {
    id: 'how-0',
    label: '// STEP 01 — INTAKE',
    title: 'We start with your data',
    body: 'You share your campaign logs, delivery reports, or raw event data. No new tracking required — we work with what you already have.',
    svg: (
      <svg viewBox="0 0 300 180" style={{ marginTop: 'auto' }} xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="260" height="140" rx="8" fill="none" stroke="rgba(42,255,157,0.15)" strokeWidth="1"/>
        <rect x="40" y="40" width="100" height="8" rx="2" fill="rgba(42,255,157,0.25)"/>
        <rect x="40" y="56" width="160" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>
        <rect x="40" y="68" width="130" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>
        <rect x="40" y="80" width="180" height="4" rx="2" fill="rgba(255,255,255,0.07)"/>
        <rect x="40" y="100" width="220" height="50" rx="4" fill="rgba(42,255,157,0.05)" stroke="rgba(42,255,157,0.15)" strokeWidth="1"/>
        <text x="50" y="120" fontFamily="monospace" fontSize="9" fill="rgba(42,255,157,0.6)">campaign_delivery_log.csv</text>
        <text x="50" y="134" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,0.3)">3.2M events · 14 dimensions</text>
      </svg>
    ),
  },
  {
    id: 'how-1',
    label: '// STEP 02 — ANALYSIS',
    title: 'We examine every layer',
    body: "Our analysts run structured detection across traffic patterns, delivery timelines, and signal consistency — looking for what doesn't add up.",
    svg: <AnalysisSvg />,
  },
  {
    id: 'how-2',
    label: '// STEP 03 — FINDINGS',
    title: 'Clear findings. No noise.',
    body: 'You receive a structured findings brief — what we found, what it means, and what to do about it. Written for decision-makers, not just data teams.',
    svg: (
      <svg viewBox="0 0 300 180" style={{ marginTop: 'auto' }} xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="10" width="260" height="160" rx="8" fill="none" stroke="rgba(42,255,157,0.12)" strokeWidth="1"/>
        <rect x="40" y="28" width="80" height="6" rx="2" fill="rgba(42,255,157,0.3)"/>
        <rect x="40" y="42" width="220" height="1" fill="rgba(255,255,255,0.06)"/>
        <rect x="40" y="54" width="190" height="5" rx="2" fill="rgba(255,255,255,0.1)"/>
        <rect x="40" y="66" width="160" height="5" rx="2" fill="rgba(255,255,255,0.07)"/>
        <rect x="40" y="86" width="220" height="1" fill="rgba(255,255,255,0.06)"/>
        <rect x="40" y="98" width="100" height="6" rx="2" fill="rgba(42,255,157,0.2)"/>
        <rect x="40" y="112" width="200" height="5" rx="2" fill="rgba(255,255,255,0.07)"/>
        <rect x="40" y="124" width="170" height="5" rx="2" fill="rgba(255,255,255,0.05)"/>
        <rect x="40" y="142" width="60" height="18" rx="3" fill="rgba(42,255,157,0.15)" stroke="rgba(42,255,157,0.3)" strokeWidth="0.5"/>
        <text x="55" y="154" fontFamily="monospace" fontSize="8" fill="rgba(42,255,157,0.8)">EXPORT</text>
      </svg>
    ),
  },
];

const TEXT_ITEMS = [
  {
    h3: "You don't need new tools",
    p: 'Faylen works directly with your existing data exports, logs, and reporting infrastructure. No SDK to install, no new tracking layer to manage.',
  },
  {
    h3: 'Human analysis, not just algorithms',
    p: 'Our team brings domain expertise to each engagement — understanding the specific dynamics of CTV supply chains that automated tools miss.',
  },
  {
    h3: 'Built for action, not documentation',
    p: 'Every deliverable is structured around decisions your team actually needs to make — budget allocation, supplier selection, measurement methodology.',
  },
];

function AnalysisSvg() {
  const gRef = useRef(null);
  useEffect(() => {
    if (!gRef.current) return;
    for (let i = 0; i < 40; i++) {
      const x = 20 + Math.random() * 260;
      const y = 10 + Math.random() * 160;
      const r = Math.random();
      const col = r < 0.6 ? 'rgba(42,255,157,0.5)' : r < 0.8 ? 'rgba(255,180,50,0.5)' : 'rgba(255,80,80,0.5)';
      const size = 2 + Math.random() * 4;
      const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      dot.setAttribute('cx', x); dot.setAttribute('cy', y);
      dot.setAttribute('r', size); dot.setAttribute('fill', col);
      dot.setAttribute('opacity', 0.3 + Math.random() * 0.7);
      gRef.current.appendChild(dot);
    }
  }, []);
  return (
    <svg viewBox="0 0 300 180" style={{ marginTop: 'auto' }} xmlns="http://www.w3.org/2000/svg">
      <g ref={gRef} />
    </svg>
  );
}

export default function HowItWorks() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    function update(progress) {
      const idx = Math.min(Math.floor(progress * 3), 2);
      document.querySelectorAll('.how-step').forEach((s, i) => s.classList.toggle('active', i === idx));
      document.querySelectorAll('.how-text-item').forEach((s, i) => s.classList.toggle('active', i === idx));
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
    <div id="how-wrapper" ref={wrapperRef}>
      <div id="how-sticky">
        <div className="how-layout">
          <div className="how-visual">
            {STEPS.map((s, i) => (
              <div key={s.id} className={`how-step${i === 0 ? ' active' : ''}`} id={s.id}>
                <div className="how-step-label">{s.label}</div>
                <div className="how-step-title">{s.title}</div>
                <div className="how-step-body">{s.body}</div>
                {s.svg}
              </div>
            ))}
          </div>
          <div className="how-text">
            {TEXT_ITEMS.map((t, i) => (
              <div key={i} className={`how-text-item${i === 0 ? ' active' : ''}`} data-how={i}>
                <h3>{t.h3}</h3>
                <p>{t.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
