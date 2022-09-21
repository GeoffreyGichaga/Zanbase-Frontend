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
import Button from 'react-bootstrap/Button'
import docs from '../Assets/docs.png'
import sheets from '../Assets/sheets.png'
import CardGroup from 'react-bootstrap/CardGroup'





const Pv = () => {

   
    const {user} = useContext(UserContext)
    console.log(user)
    const token = localStorage.getItem("jwt")


//    Fetch the current users PV

    const generatePaymentApprovalForm = ()=> {
        fetch("http://127.0.0.1:3000/pvs",{
            method: "GET",
            mode: "cors",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(resJson => console.log(resJson))
    }

    //  Fetch payment request form 
    const generatePaymentRequestForm = ()=> {
        fetch("http://127.0.0.1:3000/payment_request",{
            method: "GET",
            mode: "cors",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(resJson => console.log(resJson))
    }


    //  Fetch payment request form 
    const generateDailyAttendanceRegister = ()=> {
        fetch("http://127.0.0.1:3000/attendances",{
            method: "GET",
            mode: "cors",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(resJson => console.log(resJson))
    }


    

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
                                <Accordion.Header className='accordionheaders'>
                                    September - October
                                    
                                    </Accordion.Header>

                                <Accordion.Body>
                                    <CardGroup>
                                    <Card className='g-4' style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>Payment Approval Form </Card.Title>
                                            <Card.Text>
                                            For the period 13th September - 13th October
                                            </Card.Text>
                                            <Button onClick={generatePaymentApprovalForm} className='ms-4'>Generate</Button>
                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>Payment Request Form </Card.Title>
                                            <Card.Text>
                                            For the period 13th September - 13th October
                                            </Card.Text>
                                            <Button onClick={generatePaymentRequestForm} className='ms-4'>Generate</Button>

                                        </Card.Body>
                                    </Card>

                                    <Card  style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>Daily Attendance Register </Card.Title>
                                            <Card.Text>
                                            For the period 13th September - 13th October
                                            </Card.Text>
                                            <Button onClick={generateDailyAttendanceRegister} className='ms-4'>Generate</Button>

                                        </Card.Body>
                                    </Card>
                                    </CardGroup>

                                   
                                </Accordion.Body>

                            </Accordion.Item>                
                        </Accordion>
                    </Col>
                </Row>

                <Row>
                    <Col className='mt-2'>
                        <Accordion  defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='accordionheaders'>
                                    October - November
                                    
                                    </Accordion.Header>
                                <Accordion.Body>
                                {/* <Button onClick={generatePv} className='ms-4'>Generate</Button> */}

                                    !.....
                                </Accordion.Body>
                            </Accordion.Item>                
                        </Accordion>
                    </Col>
                </Row>

                <Row>
                    <Col className='mt-2'>
                        <Accordion  defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='accordionheaders'>
                                    November - December
                                    
                                    </Accordion.Header>
                                <Accordion.Body>
                                {/* <Button onClick={generatePv} className='ms-4'>Generate</Button> */}

                                    !.....
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

export default Pv