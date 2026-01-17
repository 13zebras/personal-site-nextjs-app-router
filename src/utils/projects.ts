// Projects for the Portfolio page

export function getAllProjects() {
  return [
    {
      name: 'Scrum Poker sous la Mer',
      url: 'https://scrumpoker.foo',
      summary:
        'A scrum poker app with a dark-blue aquatic theme and cool animations. I built it using Next.js, React, TypeScript, Socket.io, and TailwindCSS.',
      cldPublicId: 'portfolio/scrum-poker-sur-mer',
      description:
        'I designed and built Scrum Poker sous la Mer (Scrum Poker Under the Sea) to gain some experience building a multiplayer app as well as working with websockets and socket.io. The app was challenging as I had to think of ways to manage state across multiple clients. The app is simple and easy to use, no accounts are needed and no data is saved.',
      stack: 'Next.js, React, Socket.io TypeScript, TailwindCSS',
      githubUrl: 'https://github.com/13zebras/scrum-poker-sur-mer',
    },
    {
      name: '13z.dev',
      url: 'https://13z.dev',
      summary:
        'My personal portfolio website. It includes projects, info about me, and some of my work experience. I built it using Next.js, React, TypeScript, and TailwindCSS.',
      cldPublicId: 'portfolio/portfolio-site',
      description:
        'I designed, created, and built my personal website, 13z.dev, to showcase sites I have built, worked on, and contributed to, as well as to share information about my work experience and my life. The design and code of 13z.dev have been inspired by others, but in the end, the responsibility for both rests squarely on my shoulders.',
      stack: 'Next.js, React, TypeScript, TailwindCSS, CSS3, Cloudinary',
      githubUrl: 'https://github.com/13zebras/personal-site-nextjs-app-router',
    },
    {
      name: 'Bass Pro Shops Outdoor Fund',
      url: 'https://basspro.com/cart',
      summary:
        'The Outdoor Fund section of the Bass Pro Shops cart needed a complete overhaul to make it fully mobile responsive.',
      cldPublicId: 'portfolio/basspro-odf',
      description:
        'The previous outdoor fund section of the cart was originally designed for desktop and was not mobile responsive. I reworked the layout, implemented flexbox for the entire component, and made it fully mobile responsive. I also worked with our UX team to make a new image/logo that would also be mobile responsive by placing the text as an overlay on the image.',
      stack: 'React, Next.js, TypeScript, Recoil, Sass, Jest',
      company: 'Bass Pro Shops',
      companyUrl: 'https://basspro.com',
    },
    {
      name: 'Doggos NFTs',
      url: 'https://www.doggos.dog',
      summary:
        'Doggos is an NFT project on the Solana blockchain. I helped convert their desktop only website into one that was fully mobile responsive.',
      cldPublicId: 'portfolio/doggos-home',
      description:
        "I reworked most of the layout and the CSS to make the previous fixed desktop design more mobile responsive. There were several modals, one of which was a dashboard that had a landscape orientation, that needed extensive revising. One of the biggest issues many websites face is that if you don't start mobile first, you will be in a world of hurt! I made these revisions while working at Lucky Dog Studios.",
      stack: 'React, Next.js, Chakra-UI, Solana',
      company: 'Lucky Dog Studios',
    },
    {
      name: 'BOS Shop',
      url: 'https://bos-store.vercel.app',
      summary:
        'The BOS Shop is a Solana NFT project that needed a front end. I used React and Next.js to create a fully responsive website based on the projects designs.',
      cldPublicId: 'portfolio/bos-shop',
      description:
        'I took the designs provided by the customer and created a fully responsive website using React and Next.js. We had been using Chakra-UI for the CSS, which is a good UI library for rapidly creating websites. I find TailwindCSS to be more flexible and creative, but Chakra-UI is a good choice for quick turnarounds.',
      stack: 'React, Next.js, Chakra-UI, Solana',
      company: 'Lucky Dog Studios',
    },
    {
      name: 'Floating Apes Affiliation',
      url: 'https://floating-apes-staking.vercel.app',
      summary:
        'The Floating Apes NFT project needed staking, raffle, and other services. Lucky Dog Studios provided all these services via a variety of websites.',
      cldPublicId: 'portfolio/floating-apes',
      description:
        'The Floating Apes NFT project needed staking, raffle, and other services. Lucky Dog Studios provided all these services via a variety of websites. I worked on the staking website, which was based on the customer designs. We used React and Next.js to create a fully responsive website.',
      stack: 'React, Next.js, Chakra-UI, Solana',
      company: 'Lucky Dog Studios',
    },
    {
      name: 'Pet SolSociety',
      url: 'https://pet-solciety-staking.vercel.app',
      summary:
        'The Pet Solciety NFT project on Solana needed a staking website. We used React and Next.js to create a staking website based on their original designs.',
      cldPublicId: 'portfolio/pet-solciety',
      description:
        "The Pet Solciety NFT project on Solana needed a staking website. The website is fully responsive and works well on mobile devices. I worked on the staking website, which was built using customer's original designs. We used React and Next.js to create a mobile-friendly website.",
      stack: 'React, Next.js, Chakra-UI, Solana',
      company: 'Lucky Dog Studios',
    },
    {
      name: 'Smoke Heads NFTs',
      url: 'https://smoke-heads-staking.vercel.app',
      summary:
        "The Smoke Heads NFT project was built on Solana and needed a staking website and more. We created a fully responsive website based on the project's designs.",
      cldPublicId: 'portfolio/smoke-heads',
      description:
        "The Smoke Heads NFT project a staking website, an auction website, and more. We created a fully responsive website based on the project's unique theme and designs. I contributed mostly to the staking website frontend, which was built using React and Next.js.",
      stack: 'React, Next.js, Chakra-UI, Solana',
      company: 'Lucky Dog Studios',
    },
    {
      name: 'Alder Mages',
      url: 'https://staking.aldermages.dev',
      summary:
        'The Alder Mages NFT project needed staking, raffle, upgrade, & other services. Lucky Dog Studios created all these sites using customers designs and our smart contracts.',
      cldPublicId: 'portfolio/alder-mages',
      description:
        'The Alder Mages NFT project needed staking, raffle, upgrade, & other services. Lucky Dog Studios created all these sites using customers designs and their smart contracts. I worked extensively on the staking website, and then I built the the upgrade website using the staking site design as a guide.',
      stack: 'React, Next.js, Chakra-UI, Solana',
      company: 'Lucky Dog Studios',
    },
    {
      name: 'Arcane Valley',
      url: 'https://staking.arcanevalleyproject.com/',
      summary:
        'The Arcane Valley NFT project needed staking, raffle, and other services. We created these sites using customers designs for NFTs on the Solana blockchain.',
      cldPublicId: 'portfolio/arcane-valley',
      description:
        'The Arcane Valley NFT project needed staking, raffle, and other services. We created these sites using customers designs for NFTs on the Solana blockchain. I worked primarily on the frontend of the staking website, constributing to the design and layout of the site using Chatra-UI as well as React.',
      stack: 'React, Next.js, Chakra-UI, Solana',
      company: 'Lucky Dog Studios',
    },
    {
      name: 'Jikan Crypto Dashboard',
      url: 'https://jikan-dashboard.vercel.app',
      summary:
        'The Jikan NFT project wanted a crypto price dashboard the included the prices of popular NFTs. Lucky Dog Studios built one for them using data from Magic Eden.',
      cldPublicId: 'portfolio/jikan-dashboard',
      description:
        'The Jikan NFT project wanted a crypto price dashboard the included the prices of popular NFTs. Lucky Dog Studios built one for them using data from Magic Eden. I worked not only on the frontend but also with the api calls and functions for getting and processing the relevant data.',
      stack: 'React, Next.js, Chakra-UI, Solana',
      company: 'Lucky Dog Studios',
    },
    {
      name: 'AFI Movies NFTs',
      url: 'https://solportal.13z.dev',
      summary:
        'A Solana Web3 project designed to give an introduction to Solana and how to interact with the blockchain using Rust and JS libraries like Solana Web3 and Anchor.',
      cldPublicId: 'portfolio/afimoviesnfts',
      description:
        'This Solana Web3 project from Buildspace was designed to give an introduction to Solana and how to interact with the blockchain using Rust and JS libraries like Solana Web3 and Anchor. The code was very simple and easy to follow, but the concepts were a bit more difficult to understand given the more complex nature of Solana vs Ethereum.',
      stack: 'React, Web3.js, Anchor, Solana',
      githubUrl: 'https://github.com/13zebras/solana-gif-portal',
    },
    // {
    //   name: "Our Trans Kids DAO",
    //   url: "",
    //   summary:
    //     "A DAO project using the ThirdWeb DAO SDK. The front end was built with React, and the project was deployed on an Ethereum testnet.",
    //   cldPublicId: "portfolio/transkidsdao",
    //   description:
    //     'This project created a "Decentralized Autonomous Organization, or DAO, using the ThirdWeb DAO SDK. The front end was built with React, and the project was deployed on an Ethereum testnet. The project was inspired by a tutorial from Buildspace. This DAO was designed to support parents of trans kids and to provide college scholarships for trans students attending college.',
    //   stack: "ThirdWeb, Solidity, React, Ethers.js",
    //   githubUrl: "https://github.com/13zebras/transkids-dao-3rdweb",
    // },
    // {
    //   name: "Renaissance Shade Solana NFTs",
    //   url: "",
    //   summary:
    //     "Renaissance Shade, an NFT collection built on Solana devnet using Metaplex Candy Machine. The theme was inspired by great Renaissance art.",
    //   cldPublicId: "portfolio/renaissance-shade",
    //   description:
    //     "My second NFT project using a tutorial from Buildspace. This project was a far more intricate yet ultimately better NFT project using Solana, Metaplex, and Candy Machine. Metaplex makes it possible to create NFT projects on Solana without having to write any Rust code which is necessary for creating smart contracts on Solana.",
    //   stack: "React, Metaplex, Web3.js, Anchor, Solana",
    //   githubUrl: "https://github.com/13zebras/solana-nft-renaissance-shade",
    // },
    // {
    //   name: "LoveLang NFT Collection",
    //   url: "",
    //   summary:
    //     "An Ethereum NFT project with a smart contract written in Solidity for minting the ERC721 tokens. The front end was built with React.",
    //   cldPublicId: "portfolio/lovelang-nfts",
    //   description:
    //     "My first NFT project with Buildspace. The smart contract was written in Solidity for minting the ERC721 tokens. The frontend was written in React. The theme of the NFTs was the word love written in one of 52 languages. The word/language was chosen randomly for each mint. The SVG image in the background of the NFT is also generated randomly, with each color gradient set to be 120 degrees from the previous color using HSL color coding. The project was deployed on the Polygon Mumbai testnet.",
    //   stack: "Solidity, React, Hardhat, Ethers.js, OpenZeppelin",
    //   githubUrl: "https://github.com/13zebras/lovelang-nft-collection-polygon",
    // },
    // {
    // 	name: 'Laugh Portal Solidity',
    // 	url: '',
    // 	summary: 'My first Web3 project using Solidity, Alchemy, Hardhat, and Ethers.js. The project was a simple joke portal where users could submit jokes.',
    // 	cldPublicId: 'portfolio/laughportal',
    // 	description:
    // 		'My first Web3 project using Solidity, Alchemy, Hardhat, and Ethers.js. The project was a simple joke portal where users could submit jokes. The smart contract was written in Solidity and deployed to the Rinkeby testnet. The frontend was written in React and used Ethers.js to interact with the smart contract. The project was inspired by a tutorial from Buildspace.',
    // 	stack: 'React, Solidity, Alchemy, Hardhat, Ethers.js',
    // 	githubUrl: 'https://github.com/13zebras/laughportal-solidity',
    // },
  ]
}
