// todo need to complete all the projects
// todo need to add cli projects
// todo remove unneed fields from JSON

export function getMainProjects() {
  console.log('>>>> getMainProjects **********************************')
  return [
    {
      name: "Doggos NFTs",
      url: "https://www.doggos.dog",
      summary: "Doggos is a successful NFT project on Solana with a strong community. I reworked much of the CSS and layout of HTML to make a fixed desktop design more mobile responsive.",
      cldPublicId: "portfolio/doggos-home",
      description: "We apply the proverb 'A rolling stone gathers no moss' not only to our power shifts but our strategic angel investors and user-proof configuration is.",
      stack: "React, Next.js, Chakra-UI, Solana",
    },
    {
      name: "Our Trans Kids DAO",
      url: "https://transkidsdao.13z.dev",
      summary: "Dicit dicant quaestio pri eu, no principes persecuti liberavisse sit.",
      cldPublicId: "portfolio/transkidsdao",
      description: "We apply the proverb 'A rolling stone gathers no moss' not only to our power shifts but our strategic angel investors and user-proof configuration.",
      stack: "React, Next.js, Recoil, Sass",
    },
    {
      name: "Floating Apes Affiliation",
      url: "https://floating-apes-staking.vercel.app",
      summary: "The Floating Apes NFT project needed staking, raffle, and other services. ",
      cldPublicId: "portfolio/floating-apes",
      description: "The Floating Apes NFT project needed staking, raffle, and other services. Lucky Dog Studios provided all these services via a variety of websites.",
      stack: "React, Next.js, Chakra-UI, Solana",
    },
    {
      name: "Pet SolSociety",
      url: "https://pet-solciety-staking.vercel.app",
      summary: "Dicit dicant quaestio pri eu, no principes persecuti liberavisse sit.",
      cldPublicId: "portfolio/pet-solciety",
      description: "We apply the proverb 'A rolling stone gathers no moss' not only to our power shifts but our strategic angel investors and user-proof configuration.",
      stack: "React, Next.js, Chakra-UI, Solana",
    },
    {
      name: "BOS Shop",
      url: "https://bos-store.vercel.app",
      summary: "Dicit dicant quaestio pri eu, no principes persecuti liberavisse sit.",
      cldPublicId: "portfolio/bos-shop",
      description: "We apply the proverb 'A rolling stone gathers no moss' not only to our power shifts but our strategic angel investors and user-proof configuration.",
      stack: "React, Next.js, Chakra-UI, Solana",
    },
    {
      name: "Bass Pro Outdoor Fund",
      url: "https://basspro.com/cart",
      summary: "Dicit dicant quaestio pri eu, no principes persecuti liberavisse sit.",
      cldPublicId: "portfolio/basspro-odf",
      description: "We apply the proverb 'A rolling stone gathers no moss' not only to our power shifts but our strategic angel investors and user-proof configuration.",
      stack: "React, Next.js, Recoil, Sass",
    },
  ];
}

export function getAllProjects() {
  console.log('>>>> getAllProjects **********************************')

  const secondaryProjects = [
    {
      name: "Smoke Heads NFTs",
      url: "https://smoke-heads-staking.vercel.app",
      summary: "Dicit dicant quaestio pri eu, no principes persecuti liberavisse sit.",
      cldPublicId: "portfolio/smoke-heads",
      description: "We apply the proverb 'A rolling stone gathers no moss' not only to our power shifts but our strategic angel investors and user-proof configuration is.",
      stack: "React, Next.js, Chakra-UI, Solana",
    }, {
      name: "AFI Movies NFTs",
      url: "https://solportal.13z.dev",
      summary: "Dicit dicant quaestio pri eu, no principes persecuti liberavisse sit.",
      cldPublicId: "portfolio/afimoviesnfts",
      description: "We apply the proverb 'A rolling stone gathers no moss' not only to our power shifts but our strategic angel investors and user-proof configuration is.",
      stack: "React, Next.js, Chakra-UI, Solana",
    },
    {
      name: "Alder Mages",
      url: "https://staking.aldermages.dev",
      summary: "Dicit dicant quaestio pri eu, no principes persecuti liberavisse sit.",
      cldPublicId: "portfolio/alder-mages",
      description: "We apply the proverb 'A rolling stone gathers no moss' not only to our power shifts but our strategic angel investors and user-proof configuration is.",
      stack: "React, Next.js, Chakra-UI, Solana",
    },
    {
      name: "Jikan Crypto Dashboard",
      url: "https://jikan-dashboard.vercel.app",
      summary: "Dicit dicant quaestio pri eu, no principes persecuti liberavisse sit.",
      cldPublicId: "portfolio/jikan-dashboard",
      description: "We apply the proverb 'A rolling stone gathers no moss' not only to our power shifts but our strategic angel investors and user-proof configuration.",
      stack: "React, Next.js, Chakra-UI, Solana",
    },
  ]
  return getMainProjects().concat(secondaryProjects);
}
