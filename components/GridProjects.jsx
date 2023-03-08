import Image from "next/image";
import zwhero from "../public/zwhero.png";
import newbenhero from "../public/newbenhero.png";
import Link from "next/link";
import styles from "../styles/projectgrid.module.css";

const GridProjects = () => {
  return (
    <div className="cards-list">
      <Link href="#zero-waste"
       ><a onClick={() => {
        document.querySelector('#zero-waste').scrollIntoView({
          behavior: 'smooth',
          duration: 2000
        });
      }}> </a>
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

      <Link href="#ben-poetry">
      <a onClick={() => {
        document.querySelector('#ben-poetry').scrollIntoView({
          behavior: 'smooth',
          duration: 3000
        });
      }}> </a>
        <div className="card 3">
          <div className="card_image">
            <img src="https://media.giphy.com/media/uE3HvGWGb2DfGaRXud/giphy.gif" />
          </div>
          <div className="card_title title-white">
            <p className="card-text">Ben Schroder Poetry</p>
          </div>
        </div>
      </Link>

      <div className="card 4">
        <div className="card_image">
          <img src="https://media.giphy.com/media/KzeZ3OXHoSDVZH9cmy/giphy.gif" />
        </div>
        <div className="card_title title-black">
          <p className="card-text">Coming Soon: Freelance Code</p>
        </div>
      </div>

      <div className="card 5">
        <div className="card_image">
          <img src="https://media.giphy.com/media/fTa7ddWK86iWs/giphy.gif" />
        </div>
        <div className="card_title title-white">
          <p className="card-text">Feature Extension: Freecycle</p>
        </div>
      </div>
    </div>
  );
};

export default GridProjects;
