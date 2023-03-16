import freelancecodelaptop from "../../public/freelancecodelaptop.png";
import Image from "next/image";
import styles from "../../styles/projectdetail.module.css";

const FreelanceCodeProject = ({ id }) => {
  return (
    <>
      <div id={id} className="container-project-and-heading">
        <h1 className="project-heading">Projects</h1>
        <div className="container-mockup-text">
          <div className="mockup">
            <Image
              src={freelancecodelaptop}
              alt="Image of freelance-code hero page"
              width={"500"}
              height={"400px"}
            />
          </div>
          <div className="project-text">
            <h1>Freelance Code</h1>
            <p>
              Need a full-stack programmer, data scientist, or product manager? I,
              along with <a
                className="collborator-github-links"
                target="blank"
                href="https://github.com/kpo18"
              >
                Shauni Vanderhorst{" "}
              </a> and  <a
                className="collborator-github-links"
                target="blank"
                href="https://github.com/Shaunivdh"
              >
                Katja Pollman{" "}
              </a>, created this
              web app to find freelance services from the graduates of CodeOp.
            </p>
            <p>Made with</p>
            <p>Next.Js Tailwind css MySQL</p>
            <div className="github-live-links-container">
              <a
                 target="blank"
                className="project-links"
                href="https://github.com/CodeOp-tech/fspt13-team-3"
              >
                github
              </a>{" "}
              <div className="line-divider">|</div>{" "}
              {/* <button>Live Site</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreelanceCodeProject;
