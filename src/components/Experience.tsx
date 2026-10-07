import { Briefcase, GraduationCap } from 'lucide-react';
import Reveal from './Reveal';
import { experience } from '../data/content';
import './Experience.css';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Experience</span>
            <h2 className="section-title">Where I've built things.</h2>
            <p className="section-sub">Work and education, framed as outcomes rather than job titles.</p>
          </div>
        </Reveal>

        <div className="timeline">
          {experience.map((e) => (
            <Reveal key={e.title} className="timeline__item">
              <span className="timeline__dot">
                {e.type === 'work' ? <Briefcase size={15} /> : <GraduationCap size={15} />}
              </span>
              <div className="card exp">
                <div className="exp__head">
                  <div>
                    <h3>{e.title}</h3>
                    <p className="exp__org">{e.org}</p>
                  </div>
                  <span className="exp__period">{e.period}</span>
                </div>
                <p className="exp__summary">{e.summary}</p>
                {e.points.length > 0 && (
                  <ul className="exp__points">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
