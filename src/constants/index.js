import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  fsls,
  diamond,
  stu,
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
  milk,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  milkjoy,
  diamondshop,
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: ".NET Developer",
    company_name: "Diamond Shop",
    icon: diamond,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Apr 2024",
    points: [
      "Developing and maintaining web applications using C# and Razor Page for UI.",
      "Building and integrating RESTful APIs to improve application functionality.",
      "Optimizing code and UI for better performance and scalability.",
      "Ensuring application security by following best practices in authentication and data protection.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "MilkJoy",
    icon: milk,
    iconBg: "#383E56",
    date: "May 2024 - Aug 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "FSLS",
    icon: stu,
    iconBg: "#383E56",
    date: "Sep 2024 - Jan 2025",
    points: [
      "Developing and maintaining web applications using React.js for the front-end and Spring Boot for the back-end.",
      "Designing and implementing RESTful APIs and integrating them with front-end React applications.",
      "Ensuring application scalability and performance by optimizing Spring Boot configurations.",
      "Collaborating with backend developers to integrate APIs, databases, and external services seamlessly.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FPT Student Learning System",
    description:
      "A web-based platform that enables students to connect with expert tutors who possess in-depth knowledge and are dedicated to guiding them toward academic success in their courses.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Springboot",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: fsls,
    source_code_link: "https://lss-front-end.vercel.app/",
  },
  {
    name: "MilkJoy Shop",
    description:
      "Web application that allows users to explore various types of milk products, compare prices, and locate nearby stores or farms offering fresh dairy options based on their current location.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: milkjoy,
    source_code_link: "https://github.com/SWP391-Nhom3/FrontEnd",
  },
  {
    name: "Jewelry Sales System",
    description:
      "A comprehensive jewelry sales platform that enables users to browse and purchase a wide range of jewelry items, customize designs, and receive personalized recommendations based on their preferences.",
    tags: [
      {
        name: "Razor_page",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "SSMS",
        color: "pink-text-gradient",
      },
    ],
    image: diamondshop,
    source_code_link:
      "https://github.com/Bhieukhang/Summer2024_PRN231_NET1716_GroupNoName",
  },
];

export { services, technologies, experiences, testimonials, projects };
