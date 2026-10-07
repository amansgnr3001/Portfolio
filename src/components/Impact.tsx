import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { metrics } from '../data/content';
import './Impact.css';

function CountUp({ to, active }: { to: number; active: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to]);

  return <>{n}</>;
}

export default function Impact() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="section impact" id="impact">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Impact</span>
            <h2 className="section-title">Proof, not claims.</h2>
            <p className="section-sub">Numbers from systems I built, deployed and operated in production.</p>
          </div>
        </Reveal>

        <div className="impact__grid" ref={ref}>
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 90} className="impact__cell">
              <div className="card impact__card">
                <div className="impact__value">
                  {m.value !== null ? (
                    <>
                      {m.prefix}
                      <CountUp to={m.value} active={active} />
                      {m.suffix}
                    </>
                  ) : (
                    m.text
                  )}
                </div>
                <div className="impact__label">{m.label}</div>
                <p className="impact__desc">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
