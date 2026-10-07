import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import Reveal from './Reveal';
import { repos } from '../data/content';
import './Github.css';

export default function Github() {
  return (
    <section className="section" id="github">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Open source</span>
            <h2 className="section-title">Selected repositories.</h2>
            <p className="section-sub">What each one does, what I built, and the stack behind it.</p>
          </div>
        </Reveal>

        <div className="repos">
          {repos.map((r, i) => (
            <Reveal key={r.name} delay={i * 90} className="repos__cell">
              <a href={r.url} target="_blank" rel="noreferrer" className="card repo">
                <div className="repo__top">
                  <span className="repo__icon"><FolderGit2 size={20} /></span>
                  <ArrowUpRight size={20} className="repo__arrow" />
                </div>
                <h3>{r.name}</h3>
                <p className="repo__desc">{r.desc}</p>
                <p className="repo__contrib"><span>My contribution</span>{r.contribution}</p>
                <div className="repo__tags">
                  {r.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
