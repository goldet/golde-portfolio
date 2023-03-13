import Header from "../Header";
import zwhero from "../../public/zwhero.png";
import zerowastelaptop from "../../public/zerowastelaptop.png";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/projectdetail.module.css";


const NewZeroWasteProject = ({ id }) => {

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
          <h1 >Zero Waste</h1>
          <p>
            Use this web application to reduce food waste and get in touch with
            your community. Post food you want to give away or food you need.
            Search products by type or by location.
          </p>
          <p>Made with</p>
          <p>Next.Js Tailwind Css Express.Js MySQL</p>
          <div>
            {/* <button>Live Site</button> */} <a className="project-links" href="https:github.com/goldet/zero-waste">github</a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default NewZeroWasteProject;
