import Image from "next/image";
import Link from "next/link";
import styles from "../styles/projectgrid.module.css";

const GridProjects = ({ id }) => {
  return (
    <>
    <div  id={id} className="spacer-50"></div>
    <div className="cards-list">
      
      <div className="gridlinks">
      <Link href="#freelance-code">
        <a 
          onClick={() => {
            document.querySelector("#freelance-code").scrollIntoView({
              behavior: "smooth",
              duration: 2000,
            });
          }}
        >
          {" "}
        </a>
        <div className="card 4">
          <div className="card_image">
            <img src="https://media.giphy.com/media/DxEmstaPbPGJTYSjLM/giphy.gif"/>
          </div>
          <div className="card_title title-black">
            <p className="card-text">Freelance Code</p>
          </div>
        </div>
      </Link>
      </div>

      <div className="gridlinks">
      <Link href="#zero-waste">
        <a
        className="gridlinks"
          onClick={() => {
            document.querySelector("#zero-waste").scrollIntoView({
              behavior: "smooth",
              duration: 2000,
            });
          }}
        >
          {" "}
        </a>
        <div className="card 2">
          <div className="card_image">
            <img
              src="https://media.giphy.com/media/MwUPdnmcZOWCA/giphy.gif"
              alt="hero page of zero waste  web app"
            />
          </div>
          <div className="card_title title-black">
            <p className="card-text">Zero Waste</p>
          </div>
        </div>
      </Link>
      </div>

      <div className="gridlinks">
      <Link href="#ben-poetry">
        <a
        className="gridlinks"
          onClick={() => {
            document.querySelector("#ben-poetry").scrollIntoView({
              behavior: "smooth",
              duration: 3000,
            });
          }}
        >
          {" "}
        </a>
        <div className="card 3">
          <div className="card_image">
            <img src="https://media.giphy.com/media/uE3HvGWGb2DfGaRXud/giphy.gif" />
          </div>
          <div className="card_title title-white">
            <p className="card-text">Ben Schroder Poetry</p>
          </div>
        </div>
      </Link>
      </div>

      <div className="gridlinks">
      <Link href="#second-life">
        <a
          onClick={() => {
            document.querySelector("#second-life").scrollIntoView({
              behavior: "smooth",
              duration: 3000,
            });
          }}
        >
          {" "}
        </a>
        <div className="card 5">
          <div className="card_image">
            <img src="https://media.giphy.com/media/fTa7ddWK86iWs/giphy.gif" />
          </div>
          <div className="card_title title-white">
            <p className="card-text">Feature Extension: SecondLife</p>
          </div>
        </div>
      </Link>
      </div>

      <div className="gridlinks">
      <Link href="#paypulp">
        <a
          onClick={() => {
            document.querySelector("#second-life").scrollIntoView({
              behavior: "smooth",
              duration: 3000,
            });
          }}
        >
          {" "}
        </a>
        <div className="card 5">
          <div className="card_image">
            <img src="https://media.giphy.com/media/12pJ8OxSWwO86Y/giphy.gif" />
          </div>
          <div className="card_title title-black">
            <p className="card-text">Feature Extension: PayPulp</p>
          </div>
        </div>
      </Link>
      </div>
    </div>
    </>
  );
};



export default GridProjects;
