import React, { useState } from 'react'
import Lottie from 'lottie-react'
import DeveloperAnimation from '../../assets/DeveloperAnimation.json'
import JavaDeveloper from '../../assets/JavaDeveloper.json'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import './Home.css'

export default function Home(props) {

  //For Auto Type
  const [text]=useTypewriter({
    words: ["Java Developer","Backend Developer",'FullStack Developer','Software Developer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  });


  const [animationStyle,setAnimationStyle]=useState({
    height: '80vh',
    marginTop: '-10%'
  });
  const [containStyle,setContainStyle]=useState({
    marginLeft: '20%',
    marginTop: '10%'
  });
  

  return (
    <div className='container-fluid'>
      <div className="row justify-content-center">
        <div className="col-md-5 m-3">
          <div className='contentStyle'>
            <h1 className='titleH1'><span style={{color: '#58D68D',fontSize:'48px'}}>Hello,</span><br/>I am Jhantu Bala</h1>
            <h2 className='autoH2'>I'm a <span className='autoText'>{text}</span><Cursor/></h2>
            <p style={{fontSize: '20px',fontStyle: 'italic',marginTop:'5%'}}>Welcome to my Java Developer portfolio! With a passion for crafting scalable and efficient solutions, I specialize in Java development, leveraging expertise in Spring and Hibernate frameworks.</p>
            <button className='btn btn-success' src=''>Download CV   <i class="fa-solid fa-download"></i></button>
          </div>
        </div>
        <div className="col-md-5 m-3">
            <Lottie animationData={DeveloperAnimation} style={animationStyle} />
            {/* <Lottie animationData={JavaDeveloper} style={animationStyle} /> */}
        </div>
      </div>
        
    </div>
  )
}
