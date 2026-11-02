import { AnimatePresence, motion } from 'motion/react'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ClipboardList,
  Code2,
  Cpu,
  FileDown,
  FileText,
  FlaskConical,
  GraduationCap,
  HelpCircle,
  ListChecks,
  Plus,
  Target,
  Terminal,
  Trophy,
  Video,
  type LucideIcon,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'

import { services, site, testimonials } from '../../data/site'
import { Lines, Magnetic, Parallax, Reveal } from '../components/motion'
import { cx } from '../lib/cx'

const ease = [0.22, 1, 0.36, 1] as const

// ---------------------------------------------------------------------------
// Classroom content, used by the teaching sections on this page only.
// ---------------------------------------------------------------------------

const focusAreas = [
  { title: 'Practical learning', body: 'Every lesson ends with something working on the screen, not a definition copied off the board.' },
  { title: 'Programming', body: 'Python first, then the web: we read code, break it on purpose, and write it again from an empty file.' },
  { title: 'Problem solving', body: 'Finding out what went wrong is most of the skill, so we practise it out loud instead of hiding it.' },
  { title: 'Digital literacy', body: 'Using a computer well, and understanding what it is doing with you while you use it.' },
  { title: 'Technology skills', body: 'Files, formats, hardware and networks — the everyday things a syllabus usually skips.' },
]

const classCards: { label: string; title: string; icon: LucideIcon; body: string; meta: string }[] = [
  { label: 'Class 8', title: 'Computer Science', icon: BookOpen, body: 'How a computer works, typing and files, and a first taste of programming with Scratch blocks.', meta: 'Chapter notes and lab tasks' },
  { label: 'Class 9', title: 'Computer Science', icon: Code2, body: 'Number systems, hardware and software, and the first real programs written in Python.', meta: 'Notes, practicals and quizzes' },
  { label: 'Class 10', title: 'Computer Science', icon: GraduationCap, body: 'Databases, networking, and the practical work that turns theory into exam marks.', meta: 'Full unit notes and revision' },
  { label: 'All classes', title: 'Programming and Coding', icon: Terminal, body: 'From a first print statement to a page you can open on a phone, built one line at a time.', meta: 'Python, HTML and CSS' },
  { label: 'All classes', title: 'Computer Fundamentals', icon: Cpu, body: 'Inside the box: components, storage, operating systems and the lab habits that keep machines alive.', meta: 'Theory with lab practice' },
  { label: 'Class 10', title: 'SEE Preparation', icon: Target, body: 'Model papers, timed practice and the chapters that carry the most marks in the SEE.', meta: 'Papers and marking schemes' },
]

const resourceItems: { title: string; body: string; meta: string; icon: LucideIcon }[] = [
  { title: 'Chapter-wise Notes', body: 'One page per chapter, in textbook order, written for revision rather than reading.', meta: 'Class 8, 9 and 10', icon: FileText },
  { title: 'PDF Study Materials', body: 'Slides and handouts from class, collected into printable files.', meta: 'Print-ready', icon: FileDown },
  { title: 'Practice Questions', body: 'Short and long answer sets for every unit, with worked answers.', meta: 'With answers', icon: ListChecks },
  { title: 'MCQ Quizzes', body: 'Ten questions per chapter, marked the moment you finish.', meta: 'Self-marking', icon: HelpCircle },
  { title: 'Practical Exercises', body: 'Step-by-step lab sheets for the machines in the lab.', meta: 'Lab sheets', icon: FlaskConical },
  { title: 'Model Question Papers', body: 'Full papers in exam format, with a marking scheme.', meta: 'SEE pattern', icon: ClipboardList },
]

const interactiveItems: { title: string; body: string; icon: LucideIcon }[] = [
  { title: 'Online Coding Practice', body: 'Small problems you can solve in the browser, from printing a line to looping through a list.', icon: Terminal },
  { title: 'Programming Challenges', body: 'Weekly puzzles for the coding club, with a leaderboard that resets each term.', icon: Trophy },
  { title: 'Online Quizzes', body: 'Chapter quizzes that mark themselves, so you know what to revise before the test.', icon: ListChecks },
  { title: 'Computer Knowledge Tests', body: 'Short timed tests on hardware, software, networks and digital safety.', icon: Cpu },
]

