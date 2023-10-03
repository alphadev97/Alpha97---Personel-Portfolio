// NAVIGATION ITEM
export const navItems = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "#about",
  },
  {
    id: 3,
    title: "Projects",
    url: "/projects",
  },
  {
    id: 4,
    title: "Skills",
    url: "#skills",
  },
  {
    id: 5,
    title: "Experience",
    url: "#experience",
  },
  {
    id: 6,
    title: "Contact",
    url: "#contact",
  },
];

// HERO ITEM
export const heroItem = {
  id: 1,
  image_url: "/alpha97.jpeg",
  title: "hero",
  name: "Hello, I'm Muhammad Usama",
  designation: "Software Engineer",
  experience: "2 years",
  focus: "Next.js & TypeScript",
  contact: {
    title: "Contact me here",
    url: "#contact",
  },
  cv: {
    title: "Download CV",
    url: "/",
  },
  iconOne: {
    title: "GitHub",
    image_url: "",
    url: "https://github.com/alphadev97",
  },
  iconTwo: {
    title: "Linkedin",
    image_url: "",
    url: "https://www.linkedin.com/in/alpha97/",
  },
};

// ABOUT ITEM
export const aboutItem = {
  title: "About Me",
  btnTitle: "Know More About Me",
  url: "https://www.linkedin.com/in/alpha97/",
  description:
    "👋 Hey there! I'm Muhammad Usama, a software engineer specializing in MERN and PERN stacks. I work with TypeScript, JavaScript, React, Next.js, Redux, Node.js, Express.js, MongoDB, PostgreSQL, and more. Passionate about creating helpful applications and assisting fellow developers. Let's connect and build impactful software solutions together.",
};

// PROJECTS ITEM
export const projectsItem = {
  title: "My Projects",
  url: "/projects",
  btnTitle: "All Projects",
  projects: [
    {
      id: 1,
      title: "Online Course Website Design",
      image_url: "/project-22-12-2022.png",
      description:
        "Online Course Website Design using HTML, CSS & Vanilla JavaScript",
      date: new Date(2022, 11, 22),
      projectLink: "https://alphadev97.github.io/Online-Course-Design/",
      github: "https://github.com/alphadev97/Online-Course-Design",
      technology: [
        {
          id: 1,
          title: "HTML",
        },
        {
          id: 2,
          title: "CSS",
        },
        {
          id: 3,
          title: "JAVASCRIPT",
        },
      ],
    },
    {
      id: 2,
      title: "E-Commerce Website Design",
      image_url: "/project-23-12-2022.png",
      description:
        "Online Course Website Design using HTML, CSS & Vanilla JavaScript",
      date: new Date(2022, 11, 23),
      projectLink: "https://alphadev97.github.io/ecommerce-design/",
      github: "https://github.com/alphadev97/ecommerce-design",
      technology: [
        {
          id: 1,
          title: "HTML",
        },
        {
          id: 2,
          title: "CSS",
        },
        {
          id: 3,
          title: "JAVASCRIPT",
        },
      ],
    },
    {
      id: 3,
      title: "3D Cube Ambient Light Effect",
      image_url: "/project-24-12-2022.png",
      description: "3D CSS Glowing Ambient Cube Design using HTML and CSS.",
      date: new Date(2022, 11, 24),
      projectLink: "https://github.com/alphadev97/3d-cube-ambient-light-effect",
      github: "https://alphadev97.github.io/3d-cube-ambient-light-effect/",
      technology: [
        {
          id: 1,
          title: "HTML",
        },
        {
          id: 2,
          title: "CSS",
        },
      ],
    },
    {
      id: 4,
      title: "CSS 3D Glowing Cube With Text Animation Effects",
      image_url: "/project-25-12-2022.png",
      description:
        "3D CSS Glowing Ambient Cube Design with Text using HTML and CSS.",
      date: new Date(2022, 11, 25),
      projectLink: "/",
      github: "",
      technology: [
        {
          id: 1,
          title: "HTML",
        },
        {
          id: 2,
          title: "CSS",
        },
      ],
    },
  ],
};

// SKILLS ITEM
export const skillsItem = [
  {
    id: 1,
    title: "HTML",
  },
  {
    id: 2,
    title: "CSS",
  },
  {
    id: 3,
    title: "JAVASCRIPT",
  },
  {
    id: 4,
    title: "REACT.JS",
  },
  {
    id: 5,
    title: "NODE.JS",
  },
  {
    id: 6,
    title: "EXPRESS.JS",
  },
  {
    id: 7,
    title: "TYPESCRIPT",
  },
];

// EXPERIENCE ITEM
export const experienceItem = [
  {
    id: 1,
    company: "BlueTech International",
    role: "Software Engineer",
    from: new Date(2023, 8, 14).getFullYear(),
    to: "",
    description:
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
    stack: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "JAVASCRIPT",
      },
    ],
  },
  {
    id: 2,
    company: "BlueTech International",
    role: "Software Engineer",
    from: new Date(2019, 8, 14).getFullYear(),
    to: new Date(2022, 8, 14).getFullYear(),
    description:
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
    stack: [
      {
        id: 1,
        title: "HTML",
      },
      {
        id: 2,
        title: "CSS",
      },
      {
        id: 3,
        title: "JAVASCRIPT",
      },
    ],
  },
];

// CONTACT ITEM
export const contactItem = {
  title: "Contact Me",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi beatae sunt, recusandae reiciendis repudiandae porro numquam neque illo, voluptas molestiae optio cumque tenetur, deleniti minus perspiciatis nemo natus voluptates harum?",
  contact_items: [
    {
      id: 1,
      title: "Email Address",
      image_url: "/email.png",
    },
    {
      id: 2,
      title: "Phone No",
      image_url: "/phone.png",
    },
    {
      id: 3,
      title: "WhatsApp",
      image_url: "/whatsapp.png",
    },
  ],
};
// COPYRIGHT ITEM
export const copyrightItem = {
  name: "Alpha97 | Muhammad Usama",
  url: "/",
};
