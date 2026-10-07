import { ArrowRight, Layers, Mic, Play } from 'lucide-react';
import { Fragment } from 'react';
import Reveal from './Reveal';
import { GithubIcon } from './Icons';
import { projects } from '../data/content';
import './FeaturedWork.css';

const icons = {
  play: <Play size={16} />,
  mic: <Mic size={16} />,
  layers: <Layers size={16} />,
  github: <GithubIcon size={16} />,
};

export default function FeaturedWork() {
  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Featured work</span>
            <h2 className="section-title">Systems I've shipped.</h2>
            <p className="section-sub">Three projects, each with the problem, the architecture and the stack.</p>
          </div>
        </Reveal>

        <div className="work__list">
          {projects.map((p) => (
            <Reveal key={p.index}>
              <article className="card project">
                <div className="project__main">
                  <div className="project__meta">
                    <span className="project__index">{p.index}</span>
                    <span className="project__kicker">{p.kicker}</span>
                  </div>

                  <h3 className="project__title">{p.title}</h3>
                  <p className="project__desc">{p.description}</p>

                  {p.problem && (
                    <div className="project__problem">
                      <span>The problem</span>
                      <p>{p.problem}</p>
                    </div>
                  )}

                  <div className="project__tags">
                    {p.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  <div className="project__links">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        className={`btn btn-sm ${l.kind === 'primary' ? 'btn-primary' : 'btn-ghost'}`}
                        {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                      >
                        {icons[l.icon]} {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                {p.pipeline.length > 0 && (
                  <aside className="project__diagram" aria-label={p.pipelineTitle}>
                    <span className="project__diagram-title">{p.pipelineTitle}</span>
                    <div className="flow">
                      {p.pipeline.map((step, i) => (
                        <Fragment key={step}>
                          <div className="flow__node">
                            <span className="flow__num">{String(i + 1).padStart(2, '0')}</span>
                            {step}
                          </div>
                          {i < p.pipeline.length - 1 && <div className="flow__line" />}
                        </Fragment>
                      ))}
                    </div>
                  </aside>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <a href="#engineering" className="card cta-strip">
            <div>
              <h3>Deep dive: how the video platform is built</h3>
              <p>The architecture, and why each component is there.</p>
            </div>
            <span className="cta-strip__arrow"><ArrowRight size={20} /></span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
