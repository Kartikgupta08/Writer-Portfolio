import { useEffect, useState } from 'react';
import profileImage from '../assets/profile.png';

const mediumProfile = 'https://medium.com/@kaartikgupta2';
const linkedinProfile = 'https://www.linkedin.com/in/kartik-gupta08/';
const blogLink = 'https://medium.com/@kaartikgupta2/2-0905df3fd1cc';
const poetryLink = 'https://medium.com/@kaartikgupta2/mere-pyaar-ke-hamare-21-din-4a57d0d26534';
const novelLink = 'https://medium.com/@kaartikgupta2/changing-the-metro-part-1-8e4cd297eb85';
const emailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=kaartikgupta2@gmail.com&su=Let%27s%20Connect%20Regarding%20Writing%20Opportunities&body=Hi%20Kartik,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest,%0A';

function IconMedium() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#000" />
      <text x="12.2" y="16.2" textAnchor="middle" fontSize="13.5" fontFamily="Georgia, serif" fill="#fff" fontWeight="700">Me</text>
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#0A66C2" />
      <circle cx="6.4" cy="6.4" r="1.4" fill="#fff" />
      <path fill="#fff" d="M5.2 9h2.6v8H5.2V9Zm4.1 0h2.5v1.1h.1c.4-.8 1.3-1.3 2.4-1.3 2.5 0 3 1.6 3 3.7V17h-2.6v-4.1c0-1 0-2-1.3-2-1.2 0-1.4.9-1.4 1.9V17H9.3V9Z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="5" height="18" rx="2.2" fill="#4285F4" />
      <rect x="16" y="3" width="5" height="18" rx="2.2" fill="#34A853" />
      <path fill="#EA4335" d="M3 5.8 12 12.7 21 5.8V3.9L12 10.8 3 3.9v1.9Z" />
      <path fill="#EA4335" d="M3 5.8V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1.8L12 12.7 3 5.8Z" />
      <path fill="#FBBC05" d="M18.3 3H21a1 1 0 0 1 1 1v3.1l-3.7-2.8V4a1 1 0 0 0-.3-.7Z" />
    </svg>
  );
}

