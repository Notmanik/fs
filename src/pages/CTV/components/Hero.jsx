import { useEffect, useRef } from 'react';

const FILTER_X = 0.58;

class Particle {
  constructor(w, h) { this.w = w; this.h = h; this.reset(true); }
  reset(randomX) {
    this.x = randomX ? Math.random() * this.w : -10;
    this.y = Math.random() * this.h;
    this.speedX = 0.5 + Math.random() * 1.1;
    this.speedY = (Math.random() - 0.5) * 1.8;
    this.size = 1.2 + Math.random() * 1.6;
    const rowH = this.h / 16;
    this.targetY = Math.floor(this.y / rowH) * rowH + rowH / 2;
  }
  update() {
    this.x += this.speedX;
    const fx = this.w * FILTER_X;
    if (this.x < fx) {
      this.y += this.speedY;
      this.color = 'rgba(156,163,175,0.25)';
    } else {
      this.y += (this.targetY - this.y) * 0.06;
      this.color = 'rgba(42,255,157,0.55)';
    }
    if (this.x > this.w + 40) this.reset(false);
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let pWidth, pHeight;
    let particles = [];
    let rafId;

    function resize() {
      const hero = document.getElementById('hero');
      pWidth = canvas.width = hero.offsetWidth;
      pHeight = canvas.height = hero.offsetHeight;
      particles = Array.from({ length: 160 }, () => new Particle(pWidth, pHeight));
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    function loop() {
      ctx.clearRect(0, 0, pWidth, pHeight);
      const fx = pWidth * FILTER_X;
      const lg = ctx.createLinearGradient(fx, 0, fx, pHeight);
      lg.addColorStop(0, 'rgba(56,182,255,0)');
      lg.addColorStop(0.5, 'rgba(56,182,255,0.18)');
      lg.addColorStop(1, 'rgba(56,182,255,0)');
      ctx.beginPath();
      ctx.moveTo(fx, 0);
      ctx.lineTo(fx, pHeight);
      ctx.strokeStyle = lg;
      ctx.lineWidth = 1;
      ctx.stroke();
      particles.forEach(p => { p.update(); p.draw(ctx); });
      rafId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="hero">
      <canvas id="hero-canvas" ref={canvasRef} />
      <div className="grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="hero-content">
        <div className="hero-tag">
          <div className="hero-tag-dot" />
          CTV ADVERTISING ANALYSIS
        </div>

        <h1>
          Clarity where<br />
          CTV data gets <em>complex.</em>
        </h1>

        <p className="hero-sub">
          Faylen Systems provides independent analysis and consulting for CTV advertising — helping brands,
          agencies, and ad platforms make confident decisions on delivery, traffic quality, and signal integrity.
        </p>

        <div className="rotating-line">
          <div className="rotating-inner">
            <span>— Invalid traffic detection across CTV supply paths</span>
            <span>— Campaign delivery analysis, measured precisely</span>
            <span>— Signal and data quality assessment</span>
            <span>— Decision-grade reporting for media teams</span>
          </div>
        </div>

        <div className="hero-ctas">
          <a href="#final-cta" className="btn-primary">Request a Briefing →</a>
          <a href="#capabilities-wrapper" className="btn-secondary">See our capabilities</a>
        </div>

        <p className="hero-footnote">No retainer required for an initial consultation</p>
      </div>

      <div className="scroll-hint">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
