import type { FileRoutesByTo } from '@/routeTree.gen'

export type RoutePath = keyof FileRoutesByTo

export interface Project {
  index?: number
  animationDelay?: number
  name: string
  url: string
  summary: string
  imageKey: string
  description: string
  stack: string
  githubUrl?: string
  company?: string
  companyUrl?: string
}

export interface HeaderPaths {
  name: string
  path: RoutePath
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
