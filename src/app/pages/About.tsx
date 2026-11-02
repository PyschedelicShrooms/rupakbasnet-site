import {
  ArrowUpRight,
  ClipboardCheck,
  Code2,
  Compass,
  Cpu,
  Database,
  FlaskConical,
  FolderCode,
  Globe,
  HardDrive,
  Lightbulb,
  Mail,
  MapPin,
  MessagesSquare,
  Monitor,
  Network,
  Palette,
  Puzzle,
  ShieldCheck,
  Sprout,
  Terminal,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router'

import { site } from '../../data/site'
import { Lines, Parallax, Reveal } from '../components/motion'

// ---------------------------------------------------------------------------
// Editable details for this page. Point `photo` at your own photograph (drop
// the file in public/images and change the path) and the page follows.
// ---------------------------------------------------------------------------

const profile = {
  photo: '/images/portrait.jpg',
  title: 'Secondary Level Computer Science Teacher',
  intro:
    'I am a passionate Secondary Level Computer Science Teacher who believes that technology is not just a subject to study but a skill to explore, understand, and create with. My goal is to make computer education practical, engaging, and meaningful for every student.',
  interests:
    'Most of my work sits where three things meet: programming, web development and computer education. I build small pages and programs with students, keep up with the tools schools are starting to use, and bring that back into the classroom as something we can try on the machines in front of us.',
}

const philosophy: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'Learn by Doing',
    body: 'Every lesson ends with something the student has made, opened or fixed themselves.',
    icon: Wrench,
  },
  {
    title: 'Think Creatively',
    body: 'Students choose the topic, the colours and the problem their own project solves.',
    icon: Lightbulb,
  },
  {
    title: 'Solve Problems',
    body: 'We trace an error back to its cause instead of guessing at the line that broke.',
    icon: Puzzle,
  },
  {
    title: 'Explore Technology',
    body: 'A first look at the hardware, networks and tools shaping the work they will do.',
    icon: Compass,
  },
  {
    title: 'Learn Collaboratively',
    body: 'Pair programming and peer review: explaining it to your neighbour is the test.',
    icon: Users,
  },
  {
    title: 'Grow Digitally',
    body: 'Passwords, privacy and permissions treated as skills, not warnings on a poster.',
    icon: Sprout,
  },
]

const subjects: { title: string; body: string; icon: LucideIcon }[] = [
  { title: 'Computer Fundamentals', body: 'How a machine stores, moves and loses information.', icon: Cpu },
  { title: 'Python Programming', body: 'Variables, conditions, loops and functions, written by hand.', icon: Terminal },
  { title: 'HTML & CSS', body: 'Structure and style, until the page looks like the sketch.', icon: Code2 },
  { title: 'Web Development', body: 'Linking pages, publishing them and testing on a real phone.', icon: Globe },
  { title: 'Computer Hardware and Software', body: 'Inside the box, and the system running on top of it.', icon: HardDrive },
  { title: 'Computer Networking', body: 'Addresses, cables and the path a message actually takes.', icon: Network },
  { title: 'Database Management', body: 'Tables, records and queries that remember things for you.', icon: Database },
  { title: 'Cybersecurity and Digital Literacy', body: 'Passwords, scams and habits that hold outside the lab.', icon: ShieldCheck },
]

const methodology: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'Practical Demonstrations',
    body: 'I solve it once on the projector, then every student repeats it on their own machine while I walk the rows.',
    icon: Monitor,
  },
  {
    title: 'Project-Based Learning',
    body: 'Each term ends in a small build that gets shown to someone outside the class, not just marked.',
    icon: FolderCode,
  },
  {
    title: 'Interactive Lessons',
    body: 'Pair work, quick quizzes and students teaching the next bench what they just worked out.',
    icon: MessagesSquare,
  },
  {
    title: 'Real-Life Examples',
    body: 'A fee receipt, a result sheet, a shop stock list: examples students already recognise.',
    icon: Globe,
  },
  {
    title: 'Computer Laboratory Activities',
    body: 'Supervised hands-on sessions where the goal is a working file, not a copied paragraph.',
    icon: FlaskConical,
  },
  {
    title: 'Continuous Assessment',
    body: 'Short and frequent, mostly informal, so nobody meets a gap for the first time in the exam.',
    icon: ClipboardCheck,
  },
]

const interests: { title: string; body: string; icon: LucideIcon }[] = [
  { title: 'Exploring New Technologies', body: 'Trying the tools before I teach them.', icon: Compass },
  { title: 'Website Development', body: 'Small sites for people who need one.', icon: Globe },
  { title: 'Learning Programming', body: 'One language at a time, slowly.', icon: Terminal },
  { title: 'Educational Innovation', body: 'Better ways to explain the same idea.', icon: Lightbulb },
  { title: 'Digital Creativity', body: 'Posters, slides and classroom visuals.', icon: Palette },
]

