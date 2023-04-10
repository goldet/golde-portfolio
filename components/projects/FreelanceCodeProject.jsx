import freelancecodelaptop from "../../public/freelancecodelaptop.png";
import styles from "../../styles/projectdetail.module.css";
import ProjectTemplate from "../ProjectTemplate";

const FreelanceCodeProject = ({ id }) => {
  return (
    <>
      <div id={id} className="container-project-and-heading">
        <h1 className="project-heading project-heading-margin">Projects</h1>
        <div className="container-mockup-text">
          <ProjectTemplate
            imageName={freelancecodelaptop}
            height={"500"}
            width={"400"}
            projectName={"Freelance Code"}
            description={
              <>
                Need a full-stack programmer, data scientist, or product
                manager? I, along with{" "}
                <a
                  className="collborator-github-links"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/kpo18"
                >
                  Katja Pollmann
                </a>{" "}
                and
                <a
                  className="collborator-github-links"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Shaunivdh"
                >
                  Shauni van der Horst
                </a>
                , created this web app to find freelance services from the
                graduates of CodeOp.
              </>
            }
            techStack={"Next.Js Tailwind css MySQL"}
            link={"https://github.com/CodeOp-tech/fspt13-team-3"}
            linkName={"github"}
          />
        </div>
      </div>
    </>
  );
};

export default FreelanceCodeProject;
