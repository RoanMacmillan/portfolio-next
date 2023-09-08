import React from "react";
import projects, { Project } from "@/data/projects";
import PortfolioDetail from "@/containers/PortfolioDetail";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import HomeBtn from "@/components/HomeBtn";
import Layout from "../layout";

interface PortfolioItemProps {
  project: Project;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ project }) => {
  return (
    <>
      <ScrollToTop />
      <HomeBtn />

      <Header />

      <Layout>

      <div className="px-6 customMd:px-20 xl:px-36">
        <PortfolioDetail project={project} />
        <Footer
          title="See"
          emphasizedText="More"
          footerLink="Portfolio"
          link="/"
        />
      </div>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  // Generate the list of possible slugs for dynamic routes
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false, // Change this to 'true' or 'blocking' if needed
  }
}

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
    revalidate: 3600,
  };
}

export default PortfolioItem;