export default function App() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const supportsPointer = window.matchMedia('(pointer: fine)').matches;
    if (!supportsPointer) return undefined;

    const trail = [];
    let rafId = 0;

    const ensureTrail = () => {
      if (trail.length) return;
      for (let i = 0; i < 8; i += 1) {
        const dot = document.createElement('span');
        dot.className = 'cursor-trail-dot';
        dot.style.setProperty('--delay', `${i * 0.04}s`);
        document.body.appendChild(dot);
        trail.push(dot);
      }
    };

    const updateTrail = (x, y) => {
      ensureTrail();
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        trail.forEach((dot, index) => {
          const scale = 1 - index * 0.08;
          dot.style.transform = `translate(${x - 6}px, ${y - 6}px) scale(${Math.max(scale, 0.4)})`;
          dot.style.opacity = String(Math.max(0.9 - index * 0.11, 0));
        });
      });
    };

    const handleMove = (event) => updateTrail(event.clientX, event.clientY);
    const handleLeave = () => {
      trail.forEach((dot) => {
        dot.style.opacity = '0';
      });
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('pointerleave', handleLeave);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerleave', handleLeave);
      cancelAnimationFrame(rafId);
      trail.forEach((dot) => dot.remove());
    };
  }, []);

  useEffect(() => {
    const loader = new Image();
    loader.src = profileImage;
    loader.onload = () => setImageLoaded(true);
    loader.onerror = () => setImageLoaded(false);
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <nav className="topnav" aria-label="Primary">
            <a href="#about">ABOUT</a>
            <a href="#skills">SKILLS</a>
            <a href="#projects">PROJECTS</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#contact">CONTACT</a>
          </nav>
          <a className="resume-button" href="/Writer_resume.pdf" target="_blank" rel="noreferrer">RESUME</a>
        </div>
      </header>

      <header className="hero" id="about">
        <div className="hero-copy">
          <div className="name-lockup">
            <h1>Kartik Gupta</h1>
            <div className="name-mark" aria-hidden="true">
              <span className="name-underline"></span>
              <span className="pen-mark">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.8 9.95l-3.75-3.75L3 17.25Zm2.92 1.33-.5-.5L13.5 10l.5.5-8.08 8.08ZM19.71 7.04a1 1 0 0 0 0-1.41l-1.34-1.34a1 1 0 0 0-1.41 0l-1.18 1.18 3.75 3.75 1.18-1.18Z"/></svg>
              </span>
            </div>
          </div>
          <p className="subtitle"><strong><em>Creative Content Writer, storyteller, narrator, and script-minded wordsmith.</em></strong></p>
          <p className="summary">
            Creative Content Writer with 2 years of experience crafting promotional content, stage narrations,
            and original adaptations for cultural events. I build emotional connection through language.
          </p>

          <div className="actions">
            <a className="button button-light" href={mediumProfile} target="_blank" rel="noreferrer">
              <span className="icon"><IconMedium /></span>
              Medium
            </a>
            <a className="button button-light" href={linkedinProfile} target="_blank" rel="noreferrer">
              <span className="icon"><IconLinkedIn /></span>
              LinkedIn
            </a>
            <a className="button button-light" href={emailLink} target="_blank" rel="noreferrer">
              <span className="icon"><IconMail /></span>
              Email
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-orbit-shell">
            <div className="portrait-frame">
              {!imageLoaded && (
                <div className="portrait-fallback" aria-hidden="true">KG</div>
              )}
              <img
                src={profileImage}
                alt="Portrait of Kartik Gupta"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(false)}
                style={{ display: imageLoaded ? 'block' : 'none' }}
              />
            </div>
          </div>
          <div className="portrait-note"><strong><em>Clean, direct storytelling with a literary edge.</em></strong></div>
        </div>
      </header>

      <main>
        <section className="section grid-2" id="experience">
          <article className="card intro-card">
            <p className="section-label">Summary</p>
            <h2 className="italic-heading">Writing that carries voice, rhythm, and stage presence.</h2>
            <p>
              I write content that feels alive: promotional pieces, cultural narrations, original blogs,
              poetry sequences, and long-form fiction. My focus is clarity, emotion, and consistency.
            </p>
          </article>

          <article className="card stats-card">
            <p className="section-label">Highlights</p>
            <div className="stats-grid">
              <div className="stat-item"><strong>2+</strong><span>years writing experience</span></div>
              <div className="stat-item"><strong>18</strong><span>creative blogs on words</span></div>
              <div className="stat-item"><strong>21</strong><span>poems in one compilation</span></div>
              <div className="stat-item"><strong>130</strong><span>page novel project</span></div>
              <div className="stat-item stat-item-wide"><strong>2</strong><span>stand up bits</span></div>
            </div>
          </article>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="section-label">Projects</p>
            <h2 className="italic-heading">Selected writing work</h2>
          </div>

          <div className="projects-grid">
            <article className="card project-card">
              <p className="project-type">Blog Collection</p>
              <h3>Blogs on words</h3>
              <p>Collection of around 18 creative blogs on words like Shahar, Naam, Aaj, along with short stories titled Aap and Weird.</p>
              <p>Also includes creative blogs on numbers like 2 and emotions like realization.</p>
              <a href={blogLink} target="_blank" rel="noreferrer">Read on Medium</a>
            </article>

            <article className="card project-card">
              <p className="project-type">Poetry Compilation</p>
              <h3>Mere pyaar ke hamare 21 din</h3>
              <p>A 21-poem collection capturing day-to-day life, new beginnings, attraction, and evolving feelings between two people.</p>
              <p>Built as a storytelling sequence through poems from day 1 to day 21.</p>
              <a href={poetryLink} target="_blank" rel="noreferrer">Read on Medium</a>
            </article>

            <article className="card project-card">
              <p className="project-type">Novel</p>
              <h3>Changing the metro</h3>
              <p>A relatable 130-page novel blending love, humor, heartbreak, corporate life, middle-class lifestyle, and metro-city speed.</p>
              <p>Built around friendship, emotion, and a fast-moving urban backdrop.</p>
              <a href={novelLink} target="_blank" rel="noreferrer">Read on Medium</a>
            </article>
          </div>
        </section>

        <section className="section genre-explore">
          <div className="section-heading">
            <p className="section-label">Explore Genres</p>
            <h2 className="italic-heading">Browse my work by tone</h2>
          </div>

          <div className="genre-grid">
            <article className="card genre-tile romance-card">
              <p className="project-type romance-label">
                <span className="heart-beat heart-inline" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.53L12 21.35Z"/>
                  </svg>
                </span>
                Romance
              </p>
              <h3>Romance stories</h3>
              <a href="https://medium.com/@kaartikgupta2/list/romance-9a2df8f4b96a" target="_blank" rel="noreferrer">Explore Work</a>
            </article>

            <article className="card genre-tile">
              <p className="project-type comedy-label">
                <span className="laugh-emoji" aria-hidden="true">😂</span>
                Comedy
              </p>
              <h3>Funny writing</h3>
              <a href="https://medium.com/@kaartikgupta2/list/funny-480509cec0ca" target="_blank" rel="noreferrer">Explore Work</a>
            </article>

            <article className="card genre-tile">
              <p className="project-type romcom-label">
                <span className="romcom-emoji" aria-hidden="true">🎬</span>
                Rom-Com
              </p>
              <h3>Romantic comedy</h3>
              <a href="https://medium.com/@kaartikgupta2/list/romcom-5dba0c67c92c" target="_blank" rel="noreferrer">Explore Work</a>
            </article>

            <article className="card genre-tile">
              <p className="project-type tragedy-label">
                <span className="tragedy-emoji" aria-hidden="true">💔</span>
                Tragedy
              </p>
              <h3>Emotional pieces</h3>
              <a href="https://medium.com/@kaartikgupta2/list/rr-rotadu-ritesiykyk-f70202bfb841" target="_blank" rel="noreferrer">Explore Work</a>
            </article>

            <article className="card genre-tile">
              <p className="project-type observational-label">
                <span className="observational-emoji" aria-hidden="true">👀</span>
                Observational
              </p>
              <h3>Timepass writing</h3>
              <a href="https://medium.com/@kaartikgupta2/list/timepass-writing-6403d0b2a610" target="_blank" rel="noreferrer">Explore Work</a>
            </article>
          </div>
        </section>

        <section className="section genre-explore">
          <div className="section-heading">
            <p className="section-label">Light Reads</p>
            <h2 className="italic-heading">Stories that smile back</h2>
          </div>

          <div className="genre-grid genre-grid-compact">
            <article className="card genre-tile">
              <p className="project-type">Funny Poetry</p>
              <h3>Fake poetries</h3>
              <a href="https://medium.com/@kaartikgupta2/list/fake-poetries-fa97c0bf36a3" target="_blank" rel="noreferrer">Let's laugh</a>
            </article>

            <article className="card genre-tile">
              <p className="project-type">Sit-Com Story</p>
              <h3>Neighbours</h3>
              <a href="https://medium.com/@kaartikgupta2/list/neighbours-7a19c2e2703b" target="_blank" rel="noreferrer">Explore Work</a>
            </article>
          </div>
        </section>

        <section className="section grid-2" id="contact">
          <article className="card skills-card" id="skills">
            <p className="section-label skills-label">Skills</p>
            <div className="skill-group">
              <h3>Soft Skills</h3>
              <p>Excellent Speaker, Skilled Orator</p>
            </div>
            <div className="skill-group">
              <h3>Languages</h3>
              <p>Hindi, English, Hinglish</p>
            </div>
            <div className="skill-group">
              <h3>Expertise</h3>
              <p>Script Writing, Storytelling, Character Development, Public Speaking</p>
            </div>
            <div className="skill-group">
              <h3>Technical Skills</h3>
              <p>Frontend, HTML, CSS, Bootstrap, Tailwind CSS, React, JavaScript, ML</p>
            </div>
          </article>

          <article className="card contact-card">
            <p className="section-label">Contact</p>
            <h2>Let the words do the talking.</h2>
            <p>
              Reach out for writing roles, collaborations, narration work, content strategy, or portfolio review.
            </p>
            <div className="contact-links">
              <a href={mediumProfile} target="_blank" rel="noreferrer"><span className="icon"><IconMedium /></span>Medium</a>
              <a href={linkedinProfile} target="_blank" rel="noreferrer"><span className="icon"><IconLinkedIn /></span>LinkedIn</a>
              <a href={emailLink} target="_blank" rel="noreferrer"><span className="icon"><IconMail /></span>Email</a>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
