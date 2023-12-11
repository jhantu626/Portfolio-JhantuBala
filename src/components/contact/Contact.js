import Lottie from 'lottie-react'
import React, { useState } from 'react'
import ContactAnimation from '../../assets/contact2.json'

export default function Contact(props) {

  const [animationStyle,setAnimationStyle]=useState({
    height: '80vh',
    marginTop: '-10%'
  });

  const formBack=props.mode=='light'?'bg-light':'';

  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-md-5 m-3'>
          <Lottie animationData={ContactAnimation} style={animationStyle}/>
        </div>

        <div className='col-md-5 m-3'>
          <form className={'container col-md-8 text-center mt-5 '+formBack+''}>
              <div className="mb-3 col-md-12">
                <input type="text" className="form-control mt-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Name'/>
                <input type="email" className="form-control mt-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email'/>
                <input type="text" className="form-control mt-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Query Title'/>
                <textarea type="text" rows='5' className="form-control mt-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Description'/>
              </div>
              <button type="submit" className="btn btn-lg btn-warning col-md-10">Submit</button>
            </form>
        </div>
      </div>
     </div>
  )
}
