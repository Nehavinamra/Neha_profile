import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mediatrails,
  iub,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Internship",
    company_name: "Media Trails",
    icon: mediatrails,
    iconBg: "#383E56",
    date: "November 2021 - March 2022",
    points: [
      "Designed and verified the website layout using HTML, JavaScript, and CSS, ensuring functionality and usability.",
      "Orchestrated the enhancement of web aesthetics through targeted graphic integration and immersive multimedia features",
      "Achieved an 82% increase in user engagement by adding multimedia features and interactive services.",
    ],
  },
  {
    title: "Women Who Code Intern",
    company_name: "Indiana University Bloomington",
    icon: iub,
    iconBg: "#E6DEDD",
    date: "March 2024 - September 2024",
    points: [
      "Conducted technical workshops and seminars on programming and software development like React, JS, enhancing student's real world skills",
      "Empowered women in tech by organizing more than 20 sessions on software tools & data analysis, fostering innovation.",
      "Managed and facilitated technical events with a focus on agile development and testing strategies for more than 250 students.",
    ],
  },
];

const projects = [
  {
    name: "Music Player App",
    description:
      "Developed a fully functional music player app that allows users to effortlessly browse and play songs via Spotify API",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Nehavinamra/Music-Player",
  },
  {
    name: "DeliverEase",
    description:
      "Developed a comprehensive Delivery Management System utilizing the MERN stack to manage end-to-end package delivery operations efficiently",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Nehavinamra/DeliverEase",
  },
];

export { services, technologies, experiences, projects };
