import React from "react";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
        <div className="container-fluid mt-3">
          <a className="navbar-brand" href="#">
            <img className="logo-nav"
              src="logo.png"
              alt="Bootstrap"
              width={170}
              height={165}
            />
          </a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button> */}
          <div className="nav-cont collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" id="nav-home">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  SERVIECS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img src="nav-background.png" alt="nav" className="nav-bac"/>
      </nav>
    </header>
  );
};
