import { useEffect, useState } from 'react';
import profileImage from '../assets/profile.png';

const mediumProfile = 'https://medium.com/@kaartikgupta2';
const linkedinProfile = 'https://www.linkedin.com/in/kartik-gupta08/';
const blogLink = 'https://medium.com/@kaartikgupta2/2-0905df3fd1cc';
const poetryLink = 'https://medium.com/@kaartikgupta2/mere-pyaar-ke-hamare-21-din-4a57d0d26534';
const novelLink = 'https://medium.com/@kaartikgupta2/changing-the-metro-part-1-8e4cd297eb85';
const emailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=kaartikgupta2@gmail.com&su=Let%27s%20Connect%20Regarding%20Writing%20Opportunities&body=Hi%20Kartik,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest,%0A';

function IconMedium() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 6.5A2.5 2.5 0 0 0 1.5 9v6A2.5 2.5 0 0 0 4 17.5h16a2.5 2.5 0 0 0 2.5-2.5V9A2.5 2.5 0 0 0 20 6.5H4Zm2.2 3.1v4.8H4.8V9.6h1.4Zm5.5 0 2.1 3.1 2.1-3.1h1.4v4.8h-1.4v-2.9l-2.1 3.1-2.1-3.1v2.9H10V9.6h1.7Z"/></svg>;
}

function IconLinkedIn() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.5 3.5A2.5 2.5 0 1 1 5.5 8a2.5 2.5 0 0 1 0-4.5ZM3.8 9h3.4v12H3.8V9Zm6.1 0h3.3v1.6h.1c.5-.9 1.8-1.9 3.8-1.9 4 0 4.7 2.6 4.7 6v6.3H18v-5.6c0-1.3 0-3-1.9-3-1.8 0-2.1 1.4-2.1 2.9v5.7H9.9V9Z"/></svg>;
}

function IconMail() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 0 1.5 8v8A2.5 2.5 0 0 0 4 18.5h16a2.5 2.5 0 0 0 2.5-2.5V8A2.5 2.5 0 0 0 20 5.5H4Zm0 2h16c.16 0 .31.02.45.07L12 13.1 3.55 7.57c.14-.05.29-.07.45-.07Zm16 9H4c-.18 0-.35-.03-.5-.08l5.4-4 2.1 1.37 2.1-1.37 5.4 4c-.15.05-.32.08-.5.08Z"/></svg>;
}

export default function App() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const loader = new Image();
    loader.src = profileImage;
    loader.onload = () => setImageLoaded(true);
    loader.onerror = () => setImageLoaded(false);
  }, []);

  return (
    <div className="page-shell">
      <header className="hero">
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
          <p className="subtitle">Creative Content Writer, storyteller, narrator, and script-minded wordsmith.</p>
          <p className="summary">
            Creative Content Writer with 2 years of experience crafting promotional content, stage narrations,
            and original adaptations for cultural events. I build emotional connection through language.
          </p>

          <div className="actions">
            <a className="button button-dark" href={mediumProfile} target="_blank" rel="noreferrer">
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
          <div className="portrait-note">Clean, direct storytelling with a literary edge.</div>
        </div>
      </header>

      <main>
        <section className="section grid-2">
          <article className="card intro-card">
            <p className="section-label">Summary</p>
            <h2>Writing that carries voice, rhythm, and stage presence.</h2>
            <p>
              I write content that feels alive: promotional pieces, cultural narrations, original blogs,
              poetry sequences, and long-form fiction. My focus is clarity, emotion, and consistency.
            </p>
          </article>

          <article className="card stats-card">
            <p className="section-label">Highlights</p>
            <ul className="stats-list">
              <li><strong>2+</strong><span>years writing experience</span></li>
              <li><strong>18</strong><span>creative blogs on words</span></li>
              <li><strong>21</strong><span>poems in one compilation</span></li>
              <li><strong>130</strong><span>page novel project</span></li>
            </ul>
          </article>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="section-label">Projects</p>
            <h2>Selected writing work</h2>
          </div>

          <div className="projects-grid">
            <article className="card project-card">
              <p className="project-type">Blog Collection</p>
              <h3>Blogs on words</h3>
              <p className="project-meta">2, Shahar, Naam • May 2025 - October 2025</p>
              <p>Collection of around 18 creative blogs on words like Shahar, Naam, Aaj, along with short stories titled Aap and Weird.</p>
              <p>Also includes creative blogs on numbers like 2 and emotions like realization.</p>
              <a href={blogLink} target="_blank" rel="noreferrer">Read on Medium</a>
            </article>

            <article className="card project-card">
              <p className="project-type">Poetry Compilation</p>
              <h3>Mere pyaar ke hamare 21 din</h3>
              <p className="project-meta">July 2025 - September 2025</p>
              <p>A 21-poem collection capturing day-to-day life, new beginnings, attraction, and evolving feelings between two people.</p>
              <p>Built as a storytelling sequence through poems from day 1 to day 21.</p>
              <a href={poetryLink} target="_blank" rel="noreferrer">Read on Medium</a>
            </article>

            <article className="card project-card">
              <p className="project-type">Novel</p>
              <h3>Changing the metro</h3>
              <p className="project-meta">January 2025 - July 2025</p>
              <p>A relatable 130-page novel blending love, humor, heartbreak, corporate life, middle-class lifestyle, and metro-city speed.</p>
              <p>Built around friendship, emotion, and a fast-moving urban backdrop.</p>
              <a href={novelLink} target="_blank" rel="noreferrer">Read on Medium</a>
            </article>
          </div>
        </section>

        <section className="section genre-explore">
          <div className="section-heading">
            <p className="section-label">Explore Genres</p>
            <h2>Browse my work by tone</h2>
          </div>

          <div className="genre-grid">
            <article className="card genre-tile">
              <p className="project-type">Romance</p>
              <h3>Romance stories</h3>
              <a href="https://medium.com/@kaartikgupta2/list/romance-9a2df8f4b96a" target="_blank" rel="noreferrer">Explore Work</a>
            </article>

            <article className="card genre-tile">
              <p className="project-type">Comedy</p>
              <h3>Funny writing</h3>
              <a href="https://medium.com/@kaartikgupta2/list/funny-480509cec0ca" target="_blank" rel="noreferrer">Explore Work</a>
            </article>

            <article className="card genre-tile">
              <p className="project-type">Rom-Com</p>
              <h3>Romantic comedy</h3>
              <a href="https://medium.com/@kaartikgupta2/list/romcom-5dba0c67c92c" target="_blank" rel="noreferrer">Explore Work</a>
            </article>

            <article className="card genre-tile">
              <p className="project-type">Tragedy</p>
              <h3>Emotional pieces</h3>
              <a href="https://medium.com/@kaartikgupta2/list/rr-rotadu-ritesiykyk-f70202bfb841" target="_blank" rel="noreferrer">Explore Work</a>
            </article>

            <article className="card genre-tile">
              <p className="project-type">Observational</p>
              <h3>Timepass writing</h3>
              <a href="https://medium.com/@kaartikgupta2/list/timepass-writing-6403d0b2a610" target="_blank" rel="noreferrer">Explore Work</a>
            </article>
          </div>
        </section>

        <section className="section genre-explore">
          <div className="section-heading">
            <p className="section-label">Light Reads</p>
            <h2>Stories that smile back</h2>
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

        <section className="section grid-2">
          <article className="card skills-card">
            <p className="section-label">Skills</p>
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
              <a href={mediumProfile} target="_blank" rel="noreferrer">Medium</a>
              <a href={linkedinProfile} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={emailLink} target="_blank" rel="noreferrer">Email</a>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
