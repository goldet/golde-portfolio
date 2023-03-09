import Header from "../Header";
import zwhero from "../../public/zwhero.png";
import zerowastelaptop from "../../public/zerowastelaptop.png";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/projectdetail.module.css";

/* const datas = {
  "Zero Waste":
    "A web application to reduce food waste and promote community. You can post foods you have to give away or foods you need. You can contact people based on your location to start sharing!",
  Collaborators:
    "Shauni Vanderhorst added mobile calling functionality so that you can click the phone number to start a call.",
  "Tech Stack":
    "This web app was made using Next.JS, Tailwind and CSS, Express.JS, and MySQL",
  Explore:
    "Check out the project here: or visit the project on github: github.com/goldet/zero-waste.",
}; */

const NewZeroWasteProject = ({ id }) => {
/*   const [selectedItem, setSelectedItem] = useState("Zero Waste");

  const getClassNames = (index) => {
    const baseClass = `content content_${index}`;
    return selectedItem === index ? `${baseClass} active` : baseClass;
  }; */

  return (
    <>
    <div id={id} className="container-project-and-heading">
      <h1 className="project-heading">Projects</h1>
      <div className="container-mockup-text">
        <div className="mockup">
          <Image
            src={zerowastelaptop}
            alt="Image of zero waste hero page"
            width={"500"}
            height={"400px"}
          />
        </div>
        <div className="project-text">
          <h1>Zero Waste</h1>
          <p>
            Use this web application to reduce food waste and get in touch with
            your community. Post food you want to give away or food you need.
            Search products by type or by location.
          </p>
          <p>Made with</p>
          <p>Next.Js Tailwind Css Express.Js MySQL</p>
          <div>
            <button>Live Site</button> <button>github</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default NewZeroWasteProject;
