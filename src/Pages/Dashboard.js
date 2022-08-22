import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../Styling/dashboard.css'
import SidePanel from '../Components/SidePanel'
import Card from 'react-bootstrap/Card'
import bellnot from '../Assets/notification.png'
import calendar from '../Assets/calendar.png'
import CardGroup from 'react-bootstrap/CardGroup'
import TutorialCards from '../Components/TutorialCards'




const Dashboard = () => {



  const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const current = new Date()
  const day = current.getDay()
  const date = current.getDate()
  const month = current.getMonth()
  const year = current.getFullYear()

  const displayDay = week[day]
  const fullDate = `${date} / ${month}/ ${year}`


  const [allTargets,setAllTargets] = useState([])

  useEffect(() => {
    
    fetch("https://zanbase-backend.herokuapp.com/targets")
    .then(res => res.json())
    .then(data => setAllTargets(data))

  },[])

  
  const displayTopTargets = allTargets.map((targs)=>(

        <Card id='toptargetscard1' className='p-2'>
            <Card.Body>
            <Card.Title>{targs.title}</Card.Title>
            <Card.Text>
            {targs.description}
                
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small id='targets-footer1' >Last updated 3 mins ago</small>
            </Card.Footer>
      </Card>
  ))
 





  return (
    <>
      <Container fluid className='dashpanel'>
        <Row>
          <Col sm={12} md={6} lg={2} className='sidepanel'>

              <SidePanel/>
          </Col>

          <Col sm={12} md={6} lg={8} className='mt-1' >
            <CardGroup>
           
              <Card  className='infocards mt-2'>
                <Card.Body>
                  <div className='d-flex justify-content-between'>
                    <Card.Title className='card-title text-start mt-2'>{displayDay}</Card.Title>
                    

                  </div>
                  <Card.Text className='card-info d-flex text-start mt-4'>
                    <img className='calendaricon' src={calendar} alt='calendar'/>
                    <p className='fulldate ms-3'>{fullDate}</p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className='text-start'>Hello! </Card.Footer>
              </Card>

              <Card className='infocards mt-5 ms-lg-3'>
                <Card.Body>
                  <div className='d-flex justify-content-between'>
                    <Card.Title className='card-title text-start mt-2'>Notifications</Card.Title>
                    <span className='yellowcircle'>
                      <img className='bellicon ms-1 mt-2' src={bellnot} alt='bell'/>
                    </span>

                  </div>
                  <Card.Text className='card-info text-start mt-4'>
                    No Notifications
                  </Card.Text>
                </Card.Body>
              </Card>

            </CardGroup>
            
            {/* Top Targets */}
            <CardGroup className='targetsgroup  mt-5'>
              {displayTopTargets}

            </CardGroup>

            {/* End of Top Targets */}

            {/* Featured Tutorials */}
            <TutorialCards/>

            {/* End of Featured Tutorials */}


 
          </Col>

          

          
          

            
            

            

        </Row>
        


          

        
          

      </Container>
      {/* <Card className='infocards '>
                    <Card.Body>
                      <div className='d-flex justify-content-between'>
                        <Card.Title className='card-title text-start mt-2'>Notifications</Card.Title>
                        <span className='yellowcircle'>
                          <img className='bellicon ms-1 mt-2' src={bellnot} alt='bell'/>
                        </span>

                      </div>
                      <Card.Text className='card-info text-start mt-4'>
                        No Notifications
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col> */}
    </>
  )
}

export default Dashboard


