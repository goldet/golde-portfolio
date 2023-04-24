import Link from "next/link";

const DesktopMenu = () => {
    return (  
    <div className="animate glow delay-1 desktop-menu">
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
 );
}
 
export default DesktopMenu;