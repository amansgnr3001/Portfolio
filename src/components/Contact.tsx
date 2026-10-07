import { Download, Mail } from 'lucide-react';
import Reveal from './Reveal';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/content';
import './Contact.css';

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact__box">
            <span className="eyebrow">Contact</span>
            <h2 className="contact__title">
              Have a problem worth building? <span className="gradient-text">Let's talk.</span>
            </h2>
            <p className="contact__sub">
              I'm open to full-time roles in backend, full-stack and real-time systems engineering.
              The fastest way to reach me is email.
            </p>

            <div className="contact__actions">
              <a id="contact-email" href={`mailto:${profile.email}`} className="btn btn-primary">
                <Mail size={17} /> {profile.email}
              </a>
              <a id="contact-resume" href={profile.resume} download className="btn btn-ghost">
                <Download size={17} /> Download resume
              </a>
              <a id="contact-linkedin" href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <LinkedinIcon size={17} /> LinkedIn
              </a>
              <a id="contact-github" href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <GithubIcon size={17} /> GitHub
              </a>
            </div>
          </div>
        </Reveal>

        <footer className="footer">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Designed &amp; built with React + Vite</span>
        </footer>
      </div>
    </section>
  );
}
