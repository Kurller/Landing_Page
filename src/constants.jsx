// src/constants.jsx
import BaffkoImage from "./assets/baffko.jpg";
import BaffkoImage1 from "./assets/baffko1.jpg";
import BaffkoImage2 from "./assets/baffko2.jpg";
import BaffkoImage3 from "./assets/baffko3.jpg";
import ProjectImg1 from "./assets/project1.jpg";
import ProjectImg2 from "./assets/project2.jpg";
import ProjectImg3 from "./assets/project3.jpg";

export const LINKS = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Contact", link: "#contact" },
];
export const HERO_CONTENT = {
  title: "Welcome to Baffko International",
  subtitle: "Your best choice for Hygienic Beef and Local Snacks ",
  image: BaffkoImage,
};

export const SERVICES_CONTENT = {
  title: "Our Services",
  subtitle: "What we offer to help you grow",
  content: [
    {
      id: 1,
      title: "Meat Sharing",
      description:
        "We slaughter live healthy, big, agriculturally bred cow, ram, and goat and sell per kilo at ₦7,500 per kilo.",
      image: BaffkoImage1,
    },
    {
      id: 2,
      title: "Bulk Production of Kulikuli, Donkwa, Yaji & Suya Spices",
      description:
        "We process and sell Kulikuli, Donkwa, and other local snacks per kilogram.",
      image: BaffkoImage2,
    },
    {
      id: 3,
      title: "Consultation",
      description:
        "Providing guidance and solutions to improve your digital presence.",
      image: BaffkoImage3,
    },
  ],
};
 
export const PROJECTS_CONTENT = {
  title: "Projects",
  subtitle: "Some of the projects I have worked on",
  content: [
    {
      id: 1,
      title: "Responsive Landing Page",
      description:
        "A fully responsive landing page built with React and Tailwind CSS, following mobile-first principles.",
      technologies: ["React", "Tailwind CSS", "Vite"],
      image: ProjectImg1,
      liveUrl: "https://my-portfolio-projects-bice.vercel.app/",
      githubUrl: "https://github.com/Kurller/My-portfolio-projects",
    },
    {
      id: 2,
      title: "Shopping List App",
      description:
        "A simple CRUD application that allows users to add, edit, and remove items from a shopping list.",
      technologies: ["React", "JavaScript", "Locahttps://shopping-list-a6nk.vercel.app/l Storage"],
      image: ProjectImg2,
      liveUrl: "",
      githubUrl: "https://github.com/Kurller/ShoppingList",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "My personal portfolio website showcasing my skills, projects, and contact information.",
      technologies: ["React", "Tailwind CSS"],
      image: ProjectImg3,
      liveUrl: "https://shopping-list-a6nk.vercel.app/",
      githubUrl: "https://github.com/username/portfolio",
    },
  ],
};