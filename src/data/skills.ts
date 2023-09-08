export type Skill = {
  logo: string;
  name: string;
  id: number;
};

const skills: Skill[] = [
  { logo: "/assets/icons/java-script-logo.webp", id: 1, name: "js" },

  {
    logo: "/assets/icons/css-3.webp",
    id: 2,
    name: "css",
  },

  {
    logo: "/assets/icons/html-5-logotype.webp",
    id: 3,
    name: "html",
  },

  {
    logo: "/assets/icons/react.webp",
    id: 4,
    name: "react",
  },
];

export default skills;
