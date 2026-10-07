import { Brain, Cloud, Layout, Server, Zap } from 'lucide-react';
import Reveal from './Reveal';
import { architectureSteps, skillGroups } from '../data/content';
import './Engineering.css';

const icons = {
  server: <Server size={19} />,
  cloud: <Cloud size={19} />,
  zap: <Zap size={19} />,
  brain: <Brain size={19} />,
  layout: <Layout size={19} />,
};

export default function Engineering() {
  return (
    <section className="section" id="engineering">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Engineering</span>
            <h2 className="section-title">The stack I've actually used.</h2>
            <p className="section-sub">Grouped by what I've built with it — not a logo cloud.</p>
          </div>
        </Reveal>

        <div className="skills">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 70} className="skills__cell">
              <div className="card skill">
                <div className="skill__head">
                  <span className="skill__icon">{icons[g.icon]}</span>
                  <h3>{g.title}</h3>
                </div>
                <div className="skill__tags">
                  {g.items.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="card arch" id="architecture">
            <div className="arch__intro">
              <span className="eyebrow">How I built this</span>
              <h3 className="arch__title">Video platform architecture</h3>
              <p>
                Every component has a job. Recording is kept off the real-time path so live calls stay
                responsive, and media is processed asynchronously afterwards.
              </p>
            </div>

            <ol className="arch__steps">
              {architectureSteps.map((s, i) => (
                <li key={s.name} className="arch__step">
                  <span className="arch__marker">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h4>{s.name}</h4>
                    <p>{s.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
