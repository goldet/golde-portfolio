import Image from "next/image";
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
  return (
    <>
      {" "}
      <div className={`mockup ${mobile ? 'mobile' : ''}`}>
        <Image
          src={imageName}
          alt={`Image of ${projectName}`}
          width={width}
          height={height}
        />
      </div>
      <div className="project-text">
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
