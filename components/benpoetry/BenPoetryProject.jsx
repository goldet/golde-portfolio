import React from "react";
import { useState } from "react";
import Link from "next/link";
import Header from "../Header";
import Image from "next/image";
import bpopenprompt from "../../public/bpopenprompt.png";
import newbenhero from "../../public/newbenhero.png";
import newmobilebenhero from "../../public/newmobilebenhero.png";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import DirectionsIcon from "@mui/icons-material/Directions";
import { MdAssignment } from "react-icons/md";
import { useMedia } from "react-use";
import Footer from "../Footer";
import { BsArrowRightSquare } from "react-icons/bs";

const BenPoetryProject = () => {
  const isWide = useMedia("(min-width: 480px)", false);

     //state to show content 
     const [showContent, setShowContent] = useState(false);

  //state to hold different project info
  const [showAbout, setShowAbout] = useState(true);
  const [showCollaborators, setShowCollaborators] = useState(false);
  const [showTechstack, setShowTechstack] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  //state to hold different tech stack info
  const [showNext, setShowNext] = useState(false);
  const [showStyling, setShowStyling] = useState(false);

  //array that contains the imported images:
  const images = [newbenhero];
  //state variable to keep track of the current image index:
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  //handle the button click event and update the current image index:
  const handleNextButtonClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handleContentClickTrue = () => {
    setShowContent(true);
  };

  const handleContentClickFalse = () => {
    setShowContent(false);
  };

  //click handlers for project info
  const handleShowAboutClick = () => {
    setShowAbout(true);
    setShowCollaborators(false);
    setShowTechstack(false);
    setShowLinks(false);
  };

  const handleShowCollaboratorsClick = () => {
    setShowAbout(false);
    setShowCollaborators(true);
    setShowTechstack(false);
    setShowLinks(false);
  };

  const handleShowTechstackClick = () => {
    setShowAbout(false);
    setShowCollaborators(false);
    setShowTechstack(true);
    setShowLinks(false);
  };

  const handleShowLinksClick = () => {
    setShowAbout(false);
    setShowCollaborators(false);
    setShowTechstack(false);
    setShowLinks(true);
  };

  //click handlers for tech stack info
  const handleShowNext = () => {
    setShowNext(true);
    setShowStyling(false);
    setShowMulter(false);
    setShowExpress(false);
    setShowMySQL(false);
  };

  const handleShowStyling = () => {
    setShowNext(false);
    setShowStyling(true);
    setShowMulter(false);
    setShowExpress(false);
    setShowMySQL(false);
  };

  return (
    <>
      <Header />

      {!showContent && (
        
        <div className="background-image" style={{ position: "relative" }}>
          <Image
          className="project-detail-img"
            src={bpopenprompt}
            alt="background image"
            width="100px"
            height="100px"
          />
          <button className="show-content-button"  style={{
      position: "absolute",
      top: "50%",
      left: "45%",
      transform: "translate(-50%, -50%)",}} onClick={handleContentClickTrue}>
          
          </button>
          <div className="spacer-500"></div>
        
         
        </div>      
      )}

{showContent && ( 

      <div className="container-project-desktop">
        <div className="container-project-desktop-content">
          <div className="project-info-screen">
            <div className="container-buttons-project-details">
              <div className="image-and-bubble">
                {isWide && showAbout ? (
                  <div className="imageNextContainer">
                    <Image
                      className="project-detail-img"
                      src={newbenhero}
                      alt="hero page of Ben Shroeder Poetry web app"
                      width="100px"
                      height="100px"
                    />
                    <BsArrowRightSquare
                      className="imageNextButton"
                      onClick={handleNextButtonClick}
                    />
                  </div>
                ) : !isWide && showAbout ? (
                  <Image
                    className="project-detail-img"
                    src={newmobilebenhero}
                    alt="hero page of Ben Shroeder Poetry mobile web app"
                    width="400px"
                    height="400px"
                  />
                ) : null}
                {showAbout && (
                  <div className="intro-bubble-proj-container">
                    <i className="kirbyZW nes-kirby is-small"></i>

                    <p className="intro-bubble-proj nes-balloon from-left ">
                      This is a freelance project to showcase the work of poet
                      and essayist, Ben Shroeder.
                    </p>
                  </div>
                )}
              </div>
              <div className="grid-buttons">
                <button className="parent-btn1 ">
                  <MdAssignment
                    className="about-btn"
                    onClick={handleShowAboutClick}
                  />
                </button>
                <button className="parent-btn2">
                  <Diversity1Icon
                    className="collaborators"
                    onClick={handleShowCollaboratorsClick}
                  />
                </button>
                <button className="parent-btn3">
                  <DesktopMacIcon
                    className="techstack"
                    onClick={handleShowTechstackClick}
                  />
                </button>
                <button className="parent-btn4">
                  {" "}
                  <DirectionsIcon
                    className="links"
                    onClick={handleShowLinksClick}
                  />
                </button>
              </div>

              {showCollaborators && (
                <div className="project-info-screen">
                  <p className="project-detail-heading">COLLABORATORS: </p>
                  <Link
                    className="link project-detail-heading"
                    href="https://github.com/DanNisenson"
                    target="blank"
                  >
                    <li>Dan Nisenson</li>
                    <div className="spacer-20"></div>
                  </Link>
                  <p>
                    Dan and I worked together to meet Ben&rsquo;s vision. We
                    both handled different aspects of the functionality of the
                    menu and the design.
                  </p>
                </div>
              )}

              {showTechstack && (
                <div className="techstack-section">
                  <button
                    className="tech-stack-buttons"
                    onClick={handleShowNext}
                  >
                    Next.Js
                  </button>
                  <button
                    className="tech-stack-buttons"
                    onClick={handleShowStyling}
                  >
                    Styling
                  </button>

                  {showNext && (
                    <div>
                      Next.Js: We chose Next because of the improved development
                      process, improved performance which leads to faster
                      applications, and improved SEO.
                    </div>
                  )}

                  {showStyling && (
                    <div>
                      Tailwind CSS: This projecy was styled with Tailwind CSS.
                      It allowed us to work quickly during the design process.
                    </div>
                  )}
                </div>
              )}

              {showLinks && (
                <div>
                  <p>Check out the site: Link to website</p>

                  <Link
                    className="github-project"
                    href="https://github.com/goldet/benspoetryapp"
                    target="blank"
                  >
                    <p className="link">Ben Schroeder Poetry in Github</p>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="spacer-750"></div>
          <button className="show-content-button" onClick={handleContentClickFalse}> GO BACK</button>

        </div>
      </div> )}
      <Footer />
    </>
  );
};

export default BenPoetryProject;
