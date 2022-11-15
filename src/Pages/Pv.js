import React, { useState } from 'react'
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

import CardGroup from 'react-bootstrap/CardGroup'

 import PaymentApprovalModal from '../Components/PaymentApprovalModal'
import AttendanceRegisterModal from '../Components/AttendanceRegisterModal'
import PaymentRequestModal from '../Components/PaymentRequestModal'

const Pv = () => {

   
    const {user} = useContext(UserContext)
    console.log(user)
    const token = localStorage.getItem("jwt")

    // Payment Approval Form (PAF) modal
    const [prfInfo,setPrfInfo] = useState([])

    const [approvalShow, setApprovalShow] = useState(false);
    const handleClose = () => setApprovalShow(false);
    const handleShow = () => {
        generatePaymentApprovalForm()
        setApprovalShow(true)
    };
        


    // Payment Request Form Modal 
    const [payementInfo,setPaymentInfo] = useState([])

    const [showPayement,setShowPayment] =  useState(false)
    const closePaymentInfo = () => setShowPayment(false);
    const showPaymentInfo = () => {
        generatePaymentRequestForm()
        setShowPayment(true)
    };










    // Daily Attendance Register Modal

    const [attendanceInfo,setAttendanceInfo] = useState([])

    const [attendaceShow,setAttendanceShow] =  useState(false)
    const closeAttendance = () => setAttendanceShow(false);
    const showAttendance = () => {

        generateDailyAttendanceRegister()
        setAttendanceShow(true)


    };






















//    Fetch the current users Payment Approval form 
    const generatePaymentApprovalForm = ()=> {
        fetch("http://127.0.0.1:3000/payment_approval_forms",{
            method: "GET",
            mode: "cors",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(resJson => setPrfInfo(resJson))
    }


     

    //  Fetch the current users payment request form 
    const generatePaymentRequestForm = ()=> {
        fetch("http://127.0.0.1:3000/payment_request_forms",{
            method: "GET",
            mode: "cors",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(resJson => setPaymentInfo(resJson))
    }


    //  Fetch the current users Attendance Register history 
    const generateDailyAttendanceRegister = ()=> {
        fetch("http://127.0.0.1:3000/attendances",{
            method: "GET",
            mode: "cors",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(resJson => setAttendanceInfo(resJson))
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
                                <Accordion.Header  className='accordionheaders'>
                                    <h5 className='acc-header'>September - October</h5>
                                    
                                    </Accordion.Header>

                                <Accordion.Body>
                                    <CardGroup>
                                    <Card className='g-4' style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>Payment Approval Form </Card.Title>
                                            <Card.Text>
                                            For the period 13th September - 13th October
                                            </Card.Text>
                                            <Button onClick={handleShow} id='generate-btns'>Previews</Button>
                                          

                                            <PaymentApprovalModal showModal={approvalShow} prfInfo={prfInfo} hideModal={handleClose} />


                                            <Button onClick={generatePaymentApprovalForm} id='generate-btns' className='ms-2'>Generates</Button>

                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>Payment Request Form </Card.Title>
                                            <Card.Text>
                                            For the period 13th September - 13th October
                                            </Card.Text>
                                            <Button onClick={showPaymentInfo} id='generate-btns2'>Preview</Button>


                                                <PaymentRequestModal paymentRequestInfo={payementInfo} showModal={showPayement} hideModal={closePaymentInfo}/>



                                            <Button onClick={generatePaymentRequestForm} id='generate-btns2' className='ms-2'>Generate</Button>

                                        </Card.Body>
                                    </Card>

                                    <Card  style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>Daily Attendance Register </Card.Title>
                                            <Card.Text>
                                            For the period 13th September - 13th October
                                            </Card.Text>
                                            <Button onClick={showAttendance} id='generate-btns3'>Preview</Button>




                                            <AttendanceRegisterModal AttendanceInfo={attendanceInfo} showModal={attendaceShow} hideModal={closeAttendance}/>




                                            <Button onClick={generateDailyAttendanceRegister} id='generate-btns3' className='ms-2'>Generate</Button>

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
                                <h5 className='acc-header'>October -  November</h5>
                                    
                                    </Accordion.Header>
                                <Accordion.Body>
                                {/* <Button onClick={generatePv} className='ms-4'>Generate</Button> */}

                                                               
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
                                <h5 className='acc-header'>November - December</h5>
                                    
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