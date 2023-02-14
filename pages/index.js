import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="header">
        <div className="fullName">
          <h1 className="firstName">Golde</h1>
          <h1 className="lastName">Tischler</h1>
        </div>
        <div className="btn">
          <button type="button" class="nes-btn is-normal">
            About Me
          </button>
          <button type="button" class="nes-btn is-primary">
            Projects
          </button>
          <button type="button" class="nes-btn is-success">
            Contact
          </button>
        </div>
      </div>


      <div className="jobTitleIntroBubbleContainer">
        <div className="titleContainer">
          <i class="kirby nes-kirby is-small"></i>
          <h1 className="jobTitle">
            Full Stack <br /> Web Developer
          </h1>
        </div>

        <div className="introBubbleContainer">
          <p class="introBubble nes-balloon from-left ">
            Hi! Welcome to my page! It&#39;s a work in progress. Check out some
            of the projects I&#39;ve been working on!
          </p>
        </div>
      </div>

      <div className="portfolioGrid">
        <div class="img nes-container is-centered is-rounded is-dark">
          {" "}
          {/* with-title */}
          <p class="portfolioTitle title">Zero-Waste</p>
          <p className="portfolioDescription">
            I created this app in an attempt to build community and reduce food
            waste.
          </p>
        </div>

        <div class="img nes-container is-centered is-rounded is-dark">
          {" "}
          {/* with-title */}
          <p class="portfolioTitle title">Ben Schroeder Poetry</p>
          <p className="portfolioDescription">
            I created this app for poet and essayist Ben Shroeder, to showcase
            his work.
          </p>
        </div>
      </div>

      <div className="contactInfo">
        <Link
          className="linkedIn"
          href="https://www.linkedin.com/in/golde-tischler/"
          target="blank"
        >
          <i class="nes-icon linkedin is-medium"></i>
        </Link>
        <Link
          className="gitHub"
          href="https://github.com/goldet"
          target="blank"
        >
          <i class="nes-icon github is-medium"></i>
        </Link>
      </div>
    </>
  );
}
