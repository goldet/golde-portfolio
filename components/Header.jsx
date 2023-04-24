import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";

const Header = () => {
  const textBoxRef = useRef(null);
  const specialCharacters = [
    "!",
    "§",
    "$",
    "%",
    "&",
    "/",
    "(",
    ")",
    "=",
    "?",
    "_",
    "<",
    ">",
    "^",
    "°",
    "*",
    "#",
    "-",
    ":",
    ";",
    "~",
  ];
  const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  let newStringSplit = "";
  const time = 110;
  let count = 0,
    j = 0;
  const delayAnimation = 2;

  const [triggerScramble, setTriggerScramble] = useState(false);

  useEffect(() => {
    const startScrambleText = () => {
      if (!textBoxRef.current) return;
      const stringSplit = textBoxRef.current.textContent.split("");
      textBoxRef.current.style.width = `${stringSplit.length}ch`;
      textBoxRef.current.style.animation = `typing ${
        (time * stringSplit.length) / 1000
      }s steps(${stringSplit.length})`;

      const interval = setInterval(() => {
        newStringSplit = "";

        for (let i = 0; i <= stringSplit.length - 1; i++) {
          if (i <= j && count >= stringSplit.length + delayAnimation) {
            newStringSplit += stringSplit[i];
          } else {
            newStringSplit +=
              specialCharacters[random(0, specialCharacters.length - 1)];
          }
        }
        if (!textBoxRef.current.textContent) return;
        textBoxRef.current.textContent = newStringSplit;
        count++;

        if (count >= stringSplit.length + delayAnimation) {
          j++;
          if (j >= stringSplit.length) {
            clearInterval(interval);
          }
        }
      }, time);
      return () => clearInterval(interval);
    };

    if (triggerScramble) {
      startScrambleText();
    }
  }, [triggerScramble]);

  useEffect(() => {
    setTriggerScramble(true);
  }, []);

  return (
    <>
      <div className="header">
        <div className="fullName animate glow delay-1">
          {/* <div className="text_box" ref={textBoxRef}>
            <h1 className="firstName">Golde</h1>
            <h1  className="lastName">Tischler</h1>
          </div> */}
         <h1 className="text_box firstName" ref={textBoxRef}>Golde Tischler</h1>
          
         {/* <h1 className="lastName">Tischler</h1>  */}
        </div>

        <div className="animate glow delay-1">
          <Link href="#projects">
            <button type="button" className="btn btn1 scrambled-text">
              Work
            </button>
          </Link>

          <Link href="#about">
            <button
              type="button"
              className="btn btn2"
              onClick={() => {
                document.querySelector("#zero-waste").scrollIntoView({
                  behavior: "smooth",
                  duration: 2000,
                });
              }}
            >
              About
            </button>
          </Link>

          <Link href="#contact">
            <button type="button" className="btn btn3">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
