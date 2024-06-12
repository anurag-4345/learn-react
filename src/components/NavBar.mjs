import { useState } from "react";

export {NavBar};

function NavBar (params) {
  const [style, setStyle] = useState("light");
  const [textColour, setTextColour] = useState("Dark");
  const ChangeState = ()=>{
    style == "light" ? setStyle("dark") : setStyle("light")
    style == "light" ? setTextColour("light") : setTextColour("dark")
  }
    return(
        <>
          <nav className={`navbar navbar-expand-lg bg-${style}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${textColour}`} href="#">
            {params.TitleName}
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link active text-${textColour}`} aria-current="page" href="#">
                  {params.HomeAtt}
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link active text-${textColour}`} aria-current="page" href="#">
                  About
                </a>
              </li>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
              </ul>
            </ul>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={ChangeState}/>
            <label className={`form-check-label text-${textColour}`} htmlFor="flexSwitchCheckDefault">{style}</label>
              </div> 
          </div>
        </div>
      </nav>
        </>
    )
}