import { ArrowUpRight, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/content';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__copy">
          <div className="hero__status">
            <span className="hero__dot" />
            Available for opportunities
          </div>

          <p className="hero__role">
            {profile.name} <span>/</span> {profile.role}
          </p>

          <h1 className="hero__title">
            Building <span className="gradient-text">real-time,</span>
            <br />
            AI-powered systems.
          </h1>

          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a id="hero-resume" href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-primary">
              <FileText size={17} /> View resume
            </a>
            <a id="hero-work" href="#work" className="btn btn-ghost">
              Featured work <ArrowUpRight size={17} />
            </a>
            <div className="hero__socials">
              <a id="hero-github" href={profile.github} target="_blank" rel="noreferrer" className="hero__social" aria-label="GitHub">
                <GithubIcon size={19} />
              </a>
              <a id="hero-linkedin" href={profile.linkedin} target="_blank" rel="noreferrer" className="hero__social" aria-label="LinkedIn">
                <LinkedinIcon size={19} />
              </a>
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="terminal">
            <div className="terminal__bar">
              <span /><span /><span />
              <em>engineer.ts</em>
            </div>
            <pre className="terminal__code">
{`  `}<b className="k">const</b> <b className="v">engineer</b> = {'{'}{'\n'}
{`    `}<b className="p">name</b>: <b className="s">"{profile.name}"</b>,{'\n'}
{`    `}<b className="p">focus</b>: [<b className="s">"real-time"</b>, <b className="s">"AI agents"</b>, <b className="s">"cloud"</b>],{'\n'}
{`    `}<b className="p">stack</b>: [{'\n'}
{`      `}<b className="s">"Node.js"</b>, <b className="s">"React"</b>, <b className="s">"Docker"</b>,{'\n'}
{`      `}<b className="s">"LiveKit"</b>, <b className="s">"AWS"</b>,{'\n'}
{`    `}],{'\n'}
{`    `}<b className="p">shipped</b>: <b className="n">15</b>+ <b className="c">// brands in production</b>{'\n'}
{`    `}<b className="p">status</b>: <b className="s">"open to work"</b>,{'\n'}
{`  `}{'}'};<span className="terminal__cursor" />
            </pre>
          </div>
          <div className="hero__glow" />
        </div>
      </div>
    </section>
  );
}
