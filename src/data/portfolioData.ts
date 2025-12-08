import type { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  name: 'Narmadha G',
  headline: 'Software Engineer — AI & Machine Learning',
  contact: {
    email: 'narmadha@example.com',
    phone: '+91 XXXXXXXXXX',
    location: 'Chennai, India',
    social: {
      linkedin: 'https://linkedin.com/in/your-profile',
      github: 'https://github.com/your-username',
      website: 'https://your-website.com'
    }
  },
  summary:
    'Software Engineer experienced in Python, FastAPI, ML workflows, prompt engineering, and productionizing models. Passion for building AI-driven web apps.',
  skills: {
    technical: ['Python', 'TypeScript', 'MongoDB', 'SQL'],
    frameworks: ['FastAPI', 'React', 'Tailwind', 'LangGraph', 'LangSmith'],
    tools: ['Git', 'Docker', 'Vercel', 'AWS S3'],
    soft: ['Leadership', 'Mentoring', 'Public Speaking']
  },
  projects: [
    {
      id: 'p1',
      title: 'Multi-Agent AI ChatBot (LangGraph)',
      description:
        'A multi-agent system built with LangGraph to coordinate specialized agents for information retrieval and response generation.',
      techStack: ['TypeScript', 'React', 'LangGraph'],
      links: { github: '', demo: '' }
    },
    {
      id: 'p2',
      title: 'AI Model Pricing Extractor',
      description:
        'Automated extractor to parse pricing details from model provider pages and output standardized pricing JSON.',
      techStack: ['Python', 'BeautifulSoup', 'FastAPI'],
      links: { github: '', demo: '' }
    }
  ],
  experience: [
    {
      id: 'e1',
      role: 'Software Engineer Trainee',
      company: 'Workhall Private Limited',
      start: 'Jun 2025',
      bullets: [
        'Implemented backend services with FastAPI',
        'Integrated ML inference pipelines and MongoDB storage'
      ]
    },
    {
      id: 'e2',
      role: 'Machine Learning Engineer Trainee',
      company: 'Workhall Private Limited',
      start: 'Oct 2024',
      end: 'May 2025',
      bullets: ['Model training and evaluation', 'Prompt engineering with LangSmith']
    }
  ],
  education: [
    { degree: "B.E. - Computer Science", school: 'Your University', year: '2024' }
  ],
  achievements: [
    'Jury Choice Award - Paper Presentation',
    "Winner - BITSHACK (2022)",
    'Patent Filed: ODOR ALERT'
  ]
}
