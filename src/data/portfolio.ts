// Central file for all portfolio text content.
// Edit this file whenever you want to update your bio, projects, skills, or education.

export interface ProjectItem {
  title: string
  period: string
  summary: string
  bullets: string[]
  tags: string[]
  githubUrl?: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
  score: string
}

export interface ActivityItem {
  role: string
  details: string
}

export const profile = {
  name: 'Sushanth Poojary',
  title: 'Computer Science Undergraduate | Aspiring Data Engineer',
  location: 'Mumbai, India',
  email: 'sushantpoojari141@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sushanth-poojary-603303341',
  github: 'https://github.com/sushanth-poojary-27',
  resumeUrl: '/resume.pdf',
  photoUrl: '/profile.jpg',
  intro:
    "I'm a final-year B.Sc. Computer Science student at Mithibai College, Mumbai. I'm building a foundation in data engineering and backend development with Python, SQL and PostgreSQL, and I learn best by building projects. I'm looking for a data engineering or backend internship.",
  contactNote:
    "I'm open to data engineering and backend internships. The best way to reach me is email.",
}

export const projects: ProjectItem[] = [
  {
    title: 'Google Play Store Data Pipeline',
    period: 'May 2026, in progress',
    summary:
      'An ETL pipeline that collects Play Store game data and stores it in PostgreSQL for analysis.',
    bullets: [
      'Scrapes metadata for 100+ unique games and cleans it with pandas (for example, converting install counts like "100,000,000+" into integers).',
      'Loads the data into PostgreSQL through SQLAlchemy using a star schema (dimension tables plus a daily metrics fact table).',
      'Next steps: upserts, data-quality checks, Docker, scheduling and a small API.',
    ],
    tags: ['Python', 'pandas', 'SQLAlchemy', 'PostgreSQL'],
    githubUrl:
      'https://github.com/sushanth-poojary-27/google-playstore-data-pipeline',
  },
 
]

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'SQL'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL'],
  },
  {
    label: 'Data libraries',
    items: ['pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    label: 'Tools',
    items: ['Git and GitHub', 'DBeaver', 'Jupyter Notebook', 'VS Code'],
  },
]

export const educationList: EducationItem[] = [
  {
    degree: 'B.Sc. in Computer Science',
    institution: 'S.V.K.M Mithibai College of Science, Commerce & Arts, Mumbai',
    period: '2024-2027',
    score: 'CGPA 7.66',
  },
  {
    degree: 'Junior College (HSC)',
    institution: 'S.V.K.M Acharya A.V. Patel Junior College, Mumbai',
    period: '2022-2024',
    score: '68.8%',
  },
  {
    degree: 'SSC',
    institution: "St. Joseph's High School, Juhu, Mumbai",
    period: '2010-2022',
    score: '81.6%',
  },
]

export const activitiesList: ActivityItem[] = [
  {
    role: 'Committee Member, Techspark (Mithibai College)',
    details:
      'managed the sports department, organized chess and football tournaments, and handled registration logistics.',
  },
  {
    role: 'Member, Green Club',
    details:
      'took part in environmental initiatives, including city-wide beach clean-ups and seminars.',
  },
  {
    role: 'Mithibai College Cricket Team',
    details:
      'represented the college in inter-collegiate tournaments (Taarang); runner-up in the inter-department tournament (ATS).',
  },
]

