import Link from "next/link";
import Header from "../Header";
import Image from "next/image";
import benschroederhero from "../../public/benschroederhero.png";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import DirectionsIcon from "@mui/icons-material/Directions";

const BenPoetryProject = () => {
  return (
    <>
      <Header />

      <div className="jobTitleIntroBubbleContainer">
        <div className="titleContainer">
          <i class="kirbyZW nes-kirby is-small"></i>
        </div>

        <div className="introBubbleContainerZW">
          <p class="introBubble nes-balloon from-left ">
            Hi! Welcome to Ben Shroeder&#39;s Poetry web application. Ben
            Shroeder is a poet and essayist currently living in Madrid. He
            wanted a web application to showcase his talent. For styling, he
            wanted a minimalist and modern aethstic.
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
                  src={benschroederhero}
                  alt="hero page of Ben Shroeder Poetry web app"
                  width="100px"
                  height="100px"
                />
                <div className="project-detail-text">
                  <div>
                    <h3 className="project-detail-title">
                      Ben Schroeder Poetry
                    </h3>

                    <div className="section-container">
                      <div className="icon">
                        <Diversity1Icon />
                      </div>
                      <div className="icon-text">
                        <div>
                          <p className="project-detail-heading">
                            COLLABORATORS:{" "}
                          </p>
                          <Link
                            className="link project-detail-heading"
                            href="https://github.com/DanNisenson"
                            target="blank"
                          >
                            <li>Dan Nisenson</li>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="spacer-50"></div>

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
                      <div >
                        <ul >
                          <li>
                            Next.Js: We chose Next because of the improved
                            development process, improved performance which
                            leads to faster applications, and improved SEO.
                          </li>
                          <li>
                            Tailwind CSS: This projecy was styled with Tailwind
                            CSS. It allowed us to work quickly during the design
                            process.
                          </li>
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
                      <Link
                        className="github-project"
                        href="https://github.com/goldet/benspoetryapp"
                        target="blank"
                      >
                        <p className="link github-project">
                          Ben Schroeder Poetry in Github
                        </p>
                      </Link>
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

export default BenPoetryProject;
