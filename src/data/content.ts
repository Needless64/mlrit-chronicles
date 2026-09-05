export type Article = {
  id: string;
  category: string;
  headline: string;
  dek: string;
  author: string;
  date: string;
  readTime: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  body: string[];
  pullQuote?: string;
};

export type EventItem = {
  day: string;
  month: string;
  title: string;
  location: string;
  time: string;
};

export const leadStory: Article = {
  id: 'campus-connect-platform',
  category: 'CAMPUS',
  headline: 'Students Launch New Initiative to Connect Campus Communities',
  dek: 'A student-led platform aims to bridge the gap between clubs, departments, and student life — and it is already gaining traction across campus.',
  author: 'Staff Writer',
  date: '05 SEP 2026',
  readTime: '6 MIN READ',
  image: 'https://images.pexels.com/photos/5538343/pexels-photo-5538343.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  imageAlt: 'Students collaborating at a table with laptops and notebooks',
  imageCaption: 'Students gather during a planning session for the new campus platform. — MLRIT Chronicles',
  body: [
    'What began as a conversation between three students frustrated by fragmented campus communication has become one of the fastest-growing student initiatives at MLRIT this year.',
    'The platform, called Campus Connect, was quietly piloted over the summer. By the time the autumn semester began, more than 1,200 students had already signed up — without any formal marketing push.',
    '"We realized that most students hear about events, clubs, and opportunities through word of mouth or scattered WhatsApp groups," said Aarav Sharma, one of the founders. "If you are not in the right group, you miss everything."',
    'The platform centralizes club announcements, department events, internship postings, and student-created content into a single feed. It also allows students to follow specific topics, much like subscribing to a newspaper section.',
    'Faculty members have taken notice. Several departments have begun exploring whether the platform could replace their existing — and largely ignored — notice boards.',
    'The team behind Campus Connect is quick to emphasize that the goal is not to replace existing structures but to amplify them. "We are not trying to build another social network," said co-founder Priya Reddy. "We are trying to build something that feels like a campus newspaper — but interactive."',
  ],
  pullQuote: 'We are not trying to build another social network. We are trying to build something that feels like a campus newspaper — but interactive.',
};

export const secondaryStories: Article[] = [
  {
    id: 'innovation-season',
    category: 'TECHNOLOGY',
    headline: 'MLRIT Teams Prepare for a New Season of Innovation',
    dek: 'With three major hackathons on the horizon, student engineering teams are ramping up build schedules and recruiting new members.',
    author: 'Technology Desk',
    date: '05 SEP 2026',
    readTime: '4 MIN READ',
    image: 'https://images.pexels.com/photos/9242852/pexels-photo-9242852.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Two engineers working on robotic equipment in a workshop',
    imageCaption: 'Student engineers refine their prototype ahead of the autumn competition circuit. — MLRIT Chronicles',
    body: [
      'The autumn innovation circuit is weeks away, and MLRIT engineering teams are in full preparation mode.',
      'Three major hackathons — including the inter-collegiate Smart India Hackathon — are scheduled between late September and November. Teams have already begun prototyping, with some working through weekends.',
      'Last year, MLRIT teams brought home two regional titles. This year, the ambition is broader: students from non-engineering departments are joining interdisciplinary teams for the first time.',
    ],
  },
  {
    id: 'student-clubs',
    category: 'STUDENT LIFE',
    headline: 'Inside the Clubs Giving Students a Place to Build, Create and Lead',
    dek: 'From robotics to debate to film societies, campus clubs are quietly reshaping what student life looks like at MLRIT.',
    author: 'Student Life Desk',
    date: '04 SEP 2026',
    readTime: '5 MIN READ',
    image: 'https://images.pexels.com/photos/5265333/pexels-photo-5265333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Students working together in an educational workshop',
    imageCaption: 'Members of the campus robotics club during a weekend build session. — MLRIT Chronicles',
    body: [
      'Walk through the MLRIT campus on a Saturday and you will find a different kind of classroom in session.',
      'In one room, the debate society runs mock parliamentary rounds. In another, the film society screens and dissects a classic. Outside, the robotics club tests drivetrain prototypes on the courtyard.',
      'There are over 40 active clubs at MLRIT, and membership has grown sharply this year. Students say clubs offer something classrooms cannot: the freedom to fail, iterate, and try again without a grade attached.',
    ],
  },
];

