import Link from "next/link";

const Header = () => {

  return (
    <>
      <div className="header">
        <div className="fullName">
          <h1 className="firstName">Golde</h1>
          <h1 className="lastName">Tischler</h1>
        </div>
        <div className="btn">
        <Link href="/"> 
          <button
            type="button"
            className="navButtons nes-btn is-normal"
            color="primary"
            background-color="none"
          >
            Home 
          </button>
          </Link>

          <Link href="/about"> 
          <button
            type="button"
            className="nes-btn is-primary"
            color="primary"
            background-color="none"
          >
           About Me
          </button>
          </Link>

          <Link href="/contact"> 
          <button
            type="button"
            className="nes-btn is-success"
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
