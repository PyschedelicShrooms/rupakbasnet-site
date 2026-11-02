import { ArrowLeft, ArrowUpRight, FileText, Globe, Image as ImageIcon } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router'

import { getChapter, type NoteFormat } from '../../data/notes'
import { Lines, Reveal } from '../components/motion'

const sectionTitle = 'text-[13px] uppercase tracking-[0.14em] text-faint'

const icons: Record<NoteFormat, typeof FileText> = {
  pdf: FileText,
  page: Globe,
  image: ImageIcon,
}

export function NoteChapter() {
  const { slug } = useParams()
  const chapter = slug ? getChapter(slug) : undefined

  if (!chapter) return <Navigate to="/notes" replace />

  return (
    <article className="mx-auto max-w-[980px] px-5 pt-28 sm:px-8 sm:pt-36">
      <div className="no-print">
        <Link to="/notes" className="inline-flex h-9 items-center gap-1.5 text-[14px] text-muted transition-colors hover:text-fg">
          <ArrowLeft className="size-4" />
          Notes
        </Link>
      </div>

      <header className="mt-8 border-b border-line pb-8">
        <Lines as="h1" className="font-display text-[clamp(38px,6vw,72px)]" lines={[chapter.title]} />
        <p className="mt-3 text-[13px] uppercase tracking-[0.1em] text-faint">{chapter.level}</p>
        <p className="mt-5 max-w-2xl text-pretty text-[17px] leading-relaxed text-fg/90">{chapter.summary}</p>
      </header>

      {chapter.groups.map((group, groupIndex) => (
        <Reveal key={group.title} delay={0.05 * groupIndex} className="mt-12">
          <h2 className={sectionTitle}>{group.title}</h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {group.items.map((item) => {
              const Icon = icons[item.format]
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block py-6 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <span className="flex items-center gap-2.5">
                          <Icon className="size-4 shrink-0 text-faint transition-colors group-hover:text-accent" strokeWidth={1.7} />
                          <span className="text-[17px] font-medium leading-snug transition-colors group-hover:text-accent sm:text-[18px]">{item.title}</span>
                        </span>
                        <span className="mt-2 block max-w-2xl text-pretty text-[15px] leading-relaxed text-muted">{item.description}</span>
                        <span className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-faint">
                          <span>{item.meta}</span>
                          {item.credit && (
                            <>
                              <span aria-hidden>·</span>
                              <span>{item.credit}</span>
                            </>
                          )}
                        </span>
                      </div>
                      <ArrowUpRight className="mt-1 size-4 shrink-0 text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                    {item.format === 'image' && (
                      <img
                        src={item.href}
                        alt={item.title}
                        loading="lazy"
                        className="mt-5 w-full max-w-[460px] rounded-[10px] border border-line bg-surface"
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </Reveal>
      ))}

      <Reveal delay={0.2} className="mt-14 border-t border-line pt-7">
        <p className="text-[14px] leading-relaxed text-muted">
          Something unclear, or a program you want worked through again?{' '}
          <Link to="/about#contact" className="link-draw text-fg">
            Send me an email
          </Link>{' '}
          and I will add it here.
        </p>
      </Reveal>
    </article>
  )
}
