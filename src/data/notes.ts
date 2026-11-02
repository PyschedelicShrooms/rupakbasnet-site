export type NoteFormat = 'pdf' | 'page' | 'image'

export type NoteItem = {
  title: string
  description: string
  href: string
  format: NoteFormat
  meta: string
  credit?: string
}

export type NoteGroup = {
  title: string
  items: NoteItem[]
}

export type NoteChapter = {
  slug: string
  title: string
  level: string
  summary: string
  groups: NoteGroup[]
}

const python = '/notes/python'
const network = '/notes/network'

export const notesIntro =
  'Handouts in the order I teach them. Everything opens in the browser, so it works on a phone without downloading an app or signing in.'

export const chapters: NoteChapter[] = [
  {
    slug: 'network',
    title: 'Computer Network',
    level: 'SEE Computer Science · Class 10 · CDC 2083',
    summary:
      'What a network is, how data travels between two computers, and what carries the signal. Four smart-board lessons that follow the book page by page, plus labs where you send packets yourself and watch them move.',
    groups: [
      {
        title: 'Lesson by lesson',
        items: [
          {
            title: 'Telecommunication and broadband',
            description:
              'Starts where the chapter starts: how a message becomes an electronic signal, the history of telecommunication, the everyday examples, then broadband, and how broadband differs from Wi-Fi.',
            href: `${network}/telecommunication-broadband.html`,
            format: 'page',
            meta: 'Interactive page · book pages 4–5',
          },
          {
            title: 'Bandwidth, throughput and congestion',
            description:
              'Bandwidth as the width of a pipe, throughput as what actually gets through, and congestion as the traffic jam between them. Includes the road analogy and a live pipe-and-packets simulation.',
            href: `${network}/bandwidth-throughput-congestion.html`,
            format: 'page',
            meta: 'Interactive page · book pages 6–7',
          },
          {
            title: '5G, data packets, frequency and latency',
            description:
              'Fifth generation mobile networks, what a data packet is, frequency ranges, latency, and a 4G-versus-5G race you can run on the projector. The last part covers the modes of communication.',
            href: `${network}/5g-packets-frequency.html`,
            format: 'page',
            meta: 'Interactive page · book pages 8–9',
          },
          {
            title: 'Communication modes and media',
            description:
              'Simplex, half duplex and full duplex, the basic communication system, guided versus unguided media, and the cables you can actually buy — with a signal quality laboratory at the end.',
            href: `${network}/communication-modes-media.html`,
            format: 'page',
            meta: 'Interactive page · book pages 10–13',
          },
        ],
      },
      {
        title: 'Interactive labs',
        items: [
          {
            title: 'The whole chapter in one simulation',
            description:
              'The long version: data passing between two people step by step, what a computer network is, the requirements of communication, its history, and a telecommunication signal travelling a long distance.',
            href: `${network}/network-and-communication.html`,
            format: 'page',
            meta: 'Interactive page · full chapter',
          },
          {
            title: 'Network topology lab',
            description:
              'Star, bus, ring and mesh side by side. Send a packet through each one, break a cable, and see which topology keeps working — the section students always ask about.',
            href: `${network}/topology-lab.html`,
            format: 'page',
            meta: 'Interactive page · topologies',
          },
          {
            title: 'Network architecture: client–server vs peer-to-peer',
            description:
              'Two architectures you can switch between live, a comparison table, a classroom challenge, and a packet inspector for looking inside what is being sent.',
            href: `${network}/architecture-lab.html`,
            format: 'page',
            meta: 'Interactive page · architectures',
          },
          {
            title: 'IP addresses and the ping lab',
            description:
              'What an IP address is, IPv4 against IPv6 and why we needed the change, then a ping lab that shows the request going out and the reply coming back with its round-trip time.',
            href: `${network}/ip-and-ping-lab.html`,
            format: 'page',
            meta: 'Interactive page · IP and ping',
          },
        ],
      },
    ],
  },
  {
    slug: 'python',
    title: 'Python Programming Language',
    level: 'SEE Computer Science · Class 10 · CDC 2083',
    summary:
      'Chapter 4 of the SEE syllabus. We start with functions, move through modules, packages and libraries, then draw with Turtle before covering error handling, and finish with the programs set for practice.',
    groups: [
      {
        title: 'Full notes',
        items: [
          {
            title: 'Chapter 4 — complete notes',
            description:
              'The whole chapter in one document: variables and data types, operators, input and output, control flow, functions, then lists, tuples and dictionaries.',
            href: `${python}/see-chapter-4-notes.pdf`,
            format: 'pdf',
            meta: 'PDF · 45 pages · 98 KB',
          },
          {
            title: 'Functions, modules, Turtle and error handling',
            description:
              'Starts at 4.2, user-defined functions. Definitions, advantages, worked examples with line-by-line explanations, and exam-style answers for the second half of the chapter.',
            href: `${python}/functions-modules-turtle.pdf`,
            format: 'pdf',
            meta: 'PDF · 21 pages · 776 KB',
            credit: 'Prepared by Deepak Shrestha',
          },
          {
            title: 'Introduction to Python',
            description:
              'Ten illustrated pages on the language itself — what Python is, who made it, why it is used, its key features, syntax and a comparison of the common libraries. Good to read before Chapter 4.',
            href: `${python}/python-complete-guide.pdf`,
            format: 'pdf',
            meta: 'PDF · 10 pages · 2.8 MB',
          },
        ],
      },
      {
        title: 'Read online',
        items: [
          {
            title: 'Chapter 4 notes as a web page',
            description:
              'The same material as a scrolling page — user-defined functions, modules and packages, graphics with Turtle, and error handling. No PDF reader needed, so this is the one to open on a phone in class.',
            href: `${python}/class10-notes.html`,
            format: 'page',
            meta: 'Web page · opens instantly',
          },
        ],
      },
      {
        title: 'Solved programs',
        items: [
          {
            title: 'Programs with line-by-line explanations',
            description:
              'Programs written out the way I want them in the exam: the code, then an explanation of every line — starting with the area of a circle using the math module.',
            href: `${python}/solved-programs.pdf`,
            format: 'pdf',
            meta: 'PDF · 4 pages · 480 KB',
          },
        ],
      },
      {
        title: 'Reference sheets',
        items: [
          {
            title: 'Turtle library functions',
            description: 'One table: forward, backward, left, right, penup, pendown, color, fillcolor, shape, begin_fill, end_fill — what each does.',
            href: `${python}/turtle.png`,
            format: 'image',
            meta: 'Image',
          },
          {
            title: 'Matplotlib functions',
            description: 'plot, bar, scatter, hist, pie, title, xlabel, ylabel, legend, grid, show, savefig — the calls needed for the plotting questions.',
            href: `${python}/matplotlib.png`,
            format: 'image',
            meta: 'Image',
          },
          {
            title: 'Programs to practise',
            description:
              'The practice list: area of a circle, square root and power, factorial, random numbers, the guess-the-number game, shuffling cards, reading a CSV, and bar, line, pie and histogram plots.',
            href: `${python}/programs.png`,
            format: 'image',
            meta: 'Image',
          },
        ],
      },
    ],
  },
]

export function getChapter(slug: string): NoteChapter | undefined {
  return chapters.find((chapter) => chapter.slug === slug)
}

export function chapterItemCount(chapter: NoteChapter): number {
  return chapter.groups.reduce((total, group) => total + group.items.length, 0)
}
