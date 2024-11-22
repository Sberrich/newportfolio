import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
     nameEng: "Projects",
     hash: "#projects",
   },
  {
    nameEng: "Skills",
    hash: "#skills",
  },
  // {
  //   nameEng: "Contact",
  //   hash: "#contact",
  // },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "BankModernUI",
    description:
      "This project proposes to integrate figma UI of bank ui",
    tags: [ "Next.js", "Tailwind"],
    imageUrl: "/image1.png",
    link: "https://www.google.com",
  },
  {
    title: "HyperType",
    description:
      "This project proposes to create a web application that allows the user to research and watch videos.",
    tags: ["React", "MongoDB", "Mui", "NodeJS"],
    imageUrl: "/image2.png",
    link: "https://www.google.com",
  },
  {
    title: "Blogr UI integration",
    description:
      "challenge is to build out  landing page and get it looking as close to the design as possible",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: "/image3.jpg",
    link: "https://www.google.com",
  },
  {
    title: "Matcha",
    description:
      " Matcha is 1337 project Web application allowing two potential lovers to meet,",
    tags: ["React", "MongoDB", "AntDesign", "NodeJS"],
    imageUrl: "/image4.png",
    link: "https://www.google.com",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux Toolkit",
  "Express",
  "Framer Motion",
];
