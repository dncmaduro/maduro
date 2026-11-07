import { navItems } from '../data/siteData'

type HomePageProps = {
  onNavigate: (page: string, target: HTMLElement | null) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main className="home-page page-shell" aria-labelledby="home-title">
      <div className="home-topline">
        <span className="eyebrow">DUNG TRAN / SOFTWARE ENGINEER</span>
      </div>
      <section className="home-hero">
        <p className="hero-kicker">serious engineer, unserious website.</p>
        <h1 id="home-title">yo, i&apos;m Dung Tran <span className="nickname">(Maduro)</span></h1>
        <div className="hero-copy">
          <p>just some engineer who likes building random shit.</p>
          <p>could be something useful, could be something completely stupid. honestly, i don&apos;t really care.</p>
          <p>if it sounds fun, i&apos;ll probably build it.</p>
        </div>
        <div className="home-note"><span className="blink-dot" /> anyway, pick a box. the cat has too much energy.</div>
      </section>
      <section className="home-boxes" aria-label="Portfolio sections">
        {navItems.map((item) => (
          <button className={`home-box home-box--${item.id}`} key={item.id} type="button" onClick={(event) => onNavigate(item.id, event.currentTarget.querySelector('.energy-spark'))}>
            <span className="box-topline"><span>0{item.plate}</span><span>{item.detail}</span></span>
            <span className="energy-spark" data-target={item.id} aria-hidden="true"><span className="spark-mark">✦</span></span>
            <span className="box-label">{item.label}</span>
            <span className="box-caption">open / inspect / cause chaos</span>
            <span className="box-screw box-screw--tl" /><span className="box-screw box-screw--br" />
          </button>
        ))}
      </section>
      <section className="home-aside">
        <div className="aside-note">i write code for a living.<br />then i go home and write more code<br />for some reason.</div>
        <div className="ascii-mark" aria-hidden="true">╲╱<br />╱╲</div>
      </section>
    </main>
  )
}
