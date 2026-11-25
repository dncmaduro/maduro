import { experimentProjects, experiments, into, links, maduroLabsProjects, openSourceRepositories, toolboxShelves, workItems } from '../data/siteData'
import type { Page, WorkItem } from '../types'
import { PortfolioCard } from './PortfolioCard'
import { ProjectCard } from './ProjectCard'
import { TabNavigation } from './TabNavigation'
import { Toolbox } from './Toolbox'

type InteriorPageProps = {
  page: Exclude<Page, 'home'>
  onNavigate: (page: Page, tab: HTMLElement | null) => void
  onBack: () => void
}

const pageCopy = {
  work: { kicker: '01 / WORK', title: 'places that paid me to code.' },
  experiments: { kicker: '02 / EXPERIMENTS', title: 'things nobody asked for.' },
  'open-source': { kicker: '03 / OPEN SOURCE', title: "fixing things i didn't break.", description: "turns out breaking my own code wasn't enough, so now i look at other people's code too." },
  about: { kicker: '04 / ABOUT', title: "so, who's this guy?" },
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
          {'description' in copy && <p className="page-subtitle">{copy.description}</p>}
        </div>
        {page === 'work' && <WorkPage onNavigate={onNavigate} />}
        {page === 'experiments' && <ExperimentsPage />}
        {page === 'open-source' && <OpenSourcePage />}
        {page === 'about' && <AboutPage />}
      </div>
      <footer className="site-footer"><span>© 2026 DUNG TRAN</span><span>made with questionable life choices.</span></footer>
    </main>
  )
}

function WorkPage({ onNavigate }: { onNavigate: InteriorPageProps['onNavigate'] }) {
  const goToExperiments = () => {
    const tab = document.querySelector('[data-cat-tab="experiments"]') as HTMLElement | null
    onNavigate('experiments', tab)
  }

  return (
    <div className="work-content">
      <div className="portfolio-card-list">
        {workItems.map((item) => <WorkCard item={item} key={item.company} />)}
      </div>
      <section className="work-cta" aria-label="Continue to experiments">
        <p>okay, that&apos;s the responsible stuff.<br />wanna see what i build when nobody asks me?</p>
        <button className="text-action" type="button" onClick={goToExperiments}>SEE THE EXPERIMENTS <span>→</span></button>
      </section>
    </div>
  )
}

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <PortfolioCard number={item.number} meta={item.period} metaRight={item.role} title={item.company} variant="work" className={item.freelance ? 'portfolio-card--freelance' : ''}>
      <div className="work-project-list">
        {item.projects.map((project) => (
          <section className="work-project" key={project.title}>
            <h4>{project.title}</h4>
            {project.bullets && <ul className="work-bullets">{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
            {project.metric && <div className="work-metric">→ performance tune-up: <strong>{project.metric}</strong></div>}
          </section>
        ))}
      </div>
    </PortfolioCard>
  )
}

