import React from 'react'

export const Fotter = () => {
  return (
    <footer>
      <div className='foot'>
        <p>GET IN TOUCH</p>
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
        <img src="Fotter.png" alt="foot" />
      </div>
    </footer>
  )
}
