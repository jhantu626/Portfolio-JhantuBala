import React, { useState } from 'react'
import Lottie from 'lottie-react'
import Work from '../../assets/Work.json'

export default function Project(props) {

    const [animationStyle,setAnimationStyle]=useState({
        height: '80vh',
        marginTop: '-10%'
      });
      const displayNone=props.displaySize.width<=665?'d-none':'';
      const projectMs=props.displaySize.width<=665?'ms-0':'ms-3';
      

  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
      <div className={'col-md-5 m-3 '+displayNone+''} >
          <Lottie animationData={Work} style={animationStyle}/>
        </div>

        <div className='col-md-5 m-3'>

            <div className='row row-cols-1 justify-content-center'>
                <div class={"card text-dark bg-info mb-3 "+projectMs+" col-md-10"} >
                    <div style={{fontSize: '20px',fontWeight: 'bold'}} class="card-header">Blog App Api's</div>
                    <div class="card-body">
                        <h5 class="card-title">Spring Boot</h5>
                        <p class="card-text">-It is a Web Api based backend Application with security configuration and api documents usering Spring security&Swagger.</p>
                    </div>
                    <div className="car-footer text-center">
                        <a className='btn btn-light col-md-12' href='https://github.com/jhantu626/blog-app-apis' target='_blank'>Project Link</a>
                    </div><br />
                </div>

                <div class={"card text-dark bg-warning mb-3 "+projectMs+" col-md-10"} >
                    <div style={{fontSize: '20px',fontWeight: 'bold'}} class="card-header">E-commerce Book Selling WebApp</div>
                    <div class="card-body">
                        <h5 class="card-title">Jsp-Servlet</h5>
                        <p class="card-text">-It is an e-commerce web application which i made using java j2ee technologies like: jsp-servlet is the main technology. i used database for this peoject was mysql.</p>
                    </div>
                    <div className="car-footer text-center">
                        <a className='btn btn-light col-md-12' href='https://github.com/jhantu626/bookApplication' target='_blank'>Project Link</a>
                    </div><br />
                </div>

                <div class={"card text-light bg-danger mb-3 "+projectMs+" col-md-10"} >
                    <div style={{fontSize: '20px',fontWeight: 'bold'}} class="card-header">Quiz App Api's</div>
                    <div class="card-body">
                        <h5 class="card-title">Spring Boot</h5>
                        <p class="card-text">-It is a Web Api based backend Application with security configuration and api documents usering Spring security&Swagger.</p>
                    </div>
                    <div className="car-footer text-center">
                        <a className='btn btn-light col-md-12' href='https://github.com/jhantu626/QuizApp_SpringBoot' target='_blank'>Project Link</a>
                    </div><br />
                </div>

                <div class={"card text-dark bg-light mb-3 "+projectMs+" col-md-10"} >
                    <div style={{fontSize: '20px',fontWeight: 'bold'}} class="card-header">University Website&Portal</div>
                    <div class="card-body">
                        <h5 class="card-title">PHP</h5>
                        <p class="card-text">-It is a University website/portal with backend.it has made using Php. when i was in first semester in my college. can say it is my first fullstack project.</p>
                    </div>
                    <div className="car-footer text-center">
                        <a className='btn btn-light col-md-12' href='https://github.com/jhantu626/ouruniverse.edu.github.io/' target='_blank'>Project Link</a>
                    </div><br />
                </div>

                <div class={"card text-light bg-dark mb-3 "+projectMs+" col-md-10"} >
                    <div style={{fontSize: '20px',fontWeight: 'bold'}} class="card-header">Travel Booking App(Frontend)</div>
                    <div class="card-body">
                        <h5 class="card-title">HTML-CSS-JS</h5>
                        <p class="card-text">-It is a Travel Booking app it only has frontend.</p>
                    </div>
                    <div className="car-footer text-center">
                        <a className='btn btn-light col-md-12' href='' target='_blank'>Project Link</a>
                    </div><br />
                </div>
                
            </div>
            


    



        </div>
      </div>
     </div>
  )
}
