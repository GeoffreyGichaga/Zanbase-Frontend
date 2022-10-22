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
import Modal from 'react-bootstrap/Modal';

import CardGroup from 'react-bootstrap/CardGroup'


 

const Pv = () => {

   
    const {user} = useContext(UserContext)
    console.log(user)
    const token = localStorage.getItem("jwt")

    // Payment Request Info (PRF)
    const [prfInfo,setPrfInfo] = useState([])

    const [lgShow, setLgShow] = useState(false);
    
        
    





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
        .then(resJson => console.log(resJson))
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
                                            <Button onClick={() => setLgShow(true)} id='generate-btns'>Previews</Button>
                                            {/* Form Modal  */}
                                            <Modal
                                                size="lg"
                                                show={lgShow}
                                                onHide={() => setLgShow(false)}
                                                aria-labelledby="example-modal-sizes-title-lg"
                                            >
                                                <Modal.Header closeButton>
                                                <Modal.Title id="example-modal-sizes-title-lg">
                                                    {prfInfo.bank}
                                                </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                <Container>
                                                    <Row>
                                                        <Col xs={12} md={6}>
                                                            date : {prfInfo.prep_date}
                                                        </Col>
                                                        <Col xs={6} md={6}>
                                                        org: {prfInfo.org}
                                                        </Col>
                                                    </Row>

                                                    <Row>
                                                        <Col xs={12} md={6}>
                                                        program: {prfInfo.program}
                                                        </Col>
                                                        <Col xs={6} md={6}>
                                                        function: {prfInfo.function}
                                                        </Col>
                                                    </Row>

                                                    <p className='mt-5'>Intern Details </p>

                                                    <Row>
                                                        <Col xs={6} md={6}>
                                                        name: {prfInfo.name}
                                                        </Col>
                                      
                                                    </Row>

                                                    <Row>
                                                        <Col>
                                                        Intern ID: {prfInfo.employee_id}
                                                        </Col>

                                                        <Col>
                                                        Daily Stipend: 500
                                                        
                                                        </Col>
                                                    </Row>

                                                    <Row>
                                                        <Col>
                                                        Start date of the week: {prfInfo.start_day_of_the_week} 
                                                        </Col>
                                                        
                                                        <Col>
                                                        End date of the week: {prfInfo.end_date_of_the_week}
                                                        </Col>
                                                    </Row>


                                                    <Row>
                                                        <Col>
                                                        No Of days Worked: {prfInfo.number_of_days_worked}
                                                        </Col>
                                                        
                                                        <Col>
                                                        Amount Payable: {prfInfo.amount_payable}
                                                        </Col>
                                                    </Row>

                                                    <p className='mt-5'>Payment Details</p>

                                                    <Row>
                                                        Name on Account: {prfInfo.name_on_account}

                                                    </Row>

                                                    <Row>
                                                        Bank: {prfInfo.bank}
                                                    </Row>

                                                    <Row>
                                                        Account: {prfInfo.account}
                                                    </Row>

                                                    <Row>
                                                        Bank Code: {prfInfo.bank_code} 
                                                    </Row>

                                                    <Row>
                                                        Branch Code: {prfInfo.branch_code}
                                                    </Row>

                                                    <Row>
                                                       Tel: {prfInfo.telephone} 
                                                    </Row> 
                                                    
                                                    <Row className='mt-5'>
                                                    <p>Prepared By</p>

                                                        <Col>
                                                        Name: {prfInfo.name}
                                                        </Col>
                                                        <Col>
                                                        Signature: {prfInfo.user_signature_sign}

                                                        </Col>
                                                        <Col>
                                                        Date: {prfInfo.prepared_by_date}
                                                        </Col>
                                                    </Row>

                                                    <Row className='mt-3'>
                                                        <p>Approved By</p>
                                                        <Col>
                                                        Name
                                                        </Col>
                                                        <Col>
                                                        Signature
                                                        </Col>
                                                        <Col>
                                                        Date
                                                        </Col>
                                                    </Row>

                                                    <Row className='mt-3'>
                                                    <p>Authorized By</p>

                                                        <Col>
                                                        Name
                                                        </Col>
                                                        <Col>
                                                        Signature
                                                        </Col>
                                                        <Col>
                                                        Date
                                                        </Col>
                                                    </Row>
                                                    </Container>
                                                </Modal.Body>
                                            </Modal>
                                            {/* Form Modal  */}


                                            <Button onClick={generatePaymentApprovalForm} id='generate-btns' className='ms-2'>Generates</Button>

                                        </Card.Body>
                                    </Card>

                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>Payment Request Form </Card.Title>
                                            <Card.Text>
                                            For the period 13th September - 13th October
                                            </Card.Text>
                                            <Button onClick={generatePaymentRequestForm} id='generate-btns2'>Preview</Button>

                                            <Button onClick={generatePaymentRequestForm} id='generate-btns2' className='ms-2'>Generate</Button>

                                        </Card.Body>
                                    </Card>

                                    <Card  style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title>Daily Attendance Register </Card.Title>
                                            <Card.Text>
                                            For the period 13th September - 13th October
                                            </Card.Text>
                                            <Button onClick={generateDailyAttendanceRegister} id='generate-btns3'>Preview</Button>

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