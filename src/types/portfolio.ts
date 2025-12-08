export type SocialLinks = {
  linkedin?: string
  github?: string
  website?: string
}

export type Project = {
  id: string
  title: string
  description: string
  techStack: string[]
  links?: {
    github?: string
    demo?: string
  }
}

export type ExperienceItem = {
  id: string
  role: string
  company: string
  start: string
  end?: string
  bullets: string[]
}

export type PortfolioData = {
  name: string
  headline: string
  contact: {
    email?: string
    phone?: string
    location?: string
    social?: SocialLinks
  }
  summary?: string
  skills?: {
    technical: string[]
    frameworks: string[]
    tools: string[]
    soft: string[]
  }
  projects: Project[]
  experience: ExperienceItem[]
  education?: { degree: string; school: string; year: string }[]
  achievements?: string[]
}
