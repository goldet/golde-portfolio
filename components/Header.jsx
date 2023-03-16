import Link from "next/link";

const Header = () => {

  return (
    <>
      <div className="header">
        <div className="fullName animate glow delay-1">
          <h1 className="firstName">Golde</h1>
          <h1 className="lastName">Tischler</h1>
        </div>
        <div className="btn">
        <Link href="#projects"> 
          <button
            type="button"
            className="navButtons nes-btn is-normal animate glow delay-1"
            color="primary"
            background-color="none"
          >
             Work 
          </button>
          </Link>

          <Link href="#about"> 
          <button
            type="button"
            className="nes-btn is-primary animate glow delay-2"
            color="primary"
            background-color="none"
            onClick={() => {
              document.querySelector('#zero-waste').scrollIntoView({
                behavior: 'smooth',
                duration: 2000
              });
            }}
          >
           About Me
          </button>
          </Link>


          <Link href="#contact"> 
          <button
            type="button"
            className="nes-btn is-success animate glow delay-3"
            color="primary"
            background-color="none"
          >
            Contact
          </button>
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default Header;
