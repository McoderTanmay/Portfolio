import "./Nav.css";

const Nav = (onScroll) => {
  return (
    <>
        <nav className={`navbar bg-dark fixed-top nav-class ${onScroll.scroll ? 'scroll-down navbar-light':'nav-class navbar-dark'}`}>
        <div className="container-fluid">
          <a className={`navbar-brand ${onScroll.scroll ?'nav-font':''}`} href="#">
            Tanmay
          </a>
          <button
            className="navbar-toggler nav-btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header side-nav">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Nav
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body side-nav">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="https://docs.google.com/document/d/1kDEq2SEA6h-xyVuVVN2VFIdSGBpgxQugixq-BxekAFI/edit?usp=sharing">
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="https://leetcode.com/tanmaysontakke99/">
                    Leetcode Profile
                  </a>
                </li>
                <li className="nav-item pt-1">
                  <button className="btn btn-primary hire-me">Hire me</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
