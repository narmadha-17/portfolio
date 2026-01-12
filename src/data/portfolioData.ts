import type { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  name: 'Narmadha G',
  headline: 'Associate Software Engineer — AI & Machine Learning',
  contact: {
    email: 'narmadhaganesan1@gmail.com',
    phone: '+91 xxxxx-xxxxx',
    location: 'Coimbatore, India',
    social: {
      linkedin: 'https://www.linkedin.com/in/narmadha-g-794015228/',
      github: 'https://github.com/narmadha-17/',
      website: ''
    }
  },
  summary:
    'Software Engineer experienced in Python, FastAPI, ML workflows, prompt engineering, and productionizing models. Passion for building AI-driven web apps.',
  skills: {
    technical: ['Python', 'TypeScript', 'MongoDB'],
    frameworks: ['FastAPI', 'LangGraph', 'LangSmith'],
    tools: ['Git'],
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
      role: 'Associate Software Engineer',
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
    { degree: "B.E. - Computer Science", school: 'Bannari Amman Institute of Technology', year: '2021-2025' }
  ],
  achievements: [
    'Jury Choice Award - Paper Presentation',
    "Winner - BITSHACK (2022)",
    'Patent Filed: ODOR ALERT'
  ]
}