export const campusStories: Article[] = [
  {
    id: 'academic-initiative',
    category: 'CAMPUS',
    headline: 'University Announces Major New Academic Initiative',
    dek: 'A multi-year plan aims to overhaul interdisciplinary learning and expand research opportunities for undergraduates.',
    author: 'News Desk',
    date: '04 SEP 2026',
    readTime: '3 MIN READ',
    body: [
      'The administration unveiled a sweeping academic initiative this week, pledging to expand undergraduate research access and create new interdisciplinary tracks across departments.',
      'The plan, still in its early phases, would allow students to design custom degree pathways with faculty approval — a significant departure from the current rigid credit structure.',
    ],
  },
  {
    id: 'student-council-elections',
    category: 'CAMPUS',
    headline: 'Student Council Elections Scheduled for October',
    dek: 'Voting will move to a hybrid online and in-person format for the first time.',
    author: 'News Desk',
    date: '03 SEP 2026',
    readTime: '2 MIN READ',
    body: [
      'Student council elections will take place in mid-October, the election commission confirmed this week.',
      'For the first time, voting will be conducted through a hybrid system allowing both online and in-person ballots, in an effort to boost historically low turnout.',
    ],
  },
  {
    id: 'innovation-event',
    category: 'CAMPUS',
    headline: 'Campus Innovation Event Begins This Week',
    dek: 'The three-day showcase will feature student projects, faculty research, and industry partnerships.',
    author: 'News Desk',
    date: '02 SEP 2026',
    readTime: '2 MIN READ',
    body: [
      'MLRIT annual innovation showcase opens this Thursday, featuring over 60 student-led projects and demonstrations from industry partners.',
      'The event runs for three days and is open to all students and faculty.',
    ],
  },
];

export const techStories: Article[] = [
  {
    id: 'ai-research-lab',
    category: 'TECHNOLOGY',
    headline: 'New AI Research Lab Opens Its Doors to Undergraduates',
    dek: 'Previously restricted to postgraduate students, the lab now offers open access hours and mentorship programs.',
    author: 'Technology Desk',
    date: '03 SEP 2026',
    readTime: '4 MIN READ',
    image: 'https://images.pexels.com/photos/9242823/pexels-photo-9242823.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Engineers collaborating on electronics with circuit boards',
    imageCaption: 'Students work with circuit boards in the newly opened AI research lab. — MLRIT Chronicles',
    body: [
      'The AI research lab, long a postgraduate-only space, has opened its doors to undergraduate students for the first time.',
      'The lab now offers weekly open hours, mentorship sessions, and a structured onboarding program designed to bring newer students up to speed on current research projects.',
    ],
  },
  {
    id: 'cybersecurity-club',
    category: 'TECHNOLOGY',
    headline: 'Cybersecurity Club Wins Regional Capture-the-Flag Competition',
    dek: 'The team edged out twelve other institutions in a 24-hour security challenge.',
    author: 'Technology Desk',
    date: '02 SEP 2026',
    readTime: '3 MIN READ',
    body: [
      'MLRIT cybersecurity club took first place at the regional Capture-the-Flag competition, finishing ahead of twelve other institutions in a grueling 24-hour challenge.',
      'The team solved all challenges with over an hour to spare, marking the club\'s strongest result to date.',
    ],
  },
];

export const studentLifeStories: Article[] = [
  {
    id: 'campus-food-revolution',
    category: 'STUDENT LIFE',
    headline: 'The Quiet Revolution in Campus Food',
    dek: 'New student-run food stalls are changing what — and how — the campus eats.',
    author: 'Student Life Desk',
    date: '04 SEP 2026',
    readTime: '4 MIN READ',
    body: [
      'A row of student-run food stalls has appeared along the campus promenade, offering everything from homemade dosas to experimental fusion dishes.',
      'The stalls operate on a rotating weekly schedule and have become one of the most popular additions to campus life this semester.',
    ],
  },
  {
    id: 'dorm-life-changes',
    category: 'STUDENT LIFE',
    headline: 'Dorm Life: What Has Changed and What Still Needs To',
    dek: 'Students weigh in on hostel improvements and the issues that remain.',
    author: 'Student Life Desk',
    date: '03 SEP 2026',
    readTime: '5 MIN READ',
    body: [
      'Renovations to two hostel blocks were completed over the summer, but students say the improvements, while welcome, only scratch the surface.',
      'Common complaints remain around Wi-Fi reliability, laundry access, and study space availability during exam periods.',
    ],
  },
];

