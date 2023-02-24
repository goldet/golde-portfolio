import Link from "next/link";
import * as React from "react";
import ProjectButtons from "./ProjectButtons";

const Projects = () => {
  return (
    <>
      <div className="portfolioGrid">
        <div className="img nes-container is-centered is-rounded is-dark">
          <Link href="/zerowaste"><p className="portfolioTitle title">Zero-Waste</p></Link>
          <p className="portfolioDescription">
            This app attempts to reduce food waste while building community.
          </p>

          <ProjectButtons />
        </div>

        <div className="img nes-container is-centered is-rounded is-dark">
          {" "}
          <p className="portfolioTitle title">Ben Schroeder Poetry</p>
          <p className="portfolioDescription">
            This web app was made to showcase the work of poet and essayist, Ben
            Shroeder.
          </p>
          {/* <ProjectButtons /> */}
        </div>
      </div>
    </>
  );
};

export default Projects;
