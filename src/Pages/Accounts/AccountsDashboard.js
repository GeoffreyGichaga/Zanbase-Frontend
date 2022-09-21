import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  Container  from 'react-bootstrap/Container'
import SideMenu from './SideMenu'


const AccountsDashboard = () => {
  return (
    <>
    <Container fluid>
      
      <Row>

        <Col sm={12} md={6} lg={2} className='sidepanel'>
          <SideMenu/>
        </Col>
        

      </Row>
    </Container>

    </>
  )
}

export default AccountsDashboard