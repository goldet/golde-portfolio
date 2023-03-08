import * as React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import GridProjects from "./GridProjects";

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
      <Header />
      <h1 className="jobTitle">
        {text}
        <span aria-hidden="true"></span>
      </h1>

      <div class="containerArrow">
        <a className="arrowScroll" data-scroll href="#full">
          <div class="arrow"></div>
        </a>
      </div>
      <div className="spacer-50"></div>
      <div className="spacer-50"></div>

      {typingComplete && (
        <div id="full">
          {" "}
          <div className="spacer-50"></div>
          <GridProjects /><div className="spacer-250"></div> <Footer />{" "}
        </div>
      )}
    </>
  );
}
