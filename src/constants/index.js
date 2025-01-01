export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "The Platform",
    desc: "The Platform is an innovative SaaS platform providing customized solutions for each enterprise. With the ability to support multiple applications, the platform allows businesses to implement features best suited to their needs, from user management to optimizing content production processes.",
    subdesc:
      "The platform is built with Next.js 14, Tailwind CSS, TypeScript, Turborepo, and Framer Motion, combined with Supabase for database management and Retool for content management. The Platform delivers high performance, flexible scalability, and meets diverse requirements for businesses of all sizes.",
    // href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "collection.boosty.app",
    desc: "collection.boosty.app is a platform dedicated to opening Japanese idol trading cards and collecting these cards along with NFT images of idols. Users can explore various collectible cards, manage their collection, and trade cards with others while enjoying exclusive idol NFT content.",
    subdesc:
      "Built with modern web technologies including HTML5, CSS3/SCSS, JavaScript, React.js, Next.js 14, Auth0, Recoil, Tailwind CSS, Ant Design, and Pusher.js, the platform provides a seamless, scalable, and responsive experience for fans and collectors of idol NFTs.",
    href: "https://collection.boosty.app/artistshoplist",
    texture: "/textures/project/collection.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "hoc10.vn",
    desc: "hoc10.vn is an online educational platform designed to provide comprehensive learning resources, including lessons, exercises, and interactive tools. It enables students to enhance their academic skills through personalized learning experiences and real-time progress tracking.",
    subdesc:
      "Built with HTML5, CSS3, React.js 16, Angular 6, and Lumen, hoc10.vn delivers a fast, scalable, and interactive learning experience, ensuring smooth user engagement and optimal performance across devices.",
    href: "https://www.hoc10.vn",
    texture: "/textures/project/hoc10vn.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Paditech",
    pos: "Frontend Engineer",
    duration: "01/06/2024 - Current",
    title:
      "Since June 2024, I have been working at PadiTech as a Frontend Leader, leading development for Japanese clients. One notable project I have worked on is the product collection platform at Boosty (collection.boosty.app), where I manage the frontend architecture and ensure the platform’s performance, responsiveness, and scalability.",
    icon: "https://www.paditech.com/images/logo_header_invert.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Godyn",
    pos: "Frontend Developer",
    duration: "06/11/2023 - 30/04/2024",
    title:
      "Last November, I joined Godyn to work on a service provision platform for small and medium-sized companies. I was responsible for managing user authentication and developing product management systems tailored to each type of business and accompanying services.",
    icon: "https://cdn-icons-png.flaticon.com/512/8438/8438875.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Vccorp",
    pos: "Frontend Developer",
    duration: "01/09/2022 - 20/04/2024",
    title:
      "At Vccorp, I maintained and developed the IMS project. I gained experience with microfrontend architecture, build tools, and website embedding, and learned about standard working practices and workflows.",
    icon: "https://asd.mediacdn.vn/adt/tuyendungvccorp/Logo_VCCorp_812cf308-8538-4e4a-952c-628e8302ff14.svg",
    animation: "victory",
  },
  {
    id: 4,
    name: "MONKEY",
    pos: "Frontend Developer",
    duration: "01/08/2021 - 30/08/2022",
    title:
      "After graduating from university, I started working at MONKEY as a frontend developer. I participated in the development of Hoc10.vn, where I gained valuable experience in system understanding, knowledge, skills, and working models from my colleagues.",
    icon: "https://vnmediadev.monkeyuni.net/upload/web/img/monkey228.png",
    animation: "clapping",
  },
  {
    id: 5,
    name: "VTI ACADEMY",
    pos: "Intern Frontend Developer",
    duration: "01/11/2020 - 01/04/2021",
    title:
      "I started my career journey at VTI Academy as a Frontend Developer intern, where I became familiar with the enterprise environment. I learned the importance of professionalism at work and honed my skills, preparing myself to become a developer who adds value to enterprises.",
    icon: "https://vtiacademy.edu.vn/upload/images/academy-02-01-01-01.png",
    animation: "victory",
  },
];
