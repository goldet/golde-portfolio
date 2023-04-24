import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import useScrambleText from "@/hooks/useScrambleText";

const Header = () => {
  const { textBoxRef } = useScrambleText("Golde Tischler");

  return (
    <>
      <div className="header">
        <div className="fullName animate glow delay-1">
         <h1 className="text_box firstName" ref={textBoxRef}>Golde Tischler</h1>
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
