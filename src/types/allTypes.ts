export interface Project {
  index?: number
  name: string
  url: string
  summary: string
  cldPublicId: string
  description: string
  stack: string
  githubUrl: string
}

export interface HeaderPaths {
  name: string
  path: string
}

export interface WorkData {
  title: string
  employer: string
  dates: string
  detailsType: string
  details: string
  summary1: string
  summary2: string
  index?: number
}
