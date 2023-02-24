import Link from "next/link";
import Header from "../Header";
import Image from "next/image";
import zwhero from "../../public/zwhero.png";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import DirectionsIcon from "@mui/icons-material/Directions";

const ZeroWasteProject = () => {
  return (
    <>
      <Header />

      <div className="jobTitleIntroBubbleContainer">
        <div className="titleContainer">
          <i class="kirbyZW nes-kirby is-small"></i>
        
        </div>

        <div className="introBubbleContainerZW">
          <p class="introBubble nes-balloon from-left ">
            Hi! Welcome to an MVP project I did. The mission of the web app is
            to reduce waste while building community! You will be able to post
            food items you either want to share or that you need. I&#39;m
            working on iterating it and adding some cool features such as user
            authentication and profile pages, and geolocation. Check out my
            github if you&#39;re interested in collaborating!
          </p>
        </div>
      </div>

      <div className="page-container">
        <article className="main">
          <div className="container1">
            <Link className="back-link" href="/">
              BACK
            </Link>

            <div className="spacer-20"></div>

            <div className="-detail-card">
              <div className="project-detail-grid">
                <Image
                className="project-detail-img"
                  src={zwhero}
                  alt="hero page of zero waste web app"
                  width="100px"
                  height="100px"
                />
                <div className="project-detail-text">
                  <div>
                    <h3 className="project-detail-title">Zero-Waste</h3>

                    <div className="section-container">
                      <div className="icon">
                        <Diversity1Icon />
                      </div>
                      <div className="icon-text">
                        <p className="project-detail-heading">COLLABORATORS: Shauni Vanderhorst</p>
                      </div>
                    </div>
                    <div className="spacer-20"></div>

                    <div className="section-container">
                      <div className="icon">
                        <DesktopMacIcon />
                      </div>
                      <div className="icon-text">
                        <p className="project-detail-heading">TECH STACK</p>
                       
                      </div>
                    </div>
                    <div className="spacer-20"></div>
                    <p>
                      <div class="">
                        <ul class="">
                          <li>Next.Js: I chose Next because of the improved development process, improve performance which leads to faster applications, and improved SEO.</li>
                          <li>CSS and Tailwind CSS: I used this project to start getting more comfortable with Tailwind, although I did also use Vanilla CSS</li>
                          <li>Express.Js: I used Express as it is the most popular Node web framework. It also uses Javascript, is scalable, and has a great open-source community.</li>
                          <li>MySQL: I used MySQL because is is ideal for storing web application data. I also intend on creating other tables in future iterations that will need a relational database which stores data across multiple tables.</li>
                        </ul>
                      </div>
                    </p>
                    <div className="spacer-20"></div>

                    <div className="section-container">
                      <div className="icon">
                        <DirectionsIcon />
                      </div>
                      <p className="project-detail-heading">Link to website</p>
                      
                    </div>
                   

                    <div className="horizontal-line">
                      <p className="github-project">Git hub project link later</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="spacer-50"></div>
      </div>
    </>
  );
};

export default ZeroWasteProject;
