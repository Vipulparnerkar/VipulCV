import React from "react"

import "./header.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faVine} from '@fortawesome/free-brands-svg-icons'




const Header = () =>{
    return(
        <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><FontAwesomeIcon icon={faVine} size="2x" spin pull="right"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://drive.google.com/file/d/1uMSvxRR09zgMeBB1lnhNZ_joQTQcXEC3/view?usp=sharing">Download CV</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

        </div>
    )
}
export default Header;