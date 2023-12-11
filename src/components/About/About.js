import React, { useState } from 'react'
import Lottie from 'lottie-react'
import AboutAnimation from '../../assets/About.json'
import './About.css'
import ProfileImage from '../../assets/ProfilePic.png'

export default function About(props) {

  const [animationStyle,setAnimationStyle]=useState({
    height: '80vh',
    marginTop: '-10%'
  });

  const person={
    name: 'Pritam Bala',
    id: '@jhantu626',
    role: 'Java Backend Developer',
    paragraph: 'I am Jhantu Bala, a dedicated Java developer with a year of hands-on experience in the field. Throughout my professional journey, I have honed my skills in Java programming and gained a solid understanding of key technologies and frameworks.',
    date: 'March 19 2003'
  }
  
  const themeMode=props.mode=='dark'?'bg-dark text-light':'';


  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-md-5 m-3'>
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
          <div className={"card .mainCard "+themeMode+" p-4"}> 
            <div className="image d-flex flex-column justify-content-center align-items-center"> 
              <button className="btn btmCustom btn-secondary"> 
              <img src={ProfileImage} height="100" width="80" /></button> 
              <span className="name mt-3">{person.name}</span> <span className="idd">{person.id}</span> 
              <div className="d-flex flex-row justify-content-center align-items-center gap-2"> 
                <span className="idd1">{person.role}</span>
              </div> 
            
              <div className="text mt-3"> 
                <span>{person.paragraph}</span> 
              </div> 
              <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                 <span><a className="facebook" href="https://github.com/jhantu626" target='_blank'><i className="fa-brands fa-github"></i></a></span> 
                 <span><a className="twitter" href="https://www.linkedin.com/in/jhantu-bala/" target='_blank'><i className="fa fa-linkedin"></i></a></span>
                 <span><a><i className="fa fa-facebook"></i></a></span> 
                 <span><a><i className="fa fa-twitter"></i></a></span>
               </div> 
               <div className=" px-2 rounded mt-4 date ">
                 <span className="join">{person.date}</span>
               </div> 
            </div>
         </div>
        </div>
        </div>

        <div className='col-md-5 m-3'>
          <Lottie animationData={AboutAnimation} style={animationStyle}/>
        </div>


      </div>
     </div>
  )
}