const updates = [
  { date: '24 October 2026', tag: 'New material', title: 'Class 9 HTML unit notes are up', body: 'Six pages on tags, document structure and a first stylesheet, with the lab exercises at the end.' },
  { date: '12 October 2026', tag: 'Class 10', title: 'SEE model paper set two added', body: 'A full paper in exam format with a marking scheme. We will run it timed on Friday.' },
  { date: '28 September 2026', tag: 'Notice', title: 'Lab open at lunch on Wednesdays', body: 'Machines one to eleven are free for practice or project work. Bring your own questions.' },
]

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <HeroField />
        <HeroVideo />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-10 pt-28 sm:px-8 sm:pb-14">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-2">
            <h1 className="font-display text-[clamp(64px,13.5vw,210px)]">
              {site.name.split(' ').map((word, i) => (
                <span key={word} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
                  <motion.span className="block" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.25 + i * 0.12, ease }}>
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease }}
              className="font-display text-[clamp(16px,2vw,28px)] text-accent sm:pb-3"
            >
              {site.tagline}
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.7, ease }} className="mt-10 border-t border-fg/15 pt-6">
            <p className="max-w-md text-pretty text-[17px] leading-relaxed text-fg sm:text-[19px]">{site.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-line py-5" aria-hidden>
        <ul className="font-display flex w-max animate-marquee items-center gap-10 whitespace-nowrap text-[28px] text-fg/70 sm:text-[36px]">
          {[...site.marquee, ...site.marquee].map((item, i) => (
            <li key={i} className="flex items-center gap-10">
              {item}
              <span className="round size-2 rounded-full bg-accent" />
            </li>
          ))}
        </ul>
      </div>

      <Welcome />

      <TeachingAbout />

      <ExploreLearning />

      <Resources />

      <Interactive />

      <Updates />

      {/* About teaser */}
      <section className="mx-auto max-w-[1400px] px-5 pt-32 sm:px-8 sm:pt-44">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <Parallax src="/images/portrait.jpg" alt={site.name} className="aspect-[3/4] max-w-[460px] rounded-image" strength={6} />
          </Reveal>
          <div className="flex flex-col justify-center">
            <Lines
              as="h2"
              className="font-display text-balance text-[40px] sm:text-[56px] lg:text-[64px]"
              lines={['Every student', 'can build', 'something real']}
            />
            <Reveal delay={0.2} className="mt-8 max-w-xl text-pretty text-[17px] leading-relaxed text-muted">
              <p>
                Most students meet computers as a subject to memorise. I teach it as something you can build with: start with one small thing that works, break it, fix it, and discover you understood more than you thought.
              </p>
              <p className="mt-4">I teach grades 9 and 10 at a secondary school in {site.location}, and run the coding club after the last bell.</p>
            </Reveal>
            <Reveal delay={0.3} className="mt-8">
              <Link to="/about" className="link-draw inline-flex items-center gap-1.5 text-[15px] font-medium">
                More about me
                <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-[1400px] px-5 pt-32 sm:px-8 sm:pt-44">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <Lines as="h2" className="font-display text-[40px] sm:text-[56px]" lines={['What I teach']} />
            <Reveal delay={0.1} className="mt-4 max-w-xs text-[15px] text-muted">
              Four things, taught properly. Most terms are two of them.
            </Reveal>
          </div>
          <Services />
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-[1400px] px-5 pt-32 sm:px-8 sm:pt-44">
        <Testimonials />
      </section>

      <Closing />
    </>
  )
}

