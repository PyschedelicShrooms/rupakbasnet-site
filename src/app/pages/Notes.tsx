import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

import { chapterItemCount, chapters, notesIntro } from '../../data/notes'
import { Lines, Reveal } from '../components/motion'

export function Notes() {
  return (
    <article className="mx-auto max-w-[980px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Reveal>
        <p className="text-[13px] uppercase tracking-[0.14em] text-faint">For my students</p>
      </Reveal>

      <Lines as="h1" className="mt-4 font-display text-[clamp(44px,7vw,84px)]" lines={['Notes']} delay={0.05} />

      <Reveal delay={0.15}>
        <p className="mt-6 max-w-2xl text-pretty text-[17px] leading-relaxed text-muted">{notesIntro}</p>
      </Reveal>

      <ul className="mt-14 border-t border-line">
        {chapters.map((chapter, i) => (
          <Reveal key={chapter.slug} delay={0.05 * i}>
            <li className="border-b border-line">
              <Link to={`/notes/${chapter.slug}`} className="group grid gap-3 py-7 sm:grid-cols-[64px_1fr_auto] sm:items-start sm:gap-6">
                <span className="text-[13px] tabular-nums text-faint">{String(i + 1).padStart(2, '0')}</span>
                <span className="block">
                  <span className="block text-[22px] font-medium leading-tight transition-colors group-hover:text-accent sm:text-[26px]">{chapter.title}</span>
                  <span className="mt-1.5 block text-[13px] uppercase tracking-[0.1em] text-faint">{chapter.level}</span>
                  <span className="mt-3 block max-w-xl text-pretty text-[15px] leading-relaxed text-muted">{chapter.summary}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-[14px] text-muted transition-colors group-hover:text-fg sm:mt-1">
                  {chapterItemCount(chapter)} resources
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          </Reveal>
        ))}
      </ul>
    </article>
  )
}
