import React, { useState } from 'react'
import Lottie from 'lottie-react'
import EduationAnimation from '../../assets/Education.json'
import './Education.css'
import Skill from './Skill'

export default function Education(props) {

    const eduMode=props.mode=='light'?'':'bg-dark text-light';

    const [animationStyle,setAnimationStyle]=useState({
        height: '80vh',
        marginTop: '-10%'
      });



  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-md-5 m-3'>
          <Lottie animationData={EduationAnimation} style={animationStyle}/>
        </div>

        <div className='col-md-5 m-3'>
            {/* Education */}
            <div className="accordion mt-5" id="accordionExample">
                <h2 className='headerTitle'>-Education</h2>
                <div className={'accordion-item '+eduMode+''}>
                    <h2 className="accordion-header" id="headingOne">
                    <button className={"accordion-button headerTextEducation "+eduMode+""} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Bachelor's in Technology
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p><span>Course:</span>&nbsp;&nbsp;&nbsp;BACHELOR'S OF TECHNOLOGY IN COMPUTER SCIENCE AND ENGINEERING</p>
                        <p><span>University:</span>&nbsp;&nbsp;&nbsp;Maulana abul kalam azad university of technology.</p>
                        <p><span>CGPA:</span>&nbsp;&nbsp;&nbsp;8.5CGPA</p>
                    </div>
                    </div>
                </div>
                <div className={"accordion-item "+eduMode+""}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button className={"accordion-button "+eduMode+" collapsed headerTextEducation"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Higher Secendary(12th)
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <p><span>Stream:</span>&nbsp;&nbsp;&nbsp;Science</p>
                    <p><span>Board:</span>&nbsp;&nbsp;&nbsp;WEST BENGAL BOARD OF HIGHER SECONDERY EDCATION(WBCHSE)</p>
                    <p><span>Percentage:</span>&nbsp;&nbsp;&nbsp;79%</p>

                    </div>
                    </div>
                </div>
                <div className={"accordion-item "+eduMode+""}>
                    <h2 className="accordion-header" id="headingThree">
                    <button className={"accordion-button "+eduMode+" collapsed headerTextEducation"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Secondary(10th)
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <p><span>Course:</span>&nbsp;&nbsp;&nbsp;Secondary(10th)</p>
                    <p><span>Board:</span>&nbsp;&nbsp;&nbsp;WEST BENGAL BOARD OF SECONDARY EXAMINATION(WBBSE).</p>
                    <p><span>Percentage:</span>&nbsp;&nbsp;&nbsp;75%</p>
                    </div>
                    </div>
                </div>
            </div>


            {/* Skill */}
            <Skill skillMode={eduMode} displayWidth={props.displaySize.width}/>




        </div>
      </div>
     </div>

        
  )
}
