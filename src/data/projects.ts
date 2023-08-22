export type Project = {
  thumbnail: string;
  label: string;
  title: string;
  description: string;
  smallDescription: string;
  demoURL: string;
  codeURL: string;
  detailStatic1: string;
  detailStatic2: string;
  detailStatic3: string;
  background: string;
  slug: string;
};

const projects: Project[] = [
  {
    slug: "audio",
    thumbnail: "/assets/images/mobile/thumbnails/audio-thumb.webp",
    label: "01-04",
    title: "Audio",
    description:
      "This e-commerce site is a platform for selling audio equipment, complete with a functional cart and checkout system.",
    smallDescription: "A clean user-friendly e-commerce site",
    demoURL: "https://master-astonishing-wisp-499e69.netlify.app/",
    codeURL: "https://github.com/RoanMacmillan/audiophile-ecommerce-site",
    detailStatic1: "/assets/images/mobile/detail/audio-main-2.webp",
    detailStatic2: "/assets/images/mobile/detail/audio-static-new3.png",
    detailStatic3: "/assets/images/mobile/detail/audio-static-3.webp",
    background:
      "This project is an e-commerce platform for purchasing audio equipment, which I built with React. It includes detailed pages of each item, a functional cart, and checkout system.",
  },
  
  {
    slug: "arch",
    thumbnail: "/assets/images/mobile/thumbnails/arch-thumb.webp",
    label: "02-04",
    title: "Arch",
    description:
      "An Architecture portfolio showcasing different projects, with a slideshow feature and various detailed pages.",
    demoURL: "https://arch-studio-vite.netlify.app/",
    codeURL: "https://github.com/RoanMacmillan/arch-studio-vite",
    detailStatic1: "/assets/images/mobile/detail/arch-static-1.webp",
    detailStatic2: "/assets/images/mobile/detail/audio-static-3.webp",
    detailStatic3: "/assets/images/mobile/detail/arch-static-2.webp",
    smallDescription: "A visually captivating architecture portfolio",
    background:
      "An Architecure portfolio that displays multiple projects, built with react. It includes a detailed about and contact page, with leafletjs for the map feature.",
  },


{
    slug: "galleria",
    thumbnail: "/assets/images/mobile/thumbnails/gallery-thumb.webp",
    label: "03-04",
    title: "Galleria",
    description:
      "A gallery site showcasing a images in a masonry-style layout, complete with a slideshow feature.",
    demoURL: "https://prismatic-bublanina-c0f8ef.netlify.app/",
    codeURL: "https://github.com/RoanMacmillan/gallery-site",
    detailStatic1: "/assets/images/mobile/detail/gallery-main-2.webp",
    detailStatic2: "/assets/images/mobile/detail/gallery-static-3.webp",
    detailStatic3: "/assets/images/mobile/detail/gallery-static-3.webp",
    smallDescription: "An elegant gallery with masonry-style layout",
    background:
      "A masonry style layout made with CSS grid and React. It features a slideshow and lightbox feature to view the images.",
  },

  {
    slug: "minimal",
    thumbnail: "/assets/images/mobile/thumbnails/min-thumb.webp",
    label: "04-04",
    title: "Minimal",
    description:
      "A minimal portfolio template showcasing multiple projects, with a slideshow of portfolio items and detailed pages.",
    demoURL: "https://frolicking-belekoy-38156d.netlify.app/",
    codeURL: "https://github.com/RoanMacmillan/minimal-portfolio-site",
    detailStatic1: "/assets/images/mobile/detail/min-main-2.webp",
    detailStatic2: "/assets/images/mobile/detail/audio-static-3.webp",
    detailStatic3: "/assets/images/mobile/detail/min-static-3.webp",
    smallDescription: "A frontend portfolio showcasing multiple projects",
    background:
      "This minimal portfolio template was built with React. It showcases multiple portfolio projects, with an index, detailed pages for each item and a slideshow feature.",
  },
];

export default projects;
