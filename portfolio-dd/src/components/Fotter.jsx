import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export const Fotter = () => {
  return (
    <footer>
      <div className='foot' id='Fotter'>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        <p id='foot-p'>GET IN TOUCH</p>
        <div className="fot-link-icon">
          <a href="https://x.com/Jashanp71354271"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="https://www.instagram.com/_jp5ingh/"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/jashanpreet-singh-36502b2a0/"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://www.deviantart.com/chapmo64"><i class="fa-brands fa-deviantart"></i></a>
          <a href="https://github.com/Chapmo64"><i class="fa-brands fa-github"></i></a>
        </div>
        <br /><br /><br /><br /><br /><br />
        <div className='fot-link d-flex'>
            <ul className='fot-link-list'>
            <li className="nav-item">
                <Link to="/#" id="link">
                <span className="nav-link active" aria-current="page" href="#" id="nav-home">
                  HOME
                </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/#about' id="link">
                  <span className="nav-link active" aria-current="page">
                    ABOUT
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/#services' id="link">
                  <span className="nav-link active" aria-current="page">
                    SERVICES
                  </span>
                </Link>
              </li>
              <li className="nav-item" >
                <Link to='/Portfolio#Pstart' id="link">
                <span className="nav-link active" aria-current="page" href="#">
                  PORTFOLIO
                </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='#Fotter' id="link">
                  <span className="nav-link active" aria-current="page">
                    CONTACT
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          <p id='foot-p-2'>Jashanpreet Singh| All Rights Reserved</p>
      </div>
    </footer>
  )
}
