import * as React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import nestv from "../public/nestv.png";

{/* <Image className="tv-background" src={nestv} alt="TV background image" width="100%"
height="100%"></Image> */}

export default function HomePage() {
  return (
    <>
      <Header />

      <div className="jobTitleIntroBubbleContainer">
        <div className="titleContainer">
          <i className="kirby nes-kirby is-small"></i>
          <h1 className="jobTitle">
            Full Stack <br /> Web Developer
          </h1>
        </div>

        <div className="introBubbleContainer">
          <p className="introBubble nes-balloon from-left ">
            Hi! Welcome to my page! It&#39;s a work in progress. Check out some
            of the projects I&#39;ve been working on!
          </p>
        </div>
      </div>

      <Projects />

      <Footer />
    </>
  );
}