// ---------------------------------------------------------------------------
// Hero video. Put the clip in public/media and set the path below, e.g.
// '/media/hero.mp4'. Until then the animated colour field is the backdrop and
// a dashed frame marks the empty slot; the frame disappears by itself once a
// clip loads.
// ---------------------------------------------------------------------------
const heroVideo = '/media/hero.mp4'

function HeroVideo() {
  const [failed, setFailed] = useState(false)
  if (!heroVideo || failed) return <HeroVideoSlot failed={failed} />
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,#000_62%,transparent_97%)]"
    >
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onError={() => setFailed(true)}
        className="size-full object-cover"
      />
      {/* Keeps the dark name readable over footage. */}
      <div className="absolute inset-0 bg-bg/45" />
    </div>
  )
}

/** Marks where the clip goes while there is none, so the slot is visible. */
function HeroVideoSlot({ failed }: { failed: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-5 top-20 sm:inset-x-8 sm:top-24">
      <div className="flex h-[clamp(140px,34svh,320px)] w-full flex-col items-center justify-center gap-3 rounded-[24px] border border-dashed border-line-strong bg-surface/40 px-6 text-center backdrop-blur-[2px]">
        <span className="grid size-12 place-items-center rounded-full border border-line-strong bg-bg">
          <Video className="size-5 text-faint" strokeWidth={1.6} />
        </span>
        <p className="text-[11px] uppercase tracking-[0.18em] text-faint">
          {failed ? 'Video could not load' : 'Hero video placeholder'}
        </p>
        <p className="max-w-xs text-[13px] leading-relaxed text-muted">
          {failed ? (
            <>Check that the file exists at <span className="text-fg">{heroVideo}</span>.</>
          ) : (
            <>Put your clip at <span className="text-fg">public/media/hero.mp4</span> and it fills the hero edge to edge.</>
          )}
        </p>
      </div>
    </div>
  )
}

// Slow colour fields behind the hero: the accent, a coral and a warm peach,
// blurred and drifting, fading into the paper before the intro line. The
// grain keeps it from reading as a flat gradient.
function HeroField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_60%,transparent_96%)]">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6, ease }} className="absolute inset-0">
        <div className="round absolute -top-[25%] right-[-12%] h-[95%] w-[70%] animate-drift-a rounded-full bg-[radial-gradient(closest-side,rgb(47_59_255/0.72),transparent)] blur-3xl" />
        <div className="round absolute -top-[10%] left-[-12%] h-[80%] w-[62%] animate-drift-b rounded-full bg-[radial-gradient(closest-side,rgb(255_106_61/0.62),transparent)] blur-3xl" />
        <div className="round absolute top-[22%] left-[32%] h-[70%] w-[56%] animate-drift-c rounded-full bg-[radial-gradient(closest-side,rgb(255_196_120/0.7),transparent)] blur-3xl" />
        <div className="round absolute top-[45%] right-[12%] h-[50%] w-[40%] animate-drift-b rounded-full bg-[radial-gradient(closest-side,rgb(196_170_255/0.55),transparent)] blur-3xl" />
      </motion.div>
      <div className="grain absolute inset-0" />
    </div>
  )
}

