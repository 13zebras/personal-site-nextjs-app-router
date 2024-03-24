import { HeaderPaths } from "@/types/allTypes";

export function getDesktopHeaderPaths(): HeaderPaths[] {
  // console.log('>>>> getDesktopHeaderPaths **********************************')
  return [
    {
      name: "home",
      path: "/"
    },
    {
      name: "portfolio",
      path: "/portfolio"
    },
    {
      name: "experience",
      path: "/experience"
    },
    {
      name: "about tom",
      path: "/about"
    },
  ]
}

export function getMobileHeaderPaths(): HeaderPaths[] {
  // console.log('>>>> getMobileHeaderPaths **********************************')
  return [
    {
      name: "home",
      path: "/"
    },
    {
      name: "portfolio",
      path: "/portfolio"
    },
    {
      name: "experience",
      path: "/experience"
    },
    {
      name: "about tom",
      path: "/about"
    },
    {
      name: "contact",
      path: "/contact"
    },
  ]
}

