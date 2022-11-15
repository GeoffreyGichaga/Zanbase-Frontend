import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SideMenu from './SideMenu'




const AccountsPv = () => {
  return (
    <>
    <Container fluid>
      
      <Row>

        <Col sm={12} md={6} lg={2} className='sidepanel'>
          <SideMenu/>
        </Col>

        <Col>
        
            
        
        </Col>
        

      </Row>
    </Container>

    </>
  )
}

export default AccountsPv