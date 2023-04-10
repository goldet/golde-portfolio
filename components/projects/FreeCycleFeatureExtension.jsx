import freecyclelaptop from "../../public/freecyclelaptop.png";
import styles from "../../styles/projectdetail.module.css";
import ProjectTemplate from "../ProjectTemplate";

const FreeCycleFeatureExtension = ({ id }) => {
  return (
    <>
      <div id={id} className="container-project-and-heading">
        <h1 className="project-heading project-heading-margin">
          Feature Extensions
        </h1>
        <div className="container-mockup-text">
          <ProjectTemplate
            imageName={freecyclelaptop}
            with={"500"}
            height={"400"}
            projectName={"SecondLife"}
            description={
              <>
                Who doesn&apos;t love free stuff? This is a project by{" "}
                <a
                  className="collborator-github-links"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/kpo18"
                >
                  Katja Pollmann
                </a>{" "}
                Her web app seeks to create a space where you can get free
                things around London. I added the feature extension of being
                able to add photo uploads of the items posted to give away. They
                are stored in a local folder and then the image path is saved to
                the database.
              </>
            }
            techStack={"React Multer Express.Js MySQL"}
            link={"https://github.com/kpo18/freecycle-web-app"}
            linkName={"github"}
          />
        </div>
      </div>
    </>
  );
};

export default FreeCycleFeatureExtension;
