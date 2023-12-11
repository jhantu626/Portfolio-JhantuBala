import React from 'react'

export default function Skill(props) {

    const skillRowSize=props.displayWidth<=765?{maxWidth: '20rem',marginLeft:'auto'}:{};
    const skillRowCol=(props.displayWidth<=765?'row-cols-1':'row-cols-4') || (props.displayWidth<=400?'row-cols-1':'row-cols-3');

    

  return (
    <div className="accordion mt-5" id="accordionExample">
        <h2 className='headerTitle'>-Skills</h2>
        <div className={"accordion-item "+props.skillMode+""}>
            <h2 className="accordion-header" id="headingOne">
                <button className={"accordion-button "+props.skillMode+" headerTextEducation"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                    Programing Languages
                </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Languages</strong> <br />
                    <div className={"row "+skillRowCol+""}>
                        <button style={skillRowSize} className={'col btn btn-warning offset-md-2 mt-2'}>JAVA</button>
                        <button style={skillRowSize} className={'col btn btn-warning offset-md-2 mt-2'}>C</button>
                        <button style={skillRowSize} className={'col btn btn-warning offset-md-2 mt-2 text-left'}>JAVASCRIPT</button>
                        <button style={skillRowSize} className={'col btn btn-warning offset-md-2 mt-2'}>PYTHON</button>
                        <button style={skillRowSize} className={'col btn btn-warning offset-md-2 mt-2'}>PHP</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={"accordion-item "+props.skillMode+""}>
            <h2 className="accordion-header" id="headingTwo">
                <button className={"accordion-button "+props.skillMode+" collapsed headerTextEducation"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseTwo">
                    Backend Development
                </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                <strong>Backend Tech's</strong> <br />
                    <div className={"row "+skillRowCol+""}>
                        <button style={skillRowSize} className={'col btn btn-info offset-md-2 mt-2'}>JDBC</button>
                        <button style={skillRowSize} className={'col btn btn-info offset-md-2 mt-2'}>HIBERNATE</button>
                        <button style={skillRowSize} className={'col btn btn-info offset-md-2 mt-2'}>SPRING CORE</button>
                        <button style={skillRowSize} className={'col btn btn-info offset-md-2 mt-2'}>SPRING SECURITY</button>
                        <button style={skillRowSize} className={'col btn btn-info offset-md-2 mt-2'}>DATA JPA</button>
                        <button style={skillRowSize} className={'col btn btn-info offset-md-2 mt-2'}>SPRING BOOT</button>
                        <button style={skillRowSize} className={'col btn btn-info offset-md-2 mt-2'}>SERVLET</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={"accordion-item "+props.skillMode+""}>
            <h2 className="accordion-header" id="headingThree">
                <button className={"accordion-button "+props.skillMode+" collapsed headerTextEducation"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                    Frontend Development
                </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Frontend Tech's</strong> <br />
                        <div className={"row "+skillRowCol+""}>
                            <button style={skillRowSize} className={'col btn btn-success offset-md-2 mt-2'}>HTML</button>
                            <button style={skillRowSize} className={'col btn btn-success offset-md-2 mt-2'}>CSS</button>
                            <button style={skillRowSize} className={'col btn btn-success offset-md-2 mt-2'}>JAVASCRIPT</button>
                            <button style={skillRowSize} className={'col btn btn-success offset-md-2 mt-2'}>REACT JS</button>
                            <button style={skillRowSize} className={'col btn btn-success offset-md-2 mt-2'}>ANGULAR</button>
                            <button style={skillRowSize} className={'col btn btn-success offset-md-2 mt-2'}>THYMLEAF</button>
                            <button style={skillRowSize} className={'col btn btn-success offset-md-2 mt-2'}>JSP</button>
                        </div>
                </div>
            </div>
        </div>
        <div className={"accordion-item "+props.skillMode+""}>
            <h2 className="accordion-header" id="headingThree">
                <button className={"accordion-button "+props.skillMode+" collapsed headerTextEducation"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
                    Databases
                </button>
            </h2>
            <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Databases</strong> <br />
                        <div className={"row "+skillRowCol+""}>
                            <button style={skillRowSize} className={'col btn btn-danger offset-md-2 mt-2'}>SQL</button>
                            <button style={skillRowSize} className={'col btn btn-danger offset-md-2 mt-2'}>PL/SQL</button>
                            <button style={skillRowSize} className={'col btn btn-danger offset-md-2 mt-2'}>POSTGRESQL</button>
                        </div>
                </div>
            </div>
        </div>

        <div className={"accordion-item "+props.skillMode+""}>
            <h2 className="accordion-header" id="headingThree">
                <button className={"accordion-button "+props.skillMode+" collapsed headerTextEducation"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseThree">
                    IDE'S
                </button>
            </h2>
            <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Ide's</strong> <br />
                        <div className={"row "+skillRowCol+""}>
                            <button style={skillRowSize} className={'col btn btn-secondary offset-md-2 mt-2'}>IntelliJ IDEA</button>
                            <button style={skillRowSize} className={'col btn btn-secondary offset-md-2 mt-2'}>Eclipse/SQL</button>
                            <button style={skillRowSize} className={'col btn btn-secondary offset-md-2 mt-2'}>Visual Studio</button>
                            <button style={skillRowSize} className={'col btn btn-secondary offset-md-2 mt-2'}>Netbeans</button>
                            <button style={skillRowSize} className={'col btn btn-secondary offset-md-2 mt-2'}>Android Studio</button>
                            <button style={skillRowSize} className={'col btn btn-secondary offset-md-2 mt-2'}>Sublim Text</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}
