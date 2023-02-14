const Header = () => {

  return (
    <>
      <div className="header">
        <div className="fullName">
          <h1 className="firstName">Golde</h1>
          <h1 className="lastName">Tischler</h1>
        </div>
        <div className="btn">
          <button
            type="button"
            class="nes-btn is-normal"
            color="primary"
            background-color="none"
          >
            About Me
          </button>
          <button
            type="button"
            class="nes-btn is-primary"
            color="primary"
            background-color="none"
          >
            Projects
          </button>
          <button
            type="button"
            class="nes-btn is-success"
            color="primary"
            background-color="none"
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
