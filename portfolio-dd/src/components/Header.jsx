import React from "react";
import { HashLink as Link } from 'react-router-hash-link';


export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg  fixed-top ">
        <div className="container-fluid mt-3">
          <a className="navbar-brand" href="#">
            <img className="logo-nav"
              src="BLogo.png"
              alt="Bootstrap"
              width={170}
              height={165}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="nav-cont collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" id="nav-home">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">
                  ABOUT
                </a> */}
                <Link to='#about' id="link">
                  <span className="nav-link active" aria-current="page">
                    ABOUT
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">
                  SERVIECS
                </a> */}
                <Link to='#services' id="link">
                  <span className="nav-link active" aria-current="page">
                    SERVICES
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">
                  CONTACT
                </a> */}
                <Link to='#Fotter' id="link">
                  <span className="nav-link active" aria-current="page">
                    CONTACT
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <img src="nav-background.png" alt="nav" className="nav-bac"/>
      </nav>
    </header>
  );
};
