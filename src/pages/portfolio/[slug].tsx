// pages/portfolio/[slug].tsx

import React from "react";
import { useRouter } from "next/router";
import projects, { Project } from "@/data/projects";
import PortfolioDetail from "@/containers/PortfolioDetail";
import Footer from "@/components/Footer";

const PortfolioItem = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the project data based on the slug in the URL
  const project: Project | undefined = projects.find((item) => item.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="px-6 max-w-[1280px] mx-auto customMd:px-20">
      <PortfolioDetail project={project} />
      <Footer title="See" emphasizedText="More" footerLink="Portfolio" />
      </div>
  );
};

export default PortfolioItem;

