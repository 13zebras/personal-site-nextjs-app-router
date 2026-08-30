// Projects for the Portfolio page

export function getAllProjects() {
  return [
    {
      name: "Scrum Poker sous la Mer",
      url: "https://scrumpoker.foo",
      summary:
        "A scrum poker app with a dark-blue aquatic theme and cool animations. I built it using Next.js, React, TypeScript, Socket.io, and TailwindCSS.",
      cldPublicId: "portfolio/scrum-poker-sur-mer",
      description:
        "I designed and built Scrum Poker sous la Mer (Scrum Poker Under the Sea) to gain some experience building a multiplayer app as well as working with websockets and socket.io. The app was challenging as I had to think of ways to manage state across multiple clients. The app is simple and easy to use, no accounts are needed and no data is saved.",
      stack: "Next.js, React, Socket.io TypeScript, TailwindCSS",
      githubUrl: "https://github.com/13zebras/scrum-poker-sur-mer",
    },
    {
      name: "13z.dev",
      url: "https://13z.dev",
      summary:
        "My personal portfolio website. It includes projects, info about me, and some of my work experience. I built it using Next.js, React, TypeScript, and TailwindCSS.",
      cldPublicId: "portfolio/portfolio-site",
      description:
        "I designed, created, and built my personal website, 13z.dev, to showcase sites I have built, worked on, and contributed to, as well as to share information about my work experience and my life. The design and code of 13z.dev have been inspired by others, but in the end, the responsibility for both rests squarely on my shoulders.",
      stack: "Next.js, React, TypeScript, TailwindCSS, CSS3, Cloudinary",
      githubUrl: "https://github.com/13zebras/personal-site-nextjs-app-router",
    },
    {
      name: "Bass Pro Shops Outdoor Fund",
      url: "https://basspro.com/cart",
      summary:
        "The Outdoor Fund section of the Bass Pro Shops cart needed a complete overhaul to make it fully mobile responsive.",
      cldPublicId: "portfolio/basspro-odf",
      description:
        "The previous outdoor fund section of the cart was originally designed for desktop and was not mobile responsive. I reworked the layout, implemented flexbox for the entire component, and made it fully mobile responsive. I also worked with our UX team to make a new image/logo that would also be mobile responsive by placing the text as an overlay on the image.",
      stack: "React, Next.js, TypeScript, Recoil, Sass, Jest",
      company: "Bass Pro Shops",
      companyUrl: "https://basspro.com",
    },
    {
      name: "Doggos NFTs",
      url: "https://www.doggos.dog",
      summary:
        "Doggos is an NFT project on the Solana blockchain. I helped convert their desktop only website into one that was fully mobile responsive.",
      cldPublicId: "portfolio/doggos-home",
      description:
        "I reworked most of the layout and the CSS to make the previous fixed desktop design more mobile responsive. There were several modals, one of which was a dashboard that had a landscape orientation, that needed extensive revising. One of the biggest issues many websites face is that if you don't start mobile first, you will be in a world of hurt! I made these revisions while working at Lucky Dog Studios.",
      stack: "React, Next.js, Chakra-UI, Solana",
      company: "Lucky Dog Studios",
    },
    {
      name: "BOS Shop",
      url: "https://bos-store.vercel.app",
      summary:
        "The BOS Shop is a Solana NFT project that needed a front end. I used React and Next.js to create a fully responsive website based on the projects designs.",
      cldPublicId: "portfolio/bos-shop",
      description:
        "I took the designs provided by the customer and created a fully responsive website using React and Next.js. We had been using Chakra-UI for the CSS, which is a good UI library for rapidly creating websites. I find TailwindCSS to be more flexible and creative, but Chakra-UI is a good choice for quick turnarounds.",
      stack: "React, Next.js, Chakra-UI, Solana",
      company: "Lucky Dog Studios",
    },
  ];
}
