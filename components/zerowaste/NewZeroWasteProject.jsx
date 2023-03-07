import Header from "../Header";
import zwhero from "../../public/zwhero.png";
import Image from "next/image";
import { useState } from "react";

const datas = {
  "Zero Waste":
    "A web application to reduce food waste and promote community. You can post foods you have to give away or foods you need. You can contact people based on your location to start sharing!",
  Collaborators:
    "Shauni Vanderhorst added mobile calling functionality so that you can click the phone number to start a call.",
  "Tech Stack":
    "This web app was made using Next.JS, Tailwind and CSS, Express.JS, and MySQL",
  Explore:
    "Check out the project here: or visit the project on github: github.com/goldet/zero-waste.",
};

const NewZeroWasteProject = () => {
  const [selectedItem, setSelectedItem] = useState("Zero Waste");


  const getClassNames = (index) => {
    const baseClass = `content content_${index}`;
    return selectedItem === index ? `${baseClass} active` : baseClass;
  };



  return (
    <>
   
   <Header />
    
   <div id="scene">
      <div id="left-zone">
        <ul className="list">
          {Object.entries(datas).map(([index, val]) => (
            <li key={index} className="item">
              <input
                type="radio"
                id={`radio_${index}`}
                name="basic_carousel"
                value={index}
                checked={selectedItem === index}
                onChange={() => setSelectedItem(index)}
              />
              <label htmlFor={`radio_${index}`} className={`label_${index}`}>
                {index}
              </label>
              <div className={getClassNames(index)}>
                <span className="picto"></span>
                <h1>{index}</h1>
                <p>{val}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div id="middle-border"></div>
      <div id="right-zone"></div>
    </div>
    </>
  );
};

export default NewZeroWasteProject;
