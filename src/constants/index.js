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
  prisma,
  scheduler,
  tweeter,
  jungle,
  crypto,
  mimikyu
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
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
    name: "Crypto Monitor",
    description: [
              "Monitoring application where users can register to help track crypto currencies", "Personalized watch lists are able to be updated as desired", "Modern search functionality and simplistic display", "Live updating of data on a large variety of currencies"],
        tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
      {
        name: "registration",
        color: "pink-text-gradient",
      },
    ],
    image: [crypto],
    source_code_link: "https://github.com/Jagan-creator/crypto-monitor",
  },
  {
    name: "Scheduler",
    description: [
      "Easy to use scheduler application that can book, cancel, and edit appointments with mentors", "Various error and warning notices are integrated for a better user experience", "Simplistic navigation that shows students what areas they can book an appointment", "Live updating of notifications and appointment status"],
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "testing",
        color: "orange-text-gradient",
      },
      {
        name: "errors",
        color: "pink-text-gradient",
      },
    ],
    image: [scheduler],
    source_code_link: "https://github.com/Jagan-creator/scheduler",
  },
  {
    name: "Jungle",
    description: [
      "Entirely functional e-commerce web app", "Authentic payment verification and processing used during checkout", "Live updating of stock availability  on various items", "Modern and visually appealing styles used throughout the app"],
    tags: [
      {
        name: "ruby",
        color: "blue-text-gradient",
      },
      {
        name: "rails",
        color: "green-text-gradient",
      },
      {
        name: "ecommerce",
        color: "orange-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: [jungle],
    source_code_link: "https://github.com/Jagan-creator/jungle-rails",
  },
  {
    name: "Tweeter",
    description: [
      "Modern and elegant social media web app that allows users to make creative posts", "Heavy focus on simplistic styling for users to navigate", "Mobile layouts are thoroughly functional with this application", "Responsive design to update users with critical information as they interact with Tweeter"],
    tags: [
      {
        name: "sass",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
    ],
    image: [tweeter],
    source_code_link: "https://github.com/Jagan-creator/tweeter",
  },
  {
    name: "Mimikyu's Day Off",
    description: [
      "Multi-level and fully dynamic dungeon crawler based game", "Allows for users to save their progression and character moves as they advance", "Visually appealing graphics for a smooth and modern user experience", "Fully deployed with database management systems in place"],
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "orange-text-gradient",
      },
      {
        name: "auth0",
        color: "pink-text-gradient",
      },
    ],
    image: [mimikyu],
    source_code_link: "https://github.com/penguinboots/mimikyus-day-off",
  },
];

export { services, technologies, experiences, projects };