export const cultureStories: Article[] = [
  {
    id: 'five-student-voices',
    category: 'CULTURE',
    headline: 'Five Student Voices Shaping Campus Culture',
    dek: 'From music to filmmaking to spoken word, a new generation of creators is redefining what culture means at MLRIT.',
    author: 'Culture Desk',
    date: '04 SEP 2026',
    readTime: '6 MIN READ',
    image: 'https://images.pexels.com/photos/2888802/pexels-photo-2888802.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Performers on a stage with dramatic lighting',
    imageCaption: 'A student performance during the autumn cultural showcase. — MLRIT Chronicles',
    body: [
      'Campus culture at MLRIT is not a single thing. It is a chorus — and this semester, five students are leading distinct verses.',
      'From a self-taught filmmaker screening shorts in the auditorium to a spoken-word poet drawing standing-room-only crowds at the campus cafe, the creative landscape is shifting.',
    ],
  },
  {
    id: 'literary-magazine-relaunch',
    category: 'CULTURE',
    headline: 'Literary Magazine Relaunches After Two-Year Hiatus',
    dek: 'The student-run publication returns with a new editorial team and an open submissions policy.',
    author: 'Culture Desk',
    date: '02 SEP 2026',
    readTime: '3 MIN READ',
    body: [
      'After a two-year hiatus, the campus literary magazine is back. The relaunched publication will accept submissions from all students, regardless of department or year.',
    ],
  },
];

export const sportsStories: Article[] = [
  {
    id: 'season-ahead',
    category: 'SPORTS',
    headline: 'Campus Teams Prepare for the Season Ahead',
    dek: 'Cricket, football, and athletics squads enter pre-season with new coaches and renewed expectations.',
    author: 'Sports Desk',
    date: '04 SEP 2026',
    readTime: '4 MIN READ',
    image: 'https://images.pexels.com/photos/30144519/pexels-photo-30144519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Athletes running on an outdoor track',
    imageCaption: 'Track athletes during pre-season conditioning drills. — MLRIT Chronicles',
    body: [
      'Pre-season training is underway for MLRIT competitive teams, with cricket, football, and athletics all entering the autumn campaign with renewed expectations.',
      'Two squads have new coaches this year, and early indications suggest a more disciplined conditioning approach.',
    ],
  },
  {
    id: 'inter-college-tournament',
    category: 'SPORTS',
    headline: 'Inter-College Tournament Schedule Announced',
    dek: 'MLRIT will host the opening round of the regional cricket tournament next month.',
    author: 'Sports Desk',
    date: '01 SEP 2026',
    readTime: '2 MIN READ',
    body: [
      'The regional inter-college tournament schedule was released this week, with MLRIT hosting the opening cricket round in October.',
    ],
  },
];

export const opinionPieces: Article[] = [
  {
    id: 'why-college-newspapers-matter',
    category: 'OPINION',
    headline: 'Why College Newspapers Still Matter',
    dek: 'In an era of instant feeds and algorithmic feeds, the student press remains a rare space for accountability.',
    author: 'Editorial Board',
    date: '05 SEP 2026',
    readTime: '5 MIN READ',
    body: [
      'It has become fashionable to declare the student newspaper obsolete. The argument is familiar: everyone has a feed, everyone has a voice, and news travels faster through group chats than through a weekly print cycle.',
      'But this misunderstands what a student newspaper does. A feed delivers information. A newspaper delivers accountability.',
      'The difference matters. A feed is unfiltered and ephemeral. A newspaper is edited, fact-checked, and accountable to its readers. It names its writers. It corrects its errors. It holds itself to standards that algorithms do not.',
    ],
  },
  {
    id: 'modern-college-experience',
    category: 'OPINION',
    headline: 'What Should the Modern College Experience Look Like?',
    dek: 'As the line between campus and career blurs, students are asking what university is actually for.',
    author: 'Opinion Desk',
    date: '04 SEP 2026',
    readTime: '4 MIN READ',
    body: [
      'The question sounds simple. The answer is not.',
      'A decade ago, the college experience was largely understood as a bounded chapter: four years of study, friendship, and growth before the real world began. That boundary has dissolved.',
    ],
  },
  {
    id: 'participation-culture',
    category: 'OPINION',
    headline: 'The Participation Problem Nobody Talks About',
    dek: 'More clubs, more events, more opportunities — and less engagement than ever. What went wrong?',
    author: 'Opinion Desk',
    date: '03 SEP 2026',
    readTime: '3 MIN READ',
    body: [
      'Campus has never offered more to do. And yet, by several measures, student engagement is declining.',
      'The paradox is worth examining. More events are organized, more clubs exist, and more platforms promise connection — but attendance at many traditional events has fallen.',
    ],
  },
];

