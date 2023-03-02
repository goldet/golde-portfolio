import { useState } from "react";
import Link from "next/link";
import Header from "../Header";
import Image from "next/image";
import zwopenprompt from "../../public/zwopenprompt.png";
import zwhero from "../../public/zwhero.png";
import zwmobilehero from "../../public/zwmobilehero.png";
import foodshareZW from "../../public/foodshareZW.png";
import productdetailZW from "../../public/productdetailZW.png";
import { BsArrowRightSquare } from "react-icons/bs";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import DirectionsIcon from "@mui/icons-material/Directions";
import { MdAssignment } from "react-icons/md";

import { useMedia } from "react-use";
import Footer from "../Footer";

const ZeroWasteProject = () => {
  //to render different based on screen size
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
  const [showMulter, setShowMulter] = useState(false);
  const [showExpress, setShowExpress] = useState(false);
  const [showMySQL, setShowMySQL] = useState(false);

  //array that contains the imported images:
  const images = [zwhero, foodshareZW, productdetailZW];
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

  const handleShowMulter = () => {
    setShowNext(false);
    setShowStyling(false);
    setShowMulter(true);
    setShowExpress(false);
    setShowMySQL(false);
  };

  const handleShowExpress = () => {
    setShowNext(false);
    setShowStyling(false);
    setShowMulter(false);
    setShowExpress(true);
    setShowMySQL(false);
  };

  const handleShowMySQL = () => {
    setShowNext(false);
    setShowStyling(false);
    setShowMulter(false);
    setShowExpress(false);
    setShowMySQL(true);
  };
  return (
    <>
      <Header />

      {!showContent && (
        
        <div className="background-image" style={{ position: "relative" }}>
          <Image
          className="project-detail-img"
            src={zwopenprompt}
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
                      src={images[currentImageIndex]}
                      alt="hero page of zero waste web app"
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
                    src={zwmobilehero}
                    alt="hero page of zero waste mobile web app"
                    width="100px"
                    height="100px"
                  />
                ) : null}
                {showAbout && (
                  <div className="intro-bubble-proj-container">
                    <i className="kirbyZW nes-kirby is-small"></i>

                    <p className="intro-bubble-proj nes-balloon from-left ">
                      Zero Waste is a web app that aims to reduce food waste and
                      build community! Check out my github if you&#39;re
                      interested in collaborating!
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
                    href="https://github.com/Shaunivdh"
                    target="blank"
                  >
                    <li>Shauni Vanderhorst</li>
                    <div className="spacer-20"></div>
                  </Link>
                  <p>
                    Shauni noticed that in order to contact the user you had to
                    manually copy or type the phone number. She added a feature
                    extension to fix this issue. Now when you click the number
                    it will automatically open in your phone.
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
                  <button
                    className="tech-stack-buttons"
                    onClick={handleShowMulter}
                  >
                    Multer
                  </button>
                  <button
                    className="tech-stack-buttons"
                    onClick={handleShowExpress}
                  >
                    Express.Js
                  </button>
                  <button
                    className="tech-stack-buttons"
                    onClick={handleShowMySQL}
                  >
                    MySQL
                  </button>

                  {showNext && (
                    <div>
                      I chose Next because of the improved development process,
                      improved performance which leads to faster applications,
                      and improved SEO.
                    </div>
                  )}

                  {showStyling && (
                    <div>
                      I used this project to start getting more comfortable with
                      Tailwind, although I did also use Vanilla CSS.
                    </div>
                  )}

                  {showMulter && (
                    <div>
                      I used the middleware, Multer, to handle the image upload
                      because Multer is designed to handle multipart/form-data
                      in forms. I stored the image in a local folder then stored
                      the image_path to the database in order to render uploaded
                      images with the product uploaded.
                    </div>
                  )}

                  {showExpress && (
                    <div>
                      I used Express as it is the most popular Node web
                      framework. It also uses Javascript, is scalable, and has a
                      great open-source community.
                    </div>
                  )}

                  {showMySQL && (
                    <div>
                      {" "}
                      MySQL: I chose MySQL for the database because of it&#39;s
                      reliability and security as a database management system.
                      However, I am considering refactoring and switching to
                      MongoDB because of its geospatial query capabilities.
                    </div>
                  )}
                </div>
              )}

              {showLinks && (
                <div>
                  <p>Check out the site: Link to website</p>

                  <Link
                    className="github-project"
                    href="https://github.com/goldet/zero-waste"
                    target="blank"
                  >
                    <p className="link">Zero Waste in Github</p>
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

export default ZeroWasteProject;
