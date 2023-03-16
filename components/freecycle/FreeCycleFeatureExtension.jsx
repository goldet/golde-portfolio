import freecyclelaptop from "../../public/freecyclelaptop.png";
import Image from "next/image";
import styles from "../../styles/projectdetail.module.css";

const FreeCycleFeatureExtension = ({ id }) => {
  return (
    <>
      <div id={id} className="container-project-and-heading">
        <h1 className="project-heading">Feature Extensions</h1>
        <div className="container-mockup-text">
          <div className="mockup">
            <Image
              src={freecyclelaptop}
              alt="Image of SecondLife hero page"
              width={"500"}
              height={"400px"}
            />
          </div>
          <div className="project-text">
            <h1>SecondLife</h1>
            <p>
              Who doesn&apos;t love free stuff? This is a project by{" "}
              <a
                className="collborator-github-links"
                target="blank"
                href="https://github.com/kpo18"
              >
                Katja Pollman.{" "}
              </a>
              Her web app seeks to create a space where you can get free
              things around London. I added the feature extension of being able
              to add photo uploads of the items posted to give away. They are
              stored in a local folder and then the image path is saved to the
              database.
            </p>

            <p>Feature extension made with</p>
            <p>Next.Js Multer Express.Js MySQL</p>
            <div className="github-live-links-container">
              <a
                target="blank"
                className="project-links"
                href="https://github.com/kpo18/freecycle-web-app"
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

export default FreeCycleFeatureExtension;
