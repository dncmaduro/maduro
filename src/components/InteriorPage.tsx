import { experience, experiments, into, links, projects, toolboxShelves } from '../data/siteData'
import type { Page } from '../types'
import { ProjectCard } from './ProjectCard'
import { TabNavigation } from './TabNavigation'
import { Toolbox } from './Toolbox'

type InteriorPageProps = {
  page: Exclude<Page, 'home'>
  onNavigate: (page: Page, tab: HTMLElement | null) => void
  onBack: () => void
}

const pageCopy = {
  projects: { kicker: '01 / OUTPUT', title: "stuff i've made.", subtitle: 'some useful. some questionable.' },
  experience: { kicker: '02 / HISTORY', title: 'places that paid me to code.', subtitle: 'a mostly chronological record of surviving the build.' },
  about: { kicker: '03 / CONTEXT', title: "so, who's this guy?", subtitle: 'a little background before you judge the code.' },
  contact: { kicker: '04 / OPEN PORT', title: 'wanna talk?', subtitle: 'no forms. no captchas. just email me like a normal person.' },
} as const

export function InteriorPage({ page, onNavigate, onBack }: InteriorPageProps) {
  const copy = pageCopy[page]
  return (
    <main className={`interior-page page-shell interior-page--${page}`} aria-labelledby="page-title">
      <header className="interior-header">
        <button className="back-button" type="button" onClick={onBack} aria-label="Back to home"><span>←</span> home</button>
        <div className="interior-stamp">PAGE / {copy.kicker.split(' / ')[0]}</div>
        <TabNavigation currentPage={page} onNavigate={onNavigate} />
      </header>
      <div className="page-content" key={page}>
        <div className="page-heading">
          <p className="eyebrow">{copy.kicker}</p>
          <h1 id="page-title">{copy.title}</h1>
          <p className="page-subtitle">{copy.subtitle}</p>
        </div>
        {page === 'projects' && <ProjectsPage />}
        {page === 'experience' && <ExperiencePage />}
        {page === 'about' && <AboutPage />}
        {page === 'contact' && <ContactPage />}
      </div>
      <footer className="site-footer"><span>© 2026 DUNG TRAN</span><span>made with questionable life choices.</span></footer>
    </main>
  )
}

function ProjectsPage() {
  return (
    <div className="projects-content">
      <div className="project-grid">
        {projects.map((project) => <ProjectCard project={project} key={project.id} />)}
      </div>
      <section className="experiments-section" aria-labelledby="experiments-title">
        <div className="section-rule"><span>02 / SIDE QUESTS</span><span>not products yet. relax.</span></div>
        <h2 id="experiments-title">dumb ideas that somehow became code.</h2>
        <div className="experiment-list">
          {experiments.map((experiment, index) => (
            <article className="experiment-item" key={experiment.title}>
              <span className="experiment-number">0{index + 1}</span>
              <div><h3>{experiment.title}</h3><p>{experiment.description}</p>{experiment.detail && <small>{experiment.detail}</small>}</div>
              <span className="experiment-label">{experiment.label}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

function ExperiencePage() {
  return (
    <section className="timeline" aria-label="Work experience">
      {experience.map((item, index) => (
        <article className={`timeline-item ${index === 0 ? 'timeline-item--current' : ''}`} key={item.company}>
          <div className="timeline-rail"><span className="timeline-dot" /><span className="timeline-line" /></div>
          <div className="timeline-main">
            <div className="timeline-period">{item.period}</div>
            <h2>{item.company}</h2>
            <div className="timeline-role">{item.role}</div>
            <p>{item.description}</p>
            {item.metric && <div className="metric-block"><span className="metric-label">PERFORMANCE TUNE-UP</span><strong>{item.metric}</strong><span className="metric-caption">somehow made it less haunted.</span></div>}
            {item.highlights && <ul className="highlight-list">{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
            {item.tech && <div className="tag-row">{item.tech.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>}
          </div>
        </article>
      ))}
    </section>
  )
}

function AboutPage() {
  return (
    <div className="about-content">
      <section className="about-intro">
        <div className="about-text">
          <p>i&apos;m dung tran. a software engineer from Vietnam.</p>
          <p>i spend most of my day writing code, staring at code, wondering why my code doesn&apos;t work, and then realizing i was the problem all along.</p>
          <p>i mostly work with frontend stuff, but i like messing around with pretty much anything.</p>
          <p>web apps, mobile apps, browser extensions, games, ai stuff... whatever seems interesting at the moment.</p>
          <p>sometimes i build things because they&apos;re useful. sometimes because i&apos;m bored.</p>
          <p>and sometimes i start a project at 2am and question my life choices the next morning.</p>
          <p>anyway, that&apos;s pretty much me.</p>
        </div>
        <aside className="about-aside"><span className="stamp-box">FROM<br />VIETNAM<br /><b>VN / 04</b></span><span className="aside-microcopy">no origin story.<br />just tabs open.</span></aside>
      </section>
      <section className="toolbox-section" aria-labelledby="toolbox-title">
        <div className="section-rule"><span>01 / INVENTORY</span><span>things with little icons</span></div>
        <h2 id="toolbox-title">toolbox</h2>
        <Toolbox shelves={toolboxShelves} />
      </section>
      <section className="into-section" aria-labelledby="into-title">
        <div className="section-rule"><span>02 / CURRENTLY</span><span>the tab i keep open</span></div>
        <h2 id="into-title">things i&apos;m into lately.</h2>
        <ol className="into-list">
          {into.map((item, index) => <li key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></li>)}
        </ol>
      </section>
      <section className="education-block" aria-label="Education">
        <div className="section-rule"><span>03 / EDUCATION</span><span>yes, i actually went to school for this.</span></div>
        <div className="education-grid"><div><h2>University of Engineering and Technology — VNU</h2><p>Bachelor of Information Technology</p><span>2021 — 2025</span></div><strong>3.53<span>/ 4.00</span></strong></div>
      </section>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="contact-content">
      <section className="contact-copy">
        <p>got a project? need a developer? found a bug in something i made?</p>
        <p>or maybe you just wanna say hi.</p>
        <p>whatever it is, feel free to reach out.</p>
        <p>i&apos;ll probably reply. unless i&apos;m asleep.</p>
      </section>
      <section className="contact-links" aria-label="Contact links">
        <a className="contact-link contact-link--primary" href={links.email} target="_blank" rel="noreferrer"><span>EMAIL</span><strong>send me an email ↗</strong></a>
        <a className="contact-link" href={links.github} target="_blank" rel="noreferrer"><span>GITHUB</span><strong>github ↗</strong></a>
        <a className="contact-link" href={links.linkedin} target="_blank" rel="noreferrer"><span>LINKEDIN</span><strong>linkedin ↗</strong></a>
        <a className="contact-link" href={links.stackoverflow} target="_blank" rel="noreferrer"><span>STACK OVERFLOW</span><strong>stack overflow ↗</strong></a>
      </section>
      <div className="contact-footnote">no forms. no captchas. just email me like a normal person.</div>
    </div>
  )
}
