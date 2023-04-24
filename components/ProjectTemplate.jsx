import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

const ProjectTemplate = ({
  imageName,
  projectName,
  width,
  height,
  description,
  techStack,
  link,
  linkName,
  link2,
  linkName2,
  mobile,
}) => {
  useEffect(() => {
    if (typeof AOS !== "undefined")
    AOS.init();
  }, []);
  return (
    <>
      {" "}
      <div
        className={`mockup ${mobile ? "mobile" : ""}`}
        data-aos="zoom-in-left"
        data-aos-easing="ease-in"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-delay="25"
      >
        <Image
          src={imageName}
          alt={`Image of ${projectName}`}
          width={width}
          height={height}
        />
      </div>
      <div
        className="project-text"
        data-aos="zoom-in-right"
        data-aos-easing="ease-in"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-delay="25"
      >
        <h1>{projectName}</h1>
        <p>{description}</p>
        <p>Made with:</p>
        <p>{techStack}</p>
        <div className="github-live-links-container">
          <a className="project-links" target="blank" href={link}>
            {linkName}
          </a>{" "}
          <div className="line-divider">|</div>{" "}
          <a className="project-links" target="blank" href={link2}>
            {linkName2}
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectTemplate;
