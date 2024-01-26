import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  threejs,
  graduate,
  seo,
  coding,
  personal,
  ruby,
  postgresql,
  photoshop,
  jquery,
  prisma
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Web Developer",
    icon: web,
  },
  {
    title: "Frontend Visualizer",
    icon: mobile,
  },
  {
    title: "ReactJS Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "ruby",
    icon: ruby,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "jquery",
    icon: jquery,
  },
  {
    name: "prisma",
    icon: prisma,
  },
  {
    name: "postgreSQL",
    icon: postgresql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Mount Royal University",
    company_name: "BBA - Marketing Major",
    icon: [graduate],
    iconBg: "#726080",
    date: "2021",
    points: [
      "Excelled in dynamic brand navigation and effective marketing strategies",
      "Skilled in guiding creative direction for corporations and startups, creating strong business identities",
      "Ready to contribute exceptional products, services, and campaigns to the marketplace",
      "Proficient in organizational management, business writing, customer relations, online communications, marketing management, group work, and international marketing",
    ],
  },
  {
    title: "SEO Analyst",
    company_name: "CAYK Marketing",
    icon: [seo],
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Oct 2022",
    points: [
      "Monitored, created, and populated SEO data sheets with upwards of 30+ clients",
      "Engaged in 100+ hours of website development training and implementation",
      "Collaborated with designers and analytics team on providing updates to client sites and blogs, improving user experience by 60% or more",
      "Participated in bi-weekly client progress reviews, where management assess, review, and coach team members",
      "Briefed other analyst team members on research findings, suggestions for website improvements, and optimization builds",
    ],
  },
  {
    title: "Lighthouse Labs",
    company_name: "Fullstack Web Development - Bootcamp",
    icon: [coding],
    iconBg: "#726080",
    date: "Nov 2022 - June 2023",
    points: [
      "Graduated from Lighthouse Labs' Web Development program with experience in frontend, backend, and fullstack development, creating visually appealing interfaces and ensuring responsive, user-friendly experiences",
      "Acquired skills in configuring databases for frontend support, transforming into a versatile fullstack developer with a commitment to continuous learning",
      "Proficient in JavaScript, ReactJS, Tailwind, and HTML, showcasing a strong foundation in frontend development technologies",
      "Skilled in CRUD implementation, RESTful API's, pair programming, and effective team communication",
    ],
  },
  {
    title: "Personal Work",
    company_name: "Projects & Additional Learning",
    icon: [personal],
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Working on creative web solutions with JavaScript, React.js, and other moden tech stacks, showcasing a commitment to continuous learning for future challenges",
      "Crafting visually appealing and user-friendly front-end interfaces, emphasizing adaptability and an outlook for ongoing improvement.",
      "Actively pursuing knowledge in unfamiliar tech stacks, showcasing a proactive approach to learning and an eagerness to explore new technologies beyond current expertise.",
      "Committed to daily self-improvement in coding skills, demonstrating discipline and dedication to the continual enhancement of my coding proficiency.",
    ],
  },
];

const projects = [
  {
    name: "Project 1",
    description:
      "There will be a description put in here for my project.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: [],
    source_code_link: "https://github.com/",
  },
  {
    name: "Project 2",
    description:
      "There will be a description put in here for my project.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: [],
    source_code_link: "https://github.com/",
  },
  {
    name: "Project 3",
    description:
      "There will be a description put in here for my project.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: [],
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };