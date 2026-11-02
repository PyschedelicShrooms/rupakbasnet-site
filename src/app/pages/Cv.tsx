import { ArrowLeft, Mail, MapPin, Printer } from 'lucide-react'
import { Link } from 'react-router'

import { about, education, experience, hobbies, site, skills } from '../../data/site'
import { Lines, Reveal } from '../components/motion'

const sectionTitle = 'text-[13px] uppercase tracking-[0.14em] text-faint'

export function Cv() {
  return (
    <article className="mx-auto max-w-[980px] px-5 pt-28 sm:px-8 sm:pt-36">
      <div className="no-print flex items-center justify-between gap-4">
        <Link to="/about" className="inline-flex h-9 items-center gap-1.5 text-[14px] text-muted transition-colors hover:text-fg">
          <ArrowLeft className="size-4" />
          About
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex h-11 items-center gap-2 rounded-[12px] border border-fg px-5 text-[14px] font-medium transition-colors hover:bg-fg hover:text-bg"
        >
          <Printer className="size-4" />
          Print or save as PDF
        </button>
      </div>

      <header className="mt-10 border-b border-line pb-8">
        <Lines as="h1" className="font-display text-[clamp(44px,7vw,84px)]" lines={[site.name]} />
        <p className="mt-3 text-[17px] text-muted">{site.role}</p>
        <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-2 text-[14px]">
          <li className="inline-flex items-center gap-1.5">
            <Mail className="size-3.5 text-faint" />
            <a href={`mailto:${site.email}`} className="link-draw">
              {site.email}
            </a>
          </li>
          <li className="inline-flex items-center gap-1.5 text-muted">
            <MapPin className="size-3.5 text-faint" />
            {site.address}
          </li>
        </ul>
      </header>

      <Reveal className="mt-14">
        <h2 className={sectionTitle}>Profile</h2>
        <p className="mt-4 max-w-3xl text-pretty text-[17px] leading-relaxed text-fg/90">{about.lead}</p>
      </Reveal>

      <Reveal delay={0.05} className="mt-12">
        <h2 className={sectionTitle}>Education</h2>
        <ol className="mt-4 divide-y divide-line border-y border-line">
          {education.map((item) => (
            <li key={item.qualification} className="grid gap-1 py-5 sm:grid-cols-[150px_1fr]">
              <span className="text-[14px] tabular-nums text-faint">{item.period}</span>
              <span>
                <span className="block text-[16px] font-medium">{item.qualification}</span>
                <span className="block text-[14.5px] text-muted">
                  {item.institution} · {item.detail}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <h2 className={sectionTitle}>Experience</h2>
        <ol className="mt-4 divide-y divide-line border-y border-line">
          {experience.map((item) => (
            <li key={item.title} className="grid gap-1 py-5 sm:grid-cols-[150px_1fr]">
              <span className="text-[14px] tabular-nums text-faint">{item.period}</span>
              <span>
                <span className="block text-[16px] font-medium">{item.title}</span>
                <span className="block text-[14.5px] text-muted">{item.detail}</span>
              </span>
            </li>
          ))}
        </ol>
      </Reveal>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <Reveal delay={0.15}>
          <h2 className={sectionTitle}>Subjects and skills</h2>
          <dl className="mt-4 flex flex-col gap-5">
            {skills.map((group) => (
              <div key={group.title}>
                <dt className="text-[15px] font-medium">{group.title}</dt>
                <dd className="mt-1 text-[14.5px] text-muted">{group.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className={sectionTitle}>Interests</h2>
          <ul className="mt-4 flex flex-col gap-2 text-[14.5px] text-muted">
            {hobbies.map((hobby) => (
              <li key={hobby.title}>{hobby.title}</li>
            ))}
          </ul>
          <p className="mt-6 text-[14.5px] leading-relaxed text-muted">
            References from my current school available on request.
          </p>
        </Reveal>
      </div>

      <p className="mt-16 text-[13px] text-faint">Last updated {new Date().getFullYear()}</p>
    </article>
  )
}