export const featureStory: Article = {
  id: 'people-shaping-next-chapter',
  category: 'FEATURE',
  headline: 'Inside the People Shaping MLRIT\u2019s Next Chapter',
  dek: 'A new generation of students, faculty, and administrators is quietly redrawing the boundaries of what the campus can be.',
  author: 'Features Desk',
  date: '05 SEP 2026',
  readTime: '8 MIN READ',
  image: 'https://images.pexels.com/photos/37831198/pexels-photo-37831198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  imageAlt: 'Students in a university classroom with a teacher',
  imageCaption: 'A classroom session in progress — one of many spaces where the campus is quietly being reshaped. — MLRIT Chronicles',
  body: [
    'Every institution has moments where the trajectory shifts. You rarely recognize them in real time. MLRIT is in the middle of one now.',
    'It is visible in small ways: the student who started a platform and accidentally built a movement. The professor who opened a locked lab to undergraduates. The administrator who, after years of caution, signed off on an experiment.',
    'Together, these small decisions are compounding. What follows is a portrait of the people behind them — not a list of achievements, but an attempt to understand what is changing, and why it matters.',
    'There is no single architect. That is the point. The next chapter of MLRIT is being written by people who, individually, would not call themselves remarkable. Collectively, they are redrawing the map.',
  ],
  pullQuote: 'The next chapter of MLRIT is being written by people who, individually, would not call themselves remarkable. Collectively, they are redrawing the map.',
};

export const mostRead: { rank: string; headline: string; category: string }[] = [
  { rank: '01', headline: 'Students Unveil New Campus Initiative', category: 'CAMPUS' },
  { rank: '02', headline: 'Inside This Year\u2019s Technology Competition', category: 'TECHNOLOGY' },
  { rank: '03', headline: 'Five Student Projects to Watch', category: 'TECHNOLOGY' },
  { rank: '04', headline: 'Campus Clubs Prepare for New Semester', category: 'STUDENT LIFE' },
  { rank: '05', headline: 'The Changing Face of Student Life', category: 'STUDENT LIFE' },
];

export const events: EventItem[] = [
  { day: '12', month: 'SEP', title: 'TECH INNOVATION WORKSHOP', location: 'Auditorium', time: '10:00 AM' },
  { day: '18', month: 'SEP', title: 'STUDENT CULTURAL FESTIVAL', location: 'Campus Grounds', time: '5:00 PM' },
  { day: '25', month: 'SEP', title: 'INTER-COLLEGE DEBATE', location: 'Seminar Hall', time: '2:00 PM' },
  { day: '03', month: 'OCT', title: 'STUDENT COUNCIL ELECTIONS', location: 'Online & Campus', time: 'All Day' },
  { day: '10', month: 'OCT', title: 'AUTUMN SPORTS MEET', location: 'Athletics Ground', time: '8:00 AM' },
];

export const breakingNews: string[] = [
  'University announces new academic initiative',
  'Student council elections scheduled for October',
  'Campus innovation event begins this week',
  'Cybersecurity club wins regional competition',
  'AI research lab opens to undergraduates',
];

export const allArticles: Article[] = [
  leadStory,
  ...secondaryStories,
  ...campusStories,
  ...techStories,
  ...studentLifeStories,
  ...cultureStories,
  ...sportsStories,
  ...opinionPieces,
  featureStory,
];
