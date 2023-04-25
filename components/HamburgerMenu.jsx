import Link from "next/link";
import styles from "../styles/hamburgermenu.module.css";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu */}
      <div className={`mobile-menu ${isOpen ? "open" : "closed"}`}>
        <button type="button" className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
        <ul>
          <li>
            <Link href="#projects" onClick={toggleMenu}>
              Work
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenu;
