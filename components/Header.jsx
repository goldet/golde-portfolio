import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import useScrambleText from "@/hooks/useScrambleText";
import HamburgerMenu from "./HamburgerMenu";
import DesktopMenu from "./DesktopMenu";


const Header = () => {
  const { textBoxRef } = useScrambleText("Golde Tischler");

  return (
    <>
      <div className="header">
        <div className="fullName animate glow delay-1">
         <h1 className="text_box firstName" ref={textBoxRef}>Golde Tischler</h1>
        </div>
      <HamburgerMenu />
      <DesktopMenu />
      </div>
    </>
  );
};

export default Header;
