const baseUrl = import.meta.env.BASE_URL;

const projects = [
  {
    image: `${baseUrl}assets/lndata_cover.png`,
    title: "GreenMove - Mobile App",
    subtitle: "Associated with LnData, Taiwan 🇹🇼",
    description:
      "An app prototype that provides actionable insights to reduce Scope 3 Emissions.",
    tags: ["Figma", "UX/UI", "Solution Design"],
  },
  {
    image: `${baseUrl}assets/expensely_cover.png`,
    title: "Expensely",
    subtitle: "[ongoing] Personal Project",
    description:
      "An easier, straightforward, and insightful personal budget-tracking app.",
    tags: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS", "UX/UI"],
  },
  {
    image: `${baseUrl}assets/gund_cover.png`, 
    title: "Gund Gallery Feedback Site",
    subtitle: "Kenyon College, Ohio 🇺🇸",
    description:
      "A feedback system for the Gund Gallery to improve the visitor experience.",
    tags: ["Javascript", "C++", "RestAPI", "UX/UI", "HTML", "CSS"],
  },
  {
    image: `${baseUrl}assets/portfolio_cover.png`, 
    title: "Personal Portfolio",
    subtitle: "[ongoing] Personal Project",
    description: "A personal website to showcase my projects and experiences.",
    tags: ["React", "TailwindCSS", "UX/UI"],
  },
];

export default projects;