export function About() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-32">
      <Profile />
      <Philosophy />
      <Subjects />
      <Methodology />
      <Vision />
      <Interests />
    </article>
  )
}

function SectionHead({
  eyebrow,
  lines,
  intro,
  className,
}: {
  eyebrow: string
  lines: string[]
  intro?: string
  className?: string
}) {
  return (
    <div className={className}>
      <Reveal>
        <p className="text-[12px] uppercase tracking-[0.18em] text-faint">{eyebrow}</p>
      </Reveal>
      <Lines as="h2" className="mt-5 font-display text-[clamp(30px,4.6vw,56px)] text-balance" lines={lines} />
      {intro && (
        <Reveal delay={0.1} className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-muted">
          <p>{intro}</p>
        </Reveal>
      )}
    </div>
  )
}

// 1. Professional profile ------------------------------------------------------

function Profile() {
  return (
    <section>
      <Reveal>
        <p className="text-[12px] uppercase tracking-[0.18em] text-faint">About me</p>
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
        <Reveal>
          <div className="relative w-full max-w-[420px]">
            <Parallax
              src={profile.photo}
              alt={`Portrait of ${site.name}, ${profile.title.toLowerCase()}`}
              className="aspect-[4/5] rounded-image border border-line"
              strength={5}
            />
            {/* Decorative technology accent, kept inside the photo bounds. */}
            <span
              aria-hidden
              className="absolute top-4 right-4 grid size-11 place-items-center rounded-[14px] border border-line-strong/60 bg-bg/85 text-fg backdrop-blur"
            >
              <Code2 className="size-[18px]" strokeWidth={1.6} />
            </span>
            <span className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-[14px] border border-line bg-bg/92 px-3.5 py-3 backdrop-blur">
              <span className="size-1.5 shrink-0 rounded-full bg-accent" />
              <span className="text-[11.5px] font-medium uppercase leading-snug tracking-[0.1em] text-fg">
                {profile.title}
              </span>
            </span>
          </div>
        </Reveal>

        <div>
          <Lines
            as="h1"
            className="font-display text-[clamp(38px,7vw,76px)]"
            lines={['Hello, I’m', site.name]}
            delay={0.1}
          />

          <Reveal delay={0.15} className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-muted">
            <span className="text-accent">{profile.title}</span>
            <span aria-hidden className="hidden size-1 rounded-full bg-line-strong sm:block" />
            <span>{site.location}</span>
            <span aria-hidden className="hidden size-1 rounded-full bg-line-strong sm:block" />
            <span>Class 8 to 10</span>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 text-pretty text-[17px] leading-relaxed sm:text-[19px]">
            <p>{profile.intro}</p>
          </Reveal>

          <Reveal delay={0.25} className="mt-5 text-pretty text-[15px] leading-relaxed text-muted">
            <p>{profile.interests}</p>
          </Reveal>

          <Reveal delay={0.3} className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/#contact"
              className="group inline-flex h-12 items-center gap-2 rounded-[14px] border border-line-strong px-6 text-[15px] font-medium transition-colors hover:border-fg hover:bg-fg hover:text-bg"
            >
              Contact me
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <Reveal delay={0.35}>
            <ul className="mt-9 flex flex-col gap-3 border-t border-line pt-7 text-[14px] sm:flex-row sm:flex-wrap sm:gap-x-8">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex max-w-full items-center gap-2.5 break-all text-muted transition-colors hover:text-fg"
                >
                  <Mail className="size-4 shrink-0 text-faint transition-colors group-hover:text-accent" strokeWidth={1.6} />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-muted">
                <MapPin className="mt-0.5 size-4 shrink-0 text-faint" strokeWidth={1.6} />
                {site.address}
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// 2. Teaching philosophy ------------------------------------------------------

function Philosophy() {
  return (
    <section className="mt-28 sm:mt-40">
      <SectionHead
        eyebrow="My teaching philosophy"
        lines={['Teaching beyond', 'the classroom']}
        intro="I believe every student has the potential to become a creative thinker and problem solver. My approach focuses on understanding concepts through practical experience, rather than memorising information for the exam."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {philosophy.map((item, i) => {
          const Icon = item.icon
          return (
            <Reveal key={item.title} delay={(i % 3) * 0.07} className="h-full">
              <article className="group flex h-full flex-col rounded-[24px] border border-line bg-surface p-6 transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_26px_50px_-32px_rgba(20,19,17,0.45)] sm:p-7">
                <span className="grid size-11 place-items-center rounded-[14px] bg-surface-2 text-fg transition-colors duration-500 group-hover:bg-fg group-hover:text-bg">
                  <Icon className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-7 font-display text-[24px] leading-tight">{item.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{item.body}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

// 3. Subjects and expertise ---------------------------------------------------

function Subjects() {
  return (
    <section className="mt-28 sm:mt-40">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          eyebrow="Subjects and expertise"
          lines={['What I teach']}
          intro="The secondary level syllabus, plus the parts of the subject the paper does not reach."
          className="max-w-2xl"
        />
        <Reveal delay={0.15} className="hidden text-[14px] text-muted sm:block">
          {subjects.length} subjects
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {subjects.map((subject, i) => {
          const Icon = subject.icon
          return (
            <Reveal key={subject.title} delay={(i % 4) * 0.06} className="h-full">
              <article className="group flex h-full flex-col rounded-[24px] border border-line p-5 transition-[transform,border-color,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-line-strong hover:bg-surface hover:shadow-[0_24px_46px_-32px_rgba(20,19,17,0.4)] sm:p-6">
                <span className="grid size-10 place-items-center rounded-[12px] bg-surface-2 text-fg transition-colors duration-500 group-hover:bg-fg group-hover:text-bg">
                  <Icon className="size-[18px]" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-[16px] font-medium leading-snug">{subject.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{subject.body}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

// 4. Teaching methodology -----------------------------------------------------

function Methodology() {
  return (
    <section className="mt-28 sm:mt-40">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHead
          eyebrow="Teaching methodology"
          lines={['How I make', 'learning interesting']}
          intro="The same six habits, every chapter, from the first definition to the last practical."
        />

        <ol className="mt-0">
          {methodology.map((step, i) => {
            const Icon = step.icon
            return (
              <li key={step.title} className="relative pl-14 pb-9 last:pb-0 sm:pl-16">
                {i < methodology.length - 1 && (
                  <span aria-hidden className="absolute left-[19px] top-11 bottom-0 w-px bg-line sm:left-[23px]" />
                )}
                <span className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-line bg-surface text-fg sm:size-12">
                  <Icon className="size-[18px]" strokeWidth={1.6} />
                </span>
                <Reveal delay={(i % 3) * 0.05}>
                  <h3 className="pt-1.5 text-[17px] font-medium sm:pt-3">{step.title}</h3>
                  <p className="mt-1.5 max-w-xl text-pretty text-[14.5px] leading-relaxed text-muted">{step.body}</p>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

// 5. Vision -------------------------------------------------------------------

function Vision() {
  return (
    <section className="mt-28 sm:mt-40">
      <Reveal>
        <div className="relative overflow-hidden rounded-[32px] bg-fg px-6 py-14 text-bg sm:px-14 sm:py-20">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="round absolute -top-1/3 -right-24 size-[460px] rounded-full bg-[radial-gradient(closest-side,rgb(47_59_255/0.55),transparent)] blur-2xl" />
            <div className="round absolute -bottom-1/3 -left-20 size-[380px] rounded-full bg-[radial-gradient(closest-side,rgb(255_196_120/0.35),transparent)] blur-2xl" />
          </div>
          <div className="relative max-w-4xl">
            <h2 className="text-[12px] font-normal uppercase tracking-[0.18em] text-bg/45">
              My vision for digital education
            </h2>
            <blockquote className="mt-6">
              <p className="font-display text-balance text-[26px] leading-[1.15] sm:text-[36px] lg:text-[44px]">
                To empower students with essential technological knowledge, programming skills, digital awareness, and
                the confidence to become responsible digital citizens and future innovators.
              </p>
            </blockquote>
            <p className="mt-9 text-[13.5px] text-bg/55">
              {site.name} · {profile.title}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

// 6. Personal interests -------------------------------------------------------

function Interests() {
  return (
    <section className="mt-28 sm:mt-40">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead eyebrow="Personal interests" lines={['Beyond teaching']} className="max-w-2xl" />
        <Reveal delay={0.15} className="hidden text-[14px] text-muted sm:block">
          What keeps the lessons current
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {interests.map((interest, i) => {
          const Icon = interest.icon
          return (
            <Reveal key={interest.title} delay={(i % 5) * 0.05} className="h-full">
              <article className="group flex h-full flex-col rounded-[20px] border border-line p-5 transition-[transform,border-color,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-line-strong hover:bg-surface">
                <span className="grid size-9 place-items-center rounded-[11px] bg-surface-2 text-fg transition-colors duration-500 group-hover:bg-fg group-hover:text-bg">
                  <Icon className="size-4" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-[15px] font-medium leading-snug">{interest.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{interest.body}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

