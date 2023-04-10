import * as React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import GridProjects from "./GridProjects";
import styles from "../styles/homepage.module.css";
import NewZeroWasteProject from "./projects/NewZeroWasteProject";
import BenPoetryProject from "./projects/BenPoetryProject";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import FreeCycleFeatureExtension from "./projects/FreeCycleFeatureExtension";
import FreelanceCodeProject from "./projects/FreelanceCodeProject";
import Link from "next/link";
import FooterCredit from "./FooterCredit";
import PaypulpProject from "./projects/PaypulpProject";

export default function HomePage() {
  const dataText = ["F ull Stack Developer"];
  const [text, setText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    let i = 0;

    let timeoutId;
    const typeWriter = () => {
      if (i < dataText[0].length) {
        setText((prevText) => prevText + dataText[0].charAt(i));
        i++;
        timeoutId = setTimeout(typeWriter, 200);
      } else {
        // set typing complete when all text is typed to show content
        setTypingComplete(true);
      }
    };
    timeoutId = setTimeout(typeWriter, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <> <div className="main-home-screen">
     {typingComplete && <Header id="top" />} 
     {!typingComplete && <div className="spacer-50"></div>}
      <h1 className="jobTitle">
        {text}
        <span aria-hidden="true"></span>
      </h1>
      </div>

      {typingComplete && (
        <div className="project-container">
          <div class="containerArrow">
            <a className="arrowScroll" data-scroll href="#full">
              <div class="arrow"></div>
            </a>
          </div>
          <div className="spacer-50"></div>
          <div className="spacer-50"></div>
          <div className="spacer-50"></div>
          <div id="full">
            <GridProjects id="projects"/>
            <div className="spacer-50"></div>
            <div className="spacer-50"></div>
            <div className="spacer-50"></div>
          </div>
          
    
          <FreelanceCodeProject id="freelance-code"/>
          <div className="spacer"></div>
          <NewZeroWasteProject id="zero-waste"/>
          <div className="spacer"></div>
          <BenPoetryProject id="ben-poetry"/>
          <div className="spacer"></div>
          <FreeCycleFeatureExtension id="second-life"/>
          <div className="spacer"></div>
          <PaypulpProject id="paypulp"/>
          <div className="spacer"></div>
          <AboutMe id="about"/>

          <ContactMe id="contact"/>

         <Link href="#top"><section className="back-to-top">Back To Top</section></Link> 
         <FooterCredit />
        </div>
       

       
      )}
    </>
  );
}
