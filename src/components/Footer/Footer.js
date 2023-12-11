import React, { useState } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer(props) {
  const [darkTheme,setDarkTheme]=useState(null);

  const themeStyle=()=>{
      if(props.mode=='light'){
        setDarkTheme({
          backgroundColor: 'rgb(184, 182, 182)',
          color: '#737373'
        });
      }else{
        setDarkTheme({
          backgroundColor: '#26272b',
          color: '#737373'
        });
      }
  }


  return (
    <div style={{marginTop: "0%"}}>
      <hr />
        <footer className="site-footer" style={{themeStyle}}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">I'm Jhantu Bala, a dedicated Java developer with a year of hands-on experience in the field. Throughout my professional journey, I have honed my skills in Java programming and gained a solid understanding of key technologies and frameworks. My passion for creating efficient and scalable solutions drives me to stay abreast of the latest developments in the Java ecosystem. I thrive in collaborative environments, having actively contributed to cross-functional teams to deliver high-quality software solutions.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Projects</h6>
            <ul className="footer-links">
              <li><a href="/" target='_blank'>Blog App Api's(Spring Boot)</a></li>
              <li><a href="/" target='_blank'>Quiz App Api's(Contact Manage)</a></li>
              <li><a href="/" target='_blank'>Book Selling Ecommerce App</a></li>
              <li><a href="/" target='_blank'>University Portal</a></li>
              
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/education">Education</Link></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
         <Link to="/">Pritam.com</Link>
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="https://github.com/jhantu626" target='_blank'><i className="fa-brands fa-github"></i></a></li>
              <li><a className="twitter" href="https://www.linkedin.com/in/jhantu-bala/" target='_blank'><i className="fa fa-linkedin"></i></a></li>
              <li><a className="dribbble" href="#" target='_blank'><i className="fa-brands fa-discord"></i></a></li>
              <li><a className="linkedin" href="#"><i className=""><i className="fa-brands fa-facebook"></i></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </div>
  )
}