import * as React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import GridProjects from "./GridProjects";
import styles from "../styles/homepage.module.css";
import NewZeroWasteProject from "./zerowaste/NewZeroWasteProject";
import BenPoetryProject from "./benpoetry/BenPoetryProject";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";

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
    <>
     {typingComplete && <Header />} 
     {!typingComplete && <div className="spacer-50"></div>}
      <h1 className="jobTitle">
        {text}
        <span aria-hidden="true"></span>
      </h1>

      {typingComplete && (
        <div>
          <div class="containerArrow">
            <a className="arrowScroll" data-scroll href="#full">
              <div class="arrow"></div>
            </a>
          </div>
          <div className="spacer-50"></div>
          <div className="spacer-50"></div>
          <div className="spacer-50"></div>
          <div id="full">
            <GridProjects />
            <div className="spacer-50"></div>
            <div className="spacer-50"></div>
            <div className="spacer-50"></div>
          </div>

          <NewZeroWasteProject id="zero-waste"/>
        
          <div className="spacer"></div>
          <BenPoetryProject id="ben-poetry"/>
          <div className="spacer"></div>
          <AboutMe id="about"/>

          <ContactMe id="contact"/>

          <Footer />
        </div>
      )}
    </>
  );
}
