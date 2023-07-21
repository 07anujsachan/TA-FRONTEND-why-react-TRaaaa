function Header() {
  return (
    <>
      <header className="navbar">
        <div className="container flex">
          <div className="flex">
            <a className="brand" href="#">
              <strong>Hydro</strong>
            </a>
            <nav>
              <ul className="flex nav-menu nav-menu-primary">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Our Work</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </nav>
          </div>
          <nav>
            <ul className="flex nav-menu nav-menu-secondary">
              <li className="social-media-item">
                <a href="#">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li className="social-media-item">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-media-item">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a className="btn btn-primary" href="#">
                  {" "}
                  Sign in / Join{" "}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="container flex">
          <div className="flex-48 hero-content">
            <h1 className="hero-heading">
              We make beautiful websites for all people
            </h1>
            <div className="flex justify-start">
              <a className="btn btn-secondary" href="#">
                Start a project
              </a>
              <p className="enquiry">
                CALL US (+66) 010-020-0340 <br />
                for any enquiry
              </p>
            </div>
          </div>
          <figure className="flex-48">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/AqcjdkPMPJA"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </figure>
        </div>
      </section>
    </>
  );
}

export default Header;
