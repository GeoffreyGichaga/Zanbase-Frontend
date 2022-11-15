import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideMenu from './SideMenu'
import Accordion from 'react-bootstrap/Accordion';




const AccountsPv = () => {
  return (
    <>
    <Container fluid>
      
      <Row>

        <Col sm={12} md={6} lg={2} className='sidepanel'>
          <SideMenu/>
        </Col>



        {/* Pv approval process */}

        <Col>
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>ZAP PVs to Approve</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>ZAP PVS approved by Finance</Accordion.Header>
                <Accordion.Body>
                
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>ZAP PVS approved by Roopal + Finance</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                
                </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="3">
                <Accordion.Header>ZAP PVS payment confirmed</Accordion.Header>
                <Accordion.Body>
                
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
                <Accordion.Header>ZAP PVS uploaded to quickbooks</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                
                </Accordion.Body>
            </Accordion.Item>
            
            <Accordion.Item eventKey="5">
                <Accordion.Header>ZAP PVS reject</Accordion.Header>
                <Accordion.Body>
                
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>


            
        
        </Col>
        

      </Row>
    </Container>

    </>
  )
}

export default AccountsPv