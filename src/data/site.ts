// Everything about you lives here. The pages read from this file.
// Swap the name, email, links and projects, and the whole site follows.

export const site = {
  name: 'Rupak Basnet',
  role: 'Secondary level computer educator',
  // Three words, shown beside the name in the hero.
  tagline: 'Learn. Build. Share.',
  location: 'Nepalgunj, Nepal',
  address: 'Nepalgunj-10, Banke, Nepal',
  timezone: 'Asia/Kathmandu',
  email: 'Rupakbasnet2056@gmail.com',
  available: true,
  intro: 'A note from your computer teacher: the tools will keep changing, so I teach the thinking underneath them. Secondary level, grades 9 and 10, and the coding club after school.',
  socials: [
    { label: 'Email', href: 'mailto:Rupakbasnet2056@gmail.com' },
  ],
  marquee: ['Computer science', 'Web development', 'Digital literacy', 'Python', 'Scratch', 'Cyber safety'],
}

export interface Project {
  slug: string
  title: string
  context: string
  category: string
  year: string
  cover: string
  tint: string
  summary: string
  role: string[]
  stack: string[]
  body: string[]
  size: 'large' | 'small'
}

export const about = {
  lead: 'I teach computer science to secondary students, and I build small things with them: pages, games, a shop that pretends to sell sports kit. The building is the teaching. The code just makes it visible.',
  body: [
    'I started out writing websites for local businesses, then moved into a school computer lab and found the work I actually wanted. Eight years in classrooms have taught me that a curious student with a working laptop will outlearn a syllabus every time.',
    'My classes are built around one idea: make something small, show it to someone, fix what they get stuck on. I like short lessons, real projects and questions I cannot answer yet.',
  ],
}

export const education = [
  {
    period: '2018 to 2020',
    qualification: 'B.Ed. in Information Technology',
    institution: 'Tribhuvan University',
    detail: 'Teaching methods, curriculum design and computer science subject specialisation',
  },
  {
    period: '2016 to 2018',
    qualification: 'Higher Secondary, Science',
    institution: 'Nepalgunj',
    detail: 'Physics, mathematics and computer science',
  },
  {
    period: 'Ongoing',
    qualification: 'Short courses and certifications',
    institution: 'Online',
    detail: 'Web development, classroom technology and digital safety',
  },
]

export const hobbies = [
  {
    title: 'Cycling',
    body: 'Weekend rides out of the valley, usually further than planned. The best ideas arrive on the way back.',
  },
  {
    title: 'Chess',
    body: 'The school chess club lets me lose to Class 9 on a regular basis, which keeps the lessons honest.',
  },
  {
    title: 'Photography',
    body: 'Mostly the school and the streets around it. I use the photos in class more than I print them.',
  },
  {
    title: 'Reading',
    body: 'Popular science, history and the occasional programming book that is better as a reference than a read.',
  },
]

export const skills = [
  { title: 'Programming', items: ['Python', 'JavaScript', 'HTML and CSS', 'Scratch'] },
  { title: 'Teaching', items: ['Lesson planning', 'Assessment design', 'Project-based learning'] },
  { title: 'Tools and systems', items: ['Linux', 'Google Workspace', 'Git', 'School IT support'] },
]

// No project write-ups at the moment. Add entries here and the Home work
// section, the detail pages and the nav link all come back automatically.
export const projects: Project[] = []

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug)

export const services = [
  {
    title: 'Computer science fundamentals',
    body: 'How computers store and move information, what an algorithm is, and why a loop is worth understanding before a language is worth learning.',
  },
  {
    title: 'Web development',
    body: 'HTML, CSS and JavaScript, taught by building pages students can put on the internet and show to someone who matters to them.',
  },
  {
    title: 'Digital literacy and safety',
    body: 'Passwords, privacy, scams and the attention economy, handled honestly and on the students’ own screens rather than as a poster on the wall.',
  },
  {
    title: 'Projects and clubs',
    body: 'The coding club, the showcase evening and the small internal tools the school office asks for. The work that makes the subject feel real.',
  },
]

export const testimonials = [
  {
    quote: 'Sir made us rebuild our game three times. The third one actually worked, and I finally understood why the first two did not.',
    name: 'Aayush',
    role: 'Class 10',
  },
  {
    quote: 'My daughter stopped asking for the WiFi password and started asking how it works.',
    name: 'Sunita K.',
    role: 'Parent',
  },
  {
    quote: 'The club is the reason I want to study computer science. It is the only class where the answer is not already on the board.',
    name: 'Priya',
    role: 'Class 9',
  },
]

export const experience = [
  { period: '2021 to now', title: 'Computer educator, secondary level', detail: 'Grades 9 and 10, plus the after-school coding club' },
  { period: '2018 to 2021', title: 'Computer instructor', detail: 'Computer lab teaching and school IT support' },
  { period: '2016 to 2018', title: 'Freelance web developer', detail: 'Small sites and tools for local businesses' },
]
