import { Github, Twitter, Figma, Linkedin, Send } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoNest from "/public/images/logos/icon-nest.svg";
import LogoPostgreSQL from "/public/images/logos/icon-postgresql.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoAngular from "/public/images/logos/icon-angular.svg";
import LogoDocker from "/public/images/logos/icon-docker.svg";

import ProjectTechnoshop from "/public/images/project-technoshop.png";
import ProjectTechnoshopAdmin from "/public/images/project-technoshop-admin.png";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/SeyedMostafaHosseinian",
  GITHUB_REPO: "https://github.com/SeyedMostafaHosseinian/mostafa-portfolio",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  // {
  //   label: "Testimonials",
  //   href: "#testimonials",
  // },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/SeyedMostafaHosseinian",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/seyed-mostafa-hosseini-684b002a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Nest.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
  },
  // {
  //   label: "Socket.io",
  //   logo: LogoSocket,
  //   darkModeLogo: LogoSocketLight,
  //   url: "https://socket.io/",
  // },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  // {
  //   label: "MongoDB",
  //   logo: LogoMongoDB,
  //   url: "https://www.mongodb.com/",
  // },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  // {
  //   label: "Figma",
  //   logo: LogoFigma,
  //   url: "https://www.figma.com/",
  // },
  // {
  //   label: "Cypress",
  //   logo: LogoCypress,
  //   darkModeLogo: LogoCypressLight,
  //   url: "https://www.cypress.io/",
  // },
  // {
  //   label: "Storybook",
  //   logo: LogoStorybook,
  //   url: "https://storybook.js.org/",
  // },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com",
  },
  {
    label: "Angular",
    logo: LogoAngular,
    url: "https://angular.dev",
  },
  {
    label: "Docker",
    logo: LogoDocker,
    url: "https://www.docker.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  // {
  //   logo: LogoUpwork,
  //   logoAlt: "",
  //   position: "",
  //   startDate: new Date(2021, 10),
  //   currentlyWorkHere: true,
  //   summary: [
  //     "",
  //   ],
  // },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "technoshop website",
    description: "A digital goods store website",
    url: "https://technoshop-two.vercel.app",
    previewImage: ProjectTechnoshop,
    technologies: [
      "next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Styled Components",
      "zustand",
      "tailwind",
    ],
  },
  {
    name: "technoshop panel admin",
    description: "admin panel for manage store website",
    url: "https://technoshop-admin-panel.vercel.app",
    previewImage: ProjectTechnoshopAdmin,
    technologies: [
      "react",
      "react-router-dom",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "MUI",
      "tanstack/react-query",
      "react-hook-form",
      "tailwind",
    ],
  },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "",
    // personAvatar: AvatarKrisztian,
    title: "",
    testimonial: "",
  },
];
