import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SidePanel from '../Components/SidePanel'
import Card from 'react-bootstrap/Card'
import { UserContext } from '../custom-hooks/user'
import Accordion from 'react-bootstrap/Accordion'
import '../Styling/pv.css'
import { useContext } from 'react'







const Task = () => {

    const {user} = useContext(UserContext)

  return (
    <Container fluid>
        <Row>
            <Col sm={12} md={6} lg={2} className='sidepanel'>

                <SidePanel/>
            </Col>



            <Col sm={12} md={6} lg={8} className='mt-5' >
                

                <Row>
                    <Col>
                        <Card  className='infocards mt-5'>
                            <Card.Body className='d-flex justify-content-start'>
                                <span className='yellowcircle ms-2'>
                                    <h1 className='name mt-lg-0'>P</h1>
                                </span>                    

                
                                <Card.Text className='card-info ms-4 text-start'>
                                    <p className='fulldate'>PV's </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                     </Col>

                </Row>

                {/* Display PV's */}
                <Row>
                    <Col className='mt-2'>
                        <Accordion  defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='accordionheaders'>September - October</Accordion.Header>
                                <Accordion.Body>
                                    No PV's!.....
                                </Accordion.Body>
                            </Accordion.Item>                
                        </Accordion>
                    </Col>
                </Row>



            </Col>
        </Row>
        

    </Container>
  )
}

export default Task