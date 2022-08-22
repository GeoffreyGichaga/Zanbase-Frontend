import React,{useRef} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import purplelogo from '../Assets/purple-logo.png'
import '../Styling/onboarding.css'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import onboardingImg from '../Assets/onboardimg1.png'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import team from '../Assets/team.png'
import teampic from '../Assets/teampic.png'
import { useInView} from 'framer-motion'

import files from '../Assets/files.png'
import whitelogo from '../Assets/white-logo.png'


const Onboarding = () => {
    const navigate = useNavigate() 

    const Animations = ({children}) => {
        const ref = useRef(null)
        const isInView = useInView(ref, { all: true})
      return (
          <animate ref={ref}>
              <span 
                    style={{
                        transform: isInView ? "none" : "translateX(-500px)",
                        opacity: isInView ? 1: 0,
                        transition: "all 0.3s cubic-bezier(0.17,0.55,0.55,1) 0.5s"
                    }}
                >
                    {children}
              
            
              </span>
    
          </animate>
    
        
      )
    }

  return (
    <>
     
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">
                    <img className='logo' src={purplelogo} alt='Logo'/>
                </Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link className='navlinks' onClick={()=>navigate('/login')}>Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='navlinks' onClick={()=>navigate('/signup')}>Signup</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>

        <Container className='mt-5'>
            <Row className='mt-5'>
                <Col sm={12} md={6} lg={6} className='onboarding-statement2 mt-5'>
                    <h2 className='onboard-title text-start'>Get ready to work</h2>
                    <li className='onboard-statement text-start mt-2'>Smarter</li>
                    <li className='onboard-statement text-start mt-2'>Better</li>
                    <li className='onboard-statement text-start mt-2'>Faster</li>
                    <p className='onboard-statement text-start mt-5'>
                        ZanBase is a comprehensive master data management product <br/>that offers an intriguing list of capabilities for many use cases.<br/>
                        The solution offers auto generation of PV's ,Task Scheduling service,<br/> Targets/Goals Board and Tutorials.  
                    </p>

                    <Button onClick={()=>navigate('/signup')} id='getstartbtn' className='d-flex justify-content-start mt-4'>Get Started</Button>
                    
                    
                </Col>

                    <Col className='sm-col-6 md-col-12 lg-col-6'>
                        <img className='Onboardimg' src={onboardingImg} alt='Logo'/>
                    
                    </Col>

                


            </Row>


        
            
        </Container>

        {/* Collaboration about section */}
        <Container className='mt-5'>
            <Row>
                    <Col sm={12} md={6} lg={6}>
                        <Animations>
                            <img className='w-50' src={teampic} alt='logo3'/>
                        </Animations>

                    </Col>


                <Col sm={12} md={6} lg={6} className='mt-5'>
                    <div className='d-flex justify-content-start ms-5'>
                        <img src={team} alt='team'/>
                        <h3 className='collabo-title ms-3 mt-3'>Collaborate in Target Boards</h3>
                    </div>
                    <div className='ms-5 mt-3'>
                        <p className='collabo-statement text-start'>
                        Set Targets on the board and have teams  stay connected 
                        and discuss /propose ideas or plans.  Highlight any plans on the targets board 
                        and create tasks to coordinate execution.
                        </p>

                    </div>
                </Col>
            </Row>
        </Container>
        {/* Collaboration about section */}



        <Container fluid className='pv-about-section '>
            <Row className='mt-5'>
                <Col>
                    {/* <img className='w-25' src={laptopmockup} alt='image3'/> */}
                </Col>
                

                <Col sm={12} md={6} lg={6} className='mt-5'>
                    <div className='d-flex justify-content-start ms-5'>
                        <img src={files} alt='team'/>
                        <h3 className='pv-title ms-3 mt-3'>Auto PV Generation</h3>
                    </div>
                    <div className='ms-5 mt-3'>
                        <p className='pv-statement text-start'>
                            Automate Monthly PV generation with accurate information and reduce errors and PV resubmission
                        </p>

                    </div>
                </Col>
            </Row>

        </Container>


        {/* Collaboration about section */}
        <Container className='mt-5'>
            <Row>
                    <Col sm={12} md={6} lg={6}>
                        <Animations>
                            <img className='w-50' src={teampic} alt='logo3'/>
                        </Animations>

                    </Col>


                <Col sm={12} md={6} lg={6} className='mt-5'>
                    <div className='d-flex justify-content-start ms-5'>
                        <img src={team} alt='team'/>
                        <h3 className='collabo-title ms-3 mt-3'>Collaborate in Target Boards</h3>
                    </div>
                    <div className='ms-5 mt-3'>
                        <p className='collabo-statement text-start'>
                        Set Targets on the board and have teams  stay connected 
                        and discuss /propose ideas or plans.  Highlight any plans on the targets board 
                        and create tasks to coordinate execution.
                        </p>

                    </div>
                </Col>
            </Row>
        </Container>
        {/* Collaboration about section */}

        <footer>
            <Container fluid className='footer'>
                <Row>
                    <Col className='d-flex justify-content-start mt-5 ms-2'>
                        <img  src={whitelogo} alt='footerimg'/>
                    
                    </Col>
                </Row>
            </Container>
        </footer>




    </>
  )
}

export default Onboarding