import { useEffect, useRef } from 'react';

const barData = [
  { t: 'valid', h: 82 }, { t: 'valid', h: 75 }, { t: 'invalid', h: 38 }, { t: 'valid', h: 90 },
  { t: 'anomaly', h: 55 }, { t: 'valid', h: 68 }, { t: 'invalid', h: 22 }, { t: 'valid', h: 88 },
  { t: 'valid', h: 72 }, { t: 'anomaly', h: 40 }, { t: 'invalid', h: 18 }, { t: 'valid', h: 95 },
  { t: 'valid', h: 60 }, { t: 'anomaly', h: 48 }, { t: 'valid', h: 80 }, { t: 'invalid', h: 30 },
];

export default function Problem() {
  const chartRef = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !animated.current) {
        animated.current = true;
        chartRef.current?.querySelectorAll('.bar').forEach(b => {
          setTimeout(() => { b.style.height = b.dataset.h + 'px'; }, Math.random() * 400);
        });
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    if (chartRef.current) obs.observe(chartRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="problem" className="chapter scroll-section">
      <div className="chapter-inner">
        <div className="problem-layout">
          <div className="problem-text">
            <h2 className="reveal">
              CTV advertising is growing.{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--accent-g)' }}>The measurement isn't.</em>
            </h2>
            <p className="reveal reveal-delay-1">
              Connected TV has become a primary channel for brand spend — but the infrastructure supporting
              measurement, delivery verification, and traffic validation hasn't kept pace. Most teams are
              making decisions on data they haven't fully examined.
            </p>
            <p className="reveal reveal-delay-2">
              Invalid impressions, misreported delivery, and degraded signal quality are common in CTV supply
              chains. The problem isn't a lack of data — it's confidence in the data you already have.
            </p>
            <div className="stat-row reveal reveal-delay-3">
              <div className="stat">
                <div className="stat-num">24%</div>
                <div className="stat-label">Avg. invalid traffic rate<br />in CTV campaigns</div>
              </div>
              <div className="stat">
                <div className="stat-num">3×</div>
                <div className="stat-label">Harder to audit than<br />desktop display</div>
              </div>
            </div>
          </div>

          <div className="signal-chart reveal reveal-delay-1">
            <div className="chart-title">// SIGNAL INTEGRITY OVERVIEW — CAMPAIGN SAMPLE</div>
            <div className="chart-bars" ref={chartRef}>
              {barData.map((d, i) => (
                <div key={i} className="bar-wrap">
                  <div className={`bar ${d.t}`} style={{ height: 0 }} data-h={d.h} />
                </div>
              ))}
            </div>
            <div className="chart-legend">
              <div className="legend-item">
                <div className="legend-dot" style={{ background: 'rgba(42,255,157,0.5)' }} />Valid
              </div>
              <div className="legend-item">
                <div className="legend-dot" style={{ background: 'rgba(255,80,80,0.5)' }} />Invalid
              </div>
              <div className="legend-item">
                <div className="legend-dot" style={{ background: 'rgba(255,180,50,0.5)' }} />Anomaly
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
