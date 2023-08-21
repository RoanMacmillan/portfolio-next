import React from "react";
import { useRouter } from "next/router";
import projects, { Project } from "@/data/projects";
import PortfolioDetail from "@/containers/PortfolioDetail";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import HomeBtn from "@/components/HomeBtn";

interface PortfolioItemProps {
  project: Project;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ project }) => {
  return (
    <>
      <ScrollToTop />
      <HomeBtn />

      <Header />

      <div className="px-6  customMd:px-20">
        <PortfolioDetail project={project} />
        <Footer
          title="See"
          emphasizedText="More"
          footerLink="Portfolio"
          link="/"
        />
      </div>
    </>
  );
};

export async function getStaticProps({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: { project },
  };
}

export default PortfolioItem;