function Services() {
  const [open, setOpen] = useState(0)
  return (
    <ul className="border-t border-line">
      {services.map((s, i) => {
        const isOpen = open === i
        return (
          <li key={s.title} className="border-b border-line">
            <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)} className="group flex w-full items-center gap-6 py-7 text-left">
              <span className="w-10 shrink-0 text-[14px] tabular-nums text-faint">0{i + 1}</span>
              <span className={cx('font-display flex-1 text-[32px] transition-colors sm:text-[44px]', isOpen ? 'text-fg' : 'text-fg/60 group-hover:text-fg')}>{s.title}</span>
              <span className={cx('grid size-10 shrink-0 place-items-center rounded-[12px] border border-line-strong transition-colors duration-300', isOpen && 'border-fg bg-fg text-bg')}>
                <Plus className={cx('size-4 transition-transform duration-500', isOpen && 'rotate-45')} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease }} className="overflow-hidden">
                  <p className="max-w-xl pb-8 pl-16 text-pretty text-[16px] leading-relaxed text-muted">{s.body}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}

function Testimonials() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]
  return (
    <div className="rounded-[32px] bg-fg px-6 py-14 text-bg sm:px-14 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.blockquote key={index} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4, ease }}>
            <p className="font-display text-balance text-[30px] leading-[1.1] sm:text-[44px]">“{t.quote}”</p>
            <footer className="mt-8 text-[15px] text-bg/60">
              <span className="text-bg">{t.name}</span>, {t.role}
            </footer>
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-10 flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cx('h-1.5 rounded-[3px] transition-all duration-500', i === index ? 'w-10 bg-bg' : 'w-4 bg-bg/30 hover:bg-bg/50')}
            />
          ))}
          <Magnetic className="ml-auto">
            <button type="button" onClick={() => setIndex((index + 1) % testimonials.length)} className="grid size-12 place-items-center rounded-[14px] border border-bg/20 transition-colors hover:bg-bg hover:text-fg" aria-label="Next">
              <ArrowUpRight className="size-4 rotate-45" />
            </button>
          </Magnetic>
        </div>
      </div>
    </div>
  )
}