function ExperimentsPage() {
  return (
    <div className="experiments-content">
      <section className="experiment-group experiment-group--labs" aria-labelledby="maduro-labs-title">
        <div className="section-rule"><span>01 / MADUROLABS</span><span>independent software lab</span></div>
        <h2 id="maduro-labs-title">MaduroLabs.</h2>
        <p className="experiment-group-intro">an independent software lab for ideas that got a little out of hand.</p>
        <a className="text-action text-action--muted experiment-group-link" href="https://github.com/MaduroLabs" target="_blank" rel="noreferrer">GITHUB ORGANIZATION <span>↗</span></a>
        <div className="portfolio-card-list portfolio-card-list--experiments">
          {maduroLabsProjects.map((project) => <ProjectCard project={project} key={project.id} />)}
        </div>
      </section>
      <section className="experiment-group experiment-group--independent" aria-labelledby="independent-projects-title">
        <div className="section-rule"><span>02 / INDEPENDENT PROJECTS</span><span>still engineering experiments</span></div>
        <h2 id="independent-projects-title">the other experiments.</h2>
        <div className="portfolio-card-list portfolio-card-list--experiments">
          {experimentProjects.map((project) => <ProjectCard project={project} key={project.id} />)}
        </div>
      </section>
      <section className="side-quests-section" aria-labelledby="side-quests-title">
        <div className="section-rule"><span>03 / SIDE QUESTS</span><span>smaller commitment</span></div>
        <h2 id="side-quests-title">dumb ideas, smaller commitment.</h2>
        <div className="side-quest-list">
          {experiments.map((experiment, index) => (
            <article className="side-quest-item" key={experiment.title}>
              <span className="experiment-number">0{index + 1}</span>
              <div><h3>{experiment.title}</h3><p>{experiment.description}</p></div>
              <span className="experiment-label">{experiment.label}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

function OpenSourcePage() {
  return (
    <div className="open-source-content">
      <section className="contributions-section" aria-labelledby="contributions-title">
        <div className="section-rule"><span>01 / CONTRIBUTIONS</span><span>upstream, where the bugs live</span></div>
        <h2 id="contributions-title">things i helped fix.</h2>
        <div className="portfolio-card-list portfolio-card-list--open-source">
          {openSourceRepositories.map((repository) => (
            <PortfolioCard
              key={repository.name}
              number="01"
              meta="Repository"
              metaRight={repository.role}
              title={repository.name}
              description={repository.description}
              tech={repository.tech}
              className="portfolio-card--repository"
              footer={(
                <div className="project-actions">
                  <a className="text-action" href={repository.pullRequests[0]?.url} target="_blank" rel="noreferrer">VIEW PR <span>↗</span></a>
                  <a className="text-action text-action--muted" href={repository.url} target="_blank" rel="noreferrer">REPOSITORY <span>↗</span></a>
                </div>
              )}
            >
              <div className="pull-request-list">
                {repository.pullRequests.map((pullRequest) => (
                  <article className="pull-request" key={pullRequest.number}>
                    <div className="pull-request__meta"><span>PR #{pullRequest.number}</span><span>{pullRequest.status} / {pullRequest.date}</span></div>
                    <h3>{pullRequest.title}</h3>
                    <p>{pullRequest.description}</p>
                    <ul className="pull-request__details">{pullRequest.technicalDetails.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  </article>
                ))}
              </div>
            </PortfolioCard>
          ))}
        </div>
      </section>
      <section className="github-cta" aria-label="Follow on GitHub">
        <p>more bugs to fix. unfortunately.</p>
        <div className="project-actions">
          <a className="text-action" href="https://github.com/dncmaduro" target="_blank" rel="noreferrer">FOLLOW ON GITHUB <span>↗</span></a>
          <a className="text-action text-action--muted" href="https://github.com/pulls?q=is%3Apr+author%3Adncmaduro+is%3Amerged" target="_blank" rel="noreferrer">MERGED PULL REQUESTS <span>↗</span></a>
        </div>
      </section>
    </div>
  )
}

function AboutPage() {
  const scrollToToolbox = () => {
    document.getElementById('toolbox-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="about-content">
      <section className="about-intro">
        <div className="about-text">
          <p>i&apos;m dung tran. a software engineer from Vietnam.</p>
          <p>i spend most of my day writing code, staring at code, wondering why my code doesn&apos;t work, and then realizing i was the problem all along.</p>
          <p>i mostly work with frontend stuff, but i like messing around with pretty much anything.</p>
          <p>web apps, mobile apps, browser extensions, games, ai stuff... whatever seems interesting at the moment.</p>
          <p>lately, i&apos;ve been digging into how frontend frameworks actually work, building a runtime in rust, and contributing to open source.</p>
          <p>apparently using software wasn&apos;t enough. now i need to know how it&apos;s built, too.</p>
          <p>sometimes i build things because they&apos;re useful. sometimes because i&apos;m bored.</p>
          <p>and sometimes i start a project at 2am and question my life choices the next morning.</p>
          <p>anyway, that&apos;s pretty much me.</p>
        </div>
        <aside className="about-aside">
          <div className="about-aside-top"><span className="stamp-box">FROM<br />VIETNAM<br /><b>VN / 04</b></span><span className="aside-microcopy">no origin story.<br />just tabs open.</span></div>
          <button className="about-scroll-action" type="button" onClick={scrollToToolbox}>let&apos;s see what i do <span>↓</span></button>
        </aside>
      </section>
      <section id="toolbox-section" className="toolbox-section" aria-labelledby="toolbox-title">
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
      <ContactSection />
    </div>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section contact-content" aria-labelledby="contact-title">
      <div className="section-rule"><span>04 / CONTACT</span><span>the inbox is open</span></div>
      <h2 id="contact-title">wanna talk?</h2>
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
    </section>
  )
}
