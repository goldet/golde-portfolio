import paypulpmobile from "../../public/paypulpmobile.png";
import styles from "../../styles/projectdetail.module.css";
import ProjectTemplate from "../ProjectTemplate";

const PaypulpProject = ({ id }) => {
  return (
    <>
      <div id={id} className="container-project-and-heading">
        <div className="container-mockup-text">
          
          <ProjectTemplate
            mobile={true}
            imageName={paypulpmobile} 
            height={"400"}
            width={"200"}
            projectName={"PayPulp"}
            description={
              <>
                This mobile app was a project by Dan Nisenson, which is a
                prototype for a payment gateway using QR codes. I did various
                feature extensions including the signup pages, styling,
                verification of token in front and backend, and error and
                success handling.
              </>
            }
            techStack={"React Express.Js PostgreSQL SASS"}
            link={"https://github.com/grupo2PT/paypulp-frontend"}
            linkName={"github frontend"}
            link2={"https://github.com/grupo2PT/paypulp-backend"}
            linkName2={"github backend"}
          />
        </div>
      </div>
    </>
  );
};

export default PaypulpProject;
