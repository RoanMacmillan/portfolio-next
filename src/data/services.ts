export type Service = {
  image: string;
  heading: string;
  paragraph: string;
};

const services: Service[] = [
  {
    image: "/assets/icons/icon-code.svg",
    heading: "Frontend Development",
    paragraph:
      "I always keep up to date with the latest frameworks and trends to bring designs to life.",
  },

  {
    image: "/assets/icons/responsive.svg",
    heading: "Responsive Design",
    paragraph:
      "By implementing responsive design, Your website will look great and function on any device.",
  },

  {
    image: "/assets/icons/paint.svg",
    heading: "Web Design",
    paragraph:
      "Creating visually appealing and user-friendly website designs from scratch or based on client requirements",
  },
];


export default services;