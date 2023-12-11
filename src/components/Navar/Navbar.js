import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Lottie from 'lottie-react'
import Logo from '../../assets/logo.json'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar(props) {

  let mode= props.mode;
  const [logoStyle,setLogoStyle]=useState({
    fontWeight: 'bold',
    fontSize: '29px',
    color: '#58D68D'
  });

  const navLeft=props.displaySize.width<=370?'ms-0':'ms-5';

  return (
    <nav className={"navbar navbar-expand-lg navbar-"+mode+" bg-"+mode+""}>
  <div className={"container-fluid "+navLeft+""}>
  <Lottie style={{width: '50px', height: '50px'}} animationData={Logo}/>
    <Link className={"navbar-brand logo-app "} to="/" style={logoStyle}>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className={"navbar-toggler-icon "}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/education">{props.education}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/projects">{props.projects}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/about'>{props.about}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to='/contact'>{props.contactus}</Link>
        </li>
      </ul>
      {/* <div className="form-check form-switch me-5">
        <input className="form-check-input btn btn-primary" onClick={props.modeChange} type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled"/>
        <label style={{color: '#58D68D'}} className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode=='light'?<i className="fa-solid fa-moon fa-2xl"></i>:<i className="fa-regular fa-sun fa-2xl"></i>}</label>
      </div> */}
      <div className="form-check form-switch ">
        <div className="container d-flex" style={{marginLeft: '-45px'}}>
          <div className="one-quarter" id="switch">
              <input type="checkbox" className="checkbox" id="chk" />
              <label className={"label"}  onClick={props.modeChange} htmlFor="chk">
                  <i className="fas fa-sun"></i>
                  <i className="fas fa-moon"></i>
                  <div className="ball"></div>
              </label>
            </div>
          </div>
        </div>



    </div>
  </div>
</nav>
  )
}

Navbar.defaultProps={
    title: "MainTitle",
    product: "Product Page",
    contactus: "Contact",
    about: "About",
    education: "Education",
    projects: "Projects"

}