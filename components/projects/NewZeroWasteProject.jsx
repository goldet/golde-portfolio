import zerowastelaptop from "../../public/zerowastelaptop.png";
import Image from "next/image";
import styles from "../../styles/projectdetail.module.css";
import ProjectTemplate from "../ProjectTemplate";

const NewZeroWasteProject = ({ id }) => {
  return (
    <>
      <div id={id} className="container-project-and-heading">
        <div className="container-mockup-text">
          <ProjectTemplate
            imageName={zerowastelaptop}
            height={"500"}
            width={"400"}
            projectName={"Zero Waste"}
            description={
              "Use this web application to reduce food waste and get in touch with your community. Post food you want to give away or food you need. Search products by type or by location."
            }
            techStack={"Next.Js Tailwind Css Express.Js MySQL"}
            link={"https:github.com/goldet/zero-waste"}
            linkName={"github"}
          />
        </div>
      </div>
    </>
  );
};

export default NewZeroWasteProject;
