import React from "react";
import Link from "next/link";
import Image from "next/image";
import newbenhero from "../../public/newbenhero.png";
import benpoetlaptop from "../../public/benpoetlaptop.png";
import newmobilebenhero from "../../public/newmobilebenhero.png";
import styles from "../../styles/projectdetail.module.css";

import { useMedia } from "react-use";

const BenPoetryProject = ({ id }) => {
  const isWide = useMedia("(min-width: 480px)", false);

  return (
    <>
   
        <div  id={id} className="container-mockup-text">
          <div className="mockup">
            <Image
              src={benpoetlaptop}
              alt="Image of zero waste hero page"
              width={"500"}
              height={"400px"}
            />
          </div>
          <div className="project-text">
            <h1>Ben Shroeder Poetry</h1>
            <p>
              A freelance project made with <a className="collborator-github-links" target="blank"  href="https://github.com/DanNisenson">Dan Nisenson </a>, to showcase the work
              of poet and essayist Ben Shroeder.
            </p>
            <p>Made with</p>
            <p>Next.Js Tailwind Css</p>
            <div className="github-live-links-container">
            <a className="project-links" target="blank"  href="https:github.com/goldet/benspoetryapp">github </a> <div className="line-divider">|</div> <a className="project-links" target="blank" href="https://benspoetryapp.vercel.app/">live site</a> 
            </div>
          </div>
        </div>
    </>
  );
};

export default BenPoetryProject;
