import React from "react";
import benpoetlaptop from "../../public/benpoetlaptop.png";
import styles from "../../styles/projectdetail.module.css";
import ProjectTemplate from "../ProjectTemplate";

const BenPoetryProject = ({ id }) => {
  console.log();
  return (
    <>
      <div id={id} className="container-mockup-text">
        <ProjectTemplate
          imageName={benpoetlaptop}
          with={"500"}
          height={"400"}
          projectName={"Ben Shroeder Poetry"}
          description={
            <>
              A freelance project made with{" "}
              <a
                className="collborator-github-links"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/DanNisenson"
              >
                Dan Nisenson
              </a>{" "}
              to showcase the work of poet and essayist Ben Shroeder.
            </>
          }
          techStack={"Next.Js Tailwind Css"}
          link={"https://github.com/goldet/benspoetryapp"}
          linkName={"github"}
          link2={"https://benspoetryapp.vercel.app/"}
          linkName2={"live site"}
        />
      </div>
    </>
  );
};

export default BenPoetryProject;