// Welcome band under the name: the classroom headline, the two entry points and
// the illustration of students at the machines.
function Welcome() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-32">
      <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <p className="flex items-center gap-2.5 text-[12px] uppercase tracking-[0.18em] text-faint">
              <span className="round inline-block size-1.5 rounded-full bg-accent" />
              Computer science classroom
            </p>
          </Reveal>
          <Lines as="h2" className="mt-6 text-balance font-display text-[clamp(30px,7vw,72px)]" lines={['Welcome to my', 'Computer Science', 'Classroom']} />
          <Reveal delay={0.15} className="mt-6 max-w-[34rem] text-pretty text-[17px] leading-relaxed text-fg sm:text-[19px]">
            <p>Explore Technology, Learn Programming, Develop Skills, and Build Your Digital Future.</p>
          </Reveal>
          <Reveal delay={0.22} className="mt-4 max-w-[36rem] text-pretty text-[15.5px] leading-relaxed text-muted">
            <p>
              I am {site.name}, a secondary level computer science teacher. I take Class 8 to 10, run the coding club after the last bell, and think the subject belongs on a screen you can actually use — not in a notebook copied off the board.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#resources"
              className="group inline-flex items-center justify-center gap-2 rounded-[14px] bg-fg px-6 py-3.5 text-[15px] font-medium text-bg transition-transform duration-300 hover:-translate-y-0.5"
            >
              Explore Learning Resources
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#learn"
              className="group inline-flex items-center justify-center gap-2 rounded-[14px] border border-line-strong px-6 py-3.5 text-[15px] font-medium transition-colors duration-300 hover:border-fg hover:bg-fg hover:text-bg"
            >
              Start Learning
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="image-frame overflow-hidden rounded-image border border-line shadow-[0_30px_70px_-46px_rgba(20,19,17,0.55)]">
            <Parallax src="/images/students-coding.svg" alt="Students coding together at the computers in the school lab" className="aspect-[16/11]" strength={4} />
          </div>
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-muted">
            <span>Class 8 to 10</span>
            <span className="text-faint">·</span>
            <span>Lab sessions</span>
            <span className="text-faint">·</span>
            <span>Coding club</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function TeachingAbout() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-32">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="text-[12px] uppercase tracking-[0.18em] text-faint">About my teaching</p>
          </Reveal>
          <Lines as="h2" className="mt-5 font-display text-[clamp(30px,4.4vw,58px)] text-balance" lines={['Teaching the', 'thinking, not', 'the buttons']} />
          <Reveal delay={0.15} className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">
            <p>Secondary level computer science, Class 8 to 10 — inside the timetable and after the last bell.</p>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="text-pretty text-[17px] leading-relaxed text-fg sm:text-[19px]">
              Software changes every year; the way you think about a problem does not. My classes are built around practical work: students write code, break it, fix it, and then explain it to the person next to them.
            </p>
          </Reveal>
          <ul className="mt-9 grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
            {focusAreas.map((f, i) => (
              <li key={f.title} className="border-b border-line">
                <Reveal delay={(i % 2) * 0.06} className="group flex gap-4 py-6">
                  <span className="text-[12px] tabular-nums text-faint">0{i + 1}</span>
                  <div>
                    <h3 className="text-[16px] font-medium transition-colors duration-300 group-hover:text-accent">{f.title}</h3>
                    <p className="mt-1.5 max-w-sm text-[14.5px] leading-relaxed text-muted">{f.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ExploreLearning() {
  return (
    <section id="learn" className="mx-auto max-w-[1400px] scroll-mt-24 px-5 pt-24 sm:px-8 sm:pt-32">
      <div className="max-w-2xl">
        <Reveal>
          <p className="text-[12px] uppercase tracking-[0.18em] text-faint">Explore learning</p>
        </Reveal>
        <Lines as="h2" className="mt-5 font-display text-[clamp(30px,5vw,60px)]" lines={['Explore', 'learning']} />
        <Reveal delay={0.1} className="mt-5 max-w-lg text-pretty text-[16px] leading-relaxed text-muted">
          <p>Six ways into the subject, on the timetable and off it. Start with your class, or with whatever you are curious about.</p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {classCards.map((c, i) => {
          const Icon = c.icon
          return (
            <Reveal key={`${c.label}-${c.title}`} delay={(i % 3) * 0.08} className="h-full">
              <article className="group flex h-full flex-col rounded-[24px] border border-line bg-surface p-6 transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_26px_50px_-32px_rgba(20,19,17,0.45)] sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-[14px] bg-surface-2 text-fg transition-colors duration-500 group-hover:bg-fg group-hover:text-bg">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <span className="rounded-full border border-line px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-faint">{c.label}</span>
                </div>
                <h3 className="mt-8 font-display text-[26px]">{c.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{c.body}</p>
                <p className="mt-auto pt-6 text-[12.5px] uppercase tracking-[0.1em] text-faint">{c.meta}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function Resources() {
  return (
    <section id="resources" className="mx-auto max-w-[1400px] scroll-mt-24 px-5 pt-24 sm:px-8 sm:pt-32">
      <div className="relative overflow-hidden rounded-[32px] bg-fg px-6 py-12 text-bg sm:px-12 sm:py-16">
        <div aria-hidden className="pointer-events-none absolute -top-28 -right-24 size-[420px] rounded-full bg-[radial-gradient(closest-side,rgb(47_59_255/0.5),transparent)] blur-2xl" />
        <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-[12px] uppercase tracking-[0.18em] text-bg/45">Learning resources</p>
            <h2 className="mt-4 font-display text-[clamp(28px,4.2vw,52px)] text-balance">Everything from class, in one place</h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-bg/65">
              Notes, papers and quizzes are going up class by class. If you need a copy before it appears here, ask me in the lab.
            </p>
            <a href={`mailto:${site.email}`} className="link-draw mt-7 inline-flex items-center gap-2 text-[14px] text-bg/85">
              Ask for a copy
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <ul className="grid sm:grid-cols-2 sm:gap-x-10">
            {resourceItems.map((r, i) => {
              const Icon = r.icon
              return (
                <li key={r.title} className="border-t border-bg/15">
                  <Reveal delay={(i % 2) * 0.06} className="group flex gap-4 py-5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-[12px] border border-bg/20 text-bg/70 transition-colors duration-500 group-hover:border-bg group-hover:bg-bg group-hover:text-fg">
                      <Icon className="size-[18px]" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="text-[16px] font-medium">{r.title}</h3>
                      <p className="mt-1 text-[14px] leading-relaxed text-bg/60">{r.body}</p>
                      <p className="mt-2 text-[12px] uppercase tracking-[0.1em] text-bg/40">{r.meta}</p>
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Interactive() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Reveal>
            <p className="text-[12px] uppercase tracking-[0.18em] text-faint">Interactive learning</p>
          </Reveal>
          <Lines as="h2" className="mt-5 font-display text-[clamp(30px,4.6vw,56px)]" lines={['Practice, not', 'just notes']} />
        </div>
        <Reveal delay={0.1} className="max-w-sm text-[14.5px] leading-relaxed text-muted">
          <p>These are being set up for the classroom and are not live yet. When one opens, it will appear here first.</p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {interactiveItems.map((item, i) => {
          const Icon = item.icon
          return (
            <Reveal key={item.title} delay={(i % 4) * 0.06} className="h-full">
              <article className="group flex h-full flex-col rounded-[24px] border border-dashed border-line-strong p-6 transition-[transform,border-color,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-solid hover:border-line-strong hover:bg-surface hover:shadow-[0_26px_50px_-32px_rgba(20,19,17,0.35)]">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-[14px] bg-surface-2 text-fg transition-colors duration-500 group-hover:bg-fg group-hover:text-bg">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <span className="rounded-full border border-line px-2.5 py-1 text-[10.5px] uppercase tracking-[0.12em] text-faint">Planned</span>
                </div>
                <h3 className="mt-7 text-[17px] font-medium">{item.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-muted">{item.body}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function Updates() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-32">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.4fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="text-[12px] uppercase tracking-[0.18em] text-faint">Latest updates</p>
          </Reveal>
          <Lines as="h2" className="mt-5 font-display text-[clamp(30px,4.6vw,56px)]" lines={['Latest', 'updates']} />
          <Reveal delay={0.1} className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted">
            <p>Announcements, new material and dates worth knowing about.</p>
          </Reveal>
        </div>

        <ul className="border-t border-line">
          {updates.map((u, i) => (
            <li key={u.title} className="border-b border-line">
              <Reveal delay={i * 0.05}>
                <article className="group grid gap-2 py-7 sm:grid-cols-[9rem_1fr] sm:gap-x-8">
                  <p className="text-[12px] uppercase tracking-[0.1em] text-faint sm:pt-1">{u.date}</p>
                  <div>
                    <p className="text-[11.5px] uppercase tracking-[0.12em] text-accent">{u.tag}</p>
                    <h3 className="mt-2 font-display text-[24px] transition-colors duration-300 group-hover:text-accent sm:text-[28px]">{u.title}</h3>
                    <p className="mt-1.5 max-w-xl text-[14.5px] leading-relaxed text-muted">{u.body}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Closing() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pt-32 sm:px-8 sm:pt-44">
      <div className="relative overflow-hidden rounded-[32px] bg-accent px-6 py-16 text-bg sm:rounded-[40px] sm:px-14 sm:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="round absolute -top-1/3 -left-24 size-[520px] rounded-full bg-[radial-gradient(closest-side,rgb(242_239_233/0.32),transparent)] blur-2xl" />
          <div className="round absolute -right-24 -bottom-2/5 size-[480px] rounded-full bg-[radial-gradient(closest-side,rgb(20_19_17/0.32),transparent)] blur-2xl" />
        </div>
        <div className="grain absolute inset-0" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[12px] uppercase tracking-[0.2em] text-bg/75">Technology is the future.</p>
          <Lines as="h2" className="mt-6 font-display text-[clamp(32px,6.4vw,84px)] text-balance" lines={['Start learning', 'today!']} />
          <p className="mx-auto mt-6 max-w-xl text-pretty text-[15.5px] leading-relaxed text-bg/85">
            Notes, quizzes and practicals for Class 8 to 10, plus everything the coding club builds. Start with a chapter, or with a question you cannot answer yet.
          </p>
          <a
            href="#resources"
            className="group mt-9 inline-flex items-center gap-2 rounded-[14px] bg-bg px-6 py-3.5 text-[15px] font-medium text-fg transition-transform duration-300 hover:-translate-y-0.5"
          >
            Explore Learning Resources
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
